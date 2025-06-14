import { z } from 'zod';
import emailjs from '@emailjs/browser';
// Schema for contact form validation using Zod
// This ensures all required fields are present and properly formatted before processing
export const contactFormSchema = z.object({
    // Required date field for scheduling the service
    date: z.string().min(1, 'Veuillez sélectionner une date'),
    // Customer name with minimum length validation
    name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
    // Email validation using Zod's built-in email validator
    email: z.string().email('Email invalide'),
    // French phone number validation using regex
    // Accepts formats: +33, 0033, or starting with 0, followed by 9 digits
    phone: z.string().regex(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/, 'Numéro de téléphone invalide'),
    // Service type selection validation
    service: z.string().min(1, 'Veuillez sélectionner un type d\'intervention'),
    // Vehicle model information
    vehicleModel: z.string().min(2, 'Veuillez indiquer le modèle de votre véhicule'),
    // Message with minimum length requirement
    message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});
// Initialize EmailJS with the public key from environment variables
// This is required before making any EmailJS API calls
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
// Custom error class for handling email sending failures
// This allows for better error handling and user feedback
export class EmailSendError extends Error {
    constructor(message, details) {
        super(message);
        this.details = details;
        this.name = 'EmailSendError';
    }
}
// Function to send SMS notifications via ClickSend API
// This is called after successful email submission to notify the service provider
const sendSMS = async (formData) => {
    // Construct the SMS message body with relevant information
    const messageBody = `Nouvelle demande :
Nom : ${formData.name}
Tel : ${formData.phone}
Service : ${formData.service}
Véhicule : ${formData.vehicleModel}
Message : ${formData.message}`;
    // Prepare the payload for ClickSend API
    const smsPayload = {
        messages: [
            {
                body: messageBody,
                to: "+33770103429", // Service provider's phone number
                source: "Le Bon Remorquage"
            }
        ]
    };
    // Get ClickSend credentials from environment variables
    const username = import.meta.env.VITE_CLICKSEND_USERNAME;
    const apiKey = import.meta.env.VITE_CLICKSEND_API_KEY;
    // Create base64 encoded authentication header
    const auth = btoa(`${username}:${apiKey}`);
    try {
        // Send POST request to ClickSend API
        const response = await fetch('https://rest.clicksend.com/v3/sms/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${auth}`
            },
            body: JSON.stringify(smsPayload)
        });
        // Check for successful response
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`ClickSend API error: ${JSON.stringify(errorData)}`);
        }
    }
    catch (error) {
        console.error('Error sending SMS:', error);
        throw new Error('Failed to send SMS notification');
    }
};
// Main function to handle contact form submission
// This sends both an email via EmailJS and an SMS via ClickSend
export const sendContactEmail = async (formData) => {
    try {
        // Send email using EmailJS
        // This uses the service ID, template ID, and public key from environment variables
        const emailResponse = await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, formData, import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
        // Check if email was sent successfully
        if (emailResponse.status !== 200) {
            throw new EmailSendError('Erreur lors de l\'envoi du message');
        }
        // After successful email sending, send SMS notification
        await sendSMS(formData);
    }
    catch (error) {
        console.error('Erreur lors de l\'envoi:', error);
        // Handle specific EmailSendError separately
        if (error instanceof EmailSendError) {
            throw error;
        }
        // Handle all other errors with a generic message
        throw new EmailSendError('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer plus tard.');
    }
};
