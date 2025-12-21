import type { EnrichedEvent, EventContributor } from "../types/events";
import type { EventMeal } from "../types/events";
import { eventsStore } from "./EventsStore.svelte";
import { recipesStore } from "./RecipesStore.svelte";


/**
 * EventStatsStore - Responsabilités :
 * 1. Centraliser les calculs de statistiques pour un événement donné
 * 2. Fournir des derived réactives optimisées
 * 3. Éviter les recalculs multiples dans différents composants
 * 4. Offrir une interface simple pour accéder aux données d'un événement
 */
export class EventStatsStore {
  readonly #eventId = $state<string | null>(null);

  constructor(eventId: string | null = null) {
    this.#eventId = eventId;
  }

  /**
   * L'événement enrichi courant
   */
  readonly currentEvent = $derived.by(() => {
    return this.#eventId ? eventsStore.getEventById(this.#eventId) : null;
  });

  // =============================================================================
  // STATISTIQUES RÉACTIVES
  // =============================================================================

  /**
   * Nombre de repas dans l'événement
   */
  readonly mealsCount = $derived(this.currentEvent?.meals?.length || 0);

  /**
   * Nombre total d'invités (tous repas confondus)
   */
  readonly totalGuests = $derived.by(() => {
    const event = this.currentEvent;
    if (!event?.meals) return 0;

    return event.meals.reduce((total, meal) => {
      return total + (meal.guests || 0);
    }, 0);
  });

  /**
   * Nombre total de recettes uniques dans l'événement
   */
  readonly totalRecipes = $derived.by(() => {
    const event = this.currentEvent;
    if (!event?.meals) return 0;

    const allRecipeIds = new Set<string>();

    event.meals.forEach((meal) => {
      if (meal.recipes) {
        meal.recipes.forEach((recipe) => {
          if (recipe.recipeUuid) {
            allRecipeIds.add(recipe.recipeUuid);
          }
        });
      }
    });

    return allRecipeIds.size;
  });

  /**
   * Nombre total d'ingrédients uniques dans l'événement
   */
  readonly totalIngredients = $derived.by(() => {
    const event = this.currentEvent;
    if (!event?.meals) return 0;

    const allIngredients = new Set<string>();

    event.meals.forEach((meal) => {
      if (meal.recipes) {
        meal.recipes.forEach((mealRecipe) => {
          const recipeIndex = recipesStore.getRecipeIndexByUuid(
            mealRecipe.recipeUuid,
          );
          if (recipeIndex?.ingredients) {
            recipeIndex.ingredients.forEach((ing) => allIngredients.add(ing));
          }
        });
      }
    });

    return allIngredients.size;
  });


  /**
   * Liste des contributeurs avec leur statut
   */
  readonly contributors = $derived(this.currentEvent?.contributors || []);

  /**
   * Statistiques des contributeurs
   */
  readonly contributorsStats = $derived.by(() => {
    const contributors = this.contributors;

    return {
      total: contributors.length,
      accepted: contributors.filter((c) => c.status === "accepted").length,
      declined: contributors.filter((c) => c.status === "declined").length,
      pending: contributors.filter((c) => c.status === "invited").length,
    };
  });

  /**
   * Liste des contributeurs ayant accepté
   */
  readonly acceptedContributors = $derived(
    this.contributors.filter((c) => c.status === "accepted"),
  );

  /**
   * Liste des contributeurs ayant décliné
   */
  readonly declinedContributors = $derived(
    this.contributors.filter((c) => c.status === "declined"),
  );

  /**
   * Liste des contributeurs en attente de réponse
   */
  readonly pendingContributors = $derived(
    this.contributors.filter((c) => c.status === "invited"),
  );

  /**
   * Nom de l'événement
   */
  readonly eventName = $derived(this.currentEvent?.name || "");

  /**
   * Statut de l'événement
   */
  readonly eventStatus = $derived(this.currentEvent?.status || "active");

  /**
   * Liste des équipes impliquées
   */
  readonly teams = $derived(this.currentEvent?.teams || []);

