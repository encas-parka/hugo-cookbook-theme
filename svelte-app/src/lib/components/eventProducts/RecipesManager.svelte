<script lang="ts">
  import {
    CookingPot,
    Package,
    Sun,
    Moon,
    Cloud,
    UtensilsCrossed,
  } from "@lucide/svelte";
  import OverrideManager from "./OverrideManager.svelte";
  import type { ProductModalStateType } from "$lib/types/store.types.js";
  import { formatDateWdDayMonthShort } from "$lib/utils/date-helpers.js";
  import { getTimeIcon } from "$lib/utils/dateRange.js";
  import { formatSingleQuantity } from "$lib/utils/QuantityFormatter.js";

  interface Props {
    modalState: ProductModalStateType;
    isArchiveMode: boolean;
  }

  let { modalState, isArchiveMode }: Props = $props();

  // Données dérivées du store
  const recipes = $derived(modalState.recipes);

  // Formate la quantité pour une recette (déjà scalée dans productEnrichment)
  function getRecipeQty(quantity: number, unit: string): string {
    // Selon l'interface RecipeOccurrence, qEq et uEq sont toujours définis et sont des nombres/string

    if (!quantity || !unit) return "-";

    // Les quantités sont déjà scalées dans productEnrichment selon le nombre de plates
    // formatSingleQuantity appliquera automatiquement la conversion d'unités si nécessaire
    return formatSingleQuantity(quantity, unit);
  }
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
    <div class="mt-4 space-y-3">
      {#each recipes as recipe, index (index)}
        <div class="card card-bordered bg-base-100 shadow-sm">
          <div class="card-body p-3">
            <div
              class="flex flex-wrap items-center justify-between gap-2 gap-y-3"
            >
              <!-- Nom de la recette + icône date -->
              <div class="flex gap-4">
                <span class="text-base text-wrap">{recipe.r}</span>

                <div class="flex min-w-fit items-center gap-1">
                  <span class="badge badge-soft font-medium">
                    {#if getTimeIcon(recipe.dateTimeService) === "sun"}
                      <Sun class="h-4 w-4 text-amber-500" />
                    {:else if getTimeIcon(recipe.dateTimeService) === "moon"}
                      <Moon class="h-4 w-4 text-indigo-500" />
                    {:else if getTimeIcon(recipe.dateTimeService) === "cloud"}
                      <Cloud class="h-4 w-4 text-sky-500" />
                    {/if}{formatDateWdDayMonthShort(recipe.date)}</span
                  >
                </div>
              </div>

              <!-- Couverts + quantités -->
              <div class="ms-auto flex flex-wrap items-center gap-2">
                <span class="text-base font-medium"
                  >{getRecipeQty(recipe.qEq, recipe.uEq)}</span
                >

                {#if recipe.q && recipe.u && recipe.u !== recipe.uEq}
                  <span class="text-base-content/70">
                    ({getRecipeQty(recipe.q, recipe.u)})
                  </span>
                  <span class="badge badge-soft gap-1">
                    <UtensilsCrossed class="h-3 w-3" />
                    {recipe.a || 0} c.
                  </span>
                {/if}
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>
