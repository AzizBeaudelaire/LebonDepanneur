import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, Clock, PenTool as Tool, Truck, Wrench, CheckCircle } from 'lucide-react';

export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Dépannage Auto Toulouse - Service de dépannage professionnel 24/7</title>
        <meta 
          name="description" 
          content="Service de dépannage urgent à Toulouse. Intervention rapide 24h/24 et 7j/7. Dépannage automobile professionnel sur toute la région toulousaine." 
        />
      </Helmet>

      <div className="relative">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1581094794329-c8112c4e56a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80")',
            filter: 'brightness(0.4)'
          }}
        />
        
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Dépannage d'urgence à Toulouse
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-white">
              Service professionnel disponible 24h/24 et 7j/7. Intervention rapide garantie.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                to="/urgence"
                className="rounded-md bg-light-primary px-8 py-3 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-light-hover dark:bg-dark-primary dark:hover:bg-dark-hover"
              >
                Urgence 24/7
              </Link>
              <Link
                to="/services"
                className="rounded-md bg-white px-8 py-3 text-lg font-semibold text-gray-900 shadow-sm transition-colors hover:bg-gray-100 dark:bg-dark-card dark:text-white dark:hover:bg-dark-hover"
              >
                Nos services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="bg-white py-16 dark:bg-dark-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-light-text dark:text-dark-text">
              Notre expertise à votre service
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              Depuis toujours, notre équipe de professionnels qualifiés intervient sur Toulouse et sa région pour tous types de dépannages automobiles.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
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
      <div className="bg-light-card py-24 transition-colors dark:bg-dark-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-light-text dark:text-dark-text">
              Pourquoi nous choisir ?
            </h2>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-8 text-center shadow-lg transition-colors dark:bg-dark-card">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-light-primary/10 dark:bg-dark-primary/10">
                <Clock className="h-8 w-8 text-light-primary dark:text-dark-primary" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-light-text dark:text-dark-text">
                Prise en charge immédiate
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Intervention rapide en moins de 30 minutes sur Toulouse et sa périphérie.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 text-center shadow-lg transition-colors dark:bg-dark-card">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-light-primary/10 dark:bg-dark-primary/10">
                <Wrench className="h-8 w-8 text-light-primary dark:text-dark-primary" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-light-text dark:text-dark-text">
                Matériel dernier cri
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Équipement professionnel moderne pour tous types d'interventions.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 text-center shadow-lg transition-colors dark:bg-dark-card">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-light-primary/10 dark:bg-dark-primary/10">
                <Truck className="h-8 w-8 text-light-primary dark:text-dark-primary" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-light-text dark:text-dark-text">
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
      <div className="bg-white py-16 dark:bg-dark-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-light-text dark:text-dark-text">
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
            <div>
              <h2 className="text-2xl font-bold text-light-text dark:text-dark-text">
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