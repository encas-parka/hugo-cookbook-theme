import { ID, Query, Permission, Role } from "appwrite";
import {
  getAppwriteInstances,
  getDatabaseId,
  getCollectionId,
} from "./appwrite";

export interface AppwriteLock {
  $id: string; // L'ID du document verrouillé (ex: eventId)
  userId: string;
  userName: string;
  expiresAt: string;
  $updatedAt: string;
}

const LOCK_DURATION_MINUTES = 7;

/**
 * Service de gestion des verrous (Lock System)
 */
export const locksService = {
  async getLock(resourceId: string): Promise<AppwriteLock | null> {
    const { tables } = await getAppwriteInstances();
    try {
      const lock = await tables.getRow({
        databaseId: getDatabaseId(),
        tableId: getCollectionId("locks"),
        rowId: resourceId,
      });

      // Vérifier si le verrou est vide ou périmé
      if (!lock.userId || new Date(lock.expiresAt) < new Date()) {
        return null;
      }

      return lock as unknown as AppwriteLock;
    } catch (error: any) {
      if (error.code === 404) return null;
      throw error;
    }
  },

  /**
   * Acquiert ou rafraîchit un verrou (Permanent UPSERT)
   */
  async acquireLock(
    resourceId: string,
    userId: string,
    userName: string,
  ): Promise<boolean> {
    const { tables } = await getAppwriteInstances();
    const expiresAt = new Date(
      Date.now() + LOCK_DURATION_MINUTES * 60 * 1000,
    ).toISOString();

    const data = {
      userId,
      userName,
      expiresAt,
    };

    const permissions = [
      Permission.read(Role.any()),
      Permission.update(Role.user(userId)),
    ];

    try {
      // 1. Tenter une mise à jour (Si le document existe déjà)
      await tables.updateRow({
        databaseId: getDatabaseId(),
        tableId: getCollectionId("locks"),
        rowId: resourceId,
        data,
        permissions,
      });
      return true;
    } catch (error: any) {
      // 2. Si non trouvé (404), créer le document
      if (error.code === 404) {
        try {
          await tables.createRow({
            databaseId: getDatabaseId(),
            tableId: getCollectionId("locks"),
            rowId: resourceId,
            data,
            permissions,
          });
          return true;
        } catch (createError: any) {
          console.error("[locksService] Erreur création verrou:", createError);
          return false;
        }
      }
      
      // 3. Si erreur de permission (déjà verrouillé par un autre)
      console.warn("[locksService] Acquisition refusée (peut-être déjà verrouillé):", error.message);
      return false;
    }
  },

  /**
   * Libère un verrou (Marque comme libre sans supprimer le document)
   */
  async releaseLock(resourceId: string, userId: string): Promise<void> {
    const { tables } = await getAppwriteInstances();
    try {
      // On vide les champs. Le document reste présent pour le Realtime.
      await tables.updateRow({
        databaseId: getDatabaseId(),
        tableId: getCollectionId("locks"),
        rowId: resourceId,
        data: {
          userId: "",
          userName: "",
          expiresAt: new Date(0).toISOString(), // Date dans le passé
        },
        // On remet les permissions à n'importe qui pour que le prochain puisse verrouiller
        permissions: [
          Permission.read(Role.any()),
          Permission.update(Role.any()), 
        ],
      });
      console.log(`[locksService] Verrou libéré (permanent) pour ${resourceId}`);
    } catch (error: any) {
      console.error("[locksService] Erreur libération verrou:", error);
    }
  },

  /**
   * S'abonne aux changements d'un verrou
   */
  async subscribeToLock(
    resourceId: string,
    callback: (lock: AppwriteLock | null) => void,
  ) {
    const { client } = await getAppwriteInstances();
    const databaseId = getDatabaseId();
    const collectionId = getCollectionId("locks");

    return client.subscribe(
      [
        `databases.${databaseId}.collections.${collectionId}.documents.${resourceId}`,
      ],
      (response: any) => {
        const payload = response.payload as AppwriteLock;
        // Si userId est vide, on considère le verrou comme libre
        if (!payload.userId) {
          callback(null);
        } else {
          callback(payload);
        }
      },
    );
  },
};
