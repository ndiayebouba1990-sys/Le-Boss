// Configuration Eleventy — site institutionnel U-IMCEC Sénégal.
// Entrée : src/ — Sortie : _site/ (dossier à déposer sur l'hébergement).

import { HtmlBasePlugin } from "@11ty/eleventy";

// Sous-dossier de publication (ex. « /uimcec/ » sur GitHub Pages). Par défaut : racine du domaine.
const PREFIXE = process.env.PATH_PREFIX || "/";

const MOIS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];

function versDate(valeur) {
  if (valeur instanceof Date) return valeur;
  return new Date(valeur);
}

export default function (eleventyConfig) {
  // Réécrit les liens internes quand le site est publié dans un sous-dossier.
  eleventyConfig.addPlugin(HtmlBasePlugin);

  // Fichiers copiés tels quels.
  eleventyConfig.addPassthroughCopy({ "src/assets/img": "assets/img" });
  eleventyConfig.addPassthroughCopy({ "src/assets/fonts": "assets/fonts" });
  eleventyConfig.addPassthroughCopy({ "src/assets/js": "assets/js" });
  eleventyConfig.addPassthroughCopy({ "src/static": "/" }, { dot: true });
  eleventyConfig.addPassthroughCopy({ "src/admin/config.yml": "admin/config.yml" });
  eleventyConfig.addWatchTarget("src/assets/");

  // ——— Filtres ———
  // « 2 juin 2026 »
  eleventyConfig.addFilter("dateFr", (valeur) => {
    const d = versDate(valeur);
    const jour = d.getUTCDate();
    return `${jour === 1 ? "1er" : jour} ${MOIS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
  });
  // « juin 2026 » — pour les dates dont le jour n'est pas confirmé.
  eleventyConfig.addFilter("moisAnnee", (valeur) => {
    const d = versDate(valeur);
    return `${MOIS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
  });
  eleventyConfig.addFilter("dateIso", (valeur) => versDate(valeur).toISOString().slice(0, 10));
  eleventyConfig.addFilter("limite", (liste, n) => (liste || []).slice(0, n));
  eleventyConfig.addFilter("sauf", (liste, url) => (liste || []).filter((item) => item.url !== url));
  eleventyConfig.addFilter("json", (valeur) => JSON.stringify(valeur));
  // Numéro lisible « +221 33 832 08 55 » → lien « +221338320855 »
  eleventyConfig.addFilter("tel", (valeur) => String(valeur || "").replace(/[^\d+]/g, ""));
  // Lien de recherche Google Maps à partir d'une adresse (aucune coordonnée inventée).
  eleventyConfig.addFilter("carte", (adresse) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(adresse)}`);
  eleventyConfig.addFilter("itineraire", (adresse) => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(adresse)}`);
  // URL absolue (balises canoniques, Open Graph, sitemap).
  eleventyConfig.addFilter("absolu", (chemin, base) => new URL(chemin, base).href);
  // Minification légère de la feuille de style assemblée.
  eleventyConfig.addFilter("cssmin", (css) =>
    String(css)
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/\s*\n\s*/g, "")
      .replace(/\s*([{};,>])\s*/g, "$1")
      .replace(/:\s+/g, ":")
      .replace(/;}/g, "}")
  );

  // ——— Typographie française ———
  // Espaces insécables devant ? ! : ; % » et après « (évite un signe isolé en début de ligne).
  // Appliqué uniquement au texte des pages HTML, jamais à l'intérieur des balises.
  eleventyConfig.addTransform("typographie", function (contenu) {
    if (!(this.page.outputPath || "").endsWith(".html")) return contenu;
    return contenu.replace(/>([^<]+)</g, (_, texte) =>
      ">" +
      texte
        .replace(/ ([?!:;%»])/g, " $1")
        .replace(/« /g, "« ")
        .replace(/n° /g, "n° ")
        .replace(/(\d) (FCFA|millions?|euros?)/g, "$1 $2") +
      "<"
    );
  });

  // ——— Collections ———
  eleventyConfig.addCollection("actualites", (api) =>
    api.getFilteredByGlob("src/actualites/*.md").sort((a, b) => b.date - a.date)
  );
  eleventyConfig.addCollection("solutions", (api) =>
    api.getFilteredByGlob("src/solutions/*.md").sort((a, b) => (a.data.ordre || 99) - (b.data.ordre || 99))
  );

  // Horodatage de construction (invalidation du cache des fichiers CSS/JS).
  eleventyConfig.addGlobalData("build", () => ({
    version: Date.now().toString(36),
    annee: new Date().getFullYear(),
    date: new Date(),
  }));

  return {
    pathPrefix: PREFIXE,
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
