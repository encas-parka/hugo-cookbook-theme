<script lang="ts">
  import { onMount } from 'svelte';
  import { ingredientsStore } from '../stores/ingredients-store.svelte.js';
  import { purchasesStore } from '../stores/purchases-store.svelte.js';
  import { calculateIngredientStats, formatValueWithUnit } from '../utils/calculators.js';
  import { validateIngredientName } from '../utils/validators.js';
  import type { Ingredient, IngredientForm } from '../types/ingredient.js';

  // Récupération des stores
  const {
    filteredIngredients,
    selectedIngredients,
    loading,
    error,
    filters,
    stats
  } = ingredientsStore('list-123');

  const {
    purchases,
    loading: purchasesLoading,
    getPurchasesForIngredient
  } = purchasesStore('list-123');

  // État local pour le formulaire
  let newIngredient: IngredientForm = {
    name: '',
    quantity: { value: 1, unit: 'kg' },
    unitPrice: 0,
    purchased: false,
    categoryId: '',
    notes: ''
  };

  // Exemple de validation réactive
  const nameValidation = $derived(validateIngredientName(newIngredient.name));

  // Exemple de calculs dérivés
  const totalSelectedIngredients = $derived(
    selectedIngredients.reduce((sum, ing) => sum + ing.quantity.value, 0)
  );

  // Actions
  async function addIngredient() {
    if (!nameValidation.isValid) {
      alert('Nom invalide: ' + nameValidation.errors.join(', '));
      return;
    }

    try {
      await ingredientsStore.addIngredient(newIngredient, 'list-123');
      // Reset du formulaire
      newIngredient = {
        name: '',
        quantity: { value: 1, unit: 'kg' },
        unitPrice: 0,
        purchased: false,
        categoryId: '',
        notes: ''
      };
    } catch (err) {
      alert('Erreur lors de l\'ajout: ' + err);
    }
  }

  function toggleSelection(ingredient: Ingredient) {
    if (selectedIngredients.includes(ingredient)) {
      ingredientsStore.toggleIngredientSelection(ingredient.id, 'list-123');
    } else {
      ingredientsStore.toggleIngredientSelection(ingredient.id, 'list-123');
    }
  }

  // Charger les données au montage du composant
  onMount(async () => {
    await Promise.all([
      ingredientsStore.loadIngredients('list-123'),
      purchasesStore.loadPurchases('list-123')
    ]);
  });
</script>

