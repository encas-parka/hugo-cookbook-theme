/**
 * bootstrap.js
 * Point d’entrée minimal pour exposer les utilitaires d’export/copie sur window
 * et, si disponible, monter l’app Vue avec des données injectées via
 * window.__EVENT_PAGE_DATA__ (compatibilité ascendante: si absent, on n’essaie
 * pas de monter l’app).
 *
 * Étape 1 (migration utilitaires):
 *  - Expose copyOrExport, copyTable et downloadFile sur window
 *
 * Étape 2 (cette passe):
 *  - Si window.__EVENT_PAGE_DATA__ est présent, créer et monter l’app Vue
 *    en gardant l’inline comme fallback si non présent.
 */
 
import { downloadFile } from "./download-file.js";
import { copyTable } from "./copy-table.js";
import { copyOrExport } from "./copy-or-export.js";
import { createEventApp } from "./app.js";
 
// Exposer temporairement sur window pour compat avec les onclick inline existants
(function exposeUtilsGlobally() {
  try {
    if (typeof window !== "undefined") {
      // N’écraser que si non défini, pour éviter les collisions inattendues
      if (!window.downloadFile) window.downloadFile = downloadFile;
      if (!window.copyTable) window.copyTable = copyTable;
      if (!window.copyOrExport) window.copyOrExport = copyOrExport;
    }
  } catch (_err) {
    // En contexte SSR ou CSP strict, ignorer silencieusement
  }
})();
 
// Monter l’app Vue si des données sont injectées côté page.
// On garde le comportement précédent si rien n’est injecté (fallback: app inline).
(function maybeMountVueApp() {
  try {
    if (typeof window === "undefined") return;
    const data = window.__EVENT_PAGE_DATA__;
    if (!data) return; // Pas de données injectées => laisser l’app inline existante.
 
    // Vérifier la présence du conteneur avant de monter
    const appRoot = document.querySelector("#app");
    if (!appRoot) return;
 
    // Créer et monter l’app
    const app = createEventApp(data);
    app.mount("#app");
  } catch (_err) {
    // Meilleur effort: si un souci survient, on n’empêche pas la version inline de fonctionner.
  }
})();