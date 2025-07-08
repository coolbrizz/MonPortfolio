import { Home, ArrowLeft } from "lucide-react";

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

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-customBlue2 mb-4">
            <ShinyText
              text="404"
              disabled={false}
              speed={3}
              className="text-9xl font-bold"
            />
          </h1>
        </div>

        {/* Main Message */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-customBlue mb-4">
            Oups ! Page introuvable
          </h2>
          <p className="text-xl text-customBlue2 mb-6">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>

        {/* Illustration */}
        <div className="mb-12">
          <div className="w-48 h-48 mx-auto bg-gradient-to-br from-customBlue to-customBlue2 rounded-full flex items-center justify-center mb-6">
            <div className="text-white text-6xl">🚀</div>
          </div>
          <p className="text-customBlue text-lg">
            Mais ne vous inquiétez pas, votre projet digital est toujours
            possible !
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="px-8 py-4 bg-customBlue text-white rounded-lg hover:bg-customBlue2 transition flex items-center justify-center gap-2"
          >
            <Home size={20} />
            Retour à l'accueil
          </a>
          <a
            href="/#contact"
            className="px-8 py-4 bg-white text-customBlue rounded-lg border border-customBlue hover:bg-customBlue3 hover:text-customBlue2 transition flex items-center justify-center gap-2"
          >
            <ArrowLeft size={20} />
            Discuter de mon projet
          </a>
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-6 bg-customBlue3 rounded-lg">
          <h3 className="text-xl font-bold text-customBlue mb-3">
            Besoin d'aide ?
          </h3>
          <p className="text-customBlue2 mb-4">
            Contactez-moi directement pour discuter de votre projet web
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <a
              href="mailto:antony.auvray@hotmail.com"
              className="text-customBlue hover:text-customBlue2 transition"
            >
              📧 antony.auvray@hotmail.com
            </a>
            <a
              href="https://wa.me/33658092835"
              className="text-customBlue hover:text-customBlue2 transition"
            >
              📱 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
