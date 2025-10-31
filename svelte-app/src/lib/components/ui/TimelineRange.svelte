<script>
  import { Cloud, Sun, Moon } from "@lucide/svelte";

  import { productsStore } from "../../stores/ProductsStore.svelte";

  let { allDates = [] } = $props();

  const sortedDates = [...allDates].sort();

  let firstAllDate = sortedDates[0];
  let lastAllDate = sortedDates[sortedDates.length - 1];
  let startDate = $state(firstAllDate);
  let endDate = $state(lastAllDate);

  function handleDateClick(clickedDate) {
    if (startDate === clickedDate && endDate === clickedDate) {
      selectAllDates();
    } else if (new Date(clickedDate) < new Date(startDate)) {
      startDate = clickedDate;
    } else if (new Date(clickedDate) > new Date(endDate)) {
      endDate = clickedDate;
    } else {
      startDate = clickedDate;
      endDate = clickedDate;
    }
  }

  function getDateButtonClass(date) {
    // En mode "select", les dates dans la sélection courante sont btn-soft + btn-primary
    const isInCurrentSelection =
      new Date(date) >= new Date(startDate) &&
      new Date(date) <= new Date(endDate);
    return isInCurrentSelection
      ? "btn-soft btn-primary"
      : "btn-dash btn-primary opacity-80";
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
    startDate = firstAllDate;
    endDate = lastAllDate;
  }

  $effect(() => {
    productsStore.setDateRange(startDate, endDate);
  });
</script>

<div class="space-y-4">
  <!-- Date selection for desktop (appears below join inputs in select mode) -->
  <div class="space-y-2">
    <fieldset>
      <legend class="label">
        <span class="label-text">Dates incluses</span>
      </legend>
      <div class="flex flex-wrap gap-1">
        {#each sortedDates as date, index (date)}
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
        <button
          class="btn btn-sm btn-primary btn-outline ms-4"
          type="button"
          onclick={() => selectAllDates()}
        >
          <span>Toutes les dates</span>
        </button>
      </div>
    </fieldset>
  </div>
</div>
