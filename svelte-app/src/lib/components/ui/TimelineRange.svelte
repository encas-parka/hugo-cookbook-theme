<script>
  import { Cloud, Sun, Moon } from "@lucide/svelte";
  import { formatDateDayMonthShort, getTimeIcon } from "../../utils/dateRange";

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

  // Vérifie si toutes les dates à venir sont sélectionnées
  const isAllUpcomingDatesSelected = $derived.by(() => {
    if (availableDates.length === 0) return false;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Trouver la première date aujourd'hui ou dans le futur
    const sortedDates = [...availableDates].sort();
    const firstUpcoming = sortedDates.find((date) => new Date(date) >= today);

    return (
      firstUpcoming &&
      localStart === firstUpcoming &&
      localEnd === availableDates[availableDates.length - 1]
    );
  });

  // Vérifie si l'événement est terminé
  const isEventPassed = $derived.by(() => {
    if (availableDates.length === 0) return true;
    const lastDate = new Date(availableDates[availableDates.length - 1]);
    lastDate.setHours(23, 59, 59, 999); // Fin de journée
    return lastDate < new Date();
  });

  // Vérifie s'il existe des dates à venir
  const hasUpcomingDates = $derived.by(() => {
    if (availableDates.length === 0) return false;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return [...availableDates].some((date) => new Date(date) >= today);
  });

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
    if (isAllDatesSelected) return "btn-soft";
    const isInCurrentSelection =
      new Date(date) >= new Date(localStart) &&
      new Date(date) <= new Date(localEnd);

    return isInCurrentSelection ? "" : "btn-dash";
  }

  function selectAllDates() {
    if (availableDates.length === 0) return;

    localStart = availableDates[0];
    localEnd = availableDates[availableDates.length - 1];
    onRangeChange(localStart, localEnd);
  }

  function selectUpcomingDates() {
    if (availableDates.length === 0) return;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Trouver la première date aujourd'hui ou dans le futur
    const sortedDates = [...availableDates].sort();
    const firstUpcoming = sortedDates.find((date) => new Date(date) >= today);

    if (firstUpcoming) {
      localStart = firstUpcoming;
      localEnd = availableDates[availableDates.length - 1];
      onRangeChange(localStart, localEnd);
    }
  }
</script>

<div class=" flex flex-wrap gap-1">
  {#each availableDates as date, index (date)}
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
{#if isEventPassed}
  <!-- Événement terminé : afficher le message -->
  <div class="text-base-content/60 p-1 text-end text-xs italic">
    événement terminé
  </div>
{:else}
  <!-- Événement en cours : afficher les boutons -->
  <div class="flex flex-wrap justify-end gap-2">
    <!-- Bouton "Dates à venir" : s'affiche seulement s'il existe des dates à venir
         et que le range ne correspond pas aux dates à venir -->
    {#if hasUpcomingDates && !isAllUpcomingDatesSelected}
      <button
        class="btn btn-xs btn-link text-primary/80"
        type="button"
        onclick={() => selectUpcomingDates()}
      >
        Dates à venir
      </button>
    {/if}

    <!-- Bouton "Toutes les dates" : s'affiche seulement si toutes les dates ne sont pas sélectionnées -->
    {#if !isAllDatesSelected}
      <button
        class="btn btn-xs btn-link text-primary/80"
        type="button"
        onclick={() => selectAllDates()}
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
