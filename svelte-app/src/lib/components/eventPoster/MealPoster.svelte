<script lang="ts">
  import { SvelteMap } from "svelte/reactivity";
  import { recipesStore } from "$lib/stores/RecipesStore.svelte";
  import type { RecipeForDisplay } from "$lib/types/recipes.types";
  import RecipeCard from "./RecipeCard.svelte";
  import { ArrowBigLeft, Eye, EyeOff, Printer } from "@lucide/svelte";

  interface Props {
    sectionId: string;
    dateKey: string;
    date: Date;
    horaire: string;
    meals: any[];
    config: any;
    sectionsToPrint: Record<string, boolean>;
    recipesDetails: RecipeForDisplay[];
    recipeVisibility: Record<string, boolean>;
    recipeNames: Record<string, string>;
    editingRecipe: string | null;
    onPrintThis: (sectionId: string) => void;
    onToggleRecipe: (recipeKey: string) => void;
    onStartEditRecipe: (recipeKey: string) => void;
    onFinishEditRecipe: () => void;
    onUpdateRecipeName: (recipeKey: string, newName: string) => void;
    getRecipeName: (recipeKey: string, originalName: string) => string;
  }

  let {
    sectionId,
    dateKey,
    date,
    horaire,
    meals,
    config,
    sectionsToPrint,
    recipesDetails,
    recipeVisibility,
    recipeNames,
    editingRecipe,
    onPrintThis,
    onToggleRecipe,
    onStartEditRecipe,
    onFinishEditRecipe,
    onUpdateRecipeName,
    getRecipeName,
  }: Props = $props();

  // Custom ingredients, descriptions and visibilities state
  let recipeIngredients = $state<Record<string, string[]>>({});
  let recipeDescriptions = $state<Record<string, string>>({});
  let descriptionVisibilities = $state<Record<string, boolean>>({});

  function handleUpdateRecipeIngredients(
    recipeKey: string,
    ingredients: string[],
  ) {
    recipeIngredients[recipeKey] = ingredients;
  }

  function handleUpdateRecipeDescription(
    recipeKey: string,
    description: string,
  ) {
    recipeDescriptions[recipeKey] = description;
  }

  function handleToggleRecipeDescription(recipeKey: string) {
    const current = descriptionVisibilities[recipeKey] ?? true;
    descriptionVisibilities[recipeKey] = !current;
  }

  // Format date for display
  let formattedDate = $derived.by(() =>
    date.toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }),
  );

  // Group recipes by category
  let recipesByCategory = $derived.by(() => {
    const groups = new SvelteMap<string, any[]>();

    meals.forEach((meal) => {
      meal.recipes.forEach((recipe: any) => {
        const category = recipe.typeR || "autre";
        if (!groups.has(category)) {
          groups.set(category, []);
        }
        groups.get(category)!.push({
          ...recipe,
          mealId: meal.id,
          guests: meal.guests,
        });
      });
    });

    return groups;
  });

  // Define category order
  let categoryOrder = ["entree", "plat", "dessert"];

  // Sort categories by defined order, then alphabetically
  let sortedCategories = $derived.by(() => {
    const cats = Array.from(recipesByCategory.keys());
    return cats.sort((a, b) => {
      const indexA = categoryOrder.indexOf(a);
      const indexB = categoryOrder.indexOf(b);
      if (indexA !== -1 && indexB !== -1) return indexA - indexB;
      if (indexA !== -1) return -1;
      if (indexB !== -1) return 1;
      return a.localeCompare(b);
    });
  });

  function getCategoryLabel(category: string): string {
    const labels: Record<string, string> = {
      entree: "Entrée",
      plat: "Plat",
      dessert: "Dessert",
      autre: "Autre",
    };
    return labels[category] || category;
  }
  // Font size helpers
  function getBigFontSize(step: number) {
    const sizes = ["1.5rem", "2rem", "2.5rem", "3.2rem"];
    return `font-size: ${sizes[step] || "2.5rem"}`;
  }

  function getSmallFontSize(step: number) {
    const sizes = ["0.7rem", "0.85rem", "1rem", "1.2rem"];
    return `font-size: ${sizes[step] || "1rem"}`;
  }
