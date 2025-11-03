<script lang="ts">
  import { Info, type Icon as IconType, ChevronDown } from "@lucide/svelte";
  import type { Snippet } from "svelte";

  interface Props {
    children?: Snippet;
    icon?: typeof IconType;
    title?: string;
    contentVisible?: string;
    style?: string;
    class?: string;
    initiallyOpen?: boolean;
  }

  let {
    children,
    icon = Info,
    title,
    contentVisible,
    style,
    class: className = "",
    initiallyOpen = false,
  }: Props = $props();

  let Icon = icon;
  let isOpen = $state(initiallyOpen);
  let hasChildren = $state(children);

  function toggle() {
    isOpen = !isOpen;
  }
</script>

<div
  class={`bg-base-100 border-base-200 overflow-hidden rounded-lg border ${className}`}
  {style}
>
  <button
    type="button"
    class="flex w-full items-center justify-between p-4 text-left transition-colors duration-200 focus:outline-none {hasChildren &&
      'hover:cursor-pointer'}"
    onclick={toggle}
    aria-expanded={isOpen}
    aria-controls="collapse-content"
  >
    <div class="flex items-center gap-3">
      <Icon size={24} class="text-base-content me-4 flex-shrink-0" />
      {#if title}
        <span class="text-base-content font-semibold">{title}</span>
      {/if}
    </div>
    {#if contentVisible}
      <div class="text-base-content/80 flex-1">
        {contentVisible}
      </div>
    {/if}
    {#if hasChildren}
      <div class="flex gap-1">
        <span class="text-base-content/70 text-sm italic"
          >{#if !isOpen}
            en savoir plus
          {:else}
            masquer
          {/if}
        </span>
        <ChevronDown
          class={`text-base-content h-4 w-4 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
    {/if}
  </button>

  {#if hasChildren}
    <div
      id="collapse-content"
      class={`overflow-hidden transition-all duration-200 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
    >
      <div class="text-base-content p-4 pt-0 text-sm">
        {@render children?.()}
      </div>
    </div>
  {/if}
</div>
