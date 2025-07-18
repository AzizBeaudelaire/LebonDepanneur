import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AlertTriangle, Phone, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
export const EmergencyPage = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Helmet, null,
            React.createElement("title", null, "Urgence D\u00E9pannage Toulouse - Intervention imm\u00E9diate 24/7"),
            React.createElement("meta", { name: "description", content: "Service d'urgence disponible 24h/24 et 7j/7 \u00E0 Toulouse. Intervention rapide garantie pour tous vos probl\u00E8mes de plomberie, \u00E9lectricit\u00E9, ou serrurerie." })),
        React.createElement("div", { className: "bg-red-50" },
            React.createElement("div", { className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" },
                React.createElement("div", { className: "flex items-center justify-center" },
                    React.createElement(AlertTriangle, { className: "h-12 w-12 text-red-600" }),
                    React.createElement("h1", { className: "ml-4 text-4xl font-bold text-gray-900" }, "Service d'Urgence 24/7")),
                React.createElement("div", { className: "mt-12 rounded-lg bg-white p-8 shadow-lg" },
                    React.createElement("div", { className: "grid gap-8 lg:grid-cols-2" },
                        React.createElement("div", null,
                            React.createElement("h2", { className: "text-2xl font-semibold text-gray-900" }, "Besoin d'une intervention urgente ?"),
                            React.createElement("p", { className: "mt-4 text-lg text-gray-600" }, "Notre \u00E9quipe de professionnels est disponible 24h/24 et 7j/7 pour intervenir rapidement sur :"),
                            React.createElement("ul", { className: "mt-6 space-y-4 text-gray-600" },
                                React.createElement("li", { className: "flex items-center" }, "\u2022 Fuites d'eau et d\u00E9g\u00E2ts des eaux"),
                                React.createElement("li", { className: "flex items-center" }, "\u2022 Pannes \u00E9lectriques"),
                                React.createElement("li", { className: "flex items-center" }, "\u2022 Ouverture de porte et serrurerie"),
                                React.createElement("li", { className: "flex items-center" }, "\u2022 Chauffage et climatisation"))),
                        React.createElement("div", { className: "rounded-lg bg-blue-50 p-6" },
                            React.createElement("h3", { className: "text-xl font-semibold text-gray-900" }, "Contactez-nous imm\u00E9diatement"),
                            React.createElement("div", { className: "mt-6 space-y-4" },
                                React.createElement("div", { className: "flex items-center" },
                                    React.createElement(Phone, { className: "h-6 w-6 text-blue-600" }),
                                    React.createElement("a", { href: "tel:+33500000000", className: "ml-4 text-lg font-semibold text-blue-600 hover:text-blue-500" }, "05 00 00 00 00")),
                                React.createElement("div", { className: "flex items-center" },
                                    React.createElement(Clock, { className: "h-6 w-6 text-blue-600" }),
                                    React.createElement("span", { className: "ml-4 text-gray-600" }, "Disponible 24h/24 - 7j/7")),
                                React.createElement("div", { className: "flex items-center" },
                                    React.createElement(MapPin, { className: "h-6 w-6 text-blue-600" }),
                                    React.createElement("span", { className: "ml-4 text-gray-600" }, "Toulouse et sa r\u00E9gion"))),
                            React.createElement("div", { className: "mt-8" },
                                React.createElement(Link, { to: "/contact", className: "block w-full rounded-md bg-blue-600 px-4 py-3 text-center text-lg font-semibold text-white hover:bg-blue-500" }, "Demander une intervention"))))),
                React.createElement("div", { className: "mt-12 rounded-lg bg-white p-8 shadow-lg" },
                    React.createElement("h2", { className: "text-2xl font-semibold text-gray-900" }, "Pourquoi choisir notre service d'urgence ?"),
                    React.createElement("div", { className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" },
                        React.createElement("div", { className: "rounded-lg border border-gray-200 p-6" },
                            React.createElement("h3", { className: "text-lg font-semibold text-gray-900" }, "Rapidit\u00E9"),
                            React.createElement("p", { className: "mt-2 text-gray-600" }, "Intervention en moins d'une heure sur Toulouse et sa r\u00E9gion.")),
                        React.createElement("div", { className: "rounded-lg border border-gray-200 p-6" },
                            React.createElement("h3", { className: "text-lg font-semibold text-gray-900" }, "Professionnalisme"),
                            React.createElement("p", { className: "mt-2 text-gray-600" }, "Techniciens qualifi\u00E9s et exp\u00E9riment\u00E9s pour tous types d'urgences.")),
                        React.createElement("div", { className: "rounded-lg border border-gray-200 p-6" },
                            React.createElement("h3", { className: "text-lg font-semibold text-gray-900" }, "Transparence"),
                            React.createElement("p", { className: "mt-2 text-gray-600" }, "Devis clair et d\u00E9taill\u00E9 avant toute intervention."))))))));
};
