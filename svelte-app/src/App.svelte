<script lang="ts">
  import { onMount } from "svelte";
  import { productsStore } from "./lib/stores/ProductsStore.svelte";
  import { eventsStore } from "./lib/stores/EventsStore.svelte";
  import { teamsStore } from "./lib/stores/TeamsStore.svelte";
  import { recipesStore } from "./lib/stores/RecipesStore.svelte";
  import ErrorAlert from "./lib/components/ui/ErrorAlert.svelte";
  import HeaderNav from "./lib/components/HeaderNav.svelte";
  import Toast from "./lib/components/ui/Toast.svelte";
  import OverrideConflictModal from "./lib/components/OverrideConflictModal.svelte";
  import { globalState } from "./lib/stores/GlobalState.svelte";

  // Router simple
  import { router } from "./lib/services/simple-router.svelte";
  import DashboardPage from "./lib/routes/DashboardPage.svelte";
  import EventEditPage from "./lib/routes/EventEditPage.svelte";

  let initError: string | null = $state(null);

  // Définir les routes
  router.addRoute("/", DashboardPage);
  router.addRoute("/dashboard", DashboardPage);
  router.addRoute("/eventEdit", EventEditPage);
  router.addRoute("/eventEdit/:id", EventEditPage);

  // État du composant actuel
  let currentRoute = $state<any>(null);

  // Protection d'authentification
  $effect(() => {
    // Si non authentifié et qu'on essaie d'accéder à une route protégée (autre que /)
    if (!globalState.isAuthenticated && router.path !== "/") {
      // Rediriger vers la racine (qui affichera le dashboard vide ou redirigera selon la logique)
      // Note: Avec le hash routing, on peut juste reset le hash ou rediriger vers /
      window.location.hash = "/";
      window.location.pathname = "/"; // Redirection Hugo vers la home
    }
  });

  // Mettre à jour le composant actuel quand la route change
  $effect(() => {
    router.match().then((match) => {
      currentRoute = match;
    });
  });

  async function initializeAuth() {
    try {
      await globalState.initializeAuth();
    } catch (err: any) {
      console.error("Erreur d'initialisation auth:", err);
    }
  }

  async function initializeDashboard() {
    try {
      await Promise.all([
        teamsStore.initialize(),
        recipesStore.initialize(),
        eventsStore.initialize(),
      ]);
    } catch (err: any) {
      console.error("Erreur d'initialisation dashboard:", err);
      initError = err.message || "Erreur inconnue lors de l'initialisation";
    }
  }

  onMount(() => {
    // Fonction asynchrone pour l'initialisation
    (async () => {
      await initializeAuth();

      if (globalState.isAuthenticated) {
        // Rediriger vers "/a" si l'utilisateur est authentifié et qu'on n'est pas déjà sur "/a"
        if (window.location.pathname == "/") {
          window.location.pathname = "/a";
        }
        await initializeDashboard();
      }
    })();
  });

  let displayError = $derived(initError || productsStore.error);
</script>

<!-- Header toujours présent -->
<HeaderNav />

<!-- Rendu du composant actuel -->
{#if currentRoute}
  {@const Component = currentRoute.component}
  <Component params={currentRoute.params} query={currentRoute.query} />
{:else}
  <div class="flex items-center justify-center py-20">
    <p class="text-slate-400">Chargement...</p>
  </div>
{/if}

<!-- Éléments globaux -->
<Toast />

<!-- Modales globales (visibles uniquement dans le dashboard) -->
{#if globalState.isAuthenticated}
  {#if displayError}
    <ErrorAlert message={displayError} />
  {/if}

  <OverrideConflictModal
    isOpen={globalState.isConflictModalOpen}
    conflictData={globalState.conflictData}
  />
{/if}

<style>
</style>
