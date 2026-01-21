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

  import {
    router,
    navigate,
    preloadRoute,
    type RouteGuards,
  } from "./lib/services/simple-router.svelte";

  // ✅ SEULEMENT HomePage en import statique (page critique)
  import HomePage from "./lib/routes/HomePage.svelte";

  // ❌ SUPPRIMER tous les autres imports de pages !
  // Ils seront chargés à la demande via lazy loading

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

  const requireAuth: RouteGuards = {
    beforeEnter: async () => {
      if (!globalState.isAuthenticated) {
        console.log("[Router] Accès refusé > Redirection /");
        navigate("/");
        return false;
      }
      return true;
    },
  };

  // ✅ Guard pour mode local (AVEC auto-initialisation)
  const requireLocalEvent: RouteGuards = {
    beforeEnter: async (to) => {
      const eventId = to.params.id;

      if (!eventId) {
        console.log("[Router] EventId manquant > Redirection /");
        navigate("/");
        return false;
      }

      // ✅ AUTO-INITIALISATION si le store n'est pas prêt
      if (!eventsStore.isInitialized) {
        console.log(
          "[Router] EventsStore non initialisé > Auto-init mode public",
        );
        try {
          await eventsStore.initializeForPublic();
        } catch (error) {
          console.error("[Router] Erreur initialisation:", error);
          navigate("/");
          return false;
        }
      }

      // Vérifier que l'event existe ET est en mode local
      const event = eventsStore.getEventById(eventId);

      if (!event) {
        console.log("[Router] Event introuvable > Redirection /");
        navigate("/");
        return false;
      }

      if ((event.status as string) !== "local") {
        console.log("[Router] Event non local > Auth requise");
        navigate("/");
        return false;
      }

      return true;
    },
  };

  // ✅ Routes avec lazy loading (sauf HomePage)
  // Publiques
  router.addRoute("/", HomePage);
  router.addRoute(
    "/recipe",
    () => import("./lib/routes/RecipesListPage.svelte"),
  );
  router.addRoute(
    "/recipe/my",
    () => import("./lib/routes/RecipesListPage.svelte"),
    requireAuth,
  );
  router.addRoute(
    "/recipe/my/draft",
    () => import("./lib/routes/RecipesListPage.svelte"),
    requireAuth,
  );
  router.addRoute(
    "/recipe/new",
    () => import("./lib/routes/RecipeCreatePage.svelte"),
    requireAuth,
  );
  router.addRoute(
    "/recipe/:uuid/edit",
    () => import("./lib/routes/RecipeEditPage.svelte"),
    requireAuth,
  );
  router.addRoute(
    "/recipe/:uuid/duplicate",
    () => import("./lib/routes/RecipeCreatePage.svelte"),
    requireAuth,
  );
  router.addRoute(
    "/recipe/:uuid",
    () => import("./lib/routes/RecipeDetailPage.svelte"),
  );
  router.addRoute(
    "/accept-invite",
    () => import("./lib/routes/AcceptInvite.svelte"),
  );
  router.addRoute(
    "/reset-password",
    () => import("./lib/routes/ResetPassword.svelte"),
  );

  // Privées (Dashboard & Gestion)
  router.addRoute(
    "/dashboard",
    () => import("./lib/routes/DashboardPage.svelte"),
    requireAuth,
  );
  router.addRoute(
    "/dashboard/teams",
    () => import("./lib/routes/TeamsManagement.svelte"),
    requireAuth,
  );
  router.addRoute(
    "/dashboard/eventCreate",
    () => import("./lib/routes/EventCreatePage.svelte"),
    requireAuth,
  );
  router.addRoute(
    "/dashboard/eventEdit/:id",
    () => import("./lib/routes/EventEditPage.svelte"),
    requireAuth,
  );
  router.addRoute(
    "/dashboard/eventEdit/recipes/:id",
    () => import("./lib/routes/EventRecipesPage.svelte"),
    requireAuth,
  );
  router.addRoute(
    "/dashboard/eventEdit/products/:id",
    () => import("./lib/routes/EventProductsPage.svelte"),
    requireAuth,
  );
  router.addRoute(
    "/dashboard/eventPosters/:id",
    () => import("./lib/routes/EventPosterPage.svelte"),
    requireAuth,
  );
  router.addRoute(
    "/dashboard/materiel",
    () => import("./lib/routes/MaterielPage.svelte"),
    requireAuth,
  );
  router.addRoute(
    "/dashboard/materiel/:teamId",
    () => import("./lib/routes/MaterielPage.svelte"),
    requireAuth,
  );
  router.addRoute(
    "/dashboard/loans",
    () => import("./lib/routes/LoansPage.svelte"),
    requireAuth,
  );
  router.addRoute(
    "/dashboard/loans/:teamId",
    () => import("./lib/routes/LoansPage.svelte"),
    requireAuth,
  );
  router.addRoute(
    "/dashboard/loans/return/:loanId",
    () => import("./lib/routes/LoanReturnPage.svelte"),
    requireAuth,
  );
  router.addRoute(
    "/eventList",
    () => import("./lib/routes/EventListPage.svelte"),
    requireAuth,
  );
  router.addRoute(
    "/createdocument/:teamId/new",
    () => import("./lib/routes/CreateDocumentPage.svelte"),
    requireAuth,
  );
  router.addRoute(
    "/editdocument/:teamId/:docId",
    () => import("./lib/routes/EditDocumentPage.svelte"),
    requireAuth,
  );
  router.addRoute(
    "/documents/:teamId",
    () => import("./lib/routes/DocumentListPage.svelte"),
    requireAuth,
  );

  // ✅ Routes pour le mode démo (PAS de requireAuth)
  router.addRoute(
    "/demo/event/:id",
    () => import("./lib/routes/EventEditPage.svelte"),
    requireLocalEvent,
  );
  router.addRoute(
    "/demo/event/recipes/:id",
    () => import("./lib/routes/EventRecipesPage.svelte"),
    requireLocalEvent,
  );
  router.addRoute(
    "/demo/event/products/:id",
    () => import("./lib/routes/EventProductsPage.svelte"),
    requireLocalEvent,
  );
  router.addRoute(
    "/demo/event/poster/:id",
    () => import("./lib/routes/EventPosterPage.svelte"),
    requireLocalEvent,
  );

  let currentRoute = $state<any>(null);

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
          notificationStore.loadCache(),
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
          notificationStore.syncFromRemote(),
          teamdocsStore.syncFromRemote(),
        ])
          .then(async () => {
            await Promise.all([
              eventsStore.setupRealtime(),
              recipesStore.setupRealtime(),
              materielStore.setupRealtime(),
              teamsStore.setupRealtime(),
              notificationStore.setupRealtime(),
              teamdocsStore.setupRealtime(),
            ]);
            await realtimeManager.initialize();
            appState = "READY_FULLY_SYNCED";
            toastService.dismiss(syncToastId);

            // ✅ Précharger les routes probables en arrière-plan
            setTimeout(() => {
              preloadRoute("/dashboard");
              preloadRoute("/recipe");
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

            // ✅ Précharger les routes publiques probables
            setTimeout(() => {
              preloadRoute("/recipe");
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

  let previousRoutePath = $state("");

  $effect(() => {
    const _path = router.path;
    const _state = appState;

    if (
      _state === "READY_WITH_CACHE" ||
      _state === "READY_FULLY_SYNCED" ||
      _state === "READY"
    ) {
      router.match().then(async (match) => {
        currentRoute = match;

        if (_path !== previousRoutePath) {
          previousRoutePath = _path;
          await tick();
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            });
          });
        }
      });
    }
  });

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
  {#if (appState === "READY_WITH_CACHE" || appState === "READY_FULLY_SYNCED" || appState === "READY") && currentRoute}
    {@const Component = currentRoute.component}
    <Component params={currentRoute.params} query={currentRoute.query} />
  {:else if appState === "ERROR"}
    <div class="flex h-[50vh] items-center justify-center">
      <ErrorAlert message={displayError || "Erreur inconnue"} />
    </div>
  {:else}
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
  onAuth_success={handleLoginSuccess}
/>

<style>
</style>
