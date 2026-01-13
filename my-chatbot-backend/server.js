const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors()); // Autorise le frontend à parler au backend

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// ... (imports existants)

// 1. Définissez vos données FAQ et le rôle de l'IA
const CONTEXTE_FAQ = `
Tu es un assistant virtuel expert en création de sites web pour l'agence "TonyWebDev".
Ton ton est professionnel, accueillant et commercial.
Voici les informations de la FAQ que tu dois utiliser pour répondre :
- Prix : Un site vitrine commence à 300€, un e-commerce à 1200€.
- Délais : En moyenne 1 semaines pour un site vitrine, 3 semaines pour un e-commerce.
- Hébergement : Nous utilisons IONOS pour héberger les sites.
- SEO : Nous optimisons les sites pour le référencement naturel. Votre site sera visible sur Google.
- Technologies : Nous utilisons React, Node.js et WordPress selon les besoins.
- Maintenance : Nous offrons 3 mois de maintenance gratuite après la livraison.
Si la question n'est pas dans la FAQ, réponds avec tes connaissances générales en développement web mais invite l'utilisateur à contacter tonywebdev@outlook.com pour un devis précis.
`;

app.post("/api/chat", async (req, res) => {
  const { message, history } = req.body; // On récupère aussi l'historique si vous l'envoyez

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        // C'est ici que la magie opère : on définit le "System Message"
        { role: "system", content: CONTEXTE_FAQ },
        // On rajoute l'historique de conversation ici si nécessaire
        ...(history || []),
        { role: "user", content: message },
      ],
    });

    res.json({ reply: completion.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur serveur");
  }
});
app.listen(5000, () => console.log("Serveur lancé sur le port 5000"));
