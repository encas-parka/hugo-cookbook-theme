<script lang="ts">
  import { Search, Plus, ChefHat, X, LoaderCircle } from "@lucide/svelte";
  import { recipesStore } from "$lib/stores/RecipesStore.svelte";
  import type { RecipeData, RecipeIndexEntry } from "$lib/types/recipes.types";
  import { keyboardNavigation } from "$lib/attachments/keyboardNavigation.svelte";

  interface Props {
    onSelect: (
      recipe: RecipeIndexEntry,
      type: "entree" | "plat" | "dessert",
      plates: number,
    ) => void;
    defaultPlates?: number;
    autoFocus?: boolean;
    onEmptySubmit?: () => void;
  }

  let {
    onSelect,
    defaultPlates = 4,
    autoFocus = false,
    onEmptySubmit,
  }: Props = $props();

  let searchQuery = $state("");
  let selectedType = $state<"entree" | "plat" | "dessert" | "">("");
  let plates = $state(defaultPlates);
  let selectedRecipe = $state<RecipeIndexEntry | null>(null);
  let isLoadingDetails = $state(false);
  let selectedIndex = $state(-1); // Index de l'élément sélectionné avec le clavier

  // Filtrage des recettes
  let filteredRecipes = $derived(
    searchQuery.length > 1
      ? recipesStore.searchRecipes(searchQuery).slice(0, 5) // Limiter à 5 résultats
      : [],
  );

  // Gérer le selectedIndex de manière réactive
  $effect(() => {
    if (filteredRecipes.length > 0 && selectedIndex === -1) {
      selectedIndex = 0; // Sélectionner le premier élément par défaut
    } else if (filteredRecipes.length === 0) {
      selectedIndex = -1; // Réinitialiser si aucun résultat
    }
  });

  function reset() {
    selectedRecipe = null;
    searchQuery = "";
    selectedType = "";
    plates = defaultPlates;
    selectedIndex = -1;
  }

  function handleSelectRecipe(indexEntry: RecipeIndexEntry) {
    selectedRecipe = indexEntry;
    // Utiliser le type de la recette s'il est disponible, sinon "plat"
    const typeFromIndex =
      (indexEntry.t as "entree" | "plat" | "dessert") || "plat";
    selectedType = selectedType ? selectedType : typeFromIndex;
    // Auto-confirmation immédiate lorsque la recette est sélectionnée
    onSelect(indexEntry, selectedType, plates);
    reset();
  }

  function handleKeydown(event: KeyboardEvent) {
    if (!filteredRecipes.length) return;

    // Gérer la navigation avec les flèches
    if (event.key === "ArrowDown") {
      event.preventDefault();
      selectedIndex = (selectedIndex + 1) % filteredRecipes.length;
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      selectedIndex =
        selectedIndex <= 0 ? filteredRecipes.length - 1 : selectedIndex - 1;
    }
    // Gérer la sélection avec Entrée ou Tab
    else if (
      (event.key === "Enter" || event.key === "Tab") &&
      selectedIndex >= 0
    ) {
      event.preventDefault();
      handleSelectRecipe(filteredRecipes[selectedIndex]);
    }
  }

  const uniqueId = Math.random().toString(36).slice(2);
</script>

<div class="card bg-base-100 border-base-300 border shadow-sm">
  <div class="card-body gap-3 p-3">
    <div class="flex items-center justify-between">
      <h4 class="flex items-center gap-2 font-bold">
        <Plus class="text-primary h-4 w-4" />
        Ajouter une recette
      </h4>
    </div>

    {#if !selectedRecipe}
      <!-- Mode Recherche -->
      <div class="mt-2">
        <label class="input input-accent w-full">
          <Search class="h-4 w-4 opacity-50" />
          <input
            type="text"
            placeholder="Rechercher une recette..."
            class=""
            bind:value={searchQuery}
            onkeydown={handleKeydown}
            {@attach keyboardNavigation({
              shouldFocus: autoFocus,
              onEmptySubmit: onEmptySubmit,
            })}
          />
          {#if isLoadingDetails}
            <div class="absolute top-1/2 right-3 -translate-y-1/2">
              <LoaderCircle class="text-primary h-4 w-4 animate-spin" />
            </div>
          {/if}
        </label>

        {#if searchQuery.length > 1 && filteredRecipes.length === 0}
          <div class="text-base-content/60 mt-2 py-2 text-center text-xs">
            Aucune recette trouvée
          </div>
        {/if}

        {#if filteredRecipes.length > 0}
          <ul class="menu bg-base-200/50 rounded-box mt-2 gap-1 p-1">
            {#each filteredRecipes as recipe, index (recipe.u)}
              <li>
                <button
                  class="flex items-center gap-2 py-2 text-left {index ===
                    selectedIndex && 'ring-accent/40 ring-2'} "
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
            <div class="truncate font-medium">{selectedRecipe.n}</div>
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
            <label class="label py-1 text-xs" for={`type-${uniqueId}`}
              >Type</label
            >
            <select
              id={`type-${uniqueId}`}
              class="select select-bordered select-xs w-full"
              bind:value={selectedType}
            >
              <option value="" disabled selected>Sélectionner un type</option>
              <option value="entree">Entrée</option>
              <option value="plat">Plat</option>
              <option value="dessert">Dessert</option>
            </select>
          </div>
          <div class="">
            <label class="label py-1 text-xs" for={`plates-${uniqueId}`}
              >Couverts</label
            >
            <input
              id={`plates-${uniqueId}`}
              type="number"
              class="input w-full"
              bind:value={plates}
              min="1"
            />
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>
