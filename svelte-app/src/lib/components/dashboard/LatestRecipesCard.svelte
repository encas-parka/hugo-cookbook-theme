<script lang="ts">
  import { BookOpen, Clock, ChefHat, ArrowRight, Users } from "@lucide/svelte";
  import { formatTime, formatDateRelative } from "$lib/utils/date-helpers";
  import type { Recettes } from "$lib/types/appwrite.d";

  interface Props {
    recipes: Recettes[];
    loading?: boolean;
  }

  let { recipes = [], loading = false }: Props = $props();

  function formatRecipeTime(recipe: Recettes) {
    // Extraire le temps de cuisson depuis la description s'il existe
    // Ou utiliser une valeur par défaut basée sur le type de plat
    const timeMatch = recipe.preparation.match(/(\d+)\s*min/i);
    const minutes = timeMatch
      ? parseInt(timeMatch[1])
      : recipe.typeR === "entree"
        ? 20
        : recipe.typeR === "plat"
          ? 45
          : 30;
    return formatTime(minutes);
  }

  function formatRecipeDate(recipe: Recettes) {
    return formatDateRelative(
      recipe.$createdAt || recipe.publishedAt || new Date().toISOString(),
    );
  }

  function viewAllRecipes() {
    // TODO: Implémenter la navigation vers la page des recettes
    console.log("Navigate to all recipes");
  }

  function createNewRecipe() {
    // TODO: Implémenter la navigation vers la création de recette
    console.log("Create new recipe");
  }
</script>

<div class="card bg-base-100 border-base-200 border shadow-xl">
  <div class="card-body">
    <div class="flex items-center justify-between">
      <h2 class="card-title flex items-center gap-2">
        <BookOpen class="text-primary h-5 w-5" />
        Mes Dernières Recettes
      </h2>
      <button
        class="btn btn-ghost btn-sm"
        onclick={viewAllRecipes}
        title="Voir toutes les recettes"
      >
        Voir tout
      </button>
    </div>

    {#if loading}
      <div class="flex items-center justify-center py-8">
        <span class="loading loading-spinner loading-md"></span>
      </div>
    {:else if recipes.length === 0}
      <div class="py-6 text-center">
        <ChefHat class="mx-auto mb-3 h-12 w-12 opacity-20" />
        <p class="text-base-content/60 mb-4 text-sm">Aucune recette créée</p>
        <button class="btn btn-primary btn-sm" onclick={createNewRecipe}>
          <BookOpen class="mr-2 h-4 w-4" />
          Créer une recette
        </button>
      </div>
    {:else}
      <div class="space-y-3">
        {#each recipes.slice(0, 5) as recipe}
          <!-- Limiter à 5 recettes -->
          <div
            class="bg-base-200/30 hover:bg-base-200/50 flex cursor-pointer items-start gap-3 rounded-lg p-3 transition-colors"
          >
            <div class="min-w-0 flex-1">
              <div class="truncate text-sm font-medium">{recipe.title}</div>

              <!-- Type de plat -->
              <div
                class="text-base-content/60 mt-1 flex items-center gap-2 text-xs"
              >
                <span class="badge badge-ghost badge-sm capitalize">
                  {recipe.typeR === "entree"
                    ? "Entrée"
                    : recipe.typeR === "plat"
                      ? "Plat principal"
                      : "Dessert"}
                </span>

                <!-- Categories -->
                {#if recipe.categories && recipe.categories.length > 0}
                  <span class="text-xs opacity-70">
                    {recipe.categories.slice(0, 2).join(", ")}
                    {recipe.categories.length > 2 ? "..." : ""}
                  </span>
                {/if}
              </div>

              <!-- Métadonnées -->
              <div
                class="text-base-content/50 mt-2 flex items-center gap-3 text-xs"
              >
                <div class="flex items-center gap-1">
                  <Clock class="h-3 w-3" />
                  <span>{formatRecipeTime(recipe)}</span>
                </div>
                <div class="flex items-center gap-1">
                  <Users class="h-3 w-3" />
                  <span>{recipe.plate} pers</span>
                </div>
                <div class="flex items-center gap-1">
                  <span>• {formatRecipeDate(recipe)}</span>
                </div>
              </div>
            </div>
            <ArrowRight class="mt-1 h-4 w-4 flex-shrink-0 opacity-40" />
          </div>
        {/each}

        {#if recipes.length > 5}
          <button
            class="text-primary border-base-200 w-full border-t pt-2 text-center text-xs hover:underline"
            onclick={viewAllRecipes}
          >
            Voir les {recipes.length - 5} autre{recipes.length - 5 > 1
              ? "s"
              : ""} recette{recipes.length - 5 > 1 ? "s" : ""}
          </button>
        {/if}
      </div>

      <!-- Bouton création rapide -->
      <div class="card-actions border-base-200 mt-4 justify-end border-t pt-4">
        <button class="btn btn-primary btn-sm" onclick={createNewRecipe}>
          <BookOpen class="mr-2 h-4 w-4" />
          Créer une recette
        </button>
      </div>
    {/if}
  </div>
</div>
