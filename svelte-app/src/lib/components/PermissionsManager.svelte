<script lang="ts">
  import { Users, UserPlus, Mail, Check, PencilLine } from "@lucide/svelte";
  import type { EventContributor } from "$lib/types/events";
  import type { NativeTeamsStore } from "$lib/stores/NativeTeamsStore.svelte";
  import type { EventsStore } from "$lib/stores/EventsStore.svelte";
  import { nanoid } from "nanoid";
  import { checkUserEmails } from "$lib/services/appwrite-functions";
  import { toastService } from "$lib/services/toast.service.svelte";
  import ModalContainer from "$lib/components/ui/modal/ModalContainer.svelte";
  import ModalHeader from "$lib/components/ui/modal/ModalHeader.svelte";
  import ModalContent from "$lib/components/ui/modal/ModalContent.svelte";
  import ModalFooter from "$lib/components/ui/modal/ModalFooter.svelte";
  import Fieldset from "$lib/components/ui/Fieldset.svelte";

  // Interface des props
  interface Props {
    minContrib: number;
    canEdit: boolean;
    contributors: EventContributor[]; // Contributeurs DÉJÀ enregistrés (lecture seule)
    nativeTeamsStore: NativeTeamsStore; // Store des teams natives
    eventsStore: EventsStore;
    userId: string;
    eventId?: string;
    onStartEdit: () => void;
  }

  // Props
  let {
    minContrib = $bindable(),
    canEdit,
    contributors, // Lecture seule - vient du parent via $derived
    nativeTeamsStore,
    eventsStore,
    userId = "",
    eventId = "",
    onStartEdit = () => {},
  }: Props = $props();

  // État local - géré entièrement dans ce composant
  let selectedTeams = $state<string[]>([]);
  let newContributors = $state<EventContributor[]>([]);

  // État local pour le modal
  let showInviteModal = $state(false);
  let editingMinContrib = $state(false);

  // Synchroniser selectedTeams depuis les permissions de l'événement
  $effect(() => {
    if (eventId) {
      const event = eventsStore.getEventById(eventId);
      if (event && event.$permissions) {
        // Extraire les teamIds depuis les permissions
        const teamIds =
          event.$permissions
            ?.filter((p) => p.includes("team:"))
            .map((p) => p.match(/team:([a-z0-9]+)/i)?.[1])
            .filter(Boolean) || [];
        selectedTeams = teamIds;
      }
    }
  });

  // Reset newContributors quand le modal se ferme
  $effect(() => {
    if (!showInviteModal) {
      newContributors = [];
    }
  });

  let emailInput = $state("");
  let isChecking = $state(false);
  let inviteError = $state<string | null>(null);

  // Groupes de contributeurs pour l'affichage
  let acceptedContributors = $derived(
    contributors.filter((c) => c.status === "accepted"),
  );
  let invitedContributors = $derived(
    contributors.filter((c) => c.status === "invited"),
  );

  // Fonction pour toggle une team
  function toggleTeam(teamId: string) {
    if (selectedTeams.includes(teamId)) {
      selectedTeams = selectedTeams.filter((id) => id !== teamId);
    } else {
      selectedTeams = [...selectedTeams, teamId];
    }
  }

  // Ajouter par email (avec vérification)
  async function handleAddEmail() {
    if (!emailInput) return;
    const email = emailInput.trim();

    // Vérif doublons (contributors + newContributors)
    if (
      contributors.some((c) => c.email === email) ||
      newContributors.some((c) => c.email === email)
    ) {
      inviteError = "Cet email est déjà invité.";
      return;
    }

    isChecking = true;
    inviteError = null;

    try {
      // Vérifier si l'utilisateur existe
      const checkResult = await checkUserEmails([email]);
      const userInfo = checkResult[email];

      let newContributor: EventContributor;

      if (userInfo) {
        // Utilisateur existant
        newContributor = {
          id: userInfo.id,
          name: userInfo.name,
          email: email,
          status: "invited",
          invitedAt: new Date().toISOString(),
        };
      } else {
        // Utilisateur inconnu (externe)
        newContributor = {
          id: nanoid(), // ID temporaire
          email: email,
          status: "invited",
          invitedAt: new Date().toISOString(),
        };
      }

      newContributors = [...newContributors, newContributor];
      emailInput = "";
    } catch (err) {
      console.error("Erreur check email:", err);
      inviteError = "Erreur lors de la vérification de l'email.";
    } finally {
      isChecking = false;
    }
  }

  // Fonction pour valider et envoyer les invitations
  async function validateInvitations() {
    if (!eventId) {
      toastService.error("ID d'événement manquant");
      return;
    }

    try {
      const event = eventsStore.getEventById(eventId);
      if (!event) throw new Error("Événement introuvable");

      // 1. Traiter les teams (batch update automatique)
      const teamsToAdd = selectedTeams.filter(
        (teamId) =>
          !event.$permissions?.some((p) => p.includes(`team:${teamId}`)),
      );

      if (teamsToAdd.length > 0) {
        await toastService.track(eventsStore.addTeams(eventId, teamsToAdd), {
          loading: `Ajout de ${teamsToAdd.length} équipe(s) en cours...`,
          success: `${teamsToAdd.length} équipe(s) ajoutée(s) avec succès`,
          error: "Erreur lors de l'ajout des équipes",
        });
      }

      // 2. Traiter les utilisateurs individuels (par email)
      const emails = newContributors.map((c) => c.email!).filter(Boolean);
      if (emails.length > 0) {
        await toastService.track(
          eventsStore.addContributors(eventId, { emails }),
          {
            loading: "Envoi des invitations en cours...",
            success: `${emails.length} invitation(s) envoyée(s) avec succès`,
            error: "Erreur lors de l'envoi des invitations",
          },
        );
      }

      if (teamsToAdd.length === 0 && emails.length === 0) {
        toastService.warning("Aucune nouvelle invitation à envoyer");
        return;
      }

      // Fermer le modal
      showInviteModal = false;
      newContributors = [];
      // Ne PAS reset selectedTeams, il sera resynchronisé par $effect
    } catch (error) {
      console.error("Erreur lors de l'envoi des invitations:", error);
      // Le toast d'erreur est déjà géré par toastService.track
    }
  }

  function handleCloseInviteModal() {
    showInviteModal = false;
    emailInput = "";
    inviteError = null;
  }

  // Calculer les teams à ajouter (non encore présentes dans l'événement)
  let pendingTeams = $derived(() => {
    if (!eventId) return [];
    const event = eventsStore.getEventById(eventId);
    if (!event) return [];

    return selectedTeams.filter(
      (teamId) =>
        !event.$permissions?.some((p) => p.includes(`team:${teamId}`)),
    );
  });
