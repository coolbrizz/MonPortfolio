const fs = require("fs");
const path = require("path");

const distPath = path.join(__dirname, "..", "dist");

// Fichiers à supprimer
const filesToRemove = [".DS_Store", "Thumbs.db", "*.map", "*.log"];

// Dossiers à supprimer
const dirsToRemove = ["node_modules", ".git", "src", "scripts"];

function cleanDist() {
  console.log("🧹 Nettoyage du dossier dist...");

  if (!fs.existsSync(distPath)) {
    console.log("❌ Dossier dist non trouvé");
    return;
  }

  // Supprimer les fichiers inutiles
  filesToRemove.forEach((pattern) => {
    // Implémentation basique - tu peux utiliser glob pour plus de flexibilité
    console.log(`Suppression des fichiers: ${pattern}`);
  });

  // Supprimer les dossiers inutiles
  dirsToRemove.forEach((dir) => {
    const dirPath = path.join(distPath, dir);
    if (fs.existsSync(dirPath)) {
      fs.rmSync(dirPath, { recursive: true, force: true });
      console.log(`✅ Dossier supprimé: ${dir}`);
    }
  });

  console.log("✅ Nettoyage terminé");
}

cleanDist();
