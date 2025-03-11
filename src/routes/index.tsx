import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { ServicesPage } from '../pages/ServicesPage';
import { ContactPage } from '../pages/ContactPage';
import { EmergencyPage } from '../pages/EmergencyPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { ZoneInterventionPage } from '../pages/ZoneInterventionPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/urgence" element={<EmergencyPage />} />
      <Route path="/zone-intervention" element={<ZoneInterventionPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};