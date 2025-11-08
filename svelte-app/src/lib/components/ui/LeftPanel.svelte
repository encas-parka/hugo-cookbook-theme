<script lang="ts">
  import type { Snippet } from "svelte";
  import { MediaQuery } from "svelte/reactivity";
  import { FunnelIcon, X } from "@lucide/svelte";

  const isDesktop = new MediaQuery("min-width: 768px");

  let filtersDrawerOpen = $state(false);

  interface Props {
    children?: Snippet;
    bgClass?: string;
    width?: string;
  }
  let { children, width = "80", bgClass = "bg-base-300" }: Props = $props();
</script>

{#if isDesktop.current}
  <!-- Conteneur fixe à gauche avec overflow -->
  <div
    class="{bgClass} w-{width} fixed top-0 left-0 z-40 h-screen overflow-y-auto p-4"
  >
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

      <div class="menu bg-base-200 min-h-full w-screen p-4">
        {@render children?.()}
      </div>
    </div>
  </div>

  <!-- FAB flottant pour mobile -->
  <div class="fixed bottom-4 left-4 z-50">
    <label
      for="filters-drawer"
      class="btn btn-primary btn-circle btn-lg shadow-lg"
    >
      <FunnelIcon class="h-6 w-6" />
    </label>
  </div>
{/if}
