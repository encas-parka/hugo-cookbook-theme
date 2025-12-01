<!--
  PermissionsManager.svelte

  Composant réutilizable pour gérer les permissions (équipes et contributeurs)

  Fonctionnalités:
  1. Sélection des équipes
  2. Sélection des contributeurs
  3. Proposition des contributeurs des équipes communes
  4. Invitation de contributeurs externes par email
  5. Modals de confirmation lors du retrait
  6. Modal d'édition des équipes

  @usage
  <PermissionsManager
    bind:selectedTeams={selectedTeams}
    bind:contributors={contributors}
    {teamsStore}
    {userId}
    {userTeams}
  />
-->
<script lang="ts">
  import {
    Users,
    UserPlus,
    X,
    CircleAlert,
    Plus,
    Edit,
    Mail,
    Check,
    XCircle,
  } from "@lucide/svelte";
  import type { ContributorInfo } from "$lib/types/appwrite.types";
  import type { TeamsStore } from "$lib/stores/TeamsStore.svelte";
  import { createTeamMembership } from "$lib/services/appwrite-teams";
  import { fade } from "svelte/transition";

  // Interface des props
  interface Props {
    selectedTeams: string[];
    contributors: string[]; // Format string[] avec strings JSONifiées
    teamsStore: TeamsStore;
    userId: string;
    userTeams: string[];
    eventId?: string; // ID de l'événement pour les invitations
  }

  // État local pour les contributeurs parsés
  let parsedContributors = $derived.by(() => {
    const result: ContributorInfo[] = [];

    if (contributors && contributors.length > 0) {
      for (const contributorStr of contributors) {
        result.push(parseContributor(contributorStr));
      }
    }

    return result;
  });

  // Props
  let {
    selectedTeams = $bindable([] as string[]),
    contributors = $bindable([] as string[]),
    teamsStore,
    userId = "",
    userTeams = [] as string[],
    eventId = "", // ID de l'événement pour les invitations
  }: Props = $props();

  // État local
  let showTeamEditModal = $state(false);
  let showRemoveTeamModal = $state(false);
  let showRemoveContributorModal = $state(false);
  let teamToRemove = $state<string | null>(null);
  let contributorToRemove = $state<ContributorInfo | null>(null);

  // État pour l'invitation par email
  let newContributorEmail = $state("");
  let isInviting = $state(false);
  let invitationError = $state<string | null>(null);

  // Contributeurs des équipes sélectionnées
  let teamMembers = $derived.by(() => {
    const allMembers = new Map<
      string,
      { id: string; name: string; email?: string; teamId: string }
    >();

    for (const teamId of selectedTeams) {
      const team = teamsStore.getTeamById(teamId);
      if (team && team.members) {
        for (const member of team.members.memberships) {
          // Exclure le créateur de l'événement et les contributeurs déjà ajoutés
          if (
            member.userId !== userId &&
            !parsedContributors.some((c) => c.id === member.userId)
          ) {
            allMembers.set(member.userId, {
              id: member.userId,
              name: member.userName,
              email: member.userEmail,
              teamId,
            });
          }
        }
      }
    }

    return allMembers;
  });

  // Contributeurs suggérés (membres des équipes sélectionnées)
  let suggestedContributors = $derived.by(() =>
    Array.from(teamMembers.values()),
  );

  // Fonctions pour la gestion des équipes
  function toggleTeam(teamId: string) {
    if (selectedTeams.includes(teamId)) {
      selectedTeams = selectedTeams.filter((id) => id !== teamId);
    } else {
      selectedTeams = [...selectedTeams, teamId];
    }
  }

  function confirmRemoveTeam(teamId: string) {
    teamToRemove = teamId;
    showRemoveTeamModal = true;
  }

  function removeTeam() {
    if (teamToRemove) {
      selectedTeams = selectedTeams.filter((id) => id !== teamToRemove);
      teamToRemove = null;
    }
    showRemoveTeamModal = false;
  }

  // Fonctions pour la gestion des contributeurs
  function addTeamContributor(
    userId: string,
    name: string,
    email?: string,
    teamId?: string,
  ) {
    // Vérifier si le contributeur existe déjà
    if (parsedContributors.some((c) => c.id === userId)) {
      return;
    }

    const newContributor: ContributorInfo = {
      id: userId,
      name,
      email,
      status: "accepted", // Les membres d'équipe sont automatiquement acceptés
      invitedAt: new Date().toISOString(),
      teamId,
    };

    // Ajouter le contributeur en string JSONifié
    contributors = [...contributors, stringifyContributor(newContributor)];
  }

  async function inviteContributorByEmail() {
    if (!newContributorEmail) {
      invitationError = "Veuillez entrer une adresse email valide";
      return;
    }

    if (!eventId) {
      invitationError = "ID d'événement manquant pour l'invitation";
      return;
    }

    // Vérifier si l'email a déjà été invité
    if (parsedContributors.some((c) => c.email === newContributorEmail)) {
      invitationError = "Cet email a déjà été invité";
      return;
    }

    isInviting = true;
    invitationError = null;

    try {
      // Créer un contributeur temporaire
      const newContributor = createTempContributor(
        newContributorEmail,
        eventId,
      );

      // Envoyer l'invitation via les équipes Appwrite (si disponible)
      await inviteContributorToEvent(newContributorEmail, eventId, userId);

      // Ajouter le contributeur en string JSONifié
      contributors = [...contributors, stringifyContributor(newContributor)];
      newContributorEmail = "";
    } catch (error) {
      console.error("Erreur lors de l'invitation:", error);
      invitationError = "Erreur lors de l'envoi de l'invitation";
    } finally {
      isInviting = false;
    }
  }

  function confirmRemoveContributor(contributor: ContributorInfo) {
    contributorToRemove = contributor;
    showRemoveContributorModal = true;
  }

  function removeContributor() {
    if (contributorToRemove) {
      // Filtrer les contributeurs en comparant les IDs (après parsing)
      contributors = contributors.filter((contributorStr) => {
        const contributor = parseContributor(contributorStr);
        return contributor.id !== contributorToRemove!.id;
      });
      contributorToRemove = null;
    }
    showRemoveContributorModal = false;
  }
