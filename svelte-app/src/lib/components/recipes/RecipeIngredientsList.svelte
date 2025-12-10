<script lang="ts">
  import type { RecipeIngredient } from "$lib/types/recipes.types";
  import { scaleAndFormatIngredient } from "$lib/utils/QuantityFormatter";
  import { TriangleAlert } from "@lucide/svelte";

  interface Props {
    ingredients: RecipeIngredient[];
    servings: number;
    defaultServings: number;
  }

  let { ingredients, servings, defaultServings }: Props = $props();

  // Calculer le facteur de scaling
  const scaleFactor = $derived(servings / defaultServings);

  // Grouper les ingrédients par type
  const groupedIngredients = $derived(() => {
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
    const scaled = scaleAndFormatIngredient(
      ingredient.normalizedQuantity,
      ingredient.normalizedUnit,
      scaleFactor,
    );

    return {
      ...ingredient,
      displayQuantity: scaled.formattedNumber, // Version string formatée sans unité
      displayUnit: scaled.unit,
    };
  }
</script>

<div class="space-y-6">
  {#each [...groupedIngredients()] as [type, items]}
    <div class="border-base-200 rounded-xl border p-2">
      {#if type !== "Autres"}
        <h4 class="text-base-content/80 mb-2 font-semibold capitalize">
          {type}
        </h4>
      {/if}

      <ul class="space-y-2">
        {#each items as ingredient}
          {@const scaled = getScaledIngredient(ingredient)}
          <li class="flex flex-wrap items-start gap-2">
            <div class="flex-1">
              <span class="font-medium">{ingredient.name} : </span>
              {#if ingredient.allergens && ingredient.allergens.length > 0}
                <span class="tooltip">
                  <TriangleAlert
                    class="text-warning ml-1 inline h-4 w-4"
                    data-tooltip="Allergène: {ingredient.allergens.join(', ')}"
                  />
                </span>
              {/if}
              <span class="text-primary min-w-[80px]">
                <span class="amount">{scaled.displayQuantity}</span>
                <span class="unit ml-1">{scaled.displayUnit}</span>
              </span>
            </div>

            {#if ingredient.comment}
              <div class="text-base-content/60 text-sm">
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
