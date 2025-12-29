<script lang="ts">
  import { onMount, tick } from "svelte";
  import { productsStore } from "./lib/stores/ProductsStore.svelte";
  import { eventsStore } from "./lib/stores/EventsStore.svelte";
  import { teamsStore } from "./lib/stores/TeamsStore.svelte";
  import { recipesStore } from "./lib/stores/RecipesStore.svelte";
  import ErrorAlert from "./lib/components/ui/ErrorAlert.svelte";
  import HeaderNav from "./lib/components/HeaderNav.svelte";
  import Toast from "./lib/components/ui/Toast.svelte";
  import OverrideConflictModal from "./lib/components/OverrideConflictModal.svelte";
  import { globalState } from "./lib/stores/GlobalState.svelte";

  import {
    router,
    navigate,
    type RouteGuards,
  } from "./lib/services/simple-router.svelte";
  import DashboardPage from "./lib/routes/DashboardPage.svelte";
  import EventEditPage from "./lib/routes/EventEditPage.svelte";
  import EventRecipesPage from "./lib/routes/EventRecipesPage.svelte";
  import AcceptInvite from "./lib/routes/AcceptInvite.svelte";
  import TeamsManagement from "./lib/routes/TeamsManagement.svelte";
  import RecipeDetailPage from "./lib/routes/RecipeDetailPage.svelte";
  import RecipesListPage from "./lib/routes/RecipesListPage.svelte";
  import RecipeEditPage from "./lib/routes/RecipeEditPage.svelte";
  import ProductsPage from "./lib/routes/ProductsPage.svelte";
  import HomePage from "./lib/routes/HomePage.svelte";

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

  // Guard: Redirige vers le dashboard si déjà connecté
  const redirectIfAuth: RouteGuards = {
    beforeEnter: async () => {
      if (globalState.isAuthenticated) {
        console.log("[Router] Déjà connecté > Redirection /dashboard");
        navigate("/dashboard");
        return false;
      }
      return true;
    },
  };

  // Définir les routes
  // Publiques
  router.addRoute("/", HomePage, redirectIfAuth);
  router.addRoute("/recipe", RecipesListPage);
  router.addRoute("/recipe/my", RecipesListPage, requireAuth);
  router.addRoute("/recipe/my/draft", RecipesListPage, requireAuth);
  router.addRoute("/recipe/new", RecipeEditPage, requireAuth);
  router.addRoute("/recipe/:uuid/edit", RecipeEditPage, requireAuth);
  router.addRoute("/recipe/:uuid/duplicate", RecipeEditPage, requireAuth);
  router.addRoute("/recipe/:uuid", RecipeDetailPage);
  router.addRoute("/accept-invite", AcceptInvite);

  // Privées (Dashboard & Gestion)
  router.addRoute("/dashboard", DashboardPage, requireAuth);
  router.addRoute("/dashboard/teams", TeamsManagement, requireAuth);
  router.addRoute("/dashboard/eventEdit", EventEditPage, requireAuth);
  router.addRoute("/dashboard/eventEdit/:id", EventEditPage, requireAuth);
  router.addRoute(
    "/dashboard/eventEdit/recipes/:id",
    EventRecipesPage,
    requireAuth,
  );
  router.addRoute(
    "/dashboard/eventEdit/products/:id",
    ProductsPage,
    requireAuth,
  );

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
          teamsStore.initialize(),
          eventsStore.initialize(),
          recipesStore.initialize(),
        ]);
      } else {
        appState = "LOADING_PUBLIC";
        // Charger UNIQUEMENT les recettes (Bloquant pour /recipes)
        await recipesStore.initialize();
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
  $effect(() => {
    // On re-vérifie le matching à chaque changement de path ou d'état appState
    const _path = router.path;
    const _state = appState;

    if (_state === "READY") {
      router.match().then((match) => {
        currentRoute = match;
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
