<script lang="ts">
  import { X, Package, ShoppingCart, Archive, Users, Store, CircleCheck, TriangleAlert } from '@lucide/svelte';

  // Stores and Global States
  import { productsStore } from '../stores/ProductsStore.svelte';
  import { modal, closeProductModal } from '../stores/GlobalState.svelte';
  import { createProductModalState } from '../stores/ProductModalState.svelte';


  // Components
  import PurchaseManager from './PurchaseManager.svelte';
  import StockManager from './StockManager.svelte';
  import VolunteerManager from './VolunteerManager.svelte';
  import StoreManager from './StoreManager.svelte';
  import { formatDate } from '../utils/products-display';


  let currentTab = $derived(modal.product.tab);
  let productId = $derived(modal.product.id)
  let isOpen = $derived(modal.product.isOpen)

  let currentProduct = $derived(
     productsStore.getEnrichedProductById(productId)
  );

  // Instance de ProductModalState (nouveau store centralisé)
  let modalState = $derived.by(() => {
    // console.log("currentProduct", currentProduct ? currentProduct : "null")
    return currentProduct ? createProductModalState(currentProduct) : null;
  });


  const loading = $derived(modalState?.loading ?? false);
  const error = $derived(modalState?.error ?? null);
  const stockEntries = $derived(modalState?.stockEntries ?? []);
  const purchasesList = $derived(modalState?.purchasesList ?? []);
  const recipes = $derived(modalState?.recipes ?? []);




  function handleTabClick(tab: string) {
    // --- FIXIT ? : Utilisation de ProductModalState // implémentation non terminée... Preserver ?---
    // if (modalState) {
    //   modalState.setCurrentTab(tab);
    // }

    // --- CODE LEGACY → globalState ---
    modal.product.tab = tab;
  }



</script>

{#if isOpen && currentProduct}
  <div class="modal modal-open">
    <div class="modal-box max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
      <!-- Header -->
      <div class="flex items-center justify-between p-4 border-b">
        <div class="flex-1">
          <h2 class="text-xl font-bold">{currentProduct.productName}</h2>
          <div class="flex items-center gap-3 mt-2">
            <span class="badge badge-secondary">{currentProduct.productType}</span>

            {#if currentProduct.status === 'active'}
              <div class="badge badge-success gap-1">
                <CircleCheck class="w-3 h-3" />
                Actif
              </div>
            {:else}
              <div class="badge badge-warning gap-1">
                <TriangleAlert class="w-3 h-3" />
                {currentProduct.status}
              </div>
            {/if}

            <div class="text-sm opacity-75">
              <span class="font-medium">Besoin:</span> {currentProduct.displayTotalNeeded}
            </div>
          </div>
        </div>
        <button
          class="btn btn-circle btn-ghost btn-sm"
          onclick={closeProductModal}
          aria-label="Fermer"
        >
          <X class="w-4 h-4" />
        </button>
      </div>

      <!-- Onglets -->
      <div class="tabs tabs-border flex-none" role="tablist">
        <button
          role= "tab" class="tab {currentTab === 'recettes' ? 'tab-active' : ''}"
          onclick={() => handleTabClick('recettes')}
        >
          <Package class="w-4 h-4 mr-1" />
          Recettes
          {#if recipes.length > 0}
            <span class="badge badge-sm badge-secondary ml-1">{recipes.length}</span>
          {/if}
        </button>

        <button
          role= "tab" class="tab {currentTab === 'achats' ? 'tab-active' : ''}"
          onclick={() => handleTabClick('achats')}
        >
          <ShoppingCart class="w-4 h-4 mr-1" />
          Achats
          {#if purchasesList.length > 0}
            <span class="badge badge-sm badge-secondary ml-1">{purchasesList.length}</span>
          {/if}
        </button>

        <button
          role= "tab" class="tab {currentTab === 'stock' ? 'tab-active' : ''}"
          onclick={() => handleTabClick('stock')}
        >
          <Archive class="w-4 h-4 mr-1" />
          Stock
          {#if stockEntries.length > 0}
            <span class="badge badge-sm badge-secondary ml-1">{stockEntries.length}</span>
          {/if}
        </button>

        <button
          role= "tab" class="tab {currentTab === 'volontaires' ? 'tab-active' : ''}"
          onclick={() => handleTabClick('volontaires')}
        >
          <Users class="w-4 h-4 mr-1" />
          Volontaires
          {#if currentProduct.who && currentProduct.who.length > 0}
            <span class="badge badge-sm badge-secondary ml-1">{currentProduct.who.length}</span>
          {/if}
        </button>

        <button
          role= "tab" class="tab {currentTab === 'magasins' ? 'tab-active' : ''}"
          onclick={() => handleTabClick('magasins')}
        >
          <Store class="w-4 h-4 mr-1" />
          Magasin
        </button>
      </div>

      <!-- Contenu -->
      <div class="flex-1 overflow-y-auto p-4 min-h-96">
        {#if error}
          <div class="alert alert-error mb-4">
            <X class="w-4 h-4" />
            <span>erreur : {error}</span>
          </div>
        {/if}

          <div class="">
            {#if currentTab === 'recettes'}
              <!-- Onglet Recettes -->
              <div class="space-y-4">
                <h3 class="text-lg font-semibold flex items-center gap-2">
                  <Package class="w-5 h-5" />
                  Recettes utilisant ce produit
                </h3>

                {#if recipes.length === 0}
                  <div class="text-center py-8 opacity-50">
                    <Package class="w-12 h-12 mx-auto mb-2" />
                    <p>Aucune recette trouvée pour ce produit</p>
                  </div>
                {:else}
                  <div class="overflow-x-auto">
                    <table class="table table-zebra table-sm">
                      <thead>
                        <tr>
                          <th>Recette</th>
                          <th>Quantité</th>
                          <th>Date service</th>
                          <th>Type plat</th>
                          <th>Assiettes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {#each recipes as recipe (recipe.recipeName + recipe.dateTimeService)}
                          <tr>
                            <td class="font-medium">{recipe.recipeName}</td>
                            <td>{recipe.quantity} {recipe.unit}</td>
                            <td>{formatDate(recipe.dateTimeService)}</td>
                            <td>{recipe.assiettes || '-'}</td>
                          </tr>
                        {/each}
                      </tbody>
                    </table>
                  </div>
                {/if}
              </div>
            {:else if currentTab === 'achats'}
              <PurchaseManager
                product={currentProduct}
              />
            {:else if currentTab === 'stock'}
              <StockManager
                product={currentProduct}
              />
            {:else if currentTab === 'volontaires'}
              <VolunteerManager
                product={currentProduct}
              />
            {:else if currentTab === 'magasins'}
              <StoreManager
                product={currentProduct}
              />
            {/if}
          </div>
      </div>

      <!-- Footer -->
      <div class="modal-action">
        <button class="btn btn-ghost" onclick={closeProductModal}>
          Fermer
        </button>
      </div>
    </div>
  </div>
{/if}

<style>

</style>
