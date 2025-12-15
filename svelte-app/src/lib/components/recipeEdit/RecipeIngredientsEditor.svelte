<script lang="ts">
  import type { RecipeIngredient } from "$lib/types/recipes.types";
  import QuantityInput from "$lib/components/ui/QuantityInput.svelte";
  import { ingredientsStore } from "$lib/stores/IngredientsStore.svelte";
  import { getProductTypeInfo } from "$lib/utils/products-display";
  import {
    Plus,
    Trash2,
    AlertTriangle,
    Search,
    Package,
    Bean,
    Beef,
    Carrot,
    CandyCane,
    Egg,
    ChefHat,
    Leaf,
    Refrigerator,
    ChevronDown,
  } from "@lucide/svelte";
  import { nanoid } from "nanoid";

  // ============================================================================
  // PROPS
  // ============================================================================

  interface Props {
    ingredients: RecipeIngredient[];
    disabled?: boolean;
  }

  let { ingredients = $bindable(), disabled = false }: Props = $props();

  // ============================================================================
  // ÉTAT LOCAL
  // ============================================================================

  let searchQuery = $state("");
  let selectedIndex = $state(-1);
  let isOpen = $state(false);
  let containerRef: HTMLDivElement | undefined = $state();
  let inputRef: HTMLInputElement | undefined = $state();

  // Filtrage des ingrédients depuis le store
  let filteredIngredients = $derived(
    searchQuery.length > 1
      ? ingredientsStore.searchIngredients(searchQuery)
      : [],
  );

  // Grouper les ingrédients par type
  let groupedIngredients = $derived(() => {
    const groups: Record<string, RecipeIngredient[]> = {};

    ingredients.forEach((ingredient) => {
      const type = ingredient.type || "autres";
      if (!groups[type]) {
        groups[type] = [];
      }
      groups[type].push(ingredient);
    });

    // Trier alphabétiquement dans chaque groupe
    Object.keys(groups).forEach((type) => {
      groups[type].sort((a, b) =>
        a.name.localeCompare(b.name, "fr", { sensitivity: "base" }),
      );
    });

    return groups;
  });

  // Gérer le selectedIndex de manière réactive
  $effect(() => {
    if (filteredIngredients.length > 0 && selectedIndex === -1) {
      selectedIndex = 0;
    } else if (filteredIngredients.length === 0) {
      selectedIndex = -1;
    }
  });

  // Réinitialiser l'index surligné quand les options changent
  $effect(() => {
    if (
      filteredIngredients.length > 0 &&
      selectedIndex >= filteredIngredients.length
    ) {
      selectedIndex = 0;
    }
  });

  // Gestion du click outside
  $effect(() => {
    if (isOpen) {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef && !containerRef.contains(event.target as Node)) {
          isOpen = false;
          searchQuery = "";
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  });

  // ============================================================================
  // FONCTIONS
  // ============================================================================

  function addIngredientFromSearch(ingredientUuid: string) {
    const ingredientData = ingredientsStore.getIngredientByUuid(ingredientUuid);
    if (!ingredientData) return;

    // Vérifier si déjà ajouté
    const alreadyExists = ingredients.some(
      (ing) => ing.name === ingredientData.n,
    );
    if (alreadyExists) {
      searchQuery = "";
      isOpen = false;
      return;
    }

    const newIngredient: RecipeIngredient = {
      uuid: nanoid(),
      name: ingredientData.n,
      originalQuantity: 0,
      originalUnit: "g",
      normalizedQuantity: 0,
      normalizedUnit: "g",
      comment: "",
      allergens: ingredientData.a || [],
      type: ingredientData.t || "",
    };

    ingredients = [...ingredients, newIngredient];
    searchQuery = "";
    isOpen = false;
    selectedIndex = -1;
  }

  function openDropdown() {
    if (!disabled) {
      isOpen = true;
      selectedIndex = 0;
    }
  }

  function closeDropdown() {
    isOpen = false;
    searchQuery = "";
    selectedIndex = -1;
  }

  function toggleDropdown() {
    if (isOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  }

  function removeIngredient(uuid: string) {
    ingredients = ingredients.filter((ing) => ing.uuid !== uuid);
  }

  function handleKeydown(event: KeyboardEvent) {
    if (disabled) return;

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        if (!isOpen) {
          openDropdown();
        } else if (selectedIndex < filteredIngredients.length - 1) {
          selectedIndex++;
        }
        break;

      case "ArrowUp":
        event.preventDefault();
        if (isOpen && selectedIndex > 0) {
          selectedIndex--;
        }
        break;

      case "Enter":
        event.preventDefault();
        if (isOpen && filteredIngredients.length > 0) {
          addIngredientFromSearch(filteredIngredients[selectedIndex].u);
        } else if (!isOpen) {
          openDropdown();
        }
        break;

      case "Escape":
        event.preventDefault();
        closeDropdown();
        inputRef?.blur();
        break;

      case "Tab":
        if (isOpen) {
          closeDropdown();
        }
        break;
    }
  }
</script>

<div class="space-y-4">
  <!-- Recherche et ajout d'ingrédient -->
  <div class="card bg-base-100 border-base-300 border shadow-sm">
    <div class="card-body gap-3 p-3">
      <h4 class="flex items-center gap-2 font-bold">
        <Plus class="text-primary h-4 w-4" />
        Ajouter un ingrédient
      </h4>

      <div class="mt-2" bind:this={containerRef}>
        <div class="relative">
          <!-- Input container -->
          <div
            class="input flex w-full items-center gap-2 pr-10 {disabled
              ? 'input-disabled'
              : ''}"
          >
            <Search class="h-4 w-4 opacity-50" />
            <input
              bind:this={inputRef}
              type="text"
              bind:value={searchQuery}
              placeholder="Rechercher un ingrédient..."
              {disabled}
              class="w-full bg-transparent outline-none"
              onfocus={openDropdown}
              onkeydown={handleKeydown}
              autocomplete="off"
              role="combobox"
              aria-expanded={isOpen}
              aria-controls="ingredients-list"
              aria-activedescendant={isOpen
                ? `ingredient-${selectedIndex}`
                : undefined}
            />
          </div>

          <!-- Dropdown toggle button -->
          <button
            type="button"
            class="btn btn-ghost btn-sm absolute top-1/2 right-1 -translate-y-1/2"
            onclick={toggleDropdown}
            {disabled}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <ChevronDown
              class="h-4 w-4 transition-transform {isOpen ? 'rotate-180' : ''}"
            />
          </button>

          <!-- Dropdown options -->
          {#if isOpen}
            <div
              id="ingredients-list"
              class="border-base-300 bg-base-100 absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-lg border shadow-lg"
              role="listbox"
            >
              {#if searchQuery.length > 1 && filteredIngredients.length === 0}
                <div class="text-base-content/50 px-4 py-2 text-sm">
                  Aucun ingrédient trouvé
                </div>
              {:else if filteredIngredients.length > 0}
                {#each filteredIngredients as ingredient, index (ingredient.u)}
                  <button
                    type="button"
                    id="ingredient-{index}"
                    class="hover:bg-base-200 flex w-full items-center gap-3 px-4 py-3 text-left hover:cursor-pointer {index ===
                    selectedIndex
                      ? 'bg-base-200'
                      : ''}"
                    onclick={() => addIngredientFromSearch(ingredient.u)}
                    onmouseenter={() => (selectedIndex = index)}
                    role="option"
                    {disabled}
                  >
                    <div class="flex-1">
                      <span class="truncate text-sm font-medium"
                        >{ingredient.n}</span
                      >
                    </div>
                  </button>
                {/each}
              {:else if searchQuery.length <= 1}
                <div class="text-base-content/50 px-4 py-2 text-sm">
                  Tapez au moins 2 caractères pour rechercher
                </div>
              {/if}
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>

  <!-- Liste des ingrédients groupés par type -->
  {#if ingredients.length > 0}
    {#each Object.entries(groupedIngredients()) as [type, typeIngredients] (type)}
      {@const typeInfo = getProductTypeInfo(type)}
      {@const TypeIcon = typeInfo.icon}

      <!-- Card pour le type -->
      <div class="card bg-base-200/50 border-base-300 border shadow-sm">
        <div class="card-body p-2">
          <h3 class="card-title flex items-center gap-2 px-4">
            <TypeIcon class="h-5 w-5" />
            {typeInfo.displayName}
            <span class="badge badge-sm badge-primary"
              >{typeIngredients.length}</span
            >
          </h3>

          <!-- Liste des ingrédients de ce type -->
          <div class="space-y-3">
            {#each typeIngredients as ingredient (ingredient.uuid)}
              <div class="card bg-base-100 border-base-200 border shadow-sm">
                <div class="card-body p-3">
                  <div class="flex items-start justify-between gap-3">
                    <!-- Contenu principal -->
                    <div class="flex-1 space-y-2">
                      <!-- Ligne 1: Nom et allergènes -->
                      <div class="flex flex-wrap items-center gap-4">
                        <span class="text-base font-medium"
                          >{ingredient.name}</span
                        >
                        {#if ingredient.allergens && ingredient.allergens.length > 0}
                          <div class="flex flex-wrap gap-1">
                            {#each ingredient.allergens as allergen}
                              <span class="badge badge-warning badge-sm">
                                {allergen}
                              </span>
                            {/each}
                          </div>
                        {/if}
                      </div>

                      <!-- Ligne 2: Quantité et commentaire -->
                      <div class="flex flex-wrap gap-4">
                        <!-- Quantité -->
                        <div class="flex gap-2">
                          <label class="input w-44">
                            <span class="label text-base-content/80"
                              >Quantité</span
                            >
                            <div class="flex items-center gap-1">
                              <input
                                type="number"
                                bind:value={ingredient.originalQuantity}
                                min="0"
                                step="0.1"
                                placeholder="0"
                                class=""
                                {disabled}
                              />
                            </div>
                          </label>
                          <label class="select w-44">
                            <span class="label text-base-content/80">unité</span
                            >
                            <select
                              bind:value={ingredient.originalUnit}
                              {disabled}
                            >
                              <option value="kg">Kg</option>
                              <option value="gr.">gr.</option>
                              <option value="unité">unité</option>
                              <option value="l.">l.</option>
                              <option value="ml">ml</option>
                              <option value="c. à soupe">c. à soupe</option>
                              <option value="c. à café">c. à café</option>
                              <option value="pincées">pincées</option>
                              <option value="tête·s">tête·s</option>
                              <option value="gousse·s">gousse·s</option>
                              <option value="bottes">bottes</option>
                            </select>
                          </label>
                        </div>

                        <!-- Commentaire -->
                        <label class="input w-full">
                          <span class="label opacity-70">Note</span>
                          <input
                            type="text"
                            bind:value={ingredient.comment}
                            placeholder="Ex: coupées en dés; pour la sauce..."
                            maxlength="100"
                            {disabled}
                          />
                        </label>
                      </div>
                    </div>

                    <!-- Bouton supprimer -->
                    <button
                      class="btn btn-ghost btn-sm btn-square text-error"
                      onclick={() => removeIngredient(ingredient.uuid)}
                      title="Supprimer cet ingrédient"
                      {disabled}
                    >
                      <Trash2 class="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  {/if}
</div>
