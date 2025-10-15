<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  // FIXIT: use alias of vite.config.ts
  import { productsStore } from './lib/stores/products-store.svelte';

  // Props (si tu as besoin de passer le mainId depuis l'extérieur)
  // Récupérer mainId depuis les paramètres de l'URL
  // Cherche le paramètre 'listId' dans l'URL. Si trouvé, utilise sa valeur, sinon utilise 'your-main-id' par défaut.
  let { mainId = 'your-main-id' }: { mainId?: string } = $props();
  const urlParams = new URLSearchParams(window.location.search);
  const listIdFromUrl = urlParams.get('listId');

  if (listIdFromUrl) {
    mainId = listIdFromUrl;
  }

  // Dériver les valeurs réactives du store
  let products = $derived(productsStore.products);
  let loading = $derived(productsStore.loading);
  let error = $derived(productsStore.error);
  let syncing = $derived(productsStore.syncing);
  let realtimeConnected = $derived(productsStore.realtimeConnected);
  let lastSync = $derived(productsStore.lastSync);

  // Indicateur visuel de sync
  let syncIndicator = $derived(
    syncing ? 'Synchronisation...' :
    realtimeConnected ? 'En direct' :
    'Hors ligne'
  );

  onMount(async () => {
    console.log('[ProductsComponent] Montage du composant');

    try {
      // Attendre que Appwrite soit initialisé
      await window.AppwriteClient.initializeAppwrite();

      console.log('[ProductsComponent] mainId', mainId);
      // Initialiser le store avec le mainId
      await productsStore.initialize(mainId);
    } catch (err) {
      console.error('[ProductsComponent] Erreur lors de l\'initialisation:', err);
    }
  });

  onDestroy(() => {
    console.log('[ProductsComponent] Démontage du composant');
    // Nettoyer la connexion realtime
    productsStore.destroy();
  });

  async function handleForceReload() {
    try {
      await productsStore.forceReload(mainId);
    } catch (err) {
      console.error('[ProductsComponent] Erreur lors du rechargement:', err);
    }
  }

  function handleClearCache() {
    productsStore.clearCache();
  }

  // Filtres et recherche (exemples)
  let searchQuery = $state('');
  let filterType = $state<string | null>(null);

  let filteredProducts = $derived(() => {
    let result = products;

    // Recherche
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.productName.toLowerCase().includes(query) ||
        p.productType.toLowerCase().includes(query)
      );
    }

    // Filtre par type
    if (filterType) {
      result = result.filter(p => p.productType === filterType);
    }

    return result;
  });

  // Types uniques pour le filtre
  let productTypes = $derived(() => {
    const types = new Set(products.map(p => p.productType));
    return Array.from(types).sort();
  });
</script>

