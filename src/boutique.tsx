import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      // On récupère les variables
      const url = import.meta.env.VITE_WC_URL;
      const key = import.meta.env.VITE_WC_CONSUMER_KEY;
      const secret = import.meta.env.VITE_WC_CONSUMER_SECRET;

      try {
        console.log(
          "Tentative de connexion à :",
          `${url}/wp-json/wc/v3/products`
        );

        // METHODE 2 : On passe les clés dans l'URL (plus robuste sur IONOS)
        const response = await axios.get(`${url}/wp-json/wc/v3/products`, {
          params: {
            consumer_key: key,
            consumer_secret: secret,
          },
        });

        console.log("Succès !", response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Erreur détaillée :", error);
        // Affiche l'erreur à l'écran si besoin pour débugger
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div style={{ padding: "20px" }}>
      <h1>Ma Boutique React + WordPress</h1>
      {loading ? (
        <p>Chargement des produits...</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {product.images.length > 0 && (
                <img
                  src={product.images[0].src}
                  alt={product.name}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
              )}
              <h3>{product.name}</h3>
              <p dangerouslySetInnerHTML={{ __html: product.price_html }}></p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
