<script lang="ts">
  import { Package } from "@lucide/svelte";
  import { QUANTITY_UNITS } from "$lib/constants/units";

  interface Props {
    quantity: number | null;
    unit: string;
    disabled?: boolean;
  }

  let {
    quantity = $bindable(),
    unit = $bindable(),
    disabled = false,
  }: Props = $props();
</script>

<fieldset class="fieldset">
  <!-- <legend class="fieldset-legend">Quantité</legend> -->
  <div class="flex gap-2">
    <label class="input w-32">
      <Package class="h-4 w-4 opacity-50" />
      <input
        type="number"
        step="1"
        min="0"
        placeholder="Quantité"
        bind:value={quantity}
        {disabled}
        required
      />
    </label>
    <select
      class="custom-select input w-28"
      bind:value={unit}
      {disabled}
      required
    >
      <option disabled selected value="">Unité</option>
      {#each QUANTITY_UNITS as { value, label }}
        <option {value}>{label}</option>
      {/each}
    </select>
  </div>
</fieldset>
