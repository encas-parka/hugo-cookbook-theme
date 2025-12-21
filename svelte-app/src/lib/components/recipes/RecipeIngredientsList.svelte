<script lang="ts">
  import type { RecipeIngredient } from "$lib/types/recipes.types";
  import { scaleAndFormatIngredient } from "$lib/utils/QuantityFormatter";
  import { getProductTypeInfo } from "$lib/utils/products-display";
  import { TriangleAlert } from "@lucide/svelte";
  import { SvelteMap } from "svelte/reactivity";

  interface Props {
    ingredients: RecipeIngredient[];
    servings: number;
    defaultServings: number;
  }

  let { ingredients, servings, defaultServings }: Props = $props();

  // Calculer le facteur de scaling
  const scaleFactor = $derived(servings / defaultServings);

  // Grouper les ingrédients par type
  const groupedIngredients = $derived.by(() => {
    const groups = new Map<string, RecipeIngredient[]>();

    ingredients.forEach((ingredient) => {
      const type = ingredient.type || "Autres";
      if (!groups.has(type)) {
        groups.set(type, []);
      }
      groups.get(type)!.push(ingredient);
    });

    return groups;
  });

  // Fonction pour scaler un ingrédient
  function getScaledIngredient(ingredient: RecipeIngredient) {
    // Scaler les quantités originales
    const scaledOriginal = scaleAndFormatIngredient(
      ingredient.originalQuantity,
      ingredient.originalUnit,
      scaleFactor,
    );

    // Scaler les quantités normalisées
    const scaledNormalized = scaleAndFormatIngredient(
      ingredient.normalizedQuantity,
      ingredient.normalizedUnit,
      scaleFactor,
    );

    return {
      ...ingredient,
      originalDisplayQuantity: scaledOriginal.formattedNumber,
      originalDisplayUnit: scaledOriginal.unit,
      normalizedDisplayQuantity: scaledNormalized.formattedNumber,
      normalizedDisplayUnit: scaledNormalized.unit,
      // Vérifier si les quantités sont différentes après scaling
      hasDifferentQuantities:
        scaledOriginal.formattedNumber !== scaledNormalized.formattedNumber ||
        scaledOriginal.unit !== scaledNormalized.unit,
    };
  }
</script>

<div class="space-y-6">
  {#each [...groupedIngredients] as [type, items] (type)}
    {@const typeInfo = getProductTypeInfo(type)}
    <div class="border-base-300 bg-base-100 rounded-xl border p-4">
      <h4
        class="text-base-content/70 mb-2 flex items-center gap-2 font-semibold"
      >
        <typeInfo.icon class="h-4 w-4" />
        {typeInfo.displayName}
      </h4>

      <ul class="space-y-2">
        {#each items as ingredient, index (index)}
          {@const scaled = getScaledIngredient(ingredient)}
          <li class="flex flex-wrap items-baseline">
            <div class="flex flex-wrap">
              <span class="font-medium"
                >{ingredient.name}
                {#if ingredient.allergens && ingredient.allergens.length > 0}
                  <span class="tooltip">
                    <TriangleAlert
                      class="mx-1  h-4 w-4 opacity-70"
                      data-tooltip="Allergène: {ingredient.allergens.join(
                        ', ',
                      )}"
                    />
                  </span>
                {/if} :
              </span>

              <span class="ms-1 min-w-[80px]">
                <span class="amount">{scaled.originalDisplayQuantity}</span>
                <span class="unit ml-1">{scaled.originalDisplayUnit}</span>
                {#if scaled.hasDifferentQuantities}
                  <span class="ms-1"
                    >({scaled.normalizedDisplayQuantity}
                    {scaled.normalizedDisplayUnit})</span
                  >
                {/if}
              </span>
            </div>

            {#if ingredient.comment}
              <div class="text-base-content/70 text-sm">
                ({ingredient.comment})
              </div>
            {/if}
          </li>
        {/each}
      </ul>
    </div>
  {/each}

  <div class="text-base-content/60 flex items-center gap-1 text-sm">
    <TriangleAlert class="h-4 w-4" />
    <span>→ Allergènes</span>
  </div>
</div>
