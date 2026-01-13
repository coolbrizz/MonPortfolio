interface Feature {
  name: string;
  answer: string;
}

const Tarifs = ({
  title,
  price,
  description,
  features,
}: {
  title: string;
  price: string;
  description: string;
  features?: Feature[];
}) => {
  const defaultFeatures: Feature[] = [
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
    {
      name: "Support technique",
      answer: "Assistance technique pendant toute la durée du projet.",
    },
    {
      name: "Mises à jour",
      answer: "Mises à jour de sécurité pendant 6 mois.",
    },
  ];
  return (
    <article className="relative flex flex-col max-w-xs w-full rounded-2xl border border-customBlue/20 p-6 shadow-2xl bg-customBlue3/50">
      <div className="absolute -inset-[3px] rounded-2xl -z-10 bg-customBlue3/50" />

      <div className="text-center">
        <div className="relative inline-flex items-center justify-center text-5xl font-bold mb-2">
          <span className="text-customBlue">{price}</span>{" "}
          <small className="absolute right-[-1.5ch] text-2xl font-normal text-customBlue">
            €
          </small>
        </div>
        <div className="h-1 w-auto bg-gradient-to-r from-transparent via-customBlue2 to-transparent transform translate-x-[-10%] group-hover:translate-x-[10%] transition-transform duration-1000"></div>

        <h3 className="text-xl font-semibold mt-2">{title}</h3>
        <p className="text-sm text-customBlue mt-1">{description}</p>
      </div>

      <div className="mt-6 space-y-4">
        {(features || defaultFeatures).map((feature, index) => (
          <details
            key={index}
            className="group bg-customBlue3 rounded-lg px-4 py-3 relative"
          >
            <summary className="flex items-center cursor-pointer list-none">
              <span className="flex items-center justify-center w-4 h-4 rounded-full bg-customBlue mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="12"
                  height="12"
                  fill="white"
                >
                  <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                </svg>
              </span>
              <span className="font-medium flex-1">{feature.name}</span>
              <span className="ml-2 text-[#61a2a3]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="currentColor"
                >
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355z" />
                </svg>
              </span>
            </summary>

            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-full bg-customBlue3 border border-[#293359] rounded-md p-3 mt-2 w-4/5 shadow-lg text-sm opacity-0 group-open:opacity-100 transition-all duration-200 z-50">
              {feature.answer}
            </div>
          </details>
        ))}
      </div>
    </article>
  );
};

export default Tarifs;
