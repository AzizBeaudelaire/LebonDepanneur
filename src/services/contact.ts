import { z } from 'zod';
import emailjs from '@emailjs/browser';

// Contact form validation schema
export const contactFormSchema = z.object({
  date: z.string().min(1, 'Veuillez sélectionner une date'),
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().regex(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/, 'Numéro de téléphone invalide'),
  service: z.string().min(1, 'Veuillez sélectionner un type d\'intervention'),
  vehicleModel: z.string().min(2, 'Veuillez indiquer le modèle de votre véhicule'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Initialize EmailJS with your public key
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

export class EmailSendError extends Error {
  constructor(message: string, public details?: any) {
    super(message);
    this.name = 'EmailSendError';
  }
}

// Function to send contact form data using EmailJS
export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  try {
    const templateParams = {
      date: formData.date,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      vehicleModel: formData.vehicleModel,
      message: formData.message,
    };

    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    if (response.status !== 200) {
      throw new EmailSendError('Erreur lors de l&apos;envoi du message');
    }
  } catch (error) {
    console.error('Erreur lors de l&apos;envoi:', error);
    
    if (error instanceof EmailSendError) {
      throw error;
    }

    throw new EmailSendError(
      'Une erreur est survenue lors de l&apos;envoi du message. Veuillez réessayer plus tard.'
    );
  }
};