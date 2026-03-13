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
const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center">
    <div className="h-16 w-16 animate-spin rounded-full border-4 border-light-primary border-t-transparent dark:border-dark-primary dark:border-t-transparent"></div>
  </div>
);

export const AppRoutes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/urgence" element={<EmergencyPage />} />
        <Route path="/zone-intervention" element={<ZoneInterventionPage />} />
        <Route path="/gallerie" element={<GalleryPage />} />
        <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};