import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, "../dist");

// Lire le fichier HTML
const htmlPath = path.join(distDir, "index.html");
let html = fs.readFileSync(htmlPath, "utf-8");

// Trouver où se termine le <head>
const headEndIndex = html.indexOf("</head>");
const bodyStartIndex = html.indexOf("<body>");

if (headEndIndex === -1 || bodyStartIndex === -1) {
  console.log("⚠️ Structure HTML non trouvée");
  process.exit(0);
}

// Extraire la partie head et body
const headContent = html.substring(0, headEndIndex);
const bodyContent = html.substring(headEndIndex, html.length);

// Trouver toutes les balises <link rel="stylesheet"> dans le body
const bodyMatch = bodyContent.match(/<link rel="stylesheet"[^>]*>/g);

if (bodyMatch && bodyMatch.length > 0) {
  // Supprimer les balises CSS du body
  let cleanBody = bodyContent;
  bodyMatch.forEach((cssLink) => {
    cleanBody = cleanBody.replace(cssLink, "");
  });

  // Insérer les CSS juste avant </head>
  const cssHtml = bodyMatch.join("\n    ");
  const newHead = headContent + "    " + cssHtml + "\n  ";

  // Réassembler le HTML
  html = newHead + "</head>" + cleanBody;

  // Réécrire le fichier
  fs.writeFileSync(htmlPath, html);
  console.log("✅ CSS déplacé vers le <head>");
} else {
  console.log("✅ CSS déjà en <head> ou non trouvé");
}
