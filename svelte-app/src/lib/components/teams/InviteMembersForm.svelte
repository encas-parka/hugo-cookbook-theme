<script lang="ts">
  import { Plus, Mail, UserPlus, X } from "@lucide/svelte";
  import Suggestions from "$lib/components/ui/Suggestions.svelte";
  import { teamsStore } from "$lib/stores/TeamsStore.svelte";
  import type { EnrichedTeam } from "$lib/types/aw_kteam.d";

  interface Props {
    team: EnrichedTeam;
    onSuccess?: () => void;
  }

  let { team, onSuccess }: Props = $props();

  // État du formulaire
  let emailInput = $state("");
  let invitedEmails = $state<string[]>([]);
  let customMessage = $state("");
  let loading = $state(false);
  let error = $state<string | null>(null);

  // Validation d'email
  function isValidEmail(email: string): boolean {
    return teamsStore.isValidEmail(email);
  }

  // Suggestions d'utilisateurs (TODO: implémenter la logique de récupération)
  // Pour l'instant, liste vide - à connecter avec une API pour récupérer
  // les utilisateurs des équipes communes
  const userSuggestions = $derived([]);

  // Ajouter un email à la liste
  function addEmail() {
    const trimmedEmail = emailInput.trim().toLowerCase();

    if (!trimmedEmail) {
      error = "Veuillez entrer une adresse email";
      return;
    }

    if (!isValidEmail(trimmedEmail)) {
      error = "Adresse email invalide";
      return;
    }

    // Vérifier si déjà dans la liste
    if (invitedEmails.includes(trimmedEmail)) {
      error = "Cet email est déjà dans la liste";
      return;
    }

    // Vérifier si déjà membre
    const isMember = team.members.some(
      (m) => m.name.toLowerCase() === trimmedEmail,
    );
    if (isMember) {
      error = "Cette personne est déjà membre de l'équipe";
      return;
    }

    // Vérifier si déjà invité
    const isInvited = team.invited?.some(
      (i) => i.email.toLowerCase() === trimmedEmail,
    );
    if (isInvited) {
      error = "Cette personne a déjà été invitée";
      return;
    }

    invitedEmails.push(trimmedEmail);
    emailInput = "";
    error = null;
  }

  // Retirer un email de la liste
  function removeEmail(email: string) {
    invitedEmails = invitedEmails.filter((e) => e !== email);
  }

  // Envoyer les invitations
  async function sendInvitations() {
    if (invitedEmails.length === 0) {
      error = "Veuillez ajouter au moins une adresse email";
      return;
    }

    loading = true;
    error = null;

    try {
      await teamsStore.inviteTeamMember(
        team.$id,
        invitedEmails,
        customMessage || undefined,
      );

      // Réinitialiser le formulaire
      invitedEmails = [];
      customMessage = "";

      onSuccess?.();
    } catch (err: any) {
      error = err.message || "Erreur lors de l'envoi des invitations";
      console.error("[InviteMembersForm] Erreur:", err);
    } finally {
      loading = false;
    }
  }

  // Gestion de la touche Entrée
  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Enter") {
      e.preventDefault();
      addEmail();
    }
  }
</script>

<div class="space-y-4">
  <!-- Input email avec bouton d'ajout -->
  <div class="flex gap-2">
    <label class="input flex-1">
      <Mail class="h-4 w-4 opacity-50" />
      <input
        type="email"
        bind:value={emailInput}
        placeholder="email@example.com"
        disabled={loading}
        onkeydown={handleKeydown}
      />
    </label>
    <button
      class="btn btn-primary"
      onclick={addEmail}
      disabled={loading || !emailInput.trim()}
      title="Ajouter à la liste"
    >
      <UserPlus class="h-5 w-5" />
    </button>
  </div>

  <!-- Suggestions (si disponibles) -->
  {#if userSuggestions.length > 0}
    <Suggestions
      suggestions={userSuggestions}
      onSuggestionClick={(s) => {
        emailInput = s.label;
        addEmail();
      }}
      title="Suggestions"
      buttonSize="btn-sm"
    />
  {/if}

  <!-- Message d'erreur -->
  {#if error}
    <div class="alert alert-error">
      <span class="text-sm">{error}</span>
    </div>
  {/if}

  <!-- Liste des emails ajoutés -->
  {#if invitedEmails.length > 0}
    <div>
      <div class="mb-2 text-sm font-medium opacity-70">
        Personnes à inviter ({invitedEmails.length})
      </div>
      <div class="flex flex-wrap gap-2">
        {#each invitedEmails as email (email)}
          <div class="badge badge-primary badge-lg gap-2">
            <Mail class="h-3 w-3" />
            {email}
            <button
              class="btn btn-circle btn-ghost btn-xs"
              onclick={() => removeEmail(email)}
              disabled={loading}
              title="Retirer"
            >
              <X class="h-3 w-3" />
            </button>
          </div>
        {/each}
      </div>
    </div>
  {/if}

  <!-- Message personnalisé -->
  <div>
    <label class="label" for="invite-message">
      <span class="label-text">Message personnalisé (optionnel)</span>
    </label>
    <textarea
      id="invite-message"
      class="textarea textarea-bordered w-full"
      bind:value={customMessage}
      placeholder="Ajoutez un message pour les personnes invitées..."
      rows="3"
      maxlength="200"
      disabled={loading}
    ></textarea>
    <span class="label label-text-alt opacity-50"
      >{customMessage.length}/200 caractères</span
    >
  </div>

  <!-- Bouton d'envoi -->
  <div class="flex justify-end">
    <button
      class="btn btn-primary"
      onclick={sendInvitations}
      disabled={loading || invitedEmails.length === 0}
    >
      {#if loading}
        <span class="loading loading-spinner loading-sm"></span>
      {:else}
        <UserPlus class="h-5 w-5" />
      {/if}
      Envoyer {invitedEmails.length > 0
        ? `${invitedEmails.length} invitation${invitedEmails.length > 1 ? "s" : ""}`
        : "les invitations"}
    </button>
  </div>
</div>
