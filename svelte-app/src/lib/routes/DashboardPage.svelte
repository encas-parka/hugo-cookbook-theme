<script lang="ts">
  import {
    Plus,
    Calendar,
    BookOpen,
    Settings,
    LoaderCircle,
    Sparkles,
    Users,
    Clock,
    ChefHat,
    ArrowRight,
  } from "@lucide/svelte";
  import { eventsStore } from "$lib/stores/EventsStore.svelte";
  import { nativeTeamsStore as teamsStore } from "$lib/stores/NativeTeamsStore.svelte";
  import { recipesStore } from "$lib/stores/RecipesStore.svelte";
  import { globalState } from "$lib/stores/GlobalState.svelte";
  import { navigate } from "$lib/services/simple-router.svelte";
  import { navBarStore } from "../stores/NavBarStore.svelte";
  import { onDestroy } from "svelte";
  import {
    warmUpUsersTeamsManager,
    warmUpEnkaData,
  } from "$lib/services/appwrite-warmup";

  import TeamSummaryCard from "$lib/components/dashboard/TeamSummaryCard.svelte";
  import CurrentEventsCard from "$lib/components/dashboard/CurrentEventsCard.svelte";
  import LatestRecipesCard from "$lib/components/dashboard/LatestRecipesCard.svelte";
  import MaterielSummaryCard from "$lib/components/dashboard/MaterielSummaryCard.svelte";

  const now = new Date();

  // Traitement des événements - utiliser les derived properties du store
  const currentEvents = $derived(eventsStore.currentEvents);
  const pastEventsCount = $derived(eventsStore.pastEventsCount);

  // WARM-UP
  $effect(() => {
    warmUpUsersTeamsManager();
    warmUpEnkaData();
  });

  // ============================================================================
  // NAVBAR CONFIGURATION
  // ============================================================================

  $effect(() => {
    navBarStore.setConfig({
      title: "Dashboard",
      actions: navActions,
    });
  });

  onDestroy(() => {
    navBarStore.reset();
  });
</script>

{#snippet navActions()}
  <div class="flex gap-2">
    <button
      class="btn btn-primary"
      onclick={() => navigate("/dashboard/eventCreate")}
    >
      <Plus class="h-4 w-4" />
      Créer un Événement
    </button>
    <button class="btn btn-primary" onclick={() => navigate("/recipe/new")}>
      <Plus class="h-4 w-4" />
      Créer une Recette
    </button>
  </div>
{/snippet}

<div class="bg-base-200 min-h-screen">
  <!-- Greeting -->
  <div class="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
    <div class="flex flex-col">
      <h2 class="text-base-content text-xl font-bold">
        Bienvenue, {globalState.user?.name || ""}
      </h2>
      <p class="text-base-content/60 text-sm">
        Voici un aperçu de vos activités récentes.
      </p>
    </div>
  </div>

  <!-- Contenu principal -->
  <div class="mx-auto max-w-7xl px-4 py-8">
    {#if !globalState.isAuthenticated}
      <!-- État non connecté -->
      <div
        class="bg-base-100 border-base-200 rounded-xl border p-8 text-center shadow-sm"
      >
        <Settings class="mx-auto mb-4 h-16 w-16 opacity-20" />
        <h2 class="mb-2 text-xl font-semibold">
          Connectez-vous pour accéder à votre tableau de bord
        </h2>
        <p class="text-base-content/60 mb-6">
          Connectez-vous pour voir vos équipes, événements et recettes.
        </p>
        <button class="btn btn-primary" onclick={() => {}}>
          Se connecter
        </button>
      </div>
    {:else if eventsStore.error || teamsStore.error}
      <!-- État d'erreur -->
      <div class="alert alert-error shadow-lg">
        <span
          >{eventsStore.error ||
            teamsStore.error ||
            "Une erreur est survenue"}</span
        >
      </div>
    {:else}
      <!-- Tableau de bord -->
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <!-- Colonne principale (2/3) -->
        <div class="space-y-6 lg:col-span-2">
          <!-- test ingredient -->
          <!-- Événements -->
          <CurrentEventsCard
            {currentEvents}
            {pastEventsCount}
            loading={eventsStore.loading}
          />

          <!-- Dernières recettes -->
          <LatestRecipesCard />
        </div>

        <!-- Colonne latérale (1/3) -->
        <div class="space-y-6">
          <!-- Résumé des équipes -->
          <TeamSummaryCard
            teams={teamsStore.myTeams}
            invitations={[]}
            loading={teamsStore.loading}
          />
          <!-- NOTE: invitations vide avec Server SDK (pas d'invitations en attente) -->

          <!-- Résumé du matériel -->
          <MaterielSummaryCard loading={eventsStore.loading} />
        </div>
      </div>
    {/if}
  </div>
</div>
