import { useEffect, useState } from "react";

export default function LaunchOfferPopup() {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("popupShown");
    if (!hasSeenPopup) {
      setShowPopup(true);
      localStorage.setItem("popupShown", "true");
    }
  }, []);

  if (!showPopup) return null;

  const handleContactClick = () => {
    localStorage.setItem("contactSubject", "Offre de lancement à 150€");
    window.dispatchEvent(new Event("update-subject-from-popup"));

    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }

    setShowPopup(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full text-center relative">
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-4 right-4 text-sm text-red-600 hover:underline font-bold"
        >
          X
        </button>
        <h2 className="text-2xl font-bold mb-2">🚀 Offre de Lancement</h2>
        <p className="mb-2 font-semibold text-lg text-gray-800">
          Votre site web professionnel pour{" "}
          <span className="text-primary">300€</span> !
        </p>
        <ul className="text-sm text-left text-gray-600 mb-4 pl-12">
          <li>✅ Page principale sur mesure</li>
          <li>✅ Hébergement 1 an inclus</li>
          <li>✅ Référencement (SEO)</li>
          <li>✅ Design responsive</li>
        </ul>
        <p className="text-sm mb-4">
          💡 <strong>+50€</strong> : rédaction des textes & design complet
        </p>

        <button
          onClick={handleContactClick}
          className=" text-customBlue font-semibold px-6 py-2  hover:font-bold hover:text-customBlue2"
        >
          ➡️ Je suis intéressé !
        </button>
      </div>
    </div>
  );
}
