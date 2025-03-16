import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Wrench, Truck, AlertTriangle, Phone, Shield, Clock, Euro, ChevronDown, Battery, PenTool as Tool, Key, Fuel, MapPin, Globe, Slice as Police } from 'lucide-react';

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

const services = [
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Transport Europe',
    description: 'Service de transport spécialisé dans toute l\'Europe. Transport sécurisé de véhicules de collection, de luxe ou accidentés. Devis personnalisé et suivi en temps réel de votre transport. Assurance tous risques et transport sous bâche disponible.',
    image: 'https://images.unsplash.com/photo-1519666336592-e225a99dcd2f?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: <Wrench className="h-6 w-6" />,
    title: 'Dépannage sur place',
    description: 'Intervention rapide pour tout type de panne : mécanique, électrique, électronique. Diagnostic professionnel et réparation sur place quand c\'est possible. Équipe expérimentée disponible 24h/24. Stock de pièces courantes pour réparation immédiate.',
    image: 'https://images.unsplash.com/photo-1632823471565-1ecdf0c6da77?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: <Truck className="h-6 w-6" />,
    title: 'Remorquage',
    description: 'Service de remorquage professionnel pour tous types de véhicules. Transport sécurisé vers le garage de votre choix. Équipement adapté pour véhicules bas, sportifs ou de collection. Intervention rapide sur autoroute et voies rapides.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: <Police className="h-6 w-6" />,
    title: 'Mise en Fourrière',
    description: 'Service agréé pour la mise en fourrière de véhicules. Intervention sur demande des autorités ou des propriétaires privés. Procédure conforme à la réglementation en vigueur. Stockage sécurisé et surveillance 24h/24 de votre véhicule.',
    image: 'https://images.unsplash.com/photo-1589754340618-28778ee0b404?auto=format&fit=crop&q=80&w=800'
  },
  {
    icon: <Battery className="h-6 w-6" />,
    title: 'Batterie déchargée',
    description: 'Service de dépannage batterie avec diagnostic complet du système de charge. Remplacement sur place si nécessaire avec batteries de qualité premium. Garantie constructeur préservée. Test gratuit de l\'alternateur et du démarreur.',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=800'
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
          content="Découvrez nos services de dépannage automobile à Toulouse : remorquage, dépannage sur place, enlèvement de véhicules. Intervention rapide 24h/24 et 7j/7." 
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
                  Intervention rapide 24h/24 et 7j/7 sur Toulouse et sa région
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
              title="Dépannage sur place"
              isOpen={openSection === 'panne'}
              onToggle={() => setOpenSection(openSection === 'panne' ? null : 'panne')}
            >
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Notre équipe de mécaniciens qualifiés intervient rapidement pour :
                </p>
                <ul className="grid gap-4 sm:grid-cols-2">
                  <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                    <Battery className="h-5 w-5 text-light-primary dark:text-dark-primary" />
                    <span>Problèmes de batterie</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                    <Tool className="h-5 w-5 text-light-primary dark:text-dark-primary" />
                    <span>Pannes mécaniques simples</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                    <Wrench className="h-5 w-5 text-light-primary dark:text-dark-primary" />
                    <span>Problèmes électriques</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                    <Tool className="h-5 w-5 text-light-primary dark:text-dark-primary" />
                    <span>Crevaisons</span>
                  </li>
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
                <ul className="grid gap-4 sm:grid-cols-2">
                  <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                    <Car className="h-5 w-5 text-light-primary dark:text-dark-primary" />
                    <span>Véhicules légers</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                    <Truck className="h-5 w-5 text-light-primary dark:text-dark-primary" />
                    <span>Utilitaires</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                    <Car className="h-5 w-5 text-light-primary dark:text-dark-primary" />
                    <span>Motos</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                    <MapPin className="h-5 w-5 text-light-primary dark:text-dark-primary" />
                    <span>Transport vers garage</span>
                  </li>
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