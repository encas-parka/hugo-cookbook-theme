/**
 * download-file.js
 * Utilitaire pour déclencher un téléchargement client de contenu texte (CSV, Markdown).
 *
 * Usage:
 *   import { downloadFile } from './download-file.js';
 *   downloadFile("col1,col2\nv1,v2\n", "csv");
 *   downloadFile("# Titre\nContenu", "md");
 *
 * Formats supportés:
 *  - "csv" => text/csv, nom fichier: listes-ingredients.csv
 *  - "md"  => text/plain, nom fichier: listes-ingredients.md
 *
 * Notes:
 * - Ne dépend d'aucun framework.
 * - Gère proprement l'URL Object et le cycle de vie du lien temporaire.
 */

function resolveMimeAndFilename(format) {
  switch (format) {
    case "csv":
      return { mime: "text/csv;charset=utf-8", filename: "listes-ingredients.csv" };
    case "md":
      // text/markdown pourrait être utilisé mais text/plain assure une meilleure compatibilité.
      return { mime: "text/plain;charset=utf-8", filename: "listes-ingredients.md" };
    default:
      // Fallback générique
      return { mime: "text/plain;charset=utf-8", filename: "download.txt" };
  }
}

export function downloadFile(data, format) {
  const { mime, filename } = resolveMimeAndFilename(format);

  // Sécuriser data pour éviter les surprises (null/undefined)
  const safeData = data == null ? "" : String(data);

  const blob = new Blob([safeData], { type: mime });
  const url = URL.createObjectURL(blob);

  try {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    // Ne pas afficher le lien, on l’attache juste pour déclencher le click
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } finally {
    // Libère l’URL Object pour éviter les fuites mémoire
    URL.revokeObjectURL(url);
  }
}
