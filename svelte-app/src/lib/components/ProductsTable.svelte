<script lang="ts">
  import { Search, X, FunnelIcon, SquarePen, Store, Users, User, ShoppingCart, Snowflake, Utensils, LayoutList, ListTodo, Combine, ShoppingBasket, CircleCheckBig } from '@lucide/svelte';

  // Store and global state
  import { productsStore } from '../stores/ProductsStore.svelte';
  import { openProductModal } from '../stores/GlobalState.svelte';

  // Components
  import ProductModal from './ProductModal.svelte';
  import ProductDrawerFilters from './ProductDrawerFilters.svelte';

  // utils
  import { getProductTypeInfo, sortEnrichedProducts } from '../utils/products-display';



  // Accès réactif aux valeurs dérivées du store
  const filteredProducts = $derived(productsStore.filteredProducts);
  const groupedFormattedProducts = $derived(productsStore.filteredGroupedProducts);
  const stats = $derived(productsStore.stats);
  const uniqueStores = $derived(productsStore.uniqueStores);
  const uniqueWho = $derived(productsStore.uniqueWho);
  const uniqueProductTypes = $derived(productsStore.uniqueProductTypes);
  const filters = $derived(productsStore.filters);



  // Gestionnaire de clics sur les cellules pour le ProductModal
  function handleOpenProductModal(tab: string, productId: string) {
    openProductModal(tab, productId);
  }

</script>