<div class="products-container">
  <header class="products-header">
    <div class="header-top">
      <h1>Gestion des Produits</h1>

      <div class="status-bar">
        <span class="status-indicator" class:connected={realtimeConnected} class:syncing={syncing}>
          {syncIndicator}
        </span>
        {#if lastSync}
          <span class="last-sync">
            Dernière sync: {new Date(lastSync).toLocaleString('fr-FR')}
          </span>
        {/if}
      </div>
    </div>

    <div class="actions-bar">
      <div class="search-filters">
        <input
          type="text"
          placeholder="Rechercher un produit..."
          bind:value={searchQuery}
          class="search-input"
        />

        <select bind:value={filterType} class="filter-select">
          <option value={null}>Tous les types</option>
          {#each productTypes() as type}
            <option value={type}>{type}</option>
          {/each}
        </select>
      </div>

      <div class="action-buttons">
        <button onclick={handleForceReload} disabled={loading || syncing}>
          {loading ? 'Chargement...' : 'Recharger'}
        </button>
        <button onclick={handleClearCache} class="danger">
          Vider le cache
        </button>
      </div>
    </div>
  </header>

  <main class="products-content">
    {#if loading}
      <div class="loading-state">
        <div class="spinner"></div>
        <p>Chargement des produits...</p>
      </div>
    {:else if error}
      <div class="error-state">
        <p>❌ Erreur: {error}</p>
        <button onclick={handleForceReload}>Réessayer</button>
      </div>
    {:else if filteredProducts().length === 0}
      <div class="empty-state">
        {#if searchQuery || filterType}
          <p>Aucun produit ne correspond à vos critères</p>
          <button onclick={() => { searchQuery = ''; filterType = null; }}>
            Réinitialiser les filtres
          </button>
        {:else}
          <p>Aucun produit trouvé</p>
        {/if}
      </div>
    {:else}
      <div class="products-stats">
        <span>{filteredProducts().length} produit{filteredProducts().length > 1 ? 's' : ''}</span>
        {#if searchQuery || filterType}
          <span class="filtered-indicator">(filtré sur {products.length} total)</span>
        {/if}
      </div>

      <div class="products-grid">
        {#each filteredProducts() as product (product.$id)}
          <article class="product-card">
            <div class="product-header">
              <h3>{product.productName}</h3>
              <span class="product-status" class:active={product.status === 'active'}>
                {product.status}
              </span>
            </div>

            <div class="product-body">
              <div class="product-info">
                <span class="label">Type:</span>
                <span class="value">{product.productType}</span>
              </div>

              <div class="product-badges">
                {#if product.pFrais}
                  <span class="badge frais">Frais</span>
                {/if}
                {#if product.pSurgel}
                  <span class="badge surgele">Surgelé</span>
                {/if}
                {#if product.isMerged}
                  <span class="badge merged">Fusionné</span>
                {/if}
              </div>

              {#if product.stockReel}
                <div class="product-info">
                  <span class="label">Stock:</span>
                  <span class="value">{product.stockReel}</span>
                </div>
              {/if}

              <div class="product-stats">
                <div class="stat">
                  <span class="stat-value">{product.nbRecipes}</span>
                  <span class="stat-label">recettes</span>
                </div>
                <div class="stat">
                  <span class="stat-value">{product.totalAssiettes}</span>
                  <span class="stat-label">assiettes</span>
                </div>
              </div>

              {#if product.who && product.who.length > 0}
                <div class="product-who">
                  <span class="label">Pour:</span>
                  <div class="who-tags">
                    {#each product.who as person}
                      <span class="who-tag">{person}</span>
                    {/each}
                  </div>
                </div>
              {/if}
            </div>

            <div class="product-footer">
              <small>Mis à jour: {new Date(product.$updatedAt).toLocaleDateString('fr-FR')}</small>
            </div>
          </article>
        {/each}
      </div>
    {/if}
  </main>
</div>

<style>
  .products-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 2rem;
  }

  .products-header {
    margin-bottom: 2rem;
  }

  .header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  h1 {
    margin: 0;
    font-size: 2rem;
  }

  .status-bar {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.25rem;
  }

  .status-indicator {
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.875rem;
    background: #e0e0e0;
    color: #666;
  }

  .status-indicator.connected {
    background: #4caf50;
    color: white;
  }

  .status-indicator.syncing {
    background: #ff9800;
    color: white;
  }

  .last-sync {
    font-size: 0.75rem;
    color: #666;
  }

  .actions-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .search-filters {
    display: flex;
    gap: 0.5rem;
    flex: 1;
    min-width: 300px;
  }

  .search-input {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
  }

  .filter-select {
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    background: white;
  }

  .action-buttons {
    display: flex;
    gap: 0.5rem;
  }

  button {
    padding: 0.5rem 1rem;
    background: #2196f3;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.875rem;
  }

  button:disabled {
    background: #ccc;
    cursor: not-allowed;
  }

  button.danger {
    background: #f44336;
  }

  .products-stats {
    margin-bottom: 1rem;
    color: #666;
    font-size: 0.875rem;
  }

  .filtered-indicator {
    margin-left: 0.5rem;
    font-style: italic;
  }

  .loading-state,
  .error-state,
  .empty-state {
    text-align: center;
    padding: 3rem;
  }

  .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #2196f3;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 1rem;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .error-state {
    color: #f44336;
  }

  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 1.5rem;
  }

  .product-card {
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 1.25rem;
    transition: box-shadow 0.2s;
  }

  .product-card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .product-header {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: 1rem;
  }

  .product-header h3 {
    margin: 0;
    font-size: 1.125rem;
    flex: 1;
  }

  .product-status {
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.75rem;
    background: #e0e0e0;
    color: #666;
  }

  .product-status.active {
    background: #4caf50;
    color: white;
  }

  .product-body {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .product-info {
    display: flex;
    gap: 0.5rem;
  }

  .label {
    font-weight: 600;
    color: #666;
  }

  .value {
    color: #333;
  }

  .product-badges {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .badge {
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 500;
  }

  .badge.frais {
    background: #e3f2fd;
    color: #1976d2;
  }

  .badge.surgele {
    background: #e8f5e9;
    color: #388e3c;
  }

  .badge.merged {
    background: #fff3e0;
    color: #f57c00;
  }

  .product-stats {
    display: flex;
    gap: 1.5rem;
  }

  .stat {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .stat-value {
    font-size: 1.5rem;
    font-weight: 600;
    color: #2196f3;
  }

  .stat-label {
    font-size: 0.75rem;
    color: #666;
  }

  .product-who {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .who-tags {
    display: flex;
    gap: 0.25rem;
    flex-wrap: wrap;
  }

  .who-tag {
    padding: 0.125rem 0.5rem;
    background: #f5f5f5;
    border-radius: 12px;
    font-size: 0.75rem;
    color: #666;
  }

  .product-footer {
    margin-top: 1rem;
    padding-top: 0.75rem;
    border-top: 1px solid #e0e0e0;
  }

  .product-footer small {
    color: #999;
    font-size: 0.75rem;
  }
</style>
