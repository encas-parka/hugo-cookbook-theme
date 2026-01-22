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
    Edit,
    FileText,
    Image,
    Rocket,
  } from "@lucide/svelte";
  import { formatDateRelative } from "$lib/utils/date-helpers";
  import type { EnrichedEvent } from "$lib/types/events.d";
  import { navigate } from "$lib/services/simple-router.svelte";
  import { formatDateShort } from "@/lib/utils/products-display";
  import { globalState } from "$lib/stores/GlobalState.svelte";
  import { eventsStore } from "$lib/stores/EventsStore.svelte";
  import {
    getMealsCount,
    getTotalRecipes,
    getTodosCount,
  } from "$lib/utils/event-stats-helpers";
  import { slide } from "svelte/transition";

  interface Props {
    events: EnrichedEvent[];
    cardClass?: string;
    loading?: boolean;
  }

  let { events = [], loading = false, cardClass = "" }: Props = $props();

  function hasInvitation(eventId: string) {
    return eventsStore.getContributorStatus(eventId) === "invited";
  }
</script>

{#if loading}
  <div class="flex items-center justify-center py-8">
    <span class="loading loading-spinner loading-md"></span>
  </div>
{:else if events.length === 0}
  <div class="py-6 text-center">
    <Calendar size={32} class="text-base-content/20 mx-auto mb-3" />
    <p class="text-base-content/60 mb-4 text-sm">Aucun événement prévu</p>
  </div>
{:else}
  <!-- Événements à venir -->
  {#if events.length > 0}
    <div class="my-4">
      <div class="space-y-3">
        {#each events as event (event.$id)}
          <div
            class="bg-base-200/60 hover:bg-base-200 flex cursor-pointer items-start gap-3 rounded-lg p-3 transition-colors {cardClass} @container"
            onclick={() => navigate(`/dashboard/eventEdit/${event.$id}`)}
            role="button"
            tabindex="0"
            title="Voir les détails de {event.name}"
            onkeydown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                () => navigate(`/eventEdit/${event.$id}`);
              }
            }}
            transition:slide
          >
            <div class="min-w-0 flex-1">
              <div class="flex flex-wrap items-center gap-4">
                <div class="text-primary truncate text-lg font-semibold">
                  {event.name}
                </div>
                <div class="badge badge-soft badge-secondary font-medium">
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

                <div
                  class="badge badge-outline badge-sm font-medium {event.status ===
                  'proposition'
                    ? 'badge-accent'
                    : 'badge-success'}"
                >
                  {event.status === "proposition" ? "proposition" : "confirmé"}
                </div>
                {#if hasInvitation(event.$id)}
                  <div class="badge badge-info badge-lg ms-auto">
                    <Rocket class="size-4" />
                    Vous êtes invité à participer
                  </div>
                {/if}
              </div>

              <!-- Métadonnées -->
              <div
                class="text-base-content/60 mt-2 flex flex-wrap items-center gap-3 text-xs"
              >
                <!-- <div class="flex items-center gap-1">
                      <MapPin class="h-3 w-3" />
                      <span>{getEventLocation(event)}</span>
                    </div> -->
                {#if event.teams && event.teams.length > 0}
                  <div
                    class="text-primary flex items-center gap-1 font-semibold"
                  >
                    <Users class="h-3 w-3" />
                    <span>{event.teams.join(", ")}</span>
                  </div>
                {/if}

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
                <div class="flex items-center gap-1">
                  <ChefHat class="h-3 w-3" />
                  <span>{getMealsCount(event)} repas</span>
                </div>
                <div class="flex items-center gap-1">
                  <ChefHat class="h-3 w-3" />
                  <span>{getTotalRecipes(event)} recettes</span>
                </div>
                <div class="flex items-center gap-1">
                  <Clock class="h-3 w-3" />
                  <span>{getTodosCount(event)} tâches</span>
                </div>
              </div>

              <!-- Actions -->
              <div class=" mt-3 flex flex-wrap justify-end gap-2">
                <button
                  class="btn btn-outline btn-secondary @max-sm:btn-xs btn-sm"
                  onclick={(e) => {
                    e.stopPropagation();
                    navigate(`/dashboard/eventEdit/${event.$id}`);
                  }}
                >
                  <Edit class="size-4 @max-xs:size-3" />
                  Éditer
                </button>
                <button
                  class="btn btn-outline btn-secondary @max-sm:btn-xs btn-sm"
                  onclick={(e) => {
                    e.stopPropagation();
                    navigate(`/dashboard/eventEdit/recipes/${event.$id}`);
                  }}
                >
                  <FileText class="size-4 @max-xs:size-3" />
                  Recettes
                </button>
                <button
                  class="btn btn-outline btn-secondary @max-sm:btn-xs btn-sm"
                  onclick={(e) => {
                    e.stopPropagation();
                    navigate(`/dashboard/eventEdit/products/${event.$id}`);
                  }}
                >
                  <ShoppingCart class="size-4 @max-xs:size-3" />
                  Produits
                </button>
                <button
                  class="btn btn-outline btn-secondary @max-sm:btn-xs btn-sm"
                  onclick={(e) => {
                    e.stopPropagation();
                    navigate(`/dashboard/eventEdit/posters/${event.$id}`);
                  }}
                >
                  <Image class="size-4 @max-xs:size-3" />
                  Affiches
                </button>
              </div>
            </div>
            <ArrowRight class="mt-1 h-4 w-4 flex-shrink-0 opacity-40" />
          </div>
        {/each}
      </div>
    </div>
  {/if}
{/if}
