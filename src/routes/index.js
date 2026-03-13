import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
// Code Splitting - Lazy Loading des Pages
const HomePage = React.lazy(() => import('../pages/HomePage').then(module => ({ default: module.HomePage })));
const ServicesPage = React.lazy(() => import('../pages/ServicesPage'));
const ContactPage = React.lazy(() => import('../pages/ContactPage').then(module => ({ default: module.ContactPage })));
const EmergencyPage = React.lazy(() => import('../pages/EmergencyPage').then(module => ({ default: module.EmergencyPage })));
const NotFoundPage = React.lazy(() => import('../pages/NotFoundPage').then(module => ({ default: module.NotFoundPage })));
const ZoneInterventionPage = React.lazy(() => import('../pages/ZoneInterventionPage').then(module => ({ default: module.ZoneInterventionPage })));
const GalleryPage = React.lazy(() => import('../pages/GalleryPage'));
const MentionsLegalesPage = React.lazy(() => import('../pages/MentionsLegalesPage').then(module => ({ default: module.MentionsLegalesPage })));
// Loading Spinner for Fallback
const PageLoader = () => (React.createElement("div", { className: "flex min-h-screen items-center justify-center" },
    React.createElement("div", { className: "h-16 w-16 animate-spin rounded-full border-4 border-light-primary border-t-transparent dark:border-dark-primary dark:border-t-transparent" })));
export const AppRoutes = () => {
    return (React.createElement(Suspense, { fallback: React.createElement(PageLoader, null) },
        React.createElement(Routes, null,
            React.createElement(Route, { path: "/", element: React.createElement(HomePage, null) }),
            React.createElement(Route, { path: "/services", element: React.createElement(ServicesPage, null) }),
            React.createElement(Route, { path: "/contact", element: React.createElement(ContactPage, null) }),
            React.createElement(Route, { path: "/urgence", element: React.createElement(EmergencyPage, null) }),
            React.createElement(Route, { path: "/zone-intervention", element: React.createElement(ZoneInterventionPage, null) }),
            React.createElement(Route, { path: "/gallerie", element: React.createElement(GalleryPage, null) }),
            React.createElement(Route, { path: "/mentions-legales", element: React.createElement(MentionsLegalesPage, null) }),
            React.createElement(Route, { path: "*", element: React.createElement(NotFoundPage, null) }))));
};
