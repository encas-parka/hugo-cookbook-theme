<script lang="ts">
  import { recipesStore } from "$lib/stores/RecipesStore.svelte";
  import { globalState } from "$lib/stores/GlobalState.svelte";
  import {
    createRecipeAppwrite,
    executeManageDataRecipe,
    updateRecipeAppwrite,
  } from "$lib/services/appwrite-recipes";
  import { ingredientsToAppwrite } from "$lib/utils/ingredientUtils";
  import { astucesToAppwrite } from "$lib/utils/recipeUtils";
  import { toastService } from "$lib/services/toast.service.svelte";
  import { navigate, router } from "$lib/services/simple-router.svelte";
  import {
    type RecipeIngredient,
    type CreateRecipeData,
    RecettesTypeR,
  } from "$lib/types/recipes.types";
  import { ArrowLeft, Save, Lock } from "@lucide/svelte";
  import { onDestroy } from "svelte";
  import { SvelteSet } from "svelte/reactivity";
  import { navBarStore } from "../stores/NavBarStore.svelte";
  import RecipeHeaderForm from "$lib/components/recipeEdit/RecipeHeaderForm.svelte";
  import RecipePrepaForm from "$lib/components/recipeEdit/RecipePrepaForm.svelte";
  import RecipePermissionsManager from "$lib/components/recipeEdit/RecipePermissionsManager.svelte";
  import UnsavedChangesGuard from "$lib/components/ui/UnsavedChangesGuard.svelte";
  import { UnitConverter } from "$lib/utils/UnitConverter";
  import { generateSlugUuid35 } from "../utils/slugUtils";

  // ============================================================================
  // PROPS & INITIALISATION
  // ============================================================================

  let { params } = $props<{ params?: Record<string, string> }>();
  const recipeId = $derived(params?.uuid);
  const isAlternativeVersion = $derived(router.path.endsWith("/duplicate"));

  // Données de référence pour les listes déroulantes
  let recipeInfo = $state<{
    materiel: string[];
    categories: string[];
    regimes: string[];
  } | null>(null);

  // ============================================================================
  // ÉTAT LOCAL D'ÉDITION (source de vérité pendant l'édition)
  // ============================================================================

  // Interface locale pour le formulaire (ingrédients en objets, pas en strings JSON)
  interface RecipeFormState
    extends Omit<
      CreateRecipeData,
      | "ingredients"
      | "astuces"
      | "prepAlt"
      | "typeR"
      | "cuisson"
      | "serveHot"
      | "check"
      | "$id"
    > {
    $id?: string;
    ingredients: RecipeIngredient[];
    astuces: { astuce: string }[];
    prepAlt: string[];
    typeR: RecettesTypeR | "";
    cuisson: boolean | "";
    serveHot: boolean | "";
    check: boolean | null;
    $createdAt?: string;
    $updatedAt?: string;
    createdBy?: string;
    plate: number;
    quantite_desc: string | null;
    description: string | null;
    region: string | null;
    draft: boolean;
  }

  // Recette par défaut pour le mode création
  const defaultRecipe: RecipeFormState = {
    title: "",
    plate: 100,
    ingredients: [],
    preparation: "",
    materiel: [],
    preparation24h: "",
    astuces: [],
    categories: [],
    saison: [],
    typeR: "",
    cuisson: "",
    serveHot: "",
    regime: [],
    description: "",
    quantite_desc: "",
    region: "",
    prepAlt: [],
    check: null,
    draft: true,
    lockedBy: null,
    auteur: null,
    isPublished: false,
    publishedAt: null,
    createdBy: globalState.userId || "",
    permissionWrite: [globalState.userId || ""],
  };

  let recipe = $state<RecipeFormState | null>(null);

  // État UI
  let loaded = $state(false);
  let isLoading = $state(false);
  let isSaving = $state(false);
  let lockedBy = $state<string | null>(null);
  let heartbeatInterval: any = null;

  // Snapshot pour le calcul de isDirty (Single Source of Truth)
  let initialRecipeSnapshot = $state<string | null>(null);

  // Calcul de isDirty par comparaison avec le snapshot initial
  const isDirty = $derived.by(() => {
    if (!recipe || !initialRecipeSnapshot) return false;

    // Comparer uniquement les champs qui nous intéressent
    const currentData = JSON.stringify({
      title: recipe.title,
      description: recipe.description,
      plate: recipe.plate,
      preparation: recipe.preparation,
      preparation24h: recipe.preparation24h,
      cuisson: recipe.cuisson,
      serveHot: recipe.serveHot,
      typeR: recipe.typeR,
      categories: recipe.categories,
      regime: recipe.regime,
      saison: recipe.saison,
      ingredients: recipe.ingredients,
      quantite_desc: recipe.quantite_desc,
      auteur: recipe.auteur,
      astuces: recipe.astuces,
      prepAlt: recipe.prepAlt,
      check: recipe.check,
      draft: recipe.draft,
      permissionWrite: recipe.permissionWrite,
      materiel: recipe.materiel,
      region: recipe.region,
    });

    return currentData !== initialRecipeSnapshot;
  });

  // Logique réactive pour le brouillon
  $effect(() => {
    if (recipe && recipe.check !== true) {
      recipe.draft = true;
    }
  });
  // La logique du draft est maintenant gérée directement dans validateRecipe()
  // et lors du chargement initial de la recette

  // État de validation
  let validationErrors = $state<{
    title?: string;
    typeR?: string;
    cuisson?: string;
    serveHot?: string;
    plate?: string;
    quantite_desc?: string;
    description?: string;
    region?: string;
    check?: string;
    ingredients?: string;
    preparation?: string;
    preparation24h?: string;
    astuces?: string[];
  }>({});

  // ============================================================================
  // DERIVED STATES
  // ============================================================================

  const isCreating = $derived(!recipeId || isAlternativeVersion);

  const isLockedByOthers = $derived.by(() => {
    if (!lockedBy) return false;
    return lockedBy !== globalState.userId;
  });

  const isLockedByMe = $derived.by(() => {
    if (!lockedBy) return false;
    return lockedBy === globalState.userId;
  });

  const canEdit = $derived(!isLockedByOthers && !isLoading);

  // ============================================================================
  // AUTO-EFFECTS
  // ============================================================================

  // Charger les données de référence
  $effect(() => {
    if (!recipeInfo) {
      loadRecipeInfo();
    }
  });

  // Initialiser la recette (mode création vs édition vs alternative)
  $effect(() => {
    // Vérifier que l'utilisateur est connecté
    if (!globalState.userId) {
      toastService.error("Vous devez être connecté");
      navigate("/");
      return;
    }

    // Mode création : initialiser avec la recette par défaut
    if (!recipeId && !loaded) {
      recipe = { ...defaultRecipe, $id: "new-recipe" } as RecipeFormState;
      loaded = true;
      return;
    }

    // Mode version alternative : charger la recette originale et préparer une nouvelle version
    if (recipeId && isAlternativeVersion && !loaded && !isLoading) {
      isLoading = true;
      recipesStore
        .getRecipeByUuid(recipeId)
        .then((data) => {
          if (data) {
            const userName = globalState.userName() || "utilisateur";
            recipe = {
              ...data,
              title: `${data.title} (v-${userName})`,
              $id: "new-recipe",
              $createdAt: undefined,
              $updatedAt: undefined,
              lockedBy: null,
              createdBy: globalState.userId || "",
              permissionWrite: [globalState.userId || ""],
              categories: data.categories || [],
              saison: data.saison || [],
              ingredients: data.ingredients ?? [],
              astuces: data.astuces ?? [],
              prepAlt: data.prepAlt || [],
              materiel: data.materiel || [],
              regime: data.regime || [],
              check: null,
              draft: true,
            } as unknown as RecipeFormState;
            loaded = true;
          } else {
            toastService.error("Recette introuvable");
            navigate("/recipe");
          }
        })
        .catch((error) => {
          console.error("Erreur chargement:", error);
          toastService.error("Erreur lors du chargement");
          navigate("/recipe");
        })
        .finally(() => {
          isLoading = false;
        });
      return;
    }

    // Mode édition : charger depuis le store
    if (recipeId && !isAlternativeVersion && !loaded && !isLoading) {
      isLoading = true;
      recipesStore
        .getRecipeByUuid(recipeId)
        .then(async (data) => {
          if (data) {
            recipe = {
              ...data,
              categories: data.categories || [],
              saison: data.saison || [],
              ingredients: data.ingredients ?? [],
              astuces: data.astuces ?? [],
              prepAlt: data.prepAlt || [],
              materiel: data.materiel || [],
              regime: data.regime || [],
              check: data.check ?? null,
              $createdAt: data.$createdAt,
              $updatedAt: data.$updatedAt,
              createdBy: data.createdBy,
            } as unknown as RecipeFormState;
            lockedBy = data.lockedBy || null;
            loaded = true;

            // Acquérir le verrou après chargement
            await acquireLock();
          } else {
            toastService.error("Recette introuvable");
            navigate("/recipe");
          }
        })
        .catch((error) => {
          console.error("Erreur chargement:", error);
          toastService.error("Erreur lors du chargement");
          navigate("/recipe");
        })
        .finally(() => {
          isLoading = false;
        });
    }
  });

  // Capturer le snapshot initial quand la recette est chargée
  $effect(() => {
    if (recipe && loaded && !initialRecipeSnapshot) {
      initialRecipeSnapshot = JSON.stringify({
        title: recipe.title,
        description: recipe.description,
        plate: recipe.plate,
        preparation: recipe.preparation,
        preparation24h: recipe.preparation24h,
        cuisson: recipe.cuisson,
        serveHot: recipe.serveHot,
        typeR: recipe.typeR,
        categories: recipe.categories,
        regime: recipe.regime,
        saison: recipe.saison,
        ingredients: recipe.ingredients,
        quantite_desc: recipe.quantite_desc,
        auteur: recipe.auteur,
        astuces: recipe.astuces,
        prepAlt: recipe.prepAlt,
        check: recipe.check,
        draft: recipe.draft,
        permissionWrite: recipe.permissionWrite,
        materiel: recipe.materiel,
        region: recipe.region,
      });
    }
  });

  // ============================================================================
  // NAVBAR CONFIGURATION
  // ============================================================================

  const navTitle = $derived(() => {
    if (isAlternativeVersion) return "Nouvelle version de recette";
    return isCreating ? "Nouvelle recette" : "Édition de recette";
  });

  $effect(() => {
    navBarStore.setConfig({
      title: navTitle(),
      actions: navActions,
    });
  });

  onDestroy(async () => {
    navBarStore.reset();
    stopHeartbeat();
    if (isLockedByMe && !isSaving) {
      await releaseLock();
    }
    window.removeEventListener("beforeunload", handleBeforeUnload);
  });

  function handleBeforeUnload(e: BeforeUnloadEvent) {
    if (isDirty) {
      e.preventDefault();
      e.returnValue = "";
    }
  }

  $effect(() => {
    if (isDirty) {
      window.addEventListener("beforeunload", handleBeforeUnload);
    } else {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    }
  });

  function startHeartbeat() {
    stopHeartbeat();
    if (!recipeId || !isLockedByMe) return;

    heartbeatInterval = setInterval(async () => {
      try {
        console.log("💓 Heartbeat: Refreshing lock...");
        await recipesStore.updateRecipeLock(recipeId!, globalState.userId);
      } catch (error) {
        console.error("❌ Heartbeat failed:", error);
      }
    }, 120000); // 2 minutes
  }

  function stopHeartbeat() {
    if (heartbeatInterval) {
      clearInterval(heartbeatInterval);
      heartbeatInterval = null;
    }
  }

  // ============================================================================
  // LOCK MANAGEMENT
  // ============================================================================

  async function loadRecipeInfo(): Promise<void> {
    try {
      const response = await fetch("/data/recipe-info.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      recipeInfo = await response.json();
    } catch (error) {
      console.error("Erreur chargement recipe-info.json:", error);
      toastService.error("Impossible de charger les données de référence");
      // En cas d'erreur, utiliser des valeurs par défaut
      recipeInfo = {
        materiel: [],
        categories: [],
        regimes: [],
      };
    }
  }

  function determineAllergensAndRegimes(ingredients: RecipeIngredient[]): {
    regimes: string[];
  } {
    // Collecter tous les allergènes uniques
    const allAllergens = new SvelteSet<string>();
    let hasAnimalProducts = false;

    ingredients.forEach((ingredient) => {
      // Ajouter les allergènes de l'ingrédient
      if (ingredient.allergens && ingredient.allergens.length > 0) {
        ingredient.allergens.forEach((allergen) => allAllergens.add(allergen));
      }

      // Vérifier si l'ingrédient est un produit animal
      if (ingredient.type === "animaux") {
        hasAnimalProducts = true;
      }
    });

    // Convertir le Set en tableau après la boucle
    const allergenList = Array.from(allAllergens);

    // Vérifier également les allergènes qui indiquent des produits animaux
    if (
      allergenList.includes("Viande") ||
      allergenList.includes("Poisson") ||
      allergenList.includes("Crustacé") ||
      allergenList.includes("Mollusque") ||
      allergenList.includes("Porc")
    ) {
      hasAnimalProducts = true;
    }

    const regimes: string[] = [];

    // Déterminer les régimes en fonction des ingrédients
    if (
      !hasAnimalProducts &&
      !allergenList.includes("Produit laitier") &&
      !allergenList.includes("Oeuf")
    ) {
      regimes.push("vegan");
    } else if (!hasAnimalProducts) {
      regimes.push("végétarien");
    }

    if (!allergenList.includes("Gluten")) {
      regimes.push("sans-gluten");
    }

    if (!allergenList.includes("Produit laitier")) {
      regimes.push("sans-lactose");
    }

    return {
      regimes,
    };
  }

  // ============================================================================
  // FONCTIONS DE NORMALISATION DES INGRÉDIENTS
  // ============================================================================

  /**
   * Normalise la quantité d'un ingrédient en utilisant UnitConverter
   */
  function normalizeIngredientQuantity(
    ingredient: RecipeIngredient,
  ): RecipeIngredient {
    if (!ingredient.originalQuantity || ingredient.originalQuantity <= 0) {
      return {
        ...ingredient,
        normalizedQuantity: 0,
        normalizedUnit: ingredient.originalUnit || "g",
      };
    }

    const conversion = UnitConverter.normalize(
      ingredient.originalQuantity,
      ingredient.originalUnit || "",
      ingredient.name,
    );

    return {
      ...ingredient,
      normalizedQuantity: conversion.quantity,
      normalizedUnit: conversion.unit,
    };
  }

  /**
   * Normalise tous les ingrédients de la liste
   */
  function normalizeAllIngredients(
    ingredientsList: RecipeIngredient[],
  ): RecipeIngredient[] {
    return ingredientsList.map((ingredient) =>
      normalizeIngredientQuantity(ingredient),
    );
  }

  async function acquireLock(): Promise<boolean> {
    if (!recipeId || !globalState.userId || !recipe) return false;

    // Smart Lock: On ne verrouille que s'il y a plus d'un contributeur potentiel
    const contributors = recipe.permissionWrite || [];
    if (contributors.length <= 1) {
      console.log("ℹ️ Verrou ignoré (contributeur unique)");
      return true;
    }

    try {
      // Vérifier si le verrou actuel est expiré (plus de 5 minutes)
      const currentLockedBy = recipe.lockedBy;
      const lastUpdate = recipe.$updatedAt ? new Date(recipe.$updatedAt) : null;
      const isExpired =
        lastUpdate && Date.now() - lastUpdate.getTime() > 300000; // 5 min

      if (currentLockedBy && currentLockedBy !== globalState.userId) {
        if (isExpired) {
          console.log("⏳ Verrou précédent expiré, reprise de contrôle...");
          toastService.info("Verrou précédent expiré, vous prenez le contrôle");
        } else {
          toastService.warning("Cette recette est déjà en cours d'édition");
          return false;
        }
      }

      await recipesStore.updateRecipeLock(recipeId, globalState.userId);
      lockedBy = globalState.userId;
      console.log("🔒 Verrou acquis");
      startHeartbeat();
      return true;
    } catch (error) {
      console.error("❌ Erreur acquisition verrou:", error);
      toastService.error("Impossible de verrouiller la recette");
      return false;
    }
  }

  async function releaseLock(): Promise<void> {
    if (!recipeId) return;
    stopHeartbeat();

    try {
      await recipesStore.updateRecipeLock(recipeId, null);
      lockedBy = null;
      console.log("🔓 Verrou libéré");
    } catch (error) {
      console.error("❌ Erreur libération verrou:", error);
    }
  }

  // ============================================================================
  // NORMALISATION POUR APPWRITE
  // ============================================================================

  /**
   * Normalise l'état du formulaire vers les types stricts Appwrite
   * Doit être appelée APRÈS validateRecipe() donc toutes les valeurs nécessaires sont remplies
   */
  function normalizeRecipeForAppwrite(
    recipe: RecipeFormState,
  ): CreateRecipeData {
    return {
      // Conversions explicites des types UI → types Appwrite
      title: recipe.title,
      plate: recipe.plate,
      preparation: recipe.preparation,
      cuisson: recipe.cuisson === "" ? false : (recipe.cuisson as boolean),
      serveHot: recipe.serveHot === "" ? true : (recipe.serveHot as boolean),
      check: recipe.check ?? false,
      typeR: recipe.typeR as RecettesTypeR,
      permissionWrite:
        recipe.permissionWrite && recipe.permissionWrite.length > 0
          ? recipe.permissionWrite
          : [globalState.userId],
      draft: recipe.draft ?? true,
      categories: recipe.categories || [],
      regime: recipe.regime || [],
      saison: recipe.saison || [],
      materiel: recipe.materiel || [],
      quantite_desc: recipe.quantite_desc || null,
      description: recipe.description || null,
      region: recipe.region || null,
      auteur: recipe.auteur || null,
      preparation24h: recipe.preparation24h || null,
      // Les champs ingredients, astuces, prepAlt sont ajoutés séparément dans save()
      ingredients: [] as string[],
      astuces: null,
      prepAlt: null,
      lockedBy: null,
      isPublished: false,
      publishedAt: null,
    } as CreateRecipeData;
  }

  // ============================================================================
  // VALIDATION & SAVE
  // ============================================================================

  function validateRecipe(): boolean {
    if (!recipe) return false;

    // Réinitialiser les erreurs
    validationErrors = {};

    let hasError = false;

    // Validation du titre
    if (!recipe.title?.trim()) {
      validationErrors.title = "Le titre est obligatoire";
      hasError = true;
    } else if (recipe.title.length > 100) {
      validationErrors.title = "Le titre ne peut pas dépasser 100 caractères";
      hasError = true;
    } else {
      // Vérifier l'unicité du titre
      const normalizedTitle = recipe.title.trim().toLowerCase();
      const duplicate = recipesStore.recipesIndex.find(
        (r) =>
          r.title.trim().toLowerCase() === normalizedTitle &&
          r.$id !== recipe!.$id,
      );
      if (duplicate) {
        validationErrors.title = "Une recette porte déjà ce nom";
        hasError = true;
      }
    }

    // Validation du type
    if (!recipe.typeR) {
      validationErrors.typeR = "Le type de recette est obligatoire";
      hasError = true;
    }

    // Validation de la cuisson
    if (recipe.cuisson === null || recipe.cuisson === undefined) {
      validationErrors.cuisson =
        "Veuillez spécifier si une cuisson est nécessaire";
      hasError = true;
    }

    // Validation du service (chaud/froid)
    if (recipe.serveHot === null || recipe.serveHot === undefined) {
      validationErrors.serveHot =
        "Veuillez spécifier la température de service";
      hasError = true;
    }

    // Validation du nombre de couverts (plate)
    if (!recipe.plate || recipe.plate < 1) {
      validationErrors.plate = "Le nombre de couverts doit être d'au moins 1";
      hasError = true;
    } else if (recipe.plate > 10000) {
      validationErrors.plate =
        "Le nombre de couverts ne peut pas dépasser 10 000";
      hasError = true;
    }

    // Validation de la description des quantités
    if (recipe.quantite_desc && recipe.quantite_desc.length > 100) {
      validationErrors.quantite_desc =
        "La description des quantités ne peut pas dépasser 100 caractères";
      hasError = true;
    }

    // Validation de la description
    if (recipe.description && recipe.description.length > 200) {
      validationErrors.description =
        "La description ne peut pas dépasser 200 caractères";
      hasError = true;
    }

    // Validation de la spécialité (region)
    if (recipe.region && recipe.region.length > 50) {
      validationErrors.region =
        "La spécialité ne peut pas dépasser 50 caractères";
      hasError = true;
    }

    // Validation des ingrédients
    if (!recipe.ingredients || recipe.ingredients.length === 0) {
      validationErrors.ingredients = "Au moins un ingrédient est requis";
      hasError = true;
    }

    // Validation de la préparation
    if (!recipe.preparation?.trim()) {
      validationErrors.preparation = "La préparation est obligatoire";
      hasError = true;
    } else if (recipe.preparation.length > 15000) {
      validationErrors.preparation =
        "La préparation ne peut pas dépasser 15 000 caractères";
      hasError = true;
    }

    // Validation de la préparation 24h
    if (recipe.preparation24h && recipe.preparation24h.length > 15000) {
      validationErrors.preparation24h =
        "La préparation 24h ne peut pas dépasser 15 000 caractères";
      hasError = true;
    }

    // Validation du champ "check" (recette testée)
    if (recipe.check === null || recipe.check === undefined) {
      validationErrors.check = "Veuillez indiquer si la recette a été testée";
      hasError = true;
    }

    // Validation des astuces
    if (recipe.astuces && recipe.astuces.length > 0) {
      const astucesErrors: string[] = [];
      recipe.astuces.forEach((a, index) => {
        if (a.astuce.length > 250) {
          astucesErrors[index] = "Maximum 250 caractères";
          hasError = true;
        }
      });
      if (astucesErrors.length > 0) {
        validationErrors.astuces = astucesErrors;
      }
    }

    // Afficher un toast avec la liste des erreurs et scroller vers la première
    if (hasError) {
      toastService.error("Veuillez corriger les champs invalides", {
        autoCloseDelay: 5000,
      });

      // Scroll vers la première erreur
      setTimeout(() => {
        const firstErrorKey = Object.keys(validationErrors)[0];
        const errorIdMap: Record<string, string> = {
          title: "recipe-title",
          typeR: "recipe-type",
          cuisson: "recipe-cuisson",
          serveHot: "recipe-servehot",
          plate: "recipe-plate",
          quantite_desc: "recipe-quantite-desc",
          description: "description",
          region: "recipe-region",
          check: "recipe-check-fieldset",
          ingredients: "recipe-ingredients-editor", // Nécessite l'ajout de cet ID
          preparation: "recipe-preparation",
          preparation24h: "recipe-preparation24h",
        };

        const targetId = errorIdMap[firstErrorKey];
        if (targetId) {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
            // Si c'est un input/select, on lui donne le focus
            if (
              element.tagName === "INPUT" ||
              element.tagName === "SELECT" ||
              element.tagName === "TEXTAREA"
            ) {
              element.focus();
            }
          }
        }
      }, 100);
    }

    // autoFormat

    recipe.title =
      recipe.title.trim().charAt(0).toUpperCase() +
      recipe.title.trim().slice(1).toLowerCase();

    // Normaliser les ingrédients avant la sauvegarde
    recipe.ingredients = normalizeAllIngredients(recipe.ingredients);

    // Déterminer les allergènes et régimes automatiquement
    const { regimes } = determineAllergensAndRegimes(recipe.ingredients);
    recipe.regime = regimes;

    return !hasError;
  }

  async function save(): Promise<void> {
    if (!recipe || isSaving || !globalState.userId) return;

    const isValid = validateRecipe();
    if (!isValid) {
      return;
    }

    isSaving = true;
    const toastId = toastService.loading("Sauvegarde en cours...");

    try {
      if (isCreating) {
        // Création
        recipe.$id = generateSlugUuid35(recipe.title);

        // Normaliser les types UI vers types Appwrite
        const normalized = normalizeRecipeForAppwrite(recipe);

        const recipeToCreate: CreateRecipeData = {
          ...normalized,
          ingredients: ingredientsToAppwrite(recipe.ingredients),
          astuces: astucesToAppwrite(recipe.astuces),
          prepAlt: recipe.prepAlt,
        };

        const created = await createRecipeAppwrite(
          recipeToCreate,
          globalState.userId,
        );
        toastService.update(toastId, {
          state: "success",
          message: "Recette créée avec succès !",
        });

        // Appel async pour synchroniser vers GitHub
        // On nettoie les champs pour Hugo (pas de $)
        const hugoData = {
          ...recipeToCreate,
          ingredients: recipe.ingredients, // On renvoie les objets ingrédients pour Hugo
          id: created.$id,
          createdAt: created.$createdAt,
          updatedAt: created.$updatedAt,
          createdBy: created.createdBy,
        };
        // @ts-ignore - On retire les clés avec $ pour Hugo
        delete hugoData.$id;
        // @ts-ignore
        delete hugoData.$createdAt;
        // @ts-ignore
        delete hugoData.$updatedAt;

        executeManageDataRecipe(
          "save_recipe",
          created.$id,
          globalState.userId,
          hugoData,
          true,
        ).catch((error) => {
          console.error("Sync vers GitHub échouée:", error);
        });
        // forcer l'$effect d'initialisation
        loaded = false;

        // Rediriger vers l'édition
        navigate(`/recipe/${created.$id}/edit`);
      } else {
        // Mise à jour
        const { regimes } = determineAllergensAndRegimes(recipe.ingredients);

        // Normaliser les types UI vers types Appwrite
        const normalized = normalizeRecipeForAppwrite(recipe);

        const recipeData: Partial<CreateRecipeData> = {
          ...normalized,
          categories: recipe.categories,
          regime: regimes,
          saison: recipe.saison,
          ingredients: ingredientsToAppwrite(recipe.ingredients),
          quantite_desc: recipe.quantite_desc,
          auteur: recipe.auteur,
          preparation24h: recipe.preparation24h,
          astuces: astucesToAppwrite(recipe.astuces),
          prepAlt: recipe.prepAlt,
          $id: recipe.$id,
        };

        const updated = await updateRecipeAppwrite(
          recipeId!,
          recipeData,
          globalState.userId,
        );

        // Réinitialiser isDirty après sauvegarde réussie en recapturant le snapshot
        initialRecipeSnapshot = JSON.stringify({
          title: recipe.title,
          description: recipe.description,
          plate: recipe.plate,
          preparation: recipe.preparation,
          preparation24h: recipe.preparation24h,
          cuisson: recipe.cuisson,
          serveHot: recipe.serveHot,
          typeR: recipe.typeR,
          categories: recipe.categories,
          regime: recipe.regime,
          saison: recipe.saison,
          ingredients: recipe.ingredients,
          quantite_desc: recipe.quantite_desc,
          auteur: recipe.auteur,
          astuces: recipe.astuces,
          prepAlt: recipe.prepAlt,
          check: recipe.check,
          draft: recipe.draft,
          permissionWrite: recipe.permissionWrite,
          materiel: recipe.materiel,
          region: recipe.region,
        });

        // Appel async pour synchroniser vers GitHub
        // On nettoie les champs pour Hugo (pas de $)
        const hugoUpdateData = {
          ...recipeData,
          ingredients: recipe.ingredients, // On renvoie les objets ingrédients pour Hugo
          id: updated.$id,
          createdAt: updated.$createdAt,
          updatedAt: updated.$updatedAt,
          createdBy: updated.createdBy,
        };
        // @ts-ignore
        delete hugoUpdateData.$id;

        executeManageDataRecipe(
          "save_recipe",
          recipeId!,
          globalState.userId,
          hugoUpdateData,
          true,
        ).catch((error) => {
          console.error("Sync vers GitHub échouée:", error);
        });

        toastService.update(toastId, {
          state: "success",
          message: "Recette sauvegardée !",
        });

        // Libérer le verrou
        await releaseLock();
      }
    } catch (error) {
      console.error("Erreur sauvegarde:", error);
      toastService.update(toastId, {
        state: "error",
        message: "Erreur lors de la sauvegarde",
      });
    } finally {
      isSaving = false;
      setTimeout(() => toastService.dismiss(toastId), 3000);
    }
  }
