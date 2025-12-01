<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { EmailService } from "$lib/services/invite/EmailService.svelte";
  import { AppwriteService } from "$lib/services/appwrite.svelte";
  import { globalState } from "$lib/stores/GlobalState.svelte";

  // Props
  let { teamId, teamName } = $props();

  // États (Svelte 5 Runes)
  let email = $state("");
  let loading = $state(false);
  let message = $state("");
  let messageType = $state<"success" | "error">("success");

  const dispatch = createEventDispatcher();

  async function sendInvitation() {
    if (!email) {
      message = "Veuillez saisir une adresse email";
      messageType = "error";
      return;
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      message = "Veuillez saisir une adresse email valide";
      messageType = "error";
      return;
    }

    loading = true;
    message = "";

    try {
      // Récupérer le nom de l'utilisateur actuel
      const currentUser = await globalState.getCurrentUser();
      const inviterName = currentUser?.name || "Un membre";

      // Construire l'URL de base de l'application
      const baseUrl = window.location.origin;

      // Envoyer l'invitation
      const result = await EmailService.createAndSendInvitation(
        "", // userId sera généré dans le service
        email,
        teamId,
        teamName,
        inviterName,
        baseUrl
      );

      if (result.success) {
        message = `Invitation envoyée avec succès à ${email}`;
        messageType = "success";
        email = ""; // Réinitialiser le champ email
        dispatch("invite-sent", { email });
      } else {
        message = `Erreur lors de l'envoi de l'invitation: ${result.message}`;
        messageType = "error";
      }
    } catch (error: any) {
      console.error("Erreur lors de l'envoi de l'invitation:", error);
      message = `Erreur: ${error.message || "Une erreur inconnue s'est produite"}`;
      messageType = "error";
    } finally {
      loading = false;
    }
  }
</script>

<div class="card bg-base-100 shadow-lg">
  <div class="card-body">
    <h2 class="card-title">Inviter un membre</h2>

    <div class="form-control">
      <label class="label">
        <span class="label-text">Adresse email</span>
      </label>
      <input
        type="email"
        placeholder="nom@exemple.com"
        class="input input-bordered w-full"
        bind:value={email}
        disabled={loading}
      />
    </div>

    {#if message}
      <div class="alert {messageType === 'error' ? 'alert-error' : 'alert-success'}">
        <span>{message}</span>
      </div>
    {/if}

    <div class="card-actions justify-end">
      <button
        class="btn btn-primary"
        onclick={sendInvitation}
        disabled={loading || !email}
      >
        {#if loading}
          <span class="loading loading-spinner loading-sm"></span>
          Envoi en cours...
        {:else}
          Envoyer l'invitation
        {/if}
      </button>
    </div>
  </div>
</div>

<style>
</style>
