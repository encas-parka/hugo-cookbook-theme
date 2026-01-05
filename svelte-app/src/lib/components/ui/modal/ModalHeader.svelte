<script lang="ts">
  import type { Snippet } from "svelte";
  import { X, ChevronLeft } from "@lucide/svelte";
  import { globalState } from "$lib/stores/GlobalState.svelte";

  interface Props {
    title: string;
    subtitle?: string;
    showBackButton?: boolean;
    onClose: () => void;
    children?: Snippet;
  }

  let {
    title,
    subtitle,
    showBackButton = false,
    onClose,
    children,
  }: Props = $props();
</script>

<div class="border-base-300 flex-none border-b px-4 py-3">
  <div class="absolute top-2 right-2">
    {#if !globalState.isMobile}
      <button
        class="btn btn-circle btn-ghost btn-sm flex-none"
        onclick={onClose}
        aria-label="Retour"
      >
        <X class="h-5 w-5" />
      </button>
    {/if}
  </div>
  <div class="flex flex-wrap items-center gap-2">
    <!-- Left side: back button + title (3/4 space minimum) -->
    <div class="flex min-w-0 flex-1 items-center gap-2">
      {#if showBackButton && globalState.isMobile}
        <button
          class="btn btn-circle btn-ghost btn-sm flex-none"
          onclick={onClose}
          aria-label="Retour"
        >
          <ChevronLeft class="h-5 w-5" />
        </button>
      {/if}

      <div class="min-w-0 flex-1 items-baseline">
        <h3 class="truncate text-lg font-bold">{title}</h3>
        {#if subtitle}
          <p class="text-base-content/70 truncate text-sm">{subtitle}</p>
        {/if}
      </div>
    </div>

    <!-- Right side: custom content -->
    {#if children}
      <div class="flex items-center gap-2">
        {@render children()}
      </div>
    {/if}

    <!-- Close button X (desktop only, absolute when no back button) -->
    {#if !showBackButton}
      <button
        class="btn btn-circle btn-ghost btn-sm flex-none"
        onclick={onClose}
        aria-label="Fermer"
      >
        <X class="h-4 w-4" />
      </button>
    {/if}
  </div>
</div>
