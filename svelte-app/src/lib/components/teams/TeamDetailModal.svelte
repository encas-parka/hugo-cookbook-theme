<script lang="ts">
  import { X, Users, Mail, Settings, Trash2 } from "@lucide/svelte";
  import type { EnrichedNativeTeam as EnrichedTeam } from "$lib/types/aw_native_team.d";
  import { nativeTeamsStore as teamsStore } from "$lib/stores/NativeTeamsStore.svelte";
  import { globalState } from "$lib/stores/GlobalState.svelte";
  import TeamMembersList from "./TeamMembersList.svelte";
  import TeamInvitationsList from "./TeamInvitationsList.svelte";
  import ConfirmModal from "$lib/components/ui/ConfirmModal.svelte";
  import ModalContainer from "$lib/components/ui/modal/ModalContainer.svelte";
  import ModalHeader from "$lib/components/ui/modal/ModalHeader.svelte";
  import ModalContent from "$lib/components/ui/modal/ModalContent.svelte";
  import ModalFooter from "$lib/components/ui/modal/ModalFooter.svelte";

  interface Props {
    teamId: string | null;
    onClose: () => void;
  }

  let { teamId, onClose }: Props = $props();

  // État du modal
  let currentTab = $state<"members" | "invitations" | "settings">("members");
  let confirmDeleteTeam = $state(false);
  let loading = $state(false);

  // Équipe actuelle
  const team = $derived(teamId ? teamsStore.getTeamById(teamId) : null);

  // Rôle de l'utilisateur
  const userRole = $derived.by(() => {
    if (!team || !globalState.userId) return null;
    const member = team.members.find((m) => m.id === globalState.userId);
    return member?.roles?.[0] || null;
  });

  const isOwner = $derived(userRole === "owner");
  const canEdit = $derived(isOwner); // Dans les Teams natives, seul l'owner édite pour l'instant

  // État du formulaire de paramètres
  let editName = $state("");
  let editDescription = $state("");
  let hasChanges = $state(false);

  // Initialiser les valeurs d'édition
  $effect(() => {
    if (team) {
      editName = team.name;
      editDescription = (team.prefs?.description as string) || "";
      hasChanges = false;
    }
  });

  // Détecter les changements
  $effect(() => {
    if (team) {
      hasChanges =
        editName !== team.name ||
        editDescription !== ((team.prefs?.description as string) || "");
    }
  });

  // Sauvegarder les modifications
  async function saveSettings() {
    if (!team || !hasChanges) return;

    loading = true;
    try {
      await teamsStore.updateTeam(team.$id, editName.trim() || undefined, {
        description: editDescription.trim() || undefined,
      });
      hasChanges = false;
    } catch (err: any) {
      console.error("[TeamDetailModal] Erreur sauvegarde:", err);
      alert("Erreur lors de la sauvegarde");
    } finally {
      loading = false;
    }
  }

  // Supprimer l'équipe
  async function deleteTeam() {
    if (!team) return;

    loading = true;
    try {
      await teamsStore.deleteTeam(team.$id);
      confirmDeleteTeam = false;
      onClose();
    } catch (err: any) {
      console.error("[TeamDetailModal] Erreur suppression:", err);
      alert("Erreur lors de la suppression de l'équipe");
    } finally {
      loading = false;
    }
  }

  // Rafraîchir après modification
  async function handleMemberChange() {
    if (teamId) {
      await teamsStore.fetchTeam(teamId);
    }
  }

  async function handleInvitationSent() {
    if (teamId) {
      await teamsStore.fetchTeam(teamId);
    }
  }
</script>

<ModalContainer isOpen={teamId !== null} {onClose}>
  {#if team}
    <ModalHeader title={team.name} subtitle={team.description} {onClose}>
      <!-- {#if isOwner}
        <button
          class="btn btn-error btn-sm"
          onclick={() => (confirmDeleteTeam = true)}
          disabled={loading}
          title="Supprimer l'équipe"
        >
          <Trash2 class="h-4 w-4" />
        </button>
      {/if} -->
    </ModalHeader>

    <ModalContent>
      <!-- Onglets -->
      <div class="tabs tabs-border mb-6 flex-none" role="tablist">
        <button
          role="tab"
          class="tab {currentTab === 'members' ? 'tab-active' : ''}"
          onclick={() => (currentTab = "members")}
        >
          <Users class="mr-1 h-5 w-5" />
          Membres
          <span class="badge badge-sm badge-secondary ml-1">
            {team.members.length}
          </span>
        </button>

        <button
          role="tab"
          class="tab {currentTab === 'invitations' ? 'tab-active' : ''}"
          onclick={() => (currentTab = "invitations")}
        >
          <Mail class="mr-1 h-5 w-5" />
          Invitations
        </button>

        {#if canEdit}
          <button
            role="tab"
            class="tab {currentTab === 'settings' ? 'tab-active' : ''}"
            onclick={() => (currentTab = "settings")}
          >
            <Settings class="mr-1 h-5 w-5" />
            Paramètres
            {#if hasChanges}
              <div class="bg-warning ml-1 h-2 w-2 rounded-full"></div>
            {/if}
          </button>
        {/if}
      </div>

      <!-- Contenu -->
      {#key currentTab}
        {#if currentTab === "members"}
          <TeamMembersList {team} onMemberRemoved={handleMemberChange} />
        {:else if currentTab === "invitations"}
          <TeamInvitationsList {team} onInvitationSent={handleInvitationSent} />
        {:else if currentTab === "settings" && canEdit}
          <!-- Paramètres -->
          <div class="space-y-4">
            <div>
              <label class="label" for="team-name-input">
                <span class="label-text">Nom de l'équipe</span>
              </label>
              <input
                id="team-name-input"
                type="text"
                class="input input-bordered w-full"
                bind:value={editName}
                placeholder="Nom de l'équipe"
                maxlength="50"
                disabled={loading}
              />
            </div>

            <div>
              <label class="label" for="team-description-input">
                <span class="label-text">Description</span>
              </label>
              <textarea
                id="team-description-input"
                class="textarea textarea-bordered w-full"
                bind:value={editDescription}
                placeholder="Description de l'équipe"
                rows="3"
                maxlength="200"
                disabled={loading}
              ></textarea>
            </div>

            <div class="flex justify-end">
              <button
                class="btn btn-primary"
                onclick={saveSettings}
                disabled={loading || !hasChanges}
              >
                {#if loading}
                  <span class="loading loading-spinner loading-sm"></span>
                {:else}
                  Enregistrer
                {/if}
              </button>
            </div>
          </div>
        {/if}
      {/key}
    </ModalContent>

    <ModalFooter>
      <button class="btn btn-ghost" onclick={onClose}>Fermer</button>
    </ModalFooter>
  {/if}
</ModalContainer>

<!-- Modal de confirmation - Suppression équipe -->
<ConfirmModal
  isOpen={confirmDeleteTeam}
  title="Supprimer l'équipe"
  message="Êtes-vous sûr de vouloir supprimer définitivement cette équipe ? Tous les membres seront retirés et cette action est irréversible."
  variant="danger"
  confirmLabel="Supprimer définitivement"
  cancelLabel="Annuler"
  onConfirm={deleteTeam}
  onCancel={() => (confirmDeleteTeam = false)}
/>
