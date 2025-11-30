/**
 * EventsStore - Store de gestion des événements avec Svelte 5
 *
 * Architecture:
 * - Chargement des événements depuis Appwrite
 * - Filtrage strict : accès conditionné à l'appartenance (teams/contributors)
 * - CRUD complet via Appwrite
 * - Realtime pour les événements accessibles
 * - Helpers pour la gestion des meals
 *
 * @usage
 * await eventsStore.initialize();
 * const event = await eventsStore.getEvent('event-id');
 * const myEvents = eventsStore.events;
 */

import { SvelteMap } from "svelte/reactivity";
import type { Main } from "../types/appwrite.d";
import type {
  CreateEventData,
  UpdateEventData,
  Meal,
  ContributorInfo,
} from "../types/appwrite.types";
import {
  listEvents,
  getEvent as getAppwriteEvent,
  createEvent as createAppwriteEvent,
  updateEvent as updateAppwriteEvent,
  deleteEvent as deleteAppwriteEvent,
  addMeal,
  updateMeal,
  deleteMeal,
  parseMeals,
  parseContributors,
  subscribeToEvents,
} from "../services/appwrite-events";
import { globalState } from "./GlobalState.svelte";

// =============================================================================
// STORE SINGLETON
// =============================================================================

class EventsStore {
  // État réactif - Événements
  #events = new SvelteMap<string, Main>();

  // État UI
  #loading = $state(false);
  #error = $state<string | null>(null);
  #isInitialized = $state(false);

  // Appwrite
  #userId: string | null = null;
  #userTeams: string[] = [];
  #realtimeUnsubscribe: (() => void) | null = null;

  // Getters publics
  get loading() {
    return this.#loading;
  }

  get error() {
    return this.#error;
  }

  get isInitialized() {
    return this.#isInitialized;
  }

