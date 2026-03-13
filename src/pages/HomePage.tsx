import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Globe, Clock, PenTool as Tool, Truck, Wrench, CheckCircle,
  Phone, Car, Plane as Crane, Key, Settings, Warehouse,
  Award, Shield, Star, MapPin, Umbrella, Zap, Fuel, Search, HardHat
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const garagesPartenaires = [
  { nom: "Garage Central Auto", ville: "Toulouse Centre", specialites: ["Mécanique générale", "Diagnostic électronique"] },
  { nom: "Auto Service Premium", ville: "Blagnac", specialites: ["Véhicules premium", "Carrosserie"] },
  { nom: "Rapid'Auto Services", ville: "Colomiers", specialites: ["Réparation rapide", "Pneumatiques"] },
  { nom: "Garage de la Gare", ville: "Toulouse Sud", specialites: ["Toutes marques", "Climatisation"] }
];

// ✅ Liste de services exclusivement basée sur tes choix
const servicesDetaille = [
  { icon: Globe, title: "Transport de véhicule Europe", desc: "Convoyage professionnel de votre véhicule en France et partout en Europe." },
  { icon: Zap, title: "Assistance routière urgente", desc: "Intervention immédiate pour batterie HS, crevaison ou panne moteur." },
  { icon: Wrench, title: "Dépannage mécanique Toulouse", desc: "Diagnostic et réparations légères sur place pour redémarrer rapidement." },
  { icon: Truck, title: "Remorquage voiture / moto", desc: "Transport sécurisé de votre véhicule vers le garage de votre choix." },
  { icon: Crane, title: "Levage, Grutage & Treuillage", desc: "Récupération de véhicules accidentés ou enlisés avec matériel spécialisé." },
  { icon: Search, title: "Enlèvement fourrière / épave", desc: "Assistance transport pour sortie de fourrière ou enlèvement de véhicule hors d'usage." },
  { icon: Settings, title: "Réparation rapide en atelier", desc: "Prise en charge de votre véhicule dans nos ateliers partenaires pour réparations express." },
  { icon: Key, title: "Ouverture de porte & Perte de clés", desc: "Ouverture sécurisée de votre portière sans dégâts en cas d'oubli de clés." },
  { icon: HardHat, title: "Nettoyage & Detailing complet", desc: "Remise à neuf esthétique intérieure et extérieure de votre véhicule." },
  { icon: Car, title: "Estimation Achat-Revente", desc: "Service d'expertise et de conseil pour l'achat ou la revente de votre auto." }
];

const whyChooseUs = [
  { icon: Clock, title: "Intervention rapide", description: "Arrivée en moins de 30 minutes sur Toulouse.", image: "/images/Inter_rapide.webp" },
  { icon: Tool, title: "Expertise technique", description: "Techniciens qualifiés et matériel professionnel.", image: "/images/Expert_tech.webp" },
  { icon: Car, title: "Tous véhicules", description: "De la citadine au poids lourd.", image: "/images/All_car.webp" },
  { icon: Umbrella, title: "Assurance complète", description: "Véhicules et clients entièrement assurés.", image: "/images/Assurance.webp" }
];

