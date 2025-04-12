import React, { useState, useEffect } from 'react';
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
    name: 'Iveco Daily Plateau',
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
    name: 'Ford Transit Custom Intervention',
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
    title: 'Dépannage en ville',
    description: 'Réparation sur place d\'une batterie défectueuse en centre-ville',
    images: [
      '/images/Ville_car.webp',
      '/images/Ville_car2.webp',
      '/images/Ville_car3.webp',
      '/images/Ville_car4.webp',
      '/images/Ville_car5.webp'
    ]
  },
  {
    title: 'Véhicule Atypique',
    description: 'Intervention sur des véhicules atypiques',
    images: [
      '/images/Atypique_car.webp',
      '/images/Atypique_car2.webp',
      '/images/Atypique_car3.webp',
      '/images/Atypique_car4.webp',
      '/images/Atypique_car5.webp'
    ]
  },
  {
    title: 'Transport spécialisé',
    description: 'Transport sécurisé d\'un véhicule de collection',
    images: [
      '/images/Transport.webp',
      '/images/Transport2.webp',
      '/images/Transport3.webp',
      '/images/Transport4.webp',
      '/images/Transport5.webp'
    ]
  },
  {
    title: 'Assistance accident',
    description: 'Intervention suite à un accident sur le périphérique',
    images: [
      '/images/Accident_car.webp',
      '/images/Accident_car2.webp',
      '/images/Accident_car3.webp',
      '/images/Accident_car4.webp',
      '/images/Accident_car5.webp'
    ]
  },
  {
    title: 'Dépannage nocturne',
    description: 'Intervention d\'urgence de nuit pour une panne mécanique',
    images: [
      '/images/nuit.jpg',
      '/images/nuit2.jpg',
      '/images/nuit3.jpg',
      '/images/nuit4.jpg',
      '/images/nuit5.jpg'
    ]
  },
  {
    title: 'Intervention sur véhicule de luxe',
    description: 'Prise en charge spécialisée d\'une Ferrari 488 GTB',
    images: [
      '/images/Luxe_car.webp',
      '/images/Luxe_car2.webp',
      '/images/Luxe_car3.webp',
      '/images/Luxe_car4.webp',
      '/images/Luxe_car5.webp'
    ]
  }
];

const ImageCarousel = ({ images, title, description }: { images: string[], title: string, description: string }) => {
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
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`${title} - Image ${index + 1}`}
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
            className={`h-1.5 w-1.5 rounded-full transition-all ${
              index === currentImageIndex
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
                <p className="mt-4 text-lg sm:text-xl font-bold">
                Véhicules récents et bien équipés, adaptés à tous types d'interventions, du dépannage local au transport longue distance.
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