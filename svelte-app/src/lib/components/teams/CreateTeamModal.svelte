<script lang="ts">
  import { X, Plus, MapPin, Building2, Globe } from "@lucide/svelte";
  import { nativeTeamsStore as teamsStore } from "$lib/stores/NativeTeamsStore.svelte";
  import InviteMembersForm from "./InviteMembersForm.svelte";
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
        <!-- Nom de l'équipe -->
        <fieldset class="fieldset">
          <legend class="fieldset-legend">Nom de l'équipe *</legend>
          <label class="input">
            <input
              type="text"
              bind:value={teamName}
              placeholder="Ex: Équipe Marketing"
              maxlength="50"
              disabled={loading}
              onkeydown={handleKeydown}
            />
          </label>
          <span class="fieldset-label text-xs opacity-50"
            >{teamName.length}/50 caractères</span
          >
        </fieldset>

        <!-- Description -->
        <fieldset class="fieldset">
          <legend class="fieldset-legend">Description</legend>
          <textarea
            class="textarea w-full"
            bind:value={teamDescription}
            rows="3"
            maxlength="350"
            disabled={loading}
          ></textarea>
          <span class="fieldset-label text-xs opacity-50"
            >{teamDescription.length}/350 caractères</span
          >
        </fieldset>

        <!-- Localisation -->
        <div class="grid grid-cols-2 gap-4">
          <fieldset class="fieldset">
            <legend class="fieldset-legend flex items-center gap-1">
              <MapPin class="h-4 w-4" />
              Département
            </legend>
            <label class="input">
              <input
                type="text"
                bind:value={teamLocation}
                placeholder="Ex: Île-de-France"
                maxlength="50"
                disabled={loading}
              />
            </label>
          </fieldset>

          <fieldset class="fieldset">
            <legend class="fieldset-legend flex items-center gap-1">
              <Building2 class="h-4 w-4" />
              Ville
            </legend>
            <label class="input">
              <input
                type="text"
                bind:value={teamCity}
                placeholder="Ex: Paris"
                maxlength="50"
                disabled={loading}
              />
            </label>
          </fieldset>
        </div>

        <!-- Équipe publique -->
        <!-- <div class="">
          <label class="label cursor-pointer justify-start gap-3">
            <input
              type="checkbox"
              class="toggle toggle-primary"
              bind:checked={teamIsPublic}
              disabled={loading}
            />
            <span class="label-text flex items-center gap-2">
              <Globe class="h-4 w-4" />
              Équipe publique
            </span>
          </label>
          <p class="ml-12 text-xs opacity-60">
            Les équipes publiques sont visibles par tous les utilisateurs de la
            plateforme.
          </p>
        </div> -->

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
