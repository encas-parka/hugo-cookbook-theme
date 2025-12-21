<script lang="ts">
  import { onMount } from "svelte";
  import { recipesStore } from "$lib/stores/RecipesStore.svelte";
  import type { RecipeForDisplay } from "$lib/types/recipes.types";
  import RecipeHeader from "$lib/components/recipes/RecipeHeader.svelte";
  import RecipeRegimeBadges from "$lib/components/recipes/RecipeRegimeBadges.svelte";
  import { Users } from "@lucide/svelte";
  import RecipeIngredientsList from "$lib/components/recipes/RecipeIngredientsList.svelte";
  import RecipePreparation from "$lib/components/recipes/RecipePreparation.svelte";
  import RecipeAlerts from "$lib/components/recipes/RecipeAlerts.svelte";
  import RecipeAlternatives from "$lib/components/recipes/RecipeAlternatives.svelte";
  import {
    UtensilsCrossed,
    ChefHat,
    PencilIcon,
    ShoppingBasket,
    CookingPot,
  } from "@lucide/svelte";
  import { navigate } from "$lib/services/simple-router.svelte";
  import { navBarStore } from "../stores/NavBarStore.svelte";
  import { globalState } from "../stores/GlobalState.svelte";
  import { onDestroy } from "svelte";

  interface Props {
    params?: { uuid?: string };
  }

  let { params }: Props = $props();

  // État local
  let loading = $state(true);
  let error = $state<string | null>(null);
  let recipeDetails = $state<RecipeForDisplay | null>(null);
  let currentServings = $state(4); // Valeur par défaut

  // Réactivité du lock depuis le store (seule info venant de l'index en temps réel)
  const lockedBy = $derived(
    recipeDetails ? recipesStore.getRecipeLockStatus(recipeDetails.$id) : null,
  );

  // Extraire les allergènes des ingrédients
  const allergens = $derived.by(() => {
    if (!recipeDetails?.ingredients) return [];
    const uniqueAllergens = new Set<string>();
    recipeDetails.ingredients.forEach((ing) => {
      if (ing.allergens && Array.isArray(ing.allergens)) {
        ing.allergens.forEach((a) => uniqueAllergens.add(a));
      }
    });
    return Array.from(uniqueAllergens).sort();
  });

  // Charger la recette
  async function loadRecipe(uuid: string) {
    loading = true;
    error = null;

    try {
      // Charger les détails (source unique de vérité)
      const details = await recipesStore.getRecipeByUuid(uuid);
      if (!details) {
        error = "Impossible de charger les détails de la recette";
        return;
      }
      recipeDetails = details;

      // Initialiser le nombre de couverts
      currentServings = details.plate;
    } catch (err) {
      console.error("Erreur lors du chargement de la recette:", err);
      error = err instanceof Error ? err.message : "Erreur lors du chargement";
    } finally {
      loading = false;
    }
  }

  // Charger au montage
  onMount(() => {
    if (params?.uuid) {
      loadRecipe(params.uuid);
    } else {
      error = "UUID de recette manquant";
      loading = false;
    }
  });

  // Gérer le changement de servings
  function handleServingsChange(servings: number) {
    currentServings = servings;
  }

  // Gérer l'input des servings
  function handleServingsInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = parseInt(target.value);
    if (!isNaN(value) && value > 0) {
      currentServings = value;
    }
  }

  // Créer un index Map pour RecipeAlternatives avec les noms
  const recipesIndexMap = $derived.by(() => {
    const map = new Map();
    recipesStore.recipesIndex.forEach((recipe) => {
      map.set(recipe.$id, { n: recipe.title });
    });
    return map;
  });

  // ============================================================================
  // NAVBAR CONFIGURATION
  // ============================================================================

  $effect(() => {
    navBarStore.setConfig({
      title: recipeDetails?.title || "Recette",
      actions: navActions,
    });
  });

  onDestroy(() => {
    navBarStore.reset();
  });
</script>

