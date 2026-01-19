<script lang="ts">
  import { FunnelX, Tag, Shield } from "@lucide/svelte";
  import Fieldset from "$lib/components/ui/Fieldset.svelte";
  import CheckboxBadge from "../ui/CheckboxBadge.svelte";

  interface Filters {
    tags: string[];
    status: string[];
  }

  interface Props {
    filters: Filters;
    availableTags: string[];
    availableStatus: string[];
    onReset: () => void;
    disabled?: boolean;
  }

  let {
    filters = $bindable(),
    availableTags,
    availableStatus,
    onReset,
    disabled = false,
  }: Props = $props();

  // Gestion des checkboxes multiples
  function toggleArrayItem(array: string[], item: string) {
    const index = array.indexOf(item);
    if (index === -1) {
      array.push(item);
    } else {
      array.splice(index, 1);
    }
    // Trigger reactivity
    filters = { ...filters };
  }
</script>

<div class="mt-16 space-y-4" class:opacity-30={disabled}>
  <div class="mb-4 flex items-center justify-between">
    <h4 class="text-lg font-bold">Filtres</h4>
    <button class="btn btn-warning btn-sm" onclick={onReset} {disabled}>
      <FunnelX class="h-4 w-4" />
      Effacer
    </button>
  </div>

  <!-- Tags -->
  <Fieldset legend="Tags" iconComponent={Tag}>
    {#if availableTags.length > 0}
      <div class="flex flex-wrap gap-2">
        {#each availableTags as tag}
          <CheckboxBadge
            checked={filters.tags.includes(tag)}
            label={tag}
            onchange={() => toggleArrayItem(filters.tags, tag)}
            {disabled}
          />
        {/each}
      </div>
    {:else}
      <p class="text-base-content/60 text-sm">Aucun tag disponible</p>
    {/if}
  </Fieldset>

  <!-- Statut -->
  <Fieldset legend="Statut" iconComponent={Shield}>
    {#if availableStatus.length > 0}
      <div class="flex flex-wrap gap-2">
        {#each availableStatus as st}
          <CheckboxBadge
            checked={filters.status.includes(st)}
            label={st}
            onchange={() => toggleArrayItem(filters.status, st)}
            {disabled}
          />
        {/each}
      </div>
    {:else}
      <p class="text-base-content/60 text-sm">Aucun statut disponible</p>
    {/if}
  </Fieldset>
</div>
