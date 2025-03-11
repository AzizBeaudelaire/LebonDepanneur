import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-light-header text-white transition-colors duration-200 dark:bg-dark-header">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">Dépannage Auto Toulouse</h3>
            <p className="mt-4 text-gray-300">
              Service de dépannage automobile professionnel disponible 24h/24 et 7j/7 sur Toulouse et sa région.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <a href="tel:+33500000000" className="text-gray-300 transition-colors duration-200 hover:text-white">
                  05 00 00 00 00
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <a href="mailto:contact@depannage-toulouse.fr" className="text-gray-300 transition-colors duration-200 hover:text-white">
                  contact@depannage-toulouse.fr
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                <span className="text-gray-300">Toulouse, France</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Liens utiles</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/mentions-legales" className="text-gray-300 transition-colors duration-200 hover:text-white">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="/politique-confidentialite" className="text-gray-300 transition-colors duration-200 hover:text-white">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Dépannage Auto Toulouse. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};