  /**
   * Liste réactive des événements accessibles
   */
  get events() {
    return Array.from(this.#events.values());
  }

  /**
   * Nombre d'événements
   */
  get count() {
    return this.#events.size;
  }

  // =============================================================================
  // INITIALISATION
  // =============================================================================

  /**
   * Initialise le store
   * 1. Vérifie que l'utilisateur est authentifié
   * 2. Charge les événements depuis Appwrite (avec filtrage strict)
   * 3. Active le realtime
   */
  async initialize(): Promise<void> {
    if (this.#isInitialized) {
      console.log("[EventsStore] Déjà initialisé");
      return;
    }

    console.log("[EventsStore] Initialisation...");
    this.#loading = true;
    this.#error = null;

    try {
      // Vérifier que l'utilisateur est authentifié
      if (!globalState.isAuthenticated) {
        throw new Error("Utilisateur non connecté");
      }

      // Récupérer userId et teams depuis globalState
      this.#userId = globalState.userId;
      this.#userTeams = globalState.userTeams;

      // Charger les événements
      await this.#loadEvents();

      // Activer le realtime
      this.#setupRealtime();

      this.#isInitialized = true;
      console.log(
        `[EventsStore] Initialisation complétée: ${this.#events.size} événements`,
      );
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Erreur lors de l'initialisation";
      this.#error = message;
      console.error("[EventsStore]", message, err);
      throw err;
    } finally {
      this.#loading = false;
    }
  }

  /**
   * Charge les événements depuis Appwrite
   * Filtrage strict : seulement les événements où l'utilisateur est membre/contributor
   */
  async #loadEvents(): Promise<void> {
    try {
      console.log("[EventsStore] Chargement des événements...");

      const events = await listEvents(this.#userId!, this.#userTeams);

      // Ajouter à la map
      events.forEach((event) => {
        this.#events.set(event.$id, event);
      });

      console.log(`[EventsStore] ${events.length} événements chargés`);
    } catch (err) {
      console.error("[EventsStore] Erreur lors du chargement:", err);
      throw err;
    }
  }

  /**
   * Configure le realtime pour les événements
   */
  #setupRealtime(): void {
    try {
      this.#realtimeUnsubscribe = async () => {
        await subscribeToEvents(
          this.#userId!,
          this.#userTeams,
          (event, eventType) => {
            console.log(
              `[EventsStore] Realtime: ${eventType} pour ${event.$id}`,
            );

            if (eventType === "create" || eventType === "update") {
              this.#events.set(event.$id, event);
            } else if (eventType === "delete") {
              this.#events.delete(event.$id);
            }
          },
        );

        console.log("[EventsStore] Realtime activé");
      };
    } catch (err) {
      console.error(
        "[EventsStore] Erreur lors de la configuration du realtime:",
        err,
      );
    }
  }

  // =============================================================================
  // API PUBLIQUE - LECTURE
  // =============================================================================

  /**
   * Récupère un événement par ID
   */
  getEventById(eventId: string): Main | null {
    return this.#events.get(eventId) || null;
  }

  /**
   * Récupère un événement depuis Appwrite (force refresh)
   */
  async fetchEvent(eventId: string): Promise<Main | null> {
    try {
      const event = await getAppwriteEvent(eventId);
      if (event) {
        this.#events.set(eventId, event);
      }
      return event;
    } catch (err) {
      console.error(`[EventsStore] Erreur lors du fetch de ${eventId}:`, err);
      return null;
    }
  }

  /**
   * Filtre les événements par date
   */
  getEventsByDateRange(startDate: string, endDate: string): Main[] {
    return this.events.filter((event) => {
      return (
        event.dateStart &&
        event.dateEnd &&
        event.dateStart >= startDate &&
        event.dateEnd <= endDate
      );
    });
  }

  /**
   * Vérifie si l'utilisateur peut éditer un événement
   */
  canEditEvent(eventId: string): boolean {
    if (!this.#userId) return false;

    const event = this.#events.get(eventId);
    if (!event) return false;

    // Créateur
    if (event.createdBy === this.#userId) return true;

    // Membre d'une équipe autorisée
    if (event.teams?.some((teamId) => this.#userTeams.includes(teamId)))
      return true;

    // Contributeur accepté
    if (event.contributors) {
      const contributors = parseContributors(event);
      if (
        contributors.some(
          (c) => c.id === this.#userId && c.status === "accepted",
        )
      ) {
        return true;
      }
    }

    return false;
  }

  // =============================================================================
  // API PUBLIQUE - CRUD
  // =============================================================================

  /**
   * Crée un nouvel événement
   */
  async createEvent(data: CreateEventData): Promise<Main> {
    if (!this.#userId) {
      throw new Error("Utilisateur non connecté");
    }

    try {
      const event = await createAppwriteEvent(data, this.#userId);
      this.#events.set(event.$id, event);
      console.log(`[EventsStore] Événement créé: ${event.$id}`);
      return event;
    } catch (err) {
      console.error("[EventsStore] Erreur lors de la création:", err);
      throw err;
    }
  }

  /**
   * Met à jour un événement
   */
  async updateEvent(eventId: string, data: UpdateEventData): Promise<Main> {
    try {
      const event = await updateAppwriteEvent(eventId, data);
      this.#events.set(eventId, event);
      console.log(`[EventsStore] Événement mis à jour: ${eventId}`);
      return event;
    } catch (err) {
      console.error(
        `[EventsStore] Erreur lors de la mise à jour de ${eventId}:`,
        err,
      );
      throw err;
    }
  }

  /**
   * Supprime un événement
   */
  async deleteEvent(eventId: string): Promise<void> {
    try {
      await deleteAppwriteEvent(eventId);
      this.#events.delete(eventId);
      console.log(`[EventsStore] Événement supprimé: ${eventId}`);
    } catch (err) {
      console.error(
        `[EventsStore] Erreur lors de la suppression de ${eventId}:`,
        err,
      );
      throw err;
    }
  }

  // =============================================================================
  // API PUBLIQUE - MEALS
  // =============================================================================

  /**
   * Récupère les meals d'un événement
   */
  getMeals(eventId: string): Meal[] {
    const event = this.#events.get(eventId);
    if (!event) return [];
    return parseMeals(event);
  }

  /**
   * Ajoute un repas à un événement
   */
  async addMeal(eventId: string, meal: Meal): Promise<Main> {
    try {
      const event = await addMeal(eventId, meal);
      this.#events.set(eventId, event);
      console.log(`[EventsStore] Meal ajouté à ${eventId}`);
      return event;
    } catch (err) {
      console.error(`[EventsStore] Erreur lors de l'ajout du meal:`, err);
      throw err;
    }
  }

  /**
   * Met à jour un repas dans un événement
   */
  async updateMeal(
    eventId: string,
    mealIndex: number,
    meal: Meal,
  ): Promise<Main> {
    try {
      const event = await updateMeal(eventId, mealIndex, meal);
      this.#events.set(eventId, event);
      console.log(`[EventsStore] Meal ${mealIndex} mis à jour dans ${eventId}`);
      return event;
    } catch (err) {
      console.error(
        `[EventsStore] Erreur lors de la mise à jour du meal:`,
        err,
      );
      throw err;
    }
  }

  /**
   * Supprime un repas d'un événement
   */
  async deleteMeal(eventId: string, mealIndex: number): Promise<Main> {
    try {
      const event = await deleteMeal(eventId, mealIndex);
      this.#events.set(eventId, event);
      console.log(`[EventsStore] Meal ${mealIndex} supprimé de ${eventId}`);
      return event;
    } catch (err) {
      console.error(
        `[EventsStore] Erreur lors de la suppression du meal:`,
        err,
      );
      throw err;
    }
  }

  // =============================================================================
  // CALCULS UTILITAIRES
  // =============================================================================

  /**
   * Calcule le scaleFactor pour une recette dans un repas
   * scaleFactor = plates / basePlates
   */
  calculateScaleFactor(recipePlates: number, recipeBasePlates: number): number {
    return recipePlates / recipeBasePlates;
  }

  // =============================================================================
  // UTILITAIRES
  // =============================================================================

  /**
   * Force le rechargement des événements
   */
  async reload(): Promise<void> {
    console.log("[EventsStore] Rechargement...");
    this.#loading = true;
    this.#error = null;

    try {
      this.#events.clear();
      await this.#loadEvents();
      console.log("[EventsStore] Rechargement complété");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Erreur lors du rechargement";
      this.#error = message;
      console.error("[EventsStore]", message, err);
      throw err;
    } finally {
      this.#loading = false;
    }
  }

  /**
   * Nettoie les ressources
   */
  destroy(): void {
    // Désactiver le realtime
    if (this.#realtimeUnsubscribe) {
      this.#realtimeUnsubscribe();
      this.#realtimeUnsubscribe = null;
    }

    this.#events.clear();
    this.#isInitialized = false;
    console.log("[EventsStore] Ressources nettoyées");
  }
}

// =============================================================================
// EXPORT SINGLETON
// =============================================================================

export const eventsStore = new EventsStore();
