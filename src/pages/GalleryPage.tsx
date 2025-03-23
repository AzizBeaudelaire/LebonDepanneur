import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Truck, Info } from 'lucide-react';

const fleetVehicles = [
  {
    image: '/images/depannage.webp',
    name: 'Renault Master Dépanneuse',
    details: {
      brand: 'Renault',
      model: 'Master',
      year: 2023,
      capacity: '3.5 tonnes',
      features: [
        'Plateau basculant hydraulique',
        'Treuil électrique 4.5 tonnes',
        'Rampes d\'accès aluminium',
        'Feux de signalisation LED',
        'GPS intégré'
      ],
      quantity: 2
    }
  },
  {
    image: '/images/Mercedes-Sprinter-Assistance.webp',
    name: 'Mercedes Sprinter Assistance',
    details: {
      brand: 'Mercedes-Benz',
      model: 'Sprinter',
      year: 2022,
      capacity: '2.5 tonnes',
      features: [
        'Équipement complet de dépannage',
        'Diagnostic électronique multimarque',
        'Compresseur haute performance',
        'Outillage spécialisé',
        'Station de charge mobile'
      ],
      quantity: 1
    }
  },
  {
    image: '/images/ivecoDailyPlateau.webp',
    name: 'Iveco Daily Plateau',
    details: {
      brand: 'Iveco',
      model: 'Daily',
      year: 2023,
      capacity: '4.5 tonnes',
      features: [
        'Plateau extra-long (6m)',
        'Double treuil hydraulique',
        'Système de blocage multiple',
        'Éclairage de zone LED',
        'Caméras de manœuvre'
      ],
      quantity: 1
    }
  },
  {
    image: '/images/MAN-TGL-Porte-Voitures.webp',
    name: 'MAN TGL Porte-Voitures',
    details: {
      brand: 'MAN',
      model: 'TGL',
      year: 2022,
      capacity: '7.5 tonnes',
      features: [
        'Double plateau hydraulique',
        'Capacité 2 véhicules',
        'Treuil 8 tonnes',
        'Stabilisateurs hydrauliques',
        'Système anti-recul'
      ],
      quantity: 1
    }
  },
  {
    image: '/images/FordTransit.webp',
    name: 'Ford Transit Custom Intervention',
    details: {
      brand: 'Ford',
      model: 'Transit Custom',
      year: 2023,
      capacity: '1 tonne',
      features: [
        'Véhicule d\'intervention rapide',
        'Équipement de première urgence',
        'Outillage spécialisé',
        'Système de géolocalisation',
        'Kit de dépannage complet'
      ],
      quantity: 2
    }
  }
];

const interventionPhotos = [
  {
    image: '/images/autoroute.jpg',
    title: 'Remorquage sur autoroute',
    description: 'Intervention rapide suite à une panne moteur sur l\'A62'
  },
  {
    image: '/images/ville.jpg',
    title: 'Dépannage en ville',
    description: 'Réparation sur place d\'une batterie défectueuse en centre-ville'
  },
  {
    image: '/images/transport.jpg',
    title: 'Transport spécialisé',
    description: 'Transport sécurisé d\'un véhicule de collection'
  },
  {
    image: '/images/accident.jpg',
    title: 'Assistance accident',
    description: 'Intervention suite à un accident sur le périphérique'
  },
  {
    image: '/images/nuit.jpg',
    title: 'Dépannage nocturne',
    description: 'Intervention d\'urgence de nuit pour une panne mécanique'
  }
];

const GalleryPage = () => {
  return (
    <>
      <Helmet>
        <title>Notre Flotte - Le Bon Dépanneur Toulouse</title>
        <meta 
          name="description" 
          content="Découvrez notre flotte de véhicules de dépannage et remorquage. Une équipe professionnelle et des équipements modernes à votre service 24h/24." 
        />
      </Helmet>

      <div className="bg-light-background py-12 transition-colors dark:bg-dark-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="relative mb-16 overflow-hidden rounded-2xl bg-gradient-to-r from-light-primary to-light-hover text-white shadow-xl dark:from-dark-primary dark:to-dark-hover">
            <div className="relative z-10 p-8 sm:p-12">
              <div className="max-w-3xl">
                <h1 className="text-4xl font-bold sm:text-5xl">Notre Flotte</h1>
                <p className="mt-4 text-lg sm:text-xl">
                  Une flotte moderne et adaptée à tous types d'interventions
                </p>
              </div>
            </div>
            <div className="absolute -right-16 bottom-0 hidden opacity-10 lg:block">
              <Truck className="h-64 w-64" />
            </div>
          </div>

          {/* Fleet Section */}
          <section className="mb-16">
            <h2 className="mb-8 text-2xl font-bold text-light-text dark:text-dark-text">
              Nos Véhicules d'Intervention
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {fleetVehicles.map((vehicle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl dark:bg-dark-card"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-lg font-semibold text-white">{vehicle.name}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {vehicle.details.brand} {vehicle.details.model} ({vehicle.details.year})
                      </span>
                      <span className="rounded-full bg-light-primary/10 px-3 py-1 text-sm font-medium text-light-primary dark:bg-dark-primary/10 dark:text-dark-primary">
                        {vehicle.details.capacity}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2">
                        <Info className="mt-1 h-4 w-4 flex-shrink-0 text-light-primary dark:text-dark-primary" />
                        <ul className="text-sm text-gray-600 dark:text-gray-300">
                          {vehicle.details.features.map((feature, idx) => (
                            <li key={idx} className="list-inside list-disc">
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Quantité disponible : {vehicle.details.quantity}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Intervention Photos Section */}
          <section>
            <h2 className="mb-8 text-2xl font-bold text-light-text dark:text-dark-text">
              Nos Interventions en Images
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {interventionPhotos.map((photo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl dark:bg-dark-card"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg font-semibold text-white">{photo.title}</h3>
                      <p className="mt-1 text-sm text-gray-200">{photo.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default GalleryPage;