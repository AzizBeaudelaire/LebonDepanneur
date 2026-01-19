import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Truck, Info } from 'lucide-react';
const fleetVehicles = [
    {
        image: '/images/depannage.webp',
        name: 'Renault Master Dépanneuse Toulouse',
        alt: 'Dépanneuse Renault Master avec plateau basculant pour remorquage à Toulouse 31',
        details: {
            brand: 'Renault',
            model: 'Master',
            capacity: '3.5 tonnes',
            features: [
                'Plateau basculant hydraulique',
                'Treuil hydraulique 4.5 tonnes',
                'Rampes d\'accès aluminium',
                'Panier de récupération',
                'Rampe d\'accès',
                'Gyrophare',
            ],
            quantity: 3
        }
    },
    {
        image: '/images/ivecoDailyPlateau.webp',
        name: 'Iveco Daily Plateau Remorquage',
        alt: 'Camion plateau Iveco Daily pour remorquage voiture longue distance et Europe',
        details: {
            brand: 'Iveco',
            model: 'Daily',
            capacity: '4.5 tonnes',
            features: [
                'Plateau extra-long (6m)',
                'Double treuil hydraulique',
                'Système de blocage multiple',
                'Éclairage de zone LED',
                'Caméras de manœuvre'
            ],
            quantity: 1
        }
    },
    {
        image: '/images/FordTransit.webp',
        name: 'Ford Transit Dépannage Rapide',
        alt: 'Véhicule d\'assistance routière rapide Ford Transit intervention Toulouse',
        details: {
            brand: 'Ford',
            model: 'Transit Custom',
            capacity: '1 tonne',
            features: [
                'Véhicule d\'intervention rapide',
                'Équipement de première urgence',
                'Outillage spécialisé',
                'Système de géolocalisation',
                'Kit de dépannage complet'
            ],
            quantity: 2
        }
    }
];
const interventionPhotos = [
    {
        title: 'Dépannage Batterie & Ville',
        description: 'Réparation sur place d\'une batterie HS en centre-ville de Toulouse',
        images: [
            { url: '/images/Ville_car.webp', alt: 'Dépannage batterie voiture centre-ville Toulouse' },
            { url: '/images/Ville_car2.webp', alt: 'Assistance auto secours Toulouse quartier Capitole' },
            { url: '/images/Ville_car3.webp', alt: 'Dépanneur auto intervention rapide rue de Toulouse' },
            { url: '/images/Ville_car4.webp', alt: 'Aide au démarrage voiture batterie déchargée 31' },
            { url: '/images/Ville_car5.webp', alt: 'Service auto secours de proximité Toulouse' }
        ]
    },
    {
        title: 'Remorquage Véhicule Atypique',
        description: 'Intervention de remorquage sur des véhicules spécifiques et utilitaires',
        images: [
            { url: '/images/Atypique_car.webp', alt: 'Remorquage camping-car et véhicule atypique Toulouse' },
            { url: '/images/Atypique_car2.webp', alt: 'Transport véhicule de gros gabarit 31' },
            { url: '/images/Atypique_car3.webp', alt: 'Remorquage utilitaire professionnel Toulouse' },
            { url: '/images/Atypique_car4.webp', alt: 'Dépanneuse pour véhicule spécialisé' },
            { url: '/images/Atypique_car5.webp', alt: 'Assistance remorquage véhicule spécifique' }
        ]
    },
    {
        title: 'Transport Voiture Collection',
        description: 'Transport sécurisé et remorquage de véhicule de collection',
        images: [
            { url: '/images/Transport.webp', alt: 'Transport voiture de collection remorque fermée' },
            { url: '/images/Transport2.webp', alt: 'Remorquage voiture ancienne Toulouse' },
            { url: '/images/Transport3.webp', alt: 'Transport prestige automobile longue distance' },
            { url: '/images/Transport4.webp', alt: 'Convoyage sécurisé véhicule historique' },
            { url: '/images/Transport5.webp', alt: 'Plateau remorquage spécial voiture de sport' }
        ]
    },
    {
        title: 'Assistance Accident Autoroute',
        description: 'Remorquage suite à un accident sur le périphérique ou autoroute',
        images: [
            { url: '/images/Accident_car.webp', alt: 'Remorquage accident périphérique Toulouse' },
            { url: '/images/Accident_car2.webp', alt: 'Assistance dépannage autoroute A61 A64' },
            { url: '/images/Accident_car3.webp', alt: 'Enlèvement véhicule accidenté dépanneuse 31' },
            { url: '/images/Accident_car4.webp', alt: 'Secours routier après collision Toulouse' },
            { url: '/images/Accident_car5.webp', alt: 'Remorquage d\'urgence voiture endommagée' }
        ]
    },
    {
        title: 'Dépannage Nuit Toulouse',
        description: 'Intervention d\'urgence de nuit pour dépannage mécanique 24/7',
        images: [
            { url: '/images/Nuit.webp', alt: 'Dépannage auto nuit Toulouse 24h/24' },
            { url: '/images/Nuit2.webp', alt: 'Remorquage nocturne urgence Toulouse' },
            { url: '/images/Nuit3.webp', alt: 'Assistance routière de nuit 31' },
            { url: '/images/Nuit4.webp', alt: 'Dépanneuse en intervention nocturne' },
            { url: '/images/Nuit5.webp', alt: 'Auto secours 24/7 Toulouse nuit' }
        ]
    },
    {
        title: 'Remorquage Voiture de Luxe',
        description: 'Prise en charge spécialisée pour remorquage de luxe (Ferrari, etc.)',
        images: [
            { url: '/images/Luxe_car.webp', alt: 'Remorquage Ferrari Toulouse voiture de luxe' },
            { url: '/images/Luxe_car2.webp', alt: 'Transport sécurisé voiture prestige 31' },
            { url: '/images/Luxe_car3.webp', alt: 'Remorquage supercar plateau basculant' },
            { url: '/images/Luxe_car4.webp', alt: 'Assistance haut de gamme automobile Toulouse' },
            { url: '/images/Luxe_car5.webp', alt: 'Dépanneur spécialisé véhicules de sport' }
        ]
    }
];
const ImageCarousel = ({ images, title, description }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);
    return (React.createElement("div", { className: "relative h-48 overflow-hidden" },
        images.map((image, index) => (React.createElement("div", { key: index, className: `absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}` },
            React.createElement("img", { src: image.url, alt: image.alt, className: "h-full w-full object-cover" })))),
        React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" }),
        React.createElement("div", { className: "absolute bottom-4 left-4 right-4" },
            React.createElement("h3", { className: "text-lg font-semibold text-white" }, title),
            React.createElement("p", { className: "mt-1 text-sm text-gray-200" }, description)),
        React.createElement("div", { className: "absolute bottom-2 right-2 flex space-x-1" }, images.map((_, index) => (React.createElement("div", { key: index, className: `h-1.5 w-1.5 rounded-full transition-all ${index === currentImageIndex
                ? 'bg-light-primary dark:bg-dark-primary'
                : 'bg-white/50'}` }))))));
};
const GalleryPage = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Helmet, null,
            React.createElement("title", null, "Flotte D\u00E9panneuse & Remorquage Toulouse | Le Bon Remorquage"),
            React.createElement("meta", { name: "description", content: "D\u00E9couvrez notre flotte de d\u00E9panneuses Renault Master et Iveco \u00E0 Toulouse. Photos de nos interventions : remorquage voiture de luxe, assistance nuit et autoroute." })),
        React.createElement("div", { className: "bg-light-background py-12 transition-colors dark:bg-dark-background" },
            React.createElement("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" },
                React.createElement("div", { className: "relative mb-16 overflow-hidden rounded-2xl bg-gradient-to-r from-light-primary to-light-hover text-white shadow-xl dark:from-dark-primary dark:to-dark-hover" },
                    React.createElement("div", { className: "relative z-10 p-8 sm:p-12" },
                        React.createElement("div", { className: "max-w-3xl" },
                            React.createElement("h1", { className: "text-4xl font-bold sm:text-5xl" }, "Flotte de D\u00E9panneuses & interventions 31"),
                            React.createElement("p", { className: "mt-4 text-lg sm:text-xl font-bold" },
                                "D\u00E9couvrez nos \u00E9quipements d'",
                                React.createElement("strong", null, "auto secours"),
                                " de pointe et nos interventions de ",
                                React.createElement("strong", null, "remorquage voiture et moto"),
                                " \u00E0 Toulouse."),
                            React.createElement("p", { className: "mt-4 text-base opacity-90" },
                                "Que ce soit pour un ",
                                React.createElement("strong", null, "d\u00E9pannage batterie"),
                                " en centre-ville, un ",
                                React.createElement("strong", null, "remorquage parking sous-sol"),
                                " avec nos d\u00E9panneuses surbaiss\u00E9es, ou une ",
                                React.createElement("strong", null, "assistance sur autoroute"),
                                " (rocade, A61, A64), nous disposons du mat\u00E9riel adapt\u00E9 \u00E0 chaque situation d'urgence 24h/24."),
                            React.createElement("div", { className: "mt-6 flex flex-wrap gap-2 text-sm font-medium" },
                                React.createElement("span", { className: "rounded-full bg-white/20 px-3 py-1" }, "#RemorquageToulouse"),
                                React.createElement("span", { className: "rounded-full bg-white/20 px-3 py-1" }, "#Depannage24/7"),
                                React.createElement("span", { className: "rounded-full bg-white/20 px-3 py-1" }, "#AutoSecours31"),
                                React.createElement("span", { className: "rounded-full bg-white/20 px-3 py-1" }, "#AssistanceRoutiere")))),
                    React.createElement("div", { className: "absolute -right-16 bottom-0 hidden opacity-10 lg:block" },
                        React.createElement(Truck, { className: "h-64 w-64" }))),
                React.createElement("section", { className: "mb-16" },
                    React.createElement("h2", { className: "mb-8 text-2xl font-bold text-light-text dark:text-dark-text" }, "Nos V\u00E9hicules d'Auto Secours"),
                    React.createElement("div", { className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3" }, fleetVehicles.map((vehicle, index) => (React.createElement(motion.div, { key: index, initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, className: "group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl dark:bg-dark-card" },
                        React.createElement("div", { className: "relative h-48 overflow-hidden" },
                            React.createElement("img", { src: vehicle.image, alt: vehicle.alt, className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" }),
                            React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" }),
                            React.createElement("div", { className: "absolute bottom-4 left-4" },
                                React.createElement("h3", { className: "text-lg font-semibold text-white" }, vehicle.name))),
                        React.createElement("div", { className: "p-4" },
                            React.createElement("div", { className: "mb-4 flex items-center justify-between" },
                                React.createElement("span", { className: "text-sm text-gray-600 dark:text-gray-400" },
                                    vehicle.details.brand,
                                    " ",
                                    vehicle.details.model),
                                React.createElement("span", { className: "rounded-full bg-light-primary/10 px-3 py-1 text-sm font-medium text-light-primary dark:bg-dark-primary/10 dark:text-dark-primary" }, vehicle.details.capacity)),
                            React.createElement("div", { className: "space-y-2" },
                                React.createElement("div", { className: "flex items-start space-x-2" },
                                    React.createElement(Info, { className: "mt-1 h-4 w-4 flex-shrink-0 text-light-primary dark:text-dark-primary" }),
                                    React.createElement("ul", { className: "text-sm text-gray-600 dark:text-gray-300" }, vehicle.details.features.map((feature, idx) => (React.createElement("li", { key: idx, className: "list-inside list-disc" }, feature))))),
                                React.createElement("p", { className: "text-sm text-gray-600 dark:text-gray-300" },
                                    "Quantit\u00E9 disponible : ",
                                    vehicle.details.quantity)))))))),
                React.createElement("section", null,
                    React.createElement("h2", { className: "mb-8 text-2xl font-bold text-light-text dark:text-dark-text" }, "Remorquage et D\u00E9pannage Auto en Images"),
                    React.createElement("div", { className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3" }, interventionPhotos.map((photo, index) => (React.createElement(motion.div, { key: index, initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.1 }, className: "group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:shadow-xl dark:bg-dark-card" },
                        React.createElement(ImageCarousel, { images: photo.images, title: photo.title, description: photo.description }))))))))));
};
export default GalleryPage;
