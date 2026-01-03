/**
 * RealtimeManager - Gestionnaire centralisé des souscriptions Realtime Appwrite
 *
 * Cette classe permet de multiplexer plusieurs souscriptions logiques sur une unique
 * connexion WebSocket Appwrite. Elle collecte les channels de tous les stores
 * et établit la connexion au démarrage de l'application.
 */

import type { Client } from "appwrite";
import { getAppwriteInstances } from "../services/appwrite";

interface RealtimeRegistration {
  channels: string[];
  callback: (response: any) => void;
}

export class RealtimeManager {
  #registrations: RealtimeRegistration[] = [];
  #unsubscribe: (() => void) | null = null;
  #isInitialized = false;

  /**
   * Enregistre un ensemble de channels et un callback.
   * Doit être appelé PENDANT la phase d'initialisation des stores,
   * AVANT l'appel à realtimeManager.initialize().
   */
  register(channels: string[], callback: (response: any) => void): void {
    if (this.#isInitialized) {
      console.warn(
        "[RealtimeManager] Enregistrement après initialisation. La connexion actuelle ne sera pas mise à jour immédiatement.",
      );
    }
    this.#registrations.push({ channels, callback });
    console.log(`[RealtimeManager] Channels enregistrés:`, channels);
  }

  /**
   * Établit l'unique connexion WebSocket avec tous les channels cumulés.
   */
  async initialize(): Promise<void> {
    if (this.#isInitialized) return;

    const allChannels = [
      ...new Set(this.#registrations.flatMap((r) => r.channels)),
    ];

    if (allChannels.length === 0) {
      console.log("[RealtimeManager] Aucun channel à souscrire.");
      this.#isInitialized = true;
      return;
    }

    try {
      console.log(
        `[RealtimeManager] Initialisation de la connexion unique avec ${allChannels.length} channels...`,
      );
      const { client } = await getAppwriteInstances();

      this.#unsubscribe = client.subscribe(allChannels, (response) => {
        // Distribuer l'événement à chaque store intéressé
        for (const reg of this.#registrations) {
          const hasMatchingChannel = response.channels.some((ch: string) =>
            reg.channels.includes(ch),
          );
          if (hasMatchingChannel) {
            reg.callback(response);
          }
        }
      });

      this.#isInitialized = true;
      console.log("[RealtimeManager] ✅ Connexion Realtime établie.");
    } catch (err) {
      console.error("[RealtimeManager] Erreur lors de l'initialisation:", err);
      throw err;
    }
  }

  /**
   * Ferme la connexion et nettoie les enregistrements.
   */
  destroy(): void {
    if (this.#unsubscribe) {
      this.#unsubscribe();
      this.#unsubscribe = null;
    }
    this.#registrations = [];
    this.#isInitialized = false;
    console.log("[RealtimeManager] Connexion Realtime fermée.");
  }
}

// Singleton
export const realtimeManager = new RealtimeManager();
