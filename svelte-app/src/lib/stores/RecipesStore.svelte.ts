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
 * - Gérer le cache IndexedDB (stratégie, pas l'implémentation)
 * - Cleanup des recettes publiées
 * - Realtime pour les recettes Appwrite
 * - Gérer les verrous d'édition
 *
 * Note: Les opérations CRUD (create/update/delete) sont gérées directement
 * par les composants via appwrite-recipes.ts. Le store reçoit les mises
 * à jour via realtime pour maintenir la cohérence.
 *
 * @usage
 * await recipesStore.initialize();
 * const recipe = await recipesStore.getRecipeByUuid('5f3ada9bde90');
 * const results = recipesStore.searchRecipes('houmous');
 */

import { SvelteMap } from "svelte/reactivity";
import type {
  RecipeIndexEntry,
  RecipeForDisplay,
} from "../types/recipes.types";
import {
  createRecipesIDBCache,
  type RecipesIDBCache,
} from "../services/recipes-idb-cache";
import {
  parseRecipeIndexEntry,
  astucesFromAppwrite,
} from "../utils/recipeUtils";
import { parseRecipeData } from "../utils/recipeUtils";
import { ingredientsFromAppwrite } from "../utils/ingredientUtils";
import {
  listAllNonPublishedRecipes,
  getRecipeAppwrite as getAppwriteRecipe,
  markAsPublished,
  subscribeToRecipes,
  updateRecipeAppwrite,
  listUpdatedRecipes,
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

  // État UI
  #loading = $state(false);
  #error = $state<string | null>(null);
  #lastSync = $state<string | null>(null);
  #isInitialized = $state(false);
  #versionTimestamp = $state<number | null>(null);

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
          await this.#loadIndexFromDataJson(cachedMetadata);
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

        // E. Sync Incrémentiel Appwrite (Recettes modifiées depuis lastSync)
        if (globalState.userId) {
          try {
            await this.#incrementalSync(cachedMetadata);
          } catch (err) {
            console.warn(
              "[RecipesStore] Erreur lors de la sync incrémentielle Appwrite:",
              err,
            );
            // Non-bloquant, on continue avec ce qu'on a
          }
        }

        // F. Fallback: Charger TOUTES les recettes non-published depuis Appwrite
        // (Juste au cas où, pour garantir qu'on a bien les drafts, même anciens)
        if (globalState.userId) {
          try {
            await this.#loadAppwriteRecipes();
          } catch (err) {
            console.warn(
              "[RecipesStore] Erreur lors du chargement des recettes non-publiées:",
              err,
            );
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
   * Charge l'index (`data.json`).
   * Vérifie le timestamp inclus dans `meta` pour savoir si le cache doit être mis à jour.
   */
  async #loadIndexFromDataJson(cachedMetadata: any): Promise<void> {
    try {
      console.log("[RecipesStore] Chargement data.json...");

      // 1. Fetch data.json
      const response = await fetch(DATA_JSON_URL);
      if (!response.ok) throw new Error(`Erreur HTTP: ${response.status}`);
      const data = await response.json();

      // 2. Vérification structure & Timestamp
      if (!Array.isArray(data.recipes)) {
        throw new Error("Format invalide: recipes n'est pas un tableau");
      }

      const remoteTimestamp = data.meta?.timestamp;
      this.#versionTimestamp = remoteTimestamp; // Toujours stocker le dernier timestamp vu

      if (
        remoteTimestamp &&
        cachedMetadata &&
        cachedMetadata.buildTimestamp &&
        cachedMetadata.buildTimestamp >= remoteTimestamp
      ) {
        console.log(
          `[RecipesStore] Cache à jour (Ts: ${cachedMetadata.buildTimestamp} >= ${remoteTimestamp})`,
        );

        // Même si le cache est à jour par rapport au build, on peut vouloir
        // mettre à jour l'index en mémoire si on n'avait rien (premier chargement)
        // Mais ici on suppose que loadRecipesIndex a déjà rempli this.#recipesIndex
        return;
      }

      console.log(
        `[RecipesStore] Nouvelle version détectée ou cache manquant (Ts: ${remoteTimestamp}), Traitement...`,
      );

      // 3. Smart Merge (Index en mémoire vs Nouvelles données)
      const recipes = data.recipes.map((r: any) => parseRecipeIndexEntry(r));
      let updatedCount = 0;

      recipes.forEach((newRecipe: RecipeIndexEntry) => {
        const existing = this.#recipesIndex.get(newRecipe.$id);

        let shouldUpdate = false;
        if (!existing) {
          shouldUpdate = true; // Nouveau
        } else {
          // Si existant, comparer les dates de mise à jour pour éviter d'écraser un changement Appwrite récent
          // non encore buildé par Hugo.
          const newDate = new Date(newRecipe.$updatedAt).getTime();
          const existingDate = new Date(existing.$updatedAt).getTime();
          if (newDate > existingDate) {
            shouldUpdate = true;
          }
        }

        if (shouldUpdate) {
          this.#recipesIndex.set(newRecipe.$id, newRecipe);
          updatedCount++;
        }
      });

      this.#lastSync = new Date().toISOString();
      console.log(
        `[RecipesStore] Smart Merge: ${updatedCount} recettes mises à jour/ajoutées.`,
      );

      // 4. Mise à jour du cache
      if (this.#cache) {
        // Sauvegarder l'index complet (mémoire)
        await this.#cache.saveRecipesIndex(this.#recipesIndex);
        await this.#cache.saveMetadata({
          ...cachedMetadata,
          lastSync: this.#lastSync,
          buildTimestamp: remoteTimestamp || Date.now() / 1000, // Fallback si pas de meta
          recipesCount: this.#recipesIndex.size,
          cacheVersion: 1,
        });
      }
    } catch (err) {
      console.error("[RecipesStore] Erreur loadIndexFromDataJson:", err);
      throw err;
    }
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
        // Extrait les noms d'ingrédients depuis le format Appwrite
        const ingredients = ingredientsFromAppwrite(recipe.ingredients);
        const ingredientNames = ingredients.map((ing) => ing.name);

        this.#recipesIndex.set(recipe.$id, {
          title: recipe.title,
          typeR: recipe.typeR,
          categories: recipe.categories,
          regime: recipe.regime,
          draft: recipe.draft || false,
          saison: recipe.saison,

          // Champs de filtrage rapide
          ingredients: ingredientNames, // Noms des ingrédients uniquement
          materiel: recipe.materiel,
          region: recipe.region || null,
          serveHot: recipe.serveHot,
          cuisson: recipe.cuisson,
          check: recipe.check,
          auteur: recipe.auteur || recipe.createdBy,

          // Champs de permission
          permissionWrite: recipe.permissionWrite,

          // Champs de gestion
          isPublished: false,
          lockedBy: recipe.lockedBy || null,
          $id: recipe.$id,
          $createdAt: recipe.$createdAt,
          $updatedAt: recipe.$updatedAt,
          createdBy: recipe.createdBy,
          plate: recipe.plate,
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
   * Sync Incrémentiel avec Appwrite
   * Récupère toutes les recettes (published ou draft) modifiées après la dernière sync réussie.
   */
  async #incrementalSync(cachedMetadata: any): Promise<void> {
    console.log("[RecipesStore] Sync incrémentiel Appwrite...");

    // Déterminer le point de départ
    let since = cachedMetadata?.lastAppwriteSync;

    // Si pas de lastAppwriteSync, on utilise le timestamp du build Hugo comme approximation safe
    if (!since && this.#versionTimestamp) {
      since = new Date(this.#versionTimestamp * 1000).toISOString();
    }

    // Si toujours rien (cache vide, pas de build?), on prend une date arbitraire très ancienne
    if (!since) {
      since = "1970-01-01T00:00:00.000Z";
    }

    const updatedRecipes = await listUpdatedRecipes(since);

    if (updatedRecipes.length === 0) {
      console.log("[RecipesStore] Aucune mise à jour Appwrite détectée.");
      return;
    }

    console.log(
      `[RecipesStore] ${updatedRecipes.length} recettes mises à jour depuis Appwrite.`,
    );

    let updatedCount = 0;
    updatedRecipes.forEach((recipe) => {
      // Parsing unifié
      const indexEntry = this.#parseAppwriteRecipeToIndexEntry(recipe);

      // Upsert inconstestable (Appwrite est la source de vérité pour les modifs récentes)
      this.#recipesIndex.set(indexEntry.$id, indexEntry);

      // Si la recette est publiée, on met aussi à jour le cache de détails si possible ?
      // Non, on laisse le lazy loading faire, sauf si on veut être proactif.
      // Pour l'instant on met juste à jour l'index.
      updatedCount++;
    });

    // Mettre à jour lastAppwriteSync
    const now = new Date().toISOString();

    if (this.#cache) {
      await this.#cache.saveRecipesIndex(this.#recipesIndex);
      await this.#cache.saveMetadata({
        ...cachedMetadata,
        lastAppwriteSync: now,
      });
    }

    console.log(
      `[RecipesStore] Sync incrémentiel terminé (${updatedCount} mises à jour).`,
    );
  }

  /**
   * Convertit une recette Appwrite (Recettes) en entrée d'index (RecipeIndexEntry)
   */
  #parseAppwriteRecipeToIndexEntry(recipe: any): RecipeIndexEntry {
    // Extraire les noms d'ingrédients
    let ingredientNames: string[] = [];
    if (recipe.ingredients) {
      const ingredients = ingredientsFromAppwrite(recipe.ingredients);
      ingredientNames = ingredients.map((ing) => ing.name);
    }

    return {
      title: recipe.title,
      typeR: recipe.typeR,
      categories: recipe.categories,
      regime: recipe.regime,
      draft: recipe.draft || false,
      saison: recipe.saison,

      // Champs de filtrage rapide
      ingredients: ingredientNames,
      materiel: recipe.materiel,
      region: recipe.region || null,
      serveHot: recipe.serveHot,
      cuisson: recipe.cuisson,
      check: recipe.check,
      auteur: recipe.auteur || recipe.createdBy,

      // Champs de permission
      permissionWrite: recipe.permissionWrite,

      // Champs de gestion
      isPublished: recipe.isPublished,
      lockedBy: recipe.lockedBy || null,
      $id: recipe.$id,
      $createdAt: recipe.$createdAt,
      $updatedAt: recipe.$updatedAt,
      createdBy: recipe.createdBy,
      plate: recipe.plate,
    };
  }

  /**
   * Configure le realtime pour les recettes Appwrite
   */
  #setupRealtime(): void {
    try {
      this.#realtimeUnsubscribe = subscribeToRecipes(
        globalState.userId!,
        globalState.userTeams,
        async (recipe, eventType) => {
          console.log(
            `[RecipesStore] Realtime: ${eventType} pour ${recipe.$id}`,
          );

          if (eventType === "create" || eventType === "update") {
            // Extraire les noms d'ingrédients depuis Appwrite
            const ingredients = ingredientsFromAppwrite(recipe.ingredients);
            const ingredientNames = ingredients.map((ing) => ing.name);

            // 1. Mettre à jour l'index dans la SvelteMap (réactif)
            const indexEntry: RecipeIndexEntry = {
              title: recipe.title,
              typeR: recipe.typeR,
              categories: recipe.categories,
              regime: recipe.regime,
              draft: recipe.draft || false,
              saison: recipe.saison,

              // Champs de filtrage rapide
              ingredients: ingredientNames,
              materiel: recipe.materiel,
              region: recipe.region,
              serveHot: recipe.serveHot,
              cuisson: recipe.cuisson,
              check: recipe.check,
              auteur: recipe.auteur || recipe.createdBy,

              // Champs de permission
              permissionWrite: recipe.permissionWrite,

              // Champs de gestion
              isPublished: recipe.isPublished,
              lockedBy: recipe.lockedBy || null,
              $id: recipe.$id,
              $createdAt: recipe.$createdAt,
              $updatedAt: recipe.$updatedAt,
              createdBy: recipe.createdBy,
              plate: recipe.plate,
            };

            this.#recipesIndex.set(recipe.$id, indexEntry);

            // 2. Préparer les détails complets de la recette
            const recipeData: RecipeForDisplay = {
              ...recipe,
              ingredients: ingredients, // Ingrédients complets avec conversion
              astuces: astucesFromAppwrite(recipe.astuces),
            };

            // 3. Mettre à jour les détails dans le cache IndexedDB uniquement
            if (this.#cache) {
              try {
                // On enregistre les détails Appwrite (format Recettes) dans le cache
                // @ts-ignore - recipeData is RecipeForDisplay but store expects Recettes
                await this.#cache.saveRecipeDetail(recipeData);
                console.log(
                  `[RecipesStore] Détails de ${recipe.$id} mis à jour dans le cache`,
                );
              } catch (error) {
                console.warn(
                  `[RecipesStore] Erreur mise à jour cache détails ${recipe.$id}:`,
                  error,
                );
              }
            }
          } else if (eventType === "delete") {
            // Supprimer de la SvelteMap (réactif)
            this.#recipesIndex.delete(recipe.$id);

            // Supprimer du cache IndexedDB (persistance)
            if (this.#cache) {
              try {
                await this.#cache.deleteRecipeDetail(recipe.$id);
                console.log(
                  `[RecipesStore] Recette ${recipe.$id} supprimée du cache`,
                );
              } catch (error) {
                console.warn(
                  `[RecipesStore] Erreur suppression cache ${recipe.$id}:`,
                  error,
                );
              }
            }
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

  // =============================================================================
  // API PUBLIQUE - LECTURE INDEX
  // =============================================================================

  /**
   * Récupère une entrée d'index par $id
   */
  getRecipeIndexByUuid($id: string): RecipeIndexEntry | null {
    const result = this.#recipesIndex.get($id) || null;
    return result;
  }

  /**
   * Recherche des recettes par texte (mots entiers, début de mots)
   */
  searchRecipes(query: string): RecipeIndexEntry[] {
    if (!query.trim()) {
      return this.recipesIndex;
    }

    const searchTerms = query.toLowerCase().trim().split(/\s+/);

    return this.recipesIndex.filter((recipe) => {
      const recipeTitle = recipe.title.toLowerCase();

      // Découper le titre en mots (par espaces, tirets, underscores)
      const titleWords = recipeTitle.split(/[\s\-_]+/);

      // Tous les termes de recherche doivent matcher le début d'au moins un mot
      // Exemple: "lasagne bol" → cherche "lasagne" ET "bol" comme début de mots
      return searchTerms.every((term) =>
        titleWords.some((word) => word.startsWith(term)),
      );
    });
  }

  /**
   * Récupère tous les types de recettes disponibles
   */
  get availableTypes(): string[] {
    const types = new Set<string>();
    this.recipesIndex.forEach((recipe) => types.add(recipe.typeR));
    return Array.from(types).sort();
  }

  /**
   * Vérifie si l'utilisateur peut éditer une recette
   * @param uuid - UUID de la recette
   * @returns true si l'utilisateur peut éditer, false sinon
   */
  async canEditRecipe(uuid: string): Promise<boolean> {
    if (!globalState.userId) return false;

    // Recettes Appwrite : vérifier permissions
    try {
      const recipe = await getAppwriteRecipe(uuid);
      if (!recipe) return false;

      return (
        recipe.createdBy === globalState.userId ||
        Boolean(recipe.permissionWrite?.includes(globalState.userId)) ||
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

  /**
   * Récupère le statut de verrouillage d'une recette depuis l'index
   * @param uuid - UUID de la recette
   * @returns ID de l'utilisateur qui verrouille ou null
   */
  getRecipeLockStatus(uuid: string): string | null {
    const entry = this.#recipesIndex.get(uuid);
    return entry?.lockedBy || null;
  }

  // =============================================================================
  // API PUBLIQUE - LOCKING
  // =============================================================================
  /**
   * Met à jour le verrou d'une recette (optimisé - appel direct Appwrite)
   * @param uuid - UUID de la recette
   * @param lockedBy - ID utilisateur ou null pour déverrouiller
   */
  async updateRecipeLock(uuid: string, lockedBy: string | null): Promise<void> {
    if (!globalState.userId) return;

    try {
      // Appel direct à Appwrite - plus de cloud function pour le lock
      await updateRecipeAppwrite(
        uuid,
        {
          lockedBy,
        },
        globalState.userId,
      );

      console.log(
        `[RecipesStore] Verrou ${uuid} mis à jour: ${lockedBy || "libéré"}`,
      );

      // Mise à jour locale immédiate de l'INDEX pour UX (le realtime synchronisera les autres)
      const currentIndex = this.#recipesIndex.get(uuid);
      if (currentIndex) {
        this.#recipesIndex.set(uuid, { ...currentIndex, lockedBy });
      }
    } catch (error) {
      console.error(`[RecipesStore] Erreur verrouillage ${uuid}:`, error);
      throw error;
    }
  }

  // =============================================================================
  // API PUBLIQUE - LAZY LOADING DÉTAILS
  // =============================================================================

  /**
   * Retourne les détails complets d'une recette avec détection intelligente de source
   *
   * Architecture optimisée (IDB First):
   * 1. IndexedDB cache (lazy loading)
   * 2. Source intelligente: Hugo JSON pour les publiées, Appwrite pour les brouillons
   * 3. Cache persistant automatique
   *
   * @param uuid - slug-uuid de la recette
   * @returns Détails de la recette ou null si non trouvée
   */
  async getRecipeByUuid(uuid: string): Promise<RecipeForDisplay | null> {
    // 1. Éviter les chargements parallèles du même UUID
    if (this.#loadingDetails.has(uuid)) {
      console.log(
        `[RecipesStore] Chargement de ${uuid} déjà en cours, attente...`,
      );
      while (this.#loadingDetails.has(uuid)) {
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
      // Une fois le chargement parallèle fini, on retente la lecture IDB
      if (this.#cache) {
        return (
          ((await this.#cache.loadRecipeDetail(
            uuid,
          )) as unknown as RecipeForDisplay) || null
        );
      }
      // Fallback si pas de cache (peu probable ici)
      return null;
    }

    this.#loadingDetails.add(uuid);

    try {
      // 2. Vérifier IndexedDB cache (Source de vérité locale)
      if (this.#cache) {
        const cachedDetail = await this.#cache.loadRecipeDetail(uuid);
        if (cachedDetail) {
          // console.log(
          //   `[RecipesStore] Détails de ${uuid} chargés depuis le cache`,
          // );
          return cachedDetail as unknown as RecipeForDisplay;
        }
      }

      // 3. Récupérer l'entrée d'index pour déterminer la source
      const indexEntry = this.#recipesIndex.get(uuid);
      if (!indexEntry) {
        console.warn(`[RecipesStore] Recette ${uuid} non trouvée dans l'index`);
        return null;
      }

      // 4. Charger depuis la source appropriée avec détection intelligente
      let recipeData: RecipeForDisplay | null = null;

      if (indexEntry.isPublished === false) {
        // 4a. Recette Appwrite (non-publiée)
        console.log(`[RecipesStore] Chargement de ${uuid} depuis Appwrite...`);
        recipeData = await this.#loadFromAppwrite(uuid);
      } else {
        // 4b. Recette Hugo (publiée)
        const recipePath = `/recettes/${indexEntry.$id}/recipe.json`;
        console.log(
          `[RecipesStore] Chargement de ${uuid} depuis Hugo JSON: ${recipePath}`,
        );
        recipeData = await this.#loadFromHugo(recipePath);
      }

      if (!recipeData) {
        console.warn(
          `[RecipesStore] Impossible de charger les détails de ${uuid}`,
        );
        return null;
      }

      // 5. Mettre en cache dans IndexedDB
      if (this.#cache && recipeData) {
        // @ts-ignore - recipeData is RecipeForDisplay but store expects Recettes
        await this.#cache.saveRecipeDetail(recipeData);
      }

      console.log(
        `[RecipesStore] Détails de ${uuid} chargés et mis en cache IDB avec succès`,
      );
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
   * Charge une recette depuis Appwrite
   */
  async #loadFromAppwrite(uuid: string): Promise<RecipeForDisplay | null> {
    try {
      const appwriteRecipe = await getAppwriteRecipe(uuid);
      if (!appwriteRecipe) {
        return null;
      }

      // Convertir les ingrédients Appwrite au format RecipeData
      const ingredients = ingredientsFromAppwrite(
        appwriteRecipe.ingredients || [],
      );

      return {
        ...appwriteRecipe,
        ingredients,
        // NORMALISER: astuces doit toujours être un array
        astuces: astucesFromAppwrite(appwriteRecipe.astuces),
        prepAlt: appwriteRecipe.prepAlt || null,
        categories: appwriteRecipe.categories,
        regime: appwriteRecipe.regime,
        saison: appwriteRecipe.saison,
        teams: appwriteRecipe.teams,
        permissionWrite: appwriteRecipe.permissionWrite,
      };
    } catch (error) {
      console.error(
        `[RecipesStore] Erreur chargement Appwrite ${uuid}:`,
        error,
      );
      return null;
    }
  }

  /**
   * Charge une recette depuis Hugo JSON
   */
  async #loadFromHugo(recipePath: string): Promise<RecipeForDisplay | null> {
    try {
      const response = await fetch(recipePath);
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const rawData = await response.json();
      const recipeData = parseRecipeData(rawData);

      return recipeData;
    } catch (error) {
      console.error(
        `[RecipesStore] Erreur chargement Hugo ${recipePath}:`,
        error,
      );
      return null;
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
}

// =============================================================================
// EXPORT SINGLETON
// =============================================================================

export const recipesStore = new RecipesStore();
