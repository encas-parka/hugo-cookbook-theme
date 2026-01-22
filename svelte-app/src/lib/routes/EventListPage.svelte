<script lang="ts">
  import { onMount } from "svelte";
  import { eventsStore } from "$lib/stores/EventsStore.svelte";
  import { ArrowLeft } from "@lucide/svelte";
  import { navigate } from "$lib/services/simple-router.svelte";
  import {
    getMealsCount,
    getTotalRecipes,
    getTodosCount,
  } from "$lib/utils/event-stats-helpers";
  import { formatDateShort } from "@/lib/utils/products-display";
  import {
    Calendar,
    Users,
    MapPin,
    ChefHat,
    Edit,
    FileText,
    Image,
    ShoppingCart,
    Clock,
  } from "@lucide/svelte";

  let pastEvents = $derived(eventsStore.pastEvents);
  let loading = $state(false);
  let loaded = $state(false);

  function goBack() {
    navigate("/dashboard");
  }

  // Charger tous les événements passés au montage
  onMount(async () => {
    loading = true;
    try {
      await eventsStore.loadAllPastEvents();
      loaded = true;
    } catch (err) {
      console.error("[EventListPage] Erreur lors du chargement:", err);
    } finally {
      loading = false;
    }
  });

  // Helper pour obtenir le lieu (même logique que ListEventCard)
  function getEventLocation(event) {
    return "Lieu à définir"; // Placeholder
  }

  // Helper pour vérifier si l'utilisateur a une invitation
  function hasInvitation(eventId) {
    return eventsStore.getContributorStatus(eventId) === "invited";
  }
</script>

<div class="container mx-auto p-4">
  <div class="mb-4 flex items-center gap-2">
    <button class="btn btn-ghost btn-sm" onclick={goBack}>
      <ArrowLeft class="h-4 w-4" />
    </button>
    <h1 class="text-2xl font-bold">Événements passés</h1>
  </div>

  {#if loading}
    <div class="flex items-center justify-center py-8">
      <span class="loading loading-spinner loading-md"></span>
    </div>
  {:else if pastEvents.length === 0}
    <div class="py-6 text-center">
      <Calendar class="mx-auto mb-3 h-12 w-12 opacity-20" />
      <p class="text-base-content/60">Aucun événement passé</p>
    </div>
  {:else}
    <div class="space-y-3">
      {#each pastEvents as event (event.$id)}
        <div
          class="bg-base-200 hover:bg-base-300 flex cursor-pointer items-start gap-3 rounded-lg p-3 transition-colors"
          onclick={() => navigate(`/dashboard/eventEdit/${event.$id}`)}
          onkeydown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              navigate(`/dashboard/eventEdit/${event.$id}`);
            }
          }}
          role="button"
          tabindex="0"
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
            </div>

            <!-- Métadonnées -->
            <div
              class="text-base-content/60 mt-2 flex flex-wrap items-center gap-3 text-xs"
            >
              <div class="flex items-center gap-1">
                <MapPin class="h-3 w-3" />
                <span>{getEventLocation(event)}</span>
              </div>
              {#if event.contributors && event.contributors.length > 0}
                <div class="flex items-center gap-1">
                  <Users class="h-3 w-3" />
                  <span
                    >{event.contributors.length} participant{event.contributors
                      .length > 1
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
              {#if event.teams && event.teams.length > 0}
                <div class="flex items-center gap-1">
                  <Users class="h-3 w-3" />
                  <span>{event.teams.join(", ")}</span>
                </div>
              {/if}
            </div>

            <!-- Actions -->
            <div class="mt-3 flex flex-wrap gap-2">
              <button
                class="btn btn-outline btn-xs"
                onclick={(e) => {
                  e.stopPropagation();
                  navigate(`/dashboard/eventEdit/${event.$id}`);
                }}
              >
                <Edit class="h-3 w-3" />
                Éditer
              </button>
              <button
                class="btn btn-outline btn-xs"
                onclick={(e) => {
                  e.stopPropagation();
                  navigate(`/dashboard/eventEdit/recipes/${event.$id}`);
                }}
              >
                <FileText class="h-3 w-3" />
                Recettes
              </button>
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
              <button
                class="btn btn-outline btn-xs"
                onclick={(e) => {
                  e.stopPropagation();
                  navigate(`/dashboard/eventPosters/${event.$id}`);
                }}
              >
                <Image class="h-3 w-3" />
                Affiches
              </button>
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>
