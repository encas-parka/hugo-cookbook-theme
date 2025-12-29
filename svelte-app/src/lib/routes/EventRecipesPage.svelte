<script lang="ts">
  import { onMount } from "svelte";
  import { eventsStore } from "$lib/stores/EventsStore.svelte";
  import { recipesStore } from "$lib/stores/RecipesStore.svelte";
  import {
    getTotalGuests,
    getTotalRecipes,
  } from "$lib/utils/event-stats-helpers";
  import { navigate } from "$lib/services/simple-router.svelte";
  import { onDestroy } from "svelte";
  import EventStats from "$lib/components/EventStats.svelte";
  import EventRecipeCard from "$lib/components/eventEdit/EventRecipeCard.svelte";
  import LeftPanel from "$lib/components/ui/LeftPanel.svelte";
  import AutocompleteInput from "$lib/components/ui/AutocompleteInput.svelte";
  import { formatDateShort } from "$lib/utils/products-display";
  import {
    ArrowLeft,
    Calendar,
    CookingPot,
    Utensils,
    Eye,
    X,
    Funnel,
  } from "@lucide/svelte";
  import { extractTime, formatDateWdDayMonth } from "../utils/date-helpers";
  import { globalState } from "../stores/GlobalState.svelte";
  import { navBarStore } from "../stores/NavBarStore.svelte";

  interface Props {
    params?: { id?: string };
  }

  let { params }: Props = $props();

  // État local
  let loading = $state(true);
  let error = $state<string | null>(null);
  let eventId = $state<string | null>(null);

  const currentEvent = $derived(
    eventId ? eventsStore.getEventById(eventId) : null,
  );
  let eventMeals = $state<any[]>([]);
  let recipesDetails = $state<any[]>([]);

  // Pour éviter les rechargements en boucle
  let isLoading = $state(false);

  // État pour la recherche par ingrédient (un seul à la fois)
  let selectedIngredient = $state<string>("");
  let ingredientSearch = $state("");

  // Extraire tous les ingrédients uniques des recettes de l'événement
  const availableIngredients = $derived.by(() => {
    const ingredientsSet = new Set<string>();
    recipesDetails.forEach((recipe) => {
      recipe.ingredients?.forEach((ingredient: any) => {
        if (ingredient.name) {
          ingredientsSet.add(ingredient.name);
        }
      });
    });
    return Array.from(ingredientsSet).sort();
  });

  // Ingrédients disponibles pour l'autocomplétion (exclut celui déjà sélectionné)
  const availableIngredientsForAutocomplete = $derived(
    selectedIngredient
      ? availableIngredients.filter((ing) => ing !== selectedIngredient)
      : availableIngredients,
  );

  // État pour les filtres de date, moment et recette individuelle
  let selectedDateFilter = $state<string | null>(null);
  let selectedTimeFilter = $state<string | null>(null);
  let selectedMealRecipeFilter = $state<string | null>(null); // Format: "mealId-recipeIndex"

  // Repas filtrés par date et moment (pour l'affichage principal)
  const filteredMeals = $derived.by(() => {
    if (!selectedDateFilter) return eventMeals;

    return eventMeals.filter((meal) => {
      const date = formatDateShort(meal.date);
      const time = extractTime(meal.date);

      const dateMatch = date === selectedDateFilter;
      const timeMatch = !selectedTimeFilter || time === selectedTimeFilter;

      return dateMatch && timeMatch;
    });
  });

  // Recettes filtrées par ingrédients ET par filtres de date/moment
  const filteredRecipes = $derived.by(() => {
    let recipes = recipesDetails;

    // Filtrer par la recherche d'ingrédient
    if (selectedIngredient) {
      recipes = recipes.filter((recipe) =>
        recipe.ingredients?.some(
          (ingredient: any) =>
            ingredient.name &&
            ingredient.name.toLowerCase() === selectedIngredient.toLowerCase(),
        ),
      );
    }

    // Filtrer par date/moment sélectionnés
    if (selectedDateFilter) {
      const filteredMealRecipes = new Set();
      filteredMeals.forEach((meal) => {
        meal.recipes.forEach((mealRecipe: any) => {
          filteredMealRecipes.add(mealRecipe.recipeUuid);
        });
      });

      recipes = recipes.filter((recipe: any) =>
        filteredMealRecipes.has(recipe.$id),
      );
    }

    return recipes;
  });

  // Organisation des repas pour le sommaire (par date et moment)
  const mealsByDate = $derived.by(() => {
    const groups = new Map();
    eventMeals.forEach((meal) => {
      const date = formatDateShort(meal.date);
      const time = extractTime(meal.date);

      if (!groups.has(date)) {
        groups.set(date, new Map());
      }
      if (!groups.get(date).has(time)) {
        groups.get(date).set(time, []);
      }
      groups.get(date).get(time).push(meal);
    });
    return groups;
  });

  // Calculer les informations de l'événement
  const eventName = $derived(currentEvent?.name ?? "");
  const startDate = $derived(currentEvent?.dateStart ?? null);
  const endDate = $derived(currentEvent?.dateEnd ?? null);
  const totalGuests = $derived(getTotalGuests(currentEvent));
  const totalRecipes = $derived(getTotalRecipes(currentEvent));

  // Extraire l'ID de l'URL depuis les params ou l'URL actuelle
  const extractedId = $derived(() => {
    if (params?.id) return params.id;
    return null;
  });

  // Charger les données
  async function loadEventData(currentEventId: string) {
    if (isLoading || !currentEventId) return;

    loading = true;
    isLoading = true;
    error = null;

    try {
      // L'eventId est stocké localement pour déclencher le derived eventStats
      eventId = currentEventId;

      // Attendre que les stores soient prêts
      if (!eventsStore.isInitialized) {
        await eventsStore.initialize();
      }
      if (!recipesStore.isInitialized) {
        await recipesStore.initialize();
      }

      // Récupérer les repas de l'événement
      const event = eventsStore.getEventById(currentEventId);
      if (!event) {
        error = "Événement non trouvé";
        return;
      }

      eventMeals = event.meals || [];

      // Récupérer les détails des recettes
      const recipesPromises = eventMeals.flatMap((meal) =>
        meal.recipes.map((mealRecipe: any) =>
          recipesStore.getRecipeByUuid(mealRecipe.recipeUuid),
        ),
      );

      const recipes = await Promise.all(recipesPromises);
      recipesDetails = recipes.filter(Boolean);
    } catch (err) {
      console.error("Erreur lors du chargement des données:", err);
      error = err instanceof Error ? err.message : "Erreur lors du chargement";
    } finally {
      loading = false;
      isLoading = false;
    }
  }

  // Charger au montage ou quand l'ID change
  onMount(() => {
    if (extractedId()) {
      loadEventData(extractedId()!);
    } else {
      error = "ID d'événement manquant";
      loading = false;
    }
  });

  // Gérer le changement d'ID d'événement
  $effect(() => {
    const id = extractedId();
    if (id && id !== eventId && !isLoading) {
      loadEventData(id);
    }
  });

  // Surveiller les changements realtime de l'événement
  $effect(() => {
    if (!eventId) return;

    const currentEvent = eventsStore.getEventById(eventId);
    if (!currentEvent) return;

    // Comparer les meals pour éviter les boucles infinies
    const currentMealsJson = JSON.stringify(currentEvent.meals);
    const localMealsJson = JSON.stringify(eventMeals);

    if (currentMealsJson !== localMealsJson && !isLoading) {
      console.log(
        "[EventRecipesPage] Meals mis à jour via realtime, rafraîchissement...",
      );
      loadEventData(eventId);
    }
  });

  // ============================================================================
  // NAVBAR CONFIGURATION
  // ============================================================================

  $effect(() => {
    navBarStore.setConfig({
      eventId: eventId || undefined,
      actions: navActions,
    });
  });

  onDestroy(() => {
    navBarStore.reset();
  });

  // Gestion de l'ingrédient sélectionné
  function selectIngredient(ingredient: string) {
    selectedIngredient = ingredient;
    // Reset les filtres de date/recette
    selectedDateFilter = null;
    selectedTimeFilter = null;
    selectedMealRecipeFilter = null;
  }

  function resetIngredientFilter() {
    selectedIngredient = "";
  }
