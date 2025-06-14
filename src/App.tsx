import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { Phone } from 'lucide-react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { AppRoutes } from './routes';
import { Link } from 'react-router-dom';

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="flex min-h-screen flex-col bg-light-background text-light-text transition-colors duration-200 dark:bg-dark-background dark:text-dark-text">
            {/* SEO Content - Hidden but crawlable */}
            <div className="sr-only" aria-hidden="true">
              <h1>Le Bon Remorquage Toulouse - Service de remorquage 24h/24 et 7j/7</h1>
              <h2>Services de remorquage et dépannage à Toulouse et sa région</h2>
              <ul>
                <li>Remorquage Toulouse</li>
                <li>Dépannage auto Toulouse</li>
                <li>Remorquage voiture Toulouse</li>
                <li>Dépanneur automobile Toulouse</li>
                <li>Remorquage nuit Toulouse</li>
                <li>Remorquage urgence Toulouse</li>
                <li>Dépannage voiture Toulouse</li>
                <li>Assistance routière Toulouse</li>
                <li>Remorquage poids lourd Toulouse</li>
                <li>Dépannage 24/24 Toulouse</li>
                <li>Remorquage pas cher Toulouse</li>
                <li>Service remorquage Toulouse</li>
                <li>Dépannage autoroute Toulouse</li>
                <li>Remorquage moto Toulouse</li>
                <li>Dépannage rapide Toulouse</li>
                <li>Remorquage véhicule Toulouse</li>
                <li>Dépannage remorquage Toulouse</li>
                <li>Remorquage professionnel Toulouse</li>
                <li>Dépannage sur place Toulouse</li>
                <li>Remorquage camion Toulouse</li>
              </ul>
              <p>
                Le Bon Remorquage est votre service de remorquage et dépannage automobile professionnel
                à Toulouse. Disponible 24h/24 et 7j/7, nous intervenons rapidement pour tout type de
                véhicule : voiture, moto, camion, poids lourd. Service de qualité, tarifs compétitifs,
                intervention rapide sur Toulouse et sa périphérie. Dépannage sur place, remorquage
                toutes distances, assistance routière, transport de véhicules.
              </p>
              <p>
                Zones d'intervention : Toulouse, Blagnac, Colomiers, Tournefeuille, Muret,
                Saint-Orens-de-Gameville, Balma, L'Union, Labège, Ramonville-Saint-Agne, Castanet-Tolosan,
                Portet-sur-Garonne, Cugnaux, Plaisance-du-Touch, Saint-Jean, Castelginest, Aucamville,
                Fenouillet, Saint-Alban, Launaguet.
              </p>
            </div>

            <Header />
            <main className="flex-grow">
              <AppRoutes />
            </main>
            <Footer />
            {/* Fixed Emergency Button */}
            <Link
              to="/contact"
              className="fixed bottom-6 right-6 flex items-center space-x-2 rounded-full bg-light-primary px-6 py-3 text-white shadow-lg transition-all hover:bg-light-hover dark:bg-dark-primary dark:hover:bg-dark-hover"
            >
              <Phone className="h-5 w-5" />
              <span className="font-semibold">Urgence 24/7</span>
            </Link>
          </div>
        </Router>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;