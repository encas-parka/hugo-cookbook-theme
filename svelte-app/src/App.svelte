<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import {
    initializeProducts,
    destroyProducts,
    getProducts,
    getLoading,
    getError,
    getSyncing,
    getRealtimeConnected,
    getLastSync
  } from './lib/stores/ProductsStore.svelte';
  import { getMainIdFromUrl } from './lib/utils/url-utils';
  import ProductList from './lib/components/ProductList.svelte';
  import LoadingSpinner from './lib/components/LoadingSpinner.svelte';
  import ErrorAlert from './lib/components/ErrorAlert.svelte';

  let mainId: string = $state('');
  let error: string | null = $state(null);

  onMount(async () => {
    mainId = getMainIdFromUrl();

    try {
      await initializeProducts(mainId);
    } catch (err) {
      error = err instanceof Error ? err.message : 'Erreur lors de l\'initialisation';
      console.error('[App] Erreur initialisation:', err);
    }
  });

  onDestroy(() => {
    destroyProducts();
  });

  // États réactifs du store
  $effect(() => {
    error = getError();
  });

  const products = $derived(getProducts());
  const loading = $derived(getLoading());
  const syncing = $derived(getSyncing());
  const realtimeConnected = $derived(getRealtimeConnected());
  const lastSync = $derived(getLastSync());
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
          {#if realtimeConnected}
            <div class="flex items-center gap-2 text-success">
              <div class="badge badge-success badge-sm">Temps réel connecté</div>
            </div>
          {/if}

          {#if syncing}
            <div class="flex items-center gap-2 text-info">
              <div class="loading loading-spinner loading-xs"></div>
              <span>Synchronisation...</span>
            </div>
          {/if}

          {#if lastSync}
            <div class="text-base-content/60">
              Maj: {new Date(lastSync).toLocaleTimeString()}
            </div>
          {/if}
        </div>
      </div>
    </div>
  </header>

  <!-- Contenu principal -->
  <main class="container mx-auto px-4 py-8">
    <!-- Erreur d'initialisation -->
    {#if error}
      <ErrorAlert message={error} />
    {/if}

    <!-- Chargement initial -->
    {#if loading && products.length === 0}
      <LoadingSpinner />
    {/if}

    <!-- Liste des produits -->
    {#if products.length > 0}
      <ProductList {products} />
    {:else if !loading}
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
  :global(body) {
    @apply bg-base-100;
  }
</style>
