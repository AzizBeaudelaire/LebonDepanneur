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
    return (React.createElement(HelmetProvider, null,
        React.createElement(QueryClientProvider, { client: queryClient },
            React.createElement(Router, null,
                React.createElement("div", { className: "flex min-h-screen flex-col bg-light-background text-light-text transition-colors duration-200 dark:bg-dark-background dark:text-dark-text" },
                    React.createElement("div", { className: "sr-only", "aria-hidden": "true" },
                        React.createElement("h1", null, "Le Bon Remorquage Toulouse - Service de remorquage 24h/24 et 7j/7"),
                        React.createElement("h2", null, "Services de remorquage et d\u00E9pannage \u00E0 Toulouse et sa r\u00E9gion"),
                        React.createElement("ul", null,
                            React.createElement("li", null, "Remorquage Toulouse"),
                            React.createElement("li", null, "D\u00E9pannage auto Toulouse"),
                            React.createElement("li", null, "Remorquage voiture Toulouse"),
                            React.createElement("li", null, "D\u00E9panneur automobile Toulouse"),
                            React.createElement("li", null, "Remorquage nuit Toulouse"),
                            React.createElement("li", null, "Remorquage urgence Toulouse"),
                            React.createElement("li", null, "D\u00E9pannage voiture Toulouse"),
                            React.createElement("li", null, "Assistance routi\u00E8re Toulouse"),
                            React.createElement("li", null, "Remorquage poids lourd Toulouse"),
                            React.createElement("li", null, "D\u00E9pannage 24/24 Toulouse"),
                            React.createElement("li", null, "Remorquage pas cher Toulouse"),
                            React.createElement("li", null, "Service remorquage Toulouse"),
                            React.createElement("li", null, "D\u00E9pannage autoroute Toulouse"),
                            React.createElement("li", null, "Remorquage moto Toulouse"),
                            React.createElement("li", null, "D\u00E9pannage rapide Toulouse"),
                            React.createElement("li", null, "Remorquage v\u00E9hicule Toulouse"),
                            React.createElement("li", null, "D\u00E9pannage remorquage Toulouse"),
                            React.createElement("li", null, "Remorquage professionnel Toulouse"),
                            React.createElement("li", null, "D\u00E9pannage sur place Toulouse"),
                            React.createElement("li", null, "Remorquage camion Toulouse")),
                        React.createElement("p", null, "Le Bon Remorquage est votre service de remorquage et d\u00E9pannage automobile professionnel \u00E0 Toulouse. Disponible 24h/24 et 7j/7, nous intervenons rapidement pour tout type de v\u00E9hicule : voiture, moto, camion, poids lourd. Service de qualit\u00E9, tarifs comp\u00E9titifs, intervention rapide sur Toulouse et sa p\u00E9riph\u00E9rie. D\u00E9pannage sur place, remorquage toutes distances, assistance routi\u00E8re, transport de v\u00E9hicules."),
                        React.createElement("p", null, "Zones d'intervention : Toulouse, Blagnac, Colomiers, Tournefeuille, Muret, Saint-Orens-de-Gameville, Balma, L'Union, Lab\u00E8ge, Ramonville-Saint-Agne, Castanet-Tolosan, Portet-sur-Garonne, Cugnaux, Plaisance-du-Touch, Saint-Jean, Castelginest, Aucamville, Fenouillet, Saint-Alban, Launaguet.")),
                    React.createElement(Header, null),
                    React.createElement("main", { className: "flex-grow" },
                        React.createElement(AppRoutes, null)),
                    React.createElement(Footer, null),
                    React.createElement(Link, { to: "/contact", className: "fixed bottom-6 right-6 flex items-center space-x-2 rounded-full bg-light-primary px-6 py-3 text-white shadow-lg transition-all hover:bg-light-hover dark:bg-dark-primary dark:hover:bg-dark-hover" },
                        React.createElement(Phone, { className: "h-5 w-5" }),
                        React.createElement("span", { className: "font-semibold" }, "Urgence 24/7")))))));
}
export default App;
