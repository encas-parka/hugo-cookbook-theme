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
  /**
   * Récupère le verrou pour un document donné
   */
  async getLock(resourceId: string): Promise<AppwriteLock | null> {
    const { tables } = await getAppwriteInstances();
    try {
      const lock = await tables.getRow({
        databaseId: getDatabaseId(),
        tableId: getCollectionId("locks"),
        rowId: resourceId,
      });

      // Vérifier si le verrou est périmé
      if (new Date(lock.expiresAt) < new Date()) {
        return null;
      }

      return lock as AppwriteLock;
    } catch (error: any) {
      if (error.code === 404) return null;
      throw error;
    }
  },

  /**
   * Acquiert ou rafraîchit un verrou
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

    try {
      const existingLock = await this.getLock(resourceId);

      if (existingLock) {
        if (existingLock.userId !== userId) {
          return false; // Verrouillé par quelqu'un d'autre
        }

        // Rafraîchir notre propre verrou
        await tables.updateRow({
          databaseId: getDatabaseId(),
          tableId: getCollectionId("locks"),
          rowId: resourceId,
          data: { expiresAt },
          permissions: [
            Permission.read(Role.any()),
            Permission.update(Role.user(userId)),
            Permission.delete(Role.user(userId)),
          ],
        });
      } else {
        // Créer un nouveau verrou
        // On utilise resourceId comme ID du document pour faciliter le fetch
        await tables.createRow({
          databaseId: getDatabaseId(),
          tableId: getCollectionId("locks"),
          rowId: resourceId,
          data: {
            userId,
            userName,
            expiresAt,
          },
          permissions: [
            Permission.read(Role.any()),
            Permission.update(Role.user(userId)),
            Permission.delete(Role.user(userId)),
          ],
        });
      }
      return true;
    } catch (error: any) {
      console.error("[locksService] Erreur acquisition verrou:", error);
      return false;
    }
  },

  /**
   * Libère un verrou
   */
  async releaseLock(resourceId: string, userId: string): Promise<void> {
    const { tables } = await getAppwriteInstances();
    try {
      const lock = await this.getLock(resourceId);
      if (lock && lock.userId === userId) {
        await tables.deleteRow({
          databaseId: getDatabaseId(),
          tableId: getCollectionId("locks"),
          rowId: resourceId,
        });
      }
    } catch (error: any) {
      // Ignorer si déjà supprimé
      if (error.code !== 404) {
        console.error("[locksService] Erreur libération verrou:", error);
      }
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
        if (response.events.some((e: string) => e.includes(".delete"))) {
          callback(null);
        } else {
          callback(response.payload as AppwriteLock);
        }
      },
    );
  },
};
