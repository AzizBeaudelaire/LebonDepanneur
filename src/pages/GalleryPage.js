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
        description: "Intervention rapide pour tout problème de démarrage en plein centre-ville de Toulouse. Nos dépanneuses adaptées se faufilent dans les ruelles étroites de la ville rose pour vous porter assistance. Que ce soit un remplacement de batterie, l'utilisation d'un booster professionnel, ou un diagnostic électronique de base, notre objectif est de vous permettre de repartir au plus vite sans forcément passer par un garage.",
        images: [
            { url: '/images/Ville_car.webp', alt: 'Dépannage batterie voiture centre-ville Toulouse' },
            { url: '/images/Ville_car2.webp', alt: 'Assistance auto secours Toulouse quartier Capitole' },
            { url: '/images/Ville_car3.webp', alt: 'Dépanneur auto intervention rapide rue de Toulouse' }
        ]
    },
    {
        title: 'Remorquage Véhicule Atypique',
        description: "Prise en charge spécialisée pour le dépannage et remorquage de véhicules hors normes : utilitaires, camping-cars, véhicules rabaissés, ou machines professionnelles. Grâce à notre équipement lourd (Treuils 4.5 tonnes, plateaux extra-longs) et à l'expertise de nos chauffeurs, nous assurons un transport sécurisé de votre véhicule lourd ou atypique, qu'il soit roulant, en panne ou accidenté.",
        images: [
            { url: '/images/Atypique_car.webp', alt: 'Remorquage camping-car et véhicule atypique Toulouse' },
            { url: '/images/Atypique_car2.webp', alt: 'Transport véhicule de gros gabarit 31' },
            { url: '/images/Atypique_car3.webp', alt: 'Remorquage utilitaire professionnel Toulouse' }
        ]
    },
    {
        title: 'Transport Voiture Collection',
        description: "Un soin tout particulier apporté au transport des véhicules de collection et anciens. Manipulation par calage par les roues pour ne sous aucun prétexte abîmer les châssis délicats. Nous garantissons une protection maximale lors des chargements et faisons preuve d'une grande précaution tout au long du convoyage, que ce soit pour vous rendre à un rassemblement ou confier votre bijou à un restaurateur.",
        images: [
            { url: '/images/Transport.webp', alt: 'Transport voiture de collection remorque fermée' },
            { url: '/images/Transport2.webp', alt: 'Remorquage voiture ancienne Toulouse' },
            { url: '/images/Transport3.webp', alt: 'Transport prestige automobile longue distance' }
        ]
    },
    {
        title: 'Assistance Accident Autoroute',
        description: "Équipes formées pour les environnements à haut risque. Suite à un accident ou une panne dangereuse sur la rocade de Toulouse, l'A61 ou l'A64, notre priorité est de sécuriser rapidement la zone grâce à notre balisage réglementaire. Nous procédons ensuite à l'évacuation en douceur de votre véhicule vers notre parc de sécurité ou le carrossier / mécanicien de votre choix.",
        images: [
            { url: '/images/Accident_car.webp', alt: 'Remorquage accident périphérique Toulouse' },
            { url: '/images/Accident_car2.webp', alt: 'Assistance dépannage autoroute A61 A64' },
            { url: '/images/Accident_car3.webp', alt: 'Enlèvement véhicule accidenté dépanneuse 31' }
        ]
    },
    {
        title: 'Dépannage Nuit Toulouse',
        description: "Le Bon Remorquage ne dort jamais. Notre service d'assistance routière est opérationnel 24 heures sur 24 et 7 jours sur 7. Une panne moteur à 3h du matin ? Un pneu crevé un jour férié ? Nous mobilisons nos astreintes pour vous rejoindre en moins de 30 minutes. Nos éclairages LED de zone garantissent une intervention nocturne en toute sécurité sur le grand Toulouse.",
        images: [
            { url: '/images/Nuit.webp', alt: 'Dépannage auto nuit Toulouse 24h/24' },
            { url: '/images/Nuit2.webp', alt: 'Remorquage nocturne urgence Toulouse' },
            { url: '/images/Nuit3.webp', alt: 'Assistance routière de nuit 31' }
        ]
    },
    {
        title: 'Remorquage Voiture de Luxe',
        description: "Supercars, véhicules de prestige et sportives extrêmement basses nécessitent un matériel spécifique. Nos dépanneuses sont équipées de plateaux basculants avec rampes très faible inclinaison pour éviter de frotter les lames pare-chocs. Nos chauffeurs déploient tout leur savoir-faire (sangles spécifiques jantes alu, protections sièges) pour rapatrier votre véhicule haut de gamme avec des standards VIP.",
        images: [
            { url: '/images/Luxe_car.webp', alt: 'Remorquage Ferrari Toulouse voiture de luxe' },
            { url: '/images/Luxe_car2.webp', alt: 'Transport sécurisé voiture prestige 31' },
            { url: '/images/Luxe_car3.webp', alt: 'Remorquage supercar plateau basculant' }
        ]
    }
];
const ImageCarousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);
    return (React.createElement("div", { className: "relative h-64 md:h-full min-h-[300px] w-full overflow-hidden" },
        images.map((image, index) => (React.createElement("div", { key: index, className: `absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}` },
            React.createElement("img", { src: image.url, alt: image.alt, className: "h-full w-full object-cover" })))),
        React.createElement("div", { className: "absolute inset-x-0 bottom-0 z-20 h-1/3 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" }),
        React.createElement("div", { className: "absolute bottom-4 right-4 z-30 flex space-x-2" }, images.map((_, index) => (React.createElement("div", { key: index, className: `h-2 w-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                ? 'bg-light-primary w-6 dark:bg-dark-primary'
                : 'bg-white/60 hover:bg-white'}` }))))));
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
                React.createElement("section", { className: "mb-24" },
                    React.createElement("h2", { className: "mb-8 text-2xl md:text-3xl font-bold text-light-text dark:text-dark-text border-b-4 border-light-primary inline-block pb-2" }, "Nos V\u00E9hicules d'Auto Secours"),
                    React.createElement("div", { className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3" }, fleetVehicles.map((vehicle, index) => (React.createElement(motion.div, { key: index, initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: index * 0.1 }, className: "group overflow-hidden rounded-lg bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-dark-card border border-gray-100 dark:border-dark-border" },
                        React.createElement("div", { className: "relative h-56 overflow-hidden" },
                            React.createElement("img", { src: vehicle.image, alt: vehicle.alt, className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" }),
                            React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" }),
                            React.createElement("div", { className: "absolute bottom-4 left-4" },
                                React.createElement("h3", { className: "text-xl font-bold text-white" }, vehicle.name))),
                        React.createElement("div", { className: "p-6" },
                            React.createElement("div", { className: "mb-4 flex items-center justify-between" },
                                React.createElement("span", { className: "text-sm font-semibold text-gray-700 dark:text-gray-300" },
                                    vehicle.details.brand,
                                    " ",
                                    vehicle.details.model),
                                React.createElement("span", { className: "rounded-full bg-light-primary/10 px-3 py-1 text-sm font-bold text-light-primary dark:bg-dark-primary/20 dark:text-dark-primary" }, vehicle.details.capacity)),
                            React.createElement("div", { className: "space-y-4" },
                                React.createElement("div", { className: "flex items-start space-x-3" },
                                    React.createElement(Info, { className: "mt-0.5 h-5 w-5 flex-shrink-0 text-light-primary dark:text-dark-primary" }),
                                    React.createElement("ul", { className: "text-sm text-gray-600 dark:text-gray-400 space-y-1" }, vehicle.details.features.map((feature, idx) => (React.createElement("li", { key: idx, className: "flex items-start" },
                                        React.createElement("span", { className: "mr-2 text-light-primary" }, "\u2022"),
                                        feature))))),
                                React.createElement("div", { className: "pt-4 border-t border-gray-100 dark:border-gray-800" },
                                    React.createElement("p", { className: "text-sm font-medium text-gray-500 dark:text-gray-400" },
                                        "Unit\u00E9s disponibles : ",
                                        React.createElement("span", { className: "font-bold text-light-text dark:text-white" }, vehicle.details.quantity)))))))))),
                React.createElement("section", null,
                    React.createElement("div", { className: "mb-12" },
                        React.createElement("h2", { className: "text-2xl md:text-3xl font-bold text-light-text dark:text-dark-text border-b-4 border-light-primary inline-block pb-2" }, "Expertise & Interventions en Images"),
                        React.createElement("p", { className: "mt-4 text-gray-600 dark:text-gray-400 max-w-3xl" }, "Parce qu'une image vaut mille mots, d\u00E9couvrez comment nous prenons soin des v\u00E9hicules de nos clients. Mettre votre voiture entre les mains de professionnels \u00E9quip\u00E9s, c'est l'assurance d'un d\u00E9pannage sans dommages collat\u00E9raux.")),
                    React.createElement("div", { className: "space-y-16" }, interventionPhotos.map((photo, index) => {
                        const isEven = index % 2 === 0;
                        return (React.createElement(motion.div, { key: index, initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-100px" }, transition: { duration: 0.5 }, className: `flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-colors dark:bg-dark-card border border-gray-100 dark:border-dark-border lg:flex-row ${isEven ? '' : 'lg:flex-row-reverse'}` },
                            React.createElement("div", { className: "lg:w-1/2" },
                                React.createElement(ImageCarousel, { images: photo.images })),
                            React.createElement("div", { className: "flex flex-col justify-center p-8 md:p-12 lg:w-1/2" },
                                React.createElement("h3", { className: "text-2xl md:text-3xl font-extrabold text-light-text dark:text-white mb-4" }, photo.title),
                                React.createElement("div", { className: "w-16 h-1 bg-light-primary mb-6" }),
                                React.createElement("p", { className: "text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300" }, photo.description),
                                React.createElement("div", { className: "mt-8 flex flex-wrap gap-2" },
                                    React.createElement("span", { className: "text-xs font-semibold text-light-primary dark:text-dark-primary bg-light-primary/10 dark:bg-dark-primary/10 px-3 py-1 rounded-full" }, "Intervention Rapide"),
                                    React.createElement("span", { className: "text-xs font-semibold text-light-primary dark:text-dark-primary bg-light-primary/10 dark:bg-dark-primary/10 px-3 py-1 rounded-full" }, "Professionnel")))));
                    })))))));
};
export default GalleryPage;
