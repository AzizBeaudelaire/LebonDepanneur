import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, CheckCircle } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-light-header text-white transition-colors duration-200 dark:bg-dark-header border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4"> {/* Passé en 4 colonnes pour le SEO */}

          {/* Colonne 1: Identité & Niche */}
          <div>
            <div className="flex items-center">
              <img
                src="/images/LogoDépannage.webp"
                alt="Le Bon Remorquage - Dépannage Auto Toulouse"
                className="h-12 w-auto"
              />
            </div>
            <p className="mt-4 text-sm text-gray-300">
              Expert en <strong>dépannage auto</strong> et <strong>remorquage voiture</strong> à Toulouse.
              Service d'<strong>auto secours 24h/24</strong> rapide et efficace pour tout type de véhicule.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="https://www.instagram.com/lebon_remorquage/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-light-primary dark:hover:bg-dark-primary"
                aria-label="Instagram Le Bon Remorquage"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Colonne 2: Services de Niche (SEO) */}
          <div>
            <h3 className="text-lg font-semibold border-b border-light-primary pb-2 inline-block">Nos Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li><Link to="/services" className="hover:text-light-primary transition-colors">• Remorquage voiture & moto</Link></li>
              <li><Link to="/services" className="hover:text-light-primary transition-colors">• Dépannage batterie & booster</Link></li>
              <li><Link to="/services" className="hover:text-light-primary transition-colors">• Ouverture porte voiture bloquée</Link></li>
              <li><Link to="/services" className="hover:text-light-primary transition-colors">• Erreur carburant (vidange)</Link></li>
              <li><Link to="/services" className="hover:text-light-primary transition-colors">• Remorquage parking sous-sol</Link></li>
              <li><Link to="/services" className="hover:text-light-primary transition-colors">• Transport longue distance Europe</Link></li>
            </ul>
          </div>

          {/* Colonne 3: Zone d'intervention (SEO Local) */}
          <div>
            <h3 className="text-lg font-semibold border-b border-light-primary pb-2 inline-block">Secteur 31 & 82</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li><Link to="/zone-intervention" className="hover:text-light-primary transition-colors">• Toulouse Centre & Périphérie</Link></li>
              <li><Link to="/zone-intervention" className="hover:text-light-primary transition-colors">• Blagnac, Colomiers, Muret</Link></li>
              <li><Link to="/zone-intervention" className="hover:text-light-primary transition-colors">• Balma, L'Union, Ramonville</Link></li>
              <li><Link to="/zone-intervention" className="hover:text-light-primary transition-colors">• Auto Secours Montauban (82)</Link></li>
              <li><Link to="/zone-intervention" className="hover:text-light-primary transition-colors">• Intervention Rocade & Autoroute</Link></li>
            </ul>
          </div>

          {/* Colonne 4: Contact & Urgence */}
          <div>
            <h3 className="text-lg font-semibold border-b border-light-primary pb-2 inline-block">Contact Urgence</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-light-primary" />
                <a href="tel:0768261050" className="text-lg font-bold hover:text-light-primary transition-colors">
                  07 68 26 10 50
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-light-primary mt-1" />
                <span className="text-sm text-gray-300">
                  Siège : 2 passage Bailly,<br />31100 Toulouse
                </span>
              </li>
              <li className="flex items-center text-sm">
                <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                <span className="text-gray-300">Assistance 24/7 - Intervention &lt; 30min</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Liens secondaires et Copyright */}
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex space-x-6 text-xs text-gray-400">
            <Link to="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
            <Link to="/politique-confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Demander un devis</Link>
          </div>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Le Bon Remorquage - Auto Secours Toulouse & 31.
          </p>
        </div>
      </div>
    </footer>
  );
};