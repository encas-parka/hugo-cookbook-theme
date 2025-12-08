/**
 * RecipesStore - Store de gestion des recettes avec Svelte 5
 *
 * Architecture:
 * 1. Chargement de l'index léger depuis data.json (recettes published)
 * 2. Chargement des recettes non-published depuis Appwrite
 * 3. Fusion dans un index unifié avec flag isPublished
 * 4. Lazy loading des détails depuis /recettes/.../recipe.json ou Appwrite
 * 5. Cache IndexedDB pour performance
 * 6. Cleanup automatique (marquer isPublished: true après build Hugo)
 *
 * Responsabilités:
 * - Charger et fusionner recettes Hugo + Appwrite
 * - Lazy-load les détails de recettes à la demande
 * - Fournir une API de recherche/filtrage
 * - Gérer le CRUD via Appwrite
 * - Cleanup des recettes publiées
 * - Realtime pour les recettes Appwrite
 *
 * @usage
 * await recipesStore.initialize();
 * const recipe = await recipesStore.getRecipeByUuid('5f3ada9bde90');
 * const results = recipesStore.searchRecipes('houmous');
 */

import { SvelteMap } from "svelte/reactivity";
import type { RecipeIndexEntry, RecipeData } from "../types/recipes.types";
import type { Recettes } from "../types/appwrite.d";
import type {
  CreateRecipeData,
  UpdateRecipeData,
} from "../types/recipes.types";
import {
  createRecipesIDBCache,
  type RecipesIDBCache,
} from "../services/recipes-idb-cache";
import { parseRecipeData } from "../utils/recipeUtils";
import {
  listAllNonPublishedRecipes,
  listNonPublishedRecipes,
  getRecipe as getAppwriteRecipe,
  createRecipe as createAppwriteRecipe,
  updateRecipe as updateAppwriteRecipe,
  deleteRecipe as deleteAppwriteRecipe,
  duplicateRecipe as duplicateAppwriteRecipe,
  markAsPublished,
  subscribeToRecipes,
} from "../services/appwrite-recipes";
import { globalState } from "./GlobalState.svelte";

// =============================================================================
// CONFIGURATION
// =============================================================================

// URL du fichier data.json (proxié par Vite en mode dev vers Hugo)
const DATA_JSON_URL = "/api/data.json";

// =============================================================================
// STORE SINGLETON
// =============================================================================

class RecipesStore {
  // État réactif - Index (Hugo + Appwrite fusionné)
  #recipesIndex = $state(new SvelteMap<string, RecipeIndexEntry>());

  // État réactif - Détails (lazy-loaded)
  #recipesDetails = $state(new SvelteMap<string, RecipeData>());

  // État UI
  #loading = $state(false);
  #error = $state<string | null>(null);
  #lastSync = $state<string | null>(null);
  #isInitialized = $state(false);

  // Cache IndexedDB
  #cache: RecipesIDBCache | null = null;

  // Tracking des chargements en cours (pour éviter les doublons)
  #loadingDetails = new Set<string>();

  // Promise d'initialisation en cours pour déduplication
  #initPromise: Promise<void> | null = null;

  // Appwrite
  #realtimeUnsubscribe: (() => void) | null = null;

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

