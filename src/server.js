import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();

// Autorise ton domaine React
app.use(cors({
  origin: "*", // en prod tu mettras https://tonywebdev.fr
}));

// Proxy → WooCommerce
app.get("/api/products", async (req, res) => {
  try {
    const wpRes = await fetch(
      "https://eboutique9318.live-website.com/wp-json/wc/store/v1/products"
    );

    if (!wpRes.ok) {
      return res.status(wpRes.status).json({ error: "Erreur API WordPress" });
    }

    const data = await wpRes.json();

    res.json(data);
  } catch (error) {
    console.error("Erreur proxy WordPress :", error);
    res.status(500).json({ error: "Erreur proxy serveur" });
  }
});

// Démarrage serveur proxy
app.listen(3001, () => {
  console.log("Proxy WooCommerce actif sur http://localhost:3001");
});
