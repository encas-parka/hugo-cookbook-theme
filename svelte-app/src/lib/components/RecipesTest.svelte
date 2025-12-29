<script lang="ts">
  import { onMount } from "svelte";
  import { recipesStore } from "../stores/RecipesStore.svelte";
  import type { RecipeData } from "../types/recipes.types";
  import { RecettesTypeR } from "../types/recipes.types";

  let searchQuery = $state("");
  let selectedType = $state<RecettesTypeR | "">("");
  let selectedRecipe = $state<RecipeData | null>(null);
  let loadingDetail = $state(false);

  // Résultats filtrés
  const filteredRecipes = $derived.by(() => {
    let results = recipesStore.recipesIndex;

    // Filtre par recherche
    if (searchQuery.trim()) {
      results = recipesStore.searchRecipes(searchQuery);
    }

    // Filtre par type
    if (selectedType !== "") {
      results = results.filter((recipe) => recipe.typeR === selectedType);
    }

    return results;
  });

  // Types de recettes
  const recipeTypes = [
    { value: RecettesTypeR.ENTREE, label: "Entrée" },
    { value: RecettesTypeR.PLAT, label: "Plat" },
    { value: RecettesTypeR.DESSERT, label: "Dessert" },
  ];

  async function loadRecipeDetails(uuid: string) {
    loadingDetail = true;
    try {
      selectedRecipe = await recipesStore.getRecipeByUuid(uuid);
    } catch (error) {
      console.error("Erreur de chargement:", error);
    } finally {
      loadingDetail = false;
    }
  }

  onMount(async () => {
    try {
      await recipesStore.initialize();
    } catch (error) {
      console.error("Erreur d'initialisation:", error);
    }
  });
</script>

<div class="container mx-auto p-4">
  <h1 class="mb-4 text-2xl font-bold">Test RecipesStore</h1>

  {#if recipesStore.loading}
    <div class="alert alert-info">
      <span>Chargement des recettes...</span>
    </div>
  {:else if recipesStore.error}
    <div class="alert alert-error">
      <span>Erreur: {recipesStore.error}</span>
    </div>
  {:else}
    <!-- Stats -->
    <div class="stats mb-4 shadow">
      <div class="stat">
        <div class="stat-title">Total Recettes</div>
        <div class="stat-value">{recipesStore.count}</div>
      </div>

      <div class="stat">
        <div class="stat-title">Types</div>
        <div class="stat-value">{recipesStore.availableTypes.length}</div>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <!-- Liste des recettes -->
      <div>
        <h2 class="mb-3 text-xl font-semibold">Index des Recettes</h2>

        <!-- Filtres -->
        <div class="mb-4 flex gap-2">
          <input
            type="text"
            placeholder="Rechercher..."
            class="input input-bordered flex-1"
            bind:value={searchQuery}
          />
          <select class="select select-bordered" bind:value={selectedType}>
            <option value="">Tous types</option>
            {#each recipeTypes as type}
              <option value={type.value}>{type.label}</option>
            {/each}
          </select>
        </div>

        <!-- Liste -->
        <div class="max-h-[600px] overflow-y-auto">
          <table class="table-sm table-zebra table">
            <thead class="bg-base-200 sticky top-0">
              <tr>
                <th>Nom</th>
                <th>Type</th>
                <th>Couverts</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {#each filteredRecipes as recipe (recipe.$id)}
                <tr>
                  <td class="font-medium">{recipe.title}</td>
                  <td>
                    <span class="badge badge-sm badge-outline">
                      {recipeTypes.find((t) => t.value === recipe.typeR)
                        ?.label || recipe.typeR}
                    </span>
                  </td>
                  <td>
                    <code class="text-xs">{recipe.$id.substring(0, 6)}</code>
                  </td>
                  <td>
                    <button
                      class="btn btn-xs btn-primary"
                      onclick={() => loadRecipeDetails(recipe.$id)}
                    >
                      Détails
                    </button>
                  </td>
                </tr>
              {:else}
                <tr>
                  <td colspan="4" class="text-center text-gray-400">
                    Aucune recette trouvée
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>

        <div class="mt-2 text-sm text-gray-500">
          Affichage de {filteredRecipes.length} / {recipesStore.count} recettes
        </div>
      </div>

      <!-- Détails de la recette sélectionnée -->
      <div>
        <h2 class="mb-3 text-xl font-semibold">Détails de la Recette</h2>

        {#if loadingDetail}
          <div class="flex h-64 items-center justify-center">
            <span class="loading loading-spinner loading-lg"></span>
          </div>
        {:else if selectedRecipe}
          <div class="card bg-base-200 shadow-xl">
            <div class="card-body">
              <h3 class="card-title">{selectedRecipe.title}</h3>

              <div class="divider">Informations</div>
              <div class="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span class="font-semibold">UUID:</span>
                  <code class="ml-2 text-xs">{selectedRecipe.$id}</code>
                </div>
                <div>
                  <span class="font-semibold">Couverts:</span>
                  <span class="ml-2">{selectedRecipe.plate}</span>
                </div>
              </div>

              <div class="divider">
                Ingrédients ({selectedRecipe.ingredients.length})
              </div>
              <div class="max-h-64 overflow-x-auto">
                <table class="table-xs table">
                  <thead>
                    <tr>
                      <th>Ingrédient</th>
                      <th>Qté Orig.</th>
                      <th>Qté Norm.</th>
                      <th>Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {#each selectedRecipe.ingredients as ing}
                      <tr>
                        <td>
                          <code class="text-xs">{ing.uuid}</code>
                          {#if ing.comment}
                            <br /><span class="text-xs italic"
                              >{ing.comment}</span
                            >
                          {/if}
                        </td>
                        <td>{ing.originalQuantity} {ing.originalUnit}</td>
                        <td class="font-medium">
                          {ing.normalizedQuantity}
                          {ing.normalizedUnit}
                        </td>
                        <td>
                          <span class="badge badge-xs">{ing.type}</span>
                          {#if ing.allergens.length > 0}
                            <br />
                            {#each ing.allergens as allergen}
                              <span class="badge badge-warning badge-xs"
                                >{allergen}</span
                              >
                            {/each}
                          {/if}
                        </td>
                      </tr>
                    {/each}
                  </tbody>
                </table>
              </div>

              {#if selectedRecipe.preparation}
                <div class="divider">Préparation</div>
                <div class="prose prose-sm max-w-none">
                  <pre
                    class="text-xs whitespace-pre-wrap">{selectedRecipe.preparation}</pre>
                </div>
              {/if}
            </div>
          </div>
        {:else}
          <div class="alert alert-info">
            <span>Sélectionnez une recette pour voir ses détails</span>
          </div>
        {/if}
      </div>
    </div>
  {/if}
</div>
