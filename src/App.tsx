import React from "react";
import { Menu, X, Code, Search, Settings } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    //identifiants EmailJS
    const serviceId = "service_9ipa099";
    const templateId = "template_d3ox5wj";
    const publicKey = "5p-L60ZhNXWrvaIwj";

    // Préparation des paramètres pour le template EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, {
        publicKey: publicKey,
      })
      .then(() => {
        setSubmitStatus({
          success: true,
          message: "Votre message a été envoyé avec succès!",
        });
        // Réinitialisation du formulaire
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi du message:", error);
        setSubmitStatus({
          success: false,
          message:
            "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-4xl flex flex-row font-bold text-customBlue items-center ">
              <img
                className="w-[130px] h-[130px] max-sm:hidden"
                src="3dgifmaker15243.gif"
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
                href="#contact"
                className="text-customBlue font-bold hover:text-customBlue2"
              >
                Contact
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 mt-4"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
                className="block px-3 py-2 text-gray-700 hover:text-indigo-400"
              >
                Accueil
              </a>
              <a
                href="#portfolio"
                className="block px-3 py-2 text-gray-700 hover:text-indigo-400"
              >
                Portfolio
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:text-indigo-400"
              >
                Services
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-indigo-400"
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
        className="bg-[url('/background.webp')] bg-cover bg-center min-h-screen flex justify-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center px-4">
            <h1 className="text-5xl font-inter pt-16  md:text-6xl  font-bold text-customBlue2 mb-8 max-sm:pt-2">
              Créateur de Solutions Digitales
            </h1>
            <p className="text-xl text-customBlue max-sm:hidden max-w-3xl mx-auto mb-12 ">
              Développeur web, SEO et solutions numériques sur mesure pour
              donner vie à vos projets digitaux.
            </p>
            <div className="flex justify-center gap-4 max-sm:flex-col">
              <a
                href="#contact"
                className="px-8 py-4 bg-customBlue text-white rounded-lg hover:bg-customBlue2 transition"
              >
                Démarrer un Projet
              </a>
              <a
                href="#portfolio"
                className="px-8 py-4 bg-white text-customBlue rounded-lg border border-customBlue hover:bg-indigo-50 hover:text-customBlue2 transition"
              >
                Voir mes Réalisations
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-6xl font-bold text-customBlue2 mb-4">
              Mes Services
            </h2>
            <p className="text-xl text-customBlue">
              Des solutions complètes pour votre présence numérique
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
              <p className="text-lg leading-relaxed">
                Après{" "}
                <span className="font-semibold">
                  15 ans d’expérience dans l’aéronautique
                </span>{" "}
                et{" "}
                <span className="font-semibold">
                  10 ans de service dans l'armée
                </span>
                , j’ai décidé de donner un nouveau cap à ma carrière en me
                lançant dans ma passion :{" "}
                <span className="text-customYellow font-semibold">
                  le développement web
                </span>
                .
              </p>

              <p className="mt-4">
                Autodidacte dans l’âme, j’ai suivi une formation spécialisée en
                développement web et web mobile afin de maîtriser les
                technologies modernes. Aujourd’hui, j’accompagne entreprises et
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
                , chaque projet est une opportunité d’innovation.
              </p>

              <p className="mt-6 text-xl font-semibold text-customYellow">
                🚀 Prêt à concrétiser votre projet digital ? Parlons-en dès
                maintenant !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-6xl font-bold text-customBlue2 mb-4">
              Réalisations
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
                website="https://coolbrizz.github.io/MonPortfolio/"
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
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-customBlue3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold text-customBlue mb-4">Contact</h2>
            <p className="text-xl text-customBlue2">
              Discutons de votre projet
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {submitStatus && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  submitStatus.success
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {submitStatus.message}
              </div>
            )}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Nom"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-customBlue2 focus:border-transparent"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-customBlue2 focus:border-transparent"
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Sujet"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-customBlue2 focus:border-transparent"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-customBlue2 focus:border-transparent"
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 bg-customBlue text-white rounded-lg hover:bg-customBlue2 transition'}`}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-customBlue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid text-center md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Portfolio</h3>
              <p className="text-customBlue3">
                Création de solutions digitales sur mesure pour votre succès en
                ligne.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-customBlue3">
                <a
                  href="mailto:antony.auvray@hotmail.com"
                  className="text-customBlue3 hover:text-white "
                >
                  Email: antony.auvray@hotmail.com
                </a>
                <br />
                <br />
                <a className="mt-2" href="https://wa.me/33658092835">
                  Envoyer un message WhatsApp 📨
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Suivez-moi</h3>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/antony-auvray-669bb6353/"
                  className="text-customBlue3 hover:text-white "
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-customBlue3">
            <p>&copy; 2025 TonyWebDev. Tous droits réservés.</p>
            <div className="mt-4 flex justify-center space-x-6">
              <a
                href="/mentions-legales"
                className="text-gray-400 hover:text-white transition"
              >
                Mentions Légales
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );

  function ServiceCard({ icon, title, description, image2 }) {
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

  function PortfolioCard({ image, title, category, website }) {
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
