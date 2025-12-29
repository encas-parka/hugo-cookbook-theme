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
  import { Save, Lock, Copy } from "@lucide/svelte";
  import { onDestroy } from "svelte";
  import { navBarStore } from "../stores/NavBarStore.svelte";
  import RecipeHeaderForm from "$lib/components/recipeEdit/RecipeHeaderForm.svelte";
  import RecipePrepaForm from "$lib/components/recipeEdit/RecipePrepaForm.svelte";
  import RecipePermissionsManager from "$lib/components/recipeEdit/RecipePermissionsManager.svelte";
  import UnsavedChangesGuard from "$lib/components/ui/UnsavedChangesGuard.svelte";
  import RecipeMetadata from "$lib/components/recipes/RecipeMetadata.svelte";
  import { generateSlugUuid35 } from "$lib/utils/slugUtils";
  import {
    type RecipeFormState,
    type ValidationError,
    createDefaultRecipe,
    transformStoreDataToForm,
    createRecipeSnapshot,
    normalizeRecipeForAppwrite,
    prepareHugoData,
    normalizeAllIngredients,
    determineAllergensAndRegimes,
    validateRecipe,
  } from "./RecipeEditPage";

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
  // ÉTAT LOCAL
  // ============================================================================

  let recipe = $state<RecipeFormState | null>(null);
  let loaded = $state(false);
  let isLoading = $state(false);
  let isSaving = $state(false);
  let lockedBy = $state<string | null>(null);
  let heartbeatInterval: any = null;
  let initialRecipeSnapshot = $state<string | null>(null);

  // État de validation
  let validationErrors = $state<{ value: ValidationError }>({
    value: {},
  });

  // Calcul de isDirty par comparaison avec le snapshot initial
  const isDirty = $derived.by(() => {
    if (!recipe || !initialRecipeSnapshot) return false;
    return createRecipeSnapshot(recipe) !== initialRecipeSnapshot;
  });

  // Logique réactive pour le brouillon
  $effect(() => {
    if (recipe && recipe.check !== true) {
      recipe.draft = true;
    }
  });

  // ============================================================================
  // DERIVED STATES
  // ============================================================================

  const isCreating = $derived(!recipeId || isAlternativeVersion);
  const isLockedByOthers = $derived.by(
    () => !!lockedBy && lockedBy !== globalState.userId,
  );
  const isLockedByMe = $derived.by(
    () => !!lockedBy && lockedBy === globalState.userId,
  );
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
      recipe = {
        ...createDefaultRecipe(),
        $id: "new-recipe",
      } as RecipeFormState;
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
            recipe = transformStoreDataToForm(data, {
              title: `${data.title} (v-${userName})`,
              $id: "new-recipe",
              $createdAt: undefined,
              $updatedAt: undefined,
              lockedBy: null,
              createdBy: globalState.userId || "",
              permissionWrite: [globalState.userId || ""],
              check: null,
              draft: true,
            });
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
            recipe = transformStoreDataToForm(data, {
              $createdAt: data.$createdAt,
              $updatedAt: data.$updatedAt,
              createdBy: data.createdBy,
            });
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
      initialRecipeSnapshot = createRecipeSnapshot(recipe);
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
  // SAVE
  // ============================================================================

  async function save(): Promise<void> {
    if (!recipe || isSaving || !globalState.userId) return;

    const isValid = validateRecipe(recipe, validationErrors);
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

        const recipeToCreate: any = {
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
        const hugoData = prepareHugoData(recipe, recipeToCreate, {
          id: created.$id,
          createdAt: created.$createdAt,
          updatedAt: created.$updatedAt,
          createdBy: created.createdBy,
        });

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

        const recipeData: any = {
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
        initialRecipeSnapshot = createRecipeSnapshot(recipe);

        // Appel async pour synchroniser vers GitHub
        const hugoUpdateData = prepareHugoData(recipe, recipeData, {
          id: updated.$id,
          createdAt: updated.$createdAt,
          updatedAt: updated.$updatedAt,
          createdBy: updated.createdBy,
        });

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

  // ============================================================================
  // DUPLICATE
  // ============================================================================

  async function duplicate(): Promise<void> {
    if (!recipe || isSaving) return;

    // Créer une nouvelle recette basée sur l'actuelle
    const userName = globalState.userName() || "utilisateur";
    const duplicatedTitle = `${recipe.title} (copie-${userName})`;

    loaded = false;
    // Rediriger vers le mode création avec les données dupliquées
    navigate(`/recipe/${recipeId}/duplicate`);
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

    <!-- Duplicate button -->
    {#if !isCreating}
      <button
        onclick={duplicate}
        disabled={!canEdit || isSaving}
        class="btn btn-secondary btn-soft btn-sm"
      >
        <Copy class="h-4 w-4" />
        Créer une version alternative
      </button>
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
      <RecipeHeaderForm
        bind:recipe
        {recipeInfo}
        validationErrors={validationErrors.value}
        {canEdit}
      />

      <!-- Ingrédients et Préparation -->
      <RecipePrepaForm
        bind:recipe
        validationErrors={validationErrors.value}
        {canEdit}
      />

      <!-- Permissions / Collaborateurs -->
      <RecipePermissionsManager
        bind:permissionWrite={recipe.permissionWrite}
        createdBy={recipe.createdBy}
        {canEdit}
      />

      <!-- Métadonnées système -->
      {#if !isCreating && recipe.$createdAt}
        <RecipeMetadata
          auteur={recipe.auteur}
          createdBy={recipe.createdBy}
          id={recipe.$id ?? ""}
          createdAt={recipe.$createdAt}
          updatedAt={recipe.$updatedAt}
        />
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
