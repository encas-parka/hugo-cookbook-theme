<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import {
    productsStore,
    type Products
  } from './lib/stores/ProductsStore.svelte';
  import { getMainIdFromUrl } from './lib/utils/url-utils';
  import ProductsTable from './lib/components/ProductsTable.svelte';
  import LoadingSpinner from './lib/components/LoadingSpinner.svelte';
  import ErrorAlert from './lib/components/ErrorAlert.svelte';

  let mainId: string;
  let initError: string | null = $state(null);

  onMount(async () => {
    mainId = getMainIdFromUrl();

    try {
      await productsStore.initialize(mainId);
    } catch (err) {
      initError = err instanceof Error ? err.message : 'Erreur lors de l\'initialisation';
      console.error('[App] Erreur initialisation:', err);
    }
  });

  onDestroy(() => {
    productsStore.destroy();
  });

  // Accès direct aux états du store
  const displayError = $derived(initError || productsStore.error);
  const isLoading = $derived(productsStore.loading && productsStore.products.length === 0);
</script>

<div class="min-h-screen bg-base-100">
  <!-- En-tête -->
  <header class="sticky top-0 z-10 bg-base-200 shadow-sm">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-2xl font-bold text-base-content">Produits</h1>
          <p class="text-sm text-base-content/70">Liste: {mainId}</p>
        </div>

        <!-- Statut de sync -->
        <div class="flex items-center gap-4 text-sm">
          {#if productsStore.realtimeConnected}
            <div class="flex items-center gap-2 text-success">
              <div class="badge badge-success badge-sm">Temps réel connecté</div>
            </div>
          {/if}

          {#if productsStore.syncing}
            <div class="flex items-center gap-2 text-info">
              <div class="loading loading-spinner loading-xs"></div>
              <span>Synchronisation...</span>
            </div>
          {/if}

          {#if productsStore.lastSync}
            <div class="text-base-content/60">
              Maj: {new Date(productsStore.lastSync).toLocaleTimeString()}
            </div>
          {/if}
        </div>
      </div>
    </div>
  </header>

  <!-- Contenu principal -->
  <main class="container mx-auto px-4 py-8">
    <!-- Erreur d'initialisation -->
    {#if displayError}
      <ErrorAlert message={displayError} />
    {/if}

    <!-- Chargement initial -->
    {#if isLoading}
      <LoadingSpinner />
    {/if}

    <!-- Liste des produits -->
    {#if productsStore.products.length > 0}
      <ProductsTable products={productsStore.products} />
    {:else if !productsStore.loading}
      <div class="alert alert-info">
        <div>
          <svg class="stroke-current shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>Aucun produit trouvé</span>
        </div>
      </div>
    {/if}
  </main>
</div>

<style>

</style>
