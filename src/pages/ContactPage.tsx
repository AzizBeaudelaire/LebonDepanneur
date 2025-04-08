import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { contactFormSchema, type ContactFormData, sendContactEmail } from '../services/contact';
import { z } from 'zod';

export const ContactPage = () => {
  const [formData, setFormData] = useState<ContactFormData>({
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form data
      const validatedData = contactFormSchema.parse(formData);
      
      // Send form data
      await sendContactEmail(validatedData);
      
      // Reset form and show success message
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        vehicleModel: '',
        message: ''
      });
      setSubmitStatus('success');
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<ContactFormData> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error for this field
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

      <div className="bg-light-background py-24 transition-colors dark:bg-dark-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-light-text dark:text-dark-text">
                Contactez-nous
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Notre équipe est disponible 24h/24 et 7j/7 pour répondre à vos urgences.
                
              </p>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Remplissez le formulaire ci-dessous pour nous contacter, sinon vous pouvez nous contacter sur nos réseaux sociaux.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-light-primary dark:text-dark-primary" />
                  <a 
                    href="tel:0770103429" 
                    className="ml-4 flex items-center space-x-2 text-xl font-semibold text-light-primary transition-colors hover:text-light-hover dark:text-dark-primary dark:hover:text-dark-hover"
                  >
                    07 70 10 34 29
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-light-primary dark:text-dark-primary" />
                  <span className="ml-4 text-lg text-gray-600 dark:text-gray-300">hugo.mehdi197@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-light-primary dark:text-dark-primary" />
                  <span className="ml-4 text-lg text-gray-600 dark:text-gray-300">Toulouse, France</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-light-primary dark:text-dark-primary" />
                  <span className="ml-4 text-lg text-gray-600 dark:text-gray-300">Disponible 24h/24 - 7j/7</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-lg bg-white p-8 shadow-lg transition-colors dark:bg-dark-card">
              {submitStatus === 'success' && (
                <div className="mb-6 rounded-md bg-green-50 p-4 dark:bg-green-900">
                  <p className="text-green-800 dark:text-green-200">
                    Votre message a été envoyé avec succès. Nous vous contacterons dans les plus brefs délais.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 rounded-md bg-red-50 p-4 dark:bg-red-900">
                  <p className="text-red-800 dark:text-red-200">
                    Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.
                  </p>
                </div>
              )}

              <div className="space-y-6">
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
                    className={`mt-1 block w-full rounded-md border ${
                      errors.name ? 'border-red-500' : 'border-light-border dark:border-dark-border'
                    } bg-white px-3 py-2 text-light-text shadow-sm transition-colors focus:border-light-primary focus:outline-none focus:ring-light-primary dark:bg-dark-background dark:text-dark-text dark:focus:border-dark-primary dark:focus:ring-dark-primary`}
                    required
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
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
                    className={`mt-1 block w-full rounded-md border ${
                      errors.email ? 'border-red-500' : 'border-light-border dark:border-dark-border'
                    } bg-white px-3 py-2 text-light-text shadow-sm transition-colors focus:border-light-primary focus:outline-none focus:ring-light-primary dark:bg-dark-background dark:text-dark-text dark:focus:border-dark-primary dark:focus:ring-dark-primary`}
                    required
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
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
                    className={`mt-1 block w-full rounded-md border ${
                      errors.phone ? 'border-red-500' : 'border-light-border dark:border-dark-border'
                    } bg-white px-3 py-2 text-light-text shadow-sm transition-colors focus:border-light-primary focus:outline-none focus:ring-light-primary dark:bg-dark-background dark:text-dark-text dark:focus:border-dark-primary dark:focus:ring-dark-primary`}
                    required
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.phone}</p>
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
                    className={`mt-1 block w-full rounded-md border ${
                      errors.service ? 'border-red-500' : 'border-light-border dark:border-dark-border'
                    } bg-white px-3 py-2 text-light-text shadow-sm transition-colors focus:border-light-primary focus:outline-none focus:ring-light-primary dark:bg-dark-background dark:text-dark-text dark:focus:border-dark-primary dark:focus:ring-dark-primary`}
                    required
                  >
                    <option value="">Sélectionnez le type d'intervention</option>
                    <option value="transport">Transport Europe</option>
                    <option value="assistance">Assistance</option>
                    <option value="depannage">Dépannage</option>
                    <option value="remorquage">Remorquage</option>
                    <option value="levage">Levage, Grutage, Treuillage</option>
                    <option value="fourriere">Fourrière</option>
                    <option value="atelier">Atelier réparation rapide</option>
                    <option value="clefs">Perte de cléfs</option>
                    <option value="nettoyage">Nettoyage de véhicule</option>
                    <option value="achat-revente">Achat-Revente de véhicules</option>
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.service}</p>
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
                    className={`mt-1 block w-full rounded-md border ${
                      errors.vehicleModel ? 'border-red-500' : 'border-light-border dark:border-dark-border'
                    } bg-white px-3 py-2 text-light-text shadow-sm transition-colors focus:border-light-primary focus:outline-none focus:ring-light-primary dark:bg-dark-background dark:text-dark-text dark:focus:border-dark-primary dark:focus:ring-dark-primary`}
                    required
                  />
                  {errors.vehicleModel && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.vehicleModel}</p>
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
                    className={`mt-1 block w-full rounded-md border ${
                      errors.message ? 'border-red-500' : 'border-light-border dark:border-dark-border'
                    } bg-white px-3 py-2 text-light-text shadow-sm transition-colors focus:border-light-primary focus:outline-none focus:ring-light-primary dark:bg-dark-background dark:text-dark-text dark:focus:border-dark-primary dark:focus:ring-dark-primary`}
                    required
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full rounded-md bg-light-primary px-4 py-2 text-white transition-colors hover:bg-light-hover focus:outline-none focus:ring-2 focus:ring-light-primary focus:ring-offset-2 dark:bg-dark-primary dark:hover:bg-dark-hover dark:focus:ring-dark-primary dark:focus:ring-offset-dark-background ${
                    isSubmitting ? 'cursor-not-allowed opacity-70' : ''
                  }`}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};