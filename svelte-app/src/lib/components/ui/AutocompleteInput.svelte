<script lang="ts">
  import { Search } from "@lucide/svelte";
  import { keyboardNavigation } from "$lib/attachments/keyboardNavigation.svelte";

  interface Props<T> {
    value?: string;
    placeholder?: string;
    items: T[];
    itemToString?: (item: T) => string;
    onSelect?: (item: T) => void;
    disabled?: boolean;
    autoFocus?: boolean;
    loading?: boolean;
    minQueryLength?: number;
    maxResults?: number;
    id?: string;
  }

  let {
    value = $bindable(""),
    placeholder = "Rechercher...",
    items,
    itemToString = (item) => String(item),
    onSelect,
    disabled = false,
    autoFocus = false,
    loading = false,
    minQueryLength = 1,
    maxResults = 10,
    id,
  }: Props<T> = $props();

  let selectedIndex = $state(-1);
  let inputElement: HTMLInputElement;

  let filteredItems = $derived(() => {
    const lowerQuery = value.toLowerCase().trim();
    if (lowerQuery.length < minQueryLength) return [];

    return items
      .filter(item =>
        itemToString(item).toLowerCase().includes(lowerQuery)
      )
      .slice(0, maxResults);
  });

  $effect(() => {
    if (filteredItems.length > 0 && selectedIndex === -1) {
      selectedIndex = 0;
    } else if (filteredItems.length === 0) {
      selectedIndex = -1;
    }
  });

  function handleSelectItem(item: T) {
    onSelect?.(item);
    value = "";
    selectedIndex = -1;
  }

  function handleKeydown(event: KeyboardEvent) {
    if (!filteredItems.length) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      selectedIndex = (selectedIndex + 1) % filteredItems.length;
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      selectedIndex = selectedIndex <= 0 ? filteredItems.length - 1 : selectedIndex - 1;
    } else if (
      (event.key === "Enter" || event.key === "Tab") &&
      selectedIndex >= 0
    ) {
      event.preventDefault();
      handleSelectItem(filteredItems[selectedIndex]);
    } else if (event.key === "Escape") {
      value = "";
      selectedIndex = -1;
    }
  }

  function handleClickOutside(event: MouseEvent) {
    if (!inputElement?.contains(event.target as Node)) {
      selectedIndex = -1;
    }
  }

  $effect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });
</script>

<div class="relative">
  <label class="input input-sm input-bordered w-full">
    <Search class="h-4 w-4 opacity-50" />
    <input
      type="text"
      {id}
      placeholder={placeholder}
      class="grow"
      bind:value
      onkeydown={handleKeydown}
      {disabled}
      bind:this={inputElement}
      {@attach keyboardNavigation({
        shouldFocus: autoFocus,
      })}
    />
    {#if loading}
      <div class="loading loading-spinner loading-xs"></div>
    {/if}
  </label>

  {#if value.length >= minQueryLength && filteredItems.length > 0}
    <ul class="menu absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-box bg-base-100 border border-base-300 shadow-lg">
      {#each filteredItems as item, index (itemToString(item))}
        <li>
          <button
            class="flex items-center gap-2 py-2 text-sm {index === selectedIndex && 'active'}"
            onclick={() => handleSelectItem(item)}
            {disabled}
          >
            <span class="truncate">{itemToString(item)}</span>
          </button>
        </li>
      {/each}
    </ul>
  {/if}

  {#if value.length >= minQueryLength && filteredItems.length === 0 && !loading}
    <div class="absolute z-10 mt-1 w-full rounded-box bg-base-100 border border-base-300 p-4 text-center text-sm text-base-content/60 shadow-lg">
      Aucun résultat trouvé
    </div>
  {/if}
</div>
