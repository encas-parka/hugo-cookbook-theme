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
  EnrichedEvent,
  EventMeal,
  EventContributor,
} from "../types/events.d";
import {
  listEvents,
  getEvent as getAppwriteEvent,
  createEvent as createAppwriteEvent,
  updateEvent as updateAppwriteEvent,
  deleteEvent as deleteAppwriteEvent,
  subscribeToEvents,
} from "../services/appwrite-events";
import { globalState } from "./GlobalState.svelte";
import { parseEventMeals, parseEventContributors } from "../utils/events.utils";
import {
  createEventsIDBCache,
  type EventsIDBCache,
} from "../services/events-idb-cache";

// =============================================================================
// STORE SINGLETON
// =============================================================================

export class EventsStore {
  // État réactif - Événements
  #events = new SvelteMap<string, EnrichedEvent>();

  // État UI
  #loading = $state(false);
  #error = $state<string | null>(null);
  #isInitialized = $state(false);

  // Cache IndexedDB
  #cache: EventsIDBCache | null = null;

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
  // DERIVED STATES
  // =============================================================================

  /**
   * Événements en cours (maintenant)
   */
  #currentEvents = $derived.by(() => {
    const now = new Date();
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Début de la journée actuelle
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1); // Début de demain

    return Array.from(this.#events.values()).filter((event) => {
      if (!event.dateStart || !event.dateEnd) return false;
      const end = new Date(event.dateEnd);

      // L'événement est considéré comme "en cours" si sa date de fin est aujourd'hui
      // (peu importe l'heure, tant que le dernier jour n'est pas terminé)
      return end >= today && end < tomorrow;
    });
  });

  /**
   * Événements à venir (futurs)
   */
  #upcomingEvents = $derived.by(() => {
    const now = new Date();
    return Array.from(this.#events.values())
      .filter((event) => {
        if (!event.dateStart) return false;
        const start = new Date(event.dateStart);
        return start > now;
      })
      .sort((a, b) => {
        const dateA = new Date(a.dateStart!).getTime();
        const dateB = new Date(b.dateStart!).getTime();
        return dateA - dateB;
      });
  });

  /**
   * Événements passés
   */
  #pastEvents = $derived.by(() => {
    const now = new Date();
    return Array.from(this.#events.values()).filter((event) => {
      if (!event.dateEnd) return false;
      const end = new Date(event.dateEnd);
      return end < now;
    });
  });

  /**
   * Getters publics pour les derived states
   */
  get currentEvents() {
    return this.#currentEvents;
  }

  get upcomingEvents() {
    return this.#upcomingEvents;
  }

  get pastEvents() {
    return this.#pastEvents;
  }

  /**
   * Nombre d'événements passés
   */
  get pastEventsCount() {
    return this.#pastEvents.length;
  }

  // =============================================================================
  // INITIALISATION
  // =============================================================================

  /**
   * Initialise le store
   * 1. Ouvre le cache IndexedDB
   * 2. Charge les événements depuis le cache
   * 3. Charge les événements depuis Appwrite (mise à jour)
   * 4. Sauvegarde dans le cache
   * 5. Active le realtime
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

      // 1. Ouvrir le cache IndexedDB
      this.#cache = await createEventsIDBCache();

      // 2. Charger les événements depuis le cache
      const cachedEvents = await this.#cache.loadEvents();
      if (cachedEvents.size > 0) {
        console.log(
          `[EventsStore] ${cachedEvents.size} événements chargés depuis le cache`,
        );
        this.#events.clear();
        for (const [id, event] of cachedEvents) {
          this.#events.set(id, event);
        }
      }

      // 3. Charger les événements depuis Appwrite (mise à jour)
      await this.#loadEvents();

      // 4. Sauvegarder dans le cache
      if (this.#cache) {
        await this.#cache.saveEvents(this.#events);
        await this.#cache.saveMetadata({ lastSync: new Date().toISOString() });
      }

      // 5. Activer le realtime
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

      const { events } = await listEvents();

      // Ajouter à la map
      events.forEach((event) => {
        this.#events.set(event.$id, this.#enrichEvent(event));
      });

      console.log(`[EventsStore] ${events.length} événements chargés`);
    } catch (err) {
      console.error("[EventsStore] Erreur lors du chargement:", err);
      throw err;
    }
  }

  /**
   * Transforme un événement brut en événement enrichi
   */
  #enrichEvent(event: Main): EnrichedEvent {
    return {
      ...event,
      meals: parseEventMeals(event.meals),
      contributors: parseEventContributors(event.contributors),
    };
  }

  /**
   * Configure le realtime pour les événements
   */
  #setupRealtime(): void {
    try {
      this.#realtimeUnsubscribe = () => {
        subscribeToEvents(
          this.#userId!,
          this.#userTeams,
          async (event, eventType) => {
            console.log(
              `[EventsStore] Realtime: ${eventType} pour ${event.$id}`,
            );

            if (eventType === "create" || eventType === "update") {
              const enrichedEvent = this.#enrichEvent(event);
              this.#events.set(event.$id, enrichedEvent);

              // Sauvegarder dans le cache
              if (this.#cache) {
                await this.#cache.saveEvent(enrichedEvent);
              }
            } else if (eventType === "delete") {
              this.#events.delete(event.$id);

              // Supprimer du cache
              if (this.#cache) {
                await this.#cache.deleteEvent(event.$id);
              }
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
  getEventById(eventId: string): EnrichedEvent | null {
    return this.#events.get(eventId) || null;
  }

  /**
   * Récupère un événement depuis Appwrite (force refresh)
   */
  async fetchEvent(eventId: string): Promise<EnrichedEvent | null> {
    try {
      const event = await getAppwriteEvent(eventId);
      if (event) {
        const enriched = this.#enrichEvent(event);
        this.#events.set(eventId, enriched);
        return enriched;
      }
      return null;
    } catch (err) {
      console.error(`[EventsStore] Erreur lors du fetch de ${eventId}:`, err);
      return null;
    }
  }

  /**
   * Filtre les événements par date
   */
  getEventsByDateRange(startDate: string, endDate: string): EnrichedEvent[] {
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
      // event.contributors est déjà un tableau d'objets EventContributor grâce à EnrichedEvent
      if (
        event.contributors.some(
          (c) => c.id === this.#userId && c.status === "accepted",
        )
      ) {
        return true;
      }
    }

    return false;
  }

  // =============================================================================
  // API PUBLIQUE - ÉCRITURE
  // =============================================================================

  /**
   * Crée un nouvel événement
   */
  async createEvent(data: CreateEventData): Promise<EnrichedEvent> {
    try {
      if (!globalState.userId) throw new Error("Utilisateur non connecté");

      const event = await createAppwriteEvent(data, globalState.userId);
      const enriched = this.#enrichEvent(event);
      this.#events.set(event.$id, enriched);

      console.log(`[EventsStore] Événement créé: ${event.$id}`);
      return enriched;
    } catch (err) {
      console.error("[EventsStore] Erreur création:", err);
      throw err;
    }
  }

  /**
   * Met à jour un événement
   */
  async updateEvent(
    eventId: string,
    data: UpdateEventData,
  ): Promise<EnrichedEvent> {
    try {
      const event = await updateAppwriteEvent(eventId, data);
      const enriched = this.#enrichEvent(event);
      this.#events.set(eventId, enriched);

      console.log(`[EventsStore] Événement mis à jour: ${eventId}`);
      return enriched;
    } catch (err) {
      console.error(`[EventsStore] Erreur mise à jour ${eventId}:`, err);
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
  // API PUBLIQUE - CONTRIBUTORS
  // =============================================================================

  /**
   * Récupère les contributeurs d'un événement
   */
  getContributors(eventId: string): EventContributor[] {
    const event = this.#events.get(eventId);
    if (!event) return [];
    return event.contributors;
  }

  getContributorStatus(eventId: string) {
    const event = this.#events.get(eventId);
    if (!event) return "";
    const user = event.contributors.filter((c) => c.id === this.#userId);
    return user.length > 0 ? user[0].status : "";
  }
  /**
   * Ajoute des contributeurs à un événement via la cloud function
   * Envoie les invitations et met à jour les permissions côté serveur
   */
  async addContributors(
    eventId: string,
    emails: string[],
  ): Promise<EnrichedEvent> {
    try {
      const event = this.#events.get(eventId);
      if (!event) throw new Error("Événement introuvable");

      if (emails.length === 0) {
        console.log(`[EventsStore] Aucun email à ajouter`);
        return event;
      }

      // Filtrer les emails déjà présents
      const existingEmails = new Set(
        event.contributors.map((c) => c.email).filter(Boolean),
      );
      const newEmails = emails.filter((email) => !existingEmails.has(email));

      if (newEmails.length === 0) {
        console.log(`[EventsStore] Tous les contributeurs sont déjà présents`);
        return event;
      }

      // Appeler la cloud function pour gérer l'invitation
      // Elle va :
      // 1. Créer les utilisateurs si nécessaire
      // 2. Ajouter les permissions
      // 3. Envoyer les emails (groupé pour existants, individuel pour nouveaux)
      const { inviteToEvent } = await import("../services/appwrite-functions");
      await inviteToEvent(eventId, event.name, newEmails);

      // Recharger l'événement depuis Appwrite pour avoir les données à jour
      // Attendre un court instant pour que le traitement côté serveur soit effectué
      await new Promise((resolve) => setTimeout(resolve, 500));

      const updatedEvent = await this.fetchEvent(eventId);
      if (!updatedEvent) throw new Error("Impossible de recharger l'événement");

      console.log(
        `[EventsStore] ${newEmails.length} contributeur(s) ajouté(s) à l'événement ${eventId}`,
      );

      return updatedEvent;
    } catch (err) {
      console.error(`[EventsStore] Erreur ajout contributeurs:`, err);
      throw err;
    }
  }

  /**
   * Ajoute un contributeur provenant d'une KTeam
   */
  async addContributorFromKteam(
    eventId: string,
    userId: string,
    email?: string,
    name?: string,
  ): Promise<EnrichedEvent> {
    try {
      const event = this.#events.get(eventId);
      if (!event) throw new Error("Événement introuvable");

      const contributors = [...event.contributors];

      if (
        contributors.some(
          (c) => c.id === userId || (email && c.email === email),
        )
      ) {
        console.log(`[EventsStore] Contributeur KTeam déjà présent: ${userId}`);
        return event;
      }

      const newContributor: EventContributor = {
        id: userId,
        email,
        name,
        status: "accepted",
        invitedAt: new Date().toISOString(),
        respondedAt: new Date().toISOString(),
      };

      contributors.push(newContributor);

      return await this.updateEvent(eventId, { contributors });
    } catch (err) {
      console.error(`[EventsStore] Erreur ajout contributeur KTeam:`, err);
      throw err;
    }
  }

  /**
   * Supprime un contributeur d'un événement
   */
  async removeContributor(
    eventId: string,
    contributorId: string,
  ): Promise<EnrichedEvent> {
    try {
      const event = this.#events.get(eventId);
      if (!event) throw new Error("Événement introuvable");

      const contributors = event.contributors.filter(
        (c) => c.id !== contributorId && c.email !== contributorId,
      );

      if (event.contributors.length === contributors.length) {
        return event;
      }

      return await this.updateEvent(eventId, { contributors });
    } catch (err) {
      console.error(`[EventsStore] Erreur suppression contributeur:`, err);
      throw err;
    }
  }

  /**
   * Met à jour le statut d'un contributeur
   */
  async updateContributorStatus(
    eventId: string,
    contributorId: string,
    status: "accepted" | "declined",
  ): Promise<EnrichedEvent> {
    try {
      const event = this.#events.get(eventId);
      if (!event) throw new Error("Événement introuvable");

      const contributors = [...event.contributors];
      const index = contributors.findIndex(
        (c) => c.id === contributorId || c.email === contributorId,
      );

      if (index === -1) throw new Error("Contributeur introuvable");

      contributors[index] = {
        ...contributors[index],
        status,
        respondedAt: new Date().toISOString(),
      };

      return await this.updateEvent(eventId, { contributors });
    } catch (err) {
      console.error(`[EventsStore] Erreur maj statut:`, err);
      throw err;
    }
  }

  // =============================================================================
  // API PUBLIQUE - MEALS
  // =============================================================================

  /**
   * Récupère les meals d'un événement
   */
  getMeals(eventId: string): EventMeal[] {
    const event = this.#events.get(eventId);
    if (!event) return [];
    return event.meals; // Déjà parsé !
  }

  /**
   * Ajoute un repas à un événement
   */
  async addMeal(eventId: string, meal: EventMeal): Promise<EnrichedEvent> {
    try {
      const event = this.#events.get(eventId);
      if (!event) throw new Error("Événement introuvable");

      const meals = [...event.meals, meal];
      return await this.updateEvent(eventId, { meals });
    } catch (err) {
      console.error(`[EventsStore] Erreur ajout meal:`, err);
      throw err;
    }
  }

  /**
   * Met à jour un repas dans un événement
   */
  async updateMeal(
    eventId: string,
    mealIndex: number,
    meal: EventMeal,
  ): Promise<EnrichedEvent> {
    try {
      const event = this.#events.get(eventId);
      if (!event) throw new Error("Événement introuvable");

      const meals = [...event.meals];
      if (mealIndex < 0 || mealIndex >= meals.length)
        throw new Error("Index invalide");

      meals[mealIndex] = meal;
      return await this.updateEvent(eventId, { meals });
    } catch (err) {
      console.error(`[EventsStore] Erreur maj meal:`, err);
      throw err;
    }
  }

  /**
   * Supprime un repas d'un événement
   */
  async deleteMeal(eventId: string, mealIndex: number): Promise<EnrichedEvent> {
    try {
      const event = this.#events.get(eventId);
      if (!event) throw new Error("Événement introuvable");

      const meals = [...event.meals];
      if (mealIndex < 0 || mealIndex >= meals.length)
        throw new Error("Index invalide");

      meals.splice(mealIndex, 1);
      return await this.updateEvent(eventId, { meals });
    } catch (err) {
      console.error(`[EventsStore] Erreur suppression meal:`, err);
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

    // Fermer le cache
    if (this.#cache) {
      this.#cache.close();
      this.#cache = null;
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
