<script lang="ts">
  import { onMount } from "svelte";
  import { recipesStore } from "$lib/stores/RecipesStore.svelte";
  import type { RecipeForDisplay } from "$lib/types/recipes.types";
  import RecipeHeader from "$lib/components/recipes/RecipeHeader.svelte";
  import RecipeBadges from "$lib/components/recipes/RecipeBadges.svelte";
  import RecipeQuantityControl from "$lib/components/recipes/RecipeQuantityControl.svelte";
  import RecipeIngredientsList from "$lib/components/recipes/RecipeIngredientsList.svelte";
  import RecipePreparation from "$lib/components/recipes/RecipePreparation.svelte";
  import RecipeAlerts from "$lib/components/recipes/RecipeAlerts.svelte";
  import RecipeAlternatives from "$lib/components/recipes/RecipeAlternatives.svelte";
  import { UtensilsCrossed, ChefHat } from "@lucide/svelte";

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

  // Créer un index Map pour RecipeAlternatives avec les noms
  const recipesIndexMap = $derived.by(() => {
    const map = new Map();
    recipesStore.recipesIndex.forEach((recipe) => {
      map.set(recipe.slug, { n: recipe.title });
    });
    return map;
  });
</script>

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
    <RecipeHeader
      title={recipeDetails.title}
      author={recipeDetails.auteur || recipeDetails.createdBy || "Inconnu"}
      category={recipeDetails.typeR}
    />

    <!-- Badges -->
    <div class="mb-6">
      <RecipeBadges
        temperature={recipeDetails.serveHot ? "Chaud" : "Froid"}
        cuisson={recipeDetails.cuisson}
        regimes={recipeDetails.regime || []}
        materiel={recipeDetails.materiel || []}
        {allergens}
      />
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
    <div class="mb-6">
      <RecipeQuantityControl
        defaultServings={recipeDetails.plate}
        {currentServings}
        onServingsChange={handleServingsChange}
      />
    </div>

    <!-- Alertes de validation -->
    {#if recipeDetails.check !== undefined}
      <div class="mb-6">
        <RecipeAlerts
          isChecked={recipeDetails.check}
          defaultServings={recipeDetails.plate}
        />
      </div>
    {/if}

    <!-- Contenu principal : Ingrédients + Préparation -->
    <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
      <!-- Ingrédients (1/3) -->
      <div class="lg:col-span-1">
        <div class="sticky top-4">
          <h2 class="mb-4 flex items-center gap-2 text-2xl font-bold">
            <UtensilsCrossed class="h-6 w-6" />
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
          <ChefHat class="h-6 w-6" />
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
