/**
 * Types pour la gestion des magasins
 */

export interface StoreInfo {
  storeName: string;
  storeComment?: string;
}

/**
 * Type pour stocker dans Appwrite (string JSON)
 */
export type StoreSerialized = string | null;

/**
 * Type pour l'utilisation interne (objet typé)
 */
export type StoreDisplay = StoreInfo | null;