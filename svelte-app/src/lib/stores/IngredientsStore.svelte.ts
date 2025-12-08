/**
 * IngredientsStore - Store de gestion des ingrédients avec Svelte 5
 *
 * Architecture:
 * 1. Chargement depuis data.json (Hugo statique)
 * 2. Cache IndexedDB pour performance
 * 3. Réconciliation avec Appwrite (drafts) - TODO Phase 4
 *
 * Responsabilités:
 * - Charger et cacher les ingrédients depuis /api/data.json
 * - Fournir une API de recherche/filtrage
 * - Gérer le cleanup des drafts Appwrite (quand buildés par Hugo)
 *
 * @usage
 * await ingredientsStore.initialize();
 * const ingredient = ingredientsStore.getIngredientByUuid('xo0ibs');
 * const results = ingredientsStore.searchIngredients('abricot');
 */

import { SvelteMap } from "svelte/reactivity";
import type { Ingredient } from "../types/recipes.types";
import {
  createIngredientsIDBCache,
  type IngredientsIDBCache,
} from "../services/ingredients-idb-cache";

// =============================================================================
// CONFIGURATION
// =============================================================================

const DATA_JSON_URL = "/api/data.json";

// =============================================================================
// STORE SINGLETON
// =============================================================================

class IngredientsStore {
  // État réactif
  #ingredients = new SvelteMap<string, Ingredient>();
  #loading = $state(false);
  #error = $state<string | null>(null);
  #lastSync = $state<string | null>(null);
  #isInitialized = $state(false);

  // Cache IndexedDB
  #cache: IngredientsIDBCache | null = null;

  // Propriétés dérivées réactives
  #ingredientNames = $derived.by(() =>
    Array.from(this.#ingredients.values())
      .map((ing) => ing.n)
      .sort(),
  );

  // Getters publics
  get loading() {
    return this.#loading;
  }

  get error() {
    return this.#error;
  }

  get lastSync() {
    return this.#lastSync;
  }

  get isInitialized() {
    return this.#isInitialized;
  }