  /**
   * Retourne toutes les recettes de l'index (pour la page de liste)
   */
  getAllRecipes(): RecipeIndexEntry[] {
    return Array.from(this.#recipesIndex.values());
  }

  // =============================================================================
  // INITIALISATION
  // =============================================================================

  /**
   * Initialise le store
   * 1. Ouvre le cache IndexedDB
   * 2. Charge l'index depuis le cache si disponible
   * 3. Charge l'index depuis data.json (recettes published)
   * 4. Cleanup : marque les recettes Appwrite comme published si présentes dans Hugo
   * 5. Charge les recettes non-published depuis Appwrite
   * 6. Active le realtime pour les recettes Appwrite
   */
  async initialize(): Promise<void> {
    // 1. Déjà initialisé ?
    if (this.#isInitialized) {
      console.log("[RecipesStore] Déjà initialisé");
      return;
    }

    // 2. Initialisation déjà en cours ?
    if (this.#initPromise) {
      console.log("[RecipesStore] Initialisation déjà en cours, attente...");
      return this.#initPromise;
    }

    // 3. Nouvelle initialisation
    console.log("[RecipesStore] Initialisation...");
    this.#loading = true;
    this.#error = null;

    // Créer la promesse d'initialisation
    this.#initPromise = (async () => {
      try {
        // A. Ouvrir le cache IndexedDB
        this.#cache = await createRecipesIDBCache();

        // B. Charger l'index depuis le cache
        const cachedIndex = await this.#cache.loadRecipesIndex();
        const cachedMetadata = await this.#cache.loadMetadata();

        if (cachedIndex.size > 0) {
          console.log(
            `[RecipesStore] ${cachedIndex.size} recettes (index) chargées depuis le cache`,
          );
          this.#recipesIndex = new SvelteMap(cachedIndex);
          this.#lastSync = cachedMetadata.lastSync;
        }

        // C. Charger l'index depuis data.json (recettes published)
        // Cette étape est cruciale - si elle échoue, on initialise avec le cache existant
        try {
          await this.#loadIndexFromDataJson();
        } catch (err) {
          console.error(
            "[RecipesStore] Erreur lors du chargement depuis data.json:",
            err,
          );
          // Si on a un cache et que data.json échoue, on continue avec le cache
          if (cachedIndex.size === 0) {
            throw new Error(
              "Impossible de charger les recettes: aucun cache disponible et data.json inaccessible",
            );
          }
          console.log("[RecipesStore] Continuation avec les données du cache");
        }

        // D. Cleanup : marquer les recettes Appwrite comme published
        if (globalState.userId) {
          try {
            await this.#cleanupPublishedRecipes();
          } catch (err) {
            console.warn(
              "[RecipesStore] Erreur lors du cleanup des recettes publiées:",
              err,
            );
            // Ne pas bloquer l'initialisation pour cette étape
          }
        }

        // E. Charger les recettes non-published depuis Appwrite
        if (globalState.userId) {
          try {
            await this.#loadAppwriteRecipes();
          } catch (err) {
            console.warn(
              "[RecipesStore] Erreur lors du chargement des recettes Appwrite:",
              err,
            );
            // Ne pas bloquer l'initialisation pour cette étape
          }
        }

        // F. Activer le realtime
        if (globalState.userId) {
          try {
            this.#setupRealtime();
          } catch (err) {
            console.warn(
              "[RecipesStore] Erreur lors de l'activation du realtime:",
              err,
            );
            // Ne pas bloquer l'initialisation pour cette étape
          }
        }

        // G. Vérification finale: s'assurer qu'on a bien des données
        if (this.#recipesIndex.size === 0) {
          const message = "Aucune recette disponible après initialisation";
          this.#error = message;
          console.warn("[RecipesStore]", message);
        }

        // Tout s'est bien passé (ou erreurs non-bloquantes)
        this.#isInitialized = true;
        console.log(
          `[RecipesStore] Initialisation complétée: ${this.#recipesIndex.size} recettes (${this.#countPublished()} published, ${this.#countNonPublished()} non-published)`,
        );
      } catch (err) {
        const message =
          err instanceof Error
            ? err.message
            : "Erreur lors de l'initialisation";
        this.#error = message;
        console.error("[RecipesStore] ECHEC Initialisation:", message, err);
        throw err;
      } finally {
        this.#loading = false;
        this.#initPromise = null; // Nettoyer la promesse pour permettre une nouvelle tentative si nécessaire
      }
    })();

    return this.#initPromise;
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
        throw new Error(
          "Format de données invalide: recipes n'est pas un tableau",
        );
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
      console.error(
        "[RecipesStore] Erreur lors du chargement de l'index:",
        err,
      );
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

