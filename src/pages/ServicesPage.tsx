import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Wrench, Truck, PenTool as Tool, Phone, Shield, Clock, Euro, ChevronDown, Globe, Plane as Crane, Key, Settings, Warehouse, SprayCan as Spray, ShoppingBag, Heart, Flame, Slice as Police, PhoneCall, AlertTriangle } from 'lucide-react';

const services = [
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Transport Europe',
    description: 'Service de transport spécialisé dans toute l\'Europe. Transport sécurisé de tous types de véhicules : particuliers, utilitaires, prestige, collection. Devis personnalisé et suivi en temps réel. Assurance tous risques incluse.',
    image: '/images/professional-truck-driver-entering-his-truck-long-vehicle-holding-thumbs-up.webp'
  },
  {
    icon: <Car className="h-6 w-6" />,
    title: 'Assistance',
    description: 'Service d\'assistance routière disponible 24h/24 et 7j/7. Intervention rapide pour tous types de pannes. Diagnostic sur place et solutions immédiates quand possible. Équipe expérimentée et professionnelle.',
    image: '/images/man-standing-by-broken-vehicle-calling-tow-service.webp'
  },
  {
    icon: <Wrench className="h-6 w-6" />,
    title: 'Dépannage',
    description: 'Dépannage tous types de véhicules : voitures, motos, utilitaires, poids lourds. Intervention sur place pour pannes mécaniques, électriques, électroniques. Stock de pièces courantes pour réparation immédiate.',
    image: '/images/long-shot-man-swapping-tire.webp'
  },
  {
    icon: <Truck className="h-6 w-6" />,
    title: 'Remorquage',
    description: 'Service de remorquage professionnel pour tous types de véhicules. Transport sécurisé vers le garage de votre choix. Équipement adapté pour véhicules bas, sportifs ou de collection. Intervention rapide sur autoroute.',
    image: '/images/remorquage.webp'
  },
  {
    icon: <Crane className="h-6 w-6" />,
    title: 'Levage, Grutage, Treuillage',
    description: 'Services spécialisés de levage et grutage pour situations complexes. Équipement professionnel pour treuillage de véhicules. Intervention en conditions difficiles. Personnel qualifié et certifié.',
    image: '/images/levage_grutage.webp'
  },
  {
    icon: <Key className="h-6 w-6" />,
    title: 'Perte de clés',
    description: 'Service d\'intervention rapide en cas de perte ou de casse de clés. Reproduction de clés toutes marques, programmation de clés électroniques et télécommandes. Ouverture de véhicule sans dommage. Intervention sur site ou dépannage.',
    image: '/images/lose_key.webp'
  },
  {
    icon: <Warehouse className="h-6 w-6" />,
    title: 'Fourrière',
    description: 'Service agréé de mise en fourrière. Intervention sur demande des autorités ou des propriétaires. Procédure conforme à la réglementation. Stockage sécurisé et surveillance 24h/24.',
    image: '/images/fourriere01.webp'
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: 'Atelier réparation rapide',
    description: 'Atelier équipé pour réparations rapides et entretien. Diagnostic professionnel et devis transparent. Réparations courantes sans rendez-vous. Techniciens qualifiés multispécialistes.',
    image: '/images/atelier_repa.webp'
  },
  {
    icon: <Spray className="h-6 w-6" />,
    title: 'Nettoyage de véhicule',
    description: 'Service complet de nettoyage et détailing automobile. Nettoyage intérieur et extérieur professionnel. Traitement céramique et protection carrosserie. Rénovation des surfaces.',
    image: '/images/nettoyage_car.webp'
  },
  {
    icon: <ShoppingBag className="h-6 w-6" />,
    title: 'Achat-Revente de véhicules',
    description: 'Service d\'achat et de vente de véhicules toutes marques. Expertise professionnelle et transparente. Accompagnement dans les démarches administratives. Garantie satisfaction.',
    image: '/images/achat_revente.webp'
  }
];

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

const emergencyNumbers = [
  {
    name: 'SAMU',
    number: '15',
    icon: <AlertTriangle className="h-5 w-5 text-red-600" />
  },
  {
    name: 'Pompiers',
    number: '18',
    icon: <AlertTriangle className="h-5 w-5 text-red-600" />
  },
  {
    name: 'Police',
    number: '17',
    icon: <AlertTriangle className="h-5 w-5 text-blue-600" />
  },
  {
    name: 'Numéro d\'urgence européen',
    number: '112',
    icon: <AlertTriangle className="h-5 w-5 text-yellow-600" />
  }
];

const ServicesPage = () => {
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
                <p className="mt-4 text-lg font-bold">
                Nous intervenons 24h/24 et 7j/7 pour le dépannage, remorquage et transport de tous types de véhicules, de la citadine au poids lourd.
                </p>
                <p className="mt-4 text-lg font-bold">
                Assistance rapide à Toulouse et partout en Europe, avec des techniciens qualifiés et du matériel professionnel.
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

            {/* Emergency Numbers */}
            <div className="mt-8 rounded-lg bg-white p-6 shadow-lg dark:bg-dark-card">
              <h3 className="mb-4 text-xl font-semibold text-light-text dark:text-dark-text">
                Numéros d'urgence
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                {emergencyNumbers.map((emergency, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg border border-gray-200 p-4 dark:border-gray-700"
                  >
                    <div className="flex items-center">
                      {emergency.icon}
                      <span className="ml-2 font-medium text-gray-900 dark:text-gray-100">
                        {emergency.name}
                      </span>
                    </div>
                    <span className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      {emergency.number}
                    </span>
                  </div>
                ))}
              </div>
            </div>
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

export default ServicesPage;