import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, "../dist");

const htmlPath = path.join(distDir, "index.html");
const html = fs.readFileSync(htmlPath, "utf-8");

// Le polyfill loadCSS
const polyfill = `<script>function loadCSS(e,t,n){"use strict";var o=window.document||document,i="link",r=o.createElement(i),d=o.getElementsByTagName("script")[0],a="stylesheet";return e&&(r.rel=a,r.href=e,r.media="only x"),t&&(r.onloadCSS=t),d.parentNode.insertBefore(r,d),r}/*! loadCSS rel=preload polyfill */
(function(w){"use strict";if(!w.loadCSS){w.loadCSS=function(){}}
var onloadcssdefined=function(cb){var resolvedHref=false;function onload(e){if(!resolvedHref){resolvedHref=true;cb(this,e)}}
var links=w.document.getElementsByTagName("link");for(var i=0;i<links.length;i++){var link=links[i];if(link.rel==="preload"&&link.as==="style"){if(link.getAttribute("onload")){link.onload()}else{link.addEventListener("load",onload)}link.addEventListener("error",onload)}}};
onloadcssdefined(function(link){if(link.media&&link.media!=="all"){link.media="all"}});}(this));</script>`;

// Chercher le CSS link
const cssLinkMatch = html.match(
  /<link rel="stylesheet"[^>]*href="([^"]*)"[^>]*>/
);

if (cssLinkMatch && !html.includes("function loadCSS")) {
  const href = cssLinkMatch[1];
  const oldCssLink = cssLinkMatch[0];

  // Nouveau format : preload + onload
  const newCssPreload = `    <link rel="preload" crossorigin href="${href}" as="style" onload="this.onload=null;this.rel='stylesheet'">`;
  const newCssNoscript = `    <noscript><link rel="stylesheet" crossorigin href="${href}"></noscript>`;

  // Trouver la position de <script type="module">
  const scriptIndex = html.indexOf('<script type="module"');

  if (scriptIndex !== -1) {
    // Insérer le CSS avant les scripts + ajouter polyfill
    const beforeScripts = html.substring(0, scriptIndex);
    const afterScripts = html.substring(scriptIndex);

    // Remplacer l'ancien CSS link
    const htmlWithoutOldCss = html.replace(oldCssLink, "");

    // Insérer le nouveau CSS et polyfill avant les scripts
    const finalHtml =
      htmlWithoutOldCss.substring(0, scriptIndex) +
      polyfill +
      "\n" +
      newCssPreload +
      "\n" +
      newCssNoscript +
      "\n    " +
      htmlWithoutOldCss.substring(scriptIndex);

    fs.writeFileSync(htmlPath, finalHtml);
    console.log("✅ CSS loading optimisé");
  } else {
    console.log("⚠️ Structure HTML non trouvée");
  }
} else {
  console.log("✅ CSS déjà optimisé");
}
