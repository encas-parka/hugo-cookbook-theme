<script lang="ts">
  import { onMount } from "svelte";
  import { eventsStore } from "$lib/stores/EventsStore.svelte";
  import { recipesStore } from "$lib/stores/RecipesStore.svelte";
  import { createEventStats } from "$lib/stores/EventStatsStore.svelte";
  import { navigate } from "$lib/services/simple-router.svelte";
  import { navBarStore } from "../stores/NavBarStore.svelte";
  import { onDestroy } from "svelte";
  import EventStats from "$lib/components/EventStats.svelte";
  import { EventStatsStore } from "$lib/stores/EventStatsStore.svelte";
  import EventRecipeCard from "$lib/components/eventEdit/EventRecipeCard.svelte";
  import LeftPanel from "$lib/components/ui/LeftPanel.svelte";
  import { formatDateShort } from "$lib/utils/products-display";
  import {
    ArrowLeft,
    Calendar,
    CookingPot,
    Utensils,
    Search,
    X,
    Eye,
    Library,
  } from "@lucide/svelte";
  import { extractTime, formatDateWdDayMonth } from "../utils/date-helpers";
  import { globalState } from "../stores/GlobalState.svelte";

  interface Props {
    params?: { id?: string };
  }

  let { params }: Props = $props();

  // État local
  let loading = $state(true);
  let error = $state<string | null>(null);
  let eventId = $state<string | null>(null);

  // Stores
  let eventStats = $derived.by(() => new EventStatsStore(eventId || ""));
  let eventMeals = $state<any[]>([]);
  let recipesDetails = $state<any[]>([]);

  // Pour éviter les rechargements en boucle
  let isLoading = $state(false);

  // État pour la recherche par ingrédients
  let searchQuery = $state("");

  // État pour les filtres de date, moment et recette individuelle
  let selectedDateFilter = $state<string | null>(null);
  let selectedTimeFilter = $state<string | null>(null);
  let selectedRecipeFilter = $state<string | null>(null);

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
  const filteredRecipes = $derived(() => {
    let recipes = recipesDetails;

    // Filtrer par la recherche d'ingrédients
    if (searchQuery) {
      recipes = recipes.filter(
        (recipe) =>
          recipe.ingredients &&
          recipe.ingredients.some(
            (ingredient: any) =>
              ingredient.name &&
              ingredient.name.toLowerCase().includes(searchQuery.toLowerCase()),
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

    // Filtrer par recette individuelle
    if (selectedRecipeFilter) {
      recipes = recipes.filter(
        (recipe: any) => recipe.$id === selectedRecipeFilter,
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
  const eventName = $derived(eventStats.eventName);
  const startDate = $derived(eventStats.startDate);
  const endDate = $derived(eventStats.endDate);
  const totalGuests = $derived(eventStats.totalGuests);
  const totalRecipes = $derived(eventStats.totalRecipes);

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
      // Initialiser le store d'événement
      eventStats = createEventStats(currentEventId);
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

  // ============================================================================
  // NAVBAR CONFIGURATION
  // ============================================================================

  // Configuration des onglets pour les pages d'événement
  const eventTabs = [
    { label: "Éditer l'événement", path: "/dashboard/eventEdit" },
    { label: "Voir les recettes", path: "/dashboard/eventEdit/recipes" },
    { label: "Listes des produits", path: "/dashboard/eventEdit" },
  ];

  function navigateToTab(index: number) {
    if (!eventId) return;

    if (index === 1) {
      // Onglet "Voir les recettes" - on est déjà sur cette page
      return;
    } else if (index === 2) {
      // Onglet "Voir les produits" - nouvelle route /products
      navigate(`/dashboard/eventEdit/products/${eventId}`);
    } else {
      // Onglet "Éditer l'événement"
      navigate(`/dashboard/eventEdit/${eventId}`);
    }
  }

  $effect(() => {
    navBarStore.setConfig({
      title: eventName || "Recettes de l'événement",
      actions: navActions,
      tabs: eventTabs,
      activeTab: 1, // Index 1 pour "Voir les recettes"
    });
  });

  onDestroy(() => {
    navBarStore.reset();
  });

  // Retour à l'édition de l'événement
  function handleBackToEvent() {
    if (eventId) {
      navigate(`/dashboard/eventEdit/${eventId}`);
    }
  }
</script>

{#snippet navActions()}
  <div class="flex gap-2">
    <button class="btn btn-outline btn-sm" onclick={handleBackToEvent}>
      <ArrowLeft class="h-4 w-4" />
      Retour à l'événement
    </button>
  </div>
{/snippet}

<div class="bg-base-200 min-h-screen">
  <!-- LeftPanel avec recherche et sommaire -->
  <div class="print:hidden">
    <LeftPanel>
      <!-- Champ de recherche par ingrédients -->
      <div class="mb-6">
        <h3 class="mb-3 text-lg font-semibold">Rechercher par ingrédient</h3>
        <div class="input flex items-center gap-2">
          <Search class="h-4 w-4" />
          <input
            type="text"
            placeholder="Nom de l'ingrédient..."
            class="grow"
            bind:value={searchQuery}
          />
          <button
            class="btn btn-sm btn-circle btn-error btn-outline opacity-60"
            onclick={() => (searchQuery = "")}
            disabled={!searchQuery}
          >
            <X class="h-4 w-4" />
          </button>
        </div>
      </div>

      <!-- Sommaire réactif des recettes avec filtrage -->
      <ul class="menu bg-base-100 rounded-box w-100 drop-shadow-lg">
        {#each Array.from(mealsByDate.entries()) as [date, times] (date)}
          <li>
            <button
              class="btn btn-sm btn-ghost justify-start"
              class:btn-accent={selectedDateFilter === date &&
                !selectedTimeFilter}
              onclick={() => {
                selectedDateFilter = selectedDateFilter === date ? null : date;
                selectedTimeFilter = null; // Réinitialiser le filtre de temps
                selectedRecipeFilter = null; // Réinitialiser le filtre de recette
              }}
            >
              <span>{date}</span>
            </button>
          </li>

          <ul>
            {#each Array.from(times.entries()) as [time, meals] (time)}
              <li>
                <button
                  class="btn btn-sm btn-ghost justify-start pl-4"
                  class:btn-accent={selectedDateFilter === date &&
                    selectedTimeFilter === time}
                  onclick={() => {
                    selectedDateFilter = date;
                    selectedTimeFilter =
                      selectedTimeFilter === time ? null : time;
                    selectedRecipeFilter = null; // Réinitialiser le filtre de recette
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
                {#each meals[0].recipes as mealRecipe (mealRecipe.recipeUuid)}
                  {@const recipe = recipesDetails.find(
                    (r) => r.$id === mealRecipe.recipeUuid,
                  )}
                  {#if recipe}
                    <li>
                      <button
                        class="btn btn-sm btn-ghost ml-8 justify-start"
                        class:btn-accent={selectedRecipeFilter === recipe.$id}
                        onclick={() => {
                          selectedDateFilter = date;
                          selectedTimeFilter = time;
                          selectedRecipeFilter =
                            selectedRecipeFilter === recipe.$id
                              ? null
                              : recipe.$id;
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

      {#if selectedDateFilter || selectedTimeFilter || selectedRecipeFilter}
        <div class="my-4">
          <button
            class="btn btn-dash btn-block btn-primary"
            onclick={() => {
              selectedDateFilter = null;
              selectedTimeFilter = null;
              selectedRecipeFilter = null;
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

            <button class="btn btn-outline" onclick={handleBackToEvent}>
              <ArrowLeft class="h-4 w-4" />
              Retour à l'événement
            </button>
          </div>

          <!-- Statistiques -->
          <div class="border-base-300 bg-base-100 rounded-xl border p-6">
            <EventStats {eventStats} />
          </div>

          {#if selectedDateFilter || selectedTimeFilter || selectedRecipeFilter}
            <div class="mb-4">
              <button
                class="btn btn-dash btn-block btn-primary"
                onclick={() => {
                  selectedDateFilter = null;
                  selectedTimeFilter = null;
                  selectedRecipeFilter = null;
                }}
                aria-label="Afficher toutes les recettes"
              >
                ✕ Annuler tous les filtres
              </button>
            </div>
          {/if}
        </div>

        <!-- Grille des recettes -->
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
              }}
            >
              Réinitialiser les filtres
            </button>
          </div>
        {:else}
          <div class="space-y-8">
            {#each filteredMeals as meal, mealIndex (meal.id || mealIndex)}
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
                  {meal.recipes.length}
                </div>
              </div>

              <!-- Recettes -->
              {#each meal.recipes as mealRecipe, recipeIndex ((meal.id || mealIndex) + "-" + mealRecipe.recipeUuid + "-" + recipeIndex)}
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
            {/each}
          </div>
        {/if}

        <!-- Message si pas de recettes -->
        {#if filteredRecipes.length === 0 && searchQuery}
          <div
            class="bg-base-100 border-base-300 rounded-xl border p-8 text-center"
          >
            <p class="text-base-content/60 text-lg">
              Aucune recette ne contient l'ingrédient "{searchQuery}".
            </p>
          </div>
        {:else if recipesDetails.length === 0}
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
