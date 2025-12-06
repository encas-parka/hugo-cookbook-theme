<script lang="ts">
  import { X } from "@lucide/svelte";

  interface Props<T> {
    items: T[];
    itemToString?: (item: T) => string;
    onRemove?: (item: T, index: number) => void;
    badgeClass?: string;
    disabled?: boolean;
    maxItems?: number;
    itemKey?: (item: T, index: number) => string | number;
  }

  let {
    items,
    itemToString = (item) => String(item),
    onRemove,
    badgeClass = "badge-success",
    disabled = false,
    maxItems,
    itemKey = (item, index) => index,
  }: Props<T> = $props();

  function handleRemove(item: T, index: number) {
    if (!disabled) {
      onRemove?.(item, index);
    }
  }

  let displayItems = $derived(() =>
    maxItems ? items.slice(0, maxItems) : items,
  );

  let hasMoreItems = $derived(() => maxItems && items.length > maxItems);
</script>

{#if items.length > 0}
  <div class="flex flex-wrap gap-2">
    {#each displayItems as item, index (itemKey(item, index))}
      <div class="badge badge-sm {badgeClass} gap-1">
        <span class="max-w-32 truncate">{itemToString(item)}</span>
        {#if !disabled}
          <button
            type="button"
            class="hover:opacity-70"
            onclick={() => handleRemove(item, index)}
            title="Supprimer"
          >
            <X class="h-3 w-3" />
          </button>
        {/if}
      </div>
    {/each}

    {#if hasMoreItems}
      <div class="badge badge-sm badge-outline">
        +{items.length - maxItems}
      </div>
    {/if}
  </div>
{:else}
  <div class="text-base-content/40 text-sm">
    <slot>Aucun élément sélectionné</slot>
  </div>
{/if}
