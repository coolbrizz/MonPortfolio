"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
  {
    q: "Combien coûte la création d’un site vitrine ?",
    a: "Offre de lancement à 300€ incluant design, SEO,  hébergement, puis 100€/an."
  },
  {
    q: "Mon site sera-t-il visible sur Google ?",
    a: "Oui. Tous tes sites sont optimisés pour le référencement naturel (vitesse, mobile, structure HTML, sitemap…)."
  },
  {
    q: "Peux-tu créer un site e-commerce ?",
    a: "Oui : CMS (wordpress)  + WooCommerce avec panier, filtres et SEO."
  },
  {
    q: "Proposes-tu un accompagnement après la mise en ligne ?",
    a: "Oui avec abonnements mensuels ou annuels : mises à jour, SEO avancé, support et évolutions."
  },
];

export default function FaqPopup() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  return (
    <>
      {/* --- Floating Button --- */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-customBlue text-white p-3 rounded-full shadow-lg hover:bg-customBlue2 transition"
      >
        <p className="text-3xl font-bold px-2 ">?</p>
      </button>

      {/* --- Popup Modal --- */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Box */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.25 }}
              className="bg-white max-w-lg w-full mx-4 p-6 rounded-2xl shadow-xl relative"
            >
              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
              >
                ✕
              </button>

              <h3 className="text-2xl font-bold mb-4 text-center">
                FAQ — Questions fréquentes
              </h3>

              {/* Accordéon */}
              <div className="space-y-3">
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 rounded-xl bg-gray-50 shadow-sm"
                  >
                    <button
                      onClick={() => setActive(active === index ? null : index)}
                      className="w-full flex justify-between items-center px-4 py-3 text-left font-semibold"
                    >
                      <span>{item.q}</span>

                      <motion.span
                        animate={{ rotate: active === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-xl"
                      >
                        ▼
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {active === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden px-4"
                        >
                          <p className="py-3 text-gray-700">{item.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
