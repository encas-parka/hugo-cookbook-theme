<script lang="ts">
  import { type Component } from "svelte";

  interface Props {
    legend: string;
    children?: () => any;
    bgClass?: string;
    iconComponent?: Component<{ size?: number; class?: string }>;
    legendSize?: string;
    iconSize?: number;
  }
  let {
    legend,
    children,
    bgClass = "bg-base-100",
    iconComponent,
    legendSize = "text-base",
    iconSize = 16,
  }: Props = $props();
</script>

<fieldset class="fieldset {bgClass} border-base-300 rounded-box border p-4">
  <legend
    class="fieldset-legend {bgClass} rounded-box text-base-content/80 px-4 py-1 print:text-sm {legendSize}"
  >
    {#if iconComponent}
      {@const IconComp = iconComponent}
      <IconComp size={iconSize} class="mr-1"></IconComp>
    {/if}
    {legend}
  </legend>
  {@render children?.()}
</fieldset>
