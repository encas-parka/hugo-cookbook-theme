<script lang="ts">
  import {
    X,
    CookingPot,
    ShoppingCart,
    Archive,
    Users,
    Store,
  } from "@lucide/svelte";

  // Stores and Global States
  import { createProductModalState } from "../stores/ProductModalState.svelte";

  // Components
  import PurchaseManager from "./PurchaseManager.svelte";
  import StockManager from "./StockManager.svelte";
  import VolunteerManager from "./VolunteerManager.svelte";
  import StoreManager from "./StoreManager.svelte";
  import RecipesManager from "./RecipesManager.svelte";
  import { productsStore } from "../stores/ProductsStore.svelte";
  import { onMount } from "svelte";

  let {
    productId,
    initialTab = "recettes",
    onClose,
  } = $props<{
    productId: string;
    initialTab?: string;
    onClose: () => void;
  }>();

  // 1. Déclarer l'état du modal. Il sera `null` au premier rendu.
  let modalState = $derived(createProductModalState(productId));

  let currentTab = $state(initialTab);

  function handleTabClick(tab: string) {
    currentTab = tab;
  }

  function saveAllAndClose() {
    modalState.saveAllChanges().then(() => {
      onClose();
    });
  }
</script>

<div class="modal modal-open">
  <div
    class="modal-box flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden"
  >
    <!-- Header -->
    <div class="flex items-center justify-between border-b p-4 pt-0">
      {#if modalState && modalState.product}
        <div class="text-xl font-bold">
          {modalState.product?.productName}
        </div>
        <div class="me-2 mt-2 flex items-center gap-3">
          <span class="badge badge-secondary"
            >{modalState.product?.productType}</span
          >

          <div class="text-sm opacity-75">
            <span class="font-medium">Besoin:</span>
            {modalState.product?.displayTotalNeeded}
          </div>
        </div>
      {:else}
        <div class="flex items-center gap-3">
          <div class="loading loading-spinner loading-sm"></div>
          <span class="text-sm opacity-50">Chargement du produit...</span>
        </div>
      {/if}
      <button
        class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2"
        onclick={onClose}
        aria-label="Fermer"
      >
        <X class="h-4 w-4" />
      </button>
    </div>

    <!-- Onglets -->
    {#if modalState}
      <div class="tabs tabs-border flex-none" role="tablist">
        <button
          role="tab"
          class="tab {currentTab === 'recettes' ? 'tab-active' : ''}"
          onclick={() => handleTabClick("recettes")}
        >
          <CookingPot class="mr-1 h-5 w-5" />
          Recettes
          {#if modalState.product?.nbRecipes && modalState.product?.nbRecipes > 0}
            <span class="badge badge-sm badge-secondary ml-1">
              {modalState.product?.nbRecipes}
            </span>
          {:else}
            <span class="badge badge-sm badge-ghost ml-1">0</span>
          {/if}
        </button>

        <button
          role="tab"
          class="tab {currentTab === 'magasins' ? 'tab-active' : ''}"
          onclick={() => handleTabClick("magasins")}
        >
          <Store class="mr-1 h-5 w-5" />
          Magasin
          {#if modalState.hasChanges?.store}
            <div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>
          {/if}
        </button>

        <button
          role="tab"
          class="tab {currentTab === 'volontaires' ? 'tab-active' : ''}"
          onclick={() => handleTabClick("volontaires")}
        >
          <Users class="mr-1 h-5 w-5" />
          Volontaires
          {#if modalState.hasChanges?.who}
            <div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>
          {:else if modalState.product?.who && modalState.product?.who.length > 0}
            <span class="badge badge-sm badge-secondary ml-1"
              >{modalState.product?.who.length}</span
            >
          {:else}
            <span class="badge badge-sm badge-ghost ml-1">0</span>
          {/if}
        </button>

        <button
          role="tab"
          class="tab {currentTab === 'stock' ? 'tab-active' : ''}"
          onclick={() => handleTabClick("stock")}
        >
          <Archive class="mr-1 h-5 w-5" />
          Stock
          {#if modalState.hasChanges?.stock}
            <div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>
          {:else if modalState.stockParsed}
            <span class="badge badge-sm badge-secondary ml-1">1</span>
          {:else}
            <span class="badge badge-sm badge-ghost ml-1">0</span>
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
          {:else}
            <span class="badge badge-sm badge-ghost ml-1">0</span>
          {/if}
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
          {#key currentTab}
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
          {/key}
        </div>
      </div>

      <!-- Footer -->
      <div class="modal-action">
        <button class="btn btn-ghost" onclick={onClose}>
          {modalState?.hasAnyChanges ? "Annuler" : "Fermer"}
        </button>
        <button
          class="btn btn-primary"
          onclick={saveAllAndClose}
          disabled={modalState.loading || !modalState.hasAnyChanges}
        >
          {#if modalState.loading}
            <span class="loading loading-spinner loading-sm"></span>
          {:else}
            Tout enregistrer
          {/if}
        </button>
      </div>
    {/if}
  </div>
</div>

<style>
</style>
