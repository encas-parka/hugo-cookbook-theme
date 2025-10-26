/**
 * Fonctions utilitaires pour la gestion des URLs et des paramètres
 */

/**
 * Récupère le mainId depuis les paramètres de l'URL
 * @param fallbackId - ID par défaut si aucun paramètre trouvé
 * @returns Le mainId extrait de l'URL ou l'ID par défaut
 */
export function getMainIdFromUrl(): string {
  if (typeof window === "undefined") {
    throw new Error(
      "getMainIdFromUrl() appelé côté serveur - SSR non supporté",
    );
  }

  const urlParams = new URLSearchParams(window.location.search);
  const listIdFromUrl = urlParams.get("listId");

  if (!listIdFromUrl || !listIdFromUrl.trim()) {
    throw new Error(
      "Paramètre 'listId' manquant ou vide dans l'URL. Format attendu : ?listId=votre-event-id",
    );
  }

  return listIdFromUrl.trim();
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
