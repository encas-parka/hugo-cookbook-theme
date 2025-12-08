<script lang="ts">
  import { Search } from "@lucide/svelte";
  import { keyboardNavigation } from "$lib/attachments/keyboardNavigation.svelte";
  import { clickOutside } from "$lib/attachments/clickOutside.svelte";

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
    showAllOnFocus?: boolean;
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
    maxResults = undefined,
    id,
    showAllOnFocus = true,
  }: Props<T> = $props();

  let selectedIndex = $state(-1);
  let isFocused = $state(false);
  let wrapperElement: HTMLDivElement;
  let inputElement: HTMLInputElement;

  let filteredItems = $derived.by(() => {
    // Si focus et pas de texte, montrer tous les éléments si showAllOnFocus est true
    if (isFocused && value.trim().length === 0 && showAllOnFocus) {
      return maxResults ? items.slice(0, maxResults) : items;
    }

    const lowerQuery = value.toLowerCase().trim();
    if (lowerQuery.length < minQueryLength) return [];

    const filtered = items.filter((item) =>
      itemToString(item).toLowerCase().includes(lowerQuery),
    );

    return maxResults ? filtered.slice(0, maxResults) : filtered;
  });

  // Déterminer si les résultats doivent être affichés
  let shouldShowResults = $derived.by(() => {
    return isFocused && filteredItems.length > 0;
  });

  // Gérer le selectedIndex de manière réactive
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
    inputElement?.focus();
  }

  function handleKeydown(event: KeyboardEvent) {
    if (!filteredItems.length) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      selectedIndex = (selectedIndex + 1) % filteredItems.length;
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      selectedIndex =
        selectedIndex <= 0 ? filteredItems.length - 1 : selectedIndex - 1;
    } else if (
      (event.key === "Enter" || event.key === "Tab") &&
      selectedIndex >= 0
    ) {
      event.preventDefault();
      handleSelectItem(filteredItems[selectedIndex]);
    } else if (event.key === "Escape") {
      selectedIndex = -1;
      inputElement?.blur();
    }
  }

  function handleFocus() {
    isFocused = true;
  }

  function handleBlur() {
    // Petit délai pour permettre le clic sur les éléments de la liste
    setTimeout(() => {
      isFocused = false;
      selectedIndex = -1;
    }, 150);
  }

  function handleClickOutside() {
    isFocused = false;
    selectedIndex = -1;
  }
</script>

<div
  class="relative"
  bind:this={wrapperElement}
  {@attach clickOutside(handleClickOutside)}
>
  <label class="input input-sm input-bordered w-full">
    <Search class="h-4 w-4 opacity-50" />
    <input
      type="text"
      {id}
      {placeholder}
      class="grow"
      bind:value
      onkeydown={handleKeydown}
      onfocus={handleFocus}
      onblur={handleBlur}
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

  {#if shouldShowResults}
    <div class="absolute z-10 mt-1 w-full">
      <ul
        class="rounded-box bg-base-100 border-base-300 max-h-60 overflow-y-auto border shadow-lg"
      >
        {#each filteredItems as item, index (itemToString(item))}
          <li>
            <button
              class="hover:bg-base-200 focus:bg-base-200 w-full px-3 py-2 text-left text-sm {index ===
                selectedIndex && 'bg-base-200'}"
              onclick={() => handleSelectItem(item)}
              {disabled}
            >
              <span class="block truncate">{itemToString(item)}</span>
            </button>
          </li>
        {/each}
      </ul>
    </div>
  {/if}

  {#if isFocused && value.length >= minQueryLength && filteredItems.length === 0 && !loading}
    <div
      class="rounded-box bg-base-100 border-base-300 text-base-content/60 absolute z-10 mt-1 w-full border p-4 text-center text-sm shadow-lg"
    >
      Aucun résultat trouvé
    </div>
  {/if}
</div>