  /**
   * Liste des repas triés par date
   */
  readonly sortedMeals = $derived.by(() => {
    const event = this.currentEvent;
    if (!event?.meals) return [];

    return [...event.meals].sort((a, b) => a.date.localeCompare(b.date));
  });

  /**
   * Liste des dates uniques des repas
   */
  readonly uniqueDates = $derived.by(() => {
    const event = this.currentEvent;
    if (!event?.meals) return [];

    const dates = new Set<string>();
    event.meals.forEach((meal) => {
      if (meal.date) {
        dates.add(meal.date);
      }
    });

    return Array.from(dates).sort();
  });

  /**
   * Date de début de l'événement
   */
  readonly startDate = $derived.by(() => {
    const dates = this.uniqueDates;
    return dates.length > 0 ? dates[0] : null;
  });

  /**
   * Date de fin de l'événement
   */
  readonly endDate = $derived.by(() => {
    const dates = this.uniqueDates;
    return dates.length > 0 ? dates[dates.length - 1] : null;
  });

  /**
   * Vérifie si l'événement est terminé
   */
  readonly isEventPast = $derived(
    this.endDate ? new Date(this.endDate).getTime() < Date.now() : false,
  );

  /**
   * Vérifie si l'événement est en cours
   */
  readonly isEventCurrent = $derived.by(() => {
    const now = Date.now();
    const start = this.startDate;
    const end = this.endDate;

    if (!start || !end) return false;

    return new Date(start).getTime() <= now && new Date(end).getTime() >= now;
  });

  /**
   * Vérifie si l'événement est à venir
   */
  readonly isEventFuture = $derived(
    this.startDate ? new Date(this.startDate).getTime() > Date.now() : false,
  );

  // =============================================================================
  // UTILITAIRES
  // =============================================================================

  /**
   * Vérifie si l'événement existe
   */
  readonly exists = $derived(this.currentEvent !== null);

  /**
   * ID de l'événement courant
   */
  get eventId(): string | null {
    return this.#eventId;
  }

  /**
   * Récupère un contributeur par son ID
   */
  getContributorById(contributorId: string): EventContributor | undefined {
    return this.contributors.find((c) => c.id === contributorId);
  }

  /**
   * Vérifie si un utilisateur est contributeur
   */
  isContributor(userId: string): boolean {
    return this.contributors.some((c) => c.id === userId);
  }

  /**
   * Récupère le statut d'un utilisateur contributeur
   */
  getContributorStatus(
    userId: string,
  ): "accepted" | "declined" | "invited" | null {
    const contributor = this.getContributorById(userId);
    return contributor?.status || null;
  }

  /**
   * Vérifie si l'utilisateur peut éditer l'événement
   */
  canEdit(userId: string): boolean {
    if (!this.#eventId) return false;

    // Utiliser la nouvelle méthode de EventsStore qui permet de vérifier pour un utilisateur spécifique
    return eventsStore.canUserEditEvent(this.#eventId, userId);
  }

  /**
   * Obtenir un résumé de l'événement
   */
  readonly summary = $derived({
    eventId: this.#eventId,
    name: this.eventName,
    status: this.eventStatus,
    mealsCount: this.mealsCount,
    totalGuests: this.totalGuests,
    totalRecipes: this.totalRecipes,
    totalIngredients: this.totalIngredients,
    contributorsCount: this.contributorsStats.total,

    acceptedCount: this.contributorsStats.accepted,
    declinedCount: this.contributorsStats.declined,
    pendingCount: this.contributorsStats.pending,
    teamsCount: this.teams.length,
    dates: this.uniqueDates,
    isPast: this.isEventPast,
    isCurrent: this.isEventCurrent,
    isFuture: this.isEventFuture,
  });
}

// Instance par défaut qui peut être partagée entre composants
export const eventStatsStore = new EventStatsStore();

/**
 * Helper pour créer une nouvelle instance de EventStatsStore pour un événement spécifique
 */
export function createEventStats(eventId: string): EventStatsStore {
  return new EventStatsStore(eventId);
}
