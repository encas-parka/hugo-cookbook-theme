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
  import {
    nativeTeamsStore,
    nativeTeamsStore as teamsStore,
  } from "$lib/stores/NativeTeamsStore.svelte";
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
  import TeamDashboardCard from "../components/dashboard/TeamDashboardCard.svelte";
  import CreateTeamModal from "../components/teams/CreateTeamModal.svelte";

  const now = new Date();

  let createModalOpen = $state(false);

  // Traitement des événements - utiliser les derived properties du store
  const currentEvents = $derived(eventsStore.currentEvents);
  const pastEvents = $derived(eventsStore.pastEvents);

  // WARM-UP
  $effect(() => {
    warmUpUsersTeamsManager();
    warmUpEnkaData();
  });

  function handleTeamCreated(teamId: string) {
    createModalOpen = false;
  }

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

      <!-- SECTION 2.5: Team Cards (uniquement si authentifié avec équipes) -->
      {#if globalState.userTeams.length > 0}
        <section class="bg-base-200 py-8">
          <div class="container mx-auto px-4">
            <div class="tiems-center mb-4 flex justify-between gap-4">
              <div class="mb-6 text-2xl font-bold">Vos Équipes</div>
              <div class="card-actions mt-4">
                <button
                  class="btn btn-primary btn-sm ms-auto"
                  onclick={() => (createModalOpen = true)}
                  ><Plus class="size-4" /> Créer une équipe</button
                >
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6">
              {#each globalState.userTeams as teamId (teamId)}
                {@const team = nativeTeamsStore.getTeamById(teamId)}
                {#if team}
                  <TeamDashboardCard
                    {team}
                    allEvents={eventsStore.events}
                    loading={eventsStore.loading}
                  />
                {/if}
              {/each}
            </div>
          </div>
        </section>
      {/if}

      <div class="card bg-base-100 border-base-200 border shadow-xl">
        <div class="card-body">
          <LatestRecipesCard />
        </div>
      </div>
    {/if}
  </div>
</div>

<CreateTeamModal
  isOpen={createModalOpen}
  onClose={() => (createModalOpen = false)}
  onSuccess={handleTeamCreated}
/>
