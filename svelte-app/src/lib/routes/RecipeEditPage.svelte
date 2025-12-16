<script lang="ts">
  import { recipesStore } from "$lib/stores/RecipesStore.svelte";
  import { globalState } from "$lib/stores/GlobalState.svelte";
  import { toastService } from "$lib/services/toast.service.svelte";
  import { navigate } from "$lib/services/simple-router.svelte";
  import type { RecipeData, RecipeIngredient } from "$lib/types/recipes.types";
  import {
    ArrowLeft,
    Save,
    Lock,
    AlertCircle,
    BookOpen,
    Users,
    FileText,
    Utensils,
    ChefHat,
    Tag,
    Leaf,
    Sun,
    MapPin,
    Wrench,
    Clock,
    Lightbulb,
    Flame,
    Thermometer,
  } from "@lucide/svelte";
  import { onMount } from "svelte";
  import RecipeIngredientsEditor from "$lib/components/recipeEdit/RecipeIngredientsEditor.svelte";
  import MultiSelect from "$lib/components/ui/MultiSelect.svelte";

  // ============================================================================
  // PROPS & INITIALISATION
  // ============================================================================

  let { params } = $props<{ params?: Record<string, string> }>();
  let recipeId = $state(params?.uuid);
  const isCreating = $derived(!recipeId);

  // Données de référence pour les listes déroulantes
  let recipeInfo = $state<{
    materiel: string[];
    categories: string[];
    regimes: string[];
  } | null>(null);

  // ============================================================================
  // ÉTAT LOCAL D'ÉDITION (source de vérité pendant l'édition)
  // ============================================================================

  let recipe = $state<RecipeData | null>(null);
  let originalRecipe = $state<RecipeData | null>(null);

  // État UI
  let isLoading = $state(false);
  let isSaving = $state(false);
  let lockedBy = $state<string | null>(null);

  // État de validation
  let validationErrors = $state<{
    title?: string;
    typeR?: string;
    cuisson?: string;
    serveHot?: string;
    ingredients?: string;
    preparation?: string;
  }>({});

  // ============================================================================
  // DERIVED STATES
  // ============================================================================

  const isDirty = $derived.by(() => {
    if (!recipe || !originalRecipe) return false;
    return JSON.stringify(recipe) !== JSON.stringify(originalRecipe);
  });

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
    allergens: string[];
    regimes: string[];
  } {
    // Collecter tous les allergènes uniques
    const allAllergens = new Set<string>();
    let hasAnimalProducts = false;

    ingredients.forEach((ingredient) => {
      if (ingredient.allergens && ingredient.allergens.length > 0) {
        ingredient.allergens.forEach((allergen) => allAllergens.add(allergen));
      }
      if (
        ingredient.type === "animaux" ||
        !allergenList.includes("Viande") ||
        !allergenList.includes("Poisson") ||
        !allergenList.includes("Crustacé") ||
        !allergenList.includes("Mollusque") ||
        !allergenList.includes("Porc")
      ) {
        hasAnimalProducts = true;
      }
    });

    const allergenList = Array.from(allAllergens);
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
      allergens: allergenList.sort(),
      regimes,
    };
  }

  async function acquireLock(): Promise<boolean> {
    if (!recipeId || !globalState.userId) return false;

    try {
      await recipesStore.updateRecipeLock(recipeId, globalState.userId);
      lockedBy = globalState.userId;
      console.log("🔒 Verrou acquis");
      return true;
    } catch (error) {
      console.error("❌ Erreur acquisition verrou:", error);
      toastService.error("Impossible de verrouiller la recette");
      return false;
    }
  }

  async function releaseLock(): Promise<void> {
    if (!recipeId) return;

    try {
      await recipesStore.updateRecipeLock(recipeId, null);
      lockedBy = null;
      console.log("🔓 Verrou libéré");
    } catch (error) {
      console.error("❌ Erreur libération verrou:", error);
    }
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

    // Validation des ingrédients
    if (!recipe.ingredients || recipe.ingredients.length === 0) {
      validationErrors.ingredients = "Au moins un ingrédient est requis";
      hasError = true;
    }

    // Validation de la préparation
    if (!recipe.preparation?.trim()) {
      validationErrors.preparation = "La préparation est obligatoire";
      hasError = true;
    }

    // Afficher un toast avec la liste des erreurs
    if (hasError) {
      const errorMessages = Object.values(validationErrors);
      toastService.error("Veuillez corriger les champs invalides", {
        autoCloseDelay: 5000,
      });
    }

    return !hasError;
  }

  async function save(): Promise<void> {
    if (!recipe || isSaving) return;

    const isValid = validateRecipe();
    if (!isValid) {
      return;
    }

    // Déterminer les allergènes et régimes automatiquement
    const { allergens, regimes } = determineAllergensAndRegimes(
      recipe.ingredients,
    );
    recipe.allergens = allergens;
    recipe.regimes = regimes;

    isSaving = true;
    const toastId = toastService.loading("Sauvegarde en cours...");

    try {
      if (isCreating) {
        // Création
        const created = await recipesStore.createRecipe(recipe);
        toastService.update(toastId, {
          state: "success",
          message: "Recette créée avec succès !",
        });
        // Rediriger vers l'édition
        navigate(`/recipes/${created.uuid}/edit`);
      } else {
        // Mise à jour
        await recipesStore.updateRecipe(recipeId!, {
          title: recipe.title,
          plate: recipe.plate,
          ingredients: JSON.stringify(recipe.ingredients),
          preparation: recipe.preparation,
        });

        // Mettre à jour originalRecipe
        originalRecipe = { ...recipe };

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

  // ============================================================================
  // LIFECYCLE
  // ============================================================================

  onMount(async () => {
    if (!globalState.userId) {
      toastService.error("Vous devez être connecté");
      navigate("/");
      return;
    }

    // Charger les données de référence
    await loadRecipeInfo();

    if (isCreating) {
      // Mode création : initialiser une recette vide
      recipe = {
        uuid: "",
        title: "",
        plate: 100,
        ingredients: [],
        preparation: "",
        materiel: [],
        preparation24h: "",
        astuces: [],
        categories: [],
        saison: [],
      };
      originalRecipe = { ...recipe };
    } else {
      // Mode édition : charger la recette
      isLoading = true;
      try {
        const loaded = await recipesStore.getRecipeByUuid(recipeId!);
        if (!loaded) {
          toastService.error("Recette introuvable");
          navigate("/recipes");
          return;
        }

        // Vérifier les permissions
        const canEditRecipe = await recipesStore.canEditRecipe(recipeId!);
        if (!canEditRecipe) {
          toastService.error("Vous n'avez pas les droits d'édition");
          navigate(`/recipes/${recipeId}`);
          return;
        }

        recipe = {
          ...loaded,
          categories: loaded.categories || [],
          saison: loaded.saison || [],
        };
        originalRecipe = { ...recipe };
        lockedBy = loaded.lockedBy || null;

        // Acquérir le verrou
        await acquireLock();
      } catch (error) {
        console.error("Erreur chargement:", error);
        toastService.error("Erreur lors du chargement");
        navigate("/recipes");
      } finally {
        isLoading = false;
      }
    }
  });

  // Cleanup au démontage
  $effect(() => {
    return () => {
      if (isLockedByMe && recipeId) {
        releaseLock();
      }
    };
  });
</script>

<!-- ============================================================================ -->
<!-- TEMPLATE -->
<!-- ============================================================================ -->

<div class="max-w-9xl container mx-auto px-4 py-8">
  <!-- Header -->
  <div class="mb-6 flex items-center justify-between">
    <div class="flex items-center gap-4">
      <button
        onclick={() => navigate("/recipes")}
        class="btn btn-ghost btn-sm"
        aria-label="Retour à la liste des recettes"
        title="Retour à la liste des recettes"
      >
        <ArrowLeft class="h-4 w-4" />
        Retour
      </button>
      <h1 class="text-3xl font-bold">
        {isCreating ? "Nouvelle recette" : `Éditer : ${recipe?.title || ""}`}
      </h1>
    </div>

    <div class="flex items-center gap-2">
      <!-- Lock indicator -->
      {#if isLockedByOthers}
        <div class="badge badge-warning gap-2">
          <Lock class="h-3 w-3" />
          Verrouillé
        </div>
      {:else if isLockedByMe}
        <div class="badge badge-success gap-2">
          <Lock class="h-3 w-3" />
          Vous éditez
        </div>
      {/if}

      <!-- Dirty indicator -->
      {#if isDirty}
        <div class="badge badge-info gap-2">
          <AlertCircle class="h-3 w-3" />
          Non sauvegardé
        </div>
      {/if}

      <!-- Save button -->
      <button
        onclick={save}
        disabled={!canEdit || isSaving || !isDirty}
        class="btn btn-primary"
      >
        <Save class="h-4 w-4" />
        {isSaving ? "Sauvegarde..." : "Sauvegarder"}
      </button>
    </div>
  </div>

  {#if isLoading}
    <div class="flex items-center justify-center py-20">
      <div class="loading loading-spinner loading-lg"></div>
    </div>
  {:else if recipe}
    <!-- Form -->
    <div class="space-y-6">
      <!-- Métadonnées de base -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title mb-4">
            <BookOpen class="h-5 w-5" />
            Informations générales
          </h2>

          <div class="flex flex-col gap-6">
            <!-- Titre et Couverts -->
            <div class="flex flex-wrap gap-4">
              <fieldset class="fieldset w-96">
                <legend class="fieldset-legend">Titre de la recette</legend>
                <label
                  class="input {validationErrors.title ? 'input-error' : ''}"
                >
                  <BookOpen class="h-4 w-4 opacity-50" />
                  <input
                    id="recipe-title"
                    type="text"
                    bind:value={recipe.title}
                    placeholder="Ex: Houmous maison"
                    disabled={!canEdit}
                    maxlength="100"
                    aria-describedby="title-help"
                    aria-required="true"
                  />
                </label>
                <div class="fieldset-label" id="title-help">
                  <span class="fieldset-label-text-alt opacity-70"
                    >Maximum 100 caractères</span
                  >
                  {#if validationErrors.title}
                    <span class="fieldset-label-text-alt text-error"
                      >{validationErrors.title}</span
                    >
                  {/if}
                </div>
              </fieldset>

              <fieldset class="fieldset">
                <legend class="fieldset-legend">Nombre de couverts</legend>
                <label class="input">
                  <Utensils class="h-4 w-4 opacity-50" />
                  <input
                    id="recipe-plate"
                    type="number"
                    bind:value={recipe.plate}
                    min="1"
                    max="10000"
                    disabled={!canEdit}
                    aria-describedby="plate-help"
                    aria-required="true"
                  />
                </label>
                <div class="fieldset-label" id="title-help">
                  <span class="fieldset-label-text-alt opacity-70"
                    >A de couverts correspondent les quantités indiquées</span
                  >
                </div>
              </fieldset>
            </div>

            <!-- Type et Catégories -->
            <div class="flex flex-col gap-4 sm:flex-row sm:items-start">
              <fieldset class="fieldset sm:w-auto">
                <legend class="fieldset-legend">Type de recette</legend>
                <label
                  class="select {validationErrors.typeR ? 'select-error' : ''}"
                >
                  <ChefHat class="h-4 w-4 opacity-50" />
                  <select
                    id="recipe-type"
                    bind:value={recipe.typeR}
                    disabled={!canEdit}
                    aria-describedby="type-help"
                  >
                    <option value="">Sélectionner un type</option>
                    <option value="entree">Entrée</option>
                    <option value="plat">Plat</option>
                    <option value="dessert">Dessert</option>
                    <option value="accompagnement">Autre</option>
                  </select>
                </label>
                {#if validationErrors.typeR}
                  <div class="fieldset-label">
                    <span class="fieldset-label-text-alt text-error"
                      >{validationErrors.typeR}</span
                    >
                  </div>
                {/if}
              </fieldset>

              <div class="flex-1 sm:max-w-md">
                {#if recipeInfo && recipeInfo.categories && recipe.categories}
                  <MultiSelect
                    options={recipeInfo.categories}
                    bind:selected={recipe.categories}
                    label="Sous-Catégories"
                    placeholder="Rechercher une catégorie..."
                    disabled={!canEdit}
                    closeOnSelect={true}
                  />
                {/if}
              </div>
            </div>

            <!-- Température et Cuisson -->
            <div class="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div class="flex-1 sm:max-w-xs">
                <div class="label flex gap-1">
                  <Thermometer class="h-4 w-4" />
                  <span>Température de service</span>
                </div>
                <label
                  class="select w-full {validationErrors.serveHot
                    ? 'select-error'
                    : ''}"
                >
                  <select
                    id="recipe-servehot"
                    bind:value={recipe.serveHot}
                    disabled={!canEdit}
                  >
                    <option value={null}>--</option>
                    <option value={true}>Chaud</option>
                    <option value={false}>Froid</option>
                  </select>
                </label>
                {#if validationErrors.serveHot}
                  <div class="fieldset-label">
                    <span class="fieldset-label-text-alt text-error"
                      >{validationErrors.serveHot}</span
                    >
                  </div>
                {/if}
              </div>

              <div class="flex-1 sm:max-w-xs">
                <div class="label flex gap-1">
                  <Flame class="h-4 w-4" />
                  <span>Nécessite une cuisson</span>
                </div>
                <label
                  class="select w-full {validationErrors.cuisson
                    ? 'select-error'
                    : ''}"
                >
                  <select bind:value={recipe.cuisson} disabled={!canEdit}>
                    <option value={null}>--</option>
                    <option value={true}>Oui</option>
                    <option value={false}>Non</option>
                  </select>
                </label>
                {#if validationErrors.cuisson}
                  <div class="fieldset-label">
                    <span class="fieldset-label-text-alt text-error"
                      >{validationErrors.cuisson}</span
                    >
                  </div>
                {/if}
              </div>
            </div>

            <!-- Le reste -->
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <!-- Saison -->
              <fieldset class="fieldset">
                <legend class="fieldset-legend">Saisons</legend>
                <div class="flex flex-wrap gap-2">
                  {#each [{ value: "printemps", label: "Printemps" }, { value: "ete", label: "Été" }, { value: "automne", label: "Automne" }, { value: "hiver", label: "Hiver" }] as season}
                    <label class="flex cursor-pointer items-center gap-1">
                      <input
                        type="checkbox"
                        bind:group={recipe.saison}
                        value={season.value}
                        disabled={!canEdit}
                        class="checkbox checkbox-sm"
                      />
                      <span class="text-sm">{season.label}</span>
                    </label>
                  {/each}
                </div>
              </fieldset>

              <!-- Spécialité -->
              <fieldset class="fieldset">
                <legend class="fieldset-legend">Spécialité</legend>
                <label class="input">
                  <MapPin class="h-4 w-4 opacity-50" />
                  <input
                    type="text"
                    bind:value={recipe.specialite}
                    placeholder="Ex: Basque, Italien"
                    disabled={!canEdit}
                    maxlength="50"
                  />
                </label>
              </fieldset>

              <!-- Matériel nécessaire -->
              {#if recipe.materiel && recipeInfo && recipeInfo.materiel}
                <div class="lg:col-span-1">
                  <MultiSelect
                    options={recipeInfo.materiel}
                    bind:selected={recipe.materiel}
                    label="Matériel nécessaire"
                    placeholder="Rechercher du matériel..."
                    disabled={!canEdit}
                  />
                </div>
              {/if}
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        <!-- Ingrédients -->
        <div
          class="card bg-base-100 shadow-xl {validationErrors.ingredients
            ? 'ring-error ring-2'
            : ''}"
        >
          <div class="card-body">
            <h2 class="card-title mb-4">
              <Utensils class="h-5 w-4" />
              Ingrédients
            </h2>
            <!-- Éditeur d'ingrédients -->
            <RecipeIngredientsEditor
              bind:ingredients={recipe.ingredients}
              disabled={!canEdit}
            />
            {#if validationErrors.ingredients && recipe.ingredients.length === 0}
              <div class="alert alert-error mt-4">
                <span class="text-sm">{validationErrors.ingredients}</span>
              </div>
            {/if}
          </div>
        </div>

        <!-- Préparation -->
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title mb-4">
              <FileText class="h-5 w-5" />
              Préparation
            </h2>

            <fieldset class="fieldset">
              <legend class="fieldset-legend"
                >Instructions de préparation</legend
              >
              <label
                class="textarea h-64 w-full {validationErrors.preparation
                  ? 'textarea-error'
                  : ''}"
              >
                <textarea
                  id="recipe-preparation"
                  bind:value={recipe.preparation}
                  placeholder="Décrivez les étapes de préparation..."
                  disabled={!canEdit}
                  class="h-full w-full resize-none bg-transparent outline-none {validationErrors.preparation
                    ? 'textarea-error'
                    : ''}"
                  aria-describedby="preparation-help"
                  aria-required="true"
                ></textarea>
              </label>
              {#if validationErrors.preparation}
                <div class="fieldset-label">
                  <span class="fieldset-label-text-alt text-error"
                    >{validationErrors.preparation}</span
                  >
                </div>
              {/if}
            </fieldset>

            <!-- Préparation 24h -->
            <fieldset class="fieldset mt-4">
              <legend class="fieldset-legend">
                <Clock class="inline h-4 w-4" />
                Préparation 24h à l'avance (optionnel)
              </legend>
              <label class="textarea h-fit w-full">
                <textarea
                  id="recipe-preparation24h"
                  bind:value={recipe.preparation24h}
                  placeholder="Étapes à réaliser la veille..."
                  disabled={!canEdit}
                  class="h-full w-full resize-none bg-transparent outline-none"
                ></textarea>
              </label>
            </fieldset>
          </div>
        </div>
      </div>

      <!-- Astuces -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title mb-4">
            <Lightbulb class="h-5 w-5" />
            Astuces et conseils
          </h2>

          <fieldset class="fieldset">
            <legend class="fieldset-legend">Astuces (optionnel)</legend>
            <label class="textarea h-32">
              <textarea
                id="recipe-astuces"
                bind:value={recipe.astucesInput}
                placeholder="Partagez vos astuces et conseils..."
                disabled={!canEdit}
                class="h-full w-full resize-none bg-transparent outline-none"
                aria-describedby="astuces-help"
              ></textarea>
            </label>
            <div class="fieldset-label" id="astuces-help">
              <span class="fieldset-label-text-alt opacity-70"
                >Une astuce par ligne</span
              >
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  {/if}
</div>
