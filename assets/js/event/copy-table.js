/**
 * copy-table.js
 * Utilitaire pour copier le contenu textuel d’un élément (ex: <table>) dans le presse-papiers.
 *
 * Cette implémentation fonctionne sur une large gamme de navigateurs en utilisant
 * Range/Selection et document.execCommand('copy') comme fallback.
 *
 * Usage:
 *   import { copyTable } from './copy-table.js';
 *   const el = document.querySelector('table.toCopy');
 *   copyTable(el);
 */
export function copyTable(el) {
  if (!el) return;

  const body = document.body;
  let range;
  let sel;

  // Stratégie moderne: Range + Selection
  if (document.createRange && window.getSelection) {
    range = document.createRange();
    sel = window.getSelection();

    // Nettoyage de la sélection existante
    sel.removeAllRanges();

    // Sélectionne le contenu de l’élément
    range.selectNodeContents(el);
    sel.addRange(range);

    try {
      document.execCommand("copy");
    } catch (_err) {
      // Ignorer silencieusement si execCommand n'est pas supporté
    }

    // Nettoyer la sélection
    sel.removeAllRanges();
    return;
  }

  // Fallback legacy: TextRange (IE)
  if (body && body.createTextRange) {
    range = body.createTextRange();
    range.moveToElementText(el);
    range.select();
    try {
      document.execCommand("copy");
    } catch (_err) {
      // Ignorer silencieusement
    }
    return;
  }
}