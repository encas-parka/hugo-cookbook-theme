<script lang="ts">
  import {
    FunnelIcon,
    FunnelX,
    Search,
    ShoppingBasket,
    Snowflake,
    Store,
    User,
    X,
  } from "@lucide/svelte";
  import { productsStore } from "../stores/ProductsStore.svelte";
  import { getProductTypeInfo } from "../utils/products-display";
  import TimelineRange from "./ui/TimelineRange.svelte";

  const filters = $derived(productsStore.filters);
  const uniqueStores = $derived(productsStore.uniqueStores);
  const uniqueWho = $derived(productsStore.uniqueWho);
  const uniqueProductTypes = $derived(productsStore.uniqueProductTypes);
</script>

<div class="mb-4 flex items-center justify-between">
  <h3 class="flex items-center gap-2 text-lg font-semibold">
    <FunnelIcon class="h-5 w-5" />
    Filtres
  </h3>
  <button
    class="btn btn-sm btn-ghost"
    onclick={() => productsStore.clearFilters()}
  >
    <X class="h-4 w-4" />
    Tout effacer
  </button>
</div>

<div class="mb-4 flex flex-wrap items-center justify-between gap-4">
  <div class="form-control">
    <label class="label" for="search-input">
      <span class="label-text">Recherche</span>
    </label>
    <div class="input flex items-center gap-2">
      <Search class="h-4 w-4" />
      <input
        id="search-input"
        type="text"
        placeholder="Nom du produit..."
        class="grow"
        value={filters.searchQuery}
        oninput={(e) => productsStore.setSearchQuery(e.currentTarget.value)}
      />
    </div>
    <!-- Groupement -->
  </div>
  <div class="form-control">
    <label class="label flex" for="grouping-select">
      <span class="label-text">Groupement</span>
    </label>
    <div class="join" id="grouping-select">
      <input
        class="join-item btn btn-sm md:btn-md"
        type="radio"
        name="grouping-options"
        aria-label="Aucun"
        checked={filters.groupBy === "none"}
        onchange={() => productsStore.setGroupBy("none")}
      />
      <input
        class="join-item btn btn-sm md:btn-md"
        type="radio"
        name="grouping-options"
        aria-label="Par magasin"
        checked={filters.groupBy === "store"}
        onchange={() => productsStore.setGroupBy("store")}
      />
      <input
        class="join-item btn btn-sm md:btn-md"
        type="radio"
        name="grouping-options"
        aria-label="Par type"
        checked={filters.groupBy === "productType"}
        onchange={() => productsStore.setGroupBy("productType")}
      />
    </div>
  </div>
</div>
<TimelineRange
  availableDates={productsStore.availableDates}
  currentRange={productsStore.dateRange}
  onRangeChange={(start, end) => productsStore.setDateRange(start, end)}
/>

<!-- Filtres par type, température, magasin et qui -->
<div class="mt-4 flex">
  {#if uniqueProductTypes.length > 0}
    <div class="flex-1">
      <fieldset>
        <div class="flex items-center justify-between">
          <legend class="label">
            <div class="label-text">Types & Température</div>
          </legend>
          {#if filters.selectedProductTypes.length > 0 || filters.selectedTemperatures.length > 0}
            <button
              class="btn btn-sm btn-circle btn-outline text-error hover:bg-error/10"
              onclick={() => productsStore.clearTypeAndTemperatureFilters()}
              title="Effacer les filtres de types et température"
            >
              <FunnelX />
            </button>
          {/if}
        </div>
        <div class="mb-2 flex flex-wrap items-center gap-2" role="group">
          {#each uniqueProductTypes as type (type)}
            {@const typeInfo = getProductTypeInfo(type)}
            <button
              class="btn btn-sm {filters.selectedProductTypes.length === 0
                ? 'btn-soft btn-accent'
                : filters.selectedProductTypes.includes(type)
                  ? 'btn-accent'
                  : 'btn-dash btn-accent'}"
              onclick={() => productsStore.toggleProductType(type)}
            >
              <typeInfo.icon class="mr-1 h-5 w-5" />
              {typeInfo.displayName}
            </button>
          {/each}
        </div>
        <!-- Filtres température -->
        <div class="flex flex-wrap items-center gap-2" role="group">
          <button
            class="btn btn-sm {filters.selectedTemperatures.length === 0
              ? 'btn-soft btn-success'
              : filters.selectedTemperatures.includes('frais')
                ? 'btn-success'
                : 'btn-dash btn-success'}"
            onclick={() => productsStore.toggleTemperature("frais")}
          >
            <ShoppingBasket class="h-5 w-5" />
            Frais
          </button>
          <button
            class="btn btn-sm {filters.selectedTemperatures.length === 0
              ? 'btn-soft btn-info'
              : filters.selectedTemperatures.includes('surgele')
                ? 'btn-info'
                : 'btn-dash btn-info'}"
            onclick={() => productsStore.toggleTemperature("surgele")}
          >
            <Snowflake class="h-5 w-5" />
            Surgelés
          </button>
        </div>
      </fieldset>
    </div>
  {/if}
  <div class="mt-4 flex flex-col gap-6 lg:flex-row">
    {#if uniqueStores.length > 0}
      <div class="flex-1">
        <fieldset>
          <legend class="label">
            <span class="label-text text-sm">Magasins</span>
          </legend>
          <div class="flex flex-wrap items-center gap-2" role="group">
            {#each uniqueStores as store (store)}
              <button
                class="btn btn-xs {filters.selectedStores.length === 0
                  ? 'btn-soft btn-accent'
                  : filters.selectedStores.includes(store)
                    ? 'btn-accent'
                    : 'btn-dash btn-accent'}"
                onclick={() => productsStore.toggleStore(store)}
              >
                <Store class="mr-1 h-3 w-3" />
                {store}
              </button>
            {/each}
            {#if filters.selectedStores.length > 0}
              <button
                class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10"
                onclick={() => productsStore.clearStoreFilters()}
                title="Effacer les filtres de magasins"
              >
                <X class="h-3 w-3" />
              </button>
            {/if}
          </div>
        </fieldset>
      </div>
    {/if}

    {#if uniqueWho.length > 0}
      <div class="flex-1">
        <fieldset>
          <legend class="label">
            <span class="label-text text-sm">Qui</span>
          </legend>
          <div class="flex flex-wrap items-center gap-2" role="group">
            {#each uniqueWho as who (who)}
              <button
                class="btn btn-xs {filters.selectedWho.length === 0
                  ? ' btn-soft btn-info'
                  : filters.selectedWho.includes(who)
                    ? ' btn-info'
                    : 'btn-dash btn-info'}"
                onclick={() => productsStore.toggleWho(who)}
              >
                <User class="mr-1 h-3 w-3" />
                {who}
              </button>
            {/each}
            {#if filters.selectedWho.length > 0}
              <button
                class="btn btn-xs btn-circle btn-ghost text-error hover:bg-error/10"
                onclick={() => productsStore.clearWhoFilters()}
                title="Effacer les filtres de qui"
              >
                <X class="h-3 w-3" />
              </button>
            {/if}
          </div>
        </fieldset>
      </div>
    {/if}
  </div>
</div>
