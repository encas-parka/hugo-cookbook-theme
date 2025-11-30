<script lang="ts">
  import {
    Calendar,
    Users,
    Trash2,
    Copy,
    PencilLine,
    Plus,
    Utensils,
    ChefHat,
    X,
    Moon,
    Cloud,
    Sun,
    type Icon as IconType,
  } from "@lucide/svelte";
  import type { Meal, MealRecipe } from "$lib/types/appwrite.types";
  import type { RecipeIndexEntry } from "$lib/types/recipes.types";
  import RecipeSearchCard from "./RecipeSearchCard.svelte";
  import Fieldset from "$lib/components/ui/Fieldset.svelte";
  import { recipesStore } from "$lib/stores/RecipesStore.svelte";
  import { formatDateShort } from "$lib/utils/products-display";
  import { fade } from "svelte/transition";
  import {
    extractDate,
    extractTime,
    dateToDateTime,
  } from "$lib/utils/date-helpers";
  import { flip } from "svelte/animate";

  interface Props {
    meal: Meal;
    onDelete: () => void;
    onDuplicate: () => void;
    defaultGuests?: number;
    isEditing?: boolean;
    onEditToggle?: () => void;
    allDates?: string[];
    onEmptySearchSubmit?: () => void;
    onDateChanged?: (mealId: string, newDate: string) => void;
  }

  let {
    meal = $bindable(),
    onDelete,
    onDuplicate,
    defaultGuests = 100,
    isEditing = $bindable(false),
    onEditToggle,
    allDates = [],
    onEmptySearchSubmit,
    onDateChanged,
  }: Props = $props();

  // État pour le focus automatique sur le champ de recherche
  let shouldFocusSearch = $state(false);

  // Initialisation des valeurs par défaut si vide
  if (!meal.guests) meal.guests = defaultGuests;
  if (!meal.recipes) meal.recipes = [];

  // Variables dérivées pour l'UI (extraction date et moment depuis meal.date)
  let displayDate = $derived(extractDate(meal.date || ""));
  let displayTime = $derived(extractTime(meal.date || ""));

  // État pour savoir si l'utilisateur a essayé de sélectionner une date en conflit
  let hasTryConflictingDate = $state(false);

  // Initialiser les valeurs d'entrée avec les valeurs actuelles
  let newDateInput = $state(extractDate(meal.date || ""));
  let newTimeInput = $state(extractTime(meal.date || ""));
  let newDateTime = $derived(dateToDateTime(newDateInput, newTimeInput));

  $effect(() => {
    const isValidNewDateTime = !isDateTimeTaken(newDateTime);
    const oldDate = meal.date; // ✅ Stocker l'ancienne date

    if (isValidNewDateTime) {
      meal.date = newDateTime;
      hasTryConflictingDate = false;

      // ✅ Comparer avec l'ancienne date pour voir si ça a changé
      if (onDateChanged && meal.id && oldDate !== newDateTime) {
        // Ne notifier que si le changement affecte l'ordre
        onDateChanged(meal.id, newDateTime);
      }
      hasTryConflictingDate = false;
    } else {
      hasTryConflictingDate = true;
    }
  });

  // Fonction pour valider si une date/heure est déjà utilisée par un autre repas
  function isDateTimeTaken(newDateTime: string): boolean {
    const currentMealDateTime = meal.date || "";
    return allDates.some(
      (date) => date !== currentMealDateTime && date === newDateTime,
    );
  }

  const TimeIcon: typeof IconType = $derived.by(() => {
    const time = displayTime || "";
    if (time === "matin") {
      return Cloud;
    } else if (time === "midi") {
      return Sun;
    } else if (time === "soir") {
      return Moon;
    }
    return Moon;
  });

  // Recettes triées par type (entree > plat > dessert)
  const sortedRecipes = $derived.by(() => {
    const typeOrder: Record<string, number> = {
      entree: 1,
      plat: 2,
      dessert: 3,
    };

    return [...meal.recipes].sort((a, b) => {
      const orderA = typeOrder[a.type as string] || 999;
      const orderB = typeOrder[b.type as string] || 999;
      return orderA - orderB;
    });
  });

  function handleAddRecipe(
    recipe: RecipeIndexEntry,
    type: "entree" | "plat" | "dessert",
    plates: number,
  ) {
    // Vérifier si la recette existe déjà pour éviter les doublons
    const alreadyExists = meal.recipes.some((r) => r.recipeUuid === recipe.u);
    if (alreadyExists) return; // Ignorer silencieusement l'ajout d'une recette déjà présente

    const defaultPlates = plates || meal.guests; // Utiliser le nombre de guests par défaut
    const newRecipe: MealRecipe = {
      recipeUuid: recipe.u,
      plates: defaultPlates,
      type,
    };

    // Créer une copie profonde pour éviter les liaisons
    meal.recipes = [...meal.recipes, { ...newRecipe }];
  }

  function removeRecipe(recipeUuid: string) {
    meal.recipes = meal.recipes.filter(
      (recipe) => recipe.recipeUuid !== recipeUuid,
    );
  }

  function getRecipeIndex(uuid: string) {
    return recipesStore.getRecipeIndexByUuid(uuid);
  }

  function handleCardClick() {
    if (!isEditing && onEditToggle) {
      onEditToggle();
      // Déclencher le focus sur le champ de recherche après le passage en mode édition
      shouldFocusSearch = true;
    }
  }

  // Effect pour déclencher le focus quand isEditing change
  $effect(() => {
    if (isEditing) {
      shouldFocusSearch = true;
      // Réinitialiser après un court délai
      setTimeout(() => {
        shouldFocusSearch = false;
      }, 100);
    }
  });

  function getRecipeColor(type) {
    if (type === "entree") return "bg-lime-100 border-lime-200";
    else if (type === "plat") return "bg-orange-100 border-orange-200";
    else if (type === "dessert") return "bg-pink-100 border-pink-200";
    else return "bg-base-200/50";
  }
