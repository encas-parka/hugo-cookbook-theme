<script lang="ts">
  import { Search, Plus, ChefHat, X, LoaderCircle } from "@lucide/svelte";
  import { recipesStore } from "../stores/RecipesStore.svelte";
  import type { RecipeData, RecipeIndexEntry } from "../types/recipes.types";

  interface Props {
    onSelect: (
      recipe: RecipeData,
      type: "entree" | "plat" | "dessert",
      plates: number,
    ) => void;
    onCancel: () => void;
    defaultPlates?: number;
  }

  let { onSelect, onCancel, defaultPlates = 4 }: Props = $props();

  let searchQuery = $state("");
  let selectedType = $state<"entree" | "plat" | "dessert">("plat");
  let plates = $state(defaultPlates);
  let selectedRecipe = $state<RecipeData | null>(null);
  let isLoadingDetails = $state(false);

  // Filtrage des recettes
  let filteredRecipes = $derived(
    searchQuery.length > 1
      ? recipesStore.searchRecipes(searchQuery).slice(0, 5) // Limiter à 5 résultats
      : [],
  );

  async function handleSelectRecipe(indexEntry: RecipeIndexEntry) {
    isLoadingDetails = true;
    try {
      const fullRecipe = await recipesStore.getRecipeByUuid(indexEntry.u);
      if (fullRecipe) {
        selectedRecipe = fullRecipe;
        // Auto-détection du type si possible (à implémenter si les données le permettent)
        // Pour l'instant on garde le type sélectionné par défaut
      }
    } catch (error) {
      console.error("Erreur lors du chargement de la recette", error);
    } finally {
      isLoadingDetails = false;
    }
  }

  function handleConfirm() {
    if (selectedRecipe) {
      onSelect(selectedRecipe, selectedType, plates);
    }
  }
</script>

<div class="card bg-base-100 border-base-300 border shadow-sm">
  <div class="card-body gap-3 p-3">
    <div class="flex items-center justify-between">
      <h4 class="flex items-center gap-2 text-sm font-bold">
        <Plus class="text-primary h-4 w-4" />
        Ajouter une recette
      </h4>
      <button class="btn btn-ghost btn-xs btn-square" onclick={onCancel}>
        <X class="h-4 w-4" />
      </button>
    </div>

    {#if !selectedRecipe}
      <!-- Mode Recherche -->
      <div class="">
        <div class="relative">
          <Search
            class="text-base-content/50 absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2"
          />
          <input
            type="text"
            placeholder="Rechercher une recette..."
            class="input input-sm w-full pl-9"
            bind:value={searchQuery}
          />
          {#if isLoadingDetails}
            <div class="absolute top-1/2 right-3 -translate-y-1/2">
              <LoaderCircle class="text-primary h-4 w-4 animate-spin" />
            </div>
          {/if}
        </div>

        {#if searchQuery.length > 1 && filteredRecipes.length === 0}
          <div class="text-base-content/60 mt-2 py-2 text-center text-xs">
            Aucune recette trouvée
          </div>
        {/if}

        {#if filteredRecipes.length > 0}
          <ul class="menu bg-base-200/50 rounded-box mt-2 gap-1 p-1">
            {#each filteredRecipes as recipe}
              <li>
                <button
                  class="flex items-center gap-2 py-2 text-left"
                  onclick={() => handleSelectRecipe(recipe)}
                  disabled={isLoadingDetails}
                >
                  <div class="bg-base-100 rounded p-1">
                    <ChefHat class="h-3 w-3 opacity-70" />
                  </div>
                  <span class="truncate text-sm">{recipe.n}</span>
                </button>
              </li>
            {/each}
          </ul>
        {/if}
      </div>
    {:else}
      <!-- Mode Configuration -->
      <div class="bg-base-200/50 space-y-3 rounded-lg p-3">
        <div class="flex items-start gap-3">
          <div class="bg-primary/10 text-primary rounded-lg p-2">
            <ChefHat class="h-5 w-5" />
          </div>
          <div class="min-w-0 flex-1">
            <div class="truncate font-medium">{selectedRecipe.title}</div>
            <button
              class="text-primary mt-0.5 text-xs hover:underline"
              onclick={() => (selectedRecipe = null)}
            >
              Changer de recette
            </button>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-2">
          <div class="">
            <label class="label py-1 text-xs">Type</label>
            <select
              class="select select-bordered select-xs w-full"
              bind:value={selectedType}
            >
              <option value="entree">Entrée</option>
              <option value="plat">Plat</option>
              <option value="dessert">Dessert</option>
            </select>
          </div>
          <div class="">
            <label class="label py-1 text-xs">Couverts</label>
            <input
              type="number"
              class="input w-full"
              bind:value={plates}
              min="1"
            />
          </div>
        </div>

        <div class="mt-2 flex justify-end gap-2">
          <button class="btn btn-ghost btn-xs" onclick={onCancel}
            >Annuler</button
          >
          <button class="btn btn-primary btn-xs" onclick={handleConfirm}>
            Confirmer
          </button>
        </div>
      </div>
    {/if}
  </div>
</div>
