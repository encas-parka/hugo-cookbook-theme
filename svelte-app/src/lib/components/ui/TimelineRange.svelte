<script>
  import { Cloud, Sun, Moon } from "@lucide/svelte";

  let {
    availableDates = [],
    currentRange = { start: null, end: null },
    onRangeChange,
  } = $props();

  // availableDates est déjà trié (vient des données Hugo)
  // Pas besoin d'un derived sortedDates redondant

  // État local pour interaction immédiate
  let localStart = $state(currentRange.start);
  let localEnd = $state(currentRange.end);

  const isAllDatesSelected = $derived(
    availableDates.length > 0 &&
      localStart === availableDates[0] &&
      localEnd === availableDates[availableDates.length - 1],
  );

  // Synchronisation avec les props
  $effect(() => {
    localStart = currentRange.start;
    localEnd = currentRange.end;
  });

  function handleDateClick(clickedDate) {
    if (localStart === clickedDate && localEnd === clickedDate) {
      selectAllDates();
    } else if (new Date(clickedDate) < new Date(localStart)) {
      localStart = clickedDate;
    } else if (new Date(clickedDate) > new Date(localEnd)) {
      localEnd = clickedDate;
    } else {
      localStart = clickedDate;
      localEnd = clickedDate;
    }

    // Notifier le parent via le callback
    onRangeChange(localStart, localEnd);
  }

  function getDateButtonClass(date) {
    // En mode "select", les dates dans la sélection courante sont btn-soft + btn-primary
    const isInCurrentSelection =
      new Date(date) >= new Date(localStart) &&
      new Date(date) <= new Date(localEnd);
    return isInCurrentSelection
      ? "btn-soft btn-secondary"
      : "btn-dash btn-secondary opacity-80";
  }

  function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
    });
  }

  function getTimeIcon(dateStr) {
    const date = new Date(dateStr);
    const hour = date.getUTCHours();

    if (hour === 12) return "sun";
    if (hour === 20) return "moon";
    if (hour === 8) return "cloud";
    return null;
  }

  function selectAllDates() {
    if (availableDates.length === 0) return;

    localStart = availableDates[0];
    localEnd = availableDates[availableDates.length - 1];
    onRangeChange(localStart, localEnd);
  }
</script>

<div class=" flex flex-wrap gap-1">
  {#each availableDates as date, index (date)}
    <button
      class="btn btn-sm {getDateButtonClass(date)}"
      onclick={() => handleDateClick(date)}
    >
      <span>{formatDate(date)}</span>
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
{#if !isAllDatesSelected}
  <div class="flex justify-end">
    <button
      class="btn btn-xs btn-link text-primary/80"
      type="button"
      onclick={() => selectAllDates()}
    >
      Toutes les dates
    </button>
  </div>
{:else}
  <div class="text-base-content/60 p-1 text-end text-xs italic">
    toutes les dates sont incluses
  </div>
{/if}
