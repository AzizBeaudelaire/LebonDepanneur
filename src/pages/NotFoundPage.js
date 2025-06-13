import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
export const NotFoundPage = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Helmet, null,
            React.createElement("title", null, "Page non trouv\u00E9e - D\u00E9pannage Toulouse"),
            React.createElement("meta", { name: "description", content: "La page que vous recherchez n'existe pas. Retournez \u00E0 l'accueil pour d\u00E9couvrir nos services de d\u00E9pannage \u00E0 Toulouse." })),
        React.createElement("div", { className: "min-h-[70vh] bg-gray-50 px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8" },
            React.createElement("div", { className: "mx-auto max-w-max" },
                React.createElement("main", { className: "sm:flex" },
                    React.createElement("p", { className: "text-4xl font-bold tracking-tight text-blue-600 sm:text-5xl" }, "404"),
                    React.createElement("div", { className: "sm:ml-6" },
                        React.createElement("div", { className: "sm:border-l sm:border-gray-200 sm:pl-6" },
                            React.createElement("h1", { className: "text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl" }, "Page non trouv\u00E9e"),
                            React.createElement("p", { className: "mt-4 text-base text-gray-500" }, "D\u00E9sol\u00E9, nous n'avons pas trouv\u00E9 la page que vous recherchez.")),
                        React.createElement("div", { className: "mt-8 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6" },
                            React.createElement(Link, { to: "/", className: "inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" },
                                React.createElement(Home, { className: "mr-2 h-5 w-5" }),
                                "Retour \u00E0 l'accueil"),
                            React.createElement(Link, { to: "/contact", className: "inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" }, "Nous contacter"))))))));
};
