<script lang="ts">
  import { X, Plus, Globe } from "@lucide/svelte";
  import { nativeTeamsStore as teamsStore } from "$lib/stores/NativeTeamsStore.svelte";
  import InviteMembersForm from "./InviteMembersForm.svelte";
  import TeamFormFields from "./TeamFormFields.svelte";
  import ModalContainer from "$lib/components/ui/modal/ModalContainer.svelte";
  import ModalHeader from "$lib/components/ui/modal/ModalHeader.svelte";
  import ModalContent from "$lib/components/ui/modal/ModalContent.svelte";
  import ModalFooter from "$lib/components/ui/modal/ModalFooter.svelte";

  interface Props {
    isOpen: boolean;
    onClose: () => void;
    onSuccess?: (teamId: string) => void;
  }

  let { isOpen, onClose, onSuccess }: Props = $props();

  // État du formulaire
  let teamName = $state("");
  let teamDescription = $state("");
  let teamLocation = $state("");
  let teamCity = $state("");
  let teamIsPublic = $state(false);
  let loading = $state(false);
  let error = $state<string | null>(null);
  let step = $state<"create" | "invite">("create");
  let createdTeamId = $state<string | null>(null);

  // Réinitialiser le formulaire
  function resetForm() {
    teamName = "";
    teamDescription = "";
    teamLocation = "";
    teamCity = "";
    teamIsPublic = false;
    error = null;
    step = "create";
    createdTeamId = null;
  }

  // Créer l'équipe
  async function createTeam() {
    if (!teamName.trim()) {
      error = "Le nom de l'équipe est requis";
      return;
    }

    loading = true;
    error = null;

    try {
      const prefs = {
        description: teamDescription.trim() || undefined,
        location: teamLocation.trim() || undefined,
        city: teamCity.trim() || undefined,
        isPublic: teamIsPublic,
      };

      const team = await teamsStore.createTeam(teamName.trim(), prefs);

      createdTeamId = team.$id;

      // Basculer vers le formulaire d'invitation
      step = "invite";
    } catch (err: any) {
      error = err.message || "Erreur lors de la création de l'équipe";
      console.error("[CreateTeamModal] Erreur:", err);
    } finally {
      loading = false;
    }
  }

  // Finaliser (après invitations ou skip)
  function finalize() {
    if (createdTeamId) {
      onSuccess?.(createdTeamId);
    }
    resetForm();
    onClose();
  }

  // Fermer et réinitialiser
  function handleClose() {
    resetForm();
    onClose();
  }

  // Gestion de la touche Entrée
  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Enter" && step === "create") {
      e.preventDefault();
      createTeam();
    }
  }
</script>

<ModalContainer {isOpen} onClose={handleClose}>
  {#if step === "create"}
    <ModalHeader title="Créer une équipe" onClose={handleClose} />

    <ModalContent>
      <form onsubmit={(e) => e.preventDefault()} class="space-y-4">
        <!-- Formulaire d'équipe -->
        <TeamFormFields
          bind:name={teamName}
          bind:description={teamDescription}
          bind:location={teamLocation}
          bind:city={teamCity}
          showLocation={true}
          disabled={loading}
          onNameKeydown={handleKeydown}
        />

        <!-- Message d'erreur -->
        {#if error}
          <div class="alert alert-error">
            <span class="text-sm">{error}</span>
          </div>
        {/if}
      </form>
    </ModalContent>

    <ModalFooter>
      <button class="btn btn-ghost" onclick={handleClose} disabled={loading}>
        Annuler
      </button>
      <button
        class="btn btn-primary"
        onclick={createTeam}
        disabled={loading || !teamName.trim()}
      >
        {#if loading}
          <span class="loading loading-spinner loading-sm"></span>
        {:else}
          <Plus class="h-5 w-5" />
        {/if}
        Créer l'équipe
      </button>
    </ModalFooter>
  {:else if step === "invite" && createdTeamId}
    <!-- Étape 2: Invitation de membres -->
    {@const team = teamsStore.getTeamById(createdTeamId)}
    {#if team}
      <ModalHeader title="Inviter des membres" onClose={handleClose} />

      <ModalContent>
        <div class="mb-4">
          <div class="alert alert-success alert-soft flex flex-col">
            <p>Équipe "{team.name}" créée avec succès !</p>
            <p>Ajoutez les email des personnes que vous souhaitez inviter</p>
          </div>
        </div>

        <InviteMembersForm {team} onSuccess={finalize} />
      </ModalContent>

      <ModalFooter>
        <button class="btn btn-ghost" onclick={finalize}>
          Passer cette étape
        </button>
      </ModalFooter>
    {/if}
  {/if}
</ModalContainer>
