import { z } from 'zod';
import emailjs from '@emailjs/browser';

// ✅ Schéma de validation du formulaire avec Zod
export const contactFormSchema = z.object({
  date: z.string().min(1, 'Veuillez sélectionner une date'),
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z
    .string()
    .regex(
      /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
      'Numéro de téléphone invalide'
    ),
  service: z.string().min(1, "Veuillez sélectionner un type d'intervention"),
  vehicleModel: z.string().min(2, 'Veuillez indiquer le modèle de votre véhicule'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// ✅ Initialisation d’EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

// ✅ Classe d’erreur personnalisée
export class EmailSendError extends Error {
  constructor(message: string, public details?: any) {
    super(message);
    this.name = 'EmailSendError';
  }
}

// ✅ Vérification de type pour les erreurs
const hasResponse = (error: unknown): error is { response: any } => {
  return typeof error === 'object' && error !== null && 'response' in error;
};
const hasText = (error: unknown): error is { text: any } => {
  return typeof error === 'object' && error !== null && 'text' in error;
};

// ✅ Fonction d’envoi de SMS via ClickSend (facultatif)
const sendSMS = async (formData: ContactFormData): Promise<void> => {
  const messageBody = `Nouvelle demande :
Nom : ${formData.name}
Tel : ${formData.phone}
Service : ${formData.service}
Véhicule : ${formData.vehicleModel}
Message : ${formData.message}`;

  const smsPayload = {
    messages: [
      {
        body: messageBody,
        to: '+33770103429',
        source: 'Le Bon Remorquage',
      },
    ],
  };

  const username = import.meta.env.VITE_CLICKSEND_USERNAME;
  const apiKey = import.meta.env.VITE_CLICKSEND_API_KEY;
  const auth = btoa(`${username}:${apiKey}`);

  try {
    const response = await fetch('https://rest.clicksend.com/v3/sms/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify(smsPayload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`ClickSend API error: ${JSON.stringify(errorData)}`);
    }
  } catch (error) {
    console.error('Error sending SMS:', error);
    throw new Error('Failed to send SMS notification');
  }
};

// ✅ Fonction principale d’envoi du mail
export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  try {
    console.log('=== DEBUG: Données envoyées à EmailJS ===');
    console.log('FormData:', formData);
    console.log('==========================================');

    // 🔥 Ajout du sujet dynamique (Type - Tel - Date)
    const templateParams = {
      ...formData,
      subject: `${formData.service} - ${formData.phone} - ${formData.date}`,
    };

    // ✅ Envoi de l’email via EmailJS
    const emailResponse = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    console.log('EmailJS Response:', emailResponse);

    if (emailResponse.status !== 200) {
      throw new EmailSendError("Erreur lors de l'envoi du message");
    }

    // ✅ Envoi SMS en parallèle
    await sendSMS(formData);
  } catch (error) {
    console.error("Erreur lors de l'envoi:", error);

    if (hasResponse(error)) console.error('Error response:', error.response);
    if (hasText(error)) console.error('Error text:', error.text);

    if (error instanceof EmailSendError) throw error;

    throw new EmailSendError(
      "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer plus tard.",
      error
    );
  }
};