</script>

{#snippet navActions()}
  <div class="flex gap-2"></div>
{/snippet}

<div class="bg-base-200 min-h-screen">
  <!-- LeftPanel avec recherche et sommaire -->
  <div class="print:hidden">
    <LeftPanel>
      <!-- Champ de recherche par ingrédient avec autocomplétion -->
      <div class="mt-16 mb-6">
        <h3 class="mb-3 text-lg font-semibold">Rechercher par ingrédient</h3>

        <div class="relative">
          <AutocompleteInput
            items={availableIngredientsForAutocomplete}
            onSelect={selectIngredient}
            placeholder={selectedIngredient || "Filtrer par ingrédients..."}
            minQueryLength={1}
            bind:value={ingredientSearch}
          />
          {#if selectedIngredient}
            <button
              class="btn btn-circle btn-error btn-outline btn-xs absolute top-1/2 right-2 z-10 -translate-y-1/2 opacity-60 hover:opacity-100"
              onclick={resetIngredientFilter}
              aria-label="Effacer la recherche"
            >
              <X size={14} />
            </button>
          {/if}
        </div>
      </div>

      <!-- Sommaire réactif des recettes avec filtrage -->
      <ul class="menu bg-base-100 rounded-box w-100 drop-shadow-lg">
        {#each Array.from(mealsByDate.entries()) as [date, times] (date)}
          <li>
            <button
              class="btn btn-sm justify-start {selectedDateFilter === date &&
              !selectedTimeFilter
                ? 'btn-accent'
                : 'btn-ghost'}"
              onclick={() => {
                selectedTimeFilter = null; // Réinitialiser le filtre de temps
                selectedMealRecipeFilter = null; // Réinitialiser le filtre de recette
                selectedIngredient = ""; // Réinitialiser le filtre d'ingrédient
                selectedDateFilter = selectedDateFilter === date ? null : date;
              }}
            >
              <span>{date}</span>
            </button>
          </li>

          <ul>
            {#each Array.from((times as Map<string, any[]>).entries()) as [time, meals] (time)}
              <li>
                <button
                  class="btn btn-sm justify-start pl-4 {selectedDateFilter ===
                    date && selectedTimeFilter === time
                    ? 'btn-accent'
                    : 'btn-ghost '}"
                  onclick={() => {
                    selectedDateFilter = date;
                    selectedTimeFilter =
                      selectedTimeFilter === time ? null : time;
                    selectedMealRecipeFilter = null; // Réinitialiser le filtre de recette
                    selectedIngredient = ""; // Réinitialiser le filtre d'ingrédient
                  }}
                >
                  <span class="flex w-full items-center justify-between">
                    <span>
                      {time === "matin" ? "🌅" : time === "midi" ? "☀️" : "🌙"}
                      {time}
                    </span>
                  </span>
                </button>
              </li>
              <ul>
                {#each meals[0].recipes as mealRecipe, recipeIndex (mealRecipe.recipeUuid + "-" + recipeIndex)}
                  {@const recipe = recipesDetails.find(
                    (r) => r.$id === mealRecipe.recipeUuid,
                  )}
                  {@const mealRecipeKey =
                    (meals[0].id || meals[0].date) + "-" + recipeIndex}
                  {#if recipe}
                    <li>
                      <button
                        class="btn btn-sm ml-8 justify-start {selectedMealRecipeFilter ===
                        mealRecipeKey
                          ? 'btn-accent'
                          : 'btn-ghost'}"
                        onclick={() => {
                          selectedDateFilter = null;
                          selectedTimeFilter = null;
                          selectedMealRecipeFilter =
                            selectedMealRecipeFilter === mealRecipeKey
                              ? null
                              : mealRecipeKey;
                          selectedIngredient = ""; // Réinitialiser le filtre d'ingrédient
                        }}
                      >
                        <span class="max-w-[300px] truncate text-left">
                          {recipe.title}
                        </span>
                      </button>
                    </li>
                  {/if}
                {/each}
              </ul>
            {/each}
          </ul>
        {/each}
      </ul>

      {#if selectedDateFilter || selectedTimeFilter || selectedMealRecipeFilter}
        <div class="my-4">
          <button
            class="btn btn-dash btn-block btn-primary"
            onclick={() => {
              selectedDateFilter = null;
              selectedTimeFilter = null;
              selectedMealRecipeFilter = null;
            }}
            aria-label="Afficher toutes les recettes"
          >
            <Eye size={18} />
            Afficher toutes les recettes
          </button>
        </div>
      {/if}
    </LeftPanel>
  </div>
  <!-- Contenu principal -->
  <div class="print:ml-0 {!globalState.isMobile && ' ml-110'}">
    <div class="mx-auto max-w-6xl px-1 py-8 md:px-4">
      <!-- En-tête de l'événement -->
      {#if loading}
        <div class="flex justify-center py-20">
          <span class="loading loading-spinner loading-lg"></span>
        </div>
      {:else if error}
        <div class="alert alert-error">
          <div>
            <h3 class="font-bold">Erreur</h3>
            <div>{error}</div>
          </div>
        </div>
      {:else if eventName}
        <div class="mb-8 space-y-4 print:hidden">
          <!-- Informations principales -->
          <div class="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 class="text-3xl font-bold">{eventName}</h1>
              <div class="text-base-content/60 text-sm">
                {#if startDate && endDate}
                  <Calendar class="inline h-4 w-4" />
                  {formatDateShort(startDate)} au {formatDateShort(endDate)}
                {:else if startDate}
                  <Calendar class="inline h-4 w-4" />
                  {formatDateShort(startDate)}
                {/if}
              </div>
            </div>
          </div>

          <!-- Statistiques -->
          <div class="flex justify-end p-4">
            <EventStats {currentEvent} />
          </div>

          <!-- filtre en cours -->
          {#if selectedDateFilter || selectedTimeFilter || selectedMealRecipeFilter || selectedIngredient}
            <div class="m-4 flex items-center justify-center gap-2">
              <div class="badge badge-xl badge-primary">
                <Funnel class="mr-1 h-4 w-4" />
                filtre :
                {#if selectedDateFilter}
                  <span class="mr-1">{selectedDateFilter}</span>
                {/if}
                {#if selectedTimeFilter}
                  <span class="mr-1">{selectedTimeFilter}</span>
                {/if}
                {#if selectedMealRecipeFilter}
                  <span class="mr-1"> recette</span>
                {/if}
                {#if selectedIngredient}
                  <span>{selectedIngredient}</span>
                {/if}
              </div>
              <button
                class="btn btn-dash btn-sm"
                onclick={() => {
                  selectedDateFilter = null;
                  selectedTimeFilter = null;
                  selectedMealRecipeFilter = null;
                  selectedIngredient = "";
                }}
                aria-label="Afficher toutes les recettes"
              >
                <Eye class="h-4 w-4" />
                Afficher toutes les recettes
              </button>
            </div>
          {/if}
        </div>

        <!-- Grille des recettes -->
        {#if selectedIngredient}
          <!-- Mode recherche par ingrédient : afficher les recettes filtrées -->
          {#if filteredRecipes.length === 0}
            <div
              class="bg-base-100 border-base-300 rounded-xl border p-8 text-center"
            >
              <p class="text-base-content/60 text-lg">
                Aucune recette ne contient l'ingrédient "{selectedIngredient}".
              </p>
            </div>
          {:else}
            <div class="space-y-8">
              {#each eventMeals as meal, mealIndex (meal.id || mealIndex)}
                {@const recipesMatchingSearch = meal.recipes.filter((mr: any) =>
                  filteredRecipes.some((fr) => fr.$id === mr.recipeUuid),
                )}
                {#if recipesMatchingSearch.length > 0}
                  <!-- Date break -->
                  <div
                    id="meal-{meal.date}"
                    class="card bg-accent text-accent-content flex flex-row items-center justify-center gap-6 p-4 text-lg font-black print:hidden"
                  >
                    <div class="">
                      {formatDateWdDayMonth(meal.date)}
                    </div>
                    <div>{extractTime(meal.date)}</div>
                    <div class="badge badge-outline">
                      <Utensils size={16} />
                      {meal.guests}
                    </div>
                    <div class="badge badge-outline">
                      <CookingPot size={16} />
                      {recipesMatchingSearch.length}
                    </div>
                  </div>

                  <!-- Recettes qui correspondent à la recherche -->
                  {#each recipesMatchingSearch as mealRecipe, recipeIndex ((meal.id || mealIndex) + "-" + mealRecipe.recipeUuid + "-" + recipeIndex)}
                    {@const recipe = recipesDetails.find(
                      (r) => r.$id === mealRecipe.recipeUuid,
                    )}
                    <div class="break-after-page">
                      {#if recipe}
                        <EventRecipeCard
                          {recipe}
                          {meal}
                          {mealRecipe}
                          {totalGuests}
                        />
                      {/if}
                    </div>
                  {/each}
                {/if}
              {/each}
            </div>
          {/if}
        {:else}
          <!-- Mode normal : afficher les repas filtrés par date/moment/recette -->
          {#if filteredMeals.length === 0 && (selectedDateFilter || selectedTimeFilter)}
            <div
              class="bg-base-100 border-base-300 rounded-xl border p-8 text-center"
            >
              <p class="text-base-content/60 text-lg">
                Aucune recette ne correspond aux filtres sélectionnés.
              </p>
              <button
                class="btn btn-primary mt-4"
                onclick={() => {
                  selectedDateFilter = null;
                  selectedTimeFilter = null;
                  selectedMealRecipeFilter = null;
                }}
              >
                Réinitialiser les filtres
              </button>
            </div>
          {:else}
            <div class="space-y-8">
              {#each filteredMeals as meal, mealIndex (meal.id || mealIndex)}
                <!-- Filtrer les recettes individuellement si sélectionné -->
                {@const mealRecipesToDisplay = selectedMealRecipeFilter
                  ? (() => {
                      const [mealId, recipeIndex] =
                        selectedMealRecipeFilter.split("-");
                      const currentMealId = meal.id || meal.date;
                      if (mealId !== currentMealId.toString()) return [];
                      return meal.recipes.filter(
                        (_mr: any, idx: number) =>
                          idx === parseInt(recipeIndex),
                      );
                    })()
                  : meal.recipes}

                {#if mealRecipesToDisplay.length > 0}
                  <!-- Date break -->
                  <div
                    id="meal-{meal.date}"
                    class="card bg-primary text-primary-content flex flex-row items-center justify-center gap-6 p-4 text-lg font-black print:hidden"
                  >
                    <div class="">
                      {formatDateWdDayMonth(meal.date)}
                    </div>
                    <div>{extractTime(meal.date)}</div>
                    <div class="badge badge-outline">
                      <Utensils size={16} />
                      {meal.guests}
                    </div>
                    <div class="badge badge-outline">
                      <CookingPot size={16} />
                      {mealRecipesToDisplay.length}
                    </div>
                  </div>

                  <!-- Recettes -->
                  {#each mealRecipesToDisplay as mealRecipe, recipeIndex ((meal.id || mealIndex) + "-" + mealRecipe.recipeUuid + "-" + recipeIndex)}
                    {@const recipe = recipesDetails.find(
                      (r) => r.$id === mealRecipe.recipeUuid,
                    )}
                    <div class="break-after-page">
                      {#if recipe}
                        <EventRecipeCard
                          {recipe}
                          {meal}
                          {mealRecipe}
                          {totalGuests}
                        />
                      {/if}
                    </div>
                  {/each}
                {/if}
              {/each}
            </div>
            {#if selectedDateFilter || selectedTimeFilter || selectedMealRecipeFilter}
              <button
                class="btn btn-dash btn-block my-5"
                onclick={() => {
                  selectedDateFilter = null;
                  selectedTimeFilter = null;
                  selectedMealRecipeFilter = null;
                  selectedIngredient = "";
                }}
                aria-label="Afficher toutes les recettes"
              >
                <Eye class="h-4 w-4" />
                Afficher toutes les recettes
              </button>
            {/if}
          {/if}
        {/if}

        <!-- Message si pas de recettes du tout -->
        {#if !selectedIngredient && recipesDetails.length === 0 && !loading}
          <div
            class="bg-base-100 border-base-300 rounded-xl border p-8 text-center"
          >
            <p class="text-base-content/60 text-lg">
              Aucune recette n'a encore été ajoutée à cet événement.
            </p>
          </div>
        {/if}
      {/if}
    </div>
  </div>
</div>
