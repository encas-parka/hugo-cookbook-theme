<script lang="ts">
  import {
    X,
    CookingPot,
    ShoppingCart,
    Archive,
    Users,
    Store,
    History,
  } from "@lucide/svelte";

  // Stores and Global States
  import { ProductModalState } from "$lib/stores/ProductModalState.svelte";

  // Components
  import PurchaseManager from "./PurchaseManager.svelte";
  import StockManager from "./StockManager.svelte";
  import VolunteerManager from "./VolunteerManager.svelte";
  import StoreManager from "./StoreManager.svelte";
  import RecipesManager from "./RecipesManager.svelte";
  import { productsStore } from "$lib/stores/ProductsStore.svelte";

  let {
    productId,
    initialTab = "recettes",
    onClose,
  } = $props<{
    productId: string;
    initialTab?: string;
    onClose: () => void;
  }>();

  // 1. Déclarer l'état du modal.
  // Utilisation d'un état local qui sera recréé quand l'ID change
  let modalState = $state<ProductModalState | null>(null);

  $effect(() => {
    // Créer une nouvelle instance d'état quand le productId change
    // Cela nettoie implicitement les effets de l'instance précédente car
    // l'effet parent (celui-ci) est ré-exécuté.
    modalState = new ProductModalState(productId, initialTab);
  });

  // Mode archive si l'événement est passé
  let isArchiveMode = $derived(productsStore.isEventPassed);

  function handleTabClick(tab: string) {
    modalState?.setCurrentTab(tab);
  }

  function saveAllAndClose() {
    modalState?.saveAllChanges().then(() => {
      modalState?.resetForms();
      onClose();
    });
  }

  function handleModalClose() {
    modalState?.resetForms();
    onClose();
  }
</script>

<div id="product_modal" class="modal {productId && 'modal-open'}">
  <div
    class="modal-box fixed top-0 flex h-lvh w-lvw flex-col overflow-auto md:top-10 md:h-full md:max-h-11/12 md:w-full md:max-w-6xl"
  >
    <!-- Header -->
    <div class="flex items-center justify-between border-b p-4 pt-0">
      {#if modalState && modalState.product}
        <div class="text-xl font-bold">
          {modalState.product?.productName}
        </div>

        <!-- Header avec indicateur d'archive -->
        {#if modalState && isArchiveMode}
          <div class="alert alert-warning py-0.5">
            <History class="h-4 w-4" />
            <span class="font-medium">Mode consultation</span>
            <span class="">Événement terminé</span>
          </div>
        {/if}
        <div class="me-2 mt-2 flex items-center gap-3">
          <span class="badge badge-secondary"
            >{modalState.product?.productType}</span
          >

          <div class="text-sm opacity-75">
            <span class="font-medium">Besoin:</span>
            {#if modalState.productModel}
              {modalState.productModel.stats.formattedQuantities ||
                "Aucun besoin"}
            {:else}
              {modalState.product?.displayTotalNeeded || "?"}
            {/if}
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
        onclick={handleModalClose}
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
          class="tab {modalState.currentTab === 'recettes' ? 'tab-active' : ''}"
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
          class="tab {modalState.currentTab === 'magasins' ? 'tab-active' : ''}"
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
          class="tab {modalState.currentTab === 'volontaires'
            ? 'tab-active'
            : ''}"
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
          class="tab {modalState.currentTab === 'stock' ? 'tab-active' : ''}"
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
          class="tab {modalState.currentTab === 'achats' ? 'tab-active' : ''}"
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
      <div class="flex-1 overflow-y-auto p-4">
        {#if modalState.error}
          <div class="alert alert-error mb-4">
            <X class="h-4 w-4" />
            <span>erreur : {modalState.error}</span>
          </div>
        {/if}

        <div class="">
          {#key modalState.currentTab}
            {#if modalState.currentTab === "recettes"}
              <RecipesManager {modalState} {isArchiveMode} />
            {:else if modalState.currentTab === "achats"}
              <PurchaseManager {modalState} {isArchiveMode} />
            {:else if modalState.currentTab === "stock"}
              <StockManager {modalState} {isArchiveMode} />
            {:else if modalState.currentTab === "volontaires"}
              <VolunteerManager {modalState} {isArchiveMode} />
            {:else if modalState.currentTab === "magasins"}
              <StoreManager {modalState} {isArchiveMode} />
            {/if}
          {/key}
        </div>
      </div>

      <!-- Footer -->
      <div class="modal-action">
        <button class="btn btn-ghost" onclick={handleModalClose}>
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
