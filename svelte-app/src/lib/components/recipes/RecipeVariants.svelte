<script lang="ts">
  import { recipesStore } from "$lib/stores/RecipesStore.svelte";
  import type { RecipeIndexEntry } from "$lib/types/recipes.types";
  import { navigate } from "@/lib/services/simple-router.svelte";
  import { onMount } from "svelte";

  interface Props {
    recipeId: string;
  }

  let { recipeId }: Props = $props();

  let variants = $state<RecipeIndexEntry[]>([]);
  let root = $state<RecipeIndexEntry | null>(null);
  let loading = $state(true);

  // Charger les variantes
  async function loadVariants() {
    loading = true;
    try {
      const group = await recipesStore.getVariantGroup(recipeId, 2);
      root = group.root;
      variants = group.variants.sort((a, b) =>
        a.title.localeCompare(b.title, "fr-FR"),
      );
    } catch (error) {
      console.error("[RecipeVariants] Erreur chargement:", error);
    } finally {
      loading = false;
    }
  }

  onMount(() => {
    loadVariants();
  });
</script>

{#if loading}
  <div class="card bg-base-100 mt-4 shadow-sm">
    <div class="card-body p-4">
      <div class="loading loading-spinner loading-sm"></div>
    </div>
  </div>
{:else if variants.length > 1}
  <div class="card bg-base-100 mt-4 shadow-sm">
    <div class="card-body p-4">
      <h4 class="card-title flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
        {variants.length} variante{variants.length > 1 ? "s" : ""} de cette recette
      </h4>

      <div class="flex flex-wrap gap-4">
        {#each variants as variant}
          <button
            class="btn btn-ghost"
            onclick={() => navigate(`/recipe/${variant.$id}`)}
          >
            <div class="flex items-center gap-2 text-sm">
              {variant.title}

              {#if variant.versionLabel}
                <span class="badge badge-ghost badge-xs">
                  {variant.versionLabel}
                </span>
              {/if}
              {#if variant.$id === root?.$id}
                <span class="badge badge-primary badge-xs">Originale</span>
              {:else if variant.$id === recipeId}
                <span class="badge badge-secondary badge-xs">Cette recette</span
                >
              {/if}
            </div>
          </button>
        {/each}
      </div>
    </div>
  </div>
{/if}
