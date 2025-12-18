<script lang="ts">
  import type { RecipeIndexEntry } from "$lib/types/recipes.types";
  import { navigate } from "$lib/services/simple-router.svelte";
  import { Users, ChefHat } from "@lucide/svelte";

  interface Props {
    recipe: RecipeIndexEntry;
    highlightedIngredients?: string[];
  }

  let { recipe, highlightedIngredients = [] }: Props = $props();

  function handleClick() {
    navigate(`/recipe/${recipe.slug}`);
  }

  function getTypeLabel(type: string): string {
    switch (type) {
      case "entree":
        return "Entrée";
      case "plat":
        return "Plat";
      case "dessert":
        return "Dessert";
      default:
        return type;
    }
  }
</script>

<div
  class="card bg-base-200/30 hover:bg-base-200/60 cursor-pointer p-4 shadow-sm transition-shadow"
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
  <div class="mb-2 flex items-baseline justify-between">
    <div class="flex-1">
      <h3 class="text-lg font-semibold">{recipe.title}</h3>
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

    <!-- Badges catégories et saisons -->
    <div class="flex flex-wrap justify-end gap-1">
      {#if recipe.categories}
        {#each recipe.categories as categorie}
          <span class="badge badge-primary badge-sm">{categorie}</span>
        {/each}
      {/if}
      {#if recipe.saison}
        {#each recipe.saison as saison}
          <span class="badge badge-accent badge-sm">{saison}</span>
        {/each}
      {/if}
      {#if recipe.region}
        <span class="text-base-content/60 text-sm">{recipe.region}</span>
      {/if}
    </div>
  </div>

  <!-- Badges température et cuisson -->
  <div class="mb-2 flex flex-wrap gap-1">
    {#if recipe.serveHot}
      <span class="badge badge-error text-white">Servir Chaud</span>
    {:else}
      <span class="badge badge-info">Servir Froid</span>
    {/if}

    {#if recipe.cuisson}
      <span class="badge badge-warning">Avec Cuisson</span>
    {:else}
      <span class="badge badge-success">Sans Cuisson</span>
    {/if}

    <!-- Badges régimes -->
    {#if recipe.regime}
      {#each recipe.regime as r}
        <span class="badge badge-secondary badge-sm">{r}</span>
      {/each}
    {/if}
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
