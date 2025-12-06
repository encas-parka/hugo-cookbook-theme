<script lang="ts">
  import { Users } from "@lucide/svelte";

  interface Props {
    defaultServings: number;
    currentServings: number;
    onServingsChange: (servings: number) => void;
  }

  let { defaultServings, currentServings, onServingsChange }: Props = $props();

  function handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = parseInt(target.value);
    if (!isNaN(value) && value > 0) {
      onServingsChange(value);
    }
  }
</script>

<div class="card bg-base-100 border-base-300 border shadow-sm">
  <div class="card-body p-4">
    <div class="flex items-center gap-4">
      <label for="servings-input" class="flex items-center gap-2 font-medium">
        <Users class="h-5 w-5" />
        Nombre de couverts à servir :
      </label>
      <input
        id="servings-input"
        type="number"
        min="1"
        value={currentServings}
        oninput={handleInput}
        class="input input-bordered input-primary w-24"
      />
    </div>

    {#if currentServings !== defaultServings}
      <p class="text-base-content/60 mt-2 text-sm">
        Quantités ajustées pour {currentServings} couverts (recette originale :
        {defaultServings} couverts)
      </p>
    {/if}
  </div>
</div>
