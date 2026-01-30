<script lang="ts">
  import { onMount, tick } from "svelte";
  import { productsStore } from "./lib/stores/ProductsStore.svelte";
  import { eventsStore } from "./lib/stores/EventsStore.svelte";
  import { nativeTeamsStore as teamsStore } from "./lib/stores/NativeTeamsStore.svelte";
  import { recipesStore } from "./lib/stores/RecipesStore.svelte";
  import { notificationStore } from "./lib/stores/NotificationStore.svelte";
  import { materielStore } from "./lib/stores/MaterielStore.svelte";
  import { realtimeManager } from "./lib/stores/RealtimeManager.svelte";
  import { teamdocsStore } from "./lib/stores/TeamdocsStore.svelte";
  import { onDestroy } from "svelte";
  import ErrorAlert from "./lib/components/ui/ErrorAlert.svelte";
  import HeaderNav from "./lib/components/HeaderNav.svelte";
  import Toast from "./lib/components/ui/Toast.svelte";
  import ScrollToTopButton from "./lib/components/ui/ScrollToTopButton.svelte";
  import OverrideConflictModal from "./lib/components/OverrideConflictModal.svelte";
  import AuthModal from "./lib/components/AuthModal.svelte";
  import { globalState } from "./lib/stores/GlobalState.svelte";
  import { toastService } from "./lib/services/toast.service.svelte";

  // ✅ sv-router - Routeur moderne pour Svelte 5
  // Documentation: https://sv-router.vercel.app
  import { Router, preload } from "$lib/router";

  // ❌ PLUS BESOIN de router, navigate, preloadRoute du simple-router
  // Ces fonctions sont maintenant disponibles depuis $lib/router

  type AppState =
    | "BOOTING"
    | "LOADING_PRIVATE_CACHE"
    | "LOADING_PUBLIC_CACHE"
    | "READY_WITH_CACHE"
    | "READY_FULLY_SYNCED"
    | "READY"
    | "ERROR";
  let appState = $state<AppState>("BOOTING");
  let initError: string | null = $state(null);

  // ❌ PLUS BESOIN des guards requireAuth et requireLocalEvent
  // Ils sont maintenant définis dans $lib/router/guards.ts
  // et utilisés directement dans la configuration des routes

  async function initializeApp() {
    try {
      appState = "BOOTING";

      await globalState.initializeAuth();

      if (globalState.isAuthenticated) {
        appState = "LOADING_PRIVATE_CACHE";
        const syncToastId = toastService.loading("Chargement des données...");

        await Promise.all([
          eventsStore.loadCache(),
          recipesStore.loadCache(),
          materielStore.loadCache(),
          teamdocsStore.loadCache(),
        ]);

        appState = "READY_WITH_CACHE";

        toastService.update(syncToastId, {
          state: "loading",
          message: "Mise à jour des données en cours...",
        });

        Promise.all([
          eventsStore.syncFromRemote(),
          recipesStore.syncFromRemote(),
          materielStore.syncFromRemote(),
          teamsStore.syncFromRemote(),
          teamdocsStore.syncFromRemote(),
        ])
          .then(async () => {
            await Promise.all([
              eventsStore.setupRealtime(),
              recipesStore.setupRealtime(),
              materielStore.setupRealtime(),
              teamsStore.setupRealtime(),
              notificationStore.initialize(),
              teamdocsStore.setupRealtime(),
            ]);
            await realtimeManager.initialize();
            appState = "READY_FULLY_SYNCED";
            toastService.dismiss(syncToastId);

            // ✅ Précharger les routes probables en arrière-plan avec sv-router
            setTimeout(() => {
              preload("/dashboard");
              preload("/recipe");
            }, 3000);
          })
          .catch((err) => {
            console.error("[App] Erreur synchro distante:", err);
            toastService.update(syncToastId, {
              state: "warning",
              message: "Mode hors ligne : données mises en cache",
              autoCloseDelay: 5000,
            });
            realtimeManager.initialize().catch(console.error);
          });
      } else {
        appState = "LOADING_PUBLIC_CACHE";

        await recipesStore.loadCache();
        appState = "READY_WITH_CACHE";

        Promise.all([
          recipesStore.syncFromRemotePublicOnly(),
          realtimeManager.initialize(),
        ])
          .then(() => {
            appState = "READY_FULLY_SYNCED";

            // ✅ Précharger les routes publiques probables avec sv-router
            setTimeout(() => {
              preload("/recipe");
            }, 2000);
          })
          .catch((err) => {
            console.error("[App] Erreur synchro recettes:", err);
          });
      }
    } catch (err: any) {
      console.error("[App] Erreur fatale d'initialisation:", err);
      initError = err.message || "Erreur critique de chargement";
      appState = "ERROR";
    }
  }

  // ❌ PLUS BESOIN de gérer le scroll manuellement
  // sv-router le gère automatiquement avec scrollToTop par défaut
  // https://sv-router.vercel.app/guide/code-based/scroll-behavior

  let wasAuthenticated = $state(false);
  let isInitializing = $state(false);
  $effect(() => {
    const isAuth = globalState.isAuthenticated;

    if (isInitializing) {
      return;
    }

    if (
      appState !== "BOOTING" &&
      appState !== "LOADING_PRIVATE_CACHE" &&
      appState !== "LOADING_PUBLIC_CACHE" &&
      isAuth !== wasAuthenticated
    ) {
      wasAuthenticated = isAuth;
      console.log("[App] Changement d'état Auth détecté -> Rechargement");
      isInitializing = true;
      initializeApp().finally(() => {
        isInitializing = false;
      });
    }
  });

  onMount(() => {
    initializeApp();

    // ✅ Révéler l'application une fois que Svelte a monté le composant
    // Cela évite le flash de contenu non stylisé (FOUC)
    const appElement = document.getElementById("app");
    if (appElement) {
      appElement.classList.add("svelte-ready");
    }
  });

  onDestroy(() => {
    console.log("[App] Destruction de l'application - Nettoyage des stores...");
    notificationStore.destroy();
    teamsStore.destroy();
    eventsStore.destroy();
    recipesStore.destroy();
    materielStore.destroy();
    teamdocsStore.destroy();
    realtimeManager.destroy();
  });

  let displayError = $derived(initError || productsStore.error);

  async function handleLoginSuccess() {
    globalState.authModal.isOpen = false;
    // Réinitialiser l'authentification et déclencher le rechargement du dashboard
    await globalState.refreshAuthAfterLogin();
  }
