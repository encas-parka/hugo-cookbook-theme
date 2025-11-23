<script lang="ts">
  import { Cloud, Sun, Moon } from "@lucide/svelte";
  import { formatDateDayMonthShort, getTimeIcon } from "../../utils/dateRange";
  import type { DateRangeStore } from "../../stores/DateRangeStore.svelte";

  let {
    dateStore,
  }: {
    dateStore: DateRangeStore;
  } = $props();

  // État local pour interaction immédiate (optimiste)
  let localStart = $state(dateStore.start);
  let localEnd = $state(dateStore.end);

  // Synchronisation avec le store
  $effect(() => {
    localStart = dateStore.start;
    localEnd = dateStore.end;
  });

  function handleDateClick(clickedDate: string) {
    if (localStart === clickedDate && localEnd === clickedDate) {
      dateStore.selectAll();
    } else if (localStart && new Date(clickedDate) < new Date(localStart)) {
      dateStore.setRange(clickedDate, localEnd);
    } else if (localEnd && new Date(clickedDate) > new Date(localEnd)) {
      dateStore.setRange(localStart, clickedDate);
    } else {
      dateStore.setRange(clickedDate, clickedDate);
    }
  }

  function getDateButtonClass(date: string) {
    // En mode "select", les dates dans la sélection courante sont btn-soft + btn-primary
    if (dateStore.isFullRange) return "btn-soft";

    if (!localStart || !localEnd) return "btn-dash";

    const isInCurrentSelection =
      new Date(date) >= new Date(localStart) &&
      new Date(date) <= new Date(localEnd);

    return isInCurrentSelection ? "" : "btn-dash";
  }
</script>

<div class="flex flex-wrap gap-1">
  {#each dateStore.dates as date (date)}
    <button
      class="btn btn-sm btn-secondary {getDateButtonClass(date)}"
      onclick={() => handleDateClick(date)}
    >
      <span>{formatDateDayMonthShort(date)}</span>
      {#if getTimeIcon(date) === "sun"}
        <Sun size={16} />
      {:else if getTimeIcon(date) === "moon"}
        <Moon size={16} />
      {:else if getTimeIcon(date) === "cloud"}
        <Cloud size={16} />
      {/if}
    </button>
  {/each}
</div>

{#if dateStore.isEventPassed}
  <!-- Événement terminé : afficher le message -->
  <div class="text-base-content/60 p-1 text-end text-xs italic">
    événement terminé
  </div>
{:else}
  <!-- Événement en cours : afficher les boutons -->
  <div class="flex flex-wrap justify-end gap-2">
    <!-- Bouton "Dates à venir" -->
    {#if dateStore.hasUpcomingDates && !dateStore.isUpcomingRange}
      <button
        class="btn btn-xs btn-link text-primary/80"
        type="button"
        onclick={() => dateStore.selectUpcoming()}
      >
        Dates à venir
      </button>
    {/if}

    <!-- Bouton "Toutes les dates" -->
    {#if !dateStore.isFullRange}
      <button
        class="btn btn-xs btn-link text-primary/80"
        type="button"
        onclick={() => dateStore.selectAll()}
      >
        Toutes les dates
      </button>
    {:else}
      <div class="text-base-content/60 p-1 text-end text-xs italic">
        toutes les dates sont incluses
      </div>
    {/if}
  </div>
{/if}
