<script lang="ts">
  import { Plus, Calendar, Users, ChevronRight, Loader2 } from "@lucide/svelte";
  import { eventsStore } from "../stores/EventsStore.svelte";
  import type { Main } from "../types/appwrite.d";

  interface Props {
    onCreateEvent: () => void;
    onSelectEvent: (eventId: string) => void;
  }

  let { onCreateEvent, onSelectEvent }: Props = $props();

  // Formatage de date simple
  function formatDate(dateStr: string) {
    if (!dateStr) return "Date inconnue";
    return new Date(dateStr).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }
</script>

<div class="container mx-auto max-w-5xl px-4 py-8">
  <!-- Header -->
  <div class="mb-8 flex items-center justify-between">
    <div>
      <h1 class="mb-2 text-3xl font-bold">Mes Événements</h1>
      <p class="text-base-content/60">Gérez vos menus et listes de courses</p>
    </div>
    <button class="btn btn-primary" onclick={onCreateEvent}>
      <Plus class="mr-2 h-5 w-5" />
      Nouvel Événement
    </button>
  </div>

  <!-- Contenu -->
  {#if eventsStore.loading && eventsStore.count === 0}
    <div class="flex items-center justify-center py-20">
      <Loader2 class="text-primary h-8 w-8 animate-spin" />
    </div>
  {:else if eventsStore.error}
    <div class="alert alert-error shadow-lg">
      <span>{eventsStore.error}</span>
    </div>
  {:else if eventsStore.count === 0}
    <div
      class="bg-base-200/50 rounded-box border-base-200 border-2 border-dashed py-20 text-center"
    >
      <div class="bg-base-200 mb-4 inline-block rounded-full p-4">
        <Calendar class="h-8 w-8 opacity-50" />
      </div>
      <h3 class="mb-2 text-lg font-bold">Aucun événement</h3>
      <p class="text-base-content/60 mb-6">
        Vous n'avez pas encore créé d'événement.
      </p>
      <button class="btn btn-primary btn-sm" onclick={onCreateEvent}>
        Créer mon premier événement
      </button>
    </div>
  {:else}
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {#each eventsStore.events as event}
        <button
          class="card bg-base-100 border-base-200 hover:border-primary/50 group border text-left shadow-xl transition-all hover:shadow-2xl"
          onclick={() => onSelectEvent(event.$id)}
        >
          <div class="card-body">
            <div class="mb-2 flex items-start justify-between">
              <h3
                class="card-title group-hover:text-primary text-lg transition-colors"
              >
                {event.name}
              </h3>
              {#if event.dates && event.dates.length > 0}
                <div class="badge badge-ghost text-xs">
                  {formatDate(event.dates[0])}
                </div>
              {/if}
            </div>

            <div
              class="text-base-content/70 mt-2 flex items-center gap-4 text-sm"
            >
              <div class="flex items-center gap-1">
                <Users class="h-4 w-4" />
                <span>
                  <!-- TODO: Calculer le total des invités ou afficher une moyenne -->
                  -
                </span>
              </div>
              <div class="flex items-center gap-1">
                <Calendar class="h-4 w-4" />
                <span>
                  {event.dates?.length || 0} jours
                </span>
              </div>
            </div>

            <div class="card-actions mt-4 justify-end">
              <span
                class="text-primary flex items-center gap-1 text-xs font-semibold opacity-0 transition-opacity group-hover:opacity-100"
              >
                Ouvrir
                <ChevronRight class="h-4 w-4" />
              </span>
            </div>
          </div>
        </button>
      {/each}
    </div>
  {/if}
</div>
