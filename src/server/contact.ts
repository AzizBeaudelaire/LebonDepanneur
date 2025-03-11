import nodemailer from 'nodemailer';
import twilio from 'twilio';
import { ContactFormData } from '../services/contact';

// Email configuration
const emailTransporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Twilio configuration
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Free Mobile SMS API configuration
const sendFreeMobileSMS = async (message: string) => {
  const url = `https://smsapi.free-mobile.fr/sendmsg?user=${process.env.FREE_MOBILE_USER}&pass=${process.env.FREE_MOBILE_PASS}&msg=${encodeURIComponent(message)}`;
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Erreur lors de l\'envoi du SMS via Free Mobile');
  }
};

export const handleContactForm = async (formData: ContactFormData) => {
  try {
    // Send email
    await emailTransporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: `Nouvelle demande de dépannage - ${formData.service}`,
      text: `
        Nouvelle demande de dépannage :
        
        Nom : ${formData.name}
        Email : ${formData.email}
        Téléphone : ${formData.phone}
        Type d'intervention : ${formData.service}
        
        Message :
        ${formData.message}
      `,
      html: `
        <h2>Nouvelle demande de dépannage</h2>
        
        <p><strong>Nom :</strong> ${formData.name}</p>
        <p><strong>Email :</strong> ${formData.email}</p>
        <p><strong>Téléphone :</strong> ${formData.phone}</p>
        <p><strong>Type d'intervention :</strong> ${formData.service}</p>
        
        <h3>Message :</h3>
        <p>${formData.message}</p>
      `,
    });

    // Prepare SMS message
    const smsMessage = `
🚗 Nouvelle demande de dépannage :
Nom : ${formData.name}
Tel : ${formData.phone}
Type : ${formData.service}
Message : ${formData.message.substring(0, 100)}${formData.message.length > 100 ? '...' : ''}
    `.trim();

    // Send SMS based on configuration
    if (process.env.SMS_PROVIDER === 'free') {
      await sendFreeMobileSMS(smsMessage);
    } else {
      await twilioClient.messages.create({
        body: smsMessage,
        to: process.env.TOWING_PHONE_NUMBER!,
        from: process.env.TWILIO_PHONE_NUMBER,
      });
    }

    return { success: true };
  } catch (error) {
    console.error('Error handling contact form:', error);
    throw new Error('Failed to process contact form');
  }
};