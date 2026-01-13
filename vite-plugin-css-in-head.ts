import type { Plugin } from "vite";

export default function cssInHead(): Plugin {
  return {
    name: "css-in-head",
    generateBundle(options, bundle) {
      const htmlFile = bundle["index.html"];
      if (htmlFile && htmlFile.type === "asset") {
        let html = htmlFile.source as string;

        // Vérifier si le CSS est déjà dans le head
        const headEndIndex = html.indexOf("</head>");
        const bodyStartIndex = html.indexOf("<body>");

        if (headEndIndex === -1 || bodyStartIndex === -1) return;

        // Extraire le body
        const bodyContent = html.substring(bodyStartIndex);

        // Trouver les balises <link rel="stylesheet"> dans le body
        const cssInBody = bodyContent.match(/<link rel="stylesheet"[^>]*>/g);

        // Trouver le CSS dans le head (Vite le met là par défaut)
        const cssInHeadMatch = html.match(/<link rel="stylesheet"[^>]*>/g);

        if (cssInHeadMatch && cssInHeadMatch.length > 0) {
          // Optimiser les liens CSS avec preload + chargement non bloquant
          const optimizedCssLinks = cssInHeadMatch.map((link) => {
            // Extraire le href
            const hrefMatch = link.match(/href="([^"]*)"/);
            if (hrefMatch) {
              const href = hrefMatch[1];
              // Créer un preload + chargement différé
              return `    <link rel="preload" href="${href}" as="style" onload="this.onload=null;this.rel='stylesheet'">\n    <noscript><link rel="stylesheet" href="${href}"></noscript>`;
            }
            return link;
          });

          // Remplacer les anciens liens
          let optimizedHtml = html;
          cssInHeadMatch.forEach((oldLink, index) => {
            optimizedHtml = optimizedHtml.replace(
              oldLink,
              optimizedCssLinks[index]
            );
          });

          htmlFile.source = optimizedHtml;
        }
      }
    },
  };
}