</script>

<div
  class="card bg-base-100 border-base-200 border shadow-sm transition-all hover:shadow-md {isEditing
    ? 'ring-accent/40 ring-2'
    : ''} {isEditing ? '' : 'hover:ring-accent/60 cursor-pointer hover:ring-2'}"
  role="button"
  tabindex={isEditing ? -1 : 0}
  onclick={handleCardClick}
  onkeydown={(e) => {
    if ((e.key === "Enter" || e.key === " ") && !isEditing) handleCardClick();
  }}
>
  <div class="card-body p-4">
    <!-- Header avec Actions -->
    <div class="mb-2 flex items-start justify-between">
      <div class="flex items-center gap-2">
        <span class="text-lg font-medium">
          {meal.date ? formatDateShort(meal.date) : "Date non définie"}
        </span>
        <div class="font-base flex items-center gap-1">
          <TimeIcon size={16} />
          <div>{displayTime ? displayTime.toUpperCase() : "REPAS"}</div>
        </div>
        <span class="text-base-content/60 flex items-center gap-1 text-sm">
          <Users class="h-3 w-3" />
          {meal.guests} pers.
        </span>
      </div>

      <div class="flex gap-1">
        {#if isEditing}
          <button
            class="btn btn-ghost text-primary"
            onclick={() => {
              isEditing = false;
            }}
            title="Terminer l'édition"
          >
            valider
          </button>

          <button
            class="btn btn-ghost btn-square"
            onclick={onDuplicate}
            title="Dupliquer"
          >
            <Copy class="h-4 w-4" />
          </button>
          <button
            class="btn btn-ghost btn-square text-error"
            onclick={onDelete}
            title="Supprimer"
          >
            <Trash2 class="h-4 w-4" />
          </button>
        {:else}
          <button
            class="btn btn-ghost"
            onclick={() => {
              isEditing = true;
              if (onEditToggle) onEditToggle();
            }}
            title="Éditer"
          >
            <PencilLine class="h-4 w-4" />
          </button>
        {/if}
      </div>
    </div>

    {#if isEditing}
      <div class="mt-2 space-y-4">
        <!-- Configuration Repas -->
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <!-- Date -->
          <label class="w-full">
            <div class="label">
              <span class="label-text">Date</span>
            </div>
            <input
              type="date"
              class="input input-bordered w-full {hasTryConflictingDate
                ? 'input-error'
                : ''}"
              bind:value={newDateInput}
            />
            {#if hasTryConflictingDate}
              <div class="text-error mt-1 text-xs">
                Cette date/heure est déjà utilisée
              </div>
            {/if}
          </label>

          <!-- Moment -->
          <label class="w-full">
            <div class="label">
              <span class="label-text">Moment</span>
            </div>
            <select
              class="select select-bordered w-full {hasTryConflictingDate
                ? 'select-error'
                : ''}"
              bind:value={newTimeInput}
            >
              <option value="" disabled selected>Choisir un moment</option>
              <option value="matin">Matin</option>
              <option value="midi">Midi</option>
              <option value="soir">Soir</option>
            </select>
          </label>

          <!-- Couverts global meal -->
          <label class="w-full">
            <div class="label">
              <span class="label-text">Couverts</span>
            </div>
            <input
              type="number"
              class="input input-bordered w-full"
              bind:value={meal.guests}
              min="1"
            />
          </label>
        </div>

        <!-- Liste des Recettes -->
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <h4 class="flex items-center gap-2 font-semibold">
              <Utensils class="h-4 w-4" />
              Recettes
            </h4>
          </div>

          {#if meal.recipes.length >= 1}
            <div class="mb-4 space-y-2">
              {#each sortedRecipes as recipe, i (recipe.recipeUuid)}
                {@const recipeIndex = getRecipeIndex(recipe.recipeUuid)}
                <div
                  animate:flip={{ duration: 200 }}
                  class="group bg-base-200/40 flex flex-wrap items-center gap-3 rounded-lg p-3"
                >
                  <!-- Icône -->
                  <div class="flex flex-1 items-center gap-2">
                    <div
                      class="{getRecipeColor(
                        recipe.type,
                      )} rounded-md border-2 p-2"
                    >
                      <ChefHat class="h-5 w-5" />
                    </div>

                    <!-- Infos Recette -->
                    <div class="min-w-0 flex-1">
                      <div class="font-medium">
                        {recipeIndex?.n || "Recette inconnue"}
                      </div>
                    </div>
                  </div>

                  <!-- Contrôles d'édition -->
                  <div class="flex items-center gap-2">
                    <!-- Type -->
                    <select class="select w-24" bind:value={recipe.type}>
                      <option value="entree">Entrée</option>
                      <option value="plat">Plat</option>
                      <option value="dessert">Dessert</option>
                    </select>

                    <!-- Couverts -->
                    <div class="join">
                      <input
                        type="number"
                        class="input join-item w-20 text-center"
                        bind:value={recipe.plates}
                        min="1"
                      />
                      <div
                        class="bg-base-300 join-item flex items-center px-2 text-xs"
                      >
                        pers.
                      </div>
                    </div>

                    <!-- Supprimer -->
                    <button
                      class="btn btn-ghost btn-sm btn-square text-error"
                      onclick={() => removeRecipe(recipe.recipeUuid)}
                      title="Retirer la recette"
                    >
                      <X class="h-4 w-4" />
                    </button>
                  </div>
                </div>
              {/each}
            </div>
          {/if}
          <RecipeSearchCard
            onSelect={handleAddRecipe}
            defaultPlates={meal.guests}
            autoFocus={shouldFocusSearch}
            onEmptySubmit={onEmptySearchSubmit}
          />
        </div>
      </div>
    {:else}
      <!-- Mode Preview -->
      <div class="space-y-2">
        {#if sortedRecipes.length > 0}
          <div class="flex flex-wrap gap-2">
            {#each sortedRecipes as recipe (recipe.recipeUuid)}
              {@const recipeIndex = getRecipeIndex(recipe.recipeUuid)}
              <div
                class="badge badge-lg {getRecipeColor(
                  recipe.type,
                )} h-auto gap-2 py-1 font-medium"
              >
                <ChefHat class="h-4 w-4" />
                <span>{recipeIndex?.n || "..."}</span>
                <span class="badge badge-sm badge-outline font-base">
                  {recipe.plates || meal.guests}p
                </span>
              </div>
            {/each}
          </div>
        {:else}
          <p class="text-base-content/60 text-sm italic">Aucune recette</p>
        {/if}
      </div>
    {/if}
  </div>
</div>
