import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Truck, Info } from 'lucide-react';

const fleetVehicles = [
  {
    image: '/images/depannage.webp',
    name: 'Renault Master Dépanneuse Toulouse',
    alt: 'Dépanneuse Renault Master avec plateau basculant pour remorquage à Toulouse 31',
    details: {
      brand: 'Renault',
      model: 'Master',
      capacity: '3.5 tonnes',
      features: [
        'Plateau basculant hydraulique',
        'Treuil hydraulique 4.5 tonnes',
        'Rampes d\'accès aluminium',
        'Panier de récupération',
        'Rampe d\'accès',
        'Gyrophare',
      ],
      quantity: 3
    }
  },
  {
    image: '/images/ivecoDailyPlateau.webp',
    name: 'Iveco Daily Plateau Remorquage',
    alt: 'Camion plateau Iveco Daily pour remorquage voiture longue distance et Europe',
    details: {
      brand: 'Iveco',
      model: 'Daily',
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
    image: '/images/FordTransit.webp',
    name: 'Ford Transit Dépannage Rapide',
    alt: 'Véhicule d\'assistance routière rapide Ford Transit intervention Toulouse',
    details: {
      brand: 'Ford',
      model: 'Transit Custom',
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
    title: 'Dépannage Batterie & Ville',
    description: 'Réparation sur place d\'une batterie HS en centre-ville de Toulouse',
    images: [
      { url: '/images/Ville_car.webp', alt: 'Dépannage batterie voiture centre-ville Toulouse' },
      { url: '/images/Ville_car2.webp', alt: 'Assistance auto secours Toulouse quartier Capitole' },
      { url: '/images/Ville_car3.webp', alt: 'Dépanneur auto intervention rapide rue de Toulouse' },
      { url: '/images/Ville_car4.webp', alt: 'Aide au démarrage voiture batterie déchargée 31' },
      { url: '/images/Ville_car5.webp', alt: 'Service auto secours de proximité Toulouse' }
    ]
  },
  {
    title: 'Remorquage Véhicule Atypique',
    description: 'Intervention de remorquage sur des véhicules spécifiques et utilitaires',
    images: [
      { url: '/images/Atypique_car.webp', alt: 'Remorquage camping-car et véhicule atypique Toulouse' },
      { url: '/images/Atypique_car2.webp', alt: 'Transport véhicule de gros gabarit 31' },
      { url: '/images/Atypique_car3.webp', alt: 'Remorquage utilitaire professionnel Toulouse' },
      { url: '/images/Atypique_car4.webp', alt: 'Dépanneuse pour véhicule spécialisé' },
      { url: '/images/Atypique_car5.webp', alt: 'Assistance remorquage véhicule spécifique' }
    ]
  },
  {
    title: 'Transport Voiture Collection',
    description: 'Transport sécurisé et remorquage de véhicule de collection',
    images: [
      { url: '/images/Transport.webp', alt: 'Transport voiture de collection remorque fermée' },
      { url: '/images/Transport2.webp', alt: 'Remorquage voiture ancienne Toulouse' },
      { url: '/images/Transport3.webp', alt: 'Transport prestige automobile longue distance' },
      { url: '/images/Transport4.webp', alt: 'Convoyage sécurisé véhicule historique' },
      { url: '/images/Transport5.webp', alt: 'Plateau remorquage spécial voiture de sport' }
    ]
  },
  {
    title: 'Assistance Accident Autoroute',
    description: 'Remorquage suite à un accident sur le périphérique ou autoroute',
    images: [
      { url: '/images/Accident_car.webp', alt: 'Remorquage accident périphérique Toulouse' },
      { url: '/images/Accident_car2.webp', alt: 'Assistance dépannage autoroute A61 A64' },
      { url: '/images/Accident_car3.webp', alt: 'Enlèvement véhicule accidenté dépanneuse 31' },
      { url: '/images/Accident_car4.webp', alt: 'Secours routier après collision Toulouse' },
      { url: '/images/Accident_car5.webp', alt: 'Remorquage d\'urgence voiture endommagée' }
    ]
  },
  {
    title: 'Dépannage Nuit Toulouse',
    description: 'Intervention d\'urgence de nuit pour dépannage mécanique 24/7',
    images: [
      { url: '/images/Nuit.webp', alt: 'Dépannage auto nuit Toulouse 24h/24' },
      { url: '/images/Nuit2.webp', alt: 'Remorquage nocturne urgence Toulouse' },
      { url: '/images/Nuit3.webp', alt: 'Assistance routière de nuit 31' },
      { url: '/images/Nuit4.webp', alt: 'Dépanneuse en intervention nocturne' },
      { url: '/images/Nuit5.webp', alt: 'Auto secours 24/7 Toulouse nuit' }
    ]
  },
  {
    title: 'Remorquage Voiture de Luxe',
    description: 'Prise en charge spécialisée pour remorquage de luxe (Ferrari, etc.)',
    images: [
      { url: '/images/Luxe_car.webp', alt: 'Remorquage Ferrari Toulouse voiture de luxe' },
      { url: '/images/Luxe_car2.webp', alt: 'Transport sécurisé voiture prestige 31' },
      { url: '/images/Luxe_car3.webp', alt: 'Remorquage supercar plateau basculant' },
      { url: '/images/Luxe_car4.webp', alt: 'Assistance haut de gamme automobile Toulouse' },
      { url: '/images/Luxe_car5.webp', alt: 'Dépanneur spécialisé véhicules de sport' }
    ]
  }
];

const ImageCarousel = ({ images, title, description }: { images: { url: string, alt: string }[], title: string, description: string }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-48 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm text-gray-200">{description}</p>
      </div>
      <div className="absolute bottom-2 right-2 flex space-x-1">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 w-1.5 rounded-full transition-all ${index === currentImageIndex
                ? 'bg-light-primary dark:bg-dark-primary'
                : 'bg-white/50'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

const GalleryPage = () => {
  return (
    <>
      <Helmet>
        <title>Flotte Dépanneuse & Remorquage Toulouse | Le Bon Remorquage</title>
        <meta
          name="description"
          content="Découvrez notre flotte de dépanneuses Renault Master et Iveco à Toulouse. Photos de nos interventions : remorquage voiture de luxe, assistance nuit et autoroute."
        />
      </Helmet>

      <div className="bg-light-background py-12 transition-colors dark:bg-dark-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Hero Section - Optimisée SEO */}
          <div className="relative mb-16 overflow-hidden rounded-2xl bg-gradient-to-r from-light-primary to-light-hover text-white shadow-xl dark:from-dark-primary dark:to-dark-hover">
            <div className="relative z-10 p-8 sm:p-12">
              <div className="max-w-3xl">
                <h1 className="text-4xl font-bold sm:text-5xl">Flotte de Dépanneuses & interventions 31</h1>
                <p className="mt-4 text-lg sm:text-xl font-bold">
                  Découvrez nos équipements d'<strong>auto secours</strong> de pointe et nos interventions de <strong>remorquage voiture et moto</strong> à Toulouse.
                </p>
                <p className="mt-4 text-base opacity-90">
                  Que ce soit pour un <strong>dépannage batterie</strong> en centre-ville, un <strong>remorquage parking sous-sol</strong> avec nos dépanneuses surbaissées, ou une <strong>assistance sur autoroute</strong> (rocade, A61, A64), nous disposons du matériel adapté à chaque situation d'urgence 24h/24.
                </p>
                <div className="mt-6 flex flex-wrap gap-2 text-sm font-medium">
                  <span className="rounded-full bg-white/20 px-3 py-1">#RemorquageToulouse</span>
                  <span className="rounded-full bg-white/20 px-3 py-1">#Depannage24/7</span>
                  <span className="rounded-full bg-white/20 px-3 py-1">#AutoSecours31</span>
                  <span className="rounded-full bg-white/20 px-3 py-1">#AssistanceRoutiere</span>
                </div>
              </div>
            </div>
            <div className="absolute -right-16 bottom-0 hidden opacity-10 lg:block">
              <Truck className="h-64 w-64" />
            </div>
          </div>

          <section className="mb-16">
            <h2 className="mb-8 text-2xl font-bold text-light-text dark:text-dark-text">
              Nos Véhicules d'Auto Secours
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
                      alt={vehicle.alt}
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
                        {vehicle.details.brand} {vehicle.details.model}
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

          <section>
            <h2 className="mb-8 text-2xl font-bold text-light-text dark:text-dark-text">
              Remorquage et Dépannage Auto en Images
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
                  <ImageCarousel
                    images={photo.images}
                    title={photo.title}
                    description={photo.description}
                  />
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