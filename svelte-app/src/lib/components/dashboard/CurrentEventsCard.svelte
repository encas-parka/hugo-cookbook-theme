<script lang="ts">
  import {
    Calendar,
    Clock,
    Users,
    MapPin,
    ChefHat,
    ArrowRight,
    AlertCircle,
  } from "@lucide/svelte";
  import { formatDateRelative } from "$lib/utils/date-helpers";
  import type { EnrichedEvent } from "$lib/types/events.d";
  import { navigate } from "$lib/services/simple-router.svelte";

  interface Props {
    currentEvents: EnrichedEvent[];
    upcomingEvents: EnrichedEvent[];
    pastEventsCount: number;
    loading?: boolean;
  }

  let {
    currentEvents = [],
    upcomingEvents = [],
    pastEventsCount = 0,
    loading = false,
  }: Props = $props();

  function formatEventDate(event: EnrichedEvent): string {
    if (!event.dateStart) return "";
    const date = new Date(event.dateStart);
    const now = new Date();

    // Aujourd'hui, afficher l'heure
    if (date.toDateString() === now.toDateString()) {
      return date.toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
      });
    }

    // Demain
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    if (date.toDateString() === tomorrow.toDateString()) {
      return `Demain ${date.toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
      })}`;
    }

    // Autres jours
    return date.toLocaleDateString("fr-FR", {
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function formatEventDuration(event: EnrichedEvent): string {
    if (!event.dateStart || !event.dateEnd) return "";

    const start = new Date(event.dateStart);
    const end = new Date(event.dateEnd);
    const diffMs = end.getTime() - start.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    if (diffDays > 0) {
      return `${diffDays}j${diffHours % 24 > 0 ? ` ${diffHours % 24}h` : ""}`;
    }
    return `${diffHours}h`;
  }

  function getEventLocation(event: EnrichedEvent): string {
    // Si l'événement a un champ location ou autre
    return "Lieu à définir"; // Placeholder
  }

  function createNewEvent() {
    // TODO: Implémenter la navigation vers la création d'événement
    console.log("Create new event");
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
    {:else if currentEvents.length === 0 && upcomingEvents.length === 0}
      <div class="py-6 text-center">
        <Calendar class="mx-auto mb-3 h-12 w-12 opacity-20" />
        <p class="text-base-content/60 mb-4 text-sm">Aucun événement prévu</p>
      </div>
    {:else}
      <!-- Événements en cours -->
      {#if currentEvents.length > 0}
        <div class="mb-4">
          <h3
            class="text-base-content/70 mb-3 flex items-center gap-2 text-sm font-semibold"
          >
            <div class="bg-success h-2 w-2 animate-pulse rounded-full"></div>
            En cours ({currentEvents.length})
          </h3>
          <div class="space-y-3">
            {#each currentEvents as event (event.$id)}
              <div
                class="bg-success/5 border-success/20 hover:bg-success/10 flex cursor-pointer items-start gap-3 rounded-lg border p-3 transition-colors"
                onclick={() => console.log("View event:", event.$id)}
                role="button"
                tabindex="0"
                title="Voir les détails de {event.name}"
                onkeydown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    console.log("View event:", event.$id);
                  }
                }}
              >
                <div class="min-w-0 flex-1">
                  <div class="flex items-center gap-2">
                    <div class="truncate text-sm font-medium">{event.name}</div>
                    <div class="badge badge-success badge-xs">EN COURS</div>
                  </div>

                  <!-- Métadonnées -->
                  <div
                    class="text-base-content/60 mt-2 flex items-center gap-3 text-xs"
                  >
                    <div class="flex items-center gap-1">
                      <Clock class="h-3 w-3" />
                      <span>{formatEventDuration(event)}</span>
                    </div>
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
                </div>
                <ArrowRight class="mt-1 h-4 w-4 flex-shrink-0 opacity-40" />
              </div>
            {/each}
          </div>
        </div>
      {/if}

      <!-- Événements à venir -->
      {#if upcomingEvents.length > 0}
        <div class="mb-4">
          <h3
            class="text-base-content/70 mb-3 flex items-center gap-2 text-sm font-semibold"
          >
            <div class="bg-warning h-2 w-2 rounded-full"></div>
            À venir ({upcomingEvents.length})
          </h3>
          <div class="space-y-3">
            {#each upcomingEvents.slice(0, 3) as event (event.$id)}
              <!-- Limiter à 3 événements à venir -->
              <div
                class="bg-base-200/30 hover:bg-base-200/50 flex cursor-pointer items-start gap-3 rounded-lg p-3 transition-colors"
                onclick={() => navigate(`/eventEdit/${event.$id}`)}
                role="button"
                tabindex="0"
                title="Voir les détails de {event.name}"
                onkeydown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    navigate(`/eventEdit/${event.$id}`);
                  }
                }}
              >
                <div class="min-w-0 flex-1">
                  <div class="flex items-center gap-2">
                    <div class="truncate text-sm font-medium">{event.name}</div>
                    <div class="badge badge-warning badge-xs capitalize">
                      {formatEventDate(event)}
                    </div>
                  </div>

                  <!-- Métadonnées -->
                  <div
                    class="text-base-content/60 mt-2 flex items-center gap-3 text-xs"
                  >
                    <div class="flex items-center gap-1">
                      <Calendar class="h-3 w-3" />
                      <span>{formatEventDate(event)}</span>
                    </div>
                    <div class="flex items-center gap-1">
                      <Clock class="h-3 w-3" />
                      <span>{formatEventDuration(event)}</span>
                    </div>
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
          onclick={() => navigate("/eventEdit")}
        >
          <Calendar class="mr-2 h-4 w-4" />
          Créer un événement
        </button>
      </div>
    {/if}
  </div>
</div>
