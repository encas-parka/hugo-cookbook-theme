<script lang="ts">
  import { getProductTypeInfo } from "../utils/products-display";
  import {
    Store,
    Package,
    CircleCheck,
    ShoppingBasket,
    Snowflake,
    CircleAlert,
    Users,
  } from "@lucide/svelte";
  import { productsStore } from "../stores/ProductsStore.svelte";
  import { modal } from "../stores/GlobalState.svelte";

  // utils
  import { sortEnrichedProducts } from "../utils/products-display";

  const groupedFormattedProducts = $derived(
    productsStore.groupedFormattedProducts,
  );
  const filters = $derived(productsStore.filters);
  const filteredProducts = $derived(productsStore.filteredProducts);

  // Fonctions pour gérer les modaux
  function handleOpenProductModal(tab: string, productId: string) {
    modal.product.id = productId;
    modal.product.tab = tab;
    modal.product.isOpen = true;
  }
</script>

<div class="bg-base-200 rounded-lg p-1 md:hidden">
  {#each Object.entries(groupedFormattedProducts) as [groupKey, groupProducts] (groupKey)}
    {#if groupKey !== ""}
      <!-- Header de groupe mobile -->
      {@const groupTypeInfo = getProductTypeInfo(groupKey)}
      <div
        class="bg-base-300 sticky top-0 z-10 mb-3 rounded-lg p-3 font-semibold"
      >
        <div class="flex items-center justify-center gap-2">
          {#if filters.groupBy === "store"}
            <Store class="h-4 w-4" />
            <span>{groupKey}</span>
          {:else if filters.groupBy === "productType"}
            <groupTypeInfo.icon class="h-4 w-4" />
            <span>{groupTypeInfo.displayName}</span>
          {:else}
            <Package class="h-4 w-4" />
            <span>{groupKey}</span>
          {/if}
          <span class="text-sm opacity-70">({groupProducts?.length || 0})</span>
        </div>
      </div>
    {/if}

    <!-- Cards des produits -->
    <div class="mb-4 space-y-3">
      {#each sortEnrichedProducts(groupProducts || [], filters) as product (product.$id)}
        {@const typeInfo = getProductTypeInfo(product.productType)}
        {@const isComplete = product.displayMissingQuantity === "✅ Complet"}
        <div class="flex">
          <div
            class="card bg-base-100 w-full cursor-pointer shadow-lg transition-all hover:shadow-xl"
          >
            <div class="card-body px-4 py-2">
              <!-- Header: Nom + icônes température -->
              <button
                class="mb-2 flex items-center justify-between"
                onclick={() =>
                  handleOpenProductModal("productName", product.$id)}
                aria-label="Click to edit product name"
              >
                <div class="max-w-fit truncate text-base font-semibold">
                  {product.productName}
                </div>
                <div class="ms-auto flex justify-end gap-1">
                  {#if product.pFrais}
                    <div class="text-success"><ShoppingBasket size={22} /></div>
                  {/if}
                  {#if product.pSurgel}
                    <div class="text-info"><Snowflake size={22} /></div>
                  {/if}
                  <typeInfo.icon size={22} />
                </div>
              </button>

              <!-- Magasin + Qui -->
              <div
                class="text-md mb-3 flex flex-wrap items-center justify-between gap-2 opacity-80"
              >
                <button
                  class="btn btn-sm btn-ghost flex flex-1 items-center gap-1"
                  onclick={(e) => {
                    e.stopPropagation();
                    handleOpenProductModal("store", product.$id);
                  }}
                >
                  <Store class="h-5 w-5" />
                  <span class="truncate"
                    >{product.storeInfo?.storeName || "-"}</span
                  >
                </button>

                <button
                  class="btn btn-ghost btn-sm flex flex-1 items-center gap-1"
                  onclick={(e) => {
                    e.stopPropagation();
                    handleOpenProductModal("who", product.$id);
                  }}
                >
                  <Users class="h-5 w-5" />
                  {#if product.who && product.who.length > 0}
                    <div class="flex flex-wrap gap-1">
                      {#each product.who.slice(0, 2) as person (person)}
                        <span class="badge badge-soft badge-info badge-sm"
                          >{person}</span
                        >
                      {/each}
                      {#if product.who.length > 2}
                        <span class="badge badge-soft badge-info badge-sm"
                          >+{product.who.length - 2}</span
                        >
                      {/if}
                    </div>
                  {/if}
                </button>
              </div>

              <!-- Quantité principale (logique conditionnelle) -->
              <button
                class="mb-3"
                onclick={(e) => {
                  e.stopPropagation();
                  handleOpenProductModal("purchases", product.$id);
                }}
              >
                {#if isComplete}
                  <div
                    class="alert alert-success hover:bg-success/10 cursor-pointer px-3 py-2 transition-colors"
                  >
                    <CircleCheck class="h-4 w-4 shrink-0" />
                    <span class="text-sm font-medium"
                      >{product.displayTotalPurchases} acheté</span
                    >
                  </div>
                {:else}
                  <div
                    class="alert alert-warning hover:bg-warning/10 cursor-pointer px-3 py-2 transition-colors"
                  >
                    <CircleAlert class="h-4 w-4 shrink-0" />
                    <span class="text-sm font-medium"
                      >Manque {product.displayMissingQuantity}</span
                    >
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
    <div class="py-8 text-center">
      <div class="alert alert-info">
        <div>
          <svg
            class="h-6 w-6 shrink-0 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>Aucun produit trouvé avec les filtres actuels</span>
        </div>
      </div>
    </div>
  {/if}
</div>
