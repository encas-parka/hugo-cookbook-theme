<!--
  InvitationPage.svelte

  Page pour gérer les invitations reçues par email

  Fonctionnalités:
  1. Afficher les détails de l'invitation
  2. Permettre d'accepter ou refuser l'invitation
  3. Rediriger vers l'événement après acceptation
-->
<script lang="ts">
  import { onMount } from "svelte";
  import { CheckCircle, XCircle, Loader2, Calendar, Users, Mail, AlertCircle } from "@lucide/svelte";
  import { globalState } from "$lib/stores/GlobalState.svelte";
  import {
    getInvitation,
    acceptInvitation,
    declineInvitation,
    type InvitationData,
  } from "$lib/services/appwrite-invitations";
  import { fade } from "svelte/transition";

  // Props du router
  let { params } = $props<{ params?: Record<string, string> }>();
  const invitationId = $derived(params?.id);

  // États
  let loading = $state(true);
  let error = $state<string | null>(null);
  let invitation = $state<InvitationData | null>(null);
  let isProcessing = $state(false);
  let decisionMade = $state(false);
  let eventData = $state<any>(null);

  // Charger les détails de l'invitation au montage du composant
  onMount(async () => {
    if (!invitationId) {
      error = "ID d'invitation manquant";
      loading = false;
      return;
    }

    try {
      // Récupérer les détails de l'invitation
      invitation = await getInvitation(invitationId);

      if (!invitation) {
        error = "Invitation introuvable ou expirée";
        loading = false;
        return;
      }

      // Si l'invitation a déjà été traitée
      if (invitation.status !== "invited") {
        decisionMade = true;

        if (invitation.status === "declined") {
          error = "Cette invitation a déjà été refusée";
        } else if (invitation.status === "accepted") {
          error = "Cette invitation a déjà été acceptée";
        }
      }

      // Récupérer les détails de l'événement
      await loadEventData();
    } catch (err) {
      console.error("Erreur lors du chargement de l'invitation:", err);
      error = "Erreur lors du chargement de l'invitation";
    } finally {
      loading = false;
    }
  });

  // Charger les détails de l'événement
  async function loadEventData() {
    if (!invitation) return;

    try {
      const response = await fetch(`/api/events/${invitation.eventId}`);
      if (!response.ok) {
        throw new Error("Événement introuvable");
      }
      eventData = await response.json();
    } catch (err) {
      console.error("Erreur lors du chargement de l'événement:", err);
      // Ne pas bloquer si l'événement n'est pas trouvé
    }
  }

  // Accepter l'invitation
  async function acceptInvitationAction() {
    if (!invitation || !invitationId || !globalState.userId) {
      error = "Erreur: utilisateur non connecté ou invitation invalide";
      return;
    }

    isProcessing = true;
    error = null;

    try {
      await acceptInvitation(invitationId, globalState.userId);
      decisionMade = true;
      error = null;

      // Rediriger vers la page de l'événement après un court délai
      setTimeout(() => {
        window.location.href = `/events/${invitation.eventId}`;
      }, 2000);
    } catch (err) {
      console.error("Erreur lors de l'acceptation:", err);
      error = "Erreur lors de l'acceptation de l'invitation";
    } finally {
      isProcessing = false;
    }
  }

  // Refuser l'invitation
  async function declineInvitationAction() {
    if (!invitation || !invitationId || !globalState.userId) {
      error = "Erreur: utilisateur non connecté ou invitation invalide";
      return;
    }

    isProcessing = true;
    error = null;

    try {
      await declineInvitation(invitationId, globalState.userId);
      decisionMade = true;
      error = null;

      // Rediriger vers la page d'accueil après un court délai
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (err) {
      console.error("Erreur lors du refus:", err);
      error = "Erreur lors du refus de l'invitation";
    } finally {
      isProcessing = false;
    }
  }
</script>

<div class="min-h-screen bg-base-200 flex items-center justify-center p-4">
  <div class="card w-full max-w-md bg-base-100 shadow-xl">
    <div class="card-body">
      <div class="flex items-center justify-center mb-4">
        <div class="bg-primary/10 rounded-full p-4">
          <Mail class="h-8 w-8 text-primary" />
        </div>
      </div>

      <h2 class="card-title justify-center text-2xl mb-2">
        Invitation à collaborer
      </h2>

      {#if loading}
        <div class="flex flex-col items-center justify-center py-8">
          <Loader2 class="h-8 w-8 animate-spin text-primary mb-2" />
          <p class="text-base-content/60">Chargement de l'invitation...</p>
        </div>
      {:else if error && decisionMade}
        <div class="alert alert-warning mb-6" transition:fade>
          <AlertCircle class="h-4 w-4" />
          <span>{error}</span>
        </div>

        <div class="card-actions justify-center">
          <button class="btn btn-primary" onclick={() => (window.location.href = "/")}>
            Retour à l'accueil
          </button>
        </div>
      {:else if error}
        <div class="alert alert-error mb-6" transition:fade>
          <AlertCircle class="h-4 w-4" />
          <span>{error}</span>
        </div>

        <div class="card-actions justify-center">
          <button class="btn btn-ghost" onclick={() => history.back()}>
            Retour
          </button>
        </div>
      {:else if invitation}
        <!-- Détails de l'invitation -->
        <div class="bg-base-200 rounded-lg p-4 mb-6">
          <div class="space-y-3">
            {#if eventData}
              <div class="flex items-start gap-3">
                <Calendar class="h-4 w-4 mt-0.5 text-base-content/60" />
                <div>
                  <p class="font-medium">Événement</p>
                  <p class="text-sm text-base-content/70">{eventData.name}</p>
                </div>
              </div>
            {/if}

            <div class="flex items-start gap-3">
              <Users class="h-4 w-4 mt-0.5 text-base-content/60" />
              <div>
                <p class="font-medium">Invité par</p>
                <p class="text-sm text-base-content/70">{invitation.invitedBy}</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <Mail class="h-4 w-4 mt-0.5 text-base-content/60" />
              <div>
                <p class="font-medium">Adresse email</p>
                <p class="text-sm text-base-content/70">{invitation.email}</p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div class="h-4 w-4 mt-0.5 text-base-content/60">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18M12 12.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <div>
                <p class="font-medium">Invité le</p>
                <p class="text-sm text-base-content/70">
                  {new Date(invitation.invitedAt).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>

        {#if decisionMade && invitation.status === "accepted"}
          <div class="alert alert-success mb-6" transition:fade>
            <CheckCircle class="h-4 w-4" />
            <span>Invitation acceptée avec succès!</span>
          </div>

          <p class="text-center text-base-content/70 mb-4">
            Vous allez être redirigé vers l'événement...
          </p>
        {:else if decisionMade && invitation.status === "declined"}
          <div class="alert alert-info mb-6" transition:fade>
            <XCircle class="h-4 w-4" />
            <span>Invitation refusée</span>
          </div>

          <p class="text-center text-base-content/70 mb-4">
            Vous allez être redirigé vers l'accueil...
          </p>
        {:else}
          <div class="card-actions justify-center gap-4">
            <button
              class="btn btn-error btn-outline"
              onclick={declineInvitationAction}
              disabled={isProcessing}
            >
              {#if isProcessing}
                <Loader2 class="h-4 w-4 animate-spin mr-2" />
              {/if}
              Refuser
            </button>

            <button
              class="btn btn-success"
              onclick={acceptInvitationAction}
              disabled={isProcessing}
            >
              {#if isProcessing}
                <Loader2 class="h-4 w-4 animate-spin mr-2" />
              {/if}
              Accepter
            </button>
          </div>
        {/if}
      {/if}
    </div>
  </div>
</div>
