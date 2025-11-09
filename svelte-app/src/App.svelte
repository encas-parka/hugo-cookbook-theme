<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { productsStore } from "./lib/stores/ProductsStore.svelte";
  import { getMainIdFromUrl } from "./lib/utils/url-utils";
  import ProductsPage from "./lib/components/ProductsPage.svelte";
  import LoadingSpinner from "./lib/components/ui/LoadingSpinner.svelte";
  import ErrorAlert from "./lib/components/ui/ErrorAlert.svelte";
  import AuthErrorAlert from "./lib/components/ui/AuthErrorAlert.svelte";
  import { LogInIcon, RefreshCwIcon } from "@lucide/svelte";

  let mainId: string;
  let initError: string | null = $state(null);
  let isCheckingAuth = $state(true);
  let isReloading = $state(false);

  onMount(async () => {
    mainId = getMainIdFromUrl();

    try {
      // 1️⃣ Vérifier l'authentification AVANT d'initialiser le store
      if (!window.AppwriteClient) {
        throw new Error("AppwriteClient non disponible");
      }

      const isConnected = await window.AppwriteClient.isConnectedAppwrite();
      if (!isConnected) {
        throw new Error(
          "Veuillez vous connecter pour accéder à la liste des produits.",
        );
      }

      console.log("[App] Utilisateur connecté, initialisation du store...");

      // 2️⃣ Initialiser le store seulement si l'utilisateur est connecté
      await productsStore.initialize(mainId);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erreur lors de l'initialisation";
      initError = errorMessage;
      console.error("[App] Erreur initialisation:", err);
    } finally {
      isCheckingAuth = false;
    }
  });

  onDestroy(() => {
    productsStore.destroy();
  });

  // Fonction pour recharger forcé les données
  async function handleForceReload() {
    if (!mainId || isReloading) return;

    isReloading = true;
    try {
      await productsStore.forceReload(mainId);
    } catch (error) {
      console.error("[App] Erreur lors du rechargement forcé:", error);
    } finally {
      isReloading = false;
    }
  }

  // Accès direct aux états du store
  const displayError = $derived(initError || productsStore.error);
  const isLoading = $derived(isCheckingAuth || productsStore.loading);

  const loginUrl = `/login/?redirect=${encodeURIComponent(window.location.pathname + window.location.search)}`;
</script>

<div class="bg-base-200 min-h-screen">
  <!-- En-tête -->
  <header class="bg-base-300 top-0 z-10 shadow-sm">
    <div class="container mx-auto px-4 py-2">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-1xl text-base-content font-bold">Liste de courses</h1>
        </div>

        <!-- Statut de sync -->
        <div class="flex items-center gap-4 text-sm">
          {#if productsStore.realtimeConnected}
            <div class="text-success flex items-center gap-2">
              <div class="badge badge-success badge-sm">
                Temps réel connecté
              </div>
            </div>
          {/if}

          {#if productsStore.syncing}
            <div class="text-info flex items-center gap-2">
              <div class="loading loading-spinner loading-xs"></div>
              <span>Synchronisation...</span>
            </div>
          {/if}

          {#if productsStore.lastSync}
            <div class="text-base-content/60">
              Maj: {new Date(productsStore.lastSync).toLocaleTimeString()}
            </div>
          {/if}

          <!-- Bouton de rechargement forcé -->
          {#if !initError}
            <button
              class="btn btn-outline btn-sm"
              class:loading={isReloading || productsStore.loading}
              onclick={handleForceReload}
              disabled={isReloading || productsStore.loading}
              title="Forcer le rechargement depuis Appwrite"
            >
              <RefreshCwIcon class="h-4 w-4" />
            </button>
          {/if}

          {#if initError}
            <div class="">
              <a href={loginUrl} class="btn btn-primary btn-sm">
                <LogInIcon class="mr-2 h-4 w-4" />
                Se connecter
              </a>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </header>

  <!-- Contenu principal -->
  <main class="container mx-auto px-4 py-8">
    <!-- Erreur d'authentification -->
    {#if initError}
      <AuthErrorAlert message={displayError} />
      <!-- Erreur d'initialisation (non-auth) -->
    {:else if displayError}
      <ErrorAlert message={displayError} />
    {/if}

    <!-- Chargement initial -->
    {#if isLoading}
      <LoadingSpinner />
    {/if}

    <!-- Liste des produits -->
    {#if productsStore.enrichedProducts.length > 0}
      <ProductsPage />
    {:else if !productsStore.loading && !initError}
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
          <span>Aucun produit trouvé</span>
        </div>
      </div>
    {/if}
  </main>
</div>

<style>
</style>
