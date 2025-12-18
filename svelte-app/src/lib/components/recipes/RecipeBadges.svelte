<script lang="ts">
  import type { RecipeIngredient } from "$lib/types/recipes.types";

  interface Props {
    temperature?: string;
    cuisson?: string | boolean;
    regimes?: string[];
    materiel?: string[];
    allergens?: string[];
  }

  let {
    temperature,
    cuisson,
    regimes = [],
    materiel = [],
    allergens = [],
  }: Props = $props();

  // Normaliser cuisson (peut être "Oui"/"Non" ou boolean)
  const hasCuisson = $derived(
    cuisson === "Oui" || cuisson === true || cuisson === "true",
  );
</script>

<div class="flex flex-wrap items-center gap-2 text-sm">
  <!-- Badge Température -->
  {#if temperature}
    {#if temperature === "Chaud"}
      <span class="badge badge-warning">Servir Chaud</span>
    {:else}
      <span class="badge badge-info">Servir Froid</span>
    {/if}
  {/if}

  <!-- Badge Cuisson -->
  {#if cuisson !== undefined}
    {#if hasCuisson}
      <span class="badge badge-warning">Avec Cuisson</span>
    {:else}
      <span class="badge badge-info">Sans Cuisson</span>
    {/if}
  {/if}

  <!-- Badges Régimes -->
  {#each regimes as regime}
    <span class="badge badge-success">{regime}</span>
  {/each}

  <!-- Badges Matériel -->
  {#each materiel as item}
    <span class="badge badge-neutral">{item}</span>
  {/each}

  <!-- Badges Allergènes -->
  {#each allergens as allergen}
    <span class="badge badge-error font-bold text-white">{allergen}</span>
  {/each}
</div>
