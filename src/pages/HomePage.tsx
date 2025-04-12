import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Globe, Clock, PenTool as Tool, Truck, Wrench, CheckCircle, Phone, Car, Plane as Crane, Key, Settings, Warehouse, Award, Shield, Star, MapPin, Umbrella } from 'lucide-react';
import { LazyImage } from '../components/LazyImage';
import { useInView } from 'react-intersection-observer';

const garagesPartenaires = [
  {
    nom: "Garage Central Auto",
    ville: "Toulouse Centre",
    specialites: ["Mécanique générale", "Diagnostic électronique"]
  },
  {
    nom: "Auto Service Premium",
    ville: "Blagnac",
    specialites: ["Véhicules premium", "Carrosserie"]
  },
  {
    nom: "Rapid'Auto Services",
    ville: "Colomiers",
    specialites: ["Réparation rapide", "Pneumatiques"]
  },
  {
    nom: "Garage de la Gare",
    ville: "Toulouse Sud",
    specialites: ["Toutes marques", "Climatisation"]
  }
];

const whyChooseUs = [
  {
    icon: Clock,
    title: "Intervention rapide",
    description: "Arrivée en moins de 30 minutes sur Toulouse.",
    image: "/images/Inter_rapide.webp"
  },
  {
    icon: Tool,
    title: "Expertise technique",
    description: "Techniciens qualifiés et matériel professionnel.",
    image: "/images/Expert_tech.webp"
  },
  {
    icon: Car,
    title: "Tous véhicules",
    description: "De la citadine au poids lourd.",
    image: "/images/All_car.webp"
  },
  {
    icon: Umbrella,
    title: "Assurance complète",
    description: "Véhicules et clients entièrement assurés pendant l'intervention.",
    image: "/images/Assurance.webp"
  }
];

