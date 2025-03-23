import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Wrench, Truck, PenTool as Tool, Phone, Shield, Clock, Euro, ChevronDown, Globe, Plane as Crane, Key, Settings, Warehouse } from 'lucide-react';

const emergencySteps = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Sécuriser',
    description: 'Mettez-vous en sécurité et activez vos feux de détresse'
  },
  {
    icon: <Phone className="h-8 w-8" />,
    title: 'Contacter',
    description: 'Appelez les secours si nécessaire et votre assurance'
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: 'Attendre',
    description: 'Restez en sécurité en attendant notre arrivée'
  }
];

const services = [
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Transport Europe',
    description: 'Service de transport spécialisé dans toute l\'Europe. Transport sécurisé de tous types de véhicules : particuliers, utilitaires, prestige, collection. Devis personnalisé et suivi en temps réel. Assurance tous risques incluse.',
    image: '/src/images/professional-truck-driver-entering-his-truck-long-vehicle-holding-thumbs-up.webp'
  },
  {
    icon: <Car className="h-6 w-6" />,
    title: 'Assistance',
    description: 'Service d\'assistance routière disponible 24h/24 et 7j/7. Intervention rapide pour tous types de pannes. Diagnostic sur place et solutions immédiates quand possible. Équipe expérimentée et professionnelle.',
    image: '/src/images/man-standing-by-broken-vehicle-calling-tow-service.webp'
  },
  {
    icon: <Wrench className="h-6 w-6" />,
    title: 'Dépannage',
    description: 'Dépannage tous types de véhicules : voitures, motos, utilitaires, poids lourds. Intervention sur place pour pannes mécaniques, électriques, électroniques. Stock de pièces courantes pour réparation immédiate.',
    image: '/src/images/long-shot-man-swapping-tire.webp'
  },
  {
    icon: <Truck className="h-6 w-6" />,
    title: 'Remorquage',
    description: 'Service de remorquage professionnel pour tous types de véhicules. Transport sécurisé vers le garage de votre choix. Équipement adapté pour véhicules bas, sportifs ou de collection. Intervention rapide sur autoroute.',
    image: '/src/images/remorquage.webp'
  },
  {
    icon: <Crane className="h-6 w-6" />,
    title: 'Levage, Grutage, Treuillage',
    description: 'Services spécialisés de levage et grutage pour situations complexes. Équipement professionnel pour treuillage de véhicules. Intervention en conditions difficiles. Personnel qualifié et certifié.',
    image: '/src/images/services/levage.jpg'
  },
  {
    icon: <Key className="h-6 w-6" />,
    title: 'Location',
    description: 'Service de location de véhicules de remplacement. Large gamme disponible : citadines, berlines, utilitaires. Solutions flexibles adaptées à vos besoins. Tarifs compétitifs et transparents.',
    image: '/src/images/services/location.jpg'
  },
  {
    icon: <Warehouse className="h-6 w-6" />,
    title: 'Fourrière',
    description: 'Service agréé de mise en fourrière. Intervention sur demande des autorités ou des propriétaires. Procédure conforme à la réglementation. Stockage sécurisé et surveillance 24h/24.',
    image: '/src/images/fourriere01.webp'
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: 'Atelier réparation rapide',
    description: 'Atelier équipé pour réparations rapides et entretien. Diagnostic professionnel et devis transparent. Réparations courantes sans rendez-vous. Techniciens qualifiés multispécialistes.',
    image: '/src/images/services/atelier.jpg'
  }
];

