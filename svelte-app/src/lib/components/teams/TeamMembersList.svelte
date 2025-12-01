<script lang="ts">
  import { Users, Crown, Shield, UserMinus, LogOut } from "@lucide/svelte";
  import type { EnrichedTeam } from "$lib/types/aw_kteam.d";
  import { globalState } from "$lib/stores/GlobalState.svelte";
  import { teamsStore } from "$lib/stores/TeamsStore.svelte";
  import ConfirmModal from "$lib/components/ui/ConfirmModal.svelte";

  interface Props {
    team: EnrichedTeam;
    onMemberRemoved?: () => void;
  }

  let { team, onMemberRemoved }: Props = $props();

  // État des modals de confirmation
  let confirmRemoveMember = $state<{
    isOpen: boolean;
    memberId: string | null;
    memberName: string | null;
  }>({ isOpen: false, memberId: null, memberName: null });

  let confirmLeaveTeam = $state(false);
  let loading = $state(false);

  // Utilisateur actuel
  const currentUserId = $derived(globalState.userId);

  // Rôle de l'utilisateur actuel
  const currentUserRole = $derived(() => {
    if (!currentUserId) return null;
    const member = team.members.find((m) => m.id === currentUserId);
    return member?.role || null;
  });

  // Peut gérer les membres (owner ou admin)
  const canManageMembers = $derived(
    currentUserRole() === "owner" || currentUserRole() === "admin",
  );

  // Formater la date
  function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  // Ouvrir la confirmation de suppression
  function openRemoveConfirm(memberId: string, memberName: string) {
    confirmRemoveMember = { isOpen: true, memberId, memberName };
  }

  // Supprimer un membre
  async function removeMember() {
    if (!confirmRemoveMember.memberId) return;

    loading = true;
    try {
      await teamsStore.removeMember(team.$id, confirmRemoveMember.memberId);
      confirmRemoveMember = { isOpen: false, memberId: null, memberName: null };
      onMemberRemoved?.();
    } catch (err: any) {
      console.error("[TeamMembersList] Erreur suppression:", err);
      alert("Erreur lors de la suppression du membre");
    } finally {
      loading = false;
    }
  }

  // Quitter l'équipe
  async function leaveTeam() {
    if (!currentUserId) return;

    loading = true;
    try {
      await teamsStore.removeMember(team.$id, currentUserId);
      confirmLeaveTeam = false;
      onMemberRemoved?.();
    } catch (err: any) {
      console.error("[TeamMembersList] Erreur désinscription:", err);
      alert("Erreur lors de la désinscription");
    } finally {
      loading = false;
    }
  }

  // Icône et couleur selon le rôle
  function getRoleIcon(role: string) {
    return role === "owner" ? Crown : role === "admin" ? Shield : Users;
  }

  function getRoleBadgeClass(role: string) {
    return role === "owner"
      ? "badge-primary"
      : role === "admin"
        ? "badge-secondary"
        : "badge-ghost";
  }

  function getRoleLabel(role: string) {
    return role === "owner"
      ? "Propriétaire"
      : role === "admin"
        ? "Administrateur"
        : "Membre";
  }
</script>

<div class="space-y-4">
  <!-- Liste des membres -->
  {#if team.members.length === 0}
    <div class="py-8 text-center opacity-50">
      <Users class="mx-auto mb-2 h-8 w-8" />
      <p class="text-sm">Aucun membre</p>
    </div>
  {:else}
    <div class="space-y-2">
      {#each team.members as member (member.id)}
        {@const RoleIcon = getRoleIcon(member.role)}
        {@const isCurrentUser = member.id === currentUserId}
        {@const canRemove = canManageMembers && !isCurrentUser}

        <div
          class="card bg-base-100 border-base-200 border p-4 transition-shadow hover:shadow-md"
        >
          <div class="flex items-center justify-between gap-4">
            <!-- Avatar et infos -->
            <div class="flex flex-1 items-center gap-3">
              <!-- Avatar avec initiales -->
              <div class="avatar placeholder">
                <div class="bg-neutral text-neutral-content w-12 rounded-full">
                  <span class="text-lg">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()
                      .slice(0, 2)}
                  </span>
                </div>
              </div>

              <!-- Nom et rôle -->
              <div class="flex-1">
                <div class="font-medium">
                  {member.name}
                  {#if isCurrentUser}
                    <span class="text-xs opacity-50">(vous)</span>
                  {/if}
                </div>
                <div class="text-sm opacity-70">
                  Membre depuis {formatDate(member.joinedAt)}
                </div>
              </div>
            </div>

            <!-- Badge de rôle -->
            <div class="badge {getRoleBadgeClass(member.role)} gap-1">
              <RoleIcon class="h-3 w-3" />
              {getRoleLabel(member.role)}
            </div>

            <!-- Actions -->
            <div class="flex gap-2">
              {#if isCurrentUser && member.role !== "owner"}
                <!-- Bouton de désinscription -->
                <button
                  class="btn btn-error btn-sm"
                  onclick={() => (confirmLeaveTeam = true)}
                  disabled={loading}
                  title="Quitter l'équipe"
                >
                  <LogOut class="h-4 w-4" />
                </button>
              {:else if canRemove}
                <!-- Bouton de suppression -->
                <button
                  class="btn btn-error btn-sm"
                  onclick={() => openRemoveConfirm(member.id, member.name)}
                  disabled={loading}
                  title="Retirer ce membre"
                >
                  <UserMinus class="h-4 w-4" />
                </button>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>

<!-- Modal de confirmation - Suppression membre -->
<ConfirmModal
  isOpen={confirmRemoveMember.isOpen}
  title="Retirer un membre"
  message="Êtes-vous sûr de vouloir retirer {confirmRemoveMember.memberName} de l'équipe ? Cette action est irréversible."
  variant="warning"
  confirmLabel="Retirer"
  cancelLabel="Annuler"
  onConfirm={removeMember}
  onCancel={() =>
    (confirmRemoveMember = { isOpen: false, memberId: null, memberName: null })}
/>

<!-- Modal de confirmation - Quitter l'équipe -->
<ConfirmModal
  isOpen={confirmLeaveTeam}
  title="Quitter l'équipe"
  message="Êtes-vous sûr de vouloir quitter cette équipe ? Vous devrez être réinvité pour y revenir."
  variant="warning"
  confirmLabel="Quitter"
  cancelLabel="Annuler"
  onConfirm={leaveTeam}
  onCancel={() => (confirmLeaveTeam = false)}
/>
