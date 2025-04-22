import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import ServicesPage from '../pages/ServicesPage';
import { ContactPage } from '../pages/ContactPage';
import { EmergencyPage } from '../pages/EmergencyPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { ZoneInterventionPage } from '../pages/ZoneInterventionPage';
import GalleryPage from '../pages/GalleryPage';
export const AppRoutes = () => {
    return (React.createElement(Routes, null,
        React.createElement(Route, { path: "/", element: React.createElement(HomePage, null) }),
        React.createElement(Route, { path: "/services", element: React.createElement(ServicesPage, null) }),
        React.createElement(Route, { path: "/contact", element: React.createElement(ContactPage, null) }),
        React.createElement(Route, { path: "/urgence", element: React.createElement(EmergencyPage, null) }),
        React.createElement(Route, { path: "/zone-intervention", element: React.createElement(ZoneInterventionPage, null) }),
        React.createElement(Route, { path: "/gallerie", element: React.createElement(GalleryPage, null) }),
        React.createElement(Route, { path: "*", element: React.createElement(NotFoundPage, null) })));
};
