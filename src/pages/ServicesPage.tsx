import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Wrench, Truck, AlertTriangle, Phone, Shield, Clock, Euro, ChevronDown } from 'lucide-react';

const emergencySteps = [
  {
    icon: <AlertTriangle className="h-8 w-8" />,
    title: 'Sécuriser',
    description: 'Mettez-vous en sécurité et activez vos feux de détresse'
  },
  {
    icon: <Phone className="h-8 w-8" />,
    title: 'Contacter',
    description: 'Appelez les secours si nécessaire et votre assurance'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Protéger',
    description: 'Placez le triangle de signalisation à 30m minimum'
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
    <div className="rounded-lg border border-light-border bg-white transition-colors dark:border-dark-border dark:bg-dark-card">
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
            className="overflow-hidden"
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
          content="Découvrez nos services de dépannage automobile à Toulouse : remorquage, dépannage sur place, enlèvement de véhicules. Intervention rapide 24h/24 et 7j/7." 
        />
      </Helmet>

      <div className="bg-light-background py-12 transition-colors dark:bg-dark-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="relative mb-16 rounded-2xl bg-gradient-to-r from-light-primary to-light-hover p-8 text-white shadow-xl dark:from-dark-primary dark:to-dark-hover">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold">Services de Dépannage Auto</h1>
              <p className="mt-4 text-lg">
                Service professionnel de dépannage et remorquage disponible 24h/24 et 7j/7 sur Toulouse et sa région.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center rounded-full bg-white px-6 py-3 text-light-primary shadow-lg transition-colors hover:bg-gray-100 dark:bg-dark-background dark:text-dark-primary dark:hover:bg-dark-card"
              >
                <Phone className="mr-2 h-5 w-5" />
                Demander un dépannage
              </Link>
            </div>
            <div className="absolute bottom-0 right-0 hidden opacity-20 lg:block">
              <Car className="h-48 w-48" />
            </div>
          </div>

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
                  className="rounded-lg bg-white p-6 shadow-lg transition-colors dark:bg-dark-card"
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

          {/* Services Accordion */}
          <section className="mb-16 space-y-4">
            <AccordionItem
              title="Dépannage sur place"
              isOpen={openSection === 'panne'}
              onToggle={() => setOpenSection(openSection === 'panne' ? null : 'panne')}
            >
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Notre équipe de mécaniciens qualifiés intervient rapidement pour :
                </p>
                <ul className="list-inside list-disc space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Problèmes de batterie</li>
                  <li>Pannes mécaniques simples</li>
                  <li>Problèmes électriques</li>
                  <li>Crevaisons</li>
                  <li>Problèmes de démarrage</li>
                </ul>
              </div>
            </AccordionItem>

            <AccordionItem
              title="Service de remorquage"
              isOpen={openSection === 'remorquage'}
              onToggle={() => setOpenSection(openSection === 'remorquage' ? null : 'remorquage')}
            >
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Service de remorquage professionnel pour tous types de véhicules :
                </p>
                <ul className="list-inside list-disc space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Véhicules légers</li>
                  <li>Utilitaires</li>
                  <li>Motos</li>
                  <li>Transport vers garage ou destination choisie</li>
                </ul>
              </div>
            </AccordionItem>

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
                <a
                  href="tel:+33500000000"
                  className="inline-flex items-center rounded-full bg-white px-6 py-3 text-light-primary shadow-lg transition-colors hover:bg-gray-100 dark:bg-dark-background dark:text-dark-primary dark:hover:bg-dark-card"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Appeler maintenant
                </a>
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