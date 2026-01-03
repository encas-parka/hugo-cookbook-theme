<script lang="ts">
  import { Users, Crown, Shield, ChevronRight } from "@lucide/svelte";
  import type { EnrichedTeam } from "$lib/types/aw_kteam.d";
  import { globalState } from "$lib/stores/GlobalState.svelte";
  import { teamsStore } from "$lib/stores/TeamsStore.svelte";

  interface Props {
    team: EnrichedTeam;
    teamId: string;
    onClick: (teamId: string) => void;
  }

  let { team, teamId, onClick }: Props = $props();

  // Détermine le rôle de l'utilisateur dans cette équipe
  const userRole = $derived.by(() => {
    const currentUserId = globalState.userId;
    if (!currentUserId) return null;

    const member = team.members.find((m) => m.id === currentUserId);
    return member?.role || null;
  });

  // Icône du rôle
  const RoleIcon = $derived(
    userRole === "owner" ? Crown : userRole === "admin" ? Shield : null,
  );

  // Couleur du badge selon le rôle
  const roleBadgeClass = $derived(
    userRole === "owner"
      ? "badge-primary"
      : userRole === "admin"
        ? "badge-secondary"
        : "badge-ghost",
  );

  // Nombre d'invitations en attente
  const pendingInvitationsCount = $derived(team.invited?.length || 0);

  // ================================
  // Invitation
  // ================================

  const isUserInvited = $derived(
    team.invited.find((i) => i.id === globalState.userId) !== undefined,
  );

  async function declineInvitation() {
    await teamsStore.declineTeamInvitation(teamId);
  }

  async function acceptInvitation() {
    await teamsStore.acceptTeamInvitation(teamId);
  }
</script>

<div
  class="card bg-base-100 border-base-200 hover:border-primary/50 group cursor-pointer border text-left shadow-xl transition-all hover:shadow-2xl"
  role="button"
  tabindex="0"
  onclick={() => onClick(team.$id)}
  onkeydown={(e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick(team.$id);
    }
  }}
>
  <div class="card-body">
    <!-- Header avec nom et rôle -->
    <div class="mb-2 flex items-start justify-between">
      <h3 class="card-title group-hover:text-primary text-lg transition-colors">
        {team.name}
      </h3>
      <!-- {#if userRole}
        <div class="badge {roleBadgeClass} gap-1">
          {#if RoleIcon}
            <RoleIcon class="h-3 w-3" />
          {/if}
          {userRole}
        </div>
      {/if} -->
    </div>

    <!-- Description -->
    {#if team.description}
      <p class="text-base-content/70 mb-2 line-clamp-2 text-sm">
        {team.description}
      </p>
    {/if}

    {#if isUserInvited}
      <div class="card border-info bg-info/10 flex flex-col gap-2 border-2 p-2">
        <p class="text-center">Vous avez été invité à rejoindre l'équipe !</p>
        <div class="flex justify-center gap-4">
          <button
            class="btn btn-ghost btn-sm"
            onclick={(e) => {
              e.stopPropagation();
              declineInvitation();
            }}
          >
            Décliner
          </button>
          <button
            class="btn btn-primary btn-sm"
            onclick={(e) => {
              e.stopPropagation();
              acceptInvitation();
            }}
          >
            Accepter l'invitation
          </button>
        </div>
      </div>
    {/if}
    <!-- Stats -->
    <div class="text-base-content/70 mt-2 flex items-center gap-4 text-sm">
      <div class="flex items-center gap-1">
        <Users class="h-4 w-4" />
        <span
          >{team.members.length} membre{team.members.length > 1
            ? "s"
            : ""}</span
        >
      </div>
      {#if userRole && pendingInvitationsCount > 0}
        <div class="badge badge-warning badge-sm gap-1">
          {pendingInvitationsCount} invitation{pendingInvitationsCount > 1
            ? "s"
            : ""}
        </div>
      {/if}
    </div>

    <!-- Action -->
    <div class="card-actions mt-4 justify-end">
      <span
        class="text-primary flex items-center gap-1 text-xs font-semibold opacity-0 transition-opacity group-hover:opacity-100"
      >
        Gérer
        <ChevronRight class="h-4 w-4" />
      </span>
    </div>
  </div>
</div>
