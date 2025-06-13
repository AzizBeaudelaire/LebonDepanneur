import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Globe, Clock, PenTool as Tool, Truck, Wrench, CheckCircle, Phone, Car, Award, Shield, Star, MapPin, Umbrella } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
const garagesPartenaires = [
    {
        nom: "Garage Central Auto",
        ville: "Toulouse Centre",
        specialites: ["Mécanique générale", "Diagnostic électronique"]
    },
    {
        nom: "Auto Service Premium",
        ville: "Blagnac",
        specialites: ["Véhicules premium", "Carrosserie"]
    },
    {
        nom: "Rapid'Auto Services",
        ville: "Colomiers",
        specialites: ["Réparation rapide", "Pneumatiques"]
    },
    {
        nom: "Garage de la Gare",
        ville: "Toulouse Sud",
        specialites: ["Toutes marques", "Climatisation"]
    }
];
const whyChooseUs = [
    {
        icon: Clock,
        title: "Intervention rapide",
        description: "Arrivée en moins de 30 minutes sur Toulouse.",
        image: "/images/Inter_rapide.webp"
    },
    {
        icon: Tool,
        title: "Expertise technique",
        description: "Techniciens qualifiés et matériel professionnel.",
        image: "/images/Expert_tech.webp"
    },
    {
        icon: Car,
        title: "Tous véhicules",
        description: "De la citadine au poids lourd.",
        image: "/images/All_car.webp"
    },
    {
        icon: Umbrella,
        title: "Assurance complète",
        description: "Véhicules et clients entièrement assurés pendant l'intervention.",
        image: "/images/Assurance.webp"
    }
];
export const HomePage = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    return (React.createElement(React.Fragment, null,
        React.createElement(Helmet, null,
            React.createElement("title", null, "D\u00E9pannage Auto Toulouse - Service de d\u00E9pannage professionnel 24/7"),
            React.createElement("meta", { name: "description", content: "Service de d\u00E9pannage automobile professionnel \u00E0 Toulouse. Intervention rapide 24h/24 et 7j/7. Remorquage, assistance et r\u00E9paration sur place." })),
        React.createElement("div", { className: "relative min-h-[90vh] bg-gray-800" },
            React.createElement("div", { className: "absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40", style: {
                    backgroundImage: 'url("/images/hero/hero-background.jpg")'
                } }),
            React.createElement("div", { className: "relative mx-auto flex min-h-[80vh] flex-col items-center justify-center px-4 py-12 text-center" },
                React.createElement("h1", { className: "text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl" },
                    "D\u00E9pannage Auto Toulouse",
                    React.createElement("br", null),
                    React.createElement("span", { className: "text-light-primary dark:text-dark-primary" }, "Intervention rapide 24/7")),
                React.createElement("p", { className: "mx-auto mt-6 max-w-2xl text-lg text-gray-300 sm:text-xl" },
                    "Service de d\u00E9pannage professionnel disponible jour et nuit.",
                    React.createElement("br", { className: "hidden sm:block" }),
                    "Intervention en moins de 30 minutes sur Toulouse et sa r\u00E9gion."),
                React.createElement("div", { className: "mt-8 flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center" },
                    React.createElement(Link, { to: "/contact", className: "flex w-full items-center justify-center space-x-2 rounded-full bg-light-primary px-6 py-3 text-lg font-semibold text-white transition-all hover:bg-light-hover dark:bg-dark-primary dark:hover:bg-dark-hover sm:w-auto" },
                        React.createElement(Phone, { className: "h-5 w-5" }),
                        React.createElement("span", null, "Urgence 24/7")),
                    React.createElement(Link, { to: "/contact", className: "flex w-full items-center justify-center space-x-2 rounded-full border-2 border-white bg-transparent px-6 py-3 text-lg font-semibold text-white transition-all hover:bg-white hover:text-gray-900 sm:w-auto" },
                        React.createElement("span", null, "Devis gratuit"))),
                React.createElement("div", { className: "mt-12 w-full max-w-4xl px-4" },
                    React.createElement("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-4" },
                        React.createElement("div", { className: "flex items-center justify-center space-x-3 rounded-xl bg-white/10 p-4 backdrop-blur-sm" },
                            React.createElement(Clock, { className: "h-6 w-6 text-light-primary dark:text-dark-primary" }),
                            React.createElement("span", { className: "text-sm font-medium text-white" }, "Intervention <30min")),
                        React.createElement("div", { className: "flex items-center justify-center space-x-3 rounded-xl bg-white/10 p-4 backdrop-blur-sm" },
                            React.createElement(Wrench, { className: "h-6 w-6 text-light-primary dark:text-dark-primary" }),
                            React.createElement("span", { className: "text-sm font-medium text-white" }, "D\u00E9pannage sur place")),
                        React.createElement("div", { className: "flex items-center justify-center space-x-3 rounded-xl bg-white/10 p-4 backdrop-blur-sm" },
                            React.createElement(Truck, { className: "h-6 w-6 text-light-primary dark:text-dark-primary" }),
                            React.createElement("span", { className: "text-sm font-medium text-white" }, "Tous v\u00E9hicules")),
                        React.createElement("div", { className: "flex items-center justify-center space-x-3 rounded-xl bg-white/10 p-4 backdrop-blur-sm" },
                            React.createElement(Globe, { className: "h-6 w-6 text-light-primary dark:text-dark-primary" }),
                            React.createElement("span", { className: "text-sm font-medium text-white" }, "Transport Europe")))))),
        React.createElement("div", { className: "bg-gray-50 py-8 dark:bg-dark-background/50" },
            React.createElement("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" },
                React.createElement("div", { className: "text-center" },
                    React.createElement("h2", { className: "text-2xl font-bold tracking-tight text-light-text dark:text-dark-text" }, "Un r\u00E9seau de garages agr\u00E9\u00E9s"),
                    React.createElement("p", { className: "mx-auto mt-2 max-w-2xl text-base text-gray-600 dark:text-gray-300" }, "Notre r\u00E9seau de partenaires certifi\u00E9s garantit une qualit\u00E9 de service optimale")),
                React.createElement("div", { className: "mt-8 grid gap-6 sm:grid-cols-3" },
                    React.createElement("div", { className: "rounded-lg bg-white p-4 text-center shadow-md transition-all hover:shadow-lg dark:bg-dark-card" },
                        React.createElement("div", { className: "mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-light-primary/10 dark:bg-dark-primary/10" },
                            React.createElement(Award, { className: "h-6 w-6 text-light-primary dark:text-dark-primary" })),
                        React.createElement("h3", { className: "text-lg font-semibold text-light-text dark:text-dark-text" }, "Garages certifi\u00E9s"),
                        React.createElement("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-300" }, "Partenaires audit\u00E9s et certifi\u00E9s")),
                    React.createElement("div", { className: "rounded-lg bg-white p-4 text-center shadow-md transition-all hover:shadow-lg dark:bg-dark-card" },
                        React.createElement("div", { className: "mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-light-primary/10 dark:bg-dark-primary/10" },
                            React.createElement(Shield, { className: "h-6 w-6 text-light-primary dark:text-dark-primary" })),
                        React.createElement("h3", { className: "text-lg font-semibold text-light-text dark:text-dark-text" }, "Garantie constructeur"),
                        React.createElement("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-300" }, "Respect des normes constructeurs")),
                    React.createElement("div", { className: "rounded-lg bg-white p-4 text-center shadow-md transition-all hover:shadow-lg dark:bg-dark-card" },
                        React.createElement("div", { className: "mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-light-primary/10 dark:bg-dark-primary/10" },
                            React.createElement(Star, { className: "h-6 w-6 text-light-primary dark:text-dark-primary" })),
                        React.createElement("h3", { className: "text-lg font-semibold text-light-text dark:text-dark-text" }, "Service premium"),
                        React.createElement("p", { className: "mt-1 text-sm text-gray-600 dark:text-gray-300" }, "Expertise et professionnalisme"))),
                React.createElement("div", { className: "mt-8" },
                    React.createElement("h3", { className: "mb-4 text-center text-lg font-semibold text-light-text dark:text-dark-text" }, "Nos garages partenaires"),
                    React.createElement("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4" }, garagesPartenaires.map((garage, index) => (React.createElement("div", { key: index, className: "rounded-lg border border-light-border bg-white p-3 text-sm shadow-sm transition-all hover:shadow-md dark:border-dark-border dark:bg-dark-card" },
                        React.createElement("div", { className: "flex items-center gap-2" },
                            React.createElement(MapPin, { className: "h-4 w-4 text-light-primary dark:text-dark-primary" }),
                            React.createElement("div", null,
                                React.createElement("h4", { className: "font-medium text-light-text dark:text-dark-text" }, garage.nom),
                                React.createElement("p", { className: "text-xs text-gray-600 dark:text-gray-400" }, garage.ville))),
                        React.createElement("div", { className: "mt-2 flex flex-wrap gap-1" }, garage.specialites.map((spec, idx) => (React.createElement("span", { key: idx, className: "rounded-full bg-light-primary/5 px-2 py-0.5 text-xs text-light-primary dark:bg-dark-primary/5 dark:text-dark-primary" }, spec))))))))))),
        React.createElement("div", { className: "bg-white py-12 dark:bg-dark-card sm:py-16" },
            React.createElement("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" },
                React.createElement("div", { className: "text-center" },
                    React.createElement("h2", { className: "text-2xl font-bold tracking-tight text-light-text dark:text-dark-text sm:text-3xl" }, "Pourquoi nous choisir ?")),
                React.createElement("div", { className: "mt-12 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4" }, whyChooseUs.map((item, index) => {
                    const Icon = item.icon;
                    return (React.createElement("div", { key: index, className: "group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl", style: {
                            height: '300px'
                        } },
                        React.createElement("div", { className: "absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110", style: {
                                backgroundImage: `url(${item.image})`
                            } }),
                        React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" }),
                        React.createElement("div", { className: "relative flex h-full flex-col items-center justify-end p-6 text-center text-white" },
                            React.createElement("div", { className: "mb-4 rounded-full bg-light-primary/90 p-3 dark:bg-dark-primary/90" },
                                React.createElement(Icon, { className: "h-8 w-8" })),
                            React.createElement("h3", { className: "mb-2 text-xl font-bold" }, item.title),
                            React.createElement("p", { className: "text-sm font-medium text-gray-200" }, item.description))));
                })))),
        React.createElement("div", { className: "bg-light-card py-12 transition-colors dark:bg-dark-background sm:py-24" },
            React.createElement("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" },
                React.createElement("div", { className: "grid grid-cols-1 gap-8 md:grid-cols-2" },
                    React.createElement("div", null,
                        React.createElement("h2", { className: "text-xl font-bold text-light-text dark:text-dark-text sm:text-2xl" }, "Services professionnels"),
                        React.createElement("div", { className: "mt-6 space-y-4" },
                            React.createElement("div", { className: "flex items-start" },
                                React.createElement(CheckCircle, { className: "mr-3 h-6 w-6 flex-shrink-0 text-light-primary dark:text-dark-primary" }),
                                React.createElement("p", { className: "text-gray-600 dark:text-gray-300" }, "D\u00E9pannage et r\u00E9paration sur place")),
                            React.createElement("div", { className: "flex items-start" },
                                React.createElement(CheckCircle, { className: "mr-3 h-6 w-6 flex-shrink-0 text-light-primary dark:text-dark-primary" }),
                                React.createElement("p", { className: "text-gray-600 dark:text-gray-300" }, "Remorquage tous v\u00E9hicules")),
                            React.createElement("div", { className: "flex items-start" },
                                React.createElement(CheckCircle, { className: "mr-3 h-6 w-6 flex-shrink-0 text-light-primary dark:text-dark-primary" }),
                                React.createElement("p", { className: "text-gray-600 dark:text-gray-300" }, "Services compl\u00E9mentaires : transport, levage, location")))),
                    React.createElement("div", { className: "mt-8 sm:mt-0" },
                        React.createElement("h2", { className: "text-xl font-bold text-light-text dark:text-dark-text sm:text-2xl" }, "Zone d'intervention"),
                        React.createElement("p", { className: "mt-4 text-gray-600 dark:text-gray-300" }, "Intervention rapide sur Toulouse et sa p\u00E9riph\u00E9rie dans un rayon de 50 km. Service de transport disponible dans toute l'Europe pour vos besoins de d\u00E9placement longue distance."),
                        React.createElement(Link, { to: "/contact", className: "mt-6 inline-flex items-center text-light-primary hover:text-light-hover dark:text-dark-primary dark:hover:text-dark-hover" },
                            "Contactez-nous",
                            React.createElement("svg", { className: "ml-2 h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor" },
                                React.createElement("path", { fillRule: "evenodd", d: "M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z", clipRule: "evenodd" })))))))));
};
