<script lang="ts">
  import { Search, X, Users, ChefHat } from "@lucide/svelte";
  import { recipesStore } from "../stores/RecipesStore.svelte";
  import type { RecipeData } from "../types/recipes.types";
  import Modal from "./ui/Modal.svelte";

  interface Props {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (
      recipe: RecipeData,
      type: "entree" | "plat" | "dessert",
      plates: number,
    ) => void;
    defaultPlates?: number;
  }

  let { isOpen, onClose, onSelect, defaultPlates = 100 }: Props = $props();

  let searchQuery = $state("");
  let selectedRecipe = $state<RecipeData | null>(null);
  let plateCount = $state(defaultPlates);
  let selectedType = $state<"entree" | "plat" | "dessert">("plat");

  // Recherche réactive
  let searchResults = $derived.by(() => {
    if (!searchQuery || searchQuery.length < 2) return [];
    return recipesStore.searchRecipes(searchQuery).slice(0, 5);
  });

  function handleRecipeClick(recipe: RecipeData) {
    selectedRecipe = recipe;
    // Tenter de déduire le type si disponible (mapping simple)
    // Note: Le typeR dans Appwrite est déjà "entree" | "plat" | "dessert"
    // Mais RecipeData de Hugo utilise un number (0, 1, 2).
    // On fera le mapping si nécessaire, pour l'instant on laisse "plat" par défaut
  }

  function handleConfirm() {
    if (selectedRecipe) {
      onSelect(selectedRecipe, selectedType, plateCount);
      reset();
    }
  }

  function reset() {
    searchQuery = "";
    selectedRecipe = null;
    plateCount = defaultPlates;
    selectedType = "plat";
    onClose();
  }
</script>

{#if isOpen}
  <Modal title="Ajouter une recette" onClose={reset}>
    <div class="space-y-6">
      <!-- Recherche -->
      <div class="form-control w-full">
        <label class="label" for="recipe-search">
          <span class="label-text">Rechercher une recette</span>
        </label>
        <label class="input input-bordered flex items-center gap-2">
          <Search class="h-4 w-4 opacity-50" />
          <input
            id="recipe-search"
            type="text"
            class="grow"
            placeholder="Nom de la recette..."
            bind:value={searchQuery}
            autoFocus
          />
        </label>
      </div>

      <!-- Résultats de recherche -->
      {#if searchResults.length > 0 && !selectedRecipe}
        <ul class="menu bg-base-200 rounded-box w-full">
          {#each searchResults as recipe}
            <li>
              <button onclick={() => handleRecipeClick(recipe)}>
                <span class="font-medium">{recipe.title}</span>
              </button>
            </li>
          {/each}
        </ul>
      {:else if searchQuery.length >= 2 && searchResults.length === 0 && !selectedRecipe}
        <div class="text-base-content/60 py-4 text-center">
          Aucune recette trouvée
        </div>
      {/if}

      <!-- Configuration de la sélection -->
      {#if selectedRecipe}
        <div class="card bg-base-200">
          <div class="card-body p-4">
            <div class="mb-4 flex items-start justify-between">
              <h4 class="flex items-center gap-2 font-bold">
                <ChefHat class="h-4 w-4" />
                {selectedRecipe.title}
              </h4>
              <button
                class="btn btn-ghost btn-xs"
                onclick={() => (selectedRecipe = null)}
              >
                Changer
              </button>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <!-- Type de plat -->
              <div class="form-control">
                <label class="label" for="recipe-type">
                  <span class="label-text">Type de plat</span>
                </label>
                <select
                  id="recipe-type"
                  class="select select-bordered w-full"
                  bind:value={selectedType}
                >
                  <option value="entree">Entrée</option>
                  <option value="plat">Plat</option>
                  <option value="dessert">Dessert</option>
                </select>
              </div>

              <!-- Nombre de parts -->
              <div class="form-control">
                <label class="label" for="plate-count">
                  <span class="label-text">Nombre de parts</span>
                </label>
                <label class="input input-bordered flex items-center gap-2">
                  <Users class="h-4 w-4 opacity-50" />
                  <input
                    id="plate-count"
                    type="number"
                    min="1"
                    class="grow"
                    bind:value={plateCount}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      {/if}

      <!-- Actions -->
      <div class="modal-action">
        <button class="btn" onclick={reset}>Annuler</button>
        <button
          class="btn btn-primary"
          disabled={!selectedRecipe}
          onclick={handleConfirm}
        >
          Ajouter
        </button>
      </div>
    </div>
  </Modal>
{/if}