export const HomePage = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <Helmet>
        <title>Dépannage & Remorquage Auto Toulouse 24h/24 | Expert Auto Secours 31</title>
        <meta
          name="description"
          content="Besoin d'un dépannage auto urgent à Toulouse ? Arrivée en 30 min. Remorquage voiture, moto, assistance 24j/7 et transport Europe. Devis Gratuit."
        />
      </Helmet>

      {/* --- HERO SECTION --- */}
      <div className="relative min-h-[90vh] bg-gray-900 flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{ backgroundImage: 'url("/images/hero/hero-background.jpg")' }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center lg:text-left lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-2/3">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              Dépannage & Remorquage <span className="text-light-primary dark:text-dark-primary">Toulouse</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-gray-200 sm:text-2xl font-medium">
              Assistance routière urgente 24h/24 et 7j/7.
              <span className="block text-light-primary font-bold">Arrivée d'une dépanneuse en moins de 30 min.</span>
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="tel:0768261050" className="flex items-center justify-center gap-3 rounded-full bg-light-primary px-8 py-4 text-xl font-bold text-white hover:bg-light-hover transition-all shadow-lg hover:scale-105">
                <Phone className="h-6 w-6 animate-pulse" />
                07 68 26 10 50
              </a>
              <Link to="/contact" className="flex items-center justify-center rounded-full border-2 border-white px-8 py-4 text-xl font-bold text-white hover:bg-white hover:text-gray-900 transition-all">
                Devis Gratuit
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-white/90">
              <div className="flex items-center gap-2 text-sm font-semibold"><CheckCircle className="text-green-500 h-5 w-5" /> Agréé Assurances</div>
              <div className="flex items-center gap-2 text-sm font-semibold"><CheckCircle className="text-green-500 h-5 w-5" /> Intervention 30 min</div>
              <div className="flex items-center gap-2 text-sm font-semibold"><CheckCircle className="text-green-500 h-5 w-5" /> Devis par téléphone</div>
              <div className="flex items-center gap-2 text-sm font-semibold"><CheckCircle className="text-green-500 h-5 w-5" /> 7j/7 - 24h/24</div>
            </div>
          </div>
        </div>
      </div>

      {/* --- SERVICES GRID (SEO Densité) --- */}
      <div className="bg-white py-16 dark:bg-dark-background">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">Nos Services de Dépannage</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Une solution complète pour votre sérénité sur la route.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {servicesDetaille.map((s, i) => (
              <div key={i} className="p-8 rounded-2xl bg-gray-50 dark:bg-dark-card border border-gray-100 dark:border-dark-border hover:shadow-xl transition-shadow">
                <s.icon className="h-12 w-12 text-light-primary mb-6" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{s.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- SECTION POURQUOI NOUS CHOISIR --- */}
      <div className="bg-gray-50 py-16 dark:bg-dark-background/50">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-3xl font-bold mb-16 dark:text-white">Pourquoi choisir Le Bon Remorquage ?</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="group relative h-80 overflow-hidden rounded-2xl shadow-lg">
                <div className="absolute inset-0 bg-cover bg-center transition-transform group-hover:scale-110" style={{ backgroundImage: `url(${item.image})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-6 text-white text-center">
                  <div className="mx-auto mb-4 bg-light-primary p-3 rounded-full"><item.icon className="h-6 w-6" /></div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- STOCKAGE SÉCURISÉ --- */}
      <div className="py-16 bg-white dark:bg-dark-card transition-colors">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-black text-white shadow-2xl transition-transform hover:-translate-y-1 duration-300 hover:shadow-light-primary/20">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-light-primary opacity-20 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-48 w-48 rounded-full bg-light-primary/30 blur-2xl pointer-events-none" />
            <div className="relative px-8 py-12 md:p-14 flex flex-col items-center text-center md:flex-row md:text-left gap-10">
              <div className="flex-shrink-0 relative">
                <div className="absolute inset-0 bg-light-primary rounded-full blur-xl opacity-50 animate-pulse pointer-events-none" />
                <Warehouse className="relative h-24 w-24 text-white drop-shadow-lg" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                  <Shield className="h-8 w-8 text-light-primary flex-shrink-0" />
                  <h2 className="text-3xl font-extrabold sm:text-4xl tracking-tight">Stockage Sécurisé de Véhicules</h2>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto md:mx-0">
                  Votre tranquillité d'esprit est notre priorité. Nous possédons <strong className="text-white">nos propres garages sécurisés</strong> sous haute surveillance pour conserver votre véhicule (auto, moto, utilitaire). Que ce soit suite à un accident ou en attente d'une réparation, votre véhicule est stocké à l'abri de tous risques et des intempéries.
                </p>
                <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 text-sm font-semibold">
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm"><CheckCircle className="h-4 w-4 text-green-400" /> Locaux Sécurisés</div>
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm"><CheckCircle className="h-4 w-4 text-green-400" /> À l'abri des intempéries</div>
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm"><CheckCircle className="h-4 w-4 text-green-400" /> Assurance garantie</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- ZONE & FAQ (SEO Local & Longue Traîne) --- */}
      <div className="bg-gray-50 py-16 dark:bg-dark-background/50">
        <div className="mx-auto max-w-7xl px-4 lg:grid lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 dark:text-white">Intervention 50 km autour de Toulouse</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Nous couvrons l'intégralité de la métropole toulousaine et les villes dans un rayon de **50 km**. Que vous soyez sur la **Rocade**, l'A61, A62 ou en périphérie, nous intervenons rapidement.
            </p>
            <ul className="grid grid-cols-2 gap-4 text-light-primary font-bold">
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Toulouse Centre</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Blagnac / Colomiers</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Muret / Portet</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Tournefeuille / Plaisance</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Balma / L'Union</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> + de 50 km alentours</li>
            </ul>
          </div>

          <div className="mt-12 lg:mt-0">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">F.A.Q Dépannage</h2>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">Comment vous contacter pour une urgence ?</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">Appelez directement notre ligne d'urgence au **07 68 26 10 50**. Nous sommes joignables 24h/24 et 7j/7.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">Où peut-on retrouver vos actualités ?</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">Vous pouvez nous suivre sur Instagram **@lebon_remorquage** pour voir nos interventions en direct ou nous contacter via Snapchat et WhatsApp.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">Proposez-vous des devis ?</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">Oui, vous pouvez obtenir un devis gratuit et personnalisé par téléphone ou via notre formulaire de contact sur le site.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bandeau Final existant */}
      <div className="bg-light-primary py-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Besoin d'aide ? On arrive tout de suite.</h2>
        <a href="tel:0768261050" className="inline-flex items-center gap-3 bg-white text-light-primary px-10 py-5 rounded-full text-2xl font-black shadow-2xl hover:bg-gray-100 transition-colors">
          <Phone className="h-8 w-8" />
          APPELEZ LE 07 68 26 10 50
        </a>
      </div>

      {/* ✅ AJOUT ICI : BOUTON D'APPEL FLOTTANT */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a
          href="tel:0768261050"
          className="flex h-16 w-16 items-center justify-center rounded-full bg-light-primary text-white shadow-2xl transition-transform hover:scale-110 active:scale-95 animate-bounce"
          aria-label="Appeler dépannage urgent"
        >
          <Phone className="h-8 w-8" />
        </a>
      </div>
    </>
  );
};