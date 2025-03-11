import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Page non trouvée - Dépannage Toulouse</title>
        <meta 
          name="description" 
          content="La page que vous recherchez n'existe pas. Retournez à l'accueil pour découvrir nos services de dépannage à Toulouse." 
        />
      </Helmet>

      <div className="min-h-[70vh] bg-gray-50 px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div className="mx-auto max-w-max">
          <main className="sm:flex">
            <p className="text-4xl font-bold tracking-tight text-blue-600 sm:text-5xl">404</p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Page non trouvée
                </h1>
                <p className="mt-4 text-base text-gray-500">
                  Désolé, nous n'avons pas trouvé la page que vous recherchez.
                </p>
              </div>
              <div className="mt-8 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <Link
                  to="/"
                  className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <Home className="mr-2 h-5 w-5" />
                  Retour à l'accueil
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};