import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, Instagram, MessageSquare } from 'lucide-react';
import { contactFormSchema, type ContactFormData, sendContactEmail, EmailSendError } from '../services/contact';
import { z } from 'zod';

// ✅ Logo Snapchat fidèle et colorable dynamiquement (Jaune/Thème)
const SnapchatIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.5c-2.4 0-4.6 1-5.6 3-.2.5-.2 1-.2 1.4 0 .4 0 .7.1 1.1-.9.4-1.5 1.3-1.5 2.3 0 .7.3 1.3.8 1.7-.1.4-.2.8-.2 1.2 0 1.2.8 2.3 1.9 2.7-.4.4-.8.9-1.1 1.4-.8-.2-1.7-.1-2.4.3-.6.3-.8 1.1-.5 1.7.2.4.6.6 1 .6.2 0 .4 0 .6-.1.4-.2.8-.3 1.2-.3.3 0 .6.1.8.2.4.2.7.5 1 .8.2-.4.6-.7 1-.8.2-.1.5-.2.8-.2.4 0 .8.1 1.2.3.2.1.4.1.6.1.4 0 .8-.2 1-.6.3-.6.1-1.4-.5-1.7-.7-.4-1.6-.5-2.4-.3-.3-.5-.7-1-1.1-1.4 1.1-.4 1.9-1.5 1.9-2.7 0-.4-.1-.8-.2-1.2.5-.4.8-1 .8-1.7 0-1-.6-1.9-1.5-2.3.1-.4.1-.7.1-1.1 0-.4 0-.9-.2-1.4-1-2-3.2-3-5.6-3z" />
  </svg>
);

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

            {/* Colonne de Gauche : Infos + Liste SEO */}
            <div className="order-1 flex flex-col gap-8">

              {/* Carte Contact Principale */}
              <div className="rounded-lg bg-white p-6 shadow-lg transition-colors dark:bg-dark-card sm:p-8">
                <h1 className="text-2xl font-bold tracking-tight text-light-text dark:text-dark-text sm:text-3xl lg:text-4xl">
                  Assistance & Dépannage Urgent à Toulouse
                </h1>
                <p className="mt-4 text-base text-gray-600 dark:text-gray-300 sm:text-lg font-medium">
                  Notre service d'auto secours est disponible 24h/24 et 7j/7 pour intervenir rapidement sur votre véhicule en panne ou accidenté.
                </p>

                <div className="mt-6 rounded-md bg-light-primary/5 p-4 border-l-4 border-light-primary dark:bg-dark-primary/10 dark:border-dark-primary">
                  <p className="text-sm sm:text-base text-light-text dark:text-dark-text font-semibold italic">
                    Pour une intervention immédiate, n'hésitez pas à nous contacter directement par téléphone, WhatsApp ou Snapchat s'il vous le préférez !
                  </p>
                </div>

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
                </div>

                {/* Social Media Links corrigés avec Jaune dynamique */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://www.instagram.com/lebon_remorquage/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 rounded-lg bg-light-primary/10 px-4 py-2 transition-colors hover:bg-light-primary/20 dark:bg-dark-primary/10 dark:hover:bg-dark-primary/20"
                  >
                    <Instagram className="h-5 w-5 text-light-primary dark:text-dark-primary" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Instagram</span>
                  </a>
                  <a
                    href="https://wa.me/33768261050"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 rounded-lg bg-light-primary/10 px-4 py-2 transition-colors hover:bg-light-primary/20 dark:bg-dark-primary/10 dark:hover:bg-dark-primary/20"
                  >
                    <MessageSquare className="h-5 w-5 text-light-primary dark:text-dark-primary" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">WhatsApp</span>
                  </a>
                  <a
                    href="https://www.snapchat.com/add/lebonremorquage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 rounded-lg bg-light-primary/10 px-4 py-2 transition-colors hover:bg-light-primary/20 dark:bg-dark-primary/10 dark:hover:bg-dark-primary/20"
                  >
                    <SnapchatIcon className="h-5 w-5 text-light-primary dark:text-dark-primary" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Snapchat</span>
                  </a>
                </div>
              </div>

              {/* Bloc SEO */}
              <div className="rounded-lg bg-light-primary/5 p-6 border border-light-primary/10 dark:bg-dark-primary/5 dark:border-dark-primary/10">
                <h2 className="text-lg font-bold text-light-text dark:text-dark-text mb-4">Nos interventions Auto Secours 31 :</h2>
                <ul className="grid grid-cols-1 gap-y-2 text-sm text-gray-600 dark:text-gray-300">
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
            </div>

            {/* Colonne de Droite : Formulaire */}
            <div className="order-2">
              <form ref={formRef} onSubmit={handleSubmit} className="rounded-lg bg-white p-6 shadow-lg transition-colors dark:bg-dark-card sm:p-8">
                <h2 className="mb-6 text-xl font-bold text-light-text dark:text-dark-text">Formulaire de demande d'assistance</h2>

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

                  <div className="grid gap-6 sm:grid-cols-2">
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
                      Détails de votre demande
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Indiquez ici votre localisation précise ou toute information utile..."
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
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="mt-4 rounded-md bg-green-50 p-4 dark:bg-green-900">
                      <p className="text-green-800 dark:text-green-200 font-bold">
                        Votre message a été envoyé avec succès. Un dépanneur va vous recontacter rapidement.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mt-4 rounded-md bg-red-50 p-4 dark:bg-red-900">
                      <p className="text-red-800 dark:text-red-200">
                        {errorMessage || 'Une erreur est survenue lors de l\'envoi. Merci de nous appeler directement.'}
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