<script lang="ts">
  import type { EnrichedProduct } from '../types/store.types';
  import { Search, X, FunnelIcon } from '@lucide/svelte';
  import { productsStore } from '../stores/ProductsStore.svelte';
  import ProductModal from './ProductModal.svelte';

  // Accès réactif aux valeurs dérivées du store
  const filteredProducts = $derived(productsStore.filteredProducts);
  const groupedFormattedProducts = $derived(productsStore.groupedFormattedProducts);
  const stats = $derived(productsStore.stats);
  const uniqueStores = $derived(productsStore.uniqueStores);
  const uniqueWho = $derived(productsStore.uniqueWho);
  const uniqueProductTypes = $derived(productsStore.uniqueProductTypes);
  const filters = $derived(productsStore.filters);

  // État du ProductModal
  let productModalOpen = $state(false);
  let productModalSelectedProductId = $state<string | null>(null);
  let productModalInitialTab = $state('recettes');

  // Gestionnaire de clics sur les cellules pour le ProductModal
  function handleCellClick(type: string, product: EnrichedProduct) {
    console.log(`Cell clicked: ${type}`, product);
    productModalSelectedProductId = product.$id;

    // Déterminer l'onglet à ouvrir selon le type de clic
    switch(type) {
      case 'store':
        productModalInitialTab = 'magasins';
        break;
      case 'who':
        productModalInitialTab = 'volontaires';
        break;
      case 'purchases':
        productModalInitialTab = 'achats';
        break;
      case 'productName':
        productModalInitialTab = 'recettes';
        break;
      default:
        productModalInitialTab = 'recettes';
    }

    productModalOpen = true;
  }

  function closeProductModal() {
    productModalOpen = false;
    productModalSelectedProductId = null;
  }

  // Gérer les événements du clavier (ESC pour fermer le ProductModal)
  $effect(() => {
    function handleKeyPress(e: KeyboardEvent) {
      if (e.key === 'Escape' && productModalOpen) {
        closeProductModal();
      }
    }

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  });
</script>

