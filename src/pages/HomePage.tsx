import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, Clock, PenTool as Tool, Truck, Wrench, CheckCircle, Phone } from 'lucide-react';
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
          content="Service de dépannage urgent à Toulouse. Intervention rapide 24h/24 et 7j/7. Dépannage automobile professionnel sur toute la région toulousaine." 
        />
        <link 
          rel="preload" 
          href="https://images.unsplash.com/photo-1581094794329-c8112c4e56a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80" 
          as="image" 
        />
      </Helmet>

      {/* Hero Section */}
      <div className="relative min-h-[90vh] bg-black">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1581094794329-c8112c4e56a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80")'
          }}
        />

        {/* Hero Content */}
        <div className="relative mx-auto h-[90vh] px-4">
          <div className="grid h-full grid-cols-1 lg:grid-cols-2">
            {/* Left Column - Text Content */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                Dépannage Auto
                <br />
                <span className="text-light-primary dark:text-dark-primary">24h/24 - 7j/7</span>
              </h1>
              <p className="mt-6 max-w-xl text-xl text-gray-300">
                Service professionnel de dépannage et remorquage à Toulouse.
                <br />
                Intervention rapide garantie en moins de 30 minutes.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="tel:+33500000000"
                  className="flex items-center space-x-2 rounded-full bg-light-primary px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-light-hover dark:bg-dark-primary dark:hover:bg-dark-hover"
                >
                  <Phone className="h-5 w-5" />
                  <span>Urgence 24/7</span>
                </a>
                <Link
                  to="/services"
                  className="flex items-center space-x-2 rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-gray-900"
                >
                  <span>Nos services</span>
                </Link>
              </div>
            </div>

            {/* Right Column - Tow Truck Image */}
            <div className="hidden lg:flex lg:items-center lg:justify-center">
              <div className="relative h-full w-full">
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.5))',
                  }}
                >
                  <LazyImage
                    src={`${import.meta.env.BASE_URL}src/images/dépanneuse_rbg.png`}
                    alt="Dépanneuse professionnelle"
                    className="max-h-[80vh] w-auto object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Key Features - Now spanning full width */}
          <div className="absolute bottom-12 left-0 right-0 px-4">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex items-center space-x-3 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                <Clock className="h-6 w-6 text-light-primary dark:text-dark-primary" />
                <span className="text-sm font-medium text-white">Intervention &lt; 30min</span>
              </div>
              <div className="flex items-center space-x-3 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                <Shield className="h-6 w-6 text-light-primary dark:text-dark-primary" />
                <span className="text-sm font-medium text-white">Service professionnel</span>
              </div>
              <div className="flex items-center space-x-3 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                <Truck className="h-6 w-6 text-light-primary dark:text-dark-primary" />
                <span className="text-sm font-medium text-white">Tout type de véhicule</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="h-16 w-8 rounded-full border-2 border-white p-2">
            <div className="h-3 w-3 rounded-full bg-white" />
          </div>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="bg-white py-12 dark:bg-dark-card sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-light-text dark:text-dark-text sm:text-3xl">
              Notre expertise à votre service
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 dark:text-gray-300 sm:text-lg">
              Depuis toujours, notre équipe de professionnels qualifiés intervient sur Toulouse et sa région pour tous types de dépannages automobiles.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:mt-12 sm:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-6 dark:bg-dark-background">
              <h3 className="text-xl font-semibold text-light-text dark:text-dark-text">
                Dépannage sur place
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Notre équipe intervient rapidement pour résoudre les pannes courantes : batterie, démarrage, crevaison, etc. Nous disposons de tout l'équipement nécessaire pour vous dépanner efficacement.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-6 dark:bg-dark-background">
              <h3 className="text-xl font-semibold text-light-text dark:text-dark-text">
                Remorquage professionnel
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Si la réparation sur place n'est pas possible, nous assurons le remorquage de votre véhicule vers le garage de votre choix, en toute sécurité et dans les meilleurs délais.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Advantages */}
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
                Prise en charge immédiate
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Intervention rapide en moins de 30 minutes sur Toulouse et sa périphérie.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center shadow-lg transition-colors dark:bg-dark-card sm:p-8">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-light-primary/10 dark:bg-dark-primary/10 sm:h-16 sm:w-16">
                <Wrench className="h-6 w-6 text-light-primary dark:text-dark-primary sm:h-8 sm:w-8" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-light-text dark:text-dark-text sm:mt-6">
                Matériel dernier cri
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Équipement professionnel moderne pour tous types d'interventions.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center shadow-lg transition-colors dark:bg-dark-card sm:p-8">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-light-primary/10 dark:bg-dark-primary/10 sm:h-16 sm:w-16">
                <Truck className="h-6 w-6 text-light-primary dark:text-dark-primary sm:h-8 sm:w-8" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-light-text dark:text-dark-text sm:mt-6">
                Dépannage - Remorquage
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Solutions complètes pour tous types de véhicules et de situations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Features */}
      <div className="bg-white py-12 dark:bg-dark-card sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-bold text-light-text dark:text-dark-text sm:text-2xl">
                Un service complet et professionnel
              </h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-light-primary dark:text-dark-primary" />
                  <p className="text-gray-600 dark:text-gray-300">
                    Techniciens qualifiés et expérimentés pour tous types d'interventions
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-light-primary dark:text-dark-primary" />
                  <p className="text-gray-600 dark:text-gray-300">
                    Devis transparent et sans surprise avant toute intervention
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-light-primary dark:text-dark-primary" />
                  <p className="text-gray-600 dark:text-gray-300">
                    Service client disponible 24h/24 pour répondre à vos questions
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 sm:mt-0">
              <h2 className="text-xl font-bold text-light-text dark:text-dark-text sm:text-2xl">
                Zone d'intervention
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Nous intervenons sur Toulouse et sa périphérie dans un rayon de 30 km. Notre position stratégique nous permet d'intervenir rapidement sur l'ensemble de notre zone de couverture, incluant les communes de Blagnac, Colomiers, Tournefeuille, Balma, et bien d'autres.
              </p>
              <Link
                to="/zone-intervention"
                className="mt-6 inline-flex items-center text-light-primary hover:text-light-hover dark:text-dark-primary dark:hover:text-dark-hover"
              >
                Découvrir notre zone d'intervention
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