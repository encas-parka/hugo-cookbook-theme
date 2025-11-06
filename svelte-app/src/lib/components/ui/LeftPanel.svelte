<script lang="ts">
  import type { Snippet } from "svelte";
  import { MediaQuery } from 'svelte/reactivity';
  import { FunnelIcon, X } from '@lucide/svelte';

  const isDesktop = new MediaQuery('min-width: 768px')

  let filtersDrawerOpen = $state(false);

  interface Props {
    children?: Snippet
  }
  let {children}: Props = $props();

  </script>

  {#if isDesktop.current}
  <!-- Conteneur fixe à gauche avec overflow -->
  <div class="fixed left-0 top-0 h-screen w-80 overflow-y-auto bg-base-200 border-r border-base-300 z-40 p-4">

    {@render children?.()}
  </div>
  {:else}
  <div class="drawer">
    <input
      id="filters-drawer"
      type="checkbox"
      class="drawer-toggle"
      bind:checked={filtersDrawerOpen}
    />

    <div class="drawer-side">
      <label for="filters-drawer" class="drawer-overlay"></label>

      <div class="menu bg-base-200 min-h-full w-80 p-4">
        {@render children?.()}

      </div>
    </div>
  </div>

  <!-- FAB flottant pour mobile -->
  <div class="fixed bottom-4 left-4 z-50">
    <label for="filters-drawer" class="btn btn-primary btn-circle btn-lg shadow-lg">
      <FunnelIcon class="w-6 h-6" />
    </label>
  </div>
  {/if}
