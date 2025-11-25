/**
 * RecipesStore - Store de gestion des recettes avec Svelte 5
 *
 * Architecture:
 * 1. Chargement de l'index léger depuis data.json (au démarrage)
 * 2. Lazy loading des détails depuis /recettes/.../recipe.json (à la demande)
 * 3. Cache IndexedDB pour performance
 * 4. Réconciliation avec Appwrite (drafts) - TODO Phase 4
 * 
 * Responsabilités:
 * - Charger et cacher l'index des recettes
 * - Lazy-load les détails de recettes à la demande
 * - Fournir une API de recherche/filtrage
 * - Gérer le cleanup des drafts Appwrite
 *
 * @usage
 * await recipesStore.initialize();
 * const recipe = await recipesStore.getRecipeByUuid('5f3ada9bde90');
 * const results = recipesStore.searchRecipes('houmous');
 */

import { SvelteMap } from "svelte/reactivity";
import type { RecipeIndexEntry, RecipeData } from "../types/recipes.types";
import {
  createRecipesIDBCache,
  type RecipesIDBCache,
} from "../services/recipes-idb-cache";
import { parseRecipeData } from "../utils/recipeUtils";

// =============================================================================
// CONFIGURATION
// =============================================================================

const DATA_JSON_URL = "/api/data.json";

// =============================================================================
// STORE SINGLETON
// =============================================================================

class RecipesStore {
  // État réactif - Index
  #recipesIndex = new SvelteMap<string, RecipeIndexEntry>();
  
  // État réactif - Détails (lazy-loaded)
  #recipesDetails = new SvelteMap<string, RecipeData>();
  
  // État UI
  #loading = $state(false);
  #error = $state<string | null>(null);
  #lastSync = $state<string | null>(null);
  #isInitialized = $state(false);

  // Cache IndexedDB
  #cache: RecipesIDBCache | null = null;

  // Tracking des chargements en cours (pour éviter les doublons)
  #loadingDetails = new Set<string>();

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
   * Liste réactive de l'index des recettes
   */
  get recipesIndex() {
    return Array.from(this.#recipesIndex.values());
  }

  /**
   * Nombre de recettes dans l'index
   */
  get count() {
    return this.#recipesIndex.size;
  }

  /**
   * Nombre de détails chargés en mémoire
   */
  get detailsLoadedCount() {
    return this.#recipesDetails.size;
  }

  // =============================================================================
  // INITIALISATION
  // =============================================================================

  /**
   * Initialise le store
   * 1. Ouvre le cache IndexedDB
   * 2. Charge l'index depuis le cache si disponible
   * 3. Charge l'index depuis data.json et met à jour le cache
   */
  async initialize(): Promise<void> {
    if (this.#isInitialized) {
      console.log("[RecipesStore] Déjà initialisé");
      return;
    }

    console.log("[RecipesStore] Initialisation...");
    this.#loading = true;
    this.#error = null;

    try {
      // 1. Ouvrir le cache IndexedDB
      this.#cache = await createRecipesIDBCache();

      // 2. Charger l'index depuis le cache
      const cachedIndex = await this.#cache.loadRecipesIndex();
      const cachedMetadata = await this.#cache.loadMetadata();

      if (cachedIndex.size > 0) {
        console.log(
          `[RecipesStore] ${cachedIndex.size} recettes (index) chargées depuis le cache`,
        );
        this.#recipesIndex = new SvelteMap(cachedIndex);
        this.#lastSync = cachedMetadata.lastSync;
      }

      // 3. Charger l'index depuis data.json
      await this.#loadIndexFromDataJson();

      this.#isInitialized = true;
      console.log(
        `[RecipesStore] Initialisation complétée: ${this.#recipesIndex.size} recettes`,
      );
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Erreur lors de l'initialisation";
      this.#error = message;
      console.error("[RecipesStore]", message, err);
      throw err;
    } finally {
      this.#loading = false;
    }
  }

  /**
   * Charge l'index des recettes depuis /api/data.json
   */
  async #loadIndexFromDataJson(): Promise<void> {
    try {
      console.log("[RecipesStore] Chargement de l'index depuis data.json...");

      const response = await fetch(DATA_JSON_URL);
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const data = await response.json();
      const recipes = data.recipes as RecipeIndexEntry[];

      if (!Array.isArray(recipes)) {
        throw new Error("Format de données invalide: recipes n'est pas un tableau");
      }

      // Calculer un hash de l'index
      const indexHash = await this.#calculateHash(JSON.stringify(recipes));

      // Vérifier si l'index a changé
      const cachedMetadata = await this.#cache!.loadMetadata();
      if (cachedMetadata.indexHash === indexHash) {
        console.log("[RecipesStore] Index inchangé, utilisation du cache");
        return;
      }

      // Mettre à jour l'index
      const indexMap = new Map<string, RecipeIndexEntry>();
      recipes.forEach((recipe) => {
        indexMap.set(recipe.u, recipe);
      });

      this.#recipesIndex = new SvelteMap(indexMap);
      this.#lastSync = new Date().toISOString();

      // Sauvegarder dans le cache
      if (this.#cache) {
        await this.#cache.saveRecipesIndex(indexMap);
        await this.#cache.saveMetadata({
          lastSync: this.#lastSync,
          indexHash,
          recipesCount: indexMap.size,
        });
      }

