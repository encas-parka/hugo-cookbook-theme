/**
 * NotificationStore - Gestion centralisée des notifications de découverte
 *
 * Ce store centralise TOUTES les souscriptions aux notifications user_notifications,
 * évitant ainsi les doublons entre EventsStore et TeamsStore.
 *
 * Fonctionnement :
 * - S'abonne une seule fois à la collection user_notifications
 * - Dispatche les notifications aux stores appropriés (EventsStore, TeamsStore)
 * - Supprime automatiquement les notifications traitées
 *
 * Les notifications de découverte permettent aux utilisateurs d'être notifiés
 * lorsqu'ils reçoivent un accès à une nouvelle ressource (event, team, etc.).
 */

import { getDatabaseId, getAppwriteInstances } from "../services/appwrite";
import { realtimeManager } from "./RealtimeManager.svelte";
import { globalState } from "./GlobalState.svelte";
import { toastService } from "$lib/services/toast.service.svelte";
import { eventsStore } from "./EventsStore.svelte";
import { nativeTeamsStore } from "./NativeTeamsStore.svelte";
import { productsStore } from "./ProductsStore.svelte";

interface UserNotifications {
  $id: string;
  userId: string;
  notificationType:
    | "event_access_granted"
    | "team_access_granted"
    | "batch_products_update";
  targetCollection: string;
  targetDocumentId: string;
  createdAt: string;
  from?: string;
}

class NotificationStore {
  #isInitialized = $state(false);
  #realtimeInitialized = false;

  /**
   * Phase 3 : Configure les abonnements realtime
   */
  async setupRealtime(): Promise<void> {
    // Vérifier si déjà configuré pour éviter les doublons
    if (this.#realtimeInitialized) {
      console.log("[NotificationStore] Déjà configuré, skip.");
      return;
    }

    try {
      console.log("[NotificationStore] Configuration du realtime...");
      const DB_ID = getDatabaseId();

      // S'enregistrer auprès du RealtimeManager
      realtimeManager.register(
        [`databases.${DB_ID}.collections.user_notifications.documents`],
        async (response: any) => {
          const payload = response.payload as UserNotifications;
          const currentMainId = globalState.currentMainId;

          // Filtrer : uniquement les notifications avec permissions Label (userId = 'broadcast')
          // Les notifications avec userId spécifique sont legacy
          if (
            payload.userId !== "broadcast" &&
            payload.userId !== globalState.userId
          ) {
            return;
          }

          // Uniquement les nouvelles notifications (create)
          if (response.events.some((e: string) => e.includes(".create"))) {
            // Dispatcher selon le type de notification
            if (
              payload.notificationType === "event_access_granted" &&
              payload.targetCollection === "main"
            ) {
              console.log(
                "[NotificationStore] 🔔 Event access granted:",
                payload.targetDocumentId,
              );

              await eventsStore.reload();
              await this.#deleteNotification(payload.$id);
            } else if (payload.notificationType === "team_access_granted") {
              console.log(
                "[NotificationStore] 🔔 Team access granted:",
                payload.targetDocumentId,
              );

              await nativeTeamsStore.reload();
              await this.#deleteNotification(payload.$id);
            } else if (payload.notificationType === "batch_products_update") {
              const targetMainId = payload.targetDocumentId;

              // Seulement si je suis actuellement sur cet événement
              if (currentMainId === targetMainId) {
                console.log(
                  "[NotificationStore] 🔔 Batch data update for current event:",
                  targetMainId,
                );

                await productsStore.syncFromAppwrite();

                // Clear the isSyncing status after successful sync
                productsStore.clearSyncStatus();
                console.log(
                  "[NotificationStore] ✅ Sync status cleared for batch update",
                );

                // ✅ LOGIQUE DE TOAST : Distinguer user / system / other
                if (payload.from) {
                  if (payload.from === globalState.userId) {
                    // Même utilisateur : pas de toast
                    console.log(
                      "[NotificationStore] Batch update from current user - no toast",
                    );
                  } else if (payload.from === "system") {
                    toastService.info("Produits mis a jour", {
                      source: "system",
                    });
                  } else {
                    // Autre utilisateur : toast realtime-other
                    toastService.info(
                      `Les produits ont été modifiés par un·e autre utilisateur·ices`,
                      { source: "realtime-other" },
                    );
                  }
                } else {
                  // Legacy : pas de champ 'from'
                  console.warn(
                    "[NotificationStore] Legacy notification without 'from' field - ignoring",
                  );
                }
              }

              await this.#deleteNotification(payload.$id); // TOCHECK redondant ?!
            }
          }
        },
      );

      this.#isInitialized = true;
      this.#realtimeInitialized = true;
      console.log(
        "[NotificationStore] ✅ Notifications de découverte configurées (RealtimeManager)",
      );
    } catch (err) {
      console.error(
        "[NotificationStore] Erreur lors de la configuration du realtime:",
        err,
      );
      throw err;
    }
  }

  /**
   * Initialise les 3 phases séquentiellement (méthode legacy pour compatibilité)
   */
  async initialize(): Promise<void> {
    await this.loadCache();
    await this.syncFromRemote();
    await this.setupRealtime();
  }

  /**
   * Supprime une notification après l'avoir traitée
   */
  async #deleteNotification(notificationId: string): Promise<void> {
    try {
      const instances = await getAppwriteInstances();
      const DB_ID = getDatabaseId();

      await instances.tables.deleteRow({
        databaseId: DB_ID,
        tableId: "user_notifications",
        rowId: notificationId,
      });

      console.log(
        `[NotificationStore] Notification supprimée: ${notificationId}`,
      );
    } catch (err) {
      console.error(
        "[NotificationStore] Erreur lors de la suppression de la notification:",
        err,
      );
    }
  }

  /**
   * Détruit le store et se désabonne
   */
  destroy(): void {
    this.#isInitialized = false;
    this.#realtimeInitialized = false; // Reset pour permettre une réinitialisation
    console.log("[NotificationStore] Store détruit");
  }
}

// Singleton exporté
export const notificationStore = new NotificationStore();
