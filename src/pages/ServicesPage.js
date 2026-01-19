import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Car, Wrench, Truck, Phone, Shield, Clock, Globe, Plane as Crane, Key, Settings, Warehouse, SprayCan as Spray, ShoppingBag, AlertTriangle } from 'lucide-react';
const services = [
    {
        icon: React.createElement(Globe, { className: "h-6 w-6" }),
        title: 'Transport Voiture Europe',
        description: 'Service de transport de véhicules spécialisé toute l\'Europe.\nConvoyage sécurisé de voitures de luxe, collection ou utilitaires.\nAssurance tous risques et transport longue distance avec suivi.',
        image: '/images/professional-truck-driver-entering-his-truck-long-vehicle-holding-thumbs-up.webp'
    },
    {
        icon: React.createElement(Car, { className: "h-6 w-6" }),
        title: 'Assistance Dépannage 24/24',
        description: `Assistance routière disponible 24h/24 et 7j/7 à Toulouse.\nIntervention rapide pour batterie HS, panne d'essence ou erreur carburant.\nDiagnostic électronique sur place pour redémarrage immédiat.`,
        image: '/images/man-standing-by-broken-vehicle-calling-tow-service.webp'
    },
    {
        icon: React.createElement(Wrench, { className: "h-6 w-6" }),
        title: 'Dépannage Auto & Moto',
        description: 'Dépannage mécanique à Toulouse : voitures, motos, scooters et utilitaires.\nRéparation sur place pour pannes légères ou crevaison.\nExpertise technique pour tout auto secours de proximité.',
        image: '/images/long-shot-man-swapping-tire.webp'
    },
    {
        icon: React.createElement(Truck, { className: "h-6 w-6" }),
        title: 'Remorquage Voiture Toulouse',
        description: 'Remorquage professionnel toutes distances vers le garage de votre choix.\nÉquipement spécialisé pour remorquage parking sous-sol et accès difficiles.\nIntervention rapide sur rocade et autoroute.',
        image: '/images/remorquage.webp'
    },
    {
        icon: React.createElement(Crane, { className: "h-6 w-6" }),
        title: 'Levage, Grutage, Treuillage',
        description: 'Services de levage et grutage pour véhicules accidentés ou fossés.\nTreuillage sécurisé en conditions difficiles (ravin, boue, neige).\nPersonnel certifié pour interventions complexes.',
        image: '/images/levage_grutage.webp'
    },
    {
        icon: React.createElement(Key, { className: "h-6 w-6" }),
        title: 'Ouverture Porte & Perte Clés',
        description: 'Intervention rapide pour ouverture de porte voiture bloquée sans dégâts.\nReproduction et programmation de clés de voiture et télécommandes sur site.\nDépannage clés cassées ou perdues.',
        image: '/images/lose_key.webp'
    },
    {
        icon: React.createElement(Warehouse, { className: "h-6 w-6" }),
        title: 'Mise en Fourrière',
        description: 'Service agréé de mise en fourrière et enlèvement d\'épave.\nIntervention conforme à la réglementation pour stationnement gênant ou abusif.\nStockage et gardiennage sécurisé 24h/24.',
        image: '/images/fourriere01.webp'
    },
    {
        icon: React.createElement(Settings, { className: "h-6 w-6" }),
        title: 'Atelier Réparation Rapide',
        description: 'Entretien et réparation rapide sans rendez-vous à Toulouse.\nVidange, freinage, pneus et diagnostic mécanique complet.\nDevis transparent avant toute intervention.',
        image: '/images/atelier_repa.webp'
    },
    {
        icon: React.createElement(Spray, { className: "h-6 w-6" }),
        title: 'Nettoyage & Detailing',
        description: 'Nettoyage de véhicule intérieur/extérieur haute performance.\nLavage professionnel, polissage et protection carrosserie (céramique).\nRénovation optiques de phares.',
        image: '/images/nettoyage_car.webp'
    },
    {
        icon: React.createElement(ShoppingBag, { className: "h-6 w-6" }),
        title: 'Achat Revente de Véhicules',
        description: 'Achat et vente de voitures d\'occasion révisées et garanties.\nEstimation gratuite de votre véhicule pour reprise immédiate.\nAccompagnement administratif (carte grise).',
        image: '/images/achat_revente.webp'
    }
];
const emergencySteps = [
    {
        icon: React.createElement(Shield, { className: "h-8 w-8" }),
        title: 'Sécuriser',
        description: 'Mettez-vous en sécurité et activez vos feux de détresse'
    },
    {
        icon: React.createElement(Phone, { className: "h-8 w-8" }),
        title: 'Contacter',
        description: 'Appelez les secours si nécessaire et votre assurance'
    },
    {
        icon: React.createElement(Clock, { className: "h-8 w-8" }),
        title: 'Attendre',
        description: 'Restez en sécurité en attendant notre arrivée'
    }
];
const emergencyNumbers = [
    {
        name: 'SAMU',
        number: '15',
        icon: React.createElement(AlertTriangle, { className: "h-5 w-5 text-red-600" })
    },
    {
        name: 'Pompiers',
        number: '18',
        icon: React.createElement(AlertTriangle, { className: "h-5 w-5 text-red-600" })
    },
    {
        name: 'Police',
        number: '17',
        icon: React.createElement(AlertTriangle, { className: "h-5 w-5 text-blue-600" })
    },
    {
        name: 'Numéro d\'urgence européen',
        number: '112',
        icon: React.createElement(AlertTriangle, { className: "h-5 w-5 text-yellow-600" })
    }
];
const ServicesPage = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Helmet, null,
            React.createElement("title", null, "Services D\u00E9pannage Auto 24/7 & Remorquage Toulouse | Assistance 31"),
            React.createElement("meta", { name: "description", content: "D\u00E9couvrez nos services d'auto secours : d\u00E9pannage voiture 24/24, remorquage moto, transport Europe, ouverture de porte et d\u00E9pannage batterie \u00E0 Toulouse et p\u00E9riph\u00E9rie." })),
        React.createElement("div", { className: "bg-light-background py-12 transition-colors dark:bg-dark-background" },
            React.createElement("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" },
                React.createElement("div", { className: "relative mb-16 overflow-hidden rounded-2xl bg-gradient-to-r from-light-primary to-light-hover text-white shadow-xl dark:from-dark-primary dark:to-dark-hover" },
                    React.createElement("div", { className: "relative z-10 p-8" },
                        React.createElement("div", { className: "max-w-6xl" },
                            React.createElement("h1", { className: "text-4xl font-bold" }, "D\u00E9pannage Auto & Remorquage Voiture"),
                            React.createElement("p", { className: "mt-4 text-lg font-bold" }, "Besoin d'une d\u00E9panneuse \u00E0 Toulouse ? Nous intervenons 24h/24 et 7j/7 pour le d\u00E9pannage urgent, le remorquage voiture et moto, ainsi que le transport de v\u00E9hicules."),
                            React.createElement("p", { className: "mt-4 text-lg font-bold" }, "Assistance routi\u00E8re rapide sur Toulouse (Blagnac, Colomiers, Muret) et partout en Europe avec un \u00E9quipement professionnel de levage et treuillage."),
                            React.createElement("div", { className: "mt-8 flex flex-wrap gap-4" },
                                React.createElement(Link, { to: "/contact", className: "inline-flex items-center rounded-full bg-white px-6 py-3 text-light-primary transition-colors hover:bg-gray-100 dark:text-dark-primary" },
                                    React.createElement(Phone, { className: "mr-2 h-5 w-5" }),
                                    React.createElement("span", { className: "font-semibold" }, "Appeler maintenant")),
                                React.createElement(Link, { to: "/contact", className: "inline-flex items-center rounded-full border-2 border-white px-6 py-3 text-white transition-colors hover:bg-white hover:text-light-primary" }, "Demander un devis")))),
                    React.createElement("div", { className: "absolute -right-16 bottom-0 hidden opacity-10 lg:block" },
                        React.createElement(Car, { className: "h-64 w-64" }))),
                React.createElement("section", { className: "mb-16" },
                    React.createElement("h2", { className: "mb-8 text-2xl font-bold text-light-text dark:text-dark-text" }, "Nos prestations de d\u00E9pannage et assistance routi\u00E8re"),
                    React.createElement("div", { className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3" }, services.map((service, index) => (React.createElement(motion.div, { key: index, initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.2 }, className: "group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl dark:bg-dark-card" },
                        React.createElement("div", { className: "relative h-48 overflow-hidden" },
                            React.createElement("img", { src: service.image, alt: service.title, className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" }),
                            React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" }),
                            React.createElement("div", { className: "absolute bottom-4 left-4 flex items-center text-white" },
                                React.createElement("div", { className: "rounded-full bg-light-primary/90 p-2 dark:bg-dark-primary/90" }, service.icon),
                                React.createElement("h3", { className: "ml-3 text-lg font-semibold" }, service.title))),
                        React.createElement("div", { className: "p-4" },
                            React.createElement("p", { className: "text-gray-600 dark:text-gray-300", style: { whiteSpace: 'pre-line' } }, service.description)))))),
                    React.createElement("div", { className: "mt-8 rounded-lg bg-white p-6 shadow-lg dark:bg-dark-card" },
                        React.createElement("h3", { className: "mb-4 text-xl font-semibold text-light-text dark:text-dark-text" }, "Num\u00E9ros d'urgence"),
                        React.createElement("div", { className: "grid gap-4 sm:grid-cols-2 md:grid-cols-4" }, emergencyNumbers.map((emergency, index) => (React.createElement("div", { key: index, className: "flex items-center justify-between rounded-lg border border-gray-200 p-4 dark:border-gray-700" },
                            React.createElement("div", { className: "flex items-center" },
                                emergency.icon,
                                React.createElement("span", { className: "ml-2 font-medium text-gray-900 dark:text-gray-100" }, emergency.name)),
                            React.createElement("span", { className: "text-xl font-bold text-gray-900 dark:text-gray-100" }, emergency.number))))))),
                React.createElement("section", { className: "rounded-lg bg-light-primary p-8 text-white dark:bg-dark-primary" },
                    React.createElement("div", { className: "text-center" },
                        React.createElement("h2", { className: "text-2xl font-bold" }, "Besoin d'une intervention urgente ?"),
                        React.createElement("p", { className: "mt-4 font-bold" }, "Notre \u00E9quipe est disponible 24h/24 et 7j/7 pour vous assister."),
                        React.createElement("div", { className: "mt-6 flex justify-center space-x-4" },
                            React.createElement(Link, { to: "/contact", className: "inline-flex items-center rounded-full bg-white px-6 py-3 text-light-primary shadow-lg transition-colors hover:bg-gray-100 dark:bg-dark-background dark:text-dark-primary dark:hover:bg-dark-card" },
                                React.createElement(Phone, { className: "mr-2 h-5 w-5" }),
                                "Appeler maintenant"),
                            React.createElement(Link, { to: "/contact", className: "inline-flex items-center rounded-full border-2 border-white px-6 py-3 text-white transition-colors hover:bg-white hover:text-light-primary dark:hover:text-dark-primary" }, "Nous contacter"))))))));
};
export default ServicesPage;
