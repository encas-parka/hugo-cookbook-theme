<script lang="ts">
  import {
    Calendar,
    Clock,
    Users,
    MapPin,
    ChefHat,
    ArrowRight,
    AlertCircle,
    ShoppingCart,
  } from "@lucide/svelte";
  import { formatDateRelative } from "$lib/utils/date-helpers";
  import type { EnrichedEvent } from "$lib/types/events.d";
  import { navigate } from "$lib/services/simple-router.svelte";
  import { formatDateShort } from "@/lib/utils/products-display";
  import { globalState } from "$lib/stores/GlobalState.svelte";
  import { eventsStore } from "$lib/stores/EventsStore.svelte";

  interface Props {
    currentEvents: EnrichedEvent[];
    pastEventsCount: number;
    loading?: boolean;
  }

  let {
    currentEvents = [],
    pastEventsCount = 0,
    loading = false,
  }: Props = $props();

  function getEventLocation(event: EnrichedEvent): string {
    // Si l'événement a un champ location ou autre
    return "Lieu à définir"; // Placeholder
  }

  function hasInvitation(eventId: string) {
    return eventsStore.getContributorStatus(eventId) === "invited";
  }

  function isParticipant(eventId: string) {
    return eventsStore.getContributorStatus(eventId) === "accepted";
  }
</script>

<div class="card bg-base-100 border-base-200 border shadow-xl">
  <div class="card-body">
    <h2 class="card-title flex items-center gap-2">
      <Calendar class="text-primary h-5 w-5" />
      Événements
    </h2>

    {#if loading}
      <div class="flex items-center justify-center py-8">
        <span class="loading loading-spinner loading-md"></span>
      </div>
    {:else if currentEvents.length === 0}
      <div class="py-6 text-center">
        <Calendar class="mx-auto mb-3 h-12 w-12 opacity-20" />
        <p class="text-base-content/60 mb-4 text-sm">Aucun événement prévu</p>
      </div>
    {:else}
      <!-- Événements à venir -->
      {#if currentEvents.length > 0}
        <div class="my-4">
          <div class="space-y-3">
            {#each currentEvents as event (event.$id)}
              <div
                class="bg-base-200/50 hover:bg-base-200 flex cursor-pointer items-start gap-3 rounded-lg p-3 transition-colors"
                onclick={() => navigate(`/dashboard/eventEdit/${event.$id}`)}
                role="button"
                tabindex="0"
                title="Voir les détails de {event.name}"
                onkeydown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    () => navigate(`/eventEdit/${event.$id}`);
                  }
                }}
              >
                <div class="min-w-0 flex-1">
                  <div class="flex flex-wrap items-center gap-4">
                    <div class="truncate text-lg font-semibold">
                      {event.name}
                    </div>
                    <div class="badge font-medium">
                      {#if event.allDates && event.allDates.length > 1 && event.dateStart && event.dateEnd}
                        <Calendar class="h-4 w-4" />
                        {formatDateShort(event.dateStart)} au {formatDateShort(
                          event.dateEnd,
                        )}
                      {:else if event.dateStart}
                        <Calendar class="h-4 w-4" />
                        {formatDateShort(event.dateStart)}
                      {/if}
                    </div>
                    {#if hasInvitation(event.$id)}
                      <div class="badge badge-info badge-lg ms-auto">
                        Vous êtes invité à participer
                      </div>
                    {/if}
                  </div>

                  <!-- Métadonnées -->
                  <div
                    class="text-base-content/60 mt-2 flex items-center gap-3 text-xs"
                  >
                    <div class="flex items-center gap-1">
                      <MapPin class="h-3 w-3" />
                      <span>{getEventLocation(event)}</span>
                    </div>
                    {#if event.contributors && event.contributors.length > 0}
                      <div class="flex items-center gap-1">
                        <Users class="h-3 w-3" />
                        <span
                          >{event.contributors.length} participant{event
                            .contributors.length > 1
                            ? "s"
                            : ""}</span
                        >
                      </div>
                    {/if}
                  </div>

                  <!-- Actions -->
                  <div class="mt-3 flex gap-2">
                    <button
                      class="btn btn-outline btn-xs"
                      onclick={(e) => {
                        e.stopPropagation();
                        navigate(`/dashboard/eventEdit/products/${event.$id}`);
                      }}
                    >
                      <ShoppingCart class="h-3 w-3" />
                      Produits
                    </button>
                  </div>
                </div>
                <ArrowRight class="mt-1 h-4 w-4 flex-shrink-0 opacity-40" />
              </div>
            {/each}
          </div>
        </div>
      {/if}

      <!-- Événements passés (compteur) -->
      {#if pastEventsCount > 0}
        <button
          class="text-base-content/50 bg-base-200/30 hover:bg-base-300/30 cursor-pointer rounded p-3 text-center text-sm"
          onclick={() => navigate(`/eventList`)}
        >
          {pastEventsCount} événement{pastEventsCount > 1 ? "s" : ""} passé{pastEventsCount >
          1
            ? "s"
            : ""}
        </button>
      {/if}

      <!-- Bouton création rapide -->
      <div class="card-actions border-base-200 mt-4 justify-end border-t pt-4">
        <button
          class="btn btn-primary btn-sm"
          onclick={() => navigate("/dashboard/eventEdit")}
        >
          <Calendar class="mr-2 h-4 w-4" />
          Créer un événement
        </button>
      </div>
    {/if}
  </div>
</div>
