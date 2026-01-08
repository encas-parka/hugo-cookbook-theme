<script lang="ts">
  import { Mail, Clock, UserX } from "@lucide/svelte";
  import type { EnrichedNativeTeam as EnrichedTeam } from "$lib/types/aw_native_team.d";
  import InviteMembersForm from "./InviteMembersForm.svelte";

  interface Props {
    team: EnrichedTeam;
    onInvitationSent?: () => void;
  }

  let { team, onInvitationSent }: Props = $props();

  // Formater la date
  function formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  // TODO: Implémenter l'annulation d'invitation
  function cancelInvitation(email: string) {
    console.log("Annuler invitation:", email);
    // À implémenter côté TeamsStore
  }
</script>

<div class="space-y-6">
  <!-- Liste des invitations en attente -->
  {#if team.members.filter((m) => !m.confirmed).length > 0}
    <div>
      <h4 class="mb-3 text-sm font-medium opacity-70">
        Invitations en attente ({team.members.filter((m) => !m.confirmed)
          .length})
      </h4>
      <div class="space-y-2">
        {#each team.members.filter((m) => !m.confirmed) as invitation (invitation.id)}
          <div
            class="card bg-base-100 border-base-200 border p-4 transition-shadow hover:shadow-md"
          >
            <div class="flex items-center justify-between gap-4">
              <!-- Infos invitation -->
              <div class="flex flex-1 items-center gap-3">
                <div class="avatar placeholder">
                  <div class="bg-base-200 text-base-content w-12 rounded-full">
                    <Mail class="h-5 w-5" />
                  </div>
                </div>

                <div class="flex-1">
                  <div class="font-medium">
                    {invitation.userEmail || invitation.name}
                  </div>
                  <div class="flex items-center gap-1 text-sm opacity-70">
                    <Clock class="h-3 w-3" />
                    Invité le {formatDate(invitation.joinedAt)}
                  </div>
                </div>
              </div>

              <!-- Badge statut -->
              <div class="badge badge-warning">En attente</div>

              <!-- Action d'annulation -->
              <button
                class="btn btn-ghost btn-sm"
                onclick={() => cancelInvitation(invitation.$id)}
                title="Annuler l'invitation"
              >
                <UserX class="h-4 w-4" />
              </button>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <div class="divider"></div>
  {/if}

  <!-- Formulaire d'invitation -->
  <div>
    <h4 class=" text-sm font-medium opacity-70">Inviter de nouveaux membres</h4>
    <InviteMembersForm {team} onSuccess={onInvitationSent} />
  </div>
</div>