</script>

<div class=" grid grid-cols-[1fr_auto] items-start gap-4 p-2">
  <!-- L'affiche A4 (Colonne de gauche, centrée) -->
  <div class="flex justify-end">
    <!-- L'affiche A4 -->
    <div
      id={sectionId}
      class="meal-poster-section relative bg-white shadow-2xl transition-shadow"
      class:no-print={!sectionsToPrint[sectionId]}
    >
      <!-- Print action (no-print) -->
      <div class=" group absolute top-4 right-4 print:hidden">
        <button
          class="btn btn-circle btn-ghost opacity-20 transition-opacity hover:opacity-100"
          onclick={() => onPrintThis(sectionId)}
          title="Imprimer ce menu"
        >
          <Printer class="h-4 w-4" />
        </button>
      </div>

      <div class="poster-content text-black">
        <!-- Message Top -->
        {#if config.messageTop}
          <div
            class="mb-8 text-center"
            class:montserrat-font={config.fontTop === "montserrat-font"}
            class:playfair-display={config.fontTop === "playfair-display"}
            class:oswald-font={config.fontTop === "oswald-font"}
            class:quicksand-font={config.fontTop === "quicksand-font"}
            class:fira-sans={config.fontTop === "fira-sans"}
            class:dancing-script={config.fontTop === "dancing-script"}
            class:pacifico-regular={config.fontTop === "pacifico-regular"}
            class:caveat-font={config.fontTop === "caveat-font"}
            class:gluten-font={config.fontTop === "gluten-font"}
            class:font-bold={config.boldTop}
            class:italic={config.italicTop}
            style={getSmallFontSize(config.fontSizeTop)}
          >
            {config.messageTop}
          </div>
        {/if}

        <!-- Date and Horaire Header -->
        <div class="mb-8 text-center">
          {#if config.showDate}
            <p
              class="m-0 text-center text-3xl"
              class:montserrat-font={config.fontDate === "montserrat-font"}
              class:gluten-font={config.fontDate === "gluten-font"}
              class:pacifico-regular={config.fontDate === "pacifico-regular"}
              class:fira-sans={config.fontDate === "fira-sans"}
              class:font-bold={config.boldDate}
              class:italic={config.italicDate}
              style={getBigFontSize(config.fontSizeDate)}
            >
              {formattedDate}
            </p>
          {/if}

          {#if config.showHoraire}
            <p
              class="m-0 text-center text-3xl"
              class:montserrat-font={config.fontHoraire === "montserrat-font"}
              class:playfair-display={config.fontHoraire === "playfair-display"}
              class:oswald-font={config.fontHoraire === "oswald-font"}
              class:quicksand-font={config.fontHoraire === "quicksand-font"}
              class:fira-sans={config.fontHoraire === "fira-sans"}
              class:dancing-script={config.fontHoraire === "dancing-script"}
              class:pacifico-regular={config.fontHoraire === "pacifico-regular"}
              class:caveat-font={config.fontHoraire === "caveat-font"}
              class:gluten-font={config.fontHoraire === "gluten-font"}
              class:font-bold={config.boldHoraire}
              class:italic={config.italicHoraire}
              style={getBigFontSize(config.fontSizeHoraire)}
            >
              {horaire}
            </p>
          {/if}

          {#if config.showHoraire || config.showDate}
            <div
              class="separator mx-auto my-6 w-48 border-t border-black opacity-20"
            ></div>
          {/if}
        </div>

        <!-- Recipes by Category -->
        {#each sortedCategories as category (category)}
          {@const isFirst = sortedCategories.indexOf(category) === 0}
          <div
            class="category-block mb-10"
            class:page-break-before={config.catPageBreak && !isFirst}
          >
            <!-- Repeat date if catPageBreak and dateByPageBreak -->
            {#if config.catPageBreak && config.dateByPageBreak && !isFirst}
              <div class="mb-6 text-center">
                {#if config.showDate}
                  <p
                    class="m-0 text-center text-3xl"
                    class:montserrat-font={config.fontDate ===
                      "montserrat-font"}
                    class:playfair-display={config.fontDate ===
                      "playfair-display"}
                    class:oswald-font={config.fontDate === "oswald-font"}
                    class:quicksand-font={config.fontDate === "quicksand-font"}
                    class:fira-sans={config.fontDate === "fira-sans"}
                    class:dancing-script={config.fontDate === "dancing-script"}
                    class:pacifico-regular={config.fontDate ===
                      "pacifico-regular"}
                    class:caveat-font={config.fontDate === "caveat-font"}
                    class:gluten-font={config.fontDate === "gluten-font"}
                    class:font-bold={config.boldDate}
                    class:italic={config.italicDate}
                    style={getBigFontSize(config.fontSizeDate)}
                  >
                    {formattedDate}
                  </p>
                {/if}

                {#if config.showHoraire}
                  <p
                    class="m-0 text-center text-3xl"
                    class:montserrat-font={config.fontHoraire ===
                      "montserrat-font"}
                    class:playfair-display={config.fontHoraire ===
                      "playfair-display"}
                    class:oswald-font={config.fontHoraire === "oswald-font"}
                    class:quicksand-font={config.fontHoraire ===
                      "quicksand-font"}
                    class:fira-sans={config.fontHoraire === "fira-sans"}
                    class:dancing-script={config.fontHoraire ===
                      "dancing-script"}
                    class:pacifico-regular={config.fontHoraire ===
                      "pacifico-regular"}
                    class:caveat-font={config.fontHoraire === "caveat-font"}
                    class:gluten-font={config.fontHoraire === "gluten-font"}
                    class:font-bold={config.boldHoraire}
                    class:italic={config.italicHoraire}
                    style={getBigFontSize(config.fontSizeHoraire)}
                  >
                    {horaire}
                  </p>
                {/if}

                <div
                  class="separator mx-auto my-6 w-48 border-t border-black opacity-20"
                ></div>
              </div>
            {/if}

            <!-- Category Header -->
            {#if config.showCategories}
              <h3
                class="mb-6 text-center text-xl tracking-widest uppercase opacity-60"
                class:montserrat-font={config.fontCat === "montserrat-font"}
                class:playfair-display={config.fontCat === "playfair-display"}
                class:oswald-font={config.fontCat === "oswald-font"}
                class:quicksand-font={config.fontCat === "quicksand-font"}
                class:fira-sans={config.fontCat === "fira-sans"}
                class:dancing-script={config.fontCat === "dancing-script"}
                class:pacifico-regular={config.fontCat === "pacifico-regular"}
                class:caveat-font={config.fontCat === "caveat-font"}
                class:gluten-font={config.fontCat === "gluten-font"}
                class:font-bold={config.boldCat}
                class:italic={config.italicCat}
                style={getBigFontSize(config.fontSizeCat)}
              >
                {getCategoryLabel(category)}
              </h3>
            {/if}

            <!-- Recipes in this category -->
            <div class="recipes-grid avoid-break-inside">
              {#each recipesByCategory.get(category) ?? [] as recipe (recipe.recipeUuid)}
                {@const recipeKey = `${dateKey}${horaire}_${recipe.recipeUuid}`}
                {@const visible = recipeVisibility[recipeKey] ?? true}
                {@const name =
                  recipeNames[recipeKey] ||
                  recipesStore.getRecipeIndexByUuid(recipe.recipeUuid)?.title ||
                  recipe.recipeUuid}
                {@const recipeData =
                  recipesDetails.find((r) => r.$id === recipe.recipeUuid) ||
                  null}

                <RecipeCard
                  {recipeKey}
                  recipeUuid={recipe.recipeUuid}
                  plates={recipe.plates}
                  typeR={recipe.typeR}
                  {category}
                  {config}
                  {visible}
                  {name}
                  {recipeData}
                  customIngredients={recipeIngredients[recipeKey] || null}
                  customDescription={recipeDescriptions[recipeKey] || null}
                  descriptionVisible={descriptionVisibilities[recipeKey] ??
                    true}
                  isEditing={editingRecipe === recipeKey}
                  onToggle={onToggleRecipe}
                  onStartEdit={onStartEditRecipe}
                  onFinishEdit={onFinishEditRecipe}
                  onUpdateName={onUpdateRecipeName}
                  onUpdateIngredients={handleUpdateRecipeIngredients}
                  onUpdateDescription={handleUpdateRecipeDescription}
                  onToggleDescription={handleToggleRecipeDescription}
                />
              {/each}
            </div>
          </div>
        {/each}

        {#if config.messageBottom}
          <div
            class="mt-12 text-center"
            class:montserrat-font={config.fontBottom === "montserrat-font"}
            class:playfair-display={config.fontBottom === "playfair-display"}
            class:oswald-font={config.fontBottom === "oswald-font"}
            class:quicksand-font={config.fontBottom === "quicksand-font"}
            class:fira-sans={config.fontBottom === "fira-sans"}
            class:dancing-script={config.fontBottom === "dancing-script"}
            class:pacifico-regular={config.fontBottom === "pacifico-regular"}
            class:caveat-font={config.fontBottom === "caveat-font"}
            class:gluten-font={config.fontBottom === "gluten-font"}
            class:font-bold={config.boldBottom}
            class:italic={config.italicBottom}
            style={getSmallFontSize(config.fontSizeBottom)}
          >
            {config.messageBottom}
          </div>
        {/if}
      </div>
    </div>
  </div>

  <!-- Boutons de restauration (no-print, Colonne de droite) -->
  <div class="m-auto flex flex-col gap-4 print:hidden">
    {#each sortedCategories as category}
      {#each recipesByCategory.get(category) ?? [] as recipe}
        {@const recipeKey = `${dateKey}${horaire}_${recipe.recipeUuid}`}
        {@const isVisible = recipeVisibility[recipeKey] ?? true}
        {@const isDescVisible = descriptionVisibilities[recipeKey] ?? true}
        {@const recipeName = getRecipeName(
          recipeKey,
          recipesStore.getRecipeIndexByUuid(recipe.recipeUuid)?.title ||
            "Recette",
        )}

        <!-- Recette masquée -->
        {#if !isVisible}
          <button
            class="btn btn-secondary btn-outline flex h-auto max-w-20 flex-col py-3"
            onclick={() => onToggleRecipe(recipeKey)}
            title="Afficher la recette"
          >
            <ArrowBigLeft class="size-5" />
            <span class="">
              {recipeName}
            </span>
          </button>
        {/if}

        <!-- Description masquée -->
        {#if isVisible && !isDescVisible}
          <button
            class="btn btn-secondary btn-outline flex h-auto flex-col py-3"
            onclick={() => handleToggleRecipeDescription(recipeKey)}
            title="Afficher la description"
          >
            <Eye class="size-5" />
            <span>
              <span class="font-bold italic">Desc:</span>
              {recipeName}
            </span>
          </button>
        {/if}
      {/each}
    {/each}
  </div>
</div>

<style>
  .meal-poster-section {
    width: 210mm;
    height: 297mm;
    margin: 2rem auto;
    border: 1px solid #efefef;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 20mm !important;
  }

  .poster-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center content vertically in the A4 sheet */
  }

  .separator {
    border-top-width: 1px;
    border-top-style: solid;
  }

  @media print {
    @page {
      size: A4;
      margin: 0;
    }

    .meal-poster-section {
      box-shadow: none !important;
      border: none !important;
      padding: 0 !important;
      margin: 0 !important;
      width: 210mm !important;
      height: 297mm !important;
    }

    .no-print {
      display: none !important;
    }
  }

  .category-block {
    break-inside: avoid;
  }
</style>
