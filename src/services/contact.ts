import { z } from 'zod';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().regex(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/, 'Numéro de téléphone invalide'),
  service: z.string().min(1, 'Veuillez sélectionner un type d\'intervention'),
  vehicleModel: z.string().min(2, 'Veuillez indiquer le modèle de votre véhicule'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Function to send contact form data to Firebase
export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  try {
    // Add document to Firestore
    await addDoc(collection(db, 'contacts'), {
      ...formData,
      createdAt: serverTimestamp()
    });
  } catch (error) {
    console.error('Erreur:', error);
    throw new Error('Erreur lors de l\'envoi du formulaire');
  }
};