export const HomePage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <Helmet>
        <title>Dépannage Auto Toulouse - Service de dépannage professionnel 24/7</title>
        <meta 
          name="description" 
          content="Service de dépannage automobile professionnel à Toulouse. Intervention rapide 24h/24 et 7j/7. Remorquage, assistance et réparation sur place." 
        />
      </Helmet>

      <div className="relative min-h-[90vh] bg-gray-800">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ 
            backgroundImage: 'url("/images/hero/hero-background.jpg")'
          }}
        />

        <div className="relative mx-auto flex min-h-[80vh] flex-col items-center justify-center px-4 py-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Dépannage Auto Toulouse
            <br />
            <span className="text-light-primary dark:text-dark-primary">Intervention rapide 24/7</span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 sm:text-xl">
            Service de dépannage professionnel disponible jour et nuit.
            <br className="hidden sm:block" />
            Intervention en moins de 30 minutes sur Toulouse et sa région.
          </p>

          <div className="mt-8 flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/contact"
              className="flex w-full items-center justify-center space-x-2 rounded-full bg-light-primary px-6 py-3 text-lg font-semibold text-white transition-all hover:bg-light-hover dark:bg-dark-primary dark:hover:bg-dark-hover sm:w-auto"
            >
              <Phone className="h-5 w-5" />
              <span>Urgence 24/7</span>
            </Link>
            <Link
              to="/contact"
              className="flex w-full items-center justify-center space-x-2 rounded-full border-2 border-white bg-transparent px-6 py-3 text-lg font-semibold text-white transition-all hover:bg-white hover:text-gray-900 sm:w-auto"
            >
              <span>Devis gratuit</span>
            </Link>
          </div>

          <div className="mt-12 w-full max-w-4xl px-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
              <div className="flex items-center justify-center space-x-3 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                <Clock className="h-6 w-6 text-light-primary dark:text-dark-primary" />
                <span className="text-sm font-medium text-white">Intervention &lt;30min</span>
              </div>
              <div className="flex items-center justify-center space-x-3 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                <Wrench className="h-6 w-6 text-light-primary dark:text-dark-primary" />
                <span className="text-sm font-medium text-white">Dépannage sur place</span>
              </div>
              <div className="flex items-center justify-center space-x-3 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                <Truck className="h-6 w-6 text-light-primary dark:text-dark-primary" />
                <span className="text-sm font-medium text-white">Tous véhicules</span>
              </div>
              <div className="flex items-center justify-center space-x-3 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                <Globe className="h-6 w-6 text-light-primary dark:text-dark-primary" />
                <span className="text-sm font-medium text-white">Transport Europe</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-8 dark:bg-dark-background/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-light-text dark:text-dark-text">
              Un réseau de garages agréés
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-base text-gray-600 dark:text-gray-300">
              Notre réseau de partenaires certifiés garantit une qualité de service optimale
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-lg bg-white p-4 text-center shadow-md transition-all hover:shadow-lg dark:bg-dark-card">
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-light-primary/10 dark:bg-dark-primary/10">
                <Award className="h-6 w-6 text-light-primary dark:text-dark-primary" />
              </div>
              <h3 className="text-lg font-semibold text-light-text dark:text-dark-text">
                Garages certifiés
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                Partenaires audités et certifiés
              </p>
            </div>

            <div className="rounded-lg bg-white p-4 text-center shadow-md transition-all hover:shadow-lg dark:bg-dark-card">
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-light-primary/10 dark:bg-dark-primary/10">
                <Shield className="h-6 w-6 text-light-primary dark:text-dark-primary" />
              </div>
              <h3 className="text-lg font-semibold text-light-text dark:text-dark-text">
                Garantie constructeur
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                Respect des normes constructeurs
              </p>
            </div>

            <div className="rounded-lg bg-white p-4 text-center shadow-md transition-all hover:shadow-lg dark:bg-dark-card">
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-light-primary/10 dark:bg-dark-primary/10">
                <Star className="h-6 w-6 text-light-primary dark:text-dark-primary" />
              </div>
              <h3 className="text-lg font-semibold text-light-text dark:text-dark-text">
                Service premium
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                Expertise et professionnalisme
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="mb-4 text-center text-lg font-semibold text-light-text dark:text-dark-text">
              Nos garages partenaires
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {garagesPartenaires.map((garage, index) => (
                <div 
                  key={index}
                  className="rounded-lg border border-light-border bg-white p-3 text-sm shadow-sm transition-all hover:shadow-md dark:border-dark-border dark:bg-dark-card"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-light-primary dark:text-dark-primary" />
                    <div>
                      <h4 className="font-medium text-light-text dark:text-dark-text">
                        {garage.nom}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {garage.ville}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {garage.specialites.map((spec, idx) => (
                      <span 
                        key={idx}
                        className="rounded-full bg-light-primary/5 px-2 py-0.5 text-xs text-light-primary dark:bg-dark-primary/5 dark:text-dark-primary"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-12 dark:bg-dark-card sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-light-text dark:text-dark-text sm:text-3xl">
              Pourquoi nous choisir ?
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                  style={{
                    height: '300px'
                  }}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${item.image})`
                    }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                  
                  <div className="relative flex h-full flex-col items-center justify-end p-6 text-center text-white">
                    <div className="mb-4 rounded-full bg-light-primary/90 p-3 dark:bg-dark-primary/90">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-200">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-light-card py-12 transition-colors dark:bg-dark-background sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-bold text-light-text dark:text-dark-text sm:text-2xl">
                Services professionnels
              </h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-light-primary dark:text-dark-primary" />
                  <p className="text-gray-600 dark:text-gray-300">
                    Dépannage et réparation sur place
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-light-primary dark:text-dark-primary" />
                  <p className="text-gray-600 dark:text-gray-300">
                    Remorquage tous véhicules
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-light-primary dark:text-dark-primary" />
                  <p className="text-gray-600 dark:text-gray-300">
                    Services complémentaires : transport, levage, location
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 sm:mt-0">
              <h2 className="text-xl font-bold text-light-text dark:text-dark-text sm:text-2xl">
                Zone d'intervention
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Intervention rapide sur Toulouse et sa périphérie dans un rayon de 50 km. Service de transport disponible dans toute l'Europe pour vos besoins de déplacement longue distance.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center text-light-primary hover:text-light-hover dark:text-dark-primary dark:hover:text-dark-hover"
              >
                Contactez-nous
                <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};