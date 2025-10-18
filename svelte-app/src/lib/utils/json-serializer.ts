/**
 * Utilitaire générique de sérialisation JSON pour Appwrite
 * Gère la conversion entre objets TypeScript et strings JSON stockées dans Appwrite
 */

/**
 * Sérialise un objet en string JSON pour Appwrite
 */
export function serializeToJson<T>(obj: T | null | undefined): string | null {
  if (obj === null || obj === undefined) {
    return null;
  }
  
  try {
    return JSON.stringify(obj);
  } catch (error) {
    console.error('[JSON Serializer] Erreur de sérialisation:', error);
    return null;
  }
}

/**
 * Désérialise une string JSON d'Appwrite en objet typé
 */
export function deserializeFromJson<T>(jsonString: string | null | undefined, defaultValue: T | null = null): T | null {
  if (!jsonString || jsonString.trim() === '') {
    return defaultValue;
  }
  
  try {
    return JSON.parse(jsonString) as T;
  } catch (error) {
    console.warn('[JSON Serializer] Erreur de désérialisation, valeur par défaut utilisée:', error);
    return defaultValue;
  }
}

/**
 * Vérifie si une string est un JSON valide
 */
export function isValidJson(jsonString: string): boolean {
  try {
    JSON.parse(jsonString);
    return true;
  } catch {
    return false;
  }
}

/**
 * Migre une ancienne valeur (string simple) vers le nouveau format (objet JSON)
 */
export function migrateLegacyValue<T>(
  legacyValue: string | null, 
  migrationFn: (legacy: string) => T
): string | null {
  if (!legacyValue || legacyValue.trim() === '') {
    return null;
  }
  
  // Si c'est déjà du JSON, on ne migre pas
  if (isValidJson(legacyValue)) {
    return legacyValue;
  }
  
  // Migration de l'ancien format vers le nouveau
  try {
    const newValue = migrationFn(legacyValue.trim());
    return JSON.stringify(newValue);
  } catch (error) {
    console.error('[JSON Serializer] Erreur de migration:', error);
    return null;
  }
}