  /**
   * Liste réactive des ingrédients
   */
  get ingredients() {
    return Array.from(this.#ingredients.values());
  }

  /**
   * Nombre d'ingrédients
   */
  get count() {
    return this.#ingredients.size;
  }

  /**
   * Liste réactive des noms d'ingrédients triés alphabetiquement
   */
  get ingredientNames() {
    return this.#ingredientNames;
  }

  // =============================================================================
  // INITIALISATION
  // =============================================================================

  /**
   * Initialise le store
   * 1. Ouvre le cache IndexedDB
   * 2. Charge depuis le cache si disponible
   * 3. Charge depuis data.json et met à jour le cache
   */
  async initialize(): Promise<void> {
    if (this.#isInitialized) {
      console.log("[IngredientsStore] Déjà initialisé");
      return;
    }

    console.log("[IngredientsStore] Initialisation...");
    this.#loading = true;
    this.#error = null;

    try {
      // 1. Ouvrir le cache IndexedDB
      this.#cache = await createIngredientsIDBCache();

      // 2. Charger depuis le cache
      const cachedIngredients = await this.#cache.loadIngredients();
      const cachedMetadata = await this.#cache.loadMetadata();

      if (cachedIngredients.size > 0) {
        console.log(
          `[IngredientsStore] ${cachedIngredients.size} ingrédients chargés depuis le cache`,
        );
        this.#ingredients = new SvelteMap(cachedIngredients);
        this.#lastSync = cachedMetadata.lastSync;
      }

      // 3. Charger depuis data.json
      await this.#loadFromDataJson();

      this.#isInitialized = true;
      console.log(
        `[IngredientsStore] Initialisation complétée: ${this.#ingredients.size} ingrédients`,
      );
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Erreur lors de l'initialisation";
      this.#error = message;
      console.error("[IngredientsStore]", message, err);
      throw err;
    } finally {
      this.#loading = false;
    }
  }

  /**
   * Charge les ingrédients depuis /api/data.json
   */
  async #loadFromDataJson(): Promise<void> {
    try {
      console.log("[IngredientsStore] Chargement depuis data.json...");

      const response = await fetch(DATA_JSON_URL);
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const data = await response.json();
      const ingredients = data.ingredients as Ingredient[];

      if (!Array.isArray(ingredients)) {
        throw new Error(
          "Format de données invalide: ingredients n'est pas un tableau",
        );
      }

      // Calculer un hash simple du contenu pour détecter les changements
      const contentHash = await this.#calculateHash(
        JSON.stringify(ingredients),
      );

      // Vérifier si le contenu a changé
      const cachedMetadata = await this.#cache!.loadMetadata();
      if (cachedMetadata.dataJsonHash === contentHash) {
        console.log(
          "[IngredientsStore] data.json inchangé, utilisation du cache",
        );
        return;
      }

      // Mettre à jour les ingrédients
      const ingredientsMap = new Map<string, Ingredient>();
      ingredients.forEach((ing) => {
        // Enrichir avec un texte de recherche
        const enriched: Ingredient = {
          ...ing,
        };
        ingredientsMap.set(ing.u, enriched);
      });

      this.#ingredients = new SvelteMap(ingredientsMap);
      this.#lastSync = new Date().toISOString();

      // Sauvegarder dans le cache
      if (this.#cache) {
        await this.#cache.saveIngredients(ingredientsMap);
        await this.#cache.saveMetadata({
          lastSync: this.#lastSync,
          dataJsonHash: contentHash,
          ingredientsCount: ingredientsMap.size,
        });
      }

      console.log(
        `[IngredientsStore] ${ingredientsMap.size} ingrédients chargés depuis data.json`,
      );
    } catch (err) {
      console.error(
        "[IngredientsStore] Erreur lors du chargement data.json:",
        err,
      );
      throw err;
    }
  }

  /**
   * Calcule un hash simple du contenu (pour détecter les changements)
   */
  async #calculateHash(content: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(content);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  }

  // =============================================================================
  // API PUBLIQUE - LECTURE
  // =============================================================================

  /**
   * Récupère un ingrédient par son UUID
   */
  getIngredientByUuid(uuid: string): Ingredient | null {
    return this.#ingredients.get(uuid) || null;
  }

  /**
   * Recherche des ingrédients par nom (insensible à la casse)
   */
  searchIngredients(query: string): Ingredient[] {
    if (!query.trim()) {
      return this.ingredients;
    }

    const lowerQuery = query.toLowerCase();
    return this.ingredients.filter((ing) =>
      ing.n.toLowerCase().includes(lowerQuery),
    );
  }

  /**
   * Filtre les ingrédients par type
   */
  getIngredientsByType(type: string): Ingredient[] {
    return this.ingredients.filter((ing) => ing.t === type);
  }

  /**
   * Récupère tous les types d'ingrédients disponibles
   */
  get availableTypes(): string[] {
    const types = new Set<string>();
    this.ingredients.forEach((ing) => types.add(ing.t));
    return Array.from(types).sort();
  }

  /**
   * Filtre les ingrédients par allergène
   */
  getIngredientsByAllergen(allergen: string): Ingredient[] {
    return this.ingredients.filter((ing) => ing.a && ing.a.includes(allergen));
  }

  /**
   * Récupère tous les allergènes disponibles
   */
  get availableAllergens(): string[] {
    const allergens = new Set<string>();
    this.ingredients.forEach((ing) => {
      if (ing.a) {
        ing.a.forEach((a) => allergens.add(a));
      }
    });
    return Array.from(allergens).sort();
  }

  // =============================================================================
  // API PUBLIQUE - ÉCRITURE (TODO Phase 4 - Appwrite)
  // =============================================================================

  /**
   * Crée un nouvel ingrédient (TODO: via Appwrite + GitHub)
   */
  async createIngredient(data: Omit<Ingredient, "u">): Promise<Ingredient> {
    throw new Error("createIngredient: Non implémenté - Phase 4");
  }

  /**
   * Met à jour un ingrédient existant (TODO: via Appwrite)
   */
  async updateIngredient(
    uuid: string,
    data: Partial<Ingredient>,
  ): Promise<Ingredient> {
    throw new Error("updateIngredient: Non implémenté - Phase 4");
  }

  /**
   * Supprime un ingrédient (TODO: via Appwrite)
   */
  async deleteIngredient(uuid: string): Promise<void> {
    throw new Error("deleteIngredient: Non implémenté - Phase 4");
  }

  // =============================================================================
  // UTILITAIRES
  // =============================================================================

  /**
   * Force le rechargement depuis data.json
   */
  async forceReload(): Promise<void> {
    console.log("[IngredientsStore] Rechargement forcé...");
    this.#loading = true;
    this.#error = null;

    try {
      await this.#loadFromDataJson();
      console.log("[IngredientsStore] Rechargement complété");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Erreur lors du rechargement";
      this.#error = message;
      console.error("[IngredientsStore]", message, err);
      throw err;
    } finally {
      this.#loading = false;
    }
  }

  /**
   * Vide le cache et réinitialise
   */
  async clearCache(): Promise<void> {
    if (this.#cache) {
      await this.#cache.clear();
      console.log("[IngredientsStore] Cache vidé");
    }
    this.#ingredients.clear();
    this.#lastSync = null;
    this.#isInitialized = false;
  }

  /**
   * Nettoie les ressources
   */
  destroy(): void {
    if (this.#cache) {
      this.#cache.close();
      this.#cache = null;
    }
    this.#ingredients.clear();
    this.#isInitialized = false;
    console.log("[IngredientsStore] Ressources nettoyées");
  }
}

// =============================================================================
// EXPORT SINGLETON
// =============================================================================

export const ingredientsStore = new IngredientsStore();
