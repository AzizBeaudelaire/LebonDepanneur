import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AlertTriangle, Phone, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const EmergencyPage = () => {
  return (
    <>
      <Helmet>
        <title>Urgence Dépannage Toulouse - Intervention immédiate 24/7</title>
        <meta 
          name="description" 
          content="Service d'urgence disponible 24h/24 et 7j/7 à Toulouse. Intervention rapide garantie pour tous vos problèmes de plomberie, électricité, ou serrurerie." 
        />
      </Helmet>

      <div className="bg-red-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <AlertTriangle className="h-12 w-12 text-red-600" />
            <h1 className="ml-4 text-4xl font-bold text-gray-900">
              Service d'Urgence 24/7
            </h1>
          </div>

          <div className="mt-12 rounded-lg bg-white p-8 shadow-lg">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  Besoin d'une intervention urgente ?
                </h2>
                <p className="mt-4 text-lg text-gray-600">
                  Notre équipe de professionnels est disponible 24h/24 et 7j/7 pour intervenir rapidement sur :
                </p>
                <ul className="mt-6 space-y-4 text-gray-600">
                  <li className="flex items-center">
                    • Fuites d'eau et dégâts des eaux
                  </li>
                  <li className="flex items-center">
                    • Pannes électriques
                  </li>
                  <li className="flex items-center">
                    • Ouverture de porte et serrurerie
                  </li>
                  <li className="flex items-center">
                    • Chauffage et climatisation
                  </li>
                </ul>
              </div>

              <div className="rounded-lg bg-blue-50 p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Contactez-nous immédiatement
                </h3>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-blue-600" />
                    <a 
                      href="tel:+33500000000" 
                      className="ml-4 text-lg font-semibold text-blue-600 hover:text-blue-500"
                    >
                      05 00 00 00 00
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-blue-600" />
                    <span className="ml-4 text-gray-600">
                      Disponible 24h/24 - 7j/7
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-blue-600" />
                    <span className="ml-4 text-gray-600">
                      Toulouse et sa région
                    </span>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="block w-full rounded-md bg-blue-600 px-4 py-3 text-center text-lg font-semibold text-white hover:bg-blue-500"
                  >
                    Demander une intervention
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-lg bg-white p-8 shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900">
              Pourquoi choisir notre service d'urgence ?
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900">Rapidité</h3>
                <p className="mt-2 text-gray-600">
                  Intervention en moins d'une heure sur Toulouse et sa région.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900">Professionnalisme</h3>
                <p className="mt-2 text-gray-600">
                  Techniciens qualifiés et expérimentés pour tous types d'urgences.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900">Transparence</h3>
                <p className="mt-2 text-gray-600">
                  Devis clair et détaillé avant toute intervention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};