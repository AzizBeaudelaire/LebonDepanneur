import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Wrench, Truck, PenTool as Tool, Phone, Shield, Clock, Euro, ChevronDown, Globe, Plane as Crane, Key, Settings, Warehouse, SprayCan as Spray, ShoppingBag, Heart, Flame, Slice as Police, PhoneCall, AlertTriangle } from 'lucide-react';

const mainServices = [
  {
    icon: <Truck className="h-8 w-8" />,
    title: 'Dépannage & Remorquage Toulouse (31)',
    description: `Service professionnel de dépannage et remorquage auto, moto et utilitaire disponible 24h/24 et 7j/7 sur tout le bassin toulousain (Blagnac, Colomiers, Muret, etc.). 
    
    Nos dépanneuses récentes (plateaux basculants, treuils hydrauliques) nous permettent d'intervenir en toute sécurité, que vous soyez en panne sur la rocade, enlisé dans un fossé, ou bloqué dans un parking souterrain. Nous assurons le rapatriement de votre véhicule vers le garage de votre choix ou notre parc sécurisé.`,
    image: '/images/remorquage.webp'
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'Transport Véhicule France & Europe',
    description: `Convoyage spécialisé et sécurisé de votre véhicule sur de longues distances. Nous transportons des voitures de collection, des véhicules de luxe, ou de simples berlines à travers toute la France et l'Europe.
    
    Notre assurance tous risques et nos chauffeurs expérimentés vous garantissent un transport sans encombre. Chaque véhicule est consciencieusement sanglé (calage par les roues) pour préserver les châssis et jantes les plus fragiles. Suivi personnalisé tout au long du trajet.`,
    image: '/images/professional-truck-driver-entering-his-truck-long-vehicle-holding-thumbs-up.webp'
  },
  {
    icon: <ShoppingBag className="h-8 w-8" />,
    title: 'Rachat Véhicule Accidenté / Épave',
    description: `Votre voiture est en panne moteur (moteur cassé), accidentée (choc important) ou tout simplement hors d'usage ? Nous proposons un service d'achat et rachat de véhicules accidentés ou épaves au meilleur prix.
    
    Plus besoin de vous soucier de la remise en état, du contrôle technique ou d'une revente complexe : nous estimons votre véhicule rapidement, payons au comptant, et nous chargeons de l'essentiel des démarches administratives (certificat de cession). L'enlèvement de l'épave par notre dépanneuse est bien sûr entièrement géré par nos soins.`,
    image: '/images/achat_revente.webp'
  }
];

const secondaryServices = [
  {
    icon: <Car className="h-6 w-6" />,
    title: 'Assistance Dépannage 24/24',
    description: `Intervention d'urgence sur place pour batterie déchargée (booster pro), crevaison ou erreur de carburant. Diagnostic immédiat.`
  },
  {
    icon: <Crane className="h-6 w-6" />,
    title: 'Levage, Grutage, Treuillage',
    description: 'Extraction de véhicules accidentés en conditions difficiles (fossé, ravin, boue) grâce à nos treuils 4.5 tonnes.'
  },
  {
    icon: <Key className="h-6 w-6" />,
    title: 'Ouverture Porte Voiture',
    description: 'Ouverture garantie sans dégâts suite à un verrouillage accidentel. Reproduction de clés possible sur site.'
  },
  {
    icon: <Warehouse className="h-6 w-6" />,
    title: 'Mise en Fourrière',
    description: 'Enlèvement de véhicules gênants pour syndics ou copropriétés. Stockage sécurisé sur parc sous vidéosurveillance.'
  },
  {
    icon: <Settings className="h-6 w-6" />,
    title: 'Réparation en Atelier',
    description: 'Réparation rapide dans nos ateliers partenaires. Vidange, freinage, pneus... devis sans surprise.'
  },
  {
    icon: <Spray className="h-6 w-6" />,
    title: 'Nettoyage & Detailing',
    description: 'Rénovation esthétique complète : lavage haute pression, polissage, traitement céramique et rénovation phares.'
  }
];

const emergencySteps = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Sécuriser',
    description: 'Mettez-vous en sécurité derrière la glissière et activez vos feux de détresse.'
  },
  {
    icon: <Phone className="h-8 w-8" />,
    title: 'Contacter',
    description: 'Appelez-nous au 07 68 26 10 50 ou contactez les services de secours nécessaires.'
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: 'Attendre',
    description: 'Patientez au chaud ou en lieu sûr. Nous arrivons en moyenne en moins de 30 min.'
  }
];

