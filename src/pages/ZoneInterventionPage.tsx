import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Phone, Car, Euro } from 'lucide-react';

const cities = [
  {
    name: 'Toulouse',
    distance: '0 km',
    time: '15-30 min',
    zone: 'Centre-ville',
    pricing: {
      jour: '80€',
      nuit: '100€',
      weekend: '120€'
    }
  },
  {
    name: 'Blagnac',
    distance: '12 km',
    time: '20-35 min',
    zone: 'Périphérie',
    pricing: {
      jour: '100€',
      nuit: '120€',
      weekend: '140€'
    }
  },
  {
    name: 'Colomiers',
    distance: '13 km',
    time: '20-35 min',
    zone: 'Périphérie',
    pricing: {
      jour: '100€',
      nuit: '120€',
      weekend: '140€'
    }
  },
  {
    name: 'Tournefeuille',
    distance: '12 km',
    time: '20-35 min',
    zone: 'Périphérie',
    pricing: {
      jour: '100€',
      nuit: '120€',
      weekend: '140€'
    }
  },
  {
    name: 'Muret',
    distance: '27 km',
    time: '30-45 min',
    zone: 'Périphérie',
    pricing: {
      jour: '100€',
      nuit: '120€',
      weekend: '140€'
    }
  },
  {
    name: 'Saint-Orens-de-Gameville',
    distance: '10 km',
    time: '20-35 min',
    zone: 'Périphérie',
    pricing: {
      jour: '100€',
      nuit: '120€',
      weekend: '140€'
    }
  },
  {
    name: 'Balma',
    distance: '8 km',
    time: '15-30 min',
    zone: 'Périphérie',
    pricing: {
      jour: '100€',
      nuit: '120€',
      weekend: '140€'
    }
  },
  {
    name: "L'Union",
    distance: '9 km',
    time: '15-30 min',
    zone: 'Périphérie',
    pricing: {
      jour: '100€',
      nuit: '120€',
      weekend: '140€'
    }
  },
  {
    name: "Castelnau-d'Estrétefonds",
    distance: '24 km',
    time: '25-40 min',
    zone: 'Autoroute',
    pricing: {
      jour: '120€',
      nuit: '140€',
      weekend: '160€'
    }
  },
  {
    name: 'Montastruc-la-Conseillère',
    distance: '21 km',
    time: '25-40 min',
    zone: 'Autoroute',
    pricing: {
      jour: '120€',
      nuit: '140€',
      weekend: '160€'
    }
  },
  {
    name: 'Villefranche-de-Lauragais',
    distance: '35 km',
    time: '35-50 min',
    zone: 'Autoroute',
    pricing: {
      jour: '120€',
      nuit: '140€',
      weekend: '160€'
    }
  },
  {
    name: 'Carbonne',
    distance: '43 km',
    time: '40-55 min',
    zone: 'Autoroute',
    pricing: {
      jour: '120€',
      nuit: '140€',
      weekend: '160€'
    }
  }
];

export const ZoneInterventionPage = () => {
  return (
    <>
      <Helmet>
        <title>Zone d'intervention - Le Bon Dépanneur Toulouse</title>
        <meta 
          name="description" 
          content="Découvrez notre zone d'intervention étendue jusqu'à 50km autour de Toulouse. Service rapide et efficace dans toute la région toulousaine." 
        />
      </Helmet>

      <div className="bg-light-background py-24 transition-colors dark:bg-dark-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-light-text dark:text-dark-text">
              Zone d'intervention
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              Intervention rapide dans un rayon de 50 km autour de Toulouse
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Map Section */}
            <div className="relative overflow-hidden rounded-lg bg-light-card shadow-lg dark:bg-dark-card">
              <div className="h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184913.11077703288!2d1.3628017770996094!3d43.60080769999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb6fec7552ff%3A0x406f69c2f411030!2sToulouse!5e0!3m2!1sfr!2sfr!4v1635000000000!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Zone d'intervention Toulouse"
                  className="h-full w-full"
                />
              </div>
              {/* Overlay with key information */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-light-primary dark:text-dark-primary" />
                  <span>Intervention moyenne : 15-45 minutes selon la zone</span>
                </div>
              </div>
            </div>

            {/* Coverage Information */}
            <div className="space-y-6">
              <div className="rounded-lg bg-light-card p-8 shadow-lg dark:bg-dark-card">
                <h2 className="text-2xl font-semibold text-light-text dark:text-dark-text">
                  Notre secteur d'intervention
                </h2>
                
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  Le Bon Dépanneur intervient sur un large périmètre autour de Toulouse, couvrant un rayon de 50 km. Notre position stratégique nous permet d'intervenir rapidement sur l'ensemble de la région toulousaine.
                </p>

                <div className="mt-8 grid gap-4">
                  {cities.map((city, index) => (
                    <div 
                      key={index}
                      className="rounded-lg border border-light-border p-4 transition-all hover:border-light-primary dark:border-dark-border dark:hover:border-dark-primary"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <MapPin className="h-5 w-5 flex-shrink-0 text-light-primary dark:text-dark-primary" />
                          <div>
                            <h3 className="font-semibold text-light-text dark:text-dark-text">
                              {city.name}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {city.distance} • {city.time} • Zone {city.zone}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                            <Euro className="h-4 w-4" />
                            <span>À partir de {city.pricing.jour}</span>
                          </div>
                          <div className="mt-1 text-xs">
                            <span className="text-light-primary dark:text-dark-primary">Nuit : </span>
                            <span className="text-gray-600 dark:text-gray-300">{city.pricing.nuit}</span>
                            <span className="mx-1">•</span>
                            <span className="text-light-primary dark:text-dark-primary">Week-end : </span>
                            <span className="text-gray-600 dark:text-gray-300">{city.pricing.weekend}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="rounded-lg bg-light-primary p-6 text-white dark:bg-dark-primary">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">Besoin d'assistance ?</h3>
                    <p className="mt-1">Disponible 24h/24 - 7j/7</p>
                  </div>
                  <a
                    href="tel:+33500000000"
                    className="rounded-full bg-white px-6 py-3 text-light-primary transition-colors hover:bg-gray-100 dark:text-dark-primary"
                  >
                    <div className="flex items-center space-x-2">
                      <Phone className="h-5 w-5" />
                      <span className="font-semibold">Appeler maintenant</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Additional Information */}
              <div className="rounded-lg bg-light-card p-6 shadow-lg dark:bg-dark-card">
                <h3 className="text-lg font-semibold text-light-text dark:text-dark-text">
                  Informations importantes
                </h3>
                <ul className="mt-4 space-y-3 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center space-x-2">
                    <Car className="h-5 w-5 text-light-primary dark:text-dark-primary" />
                    <span>Tous types de véhicules : voitures, motos, utilitaires</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-light-primary dark:text-dark-primary" />
                    <span>Service disponible 24h/24 et 7j/7</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-light-primary dark:text-dark-primary" />
                    <span>Intervention sur autoroutes et voies rapides</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};