<!-- Exemple d'utilisation des services et stores -->
<div class="container">
  <h1>Exemple d'utilisation - Migration Vue.js vers Svelte 5</h1>

  <!-- Zone de statut -->
  <div class="status">
    {#if $loading}
      <p>Chargement en cours...</p>
    {:else if $error}
      <p class="error">Erreur: {$error}</p>
    {:else}
      <p>{$filteredIngredients.length} ingrédients chargés</p>
    {/if}
  </div>

  <!-- Statistiques dérivées -->
  <div class="stats">
    <h2>Statistiques (calculées avec des runes $derived)</h2>
    <p>Total ingrédients sélectionnés: {$stats.totalSelected}</p>
    <p>Total prix: {$stats.totalPrice.toFixed(2)}€</p>
    <p>Valeur totale: {$stats.totalValue.toFixed(2)}€</p>
    <p>Ingrédients à acheter: {$stats.needsPurchase}</p>
  </div>

  <!-- Filtres réactifs -->
  <div class="filters">
    <h2>Filtres</h2>
    <label>
      <input
        type="checkbox"
        bind:checked={$filters.showOnlySelected}
      />
      Afficher seulement les sélectionnés
    </label>

    <label>
      <input
        type="checkbox"
        bind:checked={$filters.showOnlyToPurchase}
      />
      Afficher seulement à acheter
    </label>

    <label>
      Recherche:
      <input
        type="text"
        bind:value={$filters.searchTerm}
        placeholder="Rechercher un ingrédient..."
      />
    </label>
  </div>

  <!-- Formulaire d'ajout -->
  <div class="form">
    <h2>Ajouter un ingrédient</h2>
    <form onsubmit={addIngredient}>
      <div class="field">
        <label>Nom:</label>
        <input
          type="text"
          bind:value={newIngredient.name}
          class:invalid={!nameValidation.isValid}
        />
        {#if !nameValidation.isValid}
          <small class="error">
            {nameValidation.errors.join(', ')}
          </small>
        {/if}
      </div>

      <div class="field">
        <label>Quantité:</label>
        <input
          type="number"
          bind:value={newIngredient.quantity.value}
          step="0.1"
          min="0"
        />
        <select bind:value={newIngredient.quantity.unit}>
          <option value="kg">kg</option>
          <option value="g">g</option>
          <option value="l">l</option>
          <option value="ml">ml</option>
          <option value="unités">unités</option>
        </select>
      </div>

      <div class="field">
        <label>Prix unitaire (€):</label>
        <input
          type="number"
          bind:value={newIngredient.unitPrice}
          step="0.01"
          min="0"
        />
      </div>

      <div class="field">
        <label>
          <input
            type="checkbox"
            bind:checked={newIngredient.purchased}
          />
          Déjà acheté
        </label>
      </div>

      <button type="submit" disabled={loading}>
        Ajouter l'ingrédient
      </button>
    </form>
  </div>

  <!-- Liste des ingrédients -->
  <div class="ingredients-list">
    <h2>Liste des ingrédients</h2>
    <p>Total sélectionné: {formatValueWithUnit(totalSelectedIngredients, 'kg')}</p>

    {#each $filteredIngredients as ingredient (ingredient.id)}
      <div class="ingredient-item" class:selected={selectedIngredients.includes(ingredient)}>
        <div class="info">
          <h3>{ingredient.name}</h3>
          <p>
            {formatValueWithUnit(ingredient.quantity.value, ingredient.quantity.unit)}
            - {ingredient.unitPrice.toFixed(2)}€/{ingredient.quantity.unit}
            {#if ingredient.purchased}
              <span class="purchased">✓ Acheté</span>
            {:else}
              <span class="to-purchase">À acheter</span>
            {/if}
          </p>
          {#if ingredient.notes}
            <p class="notes">{ingredient.notes}</p>
          {/if}
        </div>

        <div class="actions">
          <button
            onclick={() => toggleSelection(ingredient)}
            class:selected={selectedIngredients.includes(ingredient)}
          >
            {selectedIngredients.includes(ingredient) ? 'Désélectionner' : 'Sélectionner'}
          </button>
        </div>
      </div>
    {/each}
  </div>

  <!-- Achats associés -->
  {#if selectedIngredients.length > 0}
    <div class="purchases">
      <h2>Achats associés</h2>
      {#each selectedIngredients as ingredient}
        {@const ingredientPurchases = getPurchasesForIngredient(ingredient)}
        {#if ingredientPurchases.length > 0}
          <div class="ingredient-purchases">
            <h4>{ingredient.name}</h4>
            {#each ingredientPurchases as purchase}
              <p>
                {formatValueWithUnit(purchase.quantity.value, purchase.quantity.unit)}
                à {purchase.price.toFixed(2)}€
                le {new Date(purchase.date).toLocaleDateString()}
              </p>
            {/each}
          </div>
        {/if}
      {/each}
    </div>
  {/if}
</div>

<style>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }

  .status, .stats, .filters, .form, .ingredients-list, .purchases {
    margin-bottom: 30px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
  }

  .error {
    color: #d32f2f;
  }

  .field {
    margin-bottom: 15px;
  }

  .field label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  .field input, .field select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  .field input.invalid {
    border-color: #d32f2f;
  }

  .field small.error {
    color: #d32f2f;
    font-size: 0.8em;
  }

  button {
    background-color: #1976d2;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #1565c0;
  }

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  button.selected {
    background-color: #4caf50;
  }

  .ingredient-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  .ingredient-item.selected {
    background-color: #e8f5e8;
    border-color: #4caf50;
  }

  .ingredient-item .info h3 {
    margin: 0 0 10px 0;
    color: #333;
  }

  .ingredient-item .info p {
    margin: 5px 0;
    color: #666;
  }

  .purchased {
    color: #4caf50;
    font-weight: bold;
  }

  .to-purchase {
    color: #ff9800;
    font-weight: bold;
  }

  .notes {
    font-style: italic;
    color: #888;
  }

  .filters label {
    display: block;
    margin-bottom: 10px;
  }

  .filters input[type="text"] {
    width: 100%;
    max-width: 300px;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  .ingredient-purchases {
    margin-bottom: 20px;
    padding: 15px;
    background-color: #f9f9f9;
    border-radius: 8px;
  }

  .ingredient-purchases h4 {
    margin: 0 0 10px 0;
    color: #333;
  }
</style>
