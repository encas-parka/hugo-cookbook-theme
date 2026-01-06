<script lang="ts">
  import type { PosterConfig } from "./poster.types";
  import type { EnrichedEvent } from "$lib/types/events.d";
  import type { RecipeForDisplay } from "$lib/types/recipes.types";
  import MealPoster from "./MealPoster.svelte";
  import type { SvelteMap } from "svelte/reactivity";

  interface Props {
    event: EnrichedEvent;
    groupedMeals: SvelteMap<string, SvelteMap<string, any[]>>;
    config: PosterConfig;
    sectionsToPrint: Record<string, boolean>;
    recipesDetails: RecipeForDisplay[];
    recipeVisibility: Record<string, boolean>;
    recipeNames: Record<string, string>;
    editingRecipe: string | null;
    printThis: (sectionId: string) => void;
    toggleRecipeVisibility: (recipeKey: string) => void;
    startEditingRecipe: (recipeKey: string) => void;
    finishEditingRecipe: () => void;
    updateRecipeName: (recipeKey: string, newName: string) => void;
    getRecipeName: (recipeKey: string, originalName: string) => string;
  }

  let {
    event,
    groupedMeals,
    config,
    sectionsToPrint,
    recipesDetails,
    recipeVisibility,
    recipeNames,
    editingRecipe,
    printThis,
    toggleRecipeVisibility,
    startEditingRecipe,
    finishEditingRecipe,
    updateRecipeName,
    getRecipeName,
  }: Props = $props();

  // Flatten grouped meals for iteration
  let flatMeals = $derived.by(() => {
    const result: Array<{
      dateKey: string;
      date: Date;
      horaire: string;
      meals: any[];
    }> = [];

    groupedMeals.forEach((dateGroup, dateKey) => {
      dateGroup.forEach((meals, horaire) => {
        result.push({
          dateKey,
          date: new Date(dateKey),
          horaire,
          meals,
        });
      });
    });

    // Sort by date
    return result.sort((a, b) => a.date.getTime() - b.date.getTime());
  });
</script>

<div
  class="bg-base-200 flex-1 overflow-auto p-4 print:m-0 print:overflow-visible print:p-0"
>
  <div
    class="mx-auto max-w-5xl space-y-8 print:m-0 print:w-full print:max-w-none print:space-y-0"
  >
    {#each flatMeals as mealGroup (mealGroup.dateKey + mealGroup.horaire)}
      {@const sectionId = `affiche${mealGroup.dateKey}${mealGroup.horaire}`}
      <div class="space-y-4 print:m-0 print:space-y-0 print:p-0">
        <MealPoster
          {sectionId}
          dateKey={mealGroup.dateKey}
          date={mealGroup.date}
          horaire={mealGroup.horaire}
          meals={mealGroup.meals}
          {config}
          {sectionsToPrint}
          {recipesDetails}
          {recipeVisibility}
          {recipeNames}
          {editingRecipe}
          onPrintThis={printThis}
          onToggleRecipe={toggleRecipeVisibility}
          onStartEditRecipe={startEditingRecipe}
          onFinishEditRecipe={finishEditingRecipe}
          onUpdateRecipeName={updateRecipeName}
          {getRecipeName}
        />
      </div>
    {/each}
  </div>
</div>
