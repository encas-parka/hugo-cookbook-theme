<script>
  import { Cloud, Sun, Moon } from "@lucide/svelte";

  let { allDates = [], setDateRange } = $props();

  const sortedDates = [...allDates].sort();

  let mode = $state("all");
  let firstAllDate = sortedDates[0];
  let lastAllDate = sortedDates[sortedDates.length - 1];
  let startDate = $state(firstAllDate);
  let endDate = $state(lastAllDate);
  let showModal = $state(false);

  function handleDateClick(clickedDate) {
    if (startDate === clickedDate && endDate === clickedDate) {
      startDate = sortedDates[0];
      endDate = sortedDates[sortedDates.length - 1];
    } else if (new Date(clickedDate) < new Date(startDate)) {
      startDate = clickedDate;
    } else if (new Date(clickedDate) > new Date(endDate)) {
      endDate = clickedDate;
    } else {
      startDate = clickedDate;
      endDate = clickedDate;
    }
  }

  function isInRange(date) {
    return (
      new Date(date) >= new Date(startDate) &&
      new Date(date) <= new Date(endDate)
    );
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
    startDate = sortedDates[0];
    endDate = sortedDates[sortedDates.length - 1];
  }

  function handleModeChange(newMode) {
    mode = newMode;
    if (newMode === "all") {
      setDateRange(firstAllDate, lastAllDate);
      selectAllDates();
      showModal = false;
    } else {
      showModal = true;
    }
  }

  function confirmSelection() {
    setDateRange(startDate, endDate);
    showModal = false;
  }
</script>

<div class="space-y-4">
  <!-- Join buttons -->
  <div class="join w-full">
    <input
      class="join-item btn flex-1"
      type="radio"
      name="date-mode"
      aria-label="Toutes les dates"
      checked={mode === "all"}
      onchange={() => handleModeChange("all")}
    />
    <input
      class="join-item btn flex-1"
      type="radio"
      name="date-mode"
      aria-label="Sélectionner dates"
      checked={mode === "select"}
      onchange={() => handleModeChange("select")}
    />
  </div>

  <!-- Modal -->
  {#if showModal}
    <div class="modal modal-open">
      <div class="modal-box w-full">
        <h3 class="mb-4 text-lg font-bold">Sélectionner une plage de dates</h3>

        <div class="mb-6 space-y-2">
          <button
            class="btn btn-sm btn-outline w-full"
            onclick={selectAllDates}
          >
            Toutes les dates
          </button>

          <div class="flex flex-wrap gap-1">
            {#each sortedDates as date, index}
              <button
                class="btn btn-sm {isInRange(date)
                  ? 'btn-primary'
                  : 'btn-ghost'}"
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
        </div>

        <div class="modal-action">
          <button
            class="btn"
            onclick={() => {
              showModal = false;
              mode = "all";
            }}
          >
            Annuler
          </button>
          <button class="btn btn-primary" onclick={confirmSelection}>
            Confirmer
          </button>
        </div>
      </div>
    </div>
  {/if}
</div>
