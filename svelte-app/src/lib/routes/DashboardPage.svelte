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
  import { teamsStore } from "$lib/stores/TeamsStore.svelte";
  import { recipesStore } from "$lib/stores/RecipesStore.svelte";
  import { globalState } from "$lib/stores/GlobalState.svelte";
  import { navigate } from "$lib/services/simple-router.svelte";

  import TeamSummaryCard from "$lib/components/dashboard/TeamSummaryCard.svelte";
  import CurrentEventsCard from "$lib/components/dashboard/CurrentEventsCard.svelte";
  import LatestRecipesCard from "$lib/components/dashboard/LatestRecipesCard.svelte";

  const now = new Date();

  // Traitement des événements - utiliser les derived properties du store
  const currentEvents = $derived(eventsStore.currentEvents);
  const upcomingEvents = $derived(eventsStore.upcomingEvents);
  const pastEventsCount = $derived(eventsStore.pastEventsCount);

  // Invitations fictives (en attendant la vraie logique)
  const mockInvitations = [
    {
      $id: "inv1",
      teamName: "Équipe Famille",
      invitedBy: "Marie",
      status: "pending" as const,
    },
    {
      $id: "inv2",
      teamName: "Amis Foodies",
      invitedBy: "Thomas",
      status: "pending" as const,
    },
  ];

  // Fonctions de navigation
  function onCreateEvent() {
    navigate("/eventEdit");
  }

  function onCreateRecipe() {
    // TODO: Implémenter la navigation vers la création de recette
    console.log("Navigate to create recipe");
  }
</script>

<div class="bg-base-200/30 min-h-screen">
  <!-- Header principal -->
  <div
    class="bg-base-100 border-base-200 bg-opacity-90 sticky top-0 z-10 border-b backdrop-blur-sm"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div>
          <h1
            class="text-base-content flex items-center gap-2 text-2xl font-bold"
          >
            <Sparkles class="text-primary h-6 w-6" />
            Tableau de Bord
          </h1>
          <p class="text-base-content/60 text-sm">
            Bienvenue {globalState.user?.name || ""}
          </p>
        </div>

        <!-- Actions rapides -->
        <div class="flex gap-2">
          <button class="btn btn-primary" onclick={onCreateEvent}>
            <Calendar class="h-4 w-4" />
            Nouvel Événement
          </button>
          <button class="btn btn-secondary" onclick={onCreateRecipe}>
            <BookOpen class="h-4 w-4" />
            Créer une Recette
          </button>
        </div>
      </div>
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
        <button
          class="btn btn-primary"
          onclick={() => {
            // TODO: Ouvrir le modal d'authentification
            console.log("Open auth modal");
          }}
        >
          Se connecter
        </button>
      </div>
    {:else if eventsStore.loading && teamsStore.loading}
      <!-- État de chargement -->
      <div class="flex items-center justify-center py-20">
        <div class="text-center">
          <LoaderCircle
            class="text-primary mx-auto mb-4 h-12 w-12 animate-spin"
          />
          <p class="text-base-content/60">
            Chargement de votre tableau de bord...
          </p>
        </div>
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
          <!-- Événements -->
          <CurrentEventsCard
            {currentEvents}
            {upcomingEvents}
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
            teams={teamsStore.teams}
            invitations={mockInvitations}
            loading={teamsStore.loading}
          />
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
  /* Styles spécifiques au dashboard si nécessaire */
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
