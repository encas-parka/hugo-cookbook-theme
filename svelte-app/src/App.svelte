<script lang="ts">
  import { onMount, tick } from "svelte";
  import { productsStore } from "./lib/stores/ProductsStore.svelte";
  import { eventsStore } from "./lib/stores/EventsStore.svelte";
  import { nativeTeamsStore as teamsStore } from "./lib/stores/NativeTeamsStore.svelte";
  import { recipesStore } from "./lib/stores/RecipesStore.svelte";
  import { notificationStore } from "./lib/stores/NotificationStore.svelte";
  import { materielStore } from "./lib/stores/MaterielStore.svelte";
  import { realtimeManager } from "./lib/stores/RealtimeManager.svelte";
  import { onDestroy } from "svelte";
  import ErrorAlert from "./lib/components/ui/ErrorAlert.svelte";
  import HeaderNav from "./lib/components/HeaderNav.svelte";
  import Toast from "./lib/components/ui/Toast.svelte";
  import ScrollToTopButton from "./lib/components/ui/ScrollToTopButton.svelte";
  import OverrideConflictModal from "./lib/components/OverrideConflictModal.svelte";
  import { globalState } from "./lib/stores/GlobalState.svelte";

  import {
    router,
    navigate,
    type RouteGuards,
  } from "./lib/services/simple-router.svelte";
  import DashboardPage from "./lib/routes/DashboardPage.svelte";
  import EventEditPage from "./lib/routes/EventEditPage.svelte";
  import EventCreatePage from "./lib/routes/EventCreatePage.svelte";
  import EventRecipesPage from "./lib/routes/EventRecipesPage.svelte";
  import AcceptInvite from "./lib/routes/AcceptInvite.svelte";
  import TeamsManagement from "./lib/routes/TeamsManagement.svelte";
  import RecipeDetailPage from "./lib/routes/RecipeDetailPage.svelte";
  import RecipesListPage from "./lib/routes/RecipesListPage.svelte";
  import RecipeEditPage from "./lib/routes/RecipeEditPage.svelte";
  import RecipeCreatePage from "./lib/routes/RecipeCreatePage.svelte";
  import EventProductsPage from "./lib/routes/EventProductsPage.svelte";
  import HomePage from "./lib/routes/HomePage.svelte";
  import ResetPassword from "./lib/routes/ResetPassword.svelte";
  import EventPosterPage from "./lib/routes/EventPosterPage.svelte";
  import MaterielPage from "./lib/routes/MaterielPage.svelte";
  import LoansPage from "./lib/routes/LoansPage.svelte";

  // États de l'application
  type AppState =
    | "BOOTING"
    | "LOADING_PRIVATE"
    | "LOADING_PUBLIC"
    | "READY"
    | "ERROR";
  let appState = $state<AppState>("BOOTING");
  let initError: string | null = $state(null);

  // Guards: Requiert l'authentification
  const requireAuth: RouteGuards = {
    beforeEnter: async () => {
      // Si l'utilisateur n'est pas connecté, rediriger vers l'accueil
      if (!globalState.isAuthenticated) {
        console.log("[Router] Accès refusé > Redirection /");
        navigate("/");
        return false;
      }
      return true;
    },
  };

  // Définir les routes
  // Publiques
  router.addRoute("/", HomePage);
  router.addRoute("/recipe", RecipesListPage);
  router.addRoute("/recipe/my", RecipesListPage, requireAuth);
  router.addRoute("/recipe/my/draft", RecipesListPage, requireAuth);
  router.addRoute("/recipe/new", RecipeCreatePage, requireAuth);
  router.addRoute("/recipe/:uuid/edit", RecipeEditPage, requireAuth);
  router.addRoute("/recipe/:uuid/duplicate", RecipeCreatePage, requireAuth);
  router.addRoute("/recipe/:uuid", RecipeDetailPage);
  router.addRoute("/accept-invite", AcceptInvite);
  router.addRoute("/reset-password", ResetPassword);

  // Privées (Dashboard & Gestion)
  router.addRoute("/dashboard", DashboardPage, requireAuth);
  router.addRoute("/dashboard/teams", TeamsManagement, requireAuth);
  router.addRoute("/dashboard/eventCreate", EventCreatePage, requireAuth);
  router.addRoute("/dashboard/eventEdit/:id", EventEditPage, requireAuth);
  router.addRoute(
    "/dashboard/eventEdit/recipes/:id",
    EventRecipesPage,
    requireAuth,
  );
  router.addRoute(
    "/dashboard/eventEdit/products/:id",
    EventProductsPage,
    requireAuth,
  );
  router.addRoute("/dashboard/eventPosters/:id", EventPosterPage, requireAuth);
  router.addRoute("/dashboard/materiel", MaterielPage, requireAuth);
  router.addRoute("/dashboard/materiel/:teamId", MaterielPage, requireAuth);
  router.addRoute("/dashboard/loans", LoansPage, requireAuth);
  router.addRoute("/dashboard/loans/:teamId", LoansPage, requireAuth);

  // État du composant actuel
  let currentRoute = $state<any>(null);

  // Machine à états de chargement
  async function initializeApp() {
    try {
      appState = "BOOTING";

      // 1. Auth (Critique)
      await globalState.initializeAuth();

      // 2. Chargement des données
      if (globalState.isAuthenticated) {
        appState = "LOADING_PRIVATE";
        // Charger TOUT (Bloquant pour le dashboard)
        await Promise.all([
          notificationStore.initialize(),
          teamsStore.initialize(),
          eventsStore.initialize(),
          recipesStore.initialize(),
          materielStore.initialize(),
        ]);
        // 3. Activer la connexion WebSocket centralisée
        await realtimeManager.initialize();
      } else {
        appState = "LOADING_PUBLIC";
        // Charger UNIQUEMENT les recettes (Bloquant pour /recipes)
        await recipesStore.initialize();
        // Activer le realtime même en mode public pour les recettes
        await realtimeManager.initialize();
      }

      // 3. Prêt
      appState = "READY";
      console.log("[App] Initialisation terminée. État: READY");
    } catch (err: any) {
      console.error("[App] Erreur fatale d'initialisation:", err);
      initError = err.message || "Erreur critique de chargement";
      appState = "ERROR";
    }
  }

  // Mettre à jour le composant actuel quand la route change
  // ET que l'app est prête (pour éviter les affichages partiels)
  let previousRoutePath = $state("");

  $effect(() => {
    // On re-vérifie le matching à chaque changement de path ou d'état appState
    const _path = router.path;
    const _state = appState;

    if (_state === "READY") {
      router.match().then(async (match) => {
        currentRoute = match;

        // Scroll to top si la route a changé
        if (_path !== previousRoutePath) {
          previousRoutePath = _path;
          // Attendre que le DOM soit mis à jour
          await tick();
          // Double rAF pour attendre les contenus asynchrones
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            });
          });
        }
      });
    }
  });

  // Re-run l'initialisation si l'état d'auth change (Login/Logout)
  // Utiliser un effet pour détecter le changement d'auth APRES l'init initiale
  $effect(() => {
    // On surveille juste le changement globalState.isAuthenticated
    // Mais attention à ne pas boucler avec initializeAuth
    // L'astuce est de réagir à `globalState.authInitialized` qui est stable
  });

  // Gestion du Login/Logout pour recharger les données
  // Exposé globalement ou géré via un event si besoin, mais ici on peut juste watcher isAuthenticated
  let wasAuthenticated = $state(false);
  $effect(() => {
    const isAuth = globalState.isAuthenticated;
    if (appState === "READY" && isAuth !== wasAuthenticated) {
      wasAuthenticated = isAuth;
      // Re-boot complet si changement d'état (Login ou Logout)
      console.log("[App] Changement d'état Auth détecté -> Rechargement");
      initializeApp();
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
    realtimeManager.destroy();
  });

  let displayError = $derived(initError || productsStore.error);
</script>

<!-- Header toujours présent -->
<HeaderNav />

<!-- Rendu Principal -->
<div class="bg-base-200 min-h-screen">
  {#if appState === "READY" && currentRoute}
    {@const Component = currentRoute.component}
    <Component params={currentRoute.params} query={currentRoute.query} />
  {:else if appState === "ERROR"}
    <div class="flex h-[50vh] items-center justify-center">
      <ErrorAlert message={displayError || "Erreur inconnue"} />
    </div>
  {:else}
    <!-- LOADER GLOBAL -->
    <div class="flex h-[80vh] flex-col items-center justify-center gap-4">
      <div class="loading loading-spinner loading-lg text-primary"></div>
      <p class="text-base-content/70 animate-pulse font-medium">
        {#if appState === "BOOTING"}
          Démarrage...
        {:else if appState === "LOADING_PRIVATE"}
          Chargement de votre espace...
        {:else if appState === "LOADING_PUBLIC"}
          Préparation de la cuisine...
        {/if}
      </p>
    </div>
  {/if}
</div>

<!-- Éléments globaux -->
<Toast />
<ScrollToTopButton />

<!-- Modales globales (visibles uniquement si connecté et app prête) -->
{#if globalState.isAuthenticated && appState === "READY"}
  {#if displayError}
    <!-- Erreurs non fatales (ex: store products) -->
    <ErrorAlert message={displayError} />
  {/if}

  <OverrideConflictModal />
{/if}

<style>
</style>
