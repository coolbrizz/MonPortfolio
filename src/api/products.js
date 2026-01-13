export default async function handler(req, res) {
    try {
      const wpRes = await fetch(
        "https://eboutique9318.live-website.com/wp-json/wc/store/v1/products"
      );
  
      const data = await wpRes.json();
  
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.status(200).json(data);
    } catch (e) {
      res.status(500).json({ error: "Erreur API WordPress" });
    }
  }
  