import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Footer from "./components/footer";

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

function Contact() {
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

  useEffect(() => {
    const handler = () => {
      const savedSubject = localStorage.getItem("contactSubject");
      if (savedSubject) {
        setFormData((prev) => ({
          ...prev,
          subject: savedSubject,
        }));
        localStorage.removeItem("contactSubject");
      }
    };

    window.addEventListener("update-subject-from-popup", handler);

    return () => {
      window.removeEventListener("update-subject-from-popup", handler);
    };
  }, []);

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
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <a href="/">
              <div className="text-4xl flex flex-row font-bold text-customBlue items-center max-sm:text-2xl ">
                <img
                  className="w-[60px] h-[60px]"
                  src="logo3svg.png"
                  alt="logo de tonyWebDev"
                ></img>
                TonyWebDev
              </div>
            </a>
          </div>
        </div>
      </nav>
      <section id="contact" className="py-20 bg-customBlue3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-bold text-customBlue mb-4">
              <ShinyText
                text="Contact"
                disabled={false}
                speed={4}
                className="custom-class"
              />
            </h2>
            <p className="text-xl text-customBlue">Discutons de votre projet</p>
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
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleInputChange}
                className="border rounded px-4 py-3 w-full"
                placeholder="Sujet"
                required
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
                className="aws-btn w-full mb-16"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer  "}
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
