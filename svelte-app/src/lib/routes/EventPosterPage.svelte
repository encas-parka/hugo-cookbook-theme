<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { SvelteMap } from "svelte/reactivity";
  import { eventsStore } from "$lib/stores/EventsStore.svelte";
  import { recipesStore } from "$lib/stores/RecipesStore.svelte";
  import type { RecipeForDisplay } from "$lib/types/recipes.types";
  import { globalState } from "$lib/stores/GlobalState.svelte";
  import { navigate } from "$lib/services/simple-router.svelte";
  import PosterConfiguration from "$lib/components/eventPoster/PosterConfiguration.svelte";
  import PosterDisplay from "$lib/components/eventPoster/PosterDisplay.svelte";
  import { notificationStore } from "$lib/stores/NotificationStore.svelte";
  import { ChevronLeft, Printer, AlertCircle } from "@lucide/svelte";
  import HeaderNav from "$lib/components/HeaderNav.svelte";
  import LeftPanel from "$lib/components/ui/LeftPanel.svelte";
  import { navBarStore } from "$lib/stores/NavBarStore.svelte";

  // Props from router
  interface Props {
    params: Record<string, string>;
    query: Record<string, string>;
  }
  let { params }: Props = $props();

  // Event data
  let event = $derived(eventsStore.getEventById(params.id));
  let eventLoading = $state(false);
  let eventError = $state<string | null>(null);
  let recipesDetails = $state<RecipeForDisplay[]>([]);
  let recipesLoading = $state(false);

  // Poster configuration state
  let config = $state({
    showDate: true,
    showHoraire: true,
    showDescription: false,
    showCategories: true,
    showRecipes: true,
    showRegimes: false,
    showAllergens: false,
    showIngredients: false,
    catPageBreak: false,
    dateByPageBreak: false,
    messageBottom: "",
    // Font styles
    fontDate: "montserrat-font",
    fontSizeDate: "font-size: 24px",
    fontHoraire: "montserrat-font",
    fontSizeHoraire: "font-size: 24px",
    fontCat: "montserrat-font",
    fontSizeCat: "font-size: 24px",
    fontRecettes: "pacifico-regular",
    fontSizeRecettes: "font-size: 32px",
    fontDesc: "noDisplay",
    fontSizeDesc: "font-size: 16px",
    fontRegimes: "noDisplay",
    fontSizeRegimes: "font-size: 18px",
    fontAlert: "noDisplay",
    fontSizeAlert: "font-size: 14px",
    fontIng: "noDisplay",
    fontSizeIng: "font-size: 14px",
  });

  // Print state
  let sectionsToPrint = $state<Record<string, boolean>>({});

  // Recipe modifications (temporary for printing)
  let recipeVisibility = $state<Record<string, boolean>>({});
  let recipeNames = $state<Record<string, string>>({});
  let editingRecipe = $state<string | null>(null);

  // Grouped meals by date and horaire
  type GroupedMeals = SvelteMap<string, SvelteMap<string, any[]>>;

  let groupedMeals = $derived.by(() => {
    if (!event?.meals) return new SvelteMap();

    const grouped: GroupedMeals = new SvelteMap();

    event.meals.forEach((meal) => {
      const date = new Date(meal.date);
      const dateKey = date.toISOString().split("T")[0]; // YYYY-MM-DD

      // Extract horaire from time
      const hours = date.getHours();
      const horaire =
        hours < 12
          ? "Petit-déjeuner"
          : hours < 14
            ? "Déjeuner"
            : hours < 18
              ? "Goûter"
              : "Dîner";

      if (!grouped.has(dateKey)) {
        grouped.set(dateKey, new SvelteMap());
      }

      const dateGroup = grouped.get(dateKey)!;
      if (!dateGroup.has(horaire)) {
        dateGroup.set(horaire, []);
      }

      dateGroup.get(horaire)!.push(meal);
    });

    return grouped;
  });

  // Initialize sections to print based on groupedMeals
  $effect(() => {
    if (!event?.meals) return;

    event.meals.forEach((meal) => {
      const date = new Date(meal.date);
      const dateKey = date.toISOString().split("T")[0].replace(/-/g, "");
      const hours = date.getHours();
      const horaire =
        hours < 12
          ? "Petit-déjeuner"
          : hours < 14
            ? "Déjeuner"
            : hours < 18
              ? "Goûter"
              : "Dîner";
      const sectionId = `affiche${dateKey}${horaire}`;

      if (!(sectionId in sectionsToPrint)) {
        sectionsToPrint[sectionId] = true;
      }
    });
  });

  // Load event on mount
  onMount(async () => {
    if (!event) {
      eventLoading = true;
      try {
        await eventsStore.fetchEvent(params.id);
        // event is automatically updated via $derived after fetch
      } catch (err) {
        eventError =
          err instanceof Error ? err.message : "Erreur de chargement";
      } finally {
        eventLoading = false;
      }
    }
  });

  // Load recipes when event is loaded (using $effect like EventRecipesPage)
  $effect(async () => {
    if (!event || eventLoading) return;

    // Only load if we haven't loaded yet
    if (recipesDetails.length === 0 && !recipesLoading) {
      await loadEventRecipes();
      // Initialize recipe visibility and names after recipes are loaded
      initializeRecipeState();
    }
  });

  // Load all recipes for the event (pattern from EventRecipesPage)
  async function loadEventRecipes() {
    if (!event?.meals) return;

    recipesLoading = true;
    try {
      // Récupérer les détails de toutes les recettes en parallèle
      const recipesPromises = event.meals.flatMap((meal) =>
        meal.recipes.map((mealRecipe: any) => {
          console.log(`[EventPoster] Loading recipe: ${mealRecipe.recipeUuid}`);
          return recipesStore.getRecipeByUuid(mealRecipe.recipeUuid);
        }),
      );

      const recipes = await Promise.all(recipesPromises);
      recipesDetails = recipes.filter(Boolean);

      console.log(
        `[EventPoster] Loaded ${recipesDetails.length} recipes out of ${recipesPromises.length} requested`,
      );
      console.log(
        `[EventPoster] Recipe IDs:`,
        recipesDetails.map((r) => r.$id),
      );
    } catch (err) {
      console.error("Erreur lors du chargement des recettes:", err);
    } finally {
      recipesLoading = false;
    }
  }

  function initializeRecipeState() {
    if (!event?.meals) return;

    event.meals.forEach((meal) => {
      const date = new Date(meal.date);
      const dateKey = date.toISOString().split("T")[0].replace(/-/g, "");
      const hours = date.getHours();
      const horaire =
        hours < 12
          ? "Petit-déjeuner"
          : hours < 14
            ? "Déjeuner"
            : hours < 18
              ? "Goûter"
              : "Dîner";
      const mealKey = `${dateKey}${horaire}`;

      meal.recipes.forEach((recipe) => {
        const recipeKey = `${mealKey}_${recipe.recipeUuid}`;
        recipeVisibility[recipeKey] = true;
        // Get recipe name
        const indexEntry = recipesStore.getRecipeIndexByUuid(recipe.recipeUuid);
        recipeNames[recipeKey] = indexEntry?.title || recipe.recipeUuid;
      });
    });
  }

  // Print functions
  function printThis(sectionId: string) {
    // Set all sections to no-print except the one we want
    Object.keys(sectionsToPrint).forEach((key) => {
      sectionsToPrint[key] = key === sectionId;
    });

    setTimeout(() => {
      window.print();
      // Reset after print
      Object.keys(sectionsToPrint).forEach((key) => {
        sectionsToPrint[key] = true;
      });
    }, 100);
  }

  function printAll() {
    Object.keys(sectionsToPrint).forEach((key) => {
      sectionsToPrint[key] = true;
    });
    window.print();
  }

  // Recipe modification functions
  function toggleRecipeVisibility(recipeKey: string) {
    recipeVisibility[recipeKey] = !recipeVisibility[recipeKey];
    if (!recipeVisibility[recipeKey]) {
      console.log("to-implement");
    }
  }

  function startEditingRecipe(recipeKey: string) {
    editingRecipe = recipeKey;
  }

  function finishEditingRecipe() {
    editingRecipe = null;
  }

  function updateRecipeName(recipeKey: string, newName: string) {
    recipeNames[recipeKey] = newName;
  }

  function getRecipeName(recipeKey: string, originalName: string) {
    return recipeNames[recipeKey] || originalName;
  }

  // Go back to event edit
  function goBack() {
    navigate(`/dashboard/eventEdit/${params.id}`);
  }

  // Configure nav bar
  $effect(() => {
    if (event) {
      navBarStore.setConfig({
        title: `Affiches : ${event.name}`,
        backAction: goBack,
        actions: navActions,
      });
    }
  });

  // Cleanup nav bar on unmount
  onDestroy(() => {
    navBarStore.reset();
  });