</script>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&family=Fredoka:wght@300..700&display=swap&family=Sora:wght@100..800&display=swap"
  rel="stylesheet"
/>

<HeaderNav />

<div class="bg-base-200 min-h-screen">
  {#if appState === "ERROR"}
    <div class="flex h-[50vh] items-center justify-center">
      <ErrorAlert message={displayError || "Erreur inconnue"} />
    </div>
  {:else if appState === "BOOTING" || appState === "LOADING_PRIVATE_CACHE" || appState === "LOADING_PUBLIC_CACHE"}
    <div class="flex h-[80vh] flex-col items-center justify-center gap-4">
      <div class="loading loading-spinner loading-lg text-primary"></div>
      <p class="text-base-content/70 animate-pulse font-medium">
        {#if appState === "BOOTING"}
          Démarrage...
        {:else if appState === "LOADING_PRIVATE_CACHE"}
          Chargement des données en cache...
        {:else if appState === "LOADING_PUBLIC_CACHE"}
          Préparation de la cuisine...
        {/if}
      </p>
    </div>
  {:else}
    <!-- ✅ sv-router - Router avec mode hash -->
    <!-- base="#" active le mode hash pour compatibilité avec Hugo -->
    <!-- Les routes sont rendues ici automatiquement -->
    <Router base="#">
      <!-- Les composants de route sont rendus ici par sv-router -->
      <!-- Ils accèdent aux params via route.params et route.search -->
    </Router>
  {/if}
</div>

<Toast />
<ScrollToTopButton />

{#if globalState.isAuthenticated && appState === "READY"}
  {#if displayError}
    <ErrorAlert message={displayError} />
  {/if}
  <OverrideConflictModal />
{/if}

<AuthModal
  bind:isOpen={globalState.authModal.isOpen}
  showLogin={globalState.authModal.showLogin}
  onAuth_success={handleLoginSuccess}
/>

<style>
</style>
