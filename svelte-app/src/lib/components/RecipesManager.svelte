<script lang="ts">
  import { CookingPot, Package } from "@lucide/svelte";
  import OverrideManager from "./OverrideManager.svelte";
  import type { ProductModalStateType } from "../types/store.types.js";
  import { formatDate } from "../utils/products-display.js";

  interface Props {
    modalState: ProductModalStateType;
    isArchiveMode: boolean
  }

  let { modalState, isArchiveMode }: Props = $props();

  // Données dérivées du store
  const recipes = $derived(modalState.recipes);
</script>

<!-- Section Override Manager -->
<OverrideManager {modalState} {isArchiveMode} />
<div class="space-y-6">
  <h3 class="flex items-center gap-2 text-lg font-semibold">
    <CookingPot class="h-5 w-5" />
    Recettes utilisant ce produit
  </h3>

  {#if recipes.length === 0}
    <div class="py-8 text-center opacity-50">
      <Package class="mx-auto mb-2 h-12 w-12" />
      <p>Aucune recette trouvée pour ce produit</p>
    </div>
  {:else}
    <div class="overflow-x-auto">
      <table class="table-zebra table">
        <thead>
          <tr>
            <th>Recette</th>
            <th>Quantité</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {#each recipes as recipe, index (index)}
            <tr>
              <td class="font-medium">{recipe.r} ({recipe.a || "-"} c.)</td>
              <td>{recipe.q || recipe.qEq} {recipe.u || recipe.uEq}</td>
              <td>{formatDate(recipe.date)}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}
</div>
