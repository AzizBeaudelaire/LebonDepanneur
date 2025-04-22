import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Phone, Car, Shield, FormInput, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
const cities = [
    {
        name: 'Toulouse',
        distance: '0 km',
        time: '15-30 min',
        zone: 'Centre-ville'
    },
    {
        name: 'Blagnac',
        distance: '12 km',
        time: '20-35 min',
        zone: 'Périphérie'
    },
    {
        name: 'Colomiers',
        distance: '13 km',
        time: '20-35 min',
        zone: 'Périphérie'
    },
    {
        name: 'Tournefeuille',
        distance: '12 km',
        time: '20-35 min',
        zone: 'Périphérie'
    },
    {
        name: 'Muret',
        distance: '27 km',
        time: '30-45 min',
        zone: 'Périphérie'
    },
    {
        name: 'Saint-Orens-de-Gameville',
        distance: '10 km',
        time: '20-35 min',
        zone: 'Périphérie'
    },
    {
        name: 'Balma',
        distance: '8 km',
        time: '15-30 min',
        zone: 'Périphérie'
    },
    {
        name: "L'Union",
        distance: '9 km',
        time: '15-30 min',
        zone: 'Périphérie'
    },
    {
        name: "Castelnau-d'Estrétefonds",
        distance: '24 km',
        time: '25-40 min',
        zone: 'Autoroute'
    },
    {
        name: 'Montastruc-la-Conseillère',
        distance: '21 km',
        time: '25-40 min',
        zone: 'Autoroute'
    },
    {
        name: 'Villefranche-de-Lauragais',
        distance: '35 km',
        time: '35-50 min',
        zone: 'Autoroute'
    },
    {
        name: 'Carbonne',
        distance: '43 km',
        time: '40-55 min',
        zone: 'Autoroute'
    }
];
const requestSteps = [
    {
        icon: Shield,
        title: 'Sécurisez-vous',
        description: 'Mettez-vous en sécurité, allumez vos feux de détresse et placez votre triangle de signalisation'
    },
    {
        icon: FormInput,
        title: 'Contactez-nous',
        description: 'Remplissez notre formulaire de contact en ligne avec tous les détails nécessaires'
    },
    {
        icon: CheckCircle,
        title: 'Confirmation',
        description: 'Votre demande est immédiatement prise en compte par notre équipe'
    },
    {
        icon: Car,
        title: 'Intervention',
        description: 'Un dépanneur professionnel arrive à votre position dans les plus brefs délais'
    }
];
export const ZoneInterventionPage = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Helmet, null,
            React.createElement("title", null, "Zone d'intervention - Le Bon D\u00E9panneur Toulouse"),
            React.createElement("meta", { name: "description", content: "D\u00E9couvrez notre zone d'intervention \u00E9tendue jusqu'\u00E0 50km autour de Toulouse. Service rapide et efficace dans toute la r\u00E9gion toulousaine." })),
        React.createElement("div", { className: "bg-light-background py-24 transition-colors dark:bg-dark-background" },
            React.createElement("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" },
                React.createElement("div", { className: "text-center" },
                    React.createElement("h1", { className: "text-4xl font-bold tracking-tight text-light-text dark:text-dark-text" }, "Zone d'intervention"),
                    React.createElement("p", { className: "mt-4 text-xl text-gray-600 dark:text-gray-300" }, "Intervention rapide dans un rayon de 50 km autour de Toulouse")),
                React.createElement("div", { className: "mt-12 grid gap-8 lg:grid-cols-2" },
                    React.createElement("div", { className: "relative overflow-hidden rounded-lg bg-light-card shadow-lg dark:bg-dark-card" },
                        React.createElement("div", { className: "h-[600px]" },
                            React.createElement("iframe", { src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184913.11077703288!2d1.3628017770996094!3d43.60080769999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb6fec7552ff%3A0x406f69c2f411030!2sToulouse!5e0!3m2!1sfr!2sfr!4v1635000000000!5m2!1sfr!2sfr", width: "100%", height: "100%", style: { border: 0 }, allowFullScreen: true, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade", title: "Zone d'intervention Toulouse", className: "h-full w-full" })),
                        React.createElement("div", { className: "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white" },
                            React.createElement("div", { className: "flex items-center space-x-4" },
                                React.createElement(Clock, { className: "h-6 w-6 text-light-primary dark:text-dark-primary" }),
                                React.createElement("span", null, "Intervention moyenne : 15-45 minutes selon la zone")))),
                    React.createElement("div", { className: "space-y-6" },
                        React.createElement("div", { className: "rounded-lg bg-light-card p-8 shadow-lg dark:bg-dark-card" },
                            React.createElement("h2", { className: "text-2xl font-semibold text-light-text dark:text-dark-text" }, "Comment faire appel \u00E0 nos services"),
                            React.createElement("div", { className: "mt-6 space-y-6" }, requestSteps.map((step, index) => {
                                const Icon = step.icon;
                                return (React.createElement("div", { key: index, className: "flex items-start space-x-4" },
                                    React.createElement("div", { className: "rounded-full bg-light-primary/10 p-3 dark:bg-dark-primary/10" },
                                        React.createElement(Icon, { className: "h-6 w-6 text-light-primary dark:text-dark-primary" })),
                                    React.createElement("div", null,
                                        React.createElement("h3", { className: "font-semibold text-light-text dark:text-dark-text" },
                                            "\u00C9tape ",
                                            index + 1,
                                            " : ",
                                            step.title),
                                        React.createElement("p", { className: "mt-1 text-gray-600 dark:text-gray-300" }, step.description))));
                            })),
                            React.createElement("div", { className: "mt-8 flex justify-center" },
                                React.createElement(Link, { to: "/contact", className: "inline-flex items-center rounded-full bg-light-primary px-6 py-3 text-white transition-colors hover:bg-light-hover dark:bg-dark-primary dark:hover:bg-dark-hover" },
                                    React.createElement(FormInput, { className: "mr-2 h-5 w-5" }),
                                    "Faire une demande"))),
                        React.createElement("div", { className: "rounded-lg bg-light-card p-8 shadow-lg dark:bg-dark-card" },
                            React.createElement("h2", { className: "mb-6 text-xl font-semibold text-light-text dark:text-dark-text" }, "Notre secteur d'intervention"),
                            React.createElement("div", { className: "grid gap-4 sm:grid-cols-2" }, cities.map((city, index) => (React.createElement("div", { key: index, className: "flex items-center space-x-3 rounded-lg border border-light-border p-3 transition-all hover:border-light-primary dark:border-dark-border dark:hover:border-dark-primary" },
                                React.createElement(MapPin, { className: "h-5 w-5 flex-shrink-0 text-light-primary dark:text-dark-primary" }),
                                React.createElement("div", null,
                                    React.createElement("h3", { className: "font-medium text-light-text dark:text-dark-text" }, city.name),
                                    React.createElement("p", { className: "text-sm text-gray-500 dark:text-gray-400" },
                                        city.distance,
                                        " \u2022 ",
                                        city.time))))))),
                        React.createElement("div", { className: "rounded-lg bg-light-primary p-6 text-white dark:bg-dark-primary" },
                            React.createElement("div", { className: "flex items-center justify-between" },
                                React.createElement("div", null,
                                    React.createElement("h3", { className: "text-xl font-semibold" }, "Besoin d'assistance ?"),
                                    React.createElement("p", { className: "mt-1 font-bold" }, "Disponible 24h/24 - 7j/7")),
                                React.createElement(Link, { to: "/contact", className: "rounded-full bg-white px-6 py-3 text-light-primary transition-colors hover:bg-gray-100 dark:text-dark-primary" },
                                    React.createElement("div", { className: "flex items-center space-x-2" },
                                        React.createElement(Phone, { className: "h-5 w-5" }),
                                        React.createElement("span", { className: "font-semibold" }, "Demander une intervention")))))))))));
};
