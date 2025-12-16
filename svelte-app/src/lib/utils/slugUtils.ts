/**
 * Utilitaires pour la génération de slugs de recettes
 *
 * Règles de slugification:
 * - Convertir en minuscules
 * - Remplacer les accents
 * - Remplacer les espaces par des tirets
 * - Supprimer les caractères spéciaux
 * - Tronquer à 22 caractères max
 * - Ajouter l'UUID (12 caractères)
 * - Format final: {slug-tronque}__{uuid}
 */

/**
 * Génère un slug à partir d'un titre et d'un UUID
 * @param title - Titre de la recette
 * @param uuid - UUID de la recette (12 caractères)
 * @returns Slug au format: {slug-tronque}__{uuid}
 */
export function generateRecipeSlug(title: string, uuid: string): string {
  if (uuid.length !== 12) {
    console.warn(`UUID should be 12 characters, got: ${uuid}`);
  }

  // Slugifier le titre
  const titleSlug = title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  // Tronquer à 22 caractères maximum
  const truncatedSlug = titleSlug.substring(0, 22);

  // Combiner avec l'UUID (toujours 12 caractères)
  return `${truncatedSlug}_${uuid}`;
}
