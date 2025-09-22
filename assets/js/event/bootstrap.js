/**
 * bootstrap.js
 * Point d’entrée minimal pour exposer les utilitaires d’export/copie sur window
 * et, si disponible, monter l’app Vue avec des données injectées via
 * window.__EVENT_PAGE_DATA__ (compatibilité ascendante). À défaut, tenter
 * de charger des données JSON via:
 *  - un script inline <script type="application/json" id="event-json">,
 *  - un fetch sur une URL fournie via data-json-src sur le conteneur #app.
 *
 * Étape 1 (migration utilitaires):
 *  - Expose copyOrExport, copyTable et downloadFile sur window
 *
 * Étape 2:
 *  - Si window.__EVENT_PAGE_DATA__ est présent, créer et monter l’app Vue
 *    sinon, tenter script JSON inline puis fetch via data-json-src.
 */

import { downloadFile } from "./download-file.js";
import { copyTable } from "./copy-table.js";
import { copyOrExport } from "./copy-or-export.js";
import { createEventApp } from "./ingredients_list_refactored.js";


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

// Utilitaire: lecture de données JSON depuis un <script type="application/json" id="event-json">
function readInlineEventJSON() {
  try {
    if (typeof document === "undefined") return null;
    const el = document.getElementById("event-json");
    if (!el) return null;
    const txt = el.textContent || el.innerText || "";
    if (!txt) return null;
    return JSON.parse(txt);
  } catch (_err) {
    console.error("Failed to parse inline event JSON:", _err);
    return null;
  }
}

// Utilitaire: fetch JSON depuis une URL
async function fetchEventJSON(url) {
  try {
    if (!url) return null;
    const res = await fetch(url, { credentials: "same-origin" });
    // console.log("Fetch response:", res);
    if (!res.ok) return null;
    // console.log("Fetch response body:", await res.text());
    return await res.json();
  } catch (_err) {
    // console.error("Failed to fetch event JSON:", _err);
    return null;
  }
}

// Monter l’app Vue en priorisant les données disponibles.
// Ordre: window.__EVENT_PAGE_DATA__ -> script JSON inline -> fetch via data-json-src
(function maybeMountVueApp() {
  try {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    // Vérifier la présence du conteneur avant toute opération
    const appRoot = document.querySelector("#app");
    if (!appRoot) return;

    const bootstrapWithData = (data) => {
      if (!data) return false;
      try {
        const app = createEventApp(data);
        app.mount("#app");
        return true;
      } catch (_err) {
        return false;
      }
    };

    // 1) Compat ascendante: données injectées globalement
    if (bootstrapWithData(window.__EVENT_PAGE_DATA__)) return;

    // 2) Script inline JSON
    const inlineData = readInlineEventJSON();
    if (bootstrapWithData(inlineData)) return;

    // 3) Fetch via data-json-src
    const src = appRoot.getAttribute("data-json-src");
    if (src) {
      fetchEventJSON(src).then((fetched) => {
        bootstrapWithData(fetched);
      });
    }
    // Si aucune des stratégies n’aboutit, on ne monte rien (pas d’app inline).
  } catch (_err) {
    // Meilleur effort: en cas d’erreur inattendue, ne rien monter et laisser la page statique.
  }
})();