</script>

{#snippet navActions()}
  <button class="btn btn-primary gap-2" onclick={printAll}>
    <Printer class="h-5 w-5" />
    Imprimer tout
  </button>
{/snippet}

{#if eventLoading}
  <div class="flex min-h-[60vh] items-center justify-center">
    <div class="loading loading-spinner loading-lg text-primary"></div>
  </div>
{:else if eventError}
  <div class="container mx-auto p-4">
    <div class="alert alert-error">
      <AlertCircle class="h-6 w-6 shrink-0" />
      <span>{eventError}</span>
    </div>
  </div>
{:else if event}
  <div class="bg-base-200 min-h-screen">
    <!-- Left Panel for Configuration -->
    <LeftPanel width="80" bgClass="bg-base-100">
      <PosterConfiguration bind:config />
    </LeftPanel>

    <!-- Main Content Area with left margin for desktop -->
    <div class="print-hidden {globalState.isDesktop ? 'ml-80' : ''}">
      <PosterDisplay
        {event}
        {groupedMeals}
        {config}
        {sectionsToPrint}
        {recipesDetails}
        {recipeVisibility}
        {recipeNames}
        {editingRecipe}
        {printThis}
        {toggleRecipeVisibility}
        {startEditingRecipe}
        {finishEditingRecipe}
        {updateRecipeName}
        {getRecipeName}
      />
    </div>
  </div>
{/if}

<style>
  /* Google Fonts import */
  @import url("https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,700;0,900;1,900&family=Gluten:wght@500&family=Montserrat:wght@100..900&family=Pacifico&display=swap");

  /* Font classes */
  .montserrat-font {
    font-family: "Montserrat", sans-serif;
  }

  .gluten-font {
    font-family: "Gluten", cursive;
  }

  .pacifico-regular {
    font-family: "Pacifico", cursive;
  }

  .fira-sans {
    font-family: "Fira Sans", sans-serif;
  }

  .noDisplay {
    display: none !important;
  }

  /* Print styles */
  @media print {
    .no-print {
      display: none !important;
    }

    .print-nocard {
      background: transparent !important;
      box-shadow: none !important;
      border: none !important;
    }

    .page-break-after {
      page-break-after: always;
      break-after: always;
    }

    .page-break-before {
      page-break-before: always;
      break-before: always;
    }

    .avoid-break-inside {
      page-break-inside: avoid;
      break-inside: avoid;
    }

    .printonly {
      display: block !important;
    }

    * {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
      color-adjust: exact !important;
    }

    .recipe-actions {
      display: none !important;
    }

    .recipe-hidden-placeholder {
      display: none !important;
    }

    body {
      margin: 0;
      padding: 0;
    }

    .print-col-12 {
      width: 100% !important;
      max-width: 100% !important;
      flex: 0 0 100% !important;
    }

    .text-base-content {
      color: #000 !important;
    }

    .badge-ghost {
      background-color: #f0f0f0 !important;
      color: #000 !important;
      border: 1px solid #ccc !important;
    }

    .badge-info {
      background-color: #e0f2fe !important;
      color: #000 !important;
      border: 1px solid #0284c7 !important;
    }

    .text-error {
      color: #dc2626 !important;
    }
  }

  .printonly {
    display: none;
  }

  @media print {
    .printonly {
      display: block !important;
    }
  }

  /* Recipe container styles */
  .recipe-container {
    position: relative;
  }

  .recipe-actions {
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
    transition: opacity 0.2s ease;
    z-index: 10;
  }

  .recipe-container:hover .recipe-actions {
    opacity: 1;
  }

  @media print {
    .recipe-actions {
      display: none !important;
    }

    .recipe-hidden-placeholder {
      display: none !important;
    }
  }

  .recipe-hidden-placeholder {
    text-align: center;
    padding: 20px;
    background-color: #f8f9fa;
    border: 2px dashed #dee2e6;
    border-radius: 8px;
    margin-bottom: 1rem;
  }
</style>
