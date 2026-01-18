<script lang="ts">
  import {
    Users,
    MapPin,
    Settings,
    Plus,
    Package,
    ShoppingCart,
    ArrowRight,
  } from "@lucide/svelte";
  import { nativeTeamsStore } from "$lib/stores/NativeTeamsStore.svelte";
  import { navigate } from "$lib/services/simple-router.svelte";
  import TeamDetailModal from "$lib/components/teams/TeamDetailModal.svelte";
  import CurrentEventsCard from "./CurrentEventsCard.svelte";
  import type { EnrichedNativeTeam } from "$lib/types/aw_native_team.d";
  import type { EnrichedEvent } from "$lib/types/events.d";

  interface Props {
    team: EnrichedNativeTeam;
    allEvents: EnrichedEvent[];
    loading?: boolean;
  }

  let { team, allEvents, loading = false }: Props = $props();

  // État local
  let showTeamModal = $state(false);
  let teamModalTab = $state("");

  // Dérivés - Informations équipe
  const teamLocation = $derived.by(() => {
    const prefs = team.prefs || {};
    return prefs.city || prefs.location || prefs.region || null;
  });

  const teamMembers = $derived.by(() => {
    return team.members || [];
  });

  const memberNames = $derived.by(() => {
    return nativeTeamsStore.getTeamMemberNames(team.$id);
  });

  const memberNamesDisplay = $derived.by(() => {
    if (memberNames.length <= 20) return memberNames.join(", ");
    return `${memberNames.slice(0, 20).join(", ")} +${memberNames.length - 20}`;
  });

  // Dérivés - Événements filtrés par équipe
  const teamEvents = $derived.by(() => {
    return allEvents.filter(
      (event) =>
        event.teamsId?.includes(team.$id) || event.teams?.includes(team.name),
    );
  });

  const currentEvents = $derived.by(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return teamEvents.filter((event) => {
      const endDate = event.dateEnd
        ? new Date(event.dateEnd)
        : new Date(event.dateStart);
      return endDate >= today;
    });
  });

  const pastEvents = $derived.by(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return teamEvents
      .filter((event) => {
        const endDate = event.dateEnd
          ? new Date(event.dateEnd)
          : new Date(event.dateStart);
        return endDate < today;
      })
      .slice(0, 3); // 3 événements passés récents
  });

  // Handlers
  function openTeamModal() {
    showTeamModal = true;
  }

  function inviteMember() {
    teamModalTab = "invitations";
    showTeamModal = true;
  }

  function goToCreateEvent() {
    navigate("/dashboard/eventCreate");
  }

  function goToInventory() {
    navigate(`/dashboard/materiel/${team.$id}`);
  }

  function goToReservations() {
    navigate(`/dashboard/loans/${team.$id}`);
  }

  function goToPastEvents() {
    navigate("/eventList");
  }
</script>

<div class="card bg-base-100 border-base-200 border shadow-xl">
  <div class="card-body gap-4">
    <!-- === HEADER PRINCIPAL === -->
    <div class="flex items-start justify-between gap-2">
      <!-- Nom + Localisation -->
      <div class="flex items-center gap-2">
        <Users class="text-primary h-5 w-5 flex-shrink-0" />
        <h2 class="text-xl font-bold">{team.name}</h2>
        {#if teamLocation}
          <div class="badge badge-soft badge-secondary gap-1">
            <MapPin class="h-3 w-3" />
            {teamLocation}
          </div>
        {/if}
      </div>

      <!-- Bouton Paramètres -->
      <button
        class="btn btn-circle btn-ghost"
        onclick={openTeamModal}
        title="Paramètres de l'équipe"
      >
        <Settings />
      </button>
    </div>

    <!-- === SOUS-CARD MEMBRES === -->
    <div class="card card-sm bg-base-300">
      <div class="card-body py-3">
        <div
          class="grid grid-cols-1 items-center justify-between gap-2 text-sm md:grid-cols-4"
        >
          <div class="col-span-3 flex items-center gap-2">
            <Users class="inline size-5 shrink-0 opacity-70" />
            <!-- Liste des noms -->
            <span class="text-base-content/70"> {memberNamesDisplay} </span>
          </div>
          <div class="ms-auto flex items-center gap-4">
            <!-- Badge membres -->
            <div class="badge badge-primary badge-lg badge-outline ml-auto">
              {teamMembers.length} membre{teamMembers.length > 1 ? "s" : ""}
            </div>

            <button class="btn btn-sm btn-accent" onclick={inviteMember}>
              <Plus class="h-4 w-4" />
              Inviter
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- === ÉVÉNEMENTS === -->
    <div class="space-y-4">
      <!-- Événements à venir -->
      <CurrentEventsCard
        events={currentEvents}
        {loading}
        cardClass="border-l-4 border-accent"
      />

      <!-- Événements récents -->
      {#if pastEvents.length > 0}
        <div class="fieldset-legend">Récents</div>
        <CurrentEventsCard events={pastEvents} {loading} />
      {/if}

      <!-- Lien vers événements passés -->

      <button class="btn btn-block" onclick={goToPastEvents}>
        Voir les événements passés
        <ArrowRight class="ml-2 h-4 w-4" />
      </button>
    </div>

    <!-- === ACTIONS === -->
    <div
      class="card-actions border-base-200 flex justify-between border-t pt-4"
    >
      <!-- Actions Matériel -->
      <div class="flex flex-col gap-2">
        <fieldset class="fieldset w-48">
          <legend class="fieldset-legend text-xs">
            Gérez le matériel collectif de cantine
          </legend>
          <div class="flex gap-2">
            <button
              class="btn btn-primary btn-soft btn-sm flex-1"
              onclick={goToInventory}
            >
              <Package class="h-3 w-3" />
              Inventaire
            </button>
            <button
              class="btn btn-primary btn-soft btn-sm flex-1"
              onclick={goToReservations}
            >
              <ShoppingCart class="h-3 w-3" />
              Réservations
            </button>
          </div>
        </fieldset>
      </div>

      <!-- Bouton Créer un événement -->
      <button
        class="btn btn-primary btn-sm mt-auto ml-auto"
        onclick={goToCreateEvent}
      >
        <Plus class="h-4 w-4" />
        Créer un événement
      </button>
    </div>
  </div>
</div>

<!-- Modal de détails de l'équipe -->
{#if showTeamModal}
  <TeamDetailModal
    teamId={team.$id}
    onClose={() => (showTeamModal = false)}
    initialTab={teamModalTab}
  />
{/if}
