import React from "react";
import { Menu, X, Code, Search, Settings } from "lucide-react";
import { useState } from "react";
import Tarifs from "./tarifs";
import Footer from "./components/footer";
// import FaqPopup from "./Faq";
import Chatbot from "./chatbot";
// import Popup from "./components/Popup";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image2: string;
}
interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
  website: string;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ShinyText = ({
    text,
    disabled = false,
    speed = 5,
    className = "",
  }: {
    text: string;
    disabled?: boolean;
    speed?: number;
    className?: string;
  }) => {
    const animationDuration = `${speed}s`;

    return (
      <div
        className={` bg-clip-text text-[rgba(55,113,126,0.6)] inline-block ${
          disabled ? "" : "animate-shine"
        } ${className}`}
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(55,113,126,0) 40%, rgba(97,162,163,0.8) 50%, rgba(186,219,218,0) 60%)",
          backgroundSize: "400% 100%",
          WebkitBackgroundClip: "text",
          animationDuration: animationDuration,
        }}
      >
        {text}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-4xl flex flex-row font-bold text-customBlue items-center max-sm:text-2xl ">
              <img
                className="w-[60px] h-[60px]"
                src="logo3svg.png"
                alt="logo de tonyWebDev"
              ></img>
              TonyWebDev
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-customBlue font-bold hover:text-customBlue2"
              >
                Accueil
              </a>
              <a
                href="#portfolio"
                className="text-customBlue font-bold hover:text-customBlue2"
              >
                Portfolio
              </a>
              <a
                href="#services"
                className="text-customBlue font-bold hover:text-customBlue2"
              >
                Services
              </a>
              <a
                href="/contact"
                className="text-customBlue font-bold hover:text-customBlue2"
              >
                Contact
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 p-2 hover:bg-gray-100 rounded-lg"
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-controls="mobile-menu"
              >
                {isMenuOpen ? (
                  <X size={24} aria-hidden="true" />
                ) : (
                  <Menu size={24} aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
              <a
                href="#home"
                className="block px-3 py-2 text-customBlue font-bold hover:text-indigo-400"
              >
                Accueil
              </a>
              <a
                href="#portfolio"
                className="block px-3 py-2 text-customBlue font-bold hover:text-indigo-400"
              >
                Portfolio
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-customBlue font-bold hover:text-indigo-400"
              >
                Services
              </a>
              <a
                href="/contact"
                className="block px-3 py-2 text-customBlue font-bold hover:text-indigo-400"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-[url('/background_reduit.webp')] bg-cover bg-center min-h-screen flex justify-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center px-4">
            <h1 className="text-5xl font-inter pt-16  md:text-6xl  font-bold text-customBlue2 mb-8 max-sm:pt-2">
              <ShinyText
                text="Créateur de Site internet"
                disabled={false}
                speed={4}
                className="custom-class"
              />
            </h1>
            <p className="text-xl text-customBlue max-sm:hidden max-w-3xl mx-auto mb-12 ">
              Créons ensemble votre site internet ! Offrez à votre entreprise
              une présence en ligne claire, moderne et efficace.
            </p>

            <div className="flex justify-center gap-4 max-sm:flex-col">
              <button
                onClick={() => {
                  localStorage.setItem("contactSubject", "Demande de projet");
                  window.dispatchEvent(new Event("update-subject-from-popup"));
                  window.location.href = "/contact";
                }}
                className="aws-btn"
              >
                🚀 Démarrer un Projet
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("portfolio")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="aws-btn aws-btn2"
              >
                👀 Voir mes réalisations
              </button>
            </div>
            <div className=" mt-28 sm:hidden border-2 border-customBlue3/50 rounded-lg p-4 bg-customBlue3/90 ">
              <p className="text-xl text-customBlue max-w-3xl mb-4 ">
                Créons ensemble votre site internet ! Offrez à votre entreprise
                une présence en ligne claire, moderne et efficace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-6xl font-bold text-customBlue2 mb-4">
              <ShinyText
                text="Mes Services"
                disabled={false}
                speed={4}
                className="custom-class"
              />
            </h2>
            <p className="text-xl text-customBlue">
              Des solutions complètes pour votre visibilité en ligne
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Code />}
              title="Création de Sites Web"
              description="Sites vitrines, e-commerce et applications web sur mesure avec les dernières technologies."
              image2="crea.webp"
            />
            <ServiceCard
              icon={<Search />}
              title="Optimisation SEO"
              description="Amélioration du référencement naturel pour une meilleure visibilité sur les moteurs de recherche."
              image2="seo.webp"
            />
            <ServiceCard
              icon={<Settings />}
              title="Maintenance"
              description="Suivi régulier, mises à jour et optimisations pour garantir la performance de votre site."
              image2="maintenance.webp"
            />
          </div>
        </div>
      </section>
      {/* Presentation section */}
      <section id="presentation" className="py-20 bg-customBlue3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
            {/* Image du portrait */}
            <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden  shadow-lg">
              <img
                src="portrait.png"
                alt="Portrait"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Contenu texte */}
            <div className="max-w-2xl text-customBlue">
              <h3 className="text-3xl font-bold text-customBlue mb-4">
                Qui suis-je ?
              </h3>
              <p>
                Après{" "}
                <span className="font-semibold">
                  15 ans d'expérience dans l'aéronautique
                </span>{" "}
                et{" "}
                <span className="font-semibold">
                  10 ans de service dans l'armée
                </span>
                , j'ai décidé de donner un nouveau cap à ma carrière en me
                lançant dans ma passion :{" "}
                <span className="text-customYellow font-semibold">
                  le développement web
                </span>
                .
              </p>

              <p className="mt-4">
                Autodidacte dans l'âme, j'ai suivi une formation spécialisée en
                développement web et web mobile afin de maîtriser les
                technologies modernes. Aujourd'hui, j'accompagne entreprises et
                entrepreneurs dans la{" "}
                <span className="font-semibold">
                  création de solutions digitales performantes et adaptées
                </span>
                .
              </p>

              <p className="mt-4">
                Grâce à ma rigueur et mon sens du détail, je conçois des
                expériences numériques optimisées, accessibles et engageantes.
                Que ce soit pour un{" "}
                <span className="font-semibold">
                  site vitrine, un e-commerce ou une application web
                </span>
                , chaque projet est une opportunité d'innovation.
              </p>

              <p className="mt-6 text-lg font-semibold text-customYellow">
                🚀 Prêt à concrétiser votre projet digital ? Parlons-en dès
                maintenant !
              </p>
            </div>
          </div>
          <div className="flex justify-end items-center m-auto ">
            <a
              href="#contact"
              className="text-customBlue font-bold hover:text-customBlue2"
            >
              <img
                className="w-[100px] h-[100px] mb-[-180px] mt-[-30px]"
                src="logo3svg.png"
                alt="logo de tonyWebDev"
              ></img>
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-6xl font-bold text-customBlue2 mb-4">
              <ShinyText
                text="Mes Réalisations"
                disabled={false}
                speed={4}
                className="custom-class"
              />
            </h2>
            <p className="text-xl text-customBlue">
              Découvrez mes derniers projets
            </p>
          </div>
          <div className="flex justify-center items-center ">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 max-w-4xl  gap-8">
              <PortfolioCard
                image="fleurs_story.webp"
                title="Boutique de fleuriste"
                category="Site vitrine"
                website="https://fleurs-story.fr/"
              />
              <PortfolioCard
                image="portfolio.webp"
                title="Portfolio"
                category="Application Web"
                website="https://tonywebdev.fr/"
              />
              <PortfolioCard
                image="nailsiana.webp"
                title="Salon de manucure"
                category="Site vitrine"
                website="https://nailsiana.com/"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Tarifs section */}
      <section id="tarifs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="text-center mb-4">
            <h2 className="text-6xl font-bold text-customBlue2 mb-4">
              <ShinyText
                text="Découvrez mes tarifs"
                disabled={false}
                speed={4}
                className="custom-class"
              />
            </h2>
            <p className="text-xl text-customBlue">
              Mes offres du moment comprenant pour chacune un accompagnement
              personnalisé du début jusque la fin du projet!
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 mt-10 justify-items-center mx-auto">
            <Tarifs
              title="Landing page"
              description="Parfait pour présenter votre activité en une seule page impactante"
              price="300"
              features={[
                {
                  name: "Design sur mesure",
                  answer: "Une page unique qui représente votre identité.",
                },
                {
                  name: "Responsive mobile",
                  answer:
                    "Adapté à tous les écrans (mobile, tablette, desktop).",
                },

                {
                  name: "Hébergement 1 an",
                  answer: "Hébergement premium inclus pendant 1 an.",
                },
                {
                  name: "Nom de domaine offert",
                  answer: "Votre nom de domaine offert la première année.",
                },
                {
                  name: "Référencement SEO",
                  answer: "Optimisation pour les moteurs de recherche incluse.",
                },
              ]}
            />

            <Tarifs
              title="Site vitrine complet"
              description="Site multi-pages pour présenter en détail vos services et produits"
              price="800"
              features={[
                {
                  name: "3 à 5 pages personnalisées",
                  answer: "Accueil, Services, À propos, Contact, etc.",
                },
                {
                  name: "Design professionnel",
                  answer:
                    "Interface moderne et attractive adaptée à votre image.",
                },
                {
                  name: "SEO optimisé",
                  answer: "Référencement naturel pour être visible sur Google.",
                },
                {
                  name: "Animations & transitions",
                  answer:
                    "Effets visuels pour une expérience utilisateur fluide.",
                },
                {
                  name: "Hébergement & domaine",
                  answer:
                    "Tout compris : hébergement 1 an + nom de domaine offert.",
                },
                {
                  name: "Support 6 mois",
                  answer: "Assistance et mises à jour pendant 6 mois.",
                },
              ]}
            />

            <Tarifs
              title="Site e-commerce"
              description="Boutique en ligne complète pour vendre vos produits 24h/24"
              price="1200"
              features={[
                {
                  name: "Gestion produits",
                  answer:
                    "Ajoutez et gérez vos produits facilement depuis un panneau admin.",
                },
                {
                  name: "Panier & paiement sécurisé",
                  answer:
                    "Intégration Stripe/PayPal pour des transactions sûres.",
                },
                {
                  name: "Formation rapide à la plateforme",
                  answer:
                    "Vous permet d'apprendre à utiliser la plateforme rapidement( généralement 1h ).",
                },
                {
                  name: "SEO e-commerce",
                  answer:
                    "Optimisation spécifique pour les boutiques en ligne.",
                },
                {
                  name: "Design responsive",
                  answer: "Expérience d'achat fluide sur tous les appareils.",
                },
                {
                  name: "Hébergement & support",
                  answer:
                    "Hébergement 1 an + support technique prioritaire pendant 6 mois.",
                },
              ]}
            />
          </div>
          <div className="flex justify-center items-center">
            <div className="flex flex-col  mt-8 w-full max-w-4xl mx-auto"></div>
          </div>
          <div className="text-center mt-10">
            <p className="text-customBlue">
              *Les prix sont indicatifs et peuvent varier en fonction des
              besoins du projet.
            </p>
          </div>
          <div className="flex justify-center items-center mt-16">
            <a href="/contact" target="_blank">
              <button className="aws-btn">
                <p className="text-white">
                  Contactez-moi pour plus d'informations
                </p>
              </button>
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Chatbot />
      {/* <FaqPopup /> */}
      <Footer />
    </div>
  );

  function ServiceCard({ icon, title, description, image2 }: ServiceCardProps) {
    return (
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition group flex flex-col">
        <div className="p-6 flex-1">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center text-customBlue mb-4 group-hover:bg-customBlue2 group-hover:text-white transition">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-customBlue mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>

        {/* Amélioration du remplissage de l'image avec flexibilité */}
        <div className="overflow-hidden rounded-b-xl">
          <img className="w-full h-50 " src={image2} alt={title} />
        </div>
      </div>
    );
  }

  function PortfolioCard({
    image,
    title,
    category,
    website,
  }: PortfolioCardProps) {
    return (
      <div className="group relative overflow-hidden rounded-xl">
        <a href={website} target="_blank" rel="noopener noreferrer">
          <img
            src={image}
            alt={title}
            className="w-full h-80 object-cover transition transform group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
            <div>
              <p className="text-sm text-customBlue3 mb-1">{category}</p>
              <h3 className="text-xl font-bold text-customBlue3">{title}</h3>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default App;
