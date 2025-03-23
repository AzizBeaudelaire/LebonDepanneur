import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Globe, Clock, PenTool as Tool, Truck, Wrench, CheckCircle, Phone, Car, Plane as Crane, Key, Settings, Warehouse } from 'lucide-react';
import { LazyImage } from '../components/LazyImage';
import { useInView } from 'react-intersection-observer';

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

      <div className="relative min-h-[80vh] bg-gray-800">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ 
            backgroundImage: 'url("/src/images/hero/hero-background.jpg")'
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
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
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
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-12 dark:bg-dark-card sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-light-text dark:text-dark-text sm:text-3xl">
              Nos services de dépannage
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 dark:text-gray-300 sm:text-lg">
              Une équipe de professionnels qualifiés pour tous vos besoins de dépannage et assistance.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-gray-50 p-6 dark:bg-dark-background">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-light-primary/10 dark:bg-dark-primary/10">
                <Wrench className="h-6 w-6 text-light-primary dark:text-dark-primary" />
              </div>
              <h3 className="text-xl font-semibold text-light-text dark:text-dark-text">
                Dépannage sur place
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Intervention rapide pour pannes mécaniques et électriques.
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-6 dark:bg-dark-background">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-light-primary/10 dark:bg-dark-primary/10">
                <Truck className="h-6 w-6 text-light-primary dark:text-dark-primary" />
              </div>
              <h3 className="text-xl font-semibold text-light-text dark:text-dark-text">
                Remorquage
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Transport sécurisé vers le garage de votre choix.
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-6 dark:bg-dark-background">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-light-primary/10 dark:bg-dark-primary/10">
                <Settings className="h-6 w-6 text-light-primary dark:text-dark-primary" />
              </div>
              <h3 className="text-xl font-semibold text-light-text dark:text-dark-text">
                Réparation rapide
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Atelier équipé pour interventions sans rendez-vous.
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-6 dark:bg-dark-background">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-light-primary/10 dark:bg-dark-primary/10">
                <Globe className="h-6 w-6 text-light-primary dark:text-dark-primary" />
              </div>
              <h3 className="text-xl font-semibold text-light-text dark:text-dark-text">
                Transport Europe
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Service de transport spécialisé longue distance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light-card py-12 transition-colors dark:bg-dark-background sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-light-text dark:text-dark-text sm:text-3xl">
              Pourquoi nous choisir ?
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 text-center shadow-lg transition-colors dark:bg-dark-card sm:p-8">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-light-primary/10 dark:bg-dark-primary/10 sm:h-16 sm:w-16">
                <Clock className="h-6 w-6 text-light-primary dark:text-dark-primary sm:h-8 sm:w-8" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-light-text dark:text-dark-text sm:mt-6">
                Intervention rapide
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Arrivée en moins de 30 minutes sur Toulouse.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center shadow-lg transition-colors dark:bg-dark-card sm:p-8">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-light-primary/10 dark:bg-dark-primary/10 sm:h-16 sm:w-16">
                <Tool className="h-6 w-6 text-light-primary dark:text-dark-primary sm:h-8 sm:w-8" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-light-text dark:text-dark-text sm:mt-6">
                Expertise technique
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Techniciens qualifiés et matériel professionnel.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center shadow-lg transition-colors dark:bg-dark-card sm:p-8">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-light-primary/10 dark:bg-dark-primary/10 sm:h-16 sm:w-16">
                <Car className="h-6 w-6 text-light-primary dark:text-dark-primary sm:h-8 sm:w-8" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-light-text dark:text-dark-text sm:mt-6">
                Tous véhicules
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                De la citadine au poids lourd.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-12 dark:bg-dark-card sm:py-16">
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