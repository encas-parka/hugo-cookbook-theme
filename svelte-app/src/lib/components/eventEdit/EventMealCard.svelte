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
    Check,
    RefreshCcw,
  } from "@lucide/svelte";
  import type { EventMeal, EventMealRecipe } from "$lib/types/events.d";
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
    meal: EventMeal;
    onDelete: () => void;
    defaultGuests?: number;
    isEditing?: boolean;
    onEditToggle?: () => void;
    allDates?: string[];
    onEmptySearchSubmit?: () => void;
    onDateChanged?: (mealId: string, newDate: string) => void;
    onModified?: () => void;
    disabled?: boolean;
  }

  let {
    meal = $bindable(),
    onDelete,
    defaultGuests = 100,
    isEditing = $bindable(false),
    onEditToggle,
    allDates = [],
    onEmptySearchSubmit,
    onDateChanged,
    onModified,
    disabled = false,
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

  // Changement de date d'une meal
  $effect(() => {
    const isValidNewDateTime = !isDateTimeTaken(newDateTime);
    const oldDate = meal.date; // ✅ Stocker l'ancienne date

    if (isValidNewDateTime) {
      onModified?.();
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

  // État pour suivre si les couverts d'une recette ont été modifiés manuellement
  // On utilise un identifiant composite meal.id-recipeUuid pour une identification unique
  let manuallyEditedPlates = $state<Record<string, boolean>>({});

  // État pour savoir si les couverts d'une recette sont en mode édition
  // On utilise un identifiant composite meal.id-recipeUuid pour une identification unique
  let editablePlates = $state<Record<string, boolean>>({});

  // Fonction helper pour générer une clé unique pour une recette dans un repas
  function getRecipeKey(recipeUuid: string): string {
    return `${meal.id}-${recipeUuid}`;
  }

  // Initialiser editablePlates et manuallyEditedPlates pour les recettes existantes
  $effect(() => {
    meal.recipes.forEach((recipe) => {
      const key = getRecipeKey(recipe.recipeUuid);
      if (editablePlates[key] === undefined) {
        editablePlates[key] = false;
      }
      // Initialiser manuallyEditedPlates uniquement si non défini
      // et détecter si la recette a déjà des valeurs différentes au chargement
      if (manuallyEditedPlates[key] === undefined) {
        manuallyEditedPlates[key] = recipe.plates !== meal.guests;
      }
    });
  });

  // Effect pour synchroniser recipe.plates avec meal.guests uniquement pour les recettes non modifiées manuellement
  $effect(() => {
    meal.recipes.forEach((recipe) => {
      const key = getRecipeKey(recipe.recipeUuid);
      // Synchroniser uniquement si la recette n'est pas marquée comme modifiée manuellement
      // et n'est pas en mode édition
      if (
        !manuallyEditedPlates[key] &&
        !editablePlates[key] &&
        recipe.plates !== meal.guests
      ) {
        recipe.plates = meal.guests;
        onModified?.(); // Notifie le parent
      }
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

    onModified?.(); // Notifie le parent

    const defaultPlates = meal.guests; // Utiliser le nombre de guests par défaut
    const newRecipe: EventMealRecipe = {
      recipeUuid: recipe.u,
      plates: defaultPlates,
      type,
    };

    // Créer une copie profonde pour éviter les liaisons
    meal.recipes = [...meal.recipes, { ...newRecipe }];
  }

  function removeRecipe(recipeUuid: string) {
    onModified?.(); // Notifie le parent
    meal.recipes = meal.recipes.filter(
      (recipe) => recipe.recipeUuid !== recipeUuid,
    );
  }

  function getRecipeIndex(uuid: string) {
    return recipesStore.getRecipeIndexByUuid(uuid);
  }

  function handleCardClick() {
    if (disabled || (isEditing && onEditToggle)) {
      return;
    }
    if (!isEditing && onEditToggle) {
      onEditToggle();
    }
  }

  // Effect pour déclencher le focus quand isEditing change
  // $effect(() => {
  //   if (isEditing) {
  //     shouldFocusSearch = true;
  //     // Réinitialiser après un court délai
  //     setTimeout(() => {
  //       shouldFocusSearch = false;
  //     }, 100);
  //   }
  // });

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
    : ''} {isEditing || disabled
    ? ''
    : 'hover:ring-accent/60 cursor-pointer hover:ring-2'} {disabled
    ? 'opacity-75'
    : ''}"
  role="button"
  tabindex={isEditing || disabled ? -1 : 0}
  onclick={handleCardClick}
  onkeydown={(e) => {
    if ((e.key === "Enter" || e.key === " ") && !isEditing) handleCardClick();
  }}
>
  <div class="card-body p-4">
    <!-- Header avec Actions -->
    <div class="mb-2 flex items-start justify-between">
      <div class="flex flex-wrap items-center gap-2">
        <span class="text-lg font-medium">
          {meal.date ? formatDateShort(meal.date) : "Date non définie"}
        </span>
        <div class="font-base flex items-center gap-1">
          <TimeIcon size={16} />
          <div>{displayTime ? displayTime.toUpperCase() : "REPAS"}</div>
        </div>
        <div class="text-base-content/60 flex items-center gap-1 text-sm">
          <Users class="h-3 w-3" />
          {meal.guests} pers.
        </div>
      </div>

      <div class="flex gap-1">
        {#if isEditing}
          <button
            class="btn btn-ghost text-primary"
            onclick={() => {
              isEditing = false;
            }}
            title="Terminer l'édition"
            {disabled}
          >
            valider
          </button>

          <!-- <button
            class="btn btn-ghost btn-square"
            onclick={onDuplicate}
            title="Dupliquer"
            {disabled}
          >
            <Copy class="h-4 w-4" />
          </button> -->
          <button
            class="btn btn-ghost btn-square text-error"
            onclick={onDelete}
            title="Supprimer"
            {disabled}
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
            {disabled}
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
          <fieldset class="">
            <label class="input {hasTryConflictingDate ? 'input-error' : ''}">
              <span class="label">Date</span>
              <input type="date" class="w-full" bind:value={newDateInput} />
            </label>
            {#if hasTryConflictingDate}
              <p class="text-error mt-1 text-xs">
                Cette date/heure est déjà utilisée
              </p>
            {/if}
          </fieldset>

          <!-- Moment -->
          <label class="select">
            <span class="label"> Moment </span>
            <select
              class="w-full {hasTryConflictingDate ? 'select-error' : ''}"
              bind:value={newTimeInput}
            >
              <option value="" disabled selected>Choisir un moment</option>
              <option value="matin">Matin</option>
              <option value="midi">Midi</option>
              <option value="soir">Soir</option>
            </select>
          </label>

          <!-- Couverts global meal -->
          <div>
            <label class="input">
              <span class="label">
                <Utensils class="text-base-content/50 me-1 h-4 w-4" />
                Couverts
              </span>
              <input
                type="number"
                class="w-full"
                bind:value={meal.guests}
                min="1"
              />
            </label>
            <p class="text-base-content/60 pl-2 text-xs">
              Peut etre modifié individuellement pour chaque recette
            </p>
          </div>
        </div>

        <!-- Liste des Recettes -->
        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <h4 class="flex items-center gap-2 font-semibold">
              <ChefHat class="h-4 w-4" />
              Recettes
            </h4>
          </div>

          {#if meal.recipes.length >= 1}
            <div class="mb-4 space-y-2">
              {#each sortedRecipes as recipe, i (recipe.recipeUuid)}
                {@const recipeIndex = getRecipeIndex(recipe.recipeUuid)}
                <div
                  animate:flip={{ duration: 200 }}
                  class="bg-base-200/40 flex flex-wrap items-center gap-3 rounded-lg p-3"
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
                    <div class="min-w-56 flex-1">
                      <div class="font-medium">
                        {recipeIndex?.n || "Recette inconnue"}
                      </div>
                    </div>
                  </div>

                  <!-- Contrôles d'édition -->
                  <div class="me-10 flex items-center gap-2">
                    <!-- Type -->
                    <select class="select w-24" bind:value={recipe.type}>
                      <option value="entree">Entrée</option>
                      <option value="plat">Plat</option>
                      <option value="dessert">Dessert</option>
                    </select>

                    <!-- Couverts -->
                    {#if editablePlates[getRecipeKey(recipe.recipeUuid)]}
                      <div
                        class="ring-base-300 flex items-center gap-1 rounded-xl p-1 ring-1"
                      >
                        <div class="input w-28">
                          <Utensils class="h-4 w-4 opacity-50" />
                          <input
                            type="number"
                            class="w-full text-center"
                            bind:value={recipe.plates}
                            min="1"
                            onchange={() => {
                              onModified?.();
                              manuallyEditedPlates[
                                getRecipeKey(recipe.recipeUuid)
                              ] = true;
                            }}
                          />
                        </div>

                        <button
                          class="btn btn-sm btn-circle me-1"
                          onclick={() => {
                            editablePlates[getRecipeKey(recipe.recipeUuid)] =
                              false;
                          }}
                          title="Valider"
                        >
                          <Check class="text-success h-4 w-4" />
                        </button>
                        <button
                          class="btn btn-sm btn-circle"
                          onclick={() => {
                            editablePlates[getRecipeKey(recipe.recipeUuid)] =
                              false;
                            manuallyEditedPlates[
                              getRecipeKey(recipe.recipeUuid)
                            ] = false;
                            recipe.plates = meal.guests;
                          }}
                          title="Revenir au nombre de couvert du repas ({meal.guests})"
                        >
                          <RefreshCcw class="text-secondary h-4 w-4" />
                        </button>
                      </div>
                    {:else}
                      <button
                        class="btn {recipe.plates === meal.guests
                          ? 'btn-ghost'
                          : 'btn-soft btn-warning'}"
                        onclick={() => {
                          editablePlates[getRecipeKey(recipe.recipeUuid)] =
                            true;
                        }}
                        title="Éditer les couverts"
                      >
                        <span class="font-normal">
                          {manuallyEditedPlates[getRecipeKey(recipe.recipeUuid)]
                            ? recipe.plates
                            : meal.guests} pers.
                        </span>
                        <PencilLine
                          size={14}
                          class="text-base-content/70  ms-1"
                        />
                      </button>
                    {/if}
                  </div>
                  <div class="ms-auto">
                    <!-- Supprimer -->
                    <button
                      class="btn btn-ghost btn-sm btn-square text-error"
                      onclick={() => removeRecipe(recipe.recipeUuid)}
                      title="Retirer la recette"
                      {disabled}
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
            {#each sortedRecipes as recipe, i (recipe.recipeUuid)}
              {@const recipeIndex = getRecipeIndex(recipe.recipeUuid)}
              <div
                class="badge badge-lg {getRecipeColor(
                  recipe.type,
                )} h-auto gap-2 py-1 font-medium"
              >
                <ChefHat class="h-4 w-4" />
                <span>{recipeIndex?.n || "..."}</span>
                <span class="badge badge-sm badge-outline font-normal">
                  {recipe.plates || meal.guests}
                  <Utensils size={12} />
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
