/**
 * Fonctions utilitaires pour la gestion des URLs et des paramètres
 */

/**
 * Récupère le mainId depuis les paramètres de l'URL
 * @param fallbackId - ID par défaut si aucun paramètre trouvé
 * @returns Le mainId extrait de l'URL ou l'ID par défaut
 */
export function getMainIdFromUrl(fallbackId: string = 'your-main-id'): string {
  if (typeof window === 'undefined') {
    return fallbackId; // SSR fallback
  }

  const urlParams = new URLSearchParams(window.location.search);
  const listIdFromUrl = urlParams.get('listId');
  
  return listIdFromUrl || fallbackId;
}

/**
 * Génère une clé de stockage persistant avec le mainId inclus
 * @param baseKey - Clé de base
 * @param mainId - Identifiant principal
 * @returns Clé de stockage avec mainId inclus
 */
export function createStorageKey(baseKey: string, mainId: string): string {
  return `${baseKey}_${mainId}`;
}