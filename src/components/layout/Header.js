import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
export const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (React.createElement("header", { className: "sticky top-0 z-50 bg-light-header text-white transition-colors duration-300 dark:bg-dark-header" },
        React.createElement("nav", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" },
            React.createElement("div", { className: "flex h-16 sm:h-20 md:h-24 items-center justify-between" },
                React.createElement(Link, { to: "/", className: "flex items-center" },
                    React.createElement("img", { src: "/images/LogoD\u00E9pannage.webp", alt: "Le Bon Remorquage Logo", className: "h-12 sm:h-16 md:h-20 w-auto" })),
                React.createElement("div", { className: "flex md:hidden" },
                    React.createElement("button", { onClick: () => setIsMenuOpen(!isMenuOpen), className: "inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-light-primary/10 dark:hover:bg-dark-primary/10", "aria-expanded": "false" },
                        React.createElement("span", { className: "sr-only" }, "Open main menu"),
                        isMenuOpen ? (React.createElement(X, { className: "h-6 w-6", "aria-hidden": "true" })) : (React.createElement(Menu, { className: "h-6 w-6", "aria-hidden": "true" })))),
                React.createElement("div", { className: "hidden items-center space-x-4 lg:space-x-8 md:flex" },
                    React.createElement(Link, { to: "/", className: "rounded-md px-2 lg:px-3 py-2 text-sm lg:text-base text-white transition-colors hover:bg-light-primary/10 dark:hover:bg-dark-primary/10" }, "Accueil"),
                    React.createElement(Link, { to: "/services", className: "text-sm lg:text-base text-white transition-colors hover:text-light-primary dark:hover:text-dark-primary" }, "Services"),
                    React.createElement(Link, { to: "/gallerie", className: "text-sm lg:text-base text-white transition-colors hover:text-light-primary dark:hover:text-dark-primary" }, "Gallerie"),
                    React.createElement(Link, { to: "/zone-intervention", className: "text-sm lg:text-base text-white transition-colors hover:text-light-primary dark:hover:text-dark-primary" }, "Zone d'intervention"),
                    React.createElement(Link, { to: "/contact", className: "text-sm lg:text-base text-white transition-colors hover:text-light-primary dark:hover:text-dark-primary" }, "Contact"),
                    React.createElement("button", { onClick: toggleTheme, className: "rounded-full p-2 text-white transition-colors hover:bg-light-primary/10 dark:hover:bg-dark-primary/10", "aria-label": "Toggle theme" }, theme === 'light' ? React.createElement(Moon, { className: "h-5 w-5" }) : React.createElement(Sun, { className: "h-5 w-5" })))),
            React.createElement("div", { className: `${isMenuOpen ? 'block' : 'hidden'} md:hidden fixed inset-0 top-16 sm:top-20 bg-light-header dark:bg-dark-header z-50` },
                React.createElement("div", { className: "flex flex-col space-y-2 px-4 py-6" },
                    React.createElement(Link, { to: "/", className: "block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-light-primary/10 dark:hover:bg-dark-primary/10", onClick: () => setIsMenuOpen(false) }, "Accueil"),
                    React.createElement(Link, { to: "/services", className: "block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-light-primary/10 dark:hover:bg-dark-primary/10", onClick: () => setIsMenuOpen(false) }, "Services"),
                    React.createElement(Link, { to: "/gallerie", className: "block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-light-primary/10 dark:hover:bg-dark-primary/10", onClick: () => setIsMenuOpen(false) }, "Gallerie"),
                    React.createElement(Link, { to: "/zone-intervention", className: "block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-light-primary/10 dark:hover:bg-dark-primary/10", onClick: () => setIsMenuOpen(false) }, "Zone d'intervention"),
                    React.createElement(Link, { to: "/contact", className: "block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-light-primary/10 dark:hover:bg-dark-primary/10", onClick: () => setIsMenuOpen(false) }, "Contact"),
                    React.createElement("button", { onClick: () => {
                            toggleTheme();
                            setIsMenuOpen(false);
                        }, className: "mt-4 flex w-full items-center rounded-md px-3 py-2 text-base font-medium text-white hover:bg-light-primary/10 dark:hover:bg-dark-primary/10" }, theme === 'light' ? (React.createElement(React.Fragment, null,
                        React.createElement(Moon, { className: "mr-2 h-5 w-5" }),
                        "Mode sombre")) : (React.createElement(React.Fragment, null,
                        React.createElement(Sun, { className: "mr-2 h-5 w-5" }),
                        "Mode clair"))))))));
};
