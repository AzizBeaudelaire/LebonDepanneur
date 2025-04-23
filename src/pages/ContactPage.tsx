import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';
import { contactFormSchema, type ContactFormData, sendContactEmail, EmailSendError } from '../services/contact';
import { z } from 'zod';

const serviceOptions = {
  transport: "Transport Europe",
  assistance: "Assistance",
  depannage: "Dépannage",
  remorquage: "Remorquage",
  levage: "Levage, Grutage, Treuillage",
  fourriere: "Fourrière",
  atelier: "Atelier réparation rapide",
  clefs: "Perte de clés",
  nettoyage: "Nettoyage de véhicule",
  "achat-revente": "Achat-Revente de véhicules"
};

export const ContactPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<ContactFormData>({
    date: '',
    name: '',
    email: '',
    phone: '',
    service: '',
    vehicleModel: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    setErrorMessage('');

    try {
      const validatedData = contactFormSchema.parse({
        ...formData,
        service: serviceOptions[formData.service as keyof typeof serviceOptions] || formData.service
      });
      await sendContactEmail(validatedData);
      setFormData({
        date: '',
        name: '',
        email: '',
        phone: '',
        service: '',
        vehicleModel: '',
        message: ''
      });
      setSubmitStatus('success');
    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
      
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<ContactFormData> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
        setErrorMessage('Veuillez corriger les erreurs dans le formulaire.');
      } else if (error instanceof EmailSendError) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('Une erreur inattendue est survenue. Veuillez réessayer.');
      }
      
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name as keyof ContactFormData]) {
      setErrors({
        ...errors,
        [e.target.name]: undefined
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Contactez-nous - Le Bon Dépanneur Toulouse</title>
        <meta 
          name="description" 
          content="Contactez notre service de dépannage automobile à Toulouse. Disponible 24h/24 et 7j/7 pour toutes vos urgences." 
        />
      </Helmet>

      <div className="min-h-screen bg-light-background py-12 transition-colors dark:bg-dark-background sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="order-1">
              <div className="rounded-lg bg-white p-6 shadow-lg transition-colors dark:bg-dark-card sm:p-8">
                <h1 className="text-2xl font-bold tracking-tight text-light-text dark:text-dark-text sm:text-3xl lg:text-4xl">
                  Contactez-nous
                </h1>
                <p className="mt-4 text-base text-gray-600 dark:text-gray-300 sm:text-lg">
                  Notre équipe est disponible 24h/24 et 7j/7 pour répondre à vos urgences.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-light-primary/10 dark:bg-dark-primary/10">
                      <Phone className="h-6 w-6 text-light-primary dark:text-dark-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Téléphone</p>
                      <a 
                        href="tel:0768261050" 
                        className="mt-1 block text-lg font-semibold text-light-primary transition-colors hover:text-light-hover dark:text-dark-primary dark:hover:text-dark-hover sm:text-xl"
                      >
                        07 68 26 10 50
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-light-primary/10 dark:bg-dark-primary/10">
                      <Mail className="h-6 w-6 text-light-primary dark:text-dark-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</p>
                      <a 
                        href="mailto:contactlebondepannage@gmail.com"
                        className="mt-1 block text-base text-gray-600 transition-colors hover:text-light-primary dark:text-gray-300 dark:hover:text-dark-primary sm:text-lg"
                      >
                        contactlebondepannage@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-light-primary/10 dark:bg-dark-primary/10">
                      <MapPin className="h-6 w-6 text-light-primary dark:text-dark-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Adresse</p>
                      <p className="mt-1 text-base text-gray-600 dark:text-gray-300 sm:text-lg">
                        Toulouse, France
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-light-primary/10 dark:bg-dark-primary/10">
                      <Clock className="h-6 w-6 text-light-primary dark:text-dark-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Disponibilité</p>
                      <p className="mt-1 text-base text-gray-600 dark:text-gray-300 sm:text-lg">
                        24h/24 - 7j/7
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://instagram.com/depannage_toulouse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 rounded-lg bg-light-primary/10 px-4 py-2 transition-colors hover:bg-light-primary/20 dark:bg-dark-primary/10 dark:hover:bg-dark-primary/20"
                  >
                    <Instagram className="h-5 w-5 text-light-primary dark:text-dark-primary" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">@depannage_toulouse</span>
                  </a>
                  <a
                    href="https://wa.me/33768261050"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 rounded-lg bg-light-primary/10 px-4 py-2 transition-colors hover:bg-light-primary/20 dark:bg-dark-primary/10 dark:hover:bg-dark-primary/20"
                  >
                    <svg className="h-5 w-5 text-light-primary dark:text-dark-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span className="text-sm text-gray-600 dark:text-gray-300">WhatsApp</span>
                  </a>
                  <a
                    href="https://snapchat.com/t/4NlfPTuX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 rounded-lg bg-light-primary/10 px-4 py-2 transition-colors hover:bg-light-primary/20 dark:bg-dark-primary/10 dark:hover:bg-dark-primary/20"
                  >
                    <svg className="h-5 w-5 text-light-primary dark:text-dark-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.448-1.679.809-.766.495-1.429.92-2.684.92-.015 0-.039 0-.054 0h-.031c-1.29 0-1.953-.42-2.744-.93-.57-.361-1.094-.704-1.694-.809-.314-.06-.612-.074-.912-.074-.54 0-.937.064-1.272.135-.211.039-.391.074-.54.074-.299 0-.494-.134-.554-.405-.061-.193-.09-.376-.135-.554-.045-.195-.105-.48-.164-.57-1.873-.284-2.905-.703-3.145-1.271-.03-.075-.045-.149-.045-.225-.015-.239.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.45-.884-.674-1.333-.809-.12-.045-.24-.09-.334-.119-.93-.375-1.319-.765-1.319-1.183 0-.374.324-.689.764-.923.145-.061.314-.091.494-.091.12 0 .299.015.449.104.359.18.719.285 1.019.285.201 0 .33-.044.406-.089-.012-.165-.022-.329-.034-.509l-.003-.06c-.104-1.628-.23-3.654.299-4.847 1.584-3.545 4.939-3.821 5.93-3.821z"/>
                    </svg>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Snapchat</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="order-2">
              <form ref={formRef} onSubmit={handleSubmit} className="rounded-lg bg-white p-6 shadow-lg transition-colors dark:bg-dark-card sm:p-8">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-light-text dark:text-dark-text">
                      Date souhaitée
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      value={formData.date}
                      onChange={handleChange}
                      className={`mt-2 block w-full rounded-lg border ${
                        errors.date ? 'border-red-500' : 'border-light-border dark:border-dark-border'
                      } bg-white px-4 py-3 text-light-text shadow-sm transition-colors focus:border-light-primary focus:outline-none focus:ring-light-primary dark:bg-dark-background dark:text-dark-text dark:focus:border-dark-primary dark:focus:ring-dark-primary`}
                      required
                    />
                    {errors.date && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.date}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-light-text dark:text-dark-text">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`mt-2 block w-full rounded-lg border ${
                        errors.name ? 'border-red-500' : 'border-light-border dark:border-dark-border'
                      } bg-white px-4 py-3 text-light-text shadow-sm transition-colors focus:border-light-primary focus:outline-none focus:ring-light-primary dark:bg-dark-background dark:text-dark-text dark:focus:border-dark-primary dark:focus:ring-dark-primary`}
                      required
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-light-text dark:text-dark-text">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`mt-2 block w-full rounded-lg border ${
                        errors.email ? 'border-red-500' : 'border-light-border dark:border-dark-border'
                      } bg-white px-4 py-3 text-light-text shadow-sm transition-colors focus:border-light-primary focus:outline-none focus:ring-light-primary dark:bg-dark-background dark:text-dark-text dark:focus:border-dark-primary dark:focus:ring-dark-primary`}
                      required
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-light-text dark:text-dark-text">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`mt-2 block w-full rounded-lg border ${
                        errors.phone ? 'border-red-500' : 'border-light-border dark:border-dark-border'
                      } bg-white px-4 py-3 text-light-text shadow-sm transition-colors focus:border-light-primary focus:outline-none focus:ring-light-primary dark:bg-dark-background dark:text-dark-text dark:focus:border-dark-primary dark:focus:ring-dark-primary`}
                      required
                    />
                    {errors.phone && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-light-text dark:text-dark-text">
                      Type d'intervention
                    </label>
                    <select
                      name="service"
                      id="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`mt-2 block w-full rounded-lg border ${
                        errors.service ? 'border-red-500' : 'border-light-border dark:border-dark-border'
                      } bg-white px-4 py-3 text-light-text shadow-sm transition-colors focus:border-light-primary focus:outline-none focus:ring-light-primary dark:bg-dark-background dark:text-dark-text dark:focus:border-dark-primary dark:focus:ring-dark-primary`}
                      required
                    >
                      <option value="">Sélectionnez le type d'intervention</option>
                      {Object.entries(serviceOptions).map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.service}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="vehicleModel" className="block text-sm font-medium text-light-text dark:text-dark-text">
                      Modèle du véhicule
                    </label>
                    <input
                      type="text"
                      name="vehicleModel"
                      id="vehicleModel"
                      value={formData.vehicleModel}
                      onChange={handleChange}
                      placeholder="Ex: Renault Clio 4"
                      className={`mt-2 block w-full rounded-lg border ${
                        errors.vehicleModel ? 'border-red-500' : 'border-light-border dark:border-dark-border'
                      } bg-white px-4 py-3 text-light-text shadow-sm transition-colors focus:border-light-primary focus:outline-none focus:ring-light-primary dark:bg-dark-background dark:text-dark-text dark:focus:border-dark-primary dark:focus:ring-dark-primary`}
                      required
                    />
                    {errors.vehicleModel && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.vehicleModel}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-light-text dark:text-dark-text">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`mt-2 block w-full rounded-lg border ${
                        errors.message ? 'border-red-500' : 'border-light-border dark:border-dark-border'
                      } bg-white px-4 py-3 text-light-text shadow-sm transition-colors focus:border-light-primary focus:outline-none focus:ring-light-primary dark:bg-dark-background dark:text-dark-text dark:focus:border-dark-primary dark:focus:ring-dark-primary`}
                      required
                    />
                    {errors.message && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full rounded-lg bg-light-primary px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-light-hover focus:outline-none focus:ring-2 focus:ring-light-primary focus:ring-offset-2 dark:bg-dark-primary dark:hover:bg-dark-hover dark:focus:ring-dark-primary dark:focus:ring-offset-dark-background sm:text-lg ${
                      isSubmitting ? 'cursor-not-allowed opacity-70' : ''
                    }`}
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="mt-4 rounded-md bg-green-50 p-4 dark:bg-green-900">
                      <p className="text-green-800 dark:text-green-200">
                        Votre message a été envoyé avec succès. Nous vous contacterons dans les plus brefs délais.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mt-4 rounded-md bg-red-50 p-4 dark:bg-red-900">
                      <p className="text-red-800 dark:text-red-200">
                        {errorMessage || 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.'}
                      </p>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};