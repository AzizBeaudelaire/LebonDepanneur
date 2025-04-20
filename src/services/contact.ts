import { z } from 'zod';

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

// Function to send contact form data
export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  try {
    const response = await fetch('/.netlify/functions/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Erreur lors de l\'envoi du formulaire');
    }

    const data = await response.json();
    console.log('Formulaire envoyé avec succès:', data);
  } catch (error) {
    console.error('Erreur:', error);
    throw error;
  }
};