      console.log(
        `[RecipesStore] ${indexMap.size} recettes (index) chargées depuis data.json`,
      );
    } catch (err) {
      console.error("[RecipesStore] Erreur lors du chargement de l'index:", err);
      throw err;
    }
  }

  /**
   * Calcule un hash simple du contenu
   */
  async #calculateHash(content: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(content);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  }

  // =============================================================================
  // API PUBLIQUE - LECTURE INDEX
  // =============================================================================

  /**
   * Récupère une entrée d'index par UUID
   */
  getRecipeIndexByUuid(uuid: string): RecipeIndexEntry | null {
    return this.#recipesIndex.get(uuid) || null;
  }

  /**
   * Recherche des recettes par nom (insensible à la casse)
   */
  searchRecipes(query: string): RecipeIndexEntry[] {
    if (!query.trim()) {
      return this.recipesIndex;
    }

    const lowerQuery = query.toLowerCase();
    return this.recipesIndex.filter((recipe) =>
      recipe.n.toLowerCase().includes(lowerQuery),
    );
  }

  /**
   * Filtre les recettes par type
   */
  getRecipesByType(type: number): RecipeIndexEntry[] {
    return this.recipesIndex.filter((recipe) => recipe.t === type);
  }

  /**
   * Récupère tous les types de recettes disponibles
   */
  get availableTypes(): number[] {
    const types = new Set<number>();
    this.recipesIndex.forEach((recipe) => types.add(recipe.t));
    return Array.from(types).sort();
  }

  // =============================================================================
  // API PUBLIQUE - LAZY LOADING DÉTAILS
  // =============================================================================

  /**
   * Récupère les détails complets d'une recette (avec lazy loading)
   * 
   * 1. Vérifie si déjà en mémoire
   * 2. Vérifie le cache IndexedDB
   * 3. Fetch depuis /recettes/.../recipe.json
   * 4. Parse et met en cache
   * 
   * @param uuid - UUID de la recette
   * @returns Détails de la recette ou null si non trouvée
   */
  async getRecipeByUuid(uuid: string): Promise<RecipeData | null> {
    // 1. Déjà en mémoire ?
    const cached = this.#recipesDetails.get(uuid);
    if (cached) {
      console.log(`[RecipesStore] Détails de ${uuid} déjà en mémoire`);
      return cached;
    }

    // Éviter les chargements parallèles du même UUID
    if (this.#loadingDetails.has(uuid)) {
      console.log(`[RecipesStore] Chargement de ${uuid} déjà en cours, attente...`);
      // Attendre que le chargement se termine
      while (this.#loadingDetails.has(uuid)) {
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
      return this.#recipesDetails.get(uuid) || null;
    }

    this.#loadingDetails.add(uuid);

    try {
      // 2. Vérifier le cache IndexedDB
      if (this.#cache) {
        const cachedDetail = await this.#cache.loadRecipeDetail(uuid);
        if (cachedDetail) {
          this.#recipesDetails.set(uuid, cachedDetail);
          return cachedDetail;
        }
      }

      // 3. Récupérer le path depuis l'index
      const indexEntry = this.#recipesIndex.get(uuid);
      if (!indexEntry) {
        console.warn(`[RecipesStore] Recette ${uuid} non trouvée dans l'index`);
        return null;
      }

      // 4. Fetch depuis le fichier JSON
      console.log(`[RecipesStore] Chargement des détails de ${uuid} depuis ${indexEntry.p}...`);
      const response = await fetch(indexEntry.p);
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const rawData = await response.json();
      const recipeData = parseRecipeData(rawData);

      // 5. Mettre en cache
      this.#recipesDetails.set(uuid, recipeData);
      if (this.#cache) {
        await this.#cache.saveRecipeDetail(recipeData);
      }

      console.log(`[RecipesStore] Détails de ${uuid} chargés et mis en cache`);
      return recipeData;
    } catch (err) {
      console.error(`[RecipesStore] Erreur lors du chargement de ${uuid}:`, err);
      return null;
    } finally {
      this.#loadingDetails.delete(uuid);
    }
  }

  /**
   * Précharge les détails de plusieurs recettes en parallèle
   * 
   * @param uuids - Liste des UUIDs à précharger
   * @returns Promesse résolue quand tous les chargements sont terminés
   */
  async preloadRecipes(uuids: string[]): Promise<void> {
    console.log(`[RecipesStore] Préchargement de ${uuids.length} recettes...`);
    const promises = uuids.map((uuid) => this.getRecipeByUuid(uuid));
    await Promise.all(promises);
    console.log(`[RecipesStore] Préchargement terminé`);
  }

  // =============================================================================
  // API PUBLIQUE - ÉCRITURE (TODO Phase 4 - Appwrite)
  // =============================================================================

  /**
   * Crée une nouvelle recette (TODO: via Appwrite + GitHub)
   */
  async createRecipe(data: Omit<RecipeData, "uuid">): Promise<RecipeData> {
    throw new Error("createRecipe: Non implémenté - Phase 4");
  }

  /**
   * Met à jour une recette existante (TODO: via Appwrite)
   */
  async updateRecipe(
    uuid: string,
    data: Partial<RecipeData>,
  ): Promise<RecipeData> {
    throw new Error("updateRecipe: Non implémenté - Phase 4");
  }

  /**
   * Supprime une recette (TODO: via Appwrite)
   */
  async deleteRecipe(uuid: string): Promise<void> {
    throw new Error("deleteRecipe: Non implémenté - Phase 4");
  }

  // =============================================================================
  // UTILITAIRES
  // =============================================================================

  /**
   * Force le rechargement de l'index depuis data.json
   */
  async forceReloadIndex(): Promise<void> {
    console.log("[RecipesStore] Rechargement forcé de l'index...");
    this.#loading = true;
    this.#error = null;

    try {
      await this.#loadIndexFromDataJson();
      console.log("[RecipesStore] Rechargement de l'index complété");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Erreur lors du rechargement";
      this.#error = message;
      console.error("[RecipesStore]", message, err);
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
      console.log("[RecipesStore] Cache vidé");
    }
    this.#recipesIndex.clear();
    this.#recipesDetails.clear();
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
    this.#recipesIndex.clear();
    this.#recipesDetails.clear();
    this.#loadingDetails.clear();
    this.#isInitialized = false;
    console.log("[RecipesStore] Ressources nettoyées");
  }
}

// =============================================================================
// EXPORT SINGLETON
// =============================================================================

export const recipesStore = new RecipesStore();
