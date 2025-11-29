<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { productsStore } from "./lib/stores/ProductsStore.svelte";
  import { eventsStore } from "./lib/stores/EventsStore.svelte";
  import { teamsStore } from "./lib/stores/TeamsStore.svelte";
  import { recipesStore } from "./lib/stores/RecipesStore.svelte";
  import {
    getMainIdFromUrl,
    transformListIdToMainId,
  } from "./lib/utils/url-utils";
  import ProductsPage from "./lib/components/ProductsPage.svelte";
  import DashboardPage from "./lib/components/DashboardPage.svelte";
  import EventCreationPage from "./lib/components/EventCreationPage.svelte";
  import LoadingSpinner from "./lib/components/ui/LoadingSpinner.svelte";
  import ErrorAlert from "./lib/components/ui/ErrorAlert.svelte";
  import AuthModal from "./lib/components/AuthModal.svelte";
  import HeaderNav from "./lib/components/HeaderNav.svelte";
  import { LogInIcon, RefreshCwIcon } from "@lucide/svelte";
  import Toast from "./lib/components/ui/Toast.svelte";
  import ThemeSwitcher from "./lib/components/ThemeSwitcher.svelte";
  import OverrideConflictModal from "./lib/components/OverrideConflictModal.svelte";
  import { globalState } from "./lib/stores/GlobalState.svelte";

  // Mode de montage : 'header-only' ou 'dashboard'
  let mountMode = $state<"header-only" | "dashboard">("header-only");

  let mainId: string | null = $state(null);
  let initError: string | null = $state(null);
  let isCheckingAuth = $state(true);
  let isReloading = $state(false);

  // État de la vue (pour le mode dashboard)
  let currentView = $state<string>("loading");

  async function initializeAuth() {
    try {
      // Initialiser l'authentification
      await globalState.initializeAuth();
      isCheckingAuth = false;
    } catch (err: any) {
      console.error("Erreur d'initialisation auth:", err);
      isCheckingAuth = false;
    }
  }

  async function initializeDashboard() {
    try {
      // Initialiser les stores globaux
      await Promise.all([
        teamsStore.initialize(),
        recipesStore.initialize(),
        eventsStore.initialize(),
      ]);

      // Vérifier si on a un listId dans l'URL (Mode Legacy/Direct)
      const urlParams = new URLSearchParams(window.location.search);
      const listId = urlParams.get("listId");

      if (listId) {
        console.log(`[App] Mode Direct détecté pour listId: ${listId}`);
        mainId = transformListIdToMainId(listId);
        await productsStore.initialize(mainId, listId);
        currentView = "products";
      } else {
        console.log("[App] Aucun listId, passage en mode Dashboard");
        currentView = "dashboard";
      }
    } catch (err: any) {
      console.error("Erreur d'initialisation dashboard:", err);
      initError = err.message || "Erreur inconnue lors de l'initialisation";
    }
  }

  onMount(async () => {
    // Déterminer le mode de montage
    const isDashboardPage = window.location.pathname.startsWith("/dashboard");
    mountMode = isDashboardPage ? "dashboard" : "header-only";

    console.log(`[App] Mode de montage: ${mountMode}`);

    // Toujours initialiser l'auth (nécessaire pour le header)
    await initializeAuth();

    // Si mode dashboard, initialiser l'app complète
    if (mountMode === "dashboard") {
      await initializeDashboard();
    }
  });

  async function handleLogout() {
    try {
      await globalState.logout();
      window.location.reload();
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
    }
  }

  async function forceReload() {
    if (!mainId) return;
    isReloading = true;
    try {
      await productsStore.forceReloadFromHugo();
      window.location.reload();
    } catch (err: any) {
      console.error("Erreur rechargement forcé:", err);
      alert("Erreur lors du rechargement: " + err.message);
    } finally {
      isReloading = false;
    }
  }

  // Navigation (mode dashboard uniquement)
  function navigateToCreateEvent() {
    currentView = "create-event";
  }

  function navigateToDashboard() {
    currentView = "dashboard";
    const url = new URL(window.location.href);
    if (url.searchParams.has("listId")) {
      url.searchParams.delete("listId");
      window.history.pushState({}, "", url);
    }
  }

  async function handleSelectEvent(eventId: string) {
    console.log("Sélection événement:", eventId);
    alert(
      "L'ouverture d'événements 100% Appwrite est en cours de développement.",
    );
  }

  let displayError = $derived(initError || productsStore.error);
</script>

{#if mountMode === "header-only"}
  <!-- Mode Header seulement (pages Hugo) -->
  <HeaderNav />

  <Toast />
{:else if mountMode === "dashboard"}
  <HeaderNav />
  <!-- Mode Dashboard complet -->
  <div class="bg-base-100 text-base-content min-h-screen">
    <!-- Contenu principal -->
    <main class="container mx-auto px-4 py-8">
      {#if displayError}
        <ErrorAlert message={displayError} />
      {/if}

      {#if currentView === "loading" || isCheckingAuth}
        <div class="flex h-[50vh] items-center justify-center">
          <LoadingSpinner />
        </div>
      {:else if currentView === "dashboard"}
        <DashboardPage
          onCreateEvent={navigateToCreateEvent}
          onSelectEvent={handleSelectEvent}
        />
      {:else if currentView === "create-event"}
        <EventCreationPage onBack={navigateToDashboard} />
      {:else if currentView === "products"}
        {#if productsStore.enrichedProducts.length > 0}
          <ProductsPage />
        {:else if !productsStore.loading && !displayError}
          <div class="alert alert-info">
            <span>Aucun produit trouvé pour cet événement.</span>
          </div>
        {/if}
      {/if}
    </main>
  </div>

  <!-- Modales Globales -->

  <Toast />
  <OverrideConflictModal
    isOpen={globalState.isConflictModalOpen}
    conflictData={globalState.conflictData}
  />
{/if}

<style>
</style>
