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

// ✅ Fonction principale d’envoi du mail (Sans SMS pour éviter les erreurs 401)
export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  try {
    // 🔥 Sujet modifié : Titre intervention - Numéro - Email
    const templateParams = {
      ...formData,
      subject: `${formData.service} - ${formData.phone} - ${formData.email}`,
    };

    // ✅ Envoi de l’email via EmailJS
    const emailResponse = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    if (emailResponse.status !== 200) {
      throw new EmailSendError("Erreur lors de l'envoi du message");
    }

  } catch (error) {
    console.error("Erreur lors de l'envoi:", error);
    if (error instanceof EmailSendError) throw error;

    throw new EmailSendError(
      "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer plus tard.",
      error
    );
  }
};