<script lang="ts">
  import {
    Calendar,
    Clock,
    Users,
    ChefHat,
    ArrowRight,
    Rocket,
    Edit,
    FileText,
    Image,
    ShoppingCart,
  } from "@lucide/svelte";
  import type { EnrichedEvent } from "$lib/types/events.d";
  import { navigate } from "$lib/services/simple-router.svelte";
  import { formatDateShort } from "@/lib/utils/products-display";
  import {
    getMealsCount,
    getTotalRecipes,
    getTodosCount,
  } from "$lib/utils/event-stats-helpers";
  import { slide } from "svelte/transition";

  interface Props {
    event: EnrichedEvent;
    cardClass?: string;
    contributorStatus?: "invited" | null;
  }

  let { event, cardClass = "", contributorStatus = null }: Props = $props();
</script>

<div
  class="bg-base-200/60 hover:bg-base-200 flex cursor-pointer items-start gap-3 rounded-lg p-3 transition-colors {cardClass} @container"
  onclick={() => navigate(`/dashboard/eventEdit/${event.$id}`)}
  role="button"
  tabindex="0"
  title="Voir les détails de {event.name}"
  onkeydown={(e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      navigate(`/dashboard/eventEdit/${event.$id}`);
    }
  }}
  transition:slide
>
  <div class="min-w-0 flex-1 space-y-4">
    <div class="flex flex-wrap items-baseline gap-4">
      <div class="text-primary truncate text-lg font-semibold">
        {event.name}
      </div>
      <div class="badge badge-lg h-auto font-medium">
        {#if event.allDates && event.allDates.length > 1 && event.dateStart && event.dateEnd}
          <Calendar class="h-4 w-4" />
          {formatDateShort(event.dateStart)} au {formatDateShort(event.dateEnd)}
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

      {#if contributorStatus === "invited"}
        <div class="badge badge-info badge-lg ms-auto h-auto">
          <Rocket class="size-4" />
          Vous êtes invité à participer
        </div>
      {/if}
    </div>

    <!-- Métadonnées -->
    <div
      class="text-base-content/60 mt-2 flex flex-wrap items-center gap-3 text-xs"
    >
      {#if event.teams && event.teams.length > 0}
        <div class="text-primary flex items-center gap-1 font-semibold">
          <Users class="h-3 w-3" />
          <span>{event.teams.join(", ")}</span>
        </div>
      {/if}

      {#if event.contributors && event.contributors.length > 0}
        <div class="text-base-content/90 flex items-center gap-1">
          <Users class="h-3 w-3" />
          <span
            >{event.contributors.length} participant{event.contributors.length >
            1
              ? "s"
              : ""}</span
          >
          <span>({event.minContrib} requis)</span>
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
    <div class="mt-6 flex flex-wrap justify-end gap-2">
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
