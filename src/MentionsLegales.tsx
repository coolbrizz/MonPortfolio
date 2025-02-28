
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function MentionsLegales() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition">
            <ArrowLeft size={20} className="mr-2" />
            Retour à l'accueil
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Mentions Légales</h1>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Informations légales</h2>
            <p className="mb-4">
              Le site web [Nom du site] est édité par [Votre nom ou raison sociale], [statut juridique], immatriculé au RCS de [ville] sous le numéro [numéro RCS].
            </p>
            <p className="mb-4">
              <strong>Siège social :</strong> [Adresse complète]<br />
              <strong>Numéro de téléphone :</strong> 06.58.09.28.35<br />
              <strong>Email :</strong> antony.auvray@hotmail.com
            </p>
            <p className="mb-4">
              <strong>Directeur de la publication :</strong> [Nom du directeur de publication]
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Hébergement</h2>
            <p className="mb-4">
              Ce site est hébergé par [Nom de l'hébergeur], [statut juridique], dont le siège social est situé [adresse de l'hébergeur].
            </p>
            <p className="mb-4">
              <strong>Téléphone :</strong> [Téléphone de l'hébergeur]<br />
              <strong>Email :</strong> [Email de l'hébergeur]
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Propriété intellectuelle</h2>
            <p className="mb-4">
              L'ensemble des éléments constituant ce site (textes, graphismes, logiciels, photographies, images, vidéos, sons, plans, logos, marques, etc.) est la propriété exclusive de [Votre nom ou raison sociale] ou fait l'objet d'une autorisation d'utilisation. Ces éléments sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle.
            </p>
            <p className="mb-4">
              Toute reproduction totale ou partielle de ce site ou d'un de ses éléments sans autorisation expresse et préalable de [Votre nom ou raison sociale] est interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Protection des données personnelles</h2>
            <p className="mb-4">
              Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée, et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité des données vous concernant.
            </p>
            <p className="mb-4">
              Pour exercer ces droits ou pour toute question sur le traitement de vos données, vous pouvez contacter [Votre nom ou raison sociale] par email à l'adresse suivante : antony.auvray@hotmail.com.
            </p>
            <p className="mb-4">
              Pour plus d'informations sur la façon dont nous traitons vos données, veuillez consulter notre Politique de Confidentialité.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies</h2>
            <p className="mb-4">
              Le site [Nom du site] peut utiliser des cookies pour améliorer l'expérience utilisateur. En naviguant sur ce site, vous acceptez l'utilisation de cookies conformément à notre Politique de Cookies.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation de responsabilité</h2>
            <p className="mb-4">
              [Votre nom ou raison sociale] s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu.
            </p>
            <p className="mb-4">
              [Votre nom ou raison sociale] ne peut toutefois garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site. En conséquence, [Votre nom ou raison sociale] décline toute responsabilité pour tout dommage résultant notamment d'une imprécision ou inexactitude des informations disponibles sur ce site.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Liens hypertextes</h2>
            <p className="mb-4">
              Ce site peut contenir des liens vers d'autres sites internet ou d'autres ressources disponibles sur Internet. [Votre nom ou raison sociale] n'a pas la possibilité de vérifier le contenu des sites ainsi visités, et n'assumera en conséquence aucune responsabilité de ce fait.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Droit applicable et juridiction compétente</h2>
            <p className="mb-4">
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
            <p className="mb-4">
              Ces mentions légales ont été mises à jour le [date de mise à jour].
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default MentionsLegales;