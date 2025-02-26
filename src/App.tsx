import { Menu, X, Code, Search, Settings } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-4xl flex flex-row font-bold text-customBlue"><img className="w-12 h-12" src="/logo-removebg-preview.png"></img>TonyWebDev</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-customBlue font-bold hover:text-customBlue2">Accueil</a>
              <a href="#portfolio" className="text-customBlue font-bold hover:text-customBlue2">Portfolio</a>
              <a href="#services" className="text-customBlue font-bold hover:text-customBlue2">Services</a>
              <a href="#contact" className="text-customBlue font-bold hover:text-customBlue2">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-indigo-400">Accueil</a>
              <a href="#portfolio" className="block px-3 py-2 text-gray-700 hover:text-indigo-400">Portfolio</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-indigo-400">Services</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-400">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-[url('/background.png')] bg-cover bg-center min-h-screen flex justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center px-4">
            <h1 className="text-5xl font-inter pt-16  md:text-6xl  font-bold text-customBlue2 mb-8">
              Créateur de Solutions Digitales
            </h1>
            <p className="text-xl text-customBlue max-w-3xl mx-auto mb-12">
              Développeur web, SEO et solutions numériques sur mesure pour donner vie à vos projets digitaux.
            </p>
            <div className="flex justify-center gap-4">
              <a href="#contact" className="px-8 py-4 bg-customBlue text-white rounded-lg hover:bg-customBlue2 transition">
                Démarrer un Projet
              </a>
              <a href="#portfolio" className="px-8 py-4 bg-white text-customBlue rounded-lg border border-customBlue hover:bg-indigo-50 hover:text-customBlue2 transition">
                Voir mes Réalisations
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold text-customBlue2 mb-4">Mes Services</h2>
            <p className="text-xl text-customBlue">Des solutions complètes pour votre présence numérique</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Code />}
              title="Création de Sites Web"
              description="Sites vitrines, e-commerce et applications web sur mesure avec les dernières technologies."
              image2="crea.png"
            />
            <ServiceCard 
              icon={<Search />}
              title="Optimisation SEO"
              description="Amélioration du référencement naturel pour une meilleure visibilité sur les moteurs de recherche."
              image2="seo.png"
            />
            <ServiceCard 
              icon={<Settings />}
              title="Maintenance"
              description="Suivi régulier, mises à jour et optimisations pour garantir la performance de votre site."
              image2="maintenance.png"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold text-customBlue2 mb-4">Réalisations</h2>
            <p className="text-xl text-customBlue">Découvrez mes derniers projets</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PortfolioCard 
              image="/fleurs_story.png"
              title="Boutique de fleuriste"
              category="Site vitrine"
              website= "https://fleurs-story.fr/"
            />
            <PortfolioCard 
              image="portfolio.png"
              title="Portfolio"
              category="Application Web"
              website="https://google.fr"
            />
            <PortfolioCard 
              image="/nailsiana.png"
              title="Salon de manucure"
              category="Site vitrine"
               website= "https://nailsiana.com/"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-customBlue3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold text-customBlue mb-4">Contact</h2>
            <p className="text-xl text-customBlue2">Discutons de votre projet</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Nom"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-customBlue2 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-customBlue2 focus:border-transparent"
                />
              </div>
              <input
                type="text"
                placeholder="Sujet"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-customBlue2 focus:border-transparent"
              />
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-customBlue2 focus:border-transparent"
              ></textarea>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-customBlue text-white rounded-lg hover:bg-customBlue2 transition"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-customBlue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Portfolio</h3>
              <p className="text-customBlue3">
                Création de solutions digitales sur mesure pour votre succès en ligne.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-customBlue3">
                Email: antony.auvray@hotmail.com<br />
                Tél: 06.58.09.28.35
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Suivez-moi</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-customBlue3 hover:text-white">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-customBlue3">
            <p>&copy; 2025 TonyWebDev. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
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
        <img
          className="w-full h-50 "
          src={image2}
          alt={title}
        />
      </div>
    </div>
  );
}


function PortfolioCard({ image, title, category, website }) {
  return (
    <div className="group relative overflow-hidden rounded-xl">
      <a href={website}  target="_blank" rel="noopener noreferrer">
      <img src={image} alt={title} className="w-full h-80 object-cover transition transform group-hover:scale-110" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
        <div>
          <p className="text-sm text-customBlue2 mb-1">{category}</p>
          <h3 className="text-xl font-bold text-customBlue3">{title}</h3>
        </div>
      </div>
      </a>
    </div>
  );
}


export default App;