const emergencyNumbers = [
  {
    name: 'SAMU (Médical)',
    number: '15',
    icon: <AlertTriangle className="h-5 w-5 text-red-600" />
  },
  {
    name: 'Pompiers (Incendie/Secours)',
    number: '18',
    icon: <AlertTriangle className="h-5 w-5 text-red-600" />
  },
  {
    name: 'Gendarmerie / Police',
    number: '17',
    icon: <AlertTriangle className="h-5 w-5 text-blue-600" />
  },
  {
    name: 'Urgence Européen (Mobile)',
    number: '112',
    icon: <AlertTriangle className="h-5 w-5 text-yellow-600" />
  }
];

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Services Dépannage Auto 24/7 & Remorquage Toulouse | Rachat Épave 31</title>
        <meta
          name="description"
          content="Découvrez nos services phares : remorquage voiture Toulouse 24h/24, transport Europe, rachat de véhicule accidenté et épave, et assistance dépannage d'urgence."
        />
      </Helmet>

      <div className="bg-light-background py-12 transition-colors dark:bg-dark-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* HERO SECTION DE LA PAGE SERVICES */}
          <div className="relative mb-20 overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 text-white shadow-2xl">
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 p-10 md:p-16">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                  Expert en <span className="text-light-primary">Dépannage Auto</span> & Services Automobiles
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed mb-8">
                  De l'assistance routière d'urgence sous 30 minutes au rachat cash de véhicules accidentés, Le Bon Remorquage est votre partenaire exclusif en Haute-Garonne (31) avec une qualité de service Premium.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:0768261050"
                    className="inline-flex items-center rounded-full bg-light-primary px-8 py-4 text-white hover:bg-light-hover transition-all shadow-[0_0_20px_rgba(255,165,0,0.4)] hover:shadow-[0_0_30px_rgba(255,165,0,0.6)] font-bold text-lg"
                  >
                    <Phone className="mr-3 h-6 w-6 animate-pulse" />
                    SOS Dépannage 24/7
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center rounded-full border-2 border-white/50 bg-white/10 backdrop-blur-sm px-8 py-4 text-white transition-all hover:bg-white hover:text-gray-900 font-semibold"
                  >
                    Demander l'enlèvement d'une épave
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 right-10 -translate-y-1/2 hidden lg:block opacity-20 pointer-events-none">
              <Car className="h-[400px] w-[400px]" />
            </div>
          </div>

          {/* NOS 3 PILIERS D'ACTIVITÉ (SEO LOURD) */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-light-text dark:text-dark-text tracking-tight">
                Nos Domaines d'Intervention Prioritaires
              </h2>
              <div className="mx-auto mt-4 h-1.5 w-24 bg-light-primary rounded-full" />
            </div>

            <div className="space-y-16">
              {mainServices.map((service, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className={`flex flex-col lg:flex-row overflow-hidden rounded-3xl bg-white dark:bg-dark-card shadow-xl border border-gray-100 dark:border-dark-border group ${isEven ? '' : 'lg:flex-row-reverse'}`}
                  >
                    {/* Colonne Image */}
                    <div className="lg:w-5/12 overflow-hidden relative min-h-[300px] lg:min-h-full">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent lg:hidden" />
                      {/* Badge icône flottant sur grand écran */}
                      <div className={`hidden lg:flex absolute top-8 ${isEven ? 'right-8' : 'left-8'} h-16 w-16 bg-light-primary text-white rounded-2xl items-center justify-center shadow-2xl rotate-3 shadow-light-primary/30 z-20`}>
                        {service.icon}
                      </div>
                    </div>

                    {/* Colonne Contenu SEO */}
                    <div className="p-8 md:p-12 lg:w-7/12 flex flex-col justify-center relative z-10 bg-white dark:bg-dark-card">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="lg:hidden p-3 bg-light-primary/10 dark:bg-dark-primary/20 text-light-primary dark:text-dark-primary rounded-xl">
                          {service.icon}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                          {service.title}
                        </h3>
                      </div>

                      <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300 max-w-none">
                        {service.description.split('\n\n').map((paragraph, i) => (
                          <p key={i} className="mb-4 leading-relaxed">{paragraph}</p>
                        ))}
                      </div>

                      <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800">
                        <Link to="/contact" className="inline-flex items-center text-light-primary dark:text-dark-primary font-bold hover:underline">
                          Obtenir un devis gratuit pour ce service <Globe className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* GRILLE DES SERVICES SECONDAIRES */}
          <section className="mb-24">
            <h2 className="text-2xl md:text-3xl font-bold text-light-text dark:text-dark-text border-b-4 border-light-primary inline-block pb-2 mb-10">
              Mais aussi... Assistance & Ateliers
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {secondaryServices.map((service, index) => (
                <div key={index} className="bg-gray-50 dark:bg-dark-card/50 rounded-2xl p-6 border border-gray-100 dark:border-dark-border hover:border-light-primary dark:hover:border-dark-primary transition-colors">
                  <div className="h-12 w-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-sm text-light-primary dark:text-dark-primary mb-4">
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SÉCURITÉ ET NUMÉROS D'URGENCE LÉGAL */}
          <section className="bg-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
            {/* Cercles de fond décoratifs */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-light-primary opacity-10 blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-blue-500 opacity-10 blur-3xl" />

            <div className="relative z-10 grid gap-16 lg:grid-cols-2 items-center">
              {/* Protocol d'Urgence */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Que faire en cas d'accident ?</h3>
                <div className="space-y-6">
                  {emergencySteps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 text-light-primary">
                        {step.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">{index + 1}. {step.title}</h4>
                        <p className="text-gray-400 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Numéros d'urgence */}
              <div className="bg-black/40 rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <PhoneCall className="text-light-primary h-5 w-5" />
                  Numéros d'Urgence Publics
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {emergencyNumbers.map((emergency, index) => (
                    <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        {emergency.icon}
                        <span className="text-sm font-medium text-gray-300">{emergency.name}</span>
                      </div>
                      <span className="text-2xl font-black text-white">{emergency.number}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/10 text-center">
                  <p className="text-sm text-gray-400 mb-2">Une fois en sécurité, appelez la dépanneuse :</p>
                  <a href="tel:0768261050" className="inline-block text-2xl font-bold text-light-primary hover:text-white transition-colors">
                    07 68 26 10 50
                  </a>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
};

export default ServicesPage;