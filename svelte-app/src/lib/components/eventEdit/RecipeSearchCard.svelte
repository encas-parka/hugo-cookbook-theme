<script lang="ts">
  import {
    Search,
    Plus,
    ChefHat,
    LoaderCircle,
    ChevronDown,
  } from "@lucide/svelte";
  import { recipesStore } from "$lib/stores/RecipesStore.svelte";
  import type {
    RecettesTypeR,
    RecipeIndexEntry,
  } from "$lib/types/recipes.types";
  import { keyboardNavigation } from "$lib/attachments/keyboardNavigation.svelte";

  interface Props {
    onSelect: (
      recipe: RecipeIndexEntry,
      type: RecettesTypeR,
      plates: number,
    ) => void;
    defaultPlates?: number;
    autoFocus?: boolean;
    onEmptySubmit?: () => void;
    disabled?: boolean;
  }

  let {
    onSelect,
    defaultPlates = 4,
    autoFocus = false,
    onEmptySubmit,
    disabled = false,
  }: Props = $props();

  let searchQuery = $state("");
  let selectedType = $state<RecettesTypeR>();
  let plates = $state(defaultPlates);
  let selectedRecipe = $state<RecipeIndexEntry | null>(null);
  let isLoadingDetails = $state(false);
  let selectedIndex = $state(-1);
  let isOpen = $state(false);
  let isManuallyOpened = $state(false); // Flag pour distinguer ouverture chevron vs recherche
  let containerRef: HTMLDivElement | undefined = $state();
  let listboxRef: HTMLDivElement | undefined = $state();

  // Logique de filtrage révisée
  let filteredRecipes = $derived.by(() => {
    // Cas 1: Ouverture via chevron → afficher TOUS les résultats
    if (isManuallyOpened && !searchQuery.trim()) {
      return recipesStore.getAllRecipes();
    }

    // Cas 2: Recherche avec moins de 2 caractères → pas de résultats
    if (searchQuery.trim().length < 2) {
      return [];
    }

    // Cas 3: Recherche normale
    return recipesStore.searchRecipes(searchQuery);
  });

  // Le dropdown s'ouvre si y'a des résultats à afficher
  let shouldOpenDropdown = $derived(filteredRecipes.length > 0);

  // Synchroniser isOpen avec shouldOpenDropdown (mais garder isManuallyOpened)
  $effect(() => {
    if (shouldOpenDropdown) {
      isOpen = true;
    }
  });

  // Gérer le selectedIndex réactif
  $effect(() => {
    if (filteredRecipes.length > 0 && selectedIndex === -1) {
      selectedIndex = 0;
    } else if (filteredRecipes.length === 0 && selectedIndex !== -1) {
      selectedIndex = -1;
    }
  });

  // Gestion du click outside
  $effect(() => {
    if (isOpen) {
      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef && !containerRef.contains(event.target as Node)) {
          closeDropdown();
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  });

  function reset() {
    selectedRecipe = null;
    searchQuery = "";
    plates = defaultPlates;
    selectedIndex = -1;
    isOpen = false;
    isManuallyOpened = false;
  }

  function openDropdown() {
    // Ouverture via chevron → afficher tous les résultats
    isManuallyOpened = true;
    searchQuery = "";
    isOpen = true;
  }

  function closeDropdown() {
    isManuallyOpened = false;
    searchQuery = "";
    selectedIndex = -1;
    isOpen = false;
  }

  function toggleDropdown() {
    if (isOpen) {
      closeDropdown();
    } else {
      openDropdown();
    }
  }

  function handleSelectRecipe(indexEntry: RecipeIndexEntry) {
    selectedRecipe = indexEntry;
    const typeFromIndex = indexEntry.typeR as RecettesTypeR;
    selectedType = selectedType ? selectedType : typeFromIndex;
    onSelect(indexEntry, selectedType, plates);
    reset();
  }

  function handleKeydown(event: KeyboardEvent) {
    // Escape pour fermer
    if (event.key === "Escape") {
      event.preventDefault();
      closeDropdown();
      return;
    }

    if (!isOpen || !filteredRecipes.length) {
      // Ouvrir le dropdown avec Entrée si fermé et recherche active
      if (
        event.key === "Enter" &&
        searchQuery.trim().length > 1 &&
        !isManuallyOpened
      ) {
        event.preventDefault();
        openDropdown();
      }
      return;
    }

    // Navigation avec les flèches
    if (event.key === "ArrowDown") {
      event.preventDefault();
      selectedIndex = (selectedIndex + 1) % filteredRecipes.length;
      scrollToSelected();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      selectedIndex =
        selectedIndex <= 0 ? filteredRecipes.length - 1 : selectedIndex - 1;
      scrollToSelected();
    }
    // Sélection avec Entrée
    else if (event.key === "Enter" && selectedIndex >= 0) {
      event.preventDefault();
      handleSelectRecipe(filteredRecipes[selectedIndex]);
    }
    // Tab pour fermer
    // else if (event.key === "Tab") {
    //   closeDropdown();
    // }
  }

  function scrollToSelected() {
    if (selectedIndex >= 0 && listboxRef) {
      const selectedElement = listboxRef.querySelector(
        `#recipe-${selectedIndex}`,
      );
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: "nearest" });
      }
    }
  }
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
      <div class="mt-2" bind:this={containerRef}>
        <div class="relative">
          <!-- Input container -->
          <div class="input flex w-full items-center gap-2 pr-10">
            <Search class="h-4 w-4 opacity-50" />
            <input
              type="text"
              placeholder="Rechercher une recette..."
              class="w-full bg-transparent outline-none"
              bind:value={searchQuery}
              onkeydown={handleKeydown}
              {@attach keyboardNavigation({
                shouldFocus: autoFocus,
                onEmptySubmit: onEmptySubmit,
              })}
              {disabled}
              autocomplete="off"
              role="combobox"
              aria-expanded={isOpen}
              aria-controls="recipes-list"
              aria-activedescendant={isOpen
                ? `recipe-${selectedIndex}`
                : undefined}
            />
            {#if isLoadingDetails}
              <div class="absolute top-1/2 right-10 -translate-y-1/2">
                <LoaderCircle class="text-primary h-4 w-4 animate-spin" />
              </div>
            {/if}
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

          <!-- Dropdown results -->
          {#if isOpen && filteredRecipes.length > 0}
            <div
              id="recipes-list"
              bind:this={listboxRef}
              class="border-base-300 bg-base-100 absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-lg border shadow-lg"
              role="listbox"
            >
              {#each filteredRecipes as recipe, index (recipe.$id)}
                <button
                  type="button"
                  id="recipe-{index}"
                  class="hover:bg-base-200 flex w-full items-center gap-2 px-4 py-3 text-left hover:cursor-pointer {index ===
                  selectedIndex
                    ? 'bg-base-200'
                    : ''}"
                  onclick={() => handleSelectRecipe(recipe)}
                  onmouseenter={() => (selectedIndex = index)}
                  role="option"
                  aria-selected={index === selectedIndex}
                  disabled={isLoadingDetails}
                >
                  <div class="bg-base-200 rounded p-1">
                    <ChefHat class="h-4 w-4 opacity-70" />
                  </div>
                  <div class="flex min-w-0 flex-1 items-center gap-2">
                    <span class="truncate text-sm font-medium"
                      >{recipe.title}</span
                    >
                    {#if recipe.versionLabel}
                      <span class="text-muted-foreground text-xs"
                        >({recipe.versionLabel})</span
                      >
                    {/if}
                    {#if recipe.draft}
                      <span
                        class="badge badge-ghost badge-sm text-xs opacity-70"
                        >brouillon</span
                      >
                    {/if}
                  </div>
                </button>
              {/each}
            </div>
          {/if}
        </div>
      </div>
    {/if}
  </div>
</div>