<div class="space-y-6">
  <!-- Stats -->
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div class="stat bg-base-200 rounded-lg">
      <div class="stat-title">Total</div>
      <div class="stat-value">{stats.total}</div>
    </div>
    <div class="stat bg-base-200 rounded-lg">
      <div class="stat-title">Frais</div>
      <div class="stat-value text-info">{stats.frais}</div>
    </div>
    <div class="stat bg-base-200 rounded-lg">
      <div class="stat-title">Surgelés</div>
      <div class="stat-value text-success">{stats.surgel}</div>
    </div>
    <div class="stat bg-base-200 rounded-lg">
      <div class="stat-title">Fusionnés</div>
      <div class="stat-value text-warning">{stats.merged}</div>
    </div>
  </div>

  <!-- Filtres -->
  <div class="bg-base-200 rounded-lg p-4">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-lg font-semibold flex items-center gap-2">
        <FunnelIcon class="w-5 h-5" />
        Filtres
      </h3>
      <button
        class="btn btn-sm btn-ghost"
        onclick={() => productsStore.clearFilters()}
      >
        <X class="w-4 h-4" />
        Tout effacer
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <!-- Recherche -->
      <div class="form-control">
        <label class="label" for="search-input">
          <span class="label-text">Recherche</span>
        </label>
        <div class="input input-bordered flex items-center gap-2">
          <Search class="w-4 h-4" />
          <input
            id="search-input"
            type="text"
            placeholder="Nom du produit..."
            class="grow"
            value={filters.searchQuery}
            oninput={(e) => productsStore.setSearchQuery(e.currentTarget.value)}
          />
        </div>
      </div>

      <!-- Filtre par type -->
      <div class="form-control">
        <label class="label" for="product-type-select">
          <span class="label-text">Type de produit</span>
        </label>
        <select
          id="product-type-select"
          class="select select-bordered"
          value={filters.selectedProductType}
          onchange={(e) => productsStore.setProductType(e.currentTarget.value)}
        >
          <option value="">Tous les types</option>
          {#each uniqueProductTypes as type (type)}
            <option value={type}>{type}</option>
          {/each}
        </select>
      </div>

      <!-- Groupement -->
      <div class="form-control">
        <label class="label" for="grouping-select">
          <span class="label-text">Groupement</span>
        </label>
        <select
          id="grouping-select"
          class="select select-bordered"
          value={filters.groupBy}
          onchange={(e) => productsStore.setGroupBy(e.currentTarget.value as any)}
        >
          <option value="none">Aucun</option>
          <option value="store">Par magasin</option>
          <option value="productType">Par type</option>
        </select>
      </div>
    </div>

    <!-- Filtres température -->
    <div class="mt-4">
      <fieldset>
        <legend class="label">
          <span class="label-text">Température</span>
        </legend>
        <div class="flex gap-4">
          <label class="cursor-pointer flex items-center gap-2">
            <input
              id="frais-checkbox"
              type="checkbox"
              class="checkbox checkbox-info"
              checked={filters.showPFrais}
              onchange={(e) => productsStore.setTemperatureFilters(e.currentTarget.checked, filters.showPSurgel)}
            />
            <span>Produits frais</span>
          </label>
          <label class="cursor-pointer flex items-center gap-2">
            <input
              id="surgele-checkbox"
              type="checkbox"
              class="checkbox checkbox-success"
              checked={filters.showPSurgel}
              onchange={(e) => productsStore.setTemperatureFilters(filters.showPFrais, e.currentTarget.checked)}
            />
            <span>Produits surgelés</span>
          </label>
        </div>
      </fieldset>
    </div>

    <!-- Filtres par magasin -->
    {#if uniqueStores.length > 0}
      <div class="mt-4">
        <fieldset>
          <legend class="label">
            <span class="label-text">Magasins</span>
          </legend>
          <div class="flex flex-wrap gap-2" role="group">
            {#each uniqueStores as store (store)}
              <button
                class="btn btn-sm {filters.selectedStores.includes(store) ? 'btn-primary' : 'btn-outline'}"
                onclick={() => productsStore.toggleStore(store)}
              >
                {store}
              </button>
            {/each}
          </div>
        </fieldset>
      </div>
    {/if}

    <!-- Filtres par who -->
    {#if uniqueWho.length > 0}
      <div class="mt-4">
        <fieldset>
          <legend class="label">
            <span class="label-text">Qui</span>
          </legend>
          <div class="flex flex-wrap gap-2" role="group">
            {#each uniqueWho as who (who)}
              <button
                class="btn btn-sm {filters.selectedWho.includes(who) ? 'btn-primary' : 'btn-outline'}"
                onclick={() => productsStore.toggleWho(who)}
              >
                {who}
              </button>
            {/each}
          </div>
        </fieldset>
      </div>
    {/if}
  </div>

  <!-- Tableau -->
  <div class="bg-base-200 rounded-lg p-4 overflow-x-auto">
    <table class="table w-full">
      <thead>
        <tr class="bg-base-300">
          <th class="cursor-pointer hover:bg-base-400" onclick={() => productsStore.handleSort('productName')}>
            <div class="flex items-center gap-2">
              Nom du produit
              {#if filters.sortColumn === 'productName'}
                {filters.sortDirection === 'asc' ? '↑' : '↓'}
              {/if}
            </div>
          </th>
          <th class="cursor-pointer hover:bg-base-400" onclick={() => productsStore.handleSort('store')}>
            <div class="flex items-center gap-2">
              Magasin
              {#if filters.sortColumn === 'store'}
                {filters.sortDirection === 'asc' ? '↑' : '↓'}
              {/if}
            </div>
          </th>
          <th class="cursor-pointer hover:bg-base-400" onclick={() => productsStore.handleSort('who')}>
            <div class="flex items-center gap-2">
              Qui
              {#if filters.sortColumn === 'who'}
                {filters.sortDirection === 'asc' ? '↑' : '↓'}
              {/if}
            </div>
          </th>
          <th class="cursor-pointer hover:bg-base-400" onclick={() => productsStore.handleSort('productType')}>
            <div class="flex items-center gap-2">
              Type
              {#if filters.sortColumn === 'productType'}
                {filters.sortDirection === 'asc' ? '↑' : '↓'}
              {/if}
            </div>
          </th>
          <th>Temp.</th>
          <th>
            <div class="flex items-center gap-2">
              Besoins
              {#if filters.sortColumn === 'totalNeededConsolidated'}
                {filters.sortDirection === 'asc' ? '↑' : '↓'}
              {/if}
            </div>
          </th>
          <th>Recettes / Assiettes</th>

          <th>Achats</th>
          <th>Quantité manquante</th>
        </tr>
      </thead>
      <tbody>
        {#each Object.entries(groupedFormattedProducts) as [groupKey, groupProducts] (groupKey)}
          {#if groupKey !== ''}
            <!-- Header de groupe -->
            <tr class="bg-base-300 font-semibold">
              <td colspan="10" class="py-2">
                <div class="flex items-center gap-2">
                  {#if filters.groupBy === 'store'}
                    🏪 {groupKey} ({groupProducts.length})
                  {:else}
                    📦 {groupKey} ({groupProducts.length})
                  {/if}
                </div>
              </td>
            </tr>
          {/if}

          <!-- Produits du groupe -->
          {#each productsStore.sortProducts(groupProducts) as product (product.$id)}
            <tr class="hover:bg-base-300 transition-colors">
              <td
                class="cursor-pointer hover:bg-blue-50"
                onclick={() => handleCellClick('productName', product)}
              >
                <div class="font-medium">{product.productName}</div>
                {#if product.previousNames && product.previousNames.length > 0}
                  <div class="text-xs text-base-content/60">
                    Ancien: {product.previousNames[0]}
                  </div>
                {/if}
              </td>
              <td
                class="cursor-pointer hover:bg-green-50 font-medium"
                onclick={() => handleCellClick('store', product)}
              >
                {#if product.storeInfo?.storeComment}
                  <div class="tooltip tooltip-info" data-tip={product.storeInfo.storeComment}>
                    {product.storeInfo.storeName || '-'}
                  </div>
                {:else}
                  {product.storeInfo?.storeName || '-'}
                {/if}
              </td>
              <td
                class="cursor-pointer hover:bg-purple-50"
                onclick={() => handleCellClick('who', product)}
              >
                {#if product.who && product.who.length > 0}
                  <div class="flex flex-wrap gap-1">
                    {#each product.who as person (person)}
                      <span class="badge badge-outline badge-sm">{person}</span>
                    {/each}
                  </div>
                {:else}
                  -
                {/if}
              </td>
              <td>
                <span class="badge badge-ghost">{product.productType}</span>
              </td>
              <td>
                <div class="flex gap-1">
                  {#if product.pFrais}
                    <div class="badge badge-info badge-sm">F</div>
                  {/if}
                  {#if product.pSurgel}
                    <div class="badge badge-success badge-sm">S</div>
                  {/if}
                </div>
              </td>
              <td class="text-right font-semibold">
                {product.displayQuantity || '-'}
              </td>
              <td class="text-center">
                <div class="text-sm">
                  <div class="font-medium">{product.nbRecipes || 0} rec</div>
                  <div class="text-xs text-gray-600">{product.totalAssiettes || 0} ass</div>
                </div>
              </td>

              <td class="text-center font-medium cursor-pointer hover:bg-red-50" onclick={() => handleCellClick('purchases',product)}>
                {product.displayTotalPurchases || '-'}
              </td>
              <td class="text-center font-medium {product.displayMissingQuantity === '✅ Complet' ? 'text-success' : 'text-warning'}">
                {product.displayMissingQuantity}
              </td>
            </tr>
          {/each}
        {/each}
      </tbody>
    </table>

    {#if filteredProducts.length === 0}
      <div class="text-center py-8">
        <div class="alert alert-info">
          <div>
            <svg class="stroke-current shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>Aucun produit trouvé avec les filtres actuels</span>
          </div>
        </div>
      </div>
    {/if}
  </div>

  <!-- Légende -->
  <div class="bg-base-200 rounded-lg p-4">
    <h4 class="font-semibold mb-2">Légende</h4>
    <div class="flex flex-wrap gap-4 text-sm">
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 bg-blue-100 rounded"></div>
        <span>Cliquable (produit)</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 bg-green-100 rounded"></div>
        <span>Cliquable (magasin)</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 bg-purple-100 rounded"></div>
        <span>Cliquable (qui)</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 bg-orange-100 rounded"></div>
        <span>Cliquable (achats)</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="badge badge-info badge-sm">F</div>
        <span>Frais</span>
      </div>
      <div class="flex items-center gap-2">
        <div class="badge badge-success badge-sm">S</div>
        <span>Surgelé</span>
      </div>
    </div>
  </div>
</div>

<!-- ProductModal -->
<ProductModal
  isOpen={productModalOpen}
  productId={productModalSelectedProductId}
  initialTab={productModalInitialTab}
  onclose={closeProductModal}
/>
