// import { useAuth } from "./contexts/AuthContext";
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

type WPProduct = {
  id: number;
  name: string;
  description: string;
  permalink: string;
  prices?: {
    price: string; // cents as string
    currency_code: string;
  };
  images?: { src: string; alt?: string }[];
};

export default function Admin() {
  const [products, setProducts] = useState<WPProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Appel du PROXY Node.js → FIN du CORS
        const res = await fetch("http://localhost:3001/api/products");

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const data: WPProduct[] = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Erreur fetch produits WooCommerce via proxy", err);
        setError("Impossible de récupérer les produits pour le moment.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl">Chargement des produits...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-customBlue">Panneau d'administration</h1>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6">
        {error ? (
          <div className="bg-red-50 text-red-700 border border-red-200 rounded-lg p-4 mb-6">
            {error}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {/* Bienvenue, {user.email} */}
            </h2>
            <p className="text-gray-600">
              Vous êtes connecté à votre espace administrateur.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Liste des produits WooCommerce
            </h1>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => {
                const rawPrice = product.prices?.price;
                const currency = product.prices?.currency_code || "EUR";
                const priceNumber = rawPrice ? Number(rawPrice) / 100 : undefined;

                return (
                  <article
                    key={product.id}
                    className="rounded-3xl border border-white/20 bg-white p-6 shadow-2xl transition hover:-translate-y-1 hover:border-gray-200"
                  >
                    <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                      {product.name}
                    </h2>

                    {product.images?.[0]?.src && (
                      <img
                        src={product.images[0].src}
                        alt={product.images[0].alt || product.name}
                        className="w-full h-36 object-contain rounded-xl mb-4"
                      />
                    )}

                    <p className="mt-3 text-sm text-gray-700 line-clamp-3">
                      {product.description.replace(/<[^>]+>/g, "") ||
                        "Pas de description fournie."}
                    </p>

                    <div className="mt-6 flex items-baseline justify-between">
                      <span className="text-lg font-bold text-amber-600">
                        {priceNumber
                          ? Intl.NumberFormat("fr-FR", {
                              style: "currency",
                              currency,
                            }).format(priceNumber)
                          : "Prix inconnu"}
                      </span>

                      <a
                        href={product.permalink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-customBlue hover:underline"
                      >
                        Voir sur la boutique
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