<div class="space-y-6">
  <!-- Stats -->
  <div class="flex flex-wrap gap-2 items-center">
    <div class="badge badge-neutral badge-lg">
      <LayoutList class="w-4 h-4 mr-1" />
      {stats.total}
    </div>
    <div class="badge badge-info badge-lg">
      <ShoppingBasket class="w-4 h-4 mr-1" />
      frais:
      {stats.frais}
    </div>
    <div class="badge badge-success badge-lg">
      <Snowflake class="w-4 h-4 mr-1" />
      surgelés:
      {stats.surgel}
    </div>
    <div class="badge badge-warning badge-lg">
      <Combine class="w-4 h-4 mr-1" />
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
    </div>

    </div>
    <div class="flex  md:mb-4 justify-between mb-4 flex-wrap items-center gap-4 ">
      <div class="form-control ">
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
        <!-- Groupement -->
      </div>
        <div class="form-control">
          <label class="label flex" for="grouping-select">
            <span class="label-text">Groupement</span>
          </label>
          <div class="join" id="grouping-select">
            <input
              class="join-item btn btn-sm md:btn-md"
              type="radio"
              name="grouping-options"
              aria-label="Aucun"
              checked={filters.groupBy === 'none'}
              onchange={() => productsStore.setGroupBy('none')}
            />
            <input
              class="join-item btn btn-sm md:btn-md"
              type="radio"
              name="grouping-options"
              aria-label="Par magasin"
              checked={filters.groupBy === 'store'}
              onchange={() => productsStore.setGroupBy('store')}
            >
            <input
              class="join-item btn btn-sm md:btn-md"
              type="radio"
              name="grouping-options"
              aria-label="Par type"
              checked={filters.groupBy === 'productType'}
              onchange={() => productsStore.setGroupBy('productType')}
            />
          </div>
        </div>
    </div>
    <!-- Filtres desktop -->
    <div class="hidden md:block">

      <!-- Filtres par type, température, magasin et qui -->
      <div class="flex mt-4"> {#if uniqueProductTypes.length > 0}
        <div class="flex-1">
          <fieldset>
            <legend class="label">
              <span class="label-text">Types & Température</span>
            </legend>
            <div class="flex flex-wrap gap-2 items-center" role="group">
              {#each uniqueProductTypes as type (type)}
                {@const typeInfo = getProductTypeInfo(type)}
                <button
                  class="btn btn-sm {
                    filters.selectedProductTypes.length === 0
                      ? 'btn-soft btn-accent'
                      : filters.selectedProductTypes.includes(type)
                        ? 'btn-accent'
                        : 'btn-dash btn-accent'
                  }"
                  onclick={() => productsStore.toggleProductType(type)}
                >
                  <typeInfo.icon class="w-5 h-5 mr-1" />
                  {typeInfo.displayName}
                </button>
              {/each}

              <!-- Filtres température -->
              <button
                class="btn btn-sm ms-4 {
                  filters.selectedTemperatures.length === 0
                    ? 'btn-soft btn-success'
                    : filters.selectedTemperatures.includes('frais')
                      ? 'btn-success'
                      : 'btn-dash btn-success'
                }"
                onclick={() => productsStore.toggleTemperature('frais')}
              >
                <ShoppingBasket class="w-5 h-5" />
                Frais
              </button>
              <button
                class="btn btn-sm {
                  filters.selectedTemperatures.length === 0
                    ? 'btn-soft btn-info'
                    : filters.selectedTemperatures.includes('surgele')
                      ? 'btn-info'
                      : 'btn-dash btn-info'
                }"
                onclick={() => productsStore.toggleTemperature('surgele')}
              >
                <Snowflake class="w-5 h-5" />
                Surgelés
              </button>

              {#if filters.selectedProductTypes.length > 0 || filters.selectedTemperatures.length > 0}
                <button
                  class="btn btn-sm btn-circle btn-ghost text-error hover:bg-error/10"
                  onclick={() => productsStore.clearTypeAndTemperatureFilters()}
                  title="Effacer les filtres de types et température"
                >
                  <X class="w-3 h-3" />
                </button>
              {/if}
            </div>
          </fieldset>
        </div>
      {/if}
      </div>
      <div class="flex flex-col lg:flex-row gap-6 mt-4">
        {#if uniqueStores.length > 0}
          <div class="flex-1">
            <fieldset>
              <legend class="label">
                <span class="label-text text-sm">Magasins</span>
              </legend>
              <div class="flex flex-wrap gap-2 items-center" role="group">
                {#each uniqueStores as store (store)}
                  <button
                    class="btn btn-xs {
                      filters.selectedStores.length === 0
                        ? 'btn-soft btn-accent'
                        : filters.selectedStores.includes(store)
                          ? 'btn-accent'
                          : 'btn-dash btn-accent'
                    }"
                    onclick={() => productsStore.toggleStore(store)}
                  > <Store class="w-3 h-3 mr-1" />
                    {store}
                  </button>
                {/each}
                {#if filters.selectedStores.length > 0}
                  <button
                    class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10"
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
                <span class="label-text text-sm">Qui</span>
              </legend>
              <div class="flex flex-wrap gap-2 items-center" role="group">
                {#each uniqueWho as who (who)}
                  <button
                    class="btn btn-xs {
                      filters.selectedWho.length === 0
                        ? ' btn-soft btn-info'
                        : filters.selectedWho.includes(who)
                          ? ' btn-info'
                          : 'btn-dash btn-info'
                    }"
                    onclick={() => productsStore.toggleWho(who)}
                  > <User class="w-3 h-3 mr-1" />
                    {who}
                  </button>
                {/each}
                {#if filters.selectedWho.length > 0}
                  <button
                    class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10"
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



  <!-- Tableau Desktop -->
  <div class="hidden md:block bg-base-100 rounded-lg ">
    <table class="table w-full">
      <thead class="sticky top-0 z-10 bg-base-200">
        <tr class="bg-base-200">
          <th class="cursor-pointer hover:bg-base-100 text-center" onclick={() => productsStore.handleSort('productName')}>
            <div class="flex items-center justify-center gap-2">
              <LayoutList class="w-4 h-4" />
              Nom du produit
              {#if filters.sortColumn === 'productName'}
                {filters.sortDirection === 'asc' ? '↑' : '↓'}
              {/if}
            </div>
          </th>
          <th class="cursor-pointer hover:bg-base-100 text-center {filters.groupBy === 'store' ? 'hidden' : ''}" onclick={() => productsStore.handleSort('store')}>
            <div class="flex items-center justify-center gap-2">
              <Store class="w-4 h-4" />
              Magasin
              {#if filters.sortColumn === 'store'}
                {filters.sortDirection === 'asc' ? '↑' : '↓'}
              {/if}
            </div>
          </th>
          <th class="cursor-pointer hover:bg-base-100 text-center" onclick={() => productsStore.handleSort('who')}>
            <div class="flex items-center justify-center gap-2">
              <Users class="w-4 h-4" />
              Qui
              {#if filters.sortColumn === 'who'}
                {filters.sortDirection === 'asc' ? '↑' : '↓'}
              {/if}
            </div>
          </th>
          <th class="cursor-pointer hover:bg-base-100 text-center {filters.groupBy === 'productType' ? 'hidden' : ''}" onclick={() => productsStore.handleSort('productType')}>
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
            </div>
          </th>
          <th class="text-center">
            <div class="flex items-center justify-center gap-2">
              <ShoppingCart class="w-4 h-4" />
              Achats / Reccup
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
            {@const groupTypeInfo = getProductTypeInfo(groupKey)}
            <tr class="bg-base-200 font-semibold sticky top-10 z-10">
              <td colspan="7" class="py-2">
                <div class="flex items-center justify-center gap-2">
                  {#if filters.groupBy === 'store'}
                    🏪 {groupKey} ({groupProducts!.length})
                  {:else if filters.groupBy === 'productType'}
                    <div class="flex items-center gap-2">
                      <groupTypeInfo.icon class="w-4 h-4" />
                      <span>{groupTypeInfo.displayName}</span>
                      <span class="text-sm opacity-70">({groupProducts!.length})</span>
                    </div>
                  {:else}
                    📦 {groupKey} ({groupProducts!.length})
                  {/if}
                </div>
              </td>
            </tr>
          {/if}

          <!-- Produits du groupe -->
          {#each sortEnrichedProducts(groupProducts!, filters) as product (product.$id)}
            {@const typeInfo = getProductTypeInfo(product.productType)}

            <tr class="hover:bg-base-200/20 transition-colors">
              <td
                class="cursor-pointer hover:inset-ring-2 hover:inset-ring-amber-400/50 rounded relative group"
                onclick={() => handleOpenProductModal('recettes', product.$id)}
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
                      <div class="w-7 h-7 bg-success/20 rounded-full flex items-center justify-center">
                        <ShoppingBasket class="w-4 h-4 text-success" />
                      </div>
                    {/if}
                    {#if product.pSurgel}
                      <div class="w-7 h-7 bg-info/20 rounded-full flex items-center justify-center">
                        <Snowflake class="w-4 h-4 text-info" />
                      </div>
                    {/if}
                  </div>
                </div>
                <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <SquarePen class="w-4 h-4 text-amber-600" />
                </div>
              </td>
              <td class="{filters.groupBy === 'store' ? 'hidden' : ''} cursor-pointer hover:inset-ring-2 hover:inset-ring-amber-400/50 rounded font-medium relative group"
                onclick={() => handleOpenProductModal('magasins', product.$id)}
              >
                {#if product.storeInfo?.storeComment}
                  <div class="tooltip tooltip-info" data-tip={product.storeInfo.storeComment}>
                    {product.storeInfo.storeName || '-'}
                  </div>
                {:else}
                  {product.storeInfo?.storeName || '-'}
                {/if}
                <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <SquarePen class="w-4 h-4 text-amber-600" />
                </div>
              </td>
              <td
                class="cursor-pointer hover:inset-ring-2 hover:inset-ring-amber-400/50 rounded relative group"
                onclick={() => handleOpenProductModal('volontaires', product.$id)}
              >
                {#if product.who && product.who.length > 0}
                  <div class="flex flex-wrap gap-1 pr-8">
                    {#each product.who as person (person)}
                      <span class="badge badge-soft badge-info badge-sm">{person}</span>
                    {/each}
                  </div>
                {:else}
                  -
                {/if}
                <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <SquarePen class="w-4 h-4 text-amber-600" />
                </div>
              </td>
              <td class="{filters.groupBy === 'productType' ? 'hidden' : ''}">
                <span class="flex items-center gap-1 text-sm">
                  <typeInfo.icon class="w-3 h-3" />
                  {typeInfo.displayName}
                </span>
              </td>
              <td class="text-center font-semibold">
                <div class="pb-1 text-center font-semibold">{product.displayTotalNeeded || '-'}</div>
                {#if product.nbRecipes || product.totalAssiettes}
                  <div class="text-xs text-base-content/70 flex gap-2 items-center justify-center">
                    <Utensils class="w-3 h-3" />
                      <span class="text-center ">{product?.nbRecipes} r.</span>
                      <span class="text-center ">{product?.totalAssiettes} c.</span>
                  </div>
                {/if}
              </td>

              <td class="text-center font-medium cursor-pointer hover:inset-ring-2 hover:inset-ring-amber-400/50 rounded relative group" onclick={() => handleOpenProductModal('achats',product.$id)}>
                {product.displayTotalPurchases || '-'}
                <div class="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <SquarePen class="w-4 h-4 text-amber-600" />
                </div>
              </td>
              <td class="relative group text-center">
                {#if product.displayMissingQuantity !== '✅ Complet'}
                <div class="bg-warning px-2 py-1 rounded m-auto">{product.displayMissingQuantity}</div>
                {:else}
                <CircleCheckBig size={28} strokeWidth={3} class="text-success m-auto" />
              {/if}
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

  <!-- Vue Mobile Cards -->

</div>

<ProductModal/>


<ProductDrawerFilters />
