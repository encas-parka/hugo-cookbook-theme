<script lang="ts">
  import { type Component } from "svelte";

  interface Props {
    legend: string;
    children?: () => any;
    bgClass?: string;
    iconComponent?: Component<{ size?: number; class?: string }>;
  }
  let {
    legend,
    children,
    bgClass = "bg-base-100",
    iconComponent,
  }: Props = $props();
</script>

<fieldset class="fieldset {bgClass} border-base-200 rounded-box border p-4">
  <legend
    class="fieldset-legend {bgClass} rounded-box text-base-content/80 px-4 py-1"
  >
    {#if iconComponent}
      {@const IconComp = iconComponent}
      <IconComp size={16} class="mr-1"></IconComp>
    {/if}
    {legend}
  </legend>
  {@render children?.()}
</fieldset>
