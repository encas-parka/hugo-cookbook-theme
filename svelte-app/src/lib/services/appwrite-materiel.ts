/**
 * Services d'interaction avec Appwrite - Collection Materiel
 *
 * Couche d'accès aux données pure pour la gestion du matériel.
 *
 * Services principaux :
 * ─────────────────────────────────────────────────────────────
 * Lecture :
 * • listMaterielsAppwrite() : Lister tous les matériels
 * • getMaterielAppwrite() : Récupérer un matériel par ID
 *
 * Écriture CRUD :
 * • createMaterielAppwrite() : Créer un matériel
 * • updateMaterielAppwrite() : Mettre à jour un matériel
 * • deleteMaterielAppwrite() : Supprimer un matériel
 *
 * Ce fichier est une couche sans état qui expose des fonctions pures
 * pour MaterielStore. Toute la logique de réactivité est gérée par le store.
 */

import { ID, Query, type Models } from "appwrite";
import { getAppwriteInstances } from "./appwrite";
import type { Materiel } from "../types/appwrite";

export const MATERIEL_COLLECTION_ID = "materiel";
export const DATABASE_ID = "689d15b10003a5a13636"; // ID de la base de données "enka"

// =============================================================================
// TYPES
// =============================================================================

export type MaterielCreate = {
  name: string;
  description?: string | null;
  type?: string | null;
  quantity: number;
  status?: string;
  location?: string | null;
  shareableWith?: string[] | null;
  owner: string; // JSON stringifié de MaterielOwner
  loan?: string[] | null;
};

export type MaterielUpdate = Partial<{
  name?: string;
  description?: string | null;
  type?: string | null;
  quantity?: number;
  status?: string;
  location?: string | null;
  shareableWith?: string[] | null;
  owner?: string; // JSON stringifié de MaterielOwner
  loan?: string[] | null;
}>;

// =============================================================================
// LECTURE
// =============================================================================

/**
 * Liste tous les matériels avec filtres optionnels
 */
export async function listMaterielsAppwrite(
  queries?: string[],
): Promise<(Models.Document & Materiel)[]> {
  const { databases } = await getAppwriteInstances();

  const defaultQueries = [Query.limit(100)];

  const response = await databases.listDocuments(
    DATABASE_ID,
    MATERIEL_COLLECTION_ID,
    queries ? [...defaultQueries, ...queries] : defaultQueries,
  );

  return response.documents as unknown as (Models.Document & Materiel)[];
}

/**
 * Récupère un matériel par son ID
 */
export async function getMaterielAppwrite(
  materielId: string,
): Promise<Models.Document & Materiel> {
  const { databases } = await getAppwriteInstances();

  return (await databases.getDocument(
    DATABASE_ID,
    MATERIEL_COLLECTION_ID,
    materielId,
  )) as Models.Document & Materiel;
}

// =============================================================================
// CRÉATION
// =============================================================================

/**
 * Crée un nouveau matériel
 *
 * @param data - Données du matériel (owner doit être JSON stringifié)
 * @returns Le matériel créé
 */
export async function createMaterielAppwrite(
  data: MaterielCreate,
): Promise<Models.Document & Materiel> {
  const { databases } = await getAppwriteInstances();

  const payload: MaterielCreate = {
    ...data,
    loan: data.loan || [],
  };

  return (await databases.createDocument(
    DATABASE_ID,
    MATERIEL_COLLECTION_ID,
    ID.unique(),
    payload as unknown as Partial<Models.Document>,
  )) as unknown as Models.Document & Materiel;
}

// =============================================================================
// MISE À JOUR
// =============================================================================

/**
 * Met à jour un matériel
 *
 * @param materielId - ID du matériel
 * @param data - Données à mettre à jour (loan doit être un tableau de JSON stringifiés)
 * @returns Le matériel mis à jour
 */
export async function updateMaterielAppwrite(
  materielId: string,
  data: MaterielUpdate,
): Promise<Models.Document & Materiel> {
  const { databases } = await getAppwriteInstances();

  return (await databases.updateDocument(
    DATABASE_ID,
    MATERIEL_COLLECTION_ID,
    materielId,
    data as unknown as Partial<Models.Document>,
  )) as unknown as Models.Document & Materiel;
}

// =============================================================================
// SUPPRESSION
// =============================================================================

/**
 * Supprime un matériel
 *
 * @param materielId - ID du matériel à supprimer
 */
export async function deleteMaterielAppwrite(
  materielId: string,
): Promise<void> {
  const { databases } = await getAppwriteInstances();

  await databases.deleteDocument(
    DATABASE_ID,
    MATERIEL_COLLECTION_ID,
    materielId,
  );
}

// =============================================================================
// REALTIME
// =============================================================================

/**
 * Retourne les channels pour les souscriptions realtime
 */
export function getMaterielRealtimeChannels(): string[] {
  return [`databases.${DATABASE_ID}.collections.${MATERIEL_COLLECTION_ID}`];
}