const pricingZones = [
  {
    zone: 'Centre-ville',
    jour: '80€',
    nuit: '100€',
    weekend: '120€'
  },
  {
    zone: 'Périphérie',
    jour: '100€',
    nuit: '120€',
    weekend: '140€'
  },
  {
    zone: 'Autoroute',
    jour: '120€',
    nuit: '140€',
    weekend: '160€'
  }
];

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-light-border bg-white transition-all dark:border-dark-border dark:bg-dark-card">
      <button
        className="flex w-full items-center justify-between p-4 text-left"
        onClick={onToggle}
      >
        <span className="text-lg font-semibold text-light-text dark:text-dark-text">{title}</span>
        <ChevronDown
          className={`h-5 w-5 transform text-light-primary transition-transform dark:text-dark-primary ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="border-t border-light-border p-4 dark:border-dark-border">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const ServicesPage = () => {
  const [openSection, setOpenSection] = useState<string | null>('panne');

  return (
    <>
      <Helmet>
        <title>Nos Services - Le Bon Dépanneur Toulouse</title>
        <meta 
          name="description" 
          content="Découvrez nos services complets : transport Europe, assistance, dépannage, remorquage, levage, location, fourrière et atelier de réparation rapide. Intervention 24h/24." 
        />
      </Helmet>

      <div className="bg-light-background py-12 transition-colors dark:bg-dark-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="relative mb-16 overflow-hidden rounded-2xl bg-gradient-to-r from-light-primary to-light-hover text-white shadow-xl dark:from-dark-primary dark:to-dark-hover">
            <div className="relative z-10 p-8">
              <div className="max-w-3xl">
                <h1 className="text-4xl font-bold">Services de Dépannage Auto</h1>
                <p className="mt-4 text-lg">
                  Solutions complètes de dépannage et transport dans toute l'Europe
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center rounded-full bg-white px-6 py-3 text-light-primary transition-colors hover:bg-gray-100 dark:text-dark-primary"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    <span className="font-semibold">Appeler maintenant</span>
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center rounded-full border-2 border-white px-6 py-3 text-white transition-colors hover:bg-white hover:text-light-primary"
                  >
                    Demander un devis
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute -right-16 bottom-0 hidden opacity-10 lg:block">
              <Car className="h-64 w-64" />
            </div>
          </div>

          {/* Services Grid with Images */}
          <section className="mb-16">
            <h2 className="mb-8 text-2xl font-bold text-light-text dark:text-dark-text">
              Nos services d'intervention
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl dark:bg-dark-card"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center text-white">
                      <div className="rounded-full bg-light-primary/90 p-2 dark:bg-dark-primary/90">
                        {service.icon}
                      </div>
                      <h3 className="ml-3 text-lg font-semibold">{service.title}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Emergency Steps */}
          <section className="mb-16">
            <h2 className="mb-8 text-2xl font-bold text-light-text dark:text-dark-text">
              En cas d'urgence
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {emergencySteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="rounded-lg bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:bg-dark-card"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-light-primary/10 text-light-primary dark:bg-dark-primary/10 dark:text-dark-primary">
                    {step.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-light-text dark:text-dark-text">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Accordion Section */}
          <section className="mb-16 space-y-4">
            <AccordionItem
              title="Tarifs et zones d'intervention"
              isOpen={openSection === 'tarifs'}
              onToggle={() => setOpenSection(openSection === 'tarifs' ? null : 'tarifs')}
            >
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-light-border dark:divide-dark-border">
                  <thead>
                    <tr>
                      <th className="bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:bg-dark-card/50 dark:text-gray-300">
                        Zone
                      </th>
                      <th className="bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:bg-dark-card/50 dark:text-gray-300">
                        Jour (8h-20h)
                      </th>
                      <th className="bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:bg-dark-card/50 dark:text-gray-300">
                        Nuit (20h-8h)
                      </th>
                      <th className="bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:bg-dark-card/50 dark:text-gray-300">
                        Week-end/Férié
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-light-border bg-white dark:divide-dark-border dark:bg-dark-card">
                    {pricingZones.map((zone, index) => (
                      <tr key={index}>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-300">
                          {zone.zone}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-300">
                          {zone.jour}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-300">
                          {zone.nuit}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-300">
                          {zone.weekend}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AccordionItem>
          </section>

          {/* CTA Section */}
          <section className="rounded-lg bg-light-primary p-8 text-white dark:bg-dark-primary">
            <div className="text-center">
              <h2 className="text-2xl font-bold">Besoin d'une intervention urgente ?</h2>
              <p className="mt-4">
                Notre équipe est disponible 24h/24 et 7j/7 pour vous assister.
              </p>
              <div className="mt-6 flex justify-center space-x-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 text-light-primary shadow-lg transition-colors hover:bg-gray-100 dark:bg-dark-background dark:text-dark-primary dark:hover:bg-dark-card"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Appeler maintenant
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-full border-2 border-white px-6 py-3 text-white transition-colors hover:bg-white hover:text-light-primary dark:hover:text-dark-primary"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};