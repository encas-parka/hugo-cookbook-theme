<script lang="ts">
  import {
    X,
    CookingPot,
    ShoppingCart,
    Archive,
    Users,
    Store,
    CircleCheck,
    TriangleAlert,
  } from "@lucide/svelte";

  // Stores and Global States
  import { productsStore } from "../stores/ProductsStore.svelte";
  import { modal, closeProductModal } from "../stores/GlobalState.svelte";
  import { createProductModalState } from "../stores/ProductModalState.svelte";

  // Components
  import PurchaseManager from "./PurchaseManager.svelte";
  import StockManager from "./StockManager.svelte";
  import VolunteerManager from "./VolunteerManager.svelte";
  import StoreManager from "./StoreManager.svelte";
  import RecipesManager from "./RecipesManager.svelte";

  import type { ProductModalStateType } from "../types/store.types.js";

  let currentTab = $derived(modal.product.tab);
  let productId = $derived(modal.product.id);
  let isOpen = $derived(modal.product.isOpen);

  // Instance de ProductModalState (store centralisé)
  let modalState = $derived.by(() => {
    return productId ? createProductModalState(productId) : null;
  }) as ProductModalStateType | null;

  let currentProduct = $derived(modalState?.product);

  function handleTabClick(tab: string) {
    // --- FIXIT ? : Utilisation de ProductModalState // implémentation non terminée... Preserver ?---
    // if (modalState) {
    //   modalState.setCurrentTab(tab);
    // }

    // --- CODE LEGACY → globalState ---
    modal.product.tab = tab;
  }
</script>

{#if isOpen && currentProduct && modalState}
  <div class="modal modal-open">
    <div
      class="modal-box flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden"
    >
      <!-- Header -->
      <div class="flex items-center justify-between border-b p-4 pt-0">
        <div class="text-xl font-bold">{currentProduct.productName}</div>
        <div class="me-2 mt-2 flex items-center gap-3">
          <span class="badge badge-secondary">{currentProduct.productType}</span
          >

          {#if currentProduct.status === "active"}
            <div class="badge badge-success gap-1">
              <CircleCheck class="h-3 w-3" />
              Actif
            </div>
          {:else}
            <div class="badge badge-warning gap-1">
              <TriangleAlert class="h-3 w-3" />
              {currentProduct.status}
            </div>
          {/if}

          <div class="text-sm opacity-75">
            <span class="font-medium">Besoin:</span>
            {currentProduct.displayTotalNeeded}
          </div>

          <!-- Stock : temporairement masqué pendant la migration -->
          <!-- <div class="text-sm opacity-75">
            <span class="font-medium">Stock:</span>
            {currentProduct.displayTotalStock}
          </div> -->
        </div>
        <button
          class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2"
          onclick={closeProductModal}
          aria-label="Fermer"
        >
          <X class="h-4 w-4" />
        </button>
      </div>

      <!-- Onglets -->
      <div class="tabs tabs-border flex-none" role="tablist">
        <button
          role="tab"
          class="tab {currentTab === 'recettes' ? 'tab-active' : ''}"
          onclick={() => handleTabClick("recettes")}
        >
          <CookingPot class="mr-1 h-5 w-5" />
          Recettes
          {#if modalState.recipes.length > 0}
            <span class="badge badge-sm badge-secondary ml-1"
              >{modalState.recipes.length}</span
            >
          {/if}
        </button>

        <button
          role="tab"
          class="tab {currentTab === 'achats' ? 'tab-active' : ''}"
          onclick={() => handleTabClick("achats")}
        >
          <ShoppingCart class="mr-1 h-5 w-5" />
          Achats
          {#if modalState.purchasesList.length > 0}
            <span class="badge badge-sm badge-secondary ml-1"
              >{modalState.purchasesList.length}</span
            >
          {/if}
        </button>

        <button
          role="tab"
          class="tab {currentTab === 'stock' ? 'tab-active' : ''}"
          onclick={() => handleTabClick("stock")}
        >
          <Archive class="mr-1 h-5 w-5" />
          Stock
          {#if modalState.stockEntries.length > 0}
            <span class="badge badge-sm badge-secondary ml-1"
              >{modalState.stockEntries.length}</span
            >
          {/if}
        </button>

        <button
          role="tab"
          class="tab {currentTab === 'volontaires' ? 'tab-active' : ''}"
          onclick={() => handleTabClick("volontaires")}
        >
          <Users class="mr-1 h-5 w-5" />
          Volontaires
          {#if currentProduct.who && currentProduct.who.length > 0}
            <span class="badge badge-sm badge-secondary ml-1"
              >{currentProduct.who.length}</span
            >
          {/if}
        </button>

        <button
          role="tab"
          class="tab {currentTab === 'magasins' ? 'tab-active' : ''}"
          onclick={() => handleTabClick("magasins")}
        >
          <Store class="mr-1 h-5 w-5" />
          Magasin
        </button>
      </div>

      <!-- Contenu -->
      <div class="min-h-96 flex-1 overflow-y-auto p-4">
        {#if modalState.error}
          <div class="alert alert-error mb-4">
            <X class="h-4 w-4" />
            <span>erreur : {modalState.error}</span>
          </div>
        {/if}

        <div class="">
          {#if currentTab === "recettes"}
            <RecipesManager {modalState} />
          {:else if currentTab === "achats"}
            <PurchaseManager {modalState} />
          {:else if currentTab === "stock"}
            <StockManager {modalState} />
          {:else if currentTab === "volontaires"}
            <VolunteerManager {modalState} />
          {:else if currentTab === "magasins"}
            <StoreManager {modalState} />
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
