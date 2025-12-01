<script lang="ts">
  import { X, Plus } from "@lucide/svelte";
  import { teamsStore } from "$lib/stores/TeamsStore.svelte";
  import InviteMembersForm from "./InviteMembersForm.svelte";

  interface Props {
    isOpen: boolean;
    onClose: () => void;
    onSuccess?: (teamId: string) => void;
  }

  let { isOpen, onClose, onSuccess }: Props = $props();

  // État du formulaire
  let teamName = $state("");
  let teamDescription = $state("");
  let loading = $state(false);
  let error = $state<string | null>(null);
  let step = $state<"create" | "invite">("create");
  let createdTeamId = $state<string | null>(null);

  // Réinitialiser le formulaire
  function resetForm() {
    teamName = "";
    teamDescription = "";
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
      const team = await teamsStore.createTeam(
        teamName.trim(),
        teamDescription.trim() || undefined,
      );

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

<div class="modal {isOpen && 'modal-open'}">
  <div class="modal-box max-w-2xl">
    <!-- Header -->
    <div class="mb-4 flex items-center justify-between">
      <h3 class="text-lg font-bold">
        {step === "create" ? "Créer une équipe" : "Inviter des membres"}
      </h3>
      <button
        class="btn btn-circle btn-ghost btn-sm"
        onclick={handleClose}
        aria-label="Fermer"
      >
        <X class="h-4 w-4" />
      </button>
    </div>

    <!-- Contenu -->
    {#if step === "create"}
      <!-- Étape 1: Création de l'équipe -->
      <div class="space-y-4">
        <!-- Nom de l'équipe -->
        <div>
          <label class="label">
            <span class="label-text">Nom de l'équipe *</span>
          </label>
          <input
            type="text"
            class="input input-bordered w-full"
            bind:value={teamName}
            placeholder="Ex: Équipe Marketing"
            maxlength="50"
            disabled={loading}
            onkeydown={handleKeydown}
            autofocus
          />
          <label class="label">
            <span class="label-text-alt opacity-50"
              >{teamName.length}/50 caractères</span
            >
          </label>
        </div>

        <!-- Description -->
        <div>
          <label class="label">
            <span class="label-text">Description (optionnel)</span>
          </label>
          <textarea
            class="textarea textarea-bordered w-full"
            bind:value={teamDescription}
            placeholder="Décrivez l'objectif de cette équipe..."
            rows="3"
            maxlength="200"
            disabled={loading}
          ></textarea>
          <label class="label">
            <span class="label-text-alt opacity-50"
              >{teamDescription.length}/200 caractères</span
            >
          </label>
        </div>

        <!-- Message d'erreur -->
        {#if error}
          <div class="alert alert-error">
            <span class="text-sm">{error}</span>
          </div>
        {/if}
      </div>

      <!-- Actions -->
      <div class="modal-action">
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
      </div>
    {:else if step === "invite" && createdTeamId}
      <!-- Étape 2: Invitation de membres -->
      {@const team = teamsStore.getTeamById(createdTeamId)}
      {#if team}
        <div class="mb-4">
          <div class="alert alert-success">
            <span>Équipe "{team.name}" créée avec succès !</span>
          </div>
        </div>

        <InviteMembersForm {team} onSuccess={finalize} />

        <!-- Actions -->
        <div class="modal-action">
          <button class="btn btn-ghost" onclick={finalize}>
            Passer cette étape
          </button>
        </div>
      {/if}
    {/if}
  </div>
</div>
