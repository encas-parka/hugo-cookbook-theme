<script lang="ts">
  import { Users, Calendar, CheckCircle, XCircle } from "@lucide/svelte";
  import { navigate } from "$lib/services/simple-router.svelte";
  import { globalState } from "$lib/stores/GlobalState.svelte";
  import TeamDetailModal from "$lib/components/teams/TeamDetailModal.svelte";
  import { nativeTeamsStore as teamsStore } from "$lib/stores/NativeTeamsStore.svelte";
  import type { Team, Membership } from "$lib/types/appwrite.d";

  interface Team {
    $id: string;
    name: string;
    description?: string | null;
    total?: number;
  }

  interface PendingInvite {
    teamId: string;
    teamName: string;
    membershipId: string;
    userId: string;
    userName: string;
  }

  interface Props {
    teams: Team[];
    invitations: PendingInvite[];
    loading?: boolean;
  }

  let { teams = [], invitations = [], loading = false }: Props = $props();

  // État pour le modal de détails d'équipe
  let selectedTeamId = $state<string | null>(null);

  function goToTeamsManagement() {
    navigate("/dashboard/teams");
  }

  function openTeamDetailModal(teamId: string) {
    selectedTeamId = teamId;
  }

  function closeTeamDetailModal() {
    selectedTeamId = null;
  }

  async function acceptInvitation(membershipId: string, teamId: string) {
    try {
      await teamsStore.acceptMembership(membershipId, teamId);
    } catch (error) {
      console.error("Erreur lors de l'acceptation de l'invitation:", error);
    }
  }

  async function rejectInvitation(membershipId: string, teamId: string) {
    try {
      await teamsStore.declineMembership(membershipId, teamId);
    } catch (error) {
      console.error("Erreur lors du rejet de l'invitation:", error);
    }
  }
</script>

<div class="card bg-base-100 border-base-200 border shadow-xl">
  <div class="card-body">
    <div class="flex items-center justify-between">
      <h2 class="card-title flex items-center gap-2">
        <Users class="text-primary h-5 w-5" />
        Mes Équipes
      </h2>
      <button
        class="btn btn-ghost btn-sm"
        onclick={goToTeamsManagement}
        title="Voir toutes les équipes"
      >
        Voir tout
      </button>
    </div>

    {#if loading}
      <div class="flex items-center justify-center py-8">
        <span class="loading loading-spinner loading-md"></span>
      </div>
    {:else if teams.length === 0 && invitations.length === 0}
      <div class="py-6 text-center">
        <Users class="mx-auto mb-3 h-12 w-12 opacity-20" />
        <p class="text-base-content/60 text-sm">Aucune équipe ou invitation</p>
        <button
          class="btn btn-primary btn-sm mt-3"
          onclick={goToTeamsManagement}
        >
          Créer une équipe
        </button>
      </div>
    {:else}
      <div class="space-y-4">
        <!-- Équipes -->
        {#if teams.length > 0}
          <div>
            <h3 class="text-base-content/70 mb-2 text-sm font-semibold">
              Vos équipes ({teams.length})
            </h3>
            <div class="space-y-2">
              {#each teams as team (team.$id)}
                <div
                  class="bg-base-200 hover:bg-base-300 flex cursor-pointer items-center justify-between rounded-lg p-2 transition-colors"
                  onclick={() => openTeamDetailModal(team.$id)}
                  role="button"
                  tabindex="0"
                  title="Voir les détails de {team.name}"
                  onkeydown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      openTeamDetailModal(team.$id);
                    }
                  }}
                >
                  <div>
                    <div class="text-sm font-medium">{team.name}</div>
                    {#if team.total}
                      <div class="text-base-content/60 text-xs">
                        {team.total} membre{team.total > 1 ? "s" : ""}
                      </div>
                    {/if}
                  </div>
                </div>
              {/each}
            </div>
          </div>
        {/if}

        <!-- Invitations en attente -->
        {#if invitations.length > 0}
          <div>
            <h3 class="text-base-content/70 mb-2 text-sm font-semibold">
              Invitations en attente ({invitations.length})
            </h3>
            <div class="space-y-2">
              {#each invitations as invite, index (index)}
                <div
                  class="bg-accent/10 border-accent/60 flex items-center justify-between rounded-lg border p-2"
                >
                  <div class="flex-1">
                    <div class="text-sm font-medium">{invite.teamName}</div>
                    {#if invite.userName}
                      <div class="text-base-content/60 text-xs">
                        Invité par {invite.userName}
                      </div>
                    {/if}
                  </div>
                  <div class="flex gap-1">
                    <button
                      class="btn btn-success btn-xs"
                      onclick={() =>
                        acceptInvitation(invite.membershipId, invite.teamId)}
                      title="Accepter l'invitation"
                    >
                      Rejoindre l'équipe
                      <CheckCircle class="h-3 w-3" />
                    </button>
                    <!-- <button
                      class="btn btn-error btn-xs"
                      onclick={() => rejectInvitation(invite.membershipId, invite.teamId)}
                      title="Refuser l'invitation"
                    >
                      <XCircle class="h-3 w-3" />
                    </button> -->
                  </div>
                </div>
              {/each}
            </div>
          </div>
        {/if}
      </div>
    {/if}
  </div>
</div>

<!-- Modal de détails d'équipe -->
{#if selectedTeamId}
  <TeamDetailModal teamId={selectedTeamId} onClose={closeTeamDetailModal} />
{/if}