</script>

<div class="card bg-base-100 shadow-xl">
  <div class="card-body">
    <h3 class="card-title mb-4 flex items-center gap-2 text-lg">
      <Users class="text-secondary h-5 w-5" />
      Permissions
    </h3>

    <!-- Équipes -->
    <fieldset class="fieldset">
      <div class="flex items-center justify-between">
        <legend class="fieldset-legend">Équipes</legend>
        <button
          class="btn btn-ghost btn-xs"
          onclick={() => (showTeamEditModal = true)}
        >
          <Edit class="mr-1 h-3 w-3" />
          Gérer
        </button>
      </div>

      <div class="flex flex-col gap-2">
        {#each teamsStore.teams as team}
          <div
            class="border-base-200 hover:bg-base-200/50 flex items-center justify-between rounded-lg border p-2 transition-colors"
          >
            <label class="flex grow cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                class="checkbox checkbox-primary checkbox-sm"
                checked={selectedTeams.includes(team.$id)}
                onchange={() => toggleTeam(team.$id)}
              />
              <span>{team.name}</span>
            </label>

            {#if selectedTeams.includes(team.$id)}
              <button
                class="btn btn-ghost btn-xs btn-circle"
                onclick={() => confirmRemoveTeam(team.$id)}
                title="Retirer cette équipe"
              >
                <X class="h-3 w-3" />
              </button>
            {/if}
          </div>
        {/each}

        {#if teamsStore.teams.length === 0}
          <p class="text-base-content/60 text-xs italic">
            Aucune équipe disponible
          </p>
        {/if}
      </div>
    </fieldset>

    <div class="divider my-2"></div>

    <!-- Contributeurs -->
    <fieldset class="fieldset">
      <legend class="fieldset-legend">Contributeurs</legend>

      <!-- Suggestions des membres d'équipe -->
      {#if suggestedContributors.length > 0}
        <div class="mb-3">
          <p class="mb-2 text-sm font-medium">
            Membres des équipes sélectionnées
          </p>
          <div class="flex flex-wrap gap-2">
            {#each suggestedContributors as member (member.name)}
              <button
                class="badge badge-outline badge-lg h-auto gap-1 py-1"
                onclick={() =>
                  addTeamContributor(
                    member.id,
                    member.name,
                    member.email,
                    member.teamId,
                  )}
                title="Ajouter comme contributeur"
              >
                <Plus class="h-3 w-3" />
                {member.name}
              </button>
            {/each}
          </div>
        </div>
      {/if}

      <!-- Invitation par email -->
      <fieldset class="fieldset mb-3">
        <legend class="legend">Inviter par email</legend>
        <label class="input validator flex gap-2">
          <Mail class="h-4 w-4 opacity-50" />
          <input
            type="email"
            placeholder="email@exemple.com"
            class="input input-sm w-full"
            bind:value={newContributorEmail}
            onkeydown={(e) => e.key === "Enter" && inviteContributorByEmail()}
          />
          <button
            class="btn btn-sm btn-primary"
            onclick={inviteContributorByEmail}
            disabled={isInviting || !newContributorEmail}
          >
            {#if isInviting}
              <span class="loading loading-spinner loading-xs"></span>
            {:else}
              <Mail class="h-4 w-4" />
            {/if}
            Inviter
          </button>
        </label>
        <div class="validator-hint hidden">email invalide</div>

        {#if invitationError}
          <div class="alert alert-error mt-2 py-2 text-xs">
            <CircleAlert class="h-3 w-3" />
            {invitationError}
          </div>
        {/if}
      </fieldset>

      <!-- Liste des contributeurs -->
      <div class="mb-3">
        <p class="mb-2 text-sm font-medium">
          Contributeurs ({contributors.length})
        </p>
        <div class="flex flex-wrap gap-2">
          {#each parsedContributors as contributor (contributor.id)}
            <div
              class="badge badge-outline gap-2 pr-1"
              class:badge-success={contributor.status === "accepted"}
            >
              {#if contributor.status === "invited"}
                <Mail class="h-3 w-3" />
              {:else if contributor.status === "accepted"}
                <Check class="h-3 w-3" />
              {:else if contributor.status === "declined"}
                <XCircle class="h-3 w-3" />
              {/if}

              {contributor.name || contributor.email || contributor.id}

              <button
                onclick={() => confirmRemoveContributor(contributor)}
                class="btn btn-ghost btn-xs btn-circle h-4 min-h-0 w-4"
                title="Retirer ce contributeur"
              >
                <X class="h-3 w-3" />
              </button>
            </div>
          {/each}

          {#if parsedContributors.length === 0}
            <p class="text-base-content/60 text-xs italic">
              Aucun contributeur ajouté
            </p>
          {/if}
        </div>
      </div>
    </fieldset>
  </div>
</div>

<!-- Modal de confirmation pour supprimer une équipe -->
{#if showRemoveTeamModal}
  <div class="modal modal-open" transition:fade>
    <div class="modal-box">
      <h3 class="text-lg font-bold">Confirmer le retrait</h3>
      <p class="py-4">
        Êtes-vous sûr de vouloir retirer cette équipe des permissions ? Les
        membres de cette équipe ne pourront plus accéder à cet événement.
      </p>
      <div class="modal-action">
        <button
          class="btn btn-ghost"
          onclick={() => (showRemoveTeamModal = false)}
        >
          Annuler
        </button>
        <button class="btn btn-error" onclick={removeTeam}> Retirer </button>
      </div>
    </div>
  </div>
{/if}

<!-- Modal de confirmation pour supprimer un contributeur -->
{#if showRemoveContributorModal}
  <div class="modal modal-open" transition:fade>
    <div class="modal-box">
      <h3 class="text-lg font-bold">Confirmer le retrait</h3>
      <p class="py-4">
        Êtes-vous sûr de vouloir retirer ce contributeur ?
        {contributorToRemove?.name ||
          contributorToRemove?.email ||
          contributorToRemove?.id} ne pourra plus accéder à cet événement.
      </p>
      <div class="modal-action">
        <button
          class="btn btn-ghost"
          onclick={() => (showRemoveContributorModal = false)}
        >
          Annuler
        </button>
        <button class="btn btn-error" onclick={removeContributor}>
          Retirer
        </button>
      </div>
    </div>
  </div>
{/if}

<!-- Modal d'édition des équipes -->
{#if showTeamEditModal}
  <div class="modal modal-open" transition:fade>
    <div class="modal-box max-w-md">
      <h3 class="text-lg font-bold">Gérer les équipes</h3>
      <div class="py-4">
        <div class="flex flex-col gap-2">
          {#each teamsStore.teams as team}
            <label
              class="border-base-200 flex cursor-pointer items-center gap-3 rounded-lg border p-2"
            >
              <input
                type="checkbox"
                class="checkbox checkbox-primary checkbox-sm"
                checked={selectedTeams.includes(team.$id)}
                onchange={() => toggleTeam(team.$id)}
              />
              <div class="grow">
                <div class="font-medium">{team.name}</div>
                <div class="text-base-content/60 text-xs">
                  {team.members?.total || 0} membre{team.members?.total !== 1
                    ? "s"
                    : ""}
                </div>
              </div>
            </label>
          {/each}

          {#if teamsStore.teams.length === 0}
            <p class="text-base-content/60 text-xs italic">
              Vous n'avez accès à aucune équipe.
            </p>
          {/if}
        </div>
      </div>
      <div class="modal-action">
        <button
          class="btn btn-ghost"
          onclick={() => (showTeamEditModal = false)}
        >
          Fermer
        </button>
      </div>
    </div>
  </div>
{/if}
