<script lang="ts">
  import { Users, UserPlus, Mail, Check, X, PencilLine } from "@lucide/svelte";
  import type { EventContributor } from "$lib/types/events";
  // import type { TeamsStore } from "$lib/stores/TeamsStore.svelte";
  import type { EventsStore } from "$lib/stores/EventsStore.svelte";
  import { nanoid } from "nanoid";
  import BtnGroupCheck from "$lib/components/ui/BtnGroupCheck.svelte";
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
    teamsStore: any; // Accepte TeamsStore ou NativeTeamsStore
    eventsStore: EventsStore;
    userId: string;
    userTeams: string[];
    eventId?: string;
    onStartEdit: () => void;
  }

  // Props
  let {
    minContrib = $bindable(),
    canEdit,
    contributors, // Lecture seule - vient du parent via $derived
    teamsStore,
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

  // Synchroniser selectedTeams depuis l'événement courant
  $effect(() => {
    if (eventId) {
      const event = eventsStore.getEventById(eventId);
      if (event) {
        selectedTeams = event.teams || [];
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

  // Contributeurs des équipes sélectionnées (pour le modal d'invitation)
  let kteamMembers = $derived.by(() => {
    const members: Array<{ id: string; label: string; selected: boolean }> = [];
    for (const team of teamsStore.teams) {
      if (team.members) {
        for (const member of team.members) {
          // Exclure le créateur, les contributeurs existants
          if (
            member.id !== userId &&
            !contributors.some((c) => c.id === member.id)
          ) {
            members.push({
              id: member.id,
              label: member.name,
              selected: newContributors.some((nc) => nc.id === member.id),
            });
          }
        }
      }
    }
    return Array.from(new Map(members.map((m) => [m.id, m])).values());
  });

  // Liste fusionnée : membres d'équipe + contributeurs ajoutés par email
  let allInvitableMembers = $derived.by(() => {
    const members: Array<{
      id: string;
      label: string;
      selected: boolean;
      badge?: string;
    }> = [...kteamMembers];

    // Ajouter les newContributors qui ne sont pas déjà dans kteamMembers
    for (const contributor of newContributors) {
      // Vérifier si ce contributeur n'est pas déjà dans la liste
      if (!members.some((m) => m.id === contributor.id)) {
        members.push({
          id: contributor.id,
          label: contributor.name || contributor.email || contributor.id,
          selected: true, // Les newContributors sont toujours sélectionnés
        });
      }
    }

    return members;
  });

  // Groupes de contributeurs pour l'affichage
  let acceptedContributors = $derived(
    contributors.filter((c) => c.status === "accepted"),
  );
  let invitedContributors = $derived(
    contributors.filter((c) => c.status === "invited"),
  );

  // Fonctions pour la gestion des équipes
  function toggleTeam(teamId: string) {
    const team = teamsStore.teams.find((t) => t.$id === teamId);
    if (!team) return;

    if (selectedTeams.includes(teamId)) {
      // Désélectionner
      selectedTeams = selectedTeams.filter((id) => id !== teamId);

      // Retirer les membres de newContributors s'ils ne sont pas dans une autre équipe sélectionnée
      if (team.members) {
        const membersToRemove = team.members.filter((member) => {
          // Vérifier si ce membre est dans une AUTRE équipe sélectionnée
          const inOtherTeam = teamsStore.teams.some(
            (t) =>
              t.$id !== teamId &&
              selectedTeams.includes(t.$id) &&
              t.members?.some((m) => m.id === member.id),
          );
          return !inOtherTeam;
        });

        const idsToRemove = new Set(membersToRemove.map((m) => m.id));
        newContributors = newContributors.filter((c) => !idsToRemove.has(c.id));
      }
    } else {
      // Sélectionner
      selectedTeams = [...selectedTeams, teamId];

      // Ajouter les membres à newContributors
      if (team.members) {
        const membersToAdd = team.members.filter((member) => {
          // Exclure soi-même
          if (member.id === userId) return false;
          // Exclure les contributeurs déjà persistés
          if (contributors.some((c) => c.id === member.id)) return false;
          // Exclure ceux déjà dans newContributors
          if (newContributors.some((c) => c.id === member.id)) return false;
          return true;
        });

        const newEntries = membersToAdd.map((m) => ({
          id: m.id,
          name: m.name,
          status: "invited" as const,
          invitedAt: new Date().toISOString(),
        }));

        newContributors = [...newContributors, ...newEntries];
      }
    }
  }

  // Ajouter un membre depuis le BtnGroupCheck (KTeams)
  function toggleKTeamMember(memberId: string) {
    // Vérifier si déjà présent dans newContributors
    const existingIndex = newContributors.findIndex((c) => c.id === memberId);

    if (existingIndex !== -1) {
      // Si présent, on le retire
      newContributors = newContributors.filter((c) => c.id !== memberId);
      return;
    }

    // Sinon, on l'ajoute
    // Retrouver les infos du membre
    let memberInfo;
    for (const team of teamsStore.teams) {
      const found = team.members?.find((m) => m.id === memberId);
      if (found) {
        memberInfo = found;
        break;
      }
    }

    if (!memberInfo) return;

    // Ajouter aux newContributors
    // Note: On ajoute avec statut 'invited' comme demandé
    const newContributor: EventContributor = {
      id: memberInfo.id,
      name: memberInfo.name,
      email: memberInfo.email, // Peut être undefined pour les membres KTeams
      status: "invited",
      invitedAt: new Date().toISOString(),
      isKTeamMember: true, // Marqueur pour identifier les membres KTeams
    };

    newContributors = [...newContributors, newContributor];
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
    if (newContributors.length === 0) {
      toastService.warning("Aucune invitation à envoyer");
      return;
    }

    if (!eventId) {
      toastService.error("ID d'événement manquant");
      return;
    }

    try {
      // Séparer les contributeurs en deux groupes
      const kteamContributors = newContributors.filter((c) => c.isKTeamMember);
      const emailContributors = newContributors.filter(
        (c) => !c.isKTeamMember && c.email,
      );

      // Préparer les données pour l'API
      const userIds = kteamContributors.map((c) => c.id);
      const emails = emailContributors.map((c) => c.email!);

      if (userIds.length === 0 && emails.length === 0) {
        toastService.error("Aucun contributeur valide à inviter");
        return;
      }

      console.log(
        `[PermissionsManager] Envoi de ${userIds.length + emails.length} invitation(s)`,
      );

      // Utiliser toastService.track pour suivre l'opération
      await toastService.track(
        eventsStore.addContributors(eventId, { emails, userIds }),
        {
          loading: "Envoi des invitations en cours...",
          success: `${userIds.length + emails.length} invitation(s) envoyée(s) avec succès`,
          error: "Erreur lors de l'envoi des invitations",
        },
      );

      // Fermer le modal et vider la liste des nouveaux contributeurs après envoi réussi
      showInviteModal = false;
      newContributors = [];
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

      <!-- Sélection des équipes -->
      <fieldset>
        <legend class="mb-2 text-sm font-medium"
          >Invitez une équipe entière</legend
        >
        {#if teamsStore.teams.length > 0}
          <div class="flex flex-col gap-2">
            {#each teamsStore.teams as team}
              <label
                class="hover:bg-base-200 flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors"
              >
                <input
                  type="checkbox"
                  class="checkbox checkbox-primary checkbox-sm"
                  checked={selectedTeams.includes(team.$id)}
                  onchange={() => toggleTeam(team.$id)}
                />
                <span class="text-sm font-medium">{team.name}</span>
              </label>
            {/each}
          </div>
          <p class="text-base-content/60 mt-1 text-xs">
            Tous les membres de l'équipe seront invités a participer.
          </p>
        {:else}
          <p class="text-sm italic opacity-60">Aucune équipe disponible</p>
        {/if}
      </fieldset>

      <div class="divider">OU</div>

      <!-- Membres des KTeams -->
      <fieldset>
        <legend class="mb-2 text-sm font-medium"
          >Invitez des membres spécifiques</legend
        >
        {#if allInvitableMembers.length > 0}
          <BtnGroupCheck
            items={allInvitableMembers}
            onToggleItem={toggleKTeamMember}
            size="sm"
          />
        {:else}
          <p class="text-sm italic opacity-60">
            Aucun membre disponible à inviter.
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
      disabled={newContributors.length === 0}
    >
      <Check class="mr-2 h-4 w-4" />
      Envoyer les invitations ({newContributors.length})
    </button>
  </ModalFooter>
</ModalContainer>
