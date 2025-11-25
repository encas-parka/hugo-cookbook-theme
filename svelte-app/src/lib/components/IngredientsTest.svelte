<script lang="ts">
  import { onMount } from "svelte";
  import { ingredientsStore } from "../stores/IngredientsStore.svelte";

  let searchQuery = $state("");
  let selectedType = $state("");

  // Résultats filtrés
  const filteredIngredients = $derived.by(() => {
    let results = ingredientsStore.ingredients;

    // Filtre par recherche
    if (searchQuery.trim()) {
      results = ingredientsStore.searchIngredients(searchQuery);
    }

    // Filtre par type
    if (selectedType) {
      results = results.filter((ing) => ing.t === selectedType);
    }

    return results;
  });

  onMount(async () => {
    try {
      await ingredientsStore.initialize();
    } catch (error) {
      console.error("Erreur d'initialisation:", error);
    }
  });
</script>

<div class="container mx-auto p-4">
  <h1 class="text-2xl font-bold mb-4">Test IngredientsStore</h1>

  {#if ingredientsStore.loading}
    <div class="alert alert-info">
      <span>Chargement des ingrédients...</span>
    </div>
  {:else if ingredientsStore.error}
    <div class="alert alert-error">
      <span>Erreur: {ingredientsStore.error}</span>
    </div>
  {:else}
    <!-- Stats -->
    <div class="stats shadow mb-4">
      <div class="stat">
        <div class="stat-title">Total Ingrédients</div>
        <div class="stat-value">{ingredientsStore.count}</div>
      </div>
      <div class="stat">
        <div class="stat-title">Types</div>
        <div class="stat-value">{ingredientsStore.availableTypes.length}</div>
      </div>
      <div class="stat">
        <div class="stat-title">Allergènes</div>
        <div class="stat-value">{ingredientsStore.availableAllergens.length}</div>
      </div>
    </div>

    <!-- Filtres -->
    <div class="flex gap-4 mb-4">
      <input
        type="text"
        placeholder="Rechercher un ingrédient..."
        class="input input-bordered flex-1"
        bind:value={searchQuery}
      />
      <select class="select select-bordered" bind:value={selectedType}>
        <option value="">Tous les types</option>
        {#each ingredientsStore.availableTypes as type}
          <option value={type}>{type}</option>
        {/each}
      </select>
    </div>

    <!-- Liste des ingrédients -->
    <div class="overflow-x-auto">
      <table class="table table-zebra">
        <thead>
          <tr>
            <th>UUID</th>
            <th>Nom</th>
            <th>Type</th>
            <th>Allergènes</th>
          </tr>
        </thead>
        <tbody>
          {#each filteredIngredients as ingredient (ingredient.u)}
            <tr>
              <td><code class="text-xs">{ingredient.u}</code></td>
              <td class="font-medium">{ingredient.n}</td>
              <td>
                <span class="badge badge-outline">{ingredient.t}</span>
              </td>
              <td>
                {#if ingredient.a && ingredient.a.length > 0}
                  {#each ingredient.a as allergen}
                    <span class="badge badge-warning badge-sm mr-1">{allergen}</span>
                  {/each}
                {:else}
                  <span class="text-gray-400">-</span>
                {/if}
              </td>
            </tr>
          {:else}
            <tr>
              <td colspan="4" class="text-center text-gray-400">
                Aucun ingrédient trouvé
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>

    <div class="text-sm text-gray-500 mt-4">
      Affichage de {filteredIngredients.length} / {ingredientsStore.count} ingrédients
      {#if ingredientsStore.lastSync}
        • Dernière sync: {new Date(ingredientsStore.lastSync).toLocaleString()}
      {/if}
    </div>
  {/if}
</div>
