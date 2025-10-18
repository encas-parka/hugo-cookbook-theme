<script lang="ts">
  import type { EnrichedProduct } from '../types/store.types';
  import { Search, X, FunnelIcon, Edit3, Store, Users, ShoppingCart, Refrigerator, Snowflake, Utensils, LayoutList, ListTodo, Filter, Combine } from '@lucide/svelte';
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

  // État du drawer
  let filtersDrawerOpen = $state(false);

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
  <div class="flex flex-wrap gap-2 items-center">
    <div class="badge badge-neutral badge-lg">
      <LayoutList class="w-4 h-4 mr-1" />
      {stats.total}
    </div>
    <div class="badge badge-info badge-lg">
      <Refrigerator strokeWidth={2} class="w-4 h-4 mr-1" />
      frais:
      {stats.frais}
    </div>
    <div class="badge badge-success badge-lg">
      <Snowflake class="w-4 h-4 mr-1" />
      surgelés:
      {stats.surgel}
    </div>
    <div class="badge badge-warning badge-lg">
      <Combine strokeWidth={2} class="w-4 h-4 mr-1" />
      fusionnés:
      {stats.merged}
    </div>
  </div>

  <!-- Recherche persistante en haut -->
  <div class="bg-base-200 rounded-lg p-4">
    <div class="hidden md:block">
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
    </div></div>
    <div class="form-control md:mb-4">
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
    <!-- Filtres desktop -->
    <div class="hidden md:block">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

      <!-- Filtres par magasin et qui -->
      <div class="flex flex-col lg:flex-row gap-6 mt-4">
        {#if uniqueStores.length > 0}
          <div class="flex-1">
            <fieldset>
              <legend class="label">
                <span class="label-text">Magasins</span>
              </legend>
              <div class="flex flex-wrap gap-2 items-center" role="group">
                {#each uniqueStores as store (store)}
                  <button
                    class="btn btn-sm {
                      filters.selectedStores.length === 0
                        ? 'btn-soft btn-accent'
                        : filters.selectedStores.includes(store)
                          ? 'btn-accent'
                          : 'btn-dash btn-accent'
                    }"
                    onclick={() => productsStore.toggleStore(store)}
                  >
                    {store}
                  </button>
                {/each}
                {#if filters.selectedStores.length > 0}
                  <button
                    class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10"
                    onclick={() => productsStore.clearStoreFilters()}
                    title="Effacer les filtres de magasins"
                  >
                    <X class="w-3 h-3" />
                  </button>
                {/if}
              </div>
            </fieldset>
          </div>
        {/if}

        {#if uniqueWho.length > 0}
          <div class="flex-1">
            <fieldset>
              <legend class="label">
                <span class="label-text">Qui</span>
              </legend>
              <div class="flex flex-wrap gap-2 items-center" role="group">
                {#each uniqueWho as who (who)}
                  <button
                    class="btn btn-sm {
                      filters.selectedWho.length === 0
                        ? 'btn-soft btn-accent'
                        : filters.selectedWho.includes(who)
                          ? 'btn-accent'
                          : 'btn-dash btn-accent'
                    }"
                    onclick={() => productsStore.toggleWho(who)}
                  >
                    {who}
                  </button>
                {/each}
                {#if filters.selectedWho.length > 0}
                  <button
                    class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10"
                    onclick={() => productsStore.clearWhoFilters()}
                    title="Effacer les filtres de qui"
                  >
                    <X class="w-3 h-3" />
                  </button>
                {/if}
              </div>
            </fieldset>
          </div>
        {/if}
      </div>
    </div>
  </div>



  <!-- Tableau -->
  <div class="bg-base-200 rounded-lg overflow-x-auto max-h-[calc(100vh-200px)]">
    <table class="table w-full">
      <thead class="sticky top-0 z-10 bg-base-300">
        <tr class="bg-base-300">
          <th class="cursor-pointer hover:bg-base-200 text-center" onclick={() => productsStore.handleSort('productName')}>
            <div class="flex items-center justify-center gap-2">
              <LayoutList class="w-4 h-4" />
              Nom du produit
              {#if filters.sortColumn === 'productName'}
                {filters.sortDirection === 'asc' ? '↑' : '↓'}
              {/if}
            </div>
          </th>
          <th class="cursor-pointer hover:bg-base-200 text-center {filters.groupBy === 'store' ? 'hidden' : ''}" onclick={() => productsStore.handleSort('store')}>
            <div class="flex items-center justify-center gap-2">
              <Store class="w-4 h-4" />
              Magasin
              {#if filters.sortColumn === 'store'}
                {filters.sortDirection === 'asc' ? '↑' : '↓'}
              {/if}
            </div>
          </th>
          <th class="cursor-pointer hover:bg-base-200 text-center" onclick={() => productsStore.handleSort('who')}>
            <div class="flex items-center justify-center gap-2">
              <Users class="w-4 h-4" />
              Qui
              {#if filters.sortColumn === 'who'}
                {filters.sortDirection === 'asc' ? '↑' : '↓'}
              {/if}
            </div>
          </th>
          <th class="cursor-pointer hover:bg-base-200 text-center {filters.groupBy === 'productType' ? 'hidden' : ''}" onclick={() => productsStore.handleSort('productType')}>
            <div class="flex items-center justify-center gap-2">
              Type
              {#if filters.sortColumn === 'productType'}
                {filters.sortDirection === 'asc' ? '↑' : '↓'}
              {/if}
            </div>
          </th>
          <th class="text-center">
            <div class="flex items-center justify-center gap-2">
              Besoins
              {#if filters.sortColumn === 'totalNeededConsolidated'}
                {filters.sortDirection === 'asc' ? '↑' : '↓'}
              {/if}
            </div>
          </th>
          <th class="text-center">
            <div class="flex items-center justify-center gap-2">
              <ShoppingCart class="w-4 h-4" />
              Achats
              {#if filters.sortColumn === 'totalPurchases'}
                {filters.sortDirection === 'asc' ? '↑' : '↓'}
              {/if}
            </div>
          </th>

          <th class="text-center">
            <div class="flex items-center justify-center gap-2">
              <ListTodo class="w-4 h-4" /> manquant
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {#each Object.entries(groupedFormattedProducts) as [groupKey, groupProducts] (groupKey)}
          {#if groupKey !== ''}
            <!-- Header de groupe -->
            <tr class="bg-base-300 font-semibold sticky top-10 z-10">
              <td colspan="7" class="py-2">
                <div class="flex items-center justify-center gap-2">
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
                class="cursor-pointer hover:bg-blue-50 relative group"
                onclick={() => handleCellClick('productName', product)}
              >
                <div class="flex items-center justify-between pr-8">
                  <div>
                    <div class="font-medium">{product.productName}</div>
                    {#if product.previousNames && product.previousNames.length > 0}
                      <div class="text-xs text-base-content/60">
                        Ancien: {product.previousNames[0]}
                      </div>
                    {/if}
                  </div>
                  <div class="flex gap-1">
                    {#if product.pFrais}
                      <div class="w-7 h-7 bg-info/20 rounded-full flex items-center justify-center">
                        <Refrigerator strokeWidth={3}  class="w-4 h-4 text-info" />
                      </div>
                    {/if}
                    {#if product.pSurgel}
                      <div class="w-7 h-7 bg-success/20 rounded-full flex items-center justify-center">
                        <Snowflake class="w-4 h-4 text-success" />
                      </div>
                    {/if}
                  </div>
                </div>
                <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Edit3 class="w-3 h-3 text-blue-500" />
                </div>
              </td>
              <td class="{filters.groupBy === 'store' ? 'hidden' : ''} cursor-pointer hover:bg-green-50 font-medium relative group"
                onclick={() => handleCellClick('store', product)}
              >
                {#if product.storeInfo?.storeComment}
                  <div class="tooltip tooltip-info" data-tip={product.storeInfo.storeComment}>
                    {product.storeInfo.storeName || '-'}
                  </div>
                {:else}
                  {product.storeInfo?.storeName || '-'}
                {/if}
                <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Edit3 class="w-3 h-3 text-green-500" />
                </div>
              </td>
              <td
                class="cursor-pointer hover:bg-purple-50 relative group"
                onclick={() => handleCellClick('who', product)}
              >
                {#if product.who && product.who.length > 0}
                  <div class="flex flex-wrap gap-1 pr-8">
                    {#each product.who as person (person)}
                      <span class="badge badge-soft badge-success badge-sm">{person}</span>
                    {/each}
                  </div>
                {:else}
                  -
                {/if}
                <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Edit3 class="w-3 h-3 text-purple-500" />
                </div>
              </td>
              <td class="{filters.groupBy === 'productType' ? 'hidden' : ''}">
                <span class="badge badge-ghost">{product.productType}</span>
              </td>
              <td class="text-center font-semibold">
                <div class="pb-1 text-center font-semibold">{product.displayQuantity || '-'}</div>
                {#if product.nbRecipes || product.totalAssiettes}
                  <div class="text-xs text-base-content/70 flex gap-2 items-center justify-center">
                    <Utensils class="w-3 h-3" />
                      <span class="text-center ">{product?.nbRecipes} r.</span>
                      <span class="text-center ">{product?.totalAssiettes} c.</span>
                  </div>
                {/if}
              </td>

              <td class="text-center font-medium cursor-pointer hover:bg-red-50 relative group" onclick={() => handleCellClick('purchases',product)}>
                {product.displayTotalPurchases || '-'}
                <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Edit3 class="w-3 h-3 text-red-500" />
                </div>
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

<!-- Drawer pour filtres mobile -->
<div class="drawer drawer-end">
  <input
    id="filters-drawer"
    type="checkbox"
    class="drawer-toggle"
    bind:checked={filtersDrawerOpen}
  />

  <div class="drawer-side">
    <label for="filters-drawer" class="drawer-overlay"></label>

    <!-- Filtres mobile dans le drawer -->
    <div class="menu bg-base-200 min-h-full w-80 p-4">
      <div class="flex items-center justify-between mb-6">
        <h3 class="text-lg font-semibold flex items-center gap-2">
          <FunnelIcon class="w-5 h-5" />
          Filtres
        </h3>
        <label for="filters-drawer" class="btn btn-sm btn-ghost btn-circle">
          <X class="w-4 h-4" />
        </label>
      </div>

      <!-- Filtre par type -->
      <div class="form-control mb-4">
        <label class="label" for="product-type-select-mobile">
          <span class="label-text">Type de produit</span>
        </label>
        <select
          id="product-type-select-mobile"
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
      <div class="form-control mb-4">
        <label class="label" for="grouping-select-mobile">
          <span class="label-text">Groupement</span>
        </label>
        <select
          id="grouping-select-mobile"
          class="select select-bordered"
          value={filters.groupBy}
          onchange={(e) => productsStore.setGroupBy(e.currentTarget.value as any)}
        >
          <option value="none">Aucun</option>
          <option value="store">Par magasin</option>
          <option value="productType">Par type</option>
        </select>
      </div>

      <!-- Filtres température -->
      <div class="mb-6">
        <fieldset>
          <legend class="label">
            <span class="label-text">Température</span>
          </legend>
          <div class="flex flex-col gap-2">
            <label class="cursor-pointer flex items-center gap-2">
              <input
                id="frais-checkbox-mobile"
                type="checkbox"
                class="checkbox checkbox-info"
                checked={filters.showPFrais}
                onchange={(e) => productsStore.setTemperatureFilters(e.currentTarget.checked, filters.showPSurgel)}
              />
              <span>Produits frais</span>
            </label>
            <label class="cursor-pointer flex items-center gap-2">
              <input
                id="surgele-checkbox-mobile"
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
        <div class="mb-6">
          <fieldset>
            <legend class="label mb-2">
              <span class="label-text">Magasins</span>
            </legend>
            <div class="flex flex-wrap gap-2" role="group">
              {#each uniqueStores as store (store)}
                <button
                  class="btn btn-sm {
                    filters.selectedStores.length === 0
                      ? 'btn-soft btn-accent'
                      : filters.selectedStores.includes(store)
                        ? 'btn-accent'
                        : 'btn-dash btn-accent'
                  }"
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
        <div class="mb-6">
          <fieldset>
            <legend class="label mb-2">
              <span class="label-text">Qui</span>
            </legend>
            <div class="flex flex-wrap gap-2" role="group">
              {#each uniqueWho as who (who)}
                <button
                  class="btn btn-sm {
                    filters.selectedWho.length === 0
                      ? 'btn-soft btn-accent'
                      : filters.selectedWho.includes(who)
                        ? 'btn-accent'
                        : 'btn-dash btn-accent'
                  }"
                  onclick={() => productsStore.toggleWho(who)}
                >
                  {who}
                </button>
              {/each}
            </div>
          </fieldset>
        </div>
      {/if}

      <!-- Actions -->
      <div class="divider"></div>
      <button
        class="btn btn-primary w-full mb-2"
        onclick={() => {
          productsStore.clearFilters();
          filtersDrawerOpen = false;
        }}
      >
        <X class="w-4 h-4 mr-2" />
        Tout effacer
      </button>
      <label for="filters-drawer" class="btn btn-outline w-full">
        Appliquer
      </label>
    </div>
  </div>
</div>

<!-- FAB flottant pour mobile -->
<div class="md:hidden fixed bottom-4 left-4 z-50">
  <label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg">
    <Filter class="w-6 h-6" />
  </label>
</div>