  /**
   * Cleanup : marque les recettes Appwrite comme published si présentes dans Hugo
   */
  async #cleanupPublishedRecipes(): Promise<void> {
    try {
      console.log("[RecipesStore] Cleanup des recettes publiées...");

      // Récupérer TOUTES les recettes non-published (accès global)
      const appwriteRecipes = await listAllNonPublishedRecipes();

      let cleanedCount = 0;
      for (const appwriteRecipe of appwriteRecipes) {
        // Vérifier si la recette existe dans l'index Hugo
        if (this.#recipesIndex.has(appwriteRecipe.$id)) {
          // Marquer comme published dans Appwrite
          await markAsPublished(appwriteRecipe.$id);
          cleanedCount++;
        }
      }

      if (cleanedCount > 0) {
        console.log(
          `[RecipesStore] ${cleanedCount} recettes marquées comme published`,
        );
      }
    } catch (err) {
      console.error("[RecipesStore] Erreur lors du cleanup:", err);
      // Ne pas bloquer l'initialisation
    }
  }

  /**
   * Charge les recettes non-published depuis Appwrite
   * Accès global en lecture pour toutes les recettes (duplication, ajout à événement)
   */
  async #loadAppwriteRecipes(): Promise<void> {
    try {
      console.log("[RecipesStore] Chargement des recettes Appwrite...");

      // Charger TOUTES les recettes non-published (accès global en lecture)
      const appwriteRecipes = await listAllNonPublishedRecipes();

      // Ajouter à l'index avec flag isPublished: false
      appwriteRecipes.forEach((recipe) => {
        this.#recipesIndex.set(recipe.$id, {
          u: recipe.$id,
          n: recipe.title,
          t: recipe.typeR,
          a: recipe.createdBy, // Auteur de la recette
          p: null, // Pas de path JSON pour les recettes Appwrite
          plates: recipe.plate, // Nombre de couverts par défaut de la recette
          isPublished: false,
        });
      });

      console.log(
        `[RecipesStore] ${appwriteRecipes.length} recettes Appwrite chargées`,
      );
    } catch (err) {
      console.error("[RecipesStore] Erreur lors du chargement Appwrite:", err);
      // Ne pas bloquer l'initialisation
    }
  }

  /**
   * Configure le realtime pour les recettes Appwrite
   */
  #setupRealtime(): void {
    try {
      this.#realtimeUnsubscribe = subscribeToRecipes(
        globalState.userId!,
        globalState.userTeams,
        (recipe, eventType) => {
          console.log(
            `[RecipesStore] Realtime: ${eventType} pour ${recipe.$id}`,
          );

          if (eventType === "create" || eventType === "update") {
            // Mettre à jour l'index
            this.#recipesIndex.set(recipe.$id, {
              u: recipe.$id,
              n: recipe.title,
              t: recipe.typeR,
              a: recipe.createdBy, // Auteur de la recette
              p: null,
              plates: recipe.plate, // Nombre de couverts par défaut de la recette
              isPublished: recipe.isPublished,
            });

            // Invalider le cache des détails si déjà chargé
            if (this.#recipesDetails.has(recipe.$id)) {
              this.#recipesDetails.delete(recipe.$id);
            }
          } else if (eventType === "delete") {
            // Supprimer de l'index et du cache
            this.#recipesIndex.delete(recipe.$id);
            this.#recipesDetails.delete(recipe.$id);
          }
        },
      );

      console.log("[RecipesStore] Realtime activé");
    } catch (err) {
      console.error(
        "[RecipesStore] Erreur lors de la configuration du realtime:",
        err,
      );
    }
  }

  /**
   * Compte les recettes published
   */
  #countPublished(): number {
    return this.recipesIndex.filter((r) => r.isPublished !== false).length;
  }

  /**
   * Compte les recettes non-published
   */
  #countNonPublished(): number {
    return this.recipesIndex.filter((r) => r.isPublished === false).length;
  }

  /**
   * Convertit une recette Appwrite vers RecipeData
   */
  #convertAppwriteToRecipeData(appwriteRecipe: Recettes): RecipeData {
    return {
      uuid: appwriteRecipe.$id,
      title: appwriteRecipe.title,
      plate: appwriteRecipe.plate,
      materiel: appwriteRecipe.materiel || [],
      ingredients: JSON.parse(appwriteRecipe.ingredients),
      preparation: appwriteRecipe.preparation,
      prepAlt: (appwriteRecipe.prepAlt || []).map(alt => ({ recetteAlt: alt })),
    };
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
   * Récupère les données complètes d'une recette (index + détails fusionnés)
   * Utile pour l'affichage complet d'une recette avec toutes ses métadonnées
   */
  async getCompleteRecipe(
    uuid: string,
  ): Promise<(RecipeIndexEntry & { details?: RecipeData }) | null> {
    // Récupérer l'entrée d'index
    const indexEntry = this.#recipesIndex.get(uuid);
    if (!indexEntry) {
      return null;
    }

    // Récupérer les détails si disponibles
    try {
      const details = await this.getRecipeByUuid(uuid);
      return { ...indexEntry, details: details || undefined };
    } catch (error) {
      console.warn(
        `[RecipesStore] Impossible de charger les détails pour ${uuid}:`,
        error,
      );
      return indexEntry;
    }
  }

  /**
   * Recherche des recettes par texte (nom, catégories)
   */
  searchRecipes(query: string): RecipeIndexEntry[] {
    if (!query.trim()) {
      return this.recipesIndex;
    }

    const lowerQuery = query.toLowerCase();
    return this.recipesIndex.filter((recipe) => {
      // Recherche dans le nom
      const nameMatch = recipe.n.toLowerCase().includes(lowerQuery);

      // Recherche dans les catégories
      const categoryMatch =
        recipe.c?.some((cat) => cat.toLowerCase().includes(lowerQuery)) ||
        false;

      return nameMatch || categoryMatch;
    });
  }

  /**
   * Filtre les recettes par type
   */
  getRecipesByType(type: string): RecipeIndexEntry[] {
    return this.recipesIndex.filter((recipe) => recipe.t === type);
  }

  /**
   * Filtre les recettes par régime alimentaire
   */
  getRecipesByRegime(regime: string): RecipeIndexEntry[] {
    return this.recipesIndex.filter(
      (recipe) => recipe.r?.includes(regime) || false,
    );
  }

  /**
   * Filtre les recettes qui nécessitent une cuisson
   */
  getRecipesWithCooking(): RecipeIndexEntry[] {
    return this.recipesIndex.filter((recipe) => recipe.cu === true);
  }

  /**
   * Filtre les recettes sans cuisson
   */
  getRecipesWithoutCooking(): RecipeIndexEntry[] {
    return this.recipesIndex.filter((recipe) => recipe.cu === false);
  }

  /**
   * Filtre les recettes par température (Froid/Chaud)
   */
  getRecipesByTemperature(temperature: string): RecipeIndexEntry[] {
    return this.recipesIndex.filter((recipe) => recipe.te === temperature);
  }

  /**
   * Filtre les recettes publiées uniquement
   */
  getPublishedRecipes(): RecipeIndexEntry[] {
    return this.recipesIndex.filter((recipe) => recipe.isPublished === true);
  }

  /**
   * Filtre les brouillons uniquement
   */
  getDraftRecipes(): RecipeIndexEntry[] {
    return this.recipesIndex.filter((recipe) => recipe.d === true);
  }

  /**
   * Filtre multi-critères
   */
  filterRecipes(filters: {
    type?: string;
    regimes?: string[];
    cuisson?: boolean;
    temperature?: string;
    draft?: boolean;
    query?: string;
  }): RecipeIndexEntry[] {
    return this.recipesIndex.filter((recipe) => {
      // Filtre par type
      if (filters.type && recipe.t !== filters.type) return false;

      // Filtre par régimes
      if (filters.regimes && filters.regimes.length > 0) {
        const hasRegime = filters.regimes.some((regime) =>
          recipe.r?.includes(regime),
        );
        if (!hasRegime) return false;
      }

      // Filtre par cuisson
      if (filters.cuisson !== undefined && recipe.cu !== filters.cuisson)
        return false;

      // Filtre par température
      if (filters.temperature && recipe.te !== filters.temperature)
        return false;

      // Filtre par statut brouillon
      if (filters.draft !== undefined && recipe.d !== filters.draft)
        return false;

      // Filtre par recherche textuelle
      if (filters.query?.trim()) {
        const lowerQuery = filters.query.toLowerCase();
        const nameMatch = recipe.n.toLowerCase().includes(lowerQuery);
        const categoryMatch =
          recipe.c?.some((cat) => cat.toLowerCase().includes(lowerQuery)) ||
          false;
        if (!nameMatch && !categoryMatch) return false;
      }

      return true;
    });
  }

  /**
   * Récupère tous les types de recettes disponibles
   */
  get availableTypes(): string[] {
    const types = new Set<string>();
    this.recipesIndex.forEach((recipe) => types.add(recipe.t));
    return Array.from(types).sort();
  }

  /**
   * Vérifie si l'utilisateur peut éditer une recette
   * @param uuid - UUID de la recette
   * @returns true si l'utilisateur peut éditer, false sinon
   */
  async canEditRecipe(uuid: string): Promise<boolean> {
    if (!globalState.userId) return false;

    // Recettes Hugo (published) : non éditables
    const indexEntry = this.#recipesIndex.get(uuid);
    if (!indexEntry || indexEntry.isPublished !== false) {
      return false;
    }

    // Recettes Appwrite : vérifier permissions
    try {
      const recipe = await getAppwriteRecipe(uuid);
      if (!recipe) return false;

      return (
        recipe.createdBy === globalState.userId ||
        Boolean(recipe.contributors?.includes(globalState.userId)) ||
        Boolean(
          recipe.teams?.some((teamId) =>
            globalState.userTeams.includes(teamId),
          ),
        )
      );
    } catch (err) {
      console.error(
        `[RecipesStore] Erreur lors de la vérification des permissions pour ${uuid}:`,
        err,
      );
      return false;
    }
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
      console.log(
        `[RecipesStore] Chargement de ${uuid} déjà en cours, attente...`,
      );
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

      // 4. Charger depuis Hugo JSON ou Appwrite
      let recipeData: RecipeData;

      if (indexEntry.p) {
        // 4a. Recette Hugo : fetch depuis le fichier JSON
        console.log(
          `[RecipesStore] Chargement des détails de ${uuid} depuis ${indexEntry.p}...`,
        );
        const response = await fetch(indexEntry.p);
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }

        const rawData = await response.json();
        recipeData = parseRecipeData(rawData);
      } else {
        // 4b. Recette Appwrite : fetch depuis Appwrite
        console.log(
          `[RecipesStore] Chargement des détails de ${uuid} depuis Appwrite...`,
        );
        const appwriteRecipe = await getAppwriteRecipe(uuid);
        if (!appwriteRecipe) {
          console.warn(
            `[RecipesStore] Recette ${uuid} non trouvée dans Appwrite`,
          );
          return null;
        }

        // Convertir Recettes (Appwrite) vers RecipeData
        recipeData = this.#convertAppwriteToRecipeData(appwriteRecipe);
      }

      // 5. Mettre en cache
      this.#recipesDetails.set(uuid, recipeData);
      if (this.#cache) {
        await this.#cache.saveRecipeDetail(recipeData);
      }

      console.log(`[RecipesStore] Détails de ${uuid} chargés et mis en cache`);
      return recipeData;
    } catch (err) {
      console.error(
        `[RecipesStore] Erreur lors du chargement de ${uuid}:`,
        err,
      );
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
   * Crée une nouvelle recette via Appwrite
   */
  async createRecipe(data: Omit<RecipeData, "uuid">): Promise<RecipeData> {
    if (!globalState.userId) {
      throw new Error("Utilisateur non connecté");
    }

    try {
      // Convertir RecipeData vers CreateRecipeData
      const createData: CreateRecipeData = {
        title: data.title,
        plate: data.plate,
        ingredients: JSON.stringify(data.ingredients),
        preparation: data.preparation,
        draft: true,
        type: (data as any).typeR || "plat", // Par défaut entrée
        categories: [],
        regime: [],
        teams: [],
        contributors: [],
      };

      const appwriteRecipe = await createAppwriteRecipe(
        createData,
        globalState.userId,
      );

      // Ajouter à l'index local
      this.#recipesIndex.set(appwriteRecipe.$id, {
        u: appwriteRecipe.$id,
        n: appwriteRecipe.title,
        t: appwriteRecipe.typeR,
        p: null,
        plates: appwriteRecipe.plate, // Nombre de couverts par défaut de la recette
        isPublished: false,
      });

      // Convertir et retourner
      return this.#convertAppwriteToRecipeData(appwriteRecipe);
    } catch (err) {
      console.error("[RecipesStore] Erreur lors de la création:", err);
      throw err;
    }
  }

  /**
   * Met à jour une recette existante via Appwrite
   */
  async updateRecipe(
    uuid: string,
    data: Partial<RecipeData>,
  ): Promise<RecipeData> {
    try {
      // Convertir RecipeData vers UpdateRecipeData
      const updateData: UpdateRecipeData = {};

      if (data.title) updateData.title = data.title;
      if (data.plate) updateData.plate = data.plate;
      if (data.ingredients)
        updateData.ingredients = JSON.stringify(data.ingredients);
      if (data.preparation) updateData.preparation = data.preparation;

      const appwriteRecipe = await updateAppwriteRecipe(uuid, updateData);

      // Mettre à jour l'index local
      this.#recipesIndex.set(appwriteRecipe.$id, {
        u: appwriteRecipe.$id,
        n: appwriteRecipe.title,
        t: appwriteRecipe.typeR,
        p: null,
        plates: appwriteRecipe.plate, // Nombre de couverts par défaut de la recette
        isPublished: appwriteRecipe.isPublished,
      });

      // Invalider le cache des détails
      this.#recipesDetails.delete(uuid);

      // Convertir et retourner
      return this.#convertAppwriteToRecipeData(appwriteRecipe);
    } catch (err) {
      console.error(
        `[RecipesStore] Erreur lors de la mise à jour de ${uuid}:`,
        err,
      );
      throw err;
    }
  }

  /**
   * Supprime une recette via Appwrite
   */
  async deleteRecipe(uuid: string): Promise<void> {
    try {
      await deleteAppwriteRecipe(uuid);

      // Supprimer de l'index et du cache local
      this.#recipesIndex.delete(uuid);
      this.#recipesDetails.delete(uuid);

      console.log(`[RecipesStore] Recette ${uuid} supprimée`);
    } catch (err) {
      console.error(
        `[RecipesStore] Erreur lors de la suppression de ${uuid}:`,
        err,
      );
      throw err;
    }
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
    // Désactiver le realtime
    if (this.#realtimeUnsubscribe) {
      this.#realtimeUnsubscribe();
      this.#realtimeUnsubscribe = null;
    }

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
