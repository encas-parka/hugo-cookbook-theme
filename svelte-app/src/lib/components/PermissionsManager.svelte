<script lang="ts">
  import {
    Users,
    UserPlus,
    X,
    CircleAlert,
    Plus,
    Mail,
    Check,
    XCircle,
    Trash2,
    Search,
  } from "@lucide/svelte";
  import type { EventContributor } from "$lib/types/events";
  import type { TeamsStore } from "$lib/stores/TeamsStore.svelte";
  import type { EventsStore } from "$lib/stores/EventsStore.svelte";
  import { fade } from "svelte/transition";
  import { nanoid } from "nanoid";
  import BtnGroupCheck from "$lib/components/ui/BtnGroupCheck.svelte";
  import { checkUserEmails } from "$lib/services/appwrite-functions";
  import Fieldset from "./ui/Fieldset.svelte";
  import { toastService } from "$lib/services/toast.service.svelte";

  // Interface des props
  interface Props {
    selectedTeams: string[];
    contributors: EventContributor[]; // Contributeurs DÉJÀ enregistrés (persistés)
    newContributors: EventContributor[]; // Nouveaux contributeurs (en attente de sauvegarde)
    teamsStore: TeamsStore;
    eventsStore: EventsStore;
    userId: string;
    userTeams: string[];
    eventId?: string;
    openModalRequest?: boolean;
  }

  // Props
  let {
    selectedTeams = $bindable(),
    contributors = $bindable(), // Read-only en pratique ici, sauf pour updates de statut si besoin
    newContributors = $bindable(),
    teamsStore,
    eventsStore,
    userId = "",
    eventId = "",
  }: Props = $props();

  // État local
  let showInviteModal = $state(false);

  let emailInput = $state("");
  let isChecking = $state(false);
  let inviteError = $state<string | null>(null);

  // Contributeurs des équipes sélectionnées (pour le modal d'invitation)
  let kteamMembers = $derived.by(() => {
    const members = [];
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

  function removeNewContributor(contributorId: string) {
    newContributors = newContributors.filter((c) => c.id !== contributorId);

    // Si le membre retiré appartient à une équipe sélectionnée, on décoche l'équipe
    // (car la sélection n'est plus "complète")
    const teamsToUncheck = teamsStore.teams
      .filter(
        (t) =>
          selectedTeams.includes(t.$id) &&
          t.members?.some((m) => m.id === contributorId),
      )
      .map((t) => t.$id);

    if (teamsToUncheck.length > 0) {
      selectedTeams = selectedTeams.filter(
        (id) => !teamsToUncheck.includes(id),
      );
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

      // Vider la liste des nouveaux contributeurs après envoi réussi
      newContributors = [];
    } catch (error) {
      console.error("Erreur lors de l'envoi des invitations:", error);
      // Le toast d'erreur est déjà géré par toastService.track
    }
  }
</script>

<!-- N'afficher le composant que si eventId est défini -->
{#if eventId}
  <div class="card bg-base-100 shadow-xl">
    <div class="card-body p-4">
      <h3 class="card-title mb-4 flex items-center gap-2 text-lg">
        <Users class="text-secondary h-5 w-5" />
        Participants
      </h3>

      <div class="divider my-2"></div>

      <!-- Participants (Déjà enregistrés) -->
      <div class="mb-6">
        <div class="space-y-3">
          <!-- Accepted -->
          {#if acceptedContributors.length > 0}
            <fieldset class="fieldset">
              <legend class="text-base-content/70 p-1 text-sm font-medium"
                >Participants</legend
              >
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
            <p class="text-xs italic opacity-60">
              Aucun participant enregistré
            </p>
          {/if}
        </div>
      </div>

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
    </div>
  </div>
{/if}

<!-- Modal d'invitation -->
<div class="modal {showInviteModal && 'modal-open'}">
  <div class="modal-box overflow-auto not-md:h-lvh">
    <h3 class="mb-4 text-lg font-bold">Inviter des participants</h3>

    <!-- Invitation par email -->
    <fieldset class="fieldset mb-6">
      <legend class="legend">Par email</legend>
      <div class="flex gap-2">
        <label class="input input-bordered flex flex-1 items-center gap-2">
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
          badgeSize="btn-sm"
          badgeStyle="btn-soft"
          showIcon={true}
        />
      {:else}
        <p class="text-sm italic opacity-60">
          Aucun membre disponible à inviter.
        </p>
      {/if}
    </fieldset>

    <div class="modal-action">
      <button class="btn" onclick={() => (showInviteModal = false)}
        >Annuler</button
      >
      <button
        class="btn btn-primary"
        onclick={() => {
          showInviteModal = false;
          validateInvitations();
        }}
        disabled={newContributors.length === 0}
      >
        <Check class="mr-2 h-4 w-4" />
        Envoyer les invitations ({newContributors.length})
      </button>
    </div>
  </div>
</div>