{#snippet navActions()}
  {#if globalState.isAuthenticated && recipeDetails}
    <button
      class="btn btn-primary btn-sm"
      onclick={() => navigate(`/recipe/${recipeDetails?.slug}/edit`)}
    >
      <PencilIcon size={18} />
      Éditer
    </button>
  {/if}
{/snippet}

<div class="container mx-auto max-w-6xl px-4 py-8">
  {#if loading}
    <div class="flex items-center justify-center py-20">
      <div class="loading loading-spinner loading-lg"></div>
    </div>
  {:else if error}
    <div class="alert alert-error">
      <div>
        <h3 class="font-bold">Erreur</h3>
        <div>{error}</div>
      </div>
    </div>
  {:else if recipeDetails}
    <!-- En-tête -->
    <div class="mb-4">
      <RecipeHeader
        title={recipeDetails.title}
        author={recipeDetails.auteur || recipeDetails.createdBy}
        category={recipeDetails.typeR}
      />
    </div>

    <div class="flex flex-wrap justify-between gap-2">
      <div class="flex gap-2">
        <!-- Badges température -->
        {#if recipeDetails?.serveHot !== undefined}
          <div class="mb-2">
            {#if recipeDetails.serveHot}
              <span class="badge badge-lg badge-soft badge-warning"
                >Servir Chaud</span
              >
            {:else}
              <span class="badge badge-lg badge-soft badge-info"
                >Servir Froid</span
              >
            {/if}
          </div>
        {/if}

        <!-- Badges cuisson -->
        {#if recipeDetails?.cuisson !== undefined}
          <div class="mb-2">
            {#if recipeDetails.cuisson}
              <span class="badge badge-lg badge-soft badge-warning"
                >Avec Cuisson</span
              >
            {:else}
              <span class="badge badge-lg badge-soft badge-info"
                >Sans Cuisson</span
              >
            {/if}
          </div>
        {/if}
      </div>

      <!-- Badges régimes -->
      {#if recipeDetails?.regime && recipeDetails.regime.length > 0}
        <div class="mb-2">
          <RecipeRegimeBadges regimes={recipeDetails.regime} />
        </div>
      {/if}
    </div>

    <div class="flex flex-wrap items-center justify-between gap-2">
      <!-- Badges matériel -->
      {#if recipeDetails?.materiel && recipeDetails.materiel.length > 0}
        <div class="mb-2 flex flex-wrap gap-2">
          {#each recipeDetails.materiel as item}
            <span class="badge badge-soft badge-neutral">{item}</span>
          {/each}
        </div>
      {/if}

      <!-- Badges allergènes -->
      {#if allergens.length > 0}
        <div
          class="border-error mb-2 flex w-fit flex-wrap gap-2 rounded-xl border px-4 py-2"
        >
          <p class="text-base-content/70 font-semibold">Allergenes :</p>
          {#each allergens as allergen}
            <span class="badge badge-error badge-soft">{allergen}</span>
          {/each}
        </div>
      {/if}
    </div>

    <!-- Description -->
    {#if recipeDetails.description}
      <div class="mb-6">
        <p class="text-base-content/70 text-center italic">
          {recipeDetails.description}
        </p>
      </div>
    {/if}

    <!-- Contrôle des quantités -->
    <div class="my-6 flex flex-wrap items-center justify-between gap-6">
      <div class="flex items-center gap-4">
        <label for="servings-input" class="flex items-center gap-2 font-medium">
          <Users class="h-5 w-5" />
          Nombre de couverts à servir :
        </label>
        <input
          id="servings-input"
          type="number"
          min="1"
          value={currentServings}
          oninput={handleServingsInput}
          class="input input-bordered input-primary w-24"
        />
      </div>

      <!-- Alertes de validation -->
      {#if recipeDetails.check !== undefined}
        <RecipeAlerts
          isChecked={recipeDetails.check}
          defaultServings={recipeDetails.plate}
        />
      {/if}
    </div>

    <!-- Contenu principal : Ingrédients + Préparation -->
    <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
      <!-- Ingrédients (1/3) -->
      <div class="lg:col-span-1">
        <div class="sticky top-4">
          <h2 class="mb-4 flex items-center gap-2 text-2xl font-bold">
            <ShoppingBasket class="h-6 w-6" />
            Ingrédients
          </h2>
          <RecipeIngredientsList
            ingredients={recipeDetails.ingredients}
            servings={currentServings}
            defaultServings={recipeDetails.plate}
          />
        </div>
      </div>

      <!-- Préparation (2/3) -->
      <div class="lg:col-span-2">
        <h2 class="mb-4 flex items-center gap-2 text-2xl font-bold">
          <CookingPot class="h-6 w-6" />
          Préparation
        </h2>
        <RecipePreparation
          preparation={recipeDetails.preparation}
          preparation24h={recipeDetails.preparation24h || undefined}
          astuces={recipeDetails.astuces
            ? JSON.parse(recipeDetails.astuces)
            : []}
        />

        <!-- Préparations alternatives -->
        {#if recipeDetails.prepAlt && recipeDetails.prepAlt.length > 0}
          <div class="mt-8">
            <RecipeAlternatives
              alternatives={recipeDetails.prepAlt.map((id) => ({
                recetteAlt: id,
              }))}
              recipesIndex={recipesIndexMap}
            />
          </div>
        {/if}
      </div>
    </div>

    <!-- Métadonnées -->
    <div class="text-base-content/60 mt-8 text-right text-sm">
      <!-- Published Date not available in new simplified index, maybe in details? -->
      <!-- TODO: Add publishedAt to RecipeForDisplay if needed -->
    </div>
  {/if}
</div>
