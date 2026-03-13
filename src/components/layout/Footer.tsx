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
              <a
                href="https://wa.me/33768261050"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-light-primary dark:hover:bg-dark-primary"
                aria-label="Contactez-nous sur WhatsApp"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a
                href="https://snapchat.com/t/4NlfPTuX"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-light-primary dark:hover:bg-dark-primary"
                aria-label="Ajoutez-nous sur Snapchat"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.448-1.679.809-.766.495-1.429.92-2.684.92-.015 0-.039 0-.054 0h-.031c-1.29 0-1.953-.42-2.744-.93-.57-.361-1.094-.704-1.694-.809-.314-.06-.612-.074-.912-.074-.54 0-.937.064-1.272.135-.211.039-.391.074-.54.074-.299 0-.494-.134-.554-.405-.061-.193-.09-.376-.135-.554-.045-.195-.105-.48-.164-.57-1.873-.284-2.905-.703-3.145-1.271-.03-.075-.045-.149-.045-.225-.015-.239.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.45-.884-.674-1.333-.809-.12-.045-.24-.09-.334-.119-.93-.375-1.319-.765-1.319-1.183 0-.374.324-.689.764-.923.145-.061.314-.091.494-.091.12 0 .299.015.449.104.359.18.719.285 1.019.285.201 0 .33-.044.406-.089-.012-.165-.022-.329-.034-.509l-.003-.06c-.104-1.628-.23-3.654.299-4.847 1.584-3.545 4.939-3.821 5.93-3.821z"/>
                </svg>
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