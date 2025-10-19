
  <script>
    import { getProductTypeInfo } from '../utils/products-display';
    import { Store, Package, CircleCheck, ShoppingBasket, Snowflake, CircleAlert } from '@lucide/svelte'
    import { productsStore } from '../stores/ProductsStore.svelte';

    // utils
    import { sortEnrichedProducts } from '../utils/products-display';

    const groupedFormattedProducts = $derived(productsStore.groupedFormattedProducts);
    const filters = $derived(productsStore.filters);

  </script>

  <div class="md:hidden bg-base-200 rounded-lg p-1">
    {#each Object.entries(groupedFormattedProducts) as [groupKey, groupProducts] (groupKey)}
      {#if groupKey !== ''}
        <!-- Header de groupe mobile -->
        {@const groupTypeInfo = getProductTypeInfo(groupKey)}
        <div class="bg-base-300 rounded-lg p-3 mb-3 font-semibold sticky top-0 z-10">
          <div class="flex items-center justify-center gap-2">
            {#if filters.groupBy === 'store'}
              <Store class="w-4 h-4" />
              <span>{groupKey}</span>
            {:else if filters.groupBy === 'productType'}
              <groupTypeInfo.icon class="w-4 h-4" />
              <span>{groupTypeInfo.displayName}</span>
            {:else}
              <Package class="w-4 h-4" />
              <span>{groupKey}</span>
            {/if}
            <span class="text-sm opacity-70">({groupProducts?.length || 0})</span>
          </div>
        </div>
      {/if}

      <!-- Cards des produits -->
      <div class="space-y-3 mb-4">
        {#each sortEnrichedProducts(groupProducts || []) as product (product.$id)}
          {@const typeInfo = getProductTypeInfo(product.productType)}
          {@const isComplete = product.displayMissingQuantity === '✅ Complet'}
          <div class="flex">

              <div class="card bg-base-100 shadow-lg cursor-pointer hover:shadow-xl transition-all w-full">
                <div class="card-body px-4 py-2">
                  <!-- Header: Nom + icônes température -->
                  <button class="flex items-center justify-between mb-2"
                       onclick={() => handleOpenProductModal('productName', product.$id)} aria-label="Click to edit product name">
                      <div class="truncate max-w-fit font-semibold text-base">{product.productName}</div>
                      <div class="flex gap-1 ms-auto justify-end">

                        {#if product.pFrais}
                          <div class="text-success"><ShoppingBasket size={22} /></div>
                        {/if}
                        {#if product.pSurgel}
                          <div class="text-info"><Snowflake size={22} /></div>
                        {/if}
                         <typeInfo.icon size={22}  />
                      </div>
                    </button>

                  <!-- Magasin + Qui -->
                  <div class="flex flex-wrap items-center gap-2 text-md opacity-80 mb-3 justify-between">
                    <button class="flex flex-1 items-center  gap-1 btn btn-sm btn-ghost"
                         onclick={(e) => { e.stopPropagation(); handleOpenProductModal('store', product.$id); }}>
                      <Store  class="w-5 h-5" />
                      <span class="truncate">{product.storeInfo?.storeName || '-'}</span>
                    </button>

                      <button class="flex flex-1 items-center gap-1 btn btn-ghost btn-sm" onclick={(e) => { e.stopPropagation(); handleOpenProductModal('who', product.$id); }}>
                        <Users class="w-5 h-5" />
                    {#if product.who && product.who.length > 0}
                        <div class="flex flex-wrap gap-1">
                          {#each product.who.slice(0, 2) as person (person)}
                            <span class="badge badge-soft badge-info badge-sm">{person}</span>
                          {/each}
                          {#if product.who.length > 2}
                            <span class="badge badge-soft badge-info badge-sm">+{product.who.length - 2}</span>
                          {/if}
                        </div>
                    {/if}
                      </button>
                  </div>

                  <!-- Quantité principale (logique conditionnelle) -->
                  <button class="mb-3"
                       onclick={(e) => { e.stopPropagation(); handleOpenProductModal('purchases', product.$id); }}>
                    {#if isComplete}
                      <div class="alert alert-success py-2 px-3 cursor-pointer hover:bg-success/10 transition-colors">
                        <CircleCheck class="w-4 h-4 shrink-0" />
                        <span class="text-sm font-medium">{product.displayTotalPurchases} acheté</span>
                      </div>
                    {:else}
                      <div class="alert alert-warning py-2 px-3 cursor-pointer hover:bg-warning/10 transition-colors">
                        <CircleAlert class="w-4 h-4 shrink-0" />
                        <span class="text-sm font-medium">Manque {product.displayMissingQuantity}</span>
                      </div>
                    {/if}
                  </button>


                </div>
              </div>
          </div>
        {/each}
      </div>
    {/each}

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
