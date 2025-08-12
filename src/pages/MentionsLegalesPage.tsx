import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Building2, Mail, Phone, Globe, Shield, Cookie, FileText } from 'lucide-react';

export const MentionsLegalesPage = () => {
  return (
    <>
      <Helmet>
        <title>Mentions légales - Le Bon Remorquage</title>
        <meta 
          name="description" 
          content="Mentions légales du site Le Bon Remorquage. Informations sur l'éditeur, l'hébergeur et les conditions d'utilisation du site." 
        />
      </Helmet>

      <div className="bg-light-background py-12 transition-colors dark:bg-dark-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-white p-8 shadow-lg transition-colors dark:bg-dark-card">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-light-text dark:text-dark-text">
                Mentions légales
              </h1>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                www.lebonremorquage.com
              </p>
            </div>

            <div className="prose prose-gray max-w-none dark:prose-invert">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
                Conformément à la loi n°2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN), 
                les informations suivantes sont portées à la connaissance des utilisateurs du site www.lebonremorquage.com :
              </p>

              {/* Section 1: Éditeur du site */}
              <div className="mb-8">
                <div className="mb-4 flex items-center">
                  <Building2 className="mr-3 h-6 w-6 text-light-primary dark:text-dark-primary" />
                  <h2 className="text-xl font-semibold text-light-text dark:text-dark-text">
                    1. Éditeur du site
                  </h2>
                </div>
                <div className="ml-9 space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Raison sociale :</strong> LE BON REMORQUAGE</p>
                  <p><strong>Forme juridique :</strong> SASU – Société par Actions Simplifiée Unipersonnelle</p>
                  <p><strong>Siège social :</strong> Toulouse, France</p>
                  <p><strong>SIRET :</strong> 947 554 663 00015</p>
                  <p><strong>RCS :</strong> Toulouse</p>
                  <p><strong>Capital social :</strong> 2 000 €</p>
                  <p><strong>Responsable de la publication :</strong> M. Nicolas PLANELLES</p>
                  <div className="flex items-center">
                    <Mail className="mr-2 h-4 w-4 text-light-primary dark:text-dark-primary" />
                    <a 
                      href="mailto:contactlebonremorquage@gmail.com"
                      className="text-light-primary hover:text-light-hover dark:text-dark-primary dark:hover:text-dark-hover"
                    >
                      contactlebonremorquage@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Section 2: Hébergeur */}
              <div className="mb-8">
                <div className="mb-4 flex items-center">
                  <Globe className="mr-3 h-6 w-6 text-light-primary dark:text-dark-primary" />
                  <h2 className="text-xl font-semibold text-light-text dark:text-dark-text">
                    2. Hébergeur
                  </h2>
                </div>
                <div className="ml-9 space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Hébergeur :</strong> OVH SAS</p>
                  <p><strong>Adresse :</strong> 2 rue Kellermann – 59100 Roubaix – France</p>
                  <div className="flex items-center">
                    <Phone className="mr-2 h-4 w-4 text-light-primary dark:text-dark-primary" />
                    <span>1007</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="mr-2 h-4 w-4 text-light-primary dark:text-dark-primary" />
                    <a 
                      href="https://www.ovhcloud.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-light-primary hover:text-light-hover dark:text-dark-primary dark:hover:text-dark-hover"
                    >
                      www.ovhcloud.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Section 3: Conception et développement */}
              <div className="mb-8">
                <div className="mb-4 flex items-center">
                  <FileText className="mr-3 h-6 w-6 text-light-primary dark:text-dark-primary" />
                  <h2 className="text-xl font-semibold text-light-text dark:text-dark-text">
                    3. Conception et développement
                  </h2>
                </div>
                <div className="ml-9 space-y-2 text-gray-700 dark:text-gray-300">
                  <p><strong>Responsable technique :</strong> Hugo-Mehdi TAJ</p>
                  <div className="flex items-center">
                    <Mail className="mr-2 h-4 w-4 text-light-primary dark:text-dark-primary" />
                    <a 
                      href="mailto:hugo.mehdi197@gmail.com"
                      className="text-light-primary hover:text-light-hover dark:text-dark-primary dark:hover:text-dark-hover"
                    >
                      hugo.mehdi197@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Section 4: Propriété intellectuelle */}
              <div className="mb-8">
                <div className="mb-4 flex items-center">
                  <Shield className="mr-3 h-6 w-6 text-light-primary dark:text-dark-primary" />
                  <h2 className="text-xl font-semibold text-light-text dark:text-dark-text">
                    4. Propriété intellectuelle
                  </h2>
                </div>
                <div className="ml-9 text-gray-700 dark:text-gray-300">
                  <p>
                    Tous les contenus présents sur le site (textes, images, logos, etc.) sont protégés par le droit d'auteur. 
                    Toute reproduction sans autorisation est interdite.
                  </p>
                </div>
              </div>

              {/* Section 5: Données personnelles */}
              <div className="mb-8">
                <div className="mb-4 flex items-center">
                  <Shield className="mr-3 h-6 w-6 text-light-primary dark:text-dark-primary" />
                  <h2 className="text-xl font-semibold text-light-text dark:text-dark-text">
                    5. Données personnelles
                  </h2>
                </div>
                <div className="ml-9 space-y-3 text-gray-700 dark:text-gray-300">
                  <p>
                    Le site peut recueillir certaines données personnelles via ses formulaires (nom, email, téléphone). 
                    Ces données sont strictement nécessaires au traitement des demandes.
                  </p>
                  <p>
                    <strong>Le responsable du traitement est LE BON REMORQUAGE.</strong>
                  </p>
                  <p>
                    Les données ne sont ni cédées ni revendues, et sont conservées pour une durée conforme à la réglementation en vigueur.
                  </p>
                  <p>
                    Conformément à la loi « Informatique et Libertés » et au RGPD, vous pouvez exercer vos droits d'accès, 
                    de rectification ou de suppression en écrivant à :
                  </p>
                  <div className="flex items-center">
                    <Mail className="mr-2 h-4 w-4 text-light-primary dark:text-dark-primary" />
                    <a 
                      href="mailto:contactlebonremorquage@gmail.com"
                      className="text-light-primary hover:text-light-hover dark:text-dark-primary dark:hover:text-dark-hover"
                    >
                      contactlebonremorquage@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Section 6: Cookies */}
              <div className="mb-8">
                <div className="mb-4 flex items-center">
                  <Cookie className="mr-3 h-6 w-6 text-light-primary dark:text-dark-primary" />
                  <h2 className="text-xl font-semibold text-light-text dark:text-dark-text">
                    6. Cookies
                  </h2>
                </div>
                <div className="ml-9 text-gray-700 dark:text-gray-300">
                  <p>
                    Des cookies peuvent être utilisés pour améliorer la navigation ou mesurer l'audience. 
                    Vous pouvez les refuser via votre navigateur.
                  </p>
                </div>
              </div>

              {/* Section 7: Contact */}
              <div className="mb-8">
                <div className="mb-4 flex items-center">
                  <Mail className="mr-3 h-6 w-6 text-light-primary dark:text-dark-primary" />
                  <h2 className="text-xl font-semibold text-light-text dark:text-dark-text">
                    7. Contact
                  </h2>
                </div>
                <div className="ml-9 space-y-2 text-gray-700 dark:text-gray-300">
                  <p>Pour toute question liée au site ou à son contenu :</p>
                  <div className="flex items-center">
                    <Mail className="mr-2 h-4 w-4 text-light-primary dark:text-dark-primary" />
                    <a 
                      href="mailto:contactlebonremorquage@gmail.com"
                      className="text-light-primary hover:text-light-hover dark:text-dark-primary dark:hover:text-dark-hover"
                    >
                      contactlebonremorquage@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Footer de la page */}
              <div className="mt-12 border-t border-gray-200 pt-6 text-center dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};