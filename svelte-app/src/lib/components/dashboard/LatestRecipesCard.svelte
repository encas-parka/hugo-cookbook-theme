<script lang="ts">
  import { BookOpen, Clock, ChefHat, ArrowRight, Users } from "@lucide/svelte";
  import { formatDateRelative } from "$lib/utils/date-helpers";
  import { recipesStore } from "$lib/stores/RecipesStore.svelte";
  import { navigate } from "$lib/services/simple-router.svelte";
  import type { RecipeIndexEntry } from "$lib/types/recipes.types";

  // Récupérer les dernières recettes publiées
  const latestRecipes = $derived.by(() => {
    // Filtrer les recettes publiées et trier par date de publication
    const published = recipesStore.recipesIndex.filter(
      (recipe) => recipe.isPublished !== false && recipe.pd,
    );

    // Trier par date de publication (plus récent en premier)
    return published
      .sort((a, b) => {
        const dateA = a.pd ? new Date(a.pd).getTime() : 0;
        const dateB = b.pd ? new Date(b.pd).getTime() : 0;
        return dateB - dateA;
      })
      .slice(0, 5); // Limiter à 5 recettes
  });

  function formatRecipeDate(recipe: RecipeIndexEntry) {
    return recipe.pd ? formatDateRelative(recipe.pd) : "Date inconnue";
  }

  function getRecipeTypeLabel(type: string): string {
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

  function viewRecipe(uuid: string) {
    navigate(`/recipe/${uuid}`);
  }

  function viewAllRecipes() {
    navigate("/recipes");
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
        Dernières Recettes
      </h2>
      <button
        class="btn btn-ghost btn-sm"
        onclick={viewAllRecipes}
        title="Voir toutes les recettes"
      >
        Voir tout
      </button>
    </div>

    {#if recipesStore.loading}
      <div class="flex items-center justify-center py-8">
        <span class="loading loading-spinner loading-md"></span>
      </div>
    {:else if latestRecipes.length === 0}
      <div class="py-6 text-center">
        <ChefHat class="mx-auto mb-3 h-12 w-12 opacity-20" />
        <p class="text-base-content/60 mb-4 text-sm">Aucune recette publiée</p>
        <button class="btn btn-primary btn-sm" onclick={createNewRecipe}>
          <BookOpen class="mr-2 h-4 w-4" />
          Créer une recette
        </button>
      </div>
    {:else}
      <div class="space-y-3">
        {#each latestRecipes as recipe (recipe.u)}
          <div
            class="bg-base-200/30 hover:bg-base-200/50 flex cursor-pointer items-start gap-3 rounded-lg p-3 transition-colors"
            onclick={() => viewRecipe(recipe.u)}
            role="button"
            tabindex="0"
            onkeydown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                viewRecipe(recipe.u);
              }
            }}
          >
            <div class="min-w-0 flex-1">
              <div class="truncate text-sm font-medium">{recipe.n}</div>

              <!-- Type de plat -->
              <div
                class="text-base-content/60 mt-1 flex items-center gap-2 text-xs"
              >
                <span class="badge badge-ghost badge-sm capitalize">
                  {getRecipeTypeLabel(recipe.t)}
                </span>

                <!-- Categories -->
                {#if recipe.c && recipe.c.length > 0}
                  <span class="text-xs opacity-70">
                    {recipe.c.slice(0, 2).join(", ")}
                    {recipe.c.length > 2 ? "..." : ""}
                  </span>
                {/if}
              </div>

              <!-- Métadonnées -->
              <div
                class="text-base-content/50 mt-2 flex items-center gap-3 text-xs"
              >
                {#if recipe.plates}
                  <div class="flex items-center gap-1">
                    <Users class="h-3 w-3" />
                    <span>{recipe.plates} pers</span>
                  </div>
                {/if}
                <div class="flex items-center gap-1">
                  <span>• {formatRecipeDate(recipe)}</span>
                </div>
              </div>
            </div>
            <ArrowRight class="mt-1 h-4 w-4 flex-shrink-0 opacity-40" />
          </div>
        {/each}
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
