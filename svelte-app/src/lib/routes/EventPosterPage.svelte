<script lang="ts">
  import { onMount, onDestroy, tick } from "svelte";
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
    messageTop: "",
    fontTop: "montserrat-font",
    fontSizeTop: 1,
    boldTop: false,
    italicTop: false,
    messageBottom: "",
    fontBottom: "montserrat-font",
    fontSizeBottom: 1,
    boldBottom: false,
    italicBottom: false,
    // Font styles
    fontDate: "montserrat-font",
    fontSizeDate: 1,
    boldDate: false,
    italicDate: false,
    fontHoraire: "montserrat-font",
    fontSizeHoraire: 1,
    boldHoraire: false,
    italicHoraire: false,
    fontCat: "montserrat-font",
    fontSizeCat: 1,
    boldCat: false,
    italicCat: false,
    fontRecettes: "pacifico-regular",
    fontSizeRecettes: 2,
    boldRecettes: false,
    italicRecettes: false,
    fontDesc: "montserrat-font",
    fontSizeDesc: 1,
    boldDesc: false,
    italicDesc: false,
    fontRegimes: "montserrat-font",
    fontSizeRegimes: 1,
    boldRegimes: false,
    italicRegimes: false,
    fontAlert: "montserrat-font",
    fontSizeAlert: 1,
    boldAlert: false,
    italicAlert: false,
    fontIng: "montserrat-font",
    fontSizeIng: 1,
    boldIng: false,
    italicIng: false,
    centerVertical: true,
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
      const dateKey = date.toISOString().split("T")[0];
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

    // Also initialize page-specific IDs if catPageBreak is enabled
    // Note: Since this depends on categories which depend on recipes,
    // we use a broad initialization or let MealPoster handle its own buttons.
    // Better: We ensure any sectionId passed to printThis exists in sectionsToPrint.
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
      recipesDetails = recipes.filter((r): r is RecipeForDisplay => r !== null);

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
      const dateKey = date.toISOString().split("T")[0];
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
  async function printThis(sectionId: string) {
    // Ensure the sectionId exists in our record
    if (!(sectionId in sectionsToPrint)) {
      sectionsToPrint[sectionId] = true;
    }

    // Set all sections to no-print except the one we want
    Object.keys(sectionsToPrint).forEach((key) => {
      sectionsToPrint[key] = key === sectionId;
    });

    // Wait for Svelte to update the DOM
    await tick();

    // Small timeout to ensure browser has processed the DOM changes
    setTimeout(() => {
      window.print();
      // Reset after print
      Object.keys(sectionsToPrint).forEach((key) => {
        sectionsToPrint[key] = true;
      });
    }, 900);
  }

  async function printAll() {
    // Force all to true first
    Object.keys(sectionsToPrint).forEach((key) => {
      sectionsToPrint[key] = true;
    });

    await tick();

    setTimeout(() => {
      window.print();
    }, 500);
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
    <div
      class="print:m-0 print:block print:p-0 {globalState.isDesktop
        ? 'ml-80'
        : ''}"
    >
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
