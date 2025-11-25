<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { productsStore } from "./lib/stores/ProductsStore.svelte";
  import {
    getMainIdFromUrl,
    transformListIdToMainId,
  } from "./lib/utils/url-utils";
  import ProductsPage from "./lib/components/ProductsPage.svelte";
  import LoadingSpinner from "./lib/components/ui/LoadingSpinner.svelte";
  import ErrorAlert from "./lib/components/ui/ErrorAlert.svelte";
  import AuthErrorAlert from "./lib/components/ui/AuthErrorAlert.svelte";
  import AuthModal from "./lib/components/AuthModal.svelte";
  import { LogInIcon, RefreshCwIcon } from "@lucide/svelte";
  import Toast from "./lib/components/ui/Toast.svelte";
  import ThemeSwitcher from "./lib/components/ThemeSwitcher.svelte";
  import OverrideConflictModal from "./lib/components/OverrideConflictModal.svelte";
  import { globalState } from "./lib/stores/GlobalState.svelte";
  import IngredientsTest from "./lib/components/IngredientsTest.svelte";

  let mainId: string;
  let initError: string | null = $state(null);
  let isCheckingAuth = $state(true);
  let isReloading = $state(false);
  let showAuthModal = $state(false);

  // Fonction pour gérer les données utilisateur (équivalent de setAuthData)
  function setAuthData(email: string, name: string, cmsAuth?: any) {
    localStorage.setItem("appwrite-user-email", email);
    localStorage.setItem("appwrite-user-name", name);
    if (cmsAuth) {
      localStorage.setItem("sveltia-cms.user", JSON.stringify(cmsAuth));
    }
  }

  // Fonction d'initialisation de l'application
  async function initializeApp() {
    const listId = getMainIdFromUrl();
    mainId = transformListIdToMainId(listId);

    try {
      // 1️⃣ En développement, charger Appwrite si nécessaire
      if (import.meta.env.DEV && !window.AppwriteClient) {
        console.log(
          "[App] Chargement du module Appwrite pour le développement...",
        );
        await import("./lib/appwrite-dev");
        // Attendre un cycle que le global soit défini
        await new Promise((resolve) => setTimeout(resolve, 50));
      }

      // 2️⃣ Vérifier l'authentification AVANT d'initialiser le store
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

      // 2️⃣ Récupérer et stocker les données utilisateur
      const account = await window.AppwriteClient.getAccount();
      const user = await account.get();

      setAuthData(user.email, user.name);

      // 3️⃣ Initialiser le store seulement si l'utilisateur est connecté
      await productsStore.initialize(mainId, listId);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erreur lors de l'initialisation";
      initError = errorMessage;
      console.error("[App] Erreur initialisation:", err);
    } finally {
      isCheckingAuth = false;
    }
  }

  onMount(async () => {
    await initializeApp();
  });

  // Gestion du succès de l'authentification
  async function handleAuthSuccess() {
    showAuthModal = false;
    isCheckingAuth = true;
    initError = null;
    await initializeApp();
  }

  // Gestion de l'ouverture de la modal
  function openAuthModal() {
    showAuthModal = true;
  }

  onDestroy(() => {
    productsStore.destroy();
  });

  // Fonction pour recharger forcé les données
  async function handleForceReload() {
    if (!mainId || isReloading) return;

    isReloading = true;
    try {
      const listId = getMainIdFromUrl();
      await productsStore.forceReload(mainId, listId);
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
  <Toast />

  <!-- {#if globalState.modalOverride.isOpen}
    <OverrideConflictModal />
  {/if} -->

  <!-- Chargement initial -->
  {#if isLoading}
    <LoadingSpinner />
  {:else}
    <!-- En-tête -->
    <header class="bg-base-300 top-10 z-10 shadow-sm">
      <div class="container mx-auto px-4 py-2">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-1xl text-base-content font-bold">
              Liste de courses
            </h1>
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

            <ThemeSwitcher />

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
                <button class="btn btn-primary btn-sm" onclick={openAuthModal}>
                  <LogInIcon class="mr-2 h-4 w-4" />
                  Se connecter
                </button>
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
      <IngredientsTest />

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
  {/if}
</div>

<!-- Modal d'authentification -->
{#if showAuthModal}
  <AuthModal
    onClose={() => (showAuthModal = false)}
    onAuthSuccess={handleAuthSuccess}
  />
{/if}

<style>
</style>