</script>

{$inspect("isDirty", isDirty)}

<!-- ============================================================================ -->
{#snippet navActions()}
  <div class="flex items-center gap-2">
    <!-- Lock indicator -->
    {#if isLockedByOthers}
      <div class="badge badge-warning gap-2">
        <Lock class="h-3 w-3" />
        Vérouillé : document en cours d'édition par un·e autre utilisateur·ice.
      </div>
    {:else if isLockedByMe}
      <div class="badge badge-success gap-2">
        <Lock class="h-3 w-3" />
        Vous éditez
      </div>
    {/if}

    <!-- Save button -->
    <button
      onclick={save}
      disabled={!canEdit || isSaving || !isDirty}
      class="btn btn-primary btn-sm"
    >
      <Save class="h-4 w-4" />
      {isSaving ? "Sauvegarde..." : "Sauvegarder"}
    </button>
  </div>
{/snippet}

<!-- TEMPLATE -->
<!-- ============================================================================ -->

<div class="max-w-9xl container mx-auto px-4 py-8">
  {#if isLoading}
    <div class="flex items-center justify-center py-20">
      <div class="loading loading-spinner loading-lg"></div>
    </div>
  {:else if recipe}
    <!-- Form -->
    <div class="space-y-6">
      <!-- Métadonnées de base -->
      <!-- FIXIT binding -->
      <RecipeHeaderForm bind:recipe {recipeInfo} {validationErrors} {canEdit} />

      <!-- Ingrédients et Préparation -->
      <RecipePrepaForm bind:recipe {validationErrors} {canEdit} />

      <!-- Permissions / Collaborateurs -->
      <RecipePermissionsManager
        bind:permissionWrite={recipe.permissionWrite}
        createdBy={recipe.createdBy}
        {canEdit}
      />

      <!-- Métadonnées système -->
      {#if !isCreating && recipe.$createdAt}
        <div class="bg-base-200/50 rounded-box mt-12 p-6 text-sm opacity-60">
          <div
            class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            <div>
              <span class="font-semibold">Auteur :</span>
              {recipe.auteur || recipe.createdBy || "Inconnu"}
            </div>
            <div>
              <span class="font-semibold">ID :</span>
              <span class="font-mono">{recipe.$id}</span>
            </div>
            <div>
              <span class="font-semibold">Créé le :</span>
              {new Intl.DateTimeFormat("fr-FR", {
                dateStyle: "long",
                timeStyle: "short",
              }).format(new Date(recipe.$createdAt))}
            </div>
            {#if recipe.$updatedAt && recipe.$updatedAt !== recipe.$createdAt}
              <div>
                <span class="font-semibold">Modifié le :</span>
                {new Intl.DateTimeFormat("fr-FR", {
                  dateStyle: "long",
                  timeStyle: "short",
                }).format(new Date(recipe.$updatedAt))}
              </div>
            {/if}
          </div>
        </div>
      {/if}
    </div>
  {/if}
</div>

<!-- Guard de navigation pour modifications non sauvegardées -->
<UnsavedChangesGuard
  routeKey={recipeId ? `/recipe/${recipeId}/edit` : "/recipe/new"}
  shouldProtect={() => isDirty}
  onLeaveWithoutSave={async () => {
    // Libérer le lock si on le détient
    if (isLockedByMe) {
      await releaseLock();
    }
  }}
  onSaveAndLeave={async () => {
    // Sauvegarder et autoriser la navigation
    await save();
    // Le guard sera notifié du succès via le return implicite
  }}
  message="Vous avez des modifications non sauvegardées. Voulez-vous vraiment quitter ?"
/>
