<script lang="ts">
  interface Props {
    regimes?: string[];
    iconOnly?: boolean;
    colorClass?: string;
  }

  let {
    regimes = [],
    iconOnly = false,
    colorClass = "success",
  }: Props = $props();

  // Mapping des régimes aux IDs d'icônes dans le sprite
  const regimeIcons: Record<string, string> = {
    "sans-gluten": "sans-gluten",
    vegetarien: "vegetarien",
    vegan: "vegan",
    "sans-lactose": "sans-lactose",
  };

  // Filtrer les régimes: si vegan est présent, on n'affiche pas vegetarien
  const filteredRegimes = $derived(
    regimes.includes("vegan")
      ? regimes.filter((regime) => regime !== "vegetarien")
      : regimes,
  );
</script>

<div class="flex items-baseline gap-2 text-sm">
  <!-- Badges Régimes -->
  {#each filteredRegimes as regime, index (index)}
    <span
      title={regime}
      class=" {iconOnly
        ? `text-${colorClass}`
        : `badge-lg print:badge-md badge badge-soft badge-${colorClass}`}  flex items-center {iconOnly
        ? ''
        : 'gap-1'} print:text-base-content"
    >
      {#if regimeIcons[regime]}
        <svg
          class={iconOnly ? "h-7 w-7" : "h-6 w-6"}
          aria-hidden="true"
          focusable="false"
          fill="currentColor"
        >
          <use href={`/icons/sprite-icons.svg#${regimeIcons[regime]}`} />
        </svg>
      {/if}
      {#if !iconOnly}
        <span>{regime}</span>
      {/if}
    </span>
  {/each}
</div>
