<script lang="ts">
  import { onMount } from "svelte";
  import { recipesStore } from "$lib/stores/RecipesStore.svelte";
  import type { RecipeForDisplay } from "$lib/types/recipes.types";
  import RecipeRegimeBadges from "$lib/components/recipes/RecipeRegimeBadges.svelte";
  import { Users } from "@lucide/svelte";
  import RecipeIngredientsList from "$lib/components/recipes/RecipeIngredientsList.svelte";
  import RecipePreparation from "$lib/components/recipes/RecipePreparation.svelte";
  import RecipeAlerts from "$lib/components/recipes/RecipeAlerts.svelte";
  import RecipeAlternatives from "$lib/components/recipes/RecipeAlternatives.svelte";
  import { ChefHat, PencilIcon } from "@lucide/svelte";
  import { navigate } from "$lib/services/simple-router.svelte";
  import { navBarStore } from "../stores/NavBarStore.svelte";
  import { globalState } from "../stores/GlobalState.svelte";
  import { onDestroy } from "svelte";
  import { getTypeDisplay } from "$lib/utils/recipeUtils";

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

  // Récupérer l'affichage avec la priorité : catégorie > type
  const typeDisplay = $derived.by(() =>
    recipeDetails
      ? getTypeDisplay(recipeDetails.typeR, recipeDetails.categories)
      : { label: "", iconId: "no-cat" },
  );
</script>

{#snippet navActions()}
  {#if globalState.isAuthenticated && recipeDetails}
    {#if recipeDetails.permissionWrite?.includes(globalState.userId) || recipeDetails.createdBy === globalState.userId}
      <button
        class="btn btn-primary btn-sm"
        onclick={() => navigate(`/recipe/${recipeDetails?.$id}/edit`)}
      >
        <PencilIcon size={18} />
        Éditer
      </button>
    {:else}
      <button
        class="btn btn-secondary btn-sm"
        onclick={() => navigate(`/recipe/${recipeDetails?.$id}/duplicate`)}
      >
        <PencilIcon size={18} />
        Créer une version alternative
      </button>
    {/if}
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
    <div class="card bg-base-100">
      <div class="card-body">
        <!-- En-tête -->
        <div class="mb-4 print:mb-2">
          <div class="flex items-center justify-between gap-x-10 gap-y-4">
            <h1
              class="flex items-center gap-3 text-2xl font-bold print:text-xl"
            >
              <svg class="me-2 size-9">
                <use
                  href={`/icons/type/types-sprite.svg#${typeDisplay.iconId}`}
                />
              </svg>
              {recipeDetails.title}
            </h1>

            <!-- Badges régimes -->
            {#if recipeDetails?.regime && recipeDetails.regime.length > 0}
              <div class="">
                <RecipeRegimeBadges
                  regimes={recipeDetails.regime}
                  iconOnly={true}
                />
              </div>
            {/if}
          </div>
          {#if recipeDetails.auteur}
            <p class="text-base-content/60 text-lg print:text-sm">
              une recette de {recipeDetails.auteur}
            </p>
          {/if}
        </div>

        <!-- Description -->
        {#if recipeDetails.description}
          <div class="mb-6 p-6 print:hidden">
            <p class="text-base-content/70 text-center italic print:text-sm">
              {recipeDetails.description}
            </p>
          </div>
        {/if}

        <!-- badge info -->
        <div class="border-base-300 mb-6 border-b pb-4 print:mb-1 print:pb-2">
          <div class="flex flex-wrap items-center justify-between gap-4">
            <!-- Badges allergènes -->

            <div class="flex gap-2">
              <!-- Badges température -->
              {#if recipeDetails?.serveHot !== undefined}
                <div class="mb-2">
                  {#if recipeDetails.serveHot}
                    <span class="badge badge-warning">Servir Chaud</span>
                  {:else}
                    <span class="badge badge-info">Servir Froid</span>
                  {/if}
                </div>
              {/if}

              <!-- Badges cuisson -->
              {#if recipeDetails?.cuisson !== undefined}
                <div class="mb-2">
                  {#if recipeDetails.cuisson}
                    <span class="badge badge-warning">Avec Cuisson</span>
                  {:else}
                    <span class="badge badge-info">Sans Cuisson</span>
                  {/if}
                </div>
              {/if}
            </div>

            {#if allergens.length > 0}
              <div class="flex w-fit flex-wrap items-center gap-2">
                <span class="text-base-content/70 font-semibold"
                  >Allergenes :</span
                >
                {#each allergens as allergen}
                  <span class="badge badge-error">{allergen}</span>
                {/each}
              </div>
            {/if}
            <!-- Badges matériel -->
            {#if recipeDetails?.materiel && recipeDetails.materiel.length > 0}
              <div class="flex flex-wrap gap-2">
                {#each recipeDetails.materiel as item}
                  <span class="badge">{item}</span>
                {/each}
              </div>
            {/if}
          </div>
        </div>

        <!-- Contrôle des quantités -->
        <div
          class="my-6 flex flex-wrap items-center justify-between gap-6 print:hidden"
        >
          <div class="flex items-center gap-4">
            <label
              for="servings-input"
              class="flex items-center gap-2 font-medium"
            >
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

        <div class="flex justify-between">
          <p class="print-only font-medium">
            Quantité pour {currentServings} couverts
          </p>
          {#if recipeDetails.quantite_desc}
            <p class="text-end text-base">{recipeDetails.quantite_desc}</p>
          {/if}
        </div>
        <!-- Contenu principal : Ingrédients + Préparation -->
        <div
          class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3 print:mt-2 print:grid-cols-10 print:gap-4"
          style="break-before: avoid;"
        >
          <!-- Ingrédients (1/3 à l'écran, 3/10 à l'impression) -->
          <div class=" lg:col-span-1 print:col-span-4">
            <div class="sticky top-4 print:static">
              <RecipeIngredientsList
                ingredients={recipeDetails.ingredients}
                servings={currentServings}
                defaultServings={recipeDetails.plate}
              />
            </div>
          </div>

          <!-- Préparation (2/3 à l'écran, 7/10 à l'impression) -->
          <div class="lg:col-span-2 print:col-span-6">
            <RecipePreparation
              preparation={recipeDetails.preparation}
              preparation24h={recipeDetails.preparation24h || undefined}
              astuces={recipeDetails.astuces || []}
            />

            <!-- Préparations alternatives -->
            {#if recipeDetails.prepAlt && recipeDetails.prepAlt.length > 0}
              <div class="mt-8 print:hidden">
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
      </div>
    </div>

    <!-- Métadonnées -->
    <div class="text-base-content/60 mt-8 text-right text-sm">
      <!-- Published Date not available in new simplified index, maybe in details? -->
      <!-- TODO: Add publishedAt to RecipeForDisplay if needed -->
    </div>
  {/if}
</div>
