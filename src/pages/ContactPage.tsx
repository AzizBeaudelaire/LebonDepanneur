import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';
import { contactFormSchema, type ContactFormData, sendContactEmail, EmailSendError } from '../services/contact';
import { z } from 'zod';

const COOLDOWN_TIME = 100; // Temps d'attente en secondes

const serviceOptions = {
  transport: "Transport de véhicule Europe",
  assistance: "Assistance routière urgente",
  depannage: "Dépannage mécanique Toulouse",
  remorquage: "Remorquage voiture / moto",
  levage: "Levage, Grutage & Treuillage",
  fourriere: "Enlèvement fourrière / épave",
  atelier: "Réparation rapide en atelier",
  clefs: "Ouverture de porte & Perte de clés",
  nettoyage: "Nettoyage & Detailing complet",
  "achat-revente": "Estimation Achat-Revente"
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

  const [cooldownTime, setCooldownTime] = useState(0);
  const [isFormEnabled, setIsFormEnabled] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (cooldownTime > 0) {
      setIsFormEnabled(false);
      timer = setInterval(() => {
        setCooldownTime((prev) => {
          if (prev <= 1) {
            setIsFormEnabled(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [cooldownTime]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormEnabled) {
      setErrorMessage(`Veuillez attendre ${cooldownTime} secondes avant de soumettre à nouveau le formulaire.`);
      return;
    }

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
      setCooldownTime(COOLDOWN_TIME);
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
        <title>Contact Dépannage Auto Toulouse | Assistance & Remorquage Urgent 31</title>
        <meta
          name="description"
          content="Besoin d'un dépannage voiture immédiat à Toulouse ? Contactez Le Bon Remorquage 24h/24 et 7j/7 pour toute assistance routière, erreur carburant ou batterie HS."
        />
      </Helmet>

      <div className="min-h-screen bg-light-background py-12 transition-colors dark:bg-dark-background sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="order-1">
              <div className="rounded-lg bg-white p-6 shadow-lg transition-colors dark:bg-dark-card sm:p-8">
                <h1 className="text-2xl font-bold tracking-tight text-light-text dark:text-dark-text sm:text-3xl lg:text-4xl">
                  Assistance & Dépannage Urgent à Toulouse
                </h1>
                <p className="mt-4 text-base text-gray-600 dark:text-gray-300 sm:text-lg">
                  Notre service d'auto secours est disponible 24h/24 et 7j/7 pour intervenir rapidement sur votre véhicule en panne ou accidenté.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-light-primary/10 dark:bg-dark-primary/10">
                      <Phone className="h-6 w-6 text-light-primary dark:text-dark-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Ligne d'urgence 24/7</p>
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
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Secteur d'intervention</p>
                      <p className="mt-1 text-base text-gray-600 dark:text-gray-300 sm:text-lg">
                        Toulouse, Blagnac et périphérie 31
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
                        Assistance routière 24h/24 - 7j/7
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://www.instagram.com/lebon_remorquage/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 rounded-lg bg-light-primary/10 px-4 py-2 transition-colors hover:bg-light-primary/20 dark:bg-dark-primary/10 dark:hover:bg-dark-primary/20"
                  >
                    <Instagram className="h-5 w-5 text-light-primary dark:text-dark-primary" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">@lebon_remorquage</span>
                  </a>
                  <a
                    href="https://wa.me/33768261050"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 rounded-lg bg-light-primary/10 px-4 py-2 transition-colors hover:bg-light-primary/20 dark:bg-dark-primary/10 dark:hover:bg-dark-primary/20"
                  >
                    <svg className="h-5 w-5 text-light-primary dark:text-dark-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span className="text-sm text-gray-600 dark:text-gray-300">07 68 26 10 50</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="order-2">
              {/* SEO Content Block */}
              <div className="mb-8 rounded-lg bg-light-primary/5 p-6 border border-light-primary/10 dark:bg-dark-primary/5 dark:border-dark-primary/10">
                <h2 className="text-lg font-bold text-light-text dark:text-dark-text mb-4">Nos interventions Auto Secours 31 :</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>• Dépannage batterie Toulouse & Booster</li>
                  <li>• Remorquage voiture, moto et utilitaire</li>
                  <li>• Dépanneuse disponible 24h/24 et 7j/7</li>
                  <li>• Remorquage parking sous-sol (accès bas)</li>
                  <li>• Erreur de carburant & Vidange réservoir</li>
                  <li>• Ouverture de porte voiture (clés oubliées)</li>
                  <li>• Assistance dépannage autoroute et rocade</li>
                  <li>• Transport de véhicule longue distance & Europe</li>
                </ul>
              </div>

              {/* Form */}
              <form ref={formRef} onSubmit={handleSubmit} className="rounded-lg bg-white p-6 shadow-lg transition-colors dark:bg-dark-card sm:p-8">
                {cooldownTime > 0 && (
                  <div className="mb-6 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                    <p className="text-blue-800 dark:text-blue-200">
                      Vous pourrez soumettre un nouveau formulaire dans {cooldownTime} secondes
                    </p>
                  </div>
                )}

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
                      className={`mt-2 block w-full rounded-lg border ${errors.date ? 'border-red-500' : 'border-light-border dark:border-dark-border'
                        } bg-white px-4 py-3 text-light-text shadow-sm transition-colors focus:border-light-primary focus:outline-none focus:ring-light-primary dark:bg-dark-background dark:text-dark-text dark:focus:border-dark-primary dark:focus:ring-dark-primary`}
                      required
                      disabled={!isFormEnabled}
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
                      className={`mt-2 block w-full rounded-lg border ${errors.name ? 'border-red-500' : 'border-light-border dark:border-dark-border'
                        } bg-white px-4 py-3 text-light-text shadow-sm transition-colors focus:border-light-primary focus:outline-none focus:ring-light-primary dark:bg-dark-background dark:text-dark-text dark:focus:border-dark-primary dark:focus:ring-dark-primary`}
                      required
                      disabled={!isFormEnabled}
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
                      className={`mt-2 block w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-light-border dark:border-dark-border'
                        } bg-white px-4 py-3 text-light-text shadow-sm transition-colors focus:border-light-primary focus:outline-none focus:ring-light-primary dark:bg-dark-background dark:text-dark-text dark:focus:border-dark-primary dark:focus:ring-dark-primary`}
                      required
                      disabled={!isFormEnabled}
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
                      className={`mt-2 block w-full rounded-lg border ${errors.phone ? 'border-red-500' : 'border-light-border dark:border-dark-border'
                        } bg-white px-4 py-3 text-light-text shadow-sm transition-colors focus:border-light-primary focus:outline-none focus:ring-light-primary dark:bg-dark-background dark:text-dark-text dark:focus:border-dark-primary dark:focus:ring-dark-primary`}
                      required
                      disabled={!isFormEnabled}
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
                      className={`mt-2 block w-full rounded-lg border ${errors.service ? 'border-red-500' : 'border-light-border dark:border-dark-border'
                        } bg-white px-4 py-3 text-light-text shadow-sm transition-colors focus:border-light-primary focus:outline-none focus:ring-light-primary dark:bg-dark-background dark:text-dark-text dark:focus:border-dark-primary dark:focus:ring-dark-primary`}
                      required
                      disabled={!isFormEnabled}
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
                      className={`mt-2 block w-full rounded-lg border ${errors.vehicleModel ? 'border-red-500' : 'border-light-border dark:border-dark-border'
                        } bg-white px-4 py-3 text-light-text shadow-sm transition-colors focus:border-light-primary focus:outline-none focus:ring-light-primary dark:bg-dark-background dark:text-dark-text dark:focus:border-dark-primary dark:focus:ring-dark-primary`}
                      required
                      disabled={!isFormEnabled}
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
                      className={`mt-2 block w-full rounded-lg border ${errors.message ? 'border-red-500' : 'border-light-border dark:border-dark-border'
                        } bg-white px-4 py-3 text-light-text shadow-sm transition-colors focus:border-light-primary focus:outline-none focus:ring-light-primary dark:bg-dark-background dark:text-dark-text dark:focus:border-dark-primary dark:focus:ring-dark-primary`}
                      required
                      disabled={!isFormEnabled}
                    />
                    {errors.message && (
                      <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !isFormEnabled}
                    className={`w-full rounded-lg bg-light-primary px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-light-hover focus:outline-none focus:ring-2 focus:ring-light-primary focus:ring-offset-2 dark:bg-dark-primary dark:hover:bg-dark-hover dark:focus:ring-dark-primary dark:focus:ring-offset-dark-background sm:text-lg ${(isSubmitting || !isFormEnabled) ? 'cursor-not-allowed opacity-70' : ''
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