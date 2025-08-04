/**
 * copy-or-export.js
 * Assemble les données depuis le DOM et propose plusieurs formats d’export:
 *  - "md": Markdown (téléchargement)
 *  - "csv": CSV (téléchargement)
 *  - "text": Texte (copie dans le presse-papiers)
 *  - "html": Tableau HTML stylé (copie dans le presse-papiers)
 *
 * Hypothèses DOM:
 *  - Titres:    <span class="toCopy">...</span> (un titre par tableau)
 *  - Date:      <div class="toCopyDate">...</div> (optionnelle)
 *  - Tableaux:  <table class="toCopy">...</table>
 *  - Cellules:  <td class="toCopyTd">...</td> (par paires: libellé, quantité)
 *
 * Notes:
 *  - Les titres et les tableaux sont associés par index (n-ème titre ↔ n-ème tableau).
 *  - Si une date globale est disponible et que le titre ne contient pas déjà des chiffres,
 *    la date est suffixée au titre.
 *
 * Dépendance:
 *  - Nécessite downloadFile si format 'csv' ou 'md'.
 *    On ne l’importe pas directement pour permettre une exposition via window
 *    (ex: window.downloadFile), durant la phase de migration incrémentale.
 */

function selectAllTextAndCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "true");
  ta.style.position = "absolute";
  ta.style.left = "-9999px";
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
  } catch (_err) {
    // Ignorer les erreurs silencieusement
  } finally {
    document.body.removeChild(ta);
  }
}

function buildMarkdown(title, labels, totals) {
  let out = `## ${title}\n\n| Ingredients | Total | Ou | Acheté |\n| --- | --- | --- | --- |\n`;
  for (let i = 0; i < labels.length; i++) {
    out += `| ${labels[i]} | ${totals[i]} |  |  |\n`;
  }
  return out;
}

function buildCSV(title, labels, totals) {
  let out = `${title}\n"Ingredients","Total","Ou","Acheté"\n`;
  for (let i = 0; i < labels.length; i++) {
    // Encapsuler dans des guillemets pour éviter les problèmes de virgules
    out += `"${String(labels[i]).replace(/"/g, '""')}","${String(totals[i]).replace(/"/g, '""')}",,\n`;
  }
  return out;
}

function buildText(title, labels, totals) {
  let out = `## ${title}\n`;
  for (let i = 0; i < labels.length; i++) {
    out += `${labels[i]} : ${totals[i]} → \n`;
  }
  return out;
}

function buildHTML(title, labels, totals) {
  let out = `<h2>${title}</h2>\n<table style="border-collapse: collapse; width: 100%;">\n` +
            `<tr><th style="border: 1px solid black; width: 250px;">Ingredients</th>` +
            `<th style="border: 1px solid black; width: 250px;">Total</th>` +
            `<th style="border: 1px solid black; width: 100px;">Ou</th>` +
            `<th style="border: 1px solid black; width: 100px;">Acheté</th></tr>\n`;
  for (let i = 0; i < labels.length; i++) {
    out += `<tr>` +
           `<td style="border: 1px solid black; width: 250px;"><strong>${labels[i]}</strong></td>` +
           `<td style="border: 1px solid black; width: 250px; text-align: center;">${totals[i]}</td>` +
           `<td style="border: 1px solid black; width: 100px;"></td>` +
           `<td style="border: 1px solid black; width: 100px;"></td>` +
           `</tr>\n`;
  }
  out += `</table>\n`;
  return out;
}

function sanitizeTitleWithDate(title, dateText) {
  // Si dateText est fournie et que le titre n'inclut pas déjà de chiffres, l'ajouter
  if (dateText && !/\d/.test(title)) {
    return `${title} - ${dateText}`;
  }
  return title;
}

export function copyOrExport(format) {
  const titles = document.querySelectorAll("span.toCopy");
  const tables = document.querySelectorAll("table.toCopy");
  const dateEl = document.querySelector("div.toCopyDate");

  if (!titles || titles.length === 0 || !tables || tables.length === 0) {
    // Rien à faire si rien à copier/exporter
    return;
  }

  const dateText = dateEl ? dateEl.textContent : "";
  const pieces = [];

  // On itère par index pour aligner n-ème titre avec n-ème table
  const count = Math.min(titles.length, tables.length);
  for (let i = 0; i < count; i++) {
    const rawTitle = (titles[i].textContent || "").trim();
    const title = sanitizeTitleWithDate(rawTitle, dateText);

    // Pour chaque table, on recherche les td.toCopyTd par paires
    const dataElements = tables[i].querySelectorAll("td.toCopyTd");
    const labels = [];
    const totals = [];

    // Les indices pairs = libellés, impairs = quantités
    Array.from(dataElements).forEach((el, idx) => {
      const text = (el.textContent || "").trim();
      if (idx % 2 === 0) {
        labels.push(text);
      } else {
        totals.push(text);
      }
    });

    // Harmoniser les longueurs (sécurité en cas d’impair)
    const len = Math.min(labels.length, totals.length);
    if (len < labels.length) labels.length = len;
    if (len < totals.length) totals.length = len;

    // Construire le bloc selon le format
    if (format === "md") {
      pieces.push(buildMarkdown(title, labels, totals));
    } else if (format === "csv") {
      pieces.push(buildCSV(title, labels, totals));
    } else if (format === "text") {
      pieces.push(buildText(title, labels, totals));
    } else if (format === "html") {
      pieces.push(buildHTML(title, labels, totals));
    }
  }

  const output = pieces.join("\n");

  if (format === "csv" || format === "md") {
    // Pendant la migration, on s’attend à ce que downloadFile soit attachée au window
    // par le bootstrap. Si non présent, on fallback en copie presse-papiers.
    const dl = (typeof window !== "undefined" && window.downloadFile) ? window.downloadFile : null;
    if (dl) {
      dl(output, format);
      return;
    }
    // Fallback copie si la fonction n'est pas disponible
    selectAllTextAndCopy(output);
    return;
  }

  // text/html => copie dans le presse-papiers (fallback fiable cross-browser)
  selectAllTextAndCopy(output);
}