</script>

<Fieldset legend="Participants">
  <!-- Équipe minimale -->
  <fieldset class="fieldset">
    <legend class="legend">Equipe minimale</legend>
    {#if editingMinContrib}
      <label class="input w-36">
        <input
          type="number"
          bind:value={minContrib}
          onfocus={onStartEdit}
          onblur={() => (editingMinContrib = false)}
          disabled={!canEdit}
          min="1"
          defaultValue={1}
          class="grow"
        />
      </label>
    {:else}
      <button
        class="btn btn-ghost justify-start"
        onclick={() => {
          editingMinContrib = true;
          onStartEdit();
        }}
        disabled={!canEdit}
      >
        <div class="flex items-center gap-4">
          <span class="text-lg">
            {minContrib || 1}
          </span>
          <PencilLine class="h-4 w-4" />
        </div>
      </button>
    {/if}
    <p class="label">Nombre minimum de participants requis</p>
  </fieldset>

  <!-- Participants (Déjà enregistrés) -->
  <div class="mb-6">
    <div class="space-y-3">
      <!-- Accepted -->
      {#if acceptedContributors.length > 0}
        <fieldset class="fieldset">
          <div class="flex flex-wrap gap-2">
            {#each acceptedContributors as contributor (contributor.id)}
              <div class="badge badge-soft badge-success gap-2 p-3">
                <span class="font-medium"
                  >{contributor.name || contributor.email}</span
                >
              </div>
            {/each}
          </div>
        </fieldset>
      {/if}

      <!-- Invited -->
      {#if invitedContributors.length > 0}
        <fieldset class="fieldset">
          <legend class="text-base-content/70 p-1 text-sm font-medium"
            >Invité·es</legend
          >
          <div class="flex flex-wrap gap-2">
            {#each invitedContributors as contributor (contributor.id)}
              <div class="badge badge-warning badge-soft gap-2 p-3">
                <span class="font-medium"
                  >{contributor.name || contributor.email}</span
                >
              </div>
            {/each}
          </div>
        </fieldset>
      {/if}

      {#if contributors.length === 0}
        <p class="text-xs italic opacity-60">Aucun participant enregistré</p>
      {/if}
    </div>
  </div>

  <!-- N'afficher le composant que si eventId est défini -->
  {#if eventId}
    <!-- Bouton pour ouvrir le modal d'invitation -->
    <div class="my-2">
      <button
        class="btn btn-primary btn-outline btn-block gap-1"
        onclick={() => (showInviteModal = true)}
      >
        <UserPlus class="mr-2 h-4 w-4" />
        Inviter des participant·es
      </button>
    </div>
  {:else}
    <p class="text-xs italic opacity-60">
      Vous pourrez inviter des participants une fois l'événement créé
    </p>
  {/if}
</Fieldset>

<!-- Modal d'invitation -->
<ModalContainer isOpen={showInviteModal} onClose={handleCloseInviteModal}>
  <ModalHeader
    title="Inviter des participants"
    onClose={handleCloseInviteModal}
  />

  <ModalContent>
    <div class="space-y-6">
      <!-- Invitation par email -->
      <fieldset class="fieldset">
        <legend class="legend">Par email</legend>
        <div class="flex gap-2">
          <label class="input flex items-center gap-2">
            <Mail class="h-4 w-4 opacity-70" />
            <input
              type="email"
              class="grow"
              placeholder="email@exemple.com"
              bind:value={emailInput}
              onkeydown={(e) => e.key === "Enter" && handleAddEmail()}
            />
          </label>
          <button
            class="btn btn-primary"
            onclick={handleAddEmail}
            disabled={isChecking || !emailInput}
          >
            {#if isChecking}<span class="loading loading-spinner loading-xs"
              ></span>{/if}
            Ajouter
          </button>
        </div>
        {#if inviteError}
          <p class="text-error mt-1 text-xs">{inviteError}</p>
        {/if}
        <p class="text-base-content/60 mt-1 text-xs">
          Recherche automatiquement si l'utilisateur existe déjà.
        </p>
      </fieldset>

      <div class="divider">OU</div>

      <!-- Sélection des teams NATIVES -->
      <fieldset class="fieldset">
        <legend class="fieldset-legend"
          ><Users size={16} class="inline shrink-0 opacity-60" /> Inviter des équipes
          entières</legend
        >
        {#if nativeTeamsStore.myTeams.length > 0}
          <div class="flex flex-col gap-2">
            {#each nativeTeamsStore.myTeams as team}
              <label
                class="hover:bg-base-200 flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors"
              >
                <input
                  type="checkbox"
                  class="checkbox checkbox-primary checkbox-sm"
                  checked={selectedTeams.includes(team.$id)}
                  onchange={() => toggleTeam(team.$id)}
                />
                <div class="flex flex-col">
                  <span class="text-sm font-medium">{team.name}</span>
                  <span class="text-xs opacity-60"
                    >{team.total} membre{team.total > 1 ? "s" : ""}</span
                  >
                </div>
              </label>
            {/each}
          </div>
          <p class="text-base-content/60 mt-1 text-xs">
            Toute l'équipe aura accès en lecture/écriture à cet événement et à
            tous ses produits/achats.
          </p>
        {:else}
          <p class="text-sm italic opacity-60">
            Vous ne faites partie d'aucune équipe. Créez une équipe pour inviter
            plusieurs personnes.
          </p>
        {/if}
      </fieldset>
    </div>
  </ModalContent>

  <ModalFooter>
    <button class="btn" onclick={handleCloseInviteModal}>Annuler</button>
    <button
      class="btn btn-primary"
      onclick={validateInvitations}
      disabled={newContributors.length === 0 && pendingTeams().length === 0}
    >
      <Check class="mr-2 h-4 w-4" />
      Inviter
      {#if pendingTeams().length > 0 || newContributors.length > 0}
        ({pendingTeams().length + newContributors.length})
      {/if}
    </button>
  </ModalFooter>
</ModalContainer>
