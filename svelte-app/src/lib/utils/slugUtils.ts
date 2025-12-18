/**
 * Utilitaires pour la gestion des slug-uuid
 * Format: <slug_22>_<uuid_12> = 35 caractères max
 */

import { nanoid } from "nanoid";

/**
 * Génère un slug-uuid de 35 caractères à partir d'un titre
 */
export function generateSlugUuid35(title: string): string {
  const slug = title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 22);

  return `${slug}_${nanoid(12).toLowerCase()}`;
}
