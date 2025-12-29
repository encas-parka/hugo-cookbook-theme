<script lang="ts">
  import type { RecipeIndexEntry } from "$lib/types/recipes.types";
  import { navigate } from "$lib/services/simple-router.svelte";
  import RecipeRegimeBadges from "./RecipeRegimeBadges.svelte";
  import { getTypeDisplay } from "$lib/utils/recipeUtils";

  interface Props {
    recipe: RecipeIndexEntry;
    highlightedIngredients?: string[];
  }

  let { recipe, highlightedIngredients = [] }: Props = $props();

  function handleClick() {
    navigate(`/recipe/${recipe.$id}`);
  }

  // Récupérer l'affichage avec la priorité : catégorie > type
  const typeDisplay = getTypeDisplay(
    recipe.typeR,
    recipe.categories || undefined,
  );
</script>

<div
  class="card bg-base-100 cursor-pointer p-4 shadow-sm transition-shadow hover:shadow-md"
  onclick={handleClick}
  role="button"
  tabindex="0"
  onkeydown={(e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleClick();
    }
  }}
>
  <!-- Header -->
  <div class="mb-2 flex flex-wrap items-start justify-between gap-4">
    <div class="min-w-72 flex-1">
      <div
        class="text-primary flex items-center-safe gap-2 text-lg font-semibold"
      >
        <svg class="size-6">
          <use href={`/icons/type/types-sprite.svg#${typeDisplay.iconId}`} />
        </svg>
        {recipe.title}
        {#if recipe.draft}
          <div class="badge badge-accent badge-outline badge-sm">brouillon</div>
        {/if}
      </div>
      <div class="text-base-content/60 text-sm">
        {#if recipe.auteur}
          <span>de {recipe.auteur} - </span>
        {/if}
        {#if recipe.check}
          <span>
            testée pour {recipe.plate}
            couverts
          </span>
        {:else}
          <span>
            théoriquement pour {recipe.plate} couverts
            <strong>(non testée !)</strong>
          </span>
        {/if}
      </div>
    </div>
    <div>
      {#if recipe.regime}
        <RecipeRegimeBadges regimes={recipe.regime} iconOnly />
      {/if}
    </div>

    <!-- Badges -->
    <div class="flex flex-col justify-end gap-2">
      <div class="flex flex-wrap justify-end gap-1">
        {#if recipe.categories}
          {#if recipe.region}
            <span class="badge badge-ghost badge-sm">{recipe.region}</span>
          {/if}
          {#each recipe.categories as categorie}
            <span class="badge badge-primary badge-soft badge-sm"
              >{categorie}</span
            >
          {/each}
        {/if}
      </div>

      <div class="mb-2 flex flex-wrap justify-end gap-1">
        {#if recipe.serveHot}
          <span class="badge badge-soft badge-sm badge-error">Servir Chaud</span
          >
        {:else}
          <span class="badge badge-soft badge-sm badge-info">Servir Froid</span>
        {/if}

        {#if recipe.cuisson}
          <span class="badge badge-soft badge-sm badge-warning"
            >Avec Cuisson</span
          >
        {:else}
          <span class="badge badge-soft badge-sm badge-success"
            >Sans Cuisson</span
          >
        {/if}

        {#if recipe.saison}
          {#each recipe.saison as saison}
            <span class="badge badge-soft badge-accent badge-sm">{saison}</span>
          {/each}
        {/if}
      </div>
    </div>
    <!-- Badges température et cuisson -->
  </div>

  <!-- Ingrédients -->
  {#if recipe.ingredients && recipe.ingredients.length > 0}
    <div class="text-sm">
      <span class="font-semibold">Ingrédients : </span>
      {#each recipe.ingredients as ingredient, index}
        <span
          class="me-1"
          class:font-bold={highlightedIngredients.includes(ingredient)}
          class:underline={highlightedIngredients.includes(ingredient)}
        >
          {ingredient}{#if index < recipe.ingredients.length - 1},{/if}
        </span>
      {/each}
    </div>
  {/if}

  <!-- Matériel -->
  {#if recipe.materiel && recipe.materiel.length > 0}
    <div class="text-sm">
      <span class="font-semibold">Matériel : </span>
      {#each recipe.materiel as item, index}
        <span class="me-1">
          {item}{#if index < recipe.materiel.length - 1},
          {/if}
        </span>
      {/each}
    </div>
  {/if}
</div>
