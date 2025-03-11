import React from 'react';
import { Helmet } from 'react-helmet-async';

export const ZoneInterventionPage = () => {
  return (
    <>
      <Helmet>
        <title>Zone d'intervention - Le Bon Dépanneur Toulouse</title>
        <meta 
          name="description" 
          content="Découvrez notre zone d'intervention pour le dépannage automobile à Toulouse et ses environs. Service rapide et efficace dans toute la région toulousaine." 
        />
      </Helmet>

      <div className="bg-light-background py-24 transition-colors dark:bg-dark-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-12 text-4xl font-bold tracking-tight text-light-text dark:text-dark-text">
            Zone d'intervention
          </h1>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="h-[600px] overflow-hidden rounded-lg bg-light-card shadow-lg dark:bg-dark-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92456.55870276324!2d1.3628017770996094!3d43.60080769999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb6fec7552ff%3A0x406f69c2f411030!2sToulouse!5e0!3m2!1sfr!2sfr!4v1635000000000!5m2!1sfr!2sfr"
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

            <div className="space-y-6 rounded-lg bg-light-card p-8 shadow-lg dark:bg-dark-card">
              <h2 className="text-2xl font-semibold text-light-text dark:text-dark-text">
                Notre secteur d'intervention
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300">
                Le Bon Dépanneur intervient sur Toulouse et sa périphérie, couvrant un rayon d'environ 30 km autour du centre-ville. Notre zone d'intervention comprend :
              </p>

              <ul className="list-inside list-disc space-y-2 text-gray-600 dark:text-gray-300">
                <li>Toulouse centre et tous ses quartiers</li>
                <li>Blagnac et la zone aéroportuaire</li>
                <li>Colomiers et la zone industrielle</li>
                <li>Tournefeuille</li>
                <li>Balma</li>
                <li>L'Union</li>
                <li>Saint-Orens-de-Gameville</li>
                <li>Ramonville-Saint-Agne</li>
              </ul>

              <p className="text-gray-600 dark:text-gray-300">
                Notre position stratégique nous permet d'intervenir rapidement, généralement en moins de 30 minutes, sur l'ensemble de notre zone de couverture.
              </p>

              <div className="rounded-lg bg-light-primary/10 p-4 dark:bg-dark-primary/10">
                <p className="font-semibold text-light-primary dark:text-dark-primary">
                  Intervention d'urgence 24h/24 et 7j/7
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Pour toute demande d'intervention, contactez-nous au 05 00 00 00 00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};