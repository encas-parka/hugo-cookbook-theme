<script lang="ts">
  import {
    BookOpen,
    Clock,
    ChefHat,
    ArrowRight,
    Users,
    ArrowBigRight,
  } from "@lucide/svelte";
  import { formatDateRelative } from "$lib/utils/date-helpers";
  import { recipesStore } from "$lib/stores/RecipesStore.svelte";
  import { navigate } from "$lib/services/simple-router.svelte";
  import type { RecipeIndexEntry } from "$lib/types/recipes.types";
  import { getTypeDisplay } from "$lib/utils/recipeUtils";
  import { globalState } from "$lib/stores/GlobalState.svelte";

  // Récupérer les dernières recettes créées par l'utilisateur
  const myLatestRecipes = $derived.by(() => {
    if (!recipesStore.isInitialized) {
      return [];
    }

    return recipesStore.recipesIndex
      .filter((r) => r.auteur === globalState.userName)
      .sort((a, b) => {
        const dateA = a.$createdAt ? new Date(a.$createdAt).getTime() : 0;
        const dateB = b.$createdAt ? new Date(b.$createdAt).getTime() : 0;
        return dateB - dateA;
      })
      .slice(0, 5);
  });

  // Récupérer les dernières recettes publiées (excluant celles de l'utilisateur)
  const latestRecipes = $derived.by(() => {
    // Ne pas essayer de filtrer si le store n'est pas initialisé
    if (!recipesStore.isInitialized) {
      return [];
    }

    // Trier par date de publication (plus récent en premier) et exclure mes recettes
    return recipesStore.recipesIndex
      .filter((r) => r.auteur !== globalState.userName)
      .sort((a, b) => {
        const dateA = a.$createdAt ? new Date(a.$createdAt).getTime() : 0;
        const dateB = b.$createdAt ? new Date(b.$createdAt).getTime() : 0;
        return dateB - dateA;
      })
      .slice(0, 5); // Limiter à 5 recettes
  });

  function formatRecipeDate(recipe: RecipeIndexEntry) {
    return recipe.$createdAt
      ? formatDateRelative(recipe.$createdAt)
      : "Date inconnue";
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

  function getRecipeIcon(recipe: RecipeIndexEntry) {
    return getTypeDisplay(recipe.typeR, recipe.categories);
  }

  function viewRecipe(uuid: string) {
    navigate(`/recipe/${uuid}`);
  }

  function viewAllRecipes() {
    navigate("/recipe");
  }

  function createNewRecipe() {
    navigate("/recipe/new");
  }
</script>

<div class="flex items-center justify-between">
  <h2 class="card-title flex items-center gap-2">
    <BookOpen class="text-primary h-5 w-5" />
    Dernières Recettes
  </h2>
  <button class="btn" onclick={viewAllRecipes} title="Voir toutes les recettes">
    Voir tout
    <ArrowBigRight size={16} />
  </button>
</div>

{#if recipesStore.error}
  <div class="py-6 text-center">
    <div class="text-error mb-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="mx-auto h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    </div>
    <p class="text-base-content/60 text-sm">
      Erreur de chargement des recettes
    </p>
    <button
      class="btn btn-ghost btn-xs mt-2"
      onclick={() => window.location.reload()}
    >
      Réessayer
    </button>
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
  <!-- Mes dernières recettes -->
  {#if myLatestRecipes.length > 0}
    <div class="mb-4">
      <h3
        class="text-base-content/80 mb-2 text-xs font-semibold tracking-wider uppercase"
      >
        Mes dernières recettes
      </h3>
      <div class="space-y-2">
        {#each myLatestRecipes as recipe (recipe.$id)}
          {@const iconInfo = getRecipeIcon(recipe)}
          <div
            class="border-accent/60 bg-base-200 hover:bg-base-300 flex cursor-pointer items-start gap-3 rounded-lg border-l-2 p-3 transition-colors"
            onclick={() => viewRecipe(recipe.$id)}
            role="button"
            tabindex="0"
            onkeydown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                viewRecipe(recipe.$id);
              }
            }}
          >
            <div class="min-w-0 flex-1">
              <div class="flex flex-wrap items-center gap-x-10 gap-y-2">
                <div class="text-primary flex items-center gap-2">
                  <svg class="text-primary h-4 w-4 flex-shrink-0">
                    <use href={`/icons/sprite.svg#${iconInfo.iconId}`} />
                  </svg>
                  <div class="truncate text-sm font-medium">
                    {recipe.title}
                  </div>
                  {#if recipe.versionLabel}
                    <span class="tfont-medium">
                      - {recipe.versionLabel}
                    </span>
                  {/if}
                </div>
                <!-- Métadonnées -->

                <div
                  class="text-base-content/50 flex items-center gap-3 text-xs"
                >
                  {#if recipe.plate}
                    <div class="flex items-center gap-1">
                      <Users class="h-3 w-3" />
                      <span>{recipe.plate} pers</span>
                    </div>
                  {/if}
                  <div class="flex items-center gap-1">
                    <span>Ajouté {formatRecipeDate(recipe)}</span>
                  </div>
                </div>
                {#if recipe.draft}
                  <div class="badge badge-accent badge-outline badge-xs">
                    brouillon
                  </div>
                {/if}
              </div>
            </div>
            <ArrowRight class="mt-1 h-4 w-4 flex-shrink-0 opacity-40" />
          </div>
        {/each}
      </div>
    </div>
  {/if}

  <!-- Toutes les dernières recettes -->
  {#if myLatestRecipes.length > 0}
    <h3
      class="text-base-content/80 mb-2 text-xs font-semibold tracking-wider uppercase"
    >
      Dernières recettes ajoutées
    </h3>
  {/if}
  <div class="space-y-3">
    {#each latestRecipes as recipe (recipe.$id)}
      {@const iconInfo = getRecipeIcon(recipe)}
      <div
        class="bg-base-200 hover:bg-base-300 flex cursor-pointer items-start gap-3 rounded-lg p-3 transition-colors"
        onclick={() => viewRecipe(recipe.$id)}
        role="button"
        tabindex="0"
        onkeydown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            viewRecipe(recipe.$id);
          }
        }}
      >
        <div class="min-w-0 flex-1">
          <div class="flex flex-wrap items-center gap-x-10 gap-y-2">
            <div class="text-primary flex items-center gap-2">
              <svg class="text-primary h-4 w-4 flex-shrink-0">
                <use href={`/icons/sprite.svg#${iconInfo.iconId}`} />
              </svg>
              <div class="truncate text-sm font-medium">
                {recipe.title}
              </div>
              {#if recipe.versionLabel}
                <span class="font-medium">
                  - {recipe.versionLabel}
                </span>
              {/if}
            </div>
            <!-- Métadonnées -->
            <div class="text-base-content/50 flex items-center gap-3 text-xs">
              {#if recipe.plate}
                <div class="flex items-center gap-1">
                  <Users class="h-3 w-3" />
                  <span>{recipe.plate} pers</span>
                </div>
              {/if}
              <div class="flex items-center gap-1">
                <span>Ajouté {formatRecipeDate(recipe)}</span>
              </div>
            </div>
            {#if recipe.draft}
              <div class="badge badge-accent badge-outline badge-xs">
                brouillon
              </div>
            {/if}
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
