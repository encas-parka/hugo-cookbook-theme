<script lang="ts">
  import { X, RotateCcw, Check, PlusIcon } from "@lucide/svelte";

  // Interface générique pour les items
  interface BadgeItem {
    id: string;
    label: string;
    icon?: any; // Composant d'icône optionnel
    title?: string; // Tooltip optionnel
    selected?: boolean; // État initial de sélection (true/undefined = actif, false = inactif)
    badge?: string; // Badge optionnel pour afficher une information supplémentaire
  }

  interface Props {
    items: BadgeItem[];
    badgeSize?: string;
    color?: string;
    badgeStyle?: string;
    onToggleItem?: (itemId: string) => void;
    showStats?: boolean;
    showIcon?: boolean;
  }

  let {
    items,
    badgeSize = "btn-lg",
    color = "primary",
    badgeStyle = "",
    onToggleItem = () => {},
    showStats = false,
    showIcon = true,
  }: Props = $props();

  // État local pour gérer les items actifs/inactifs
  let itemStates = $state<Record<string, boolean>>({});

  // Initialiser l'état en fonction des items
  $effect(() => {
    const newStates: Record<string, boolean> = {};
    items.forEach((item) => {
      // Utiliser la valeur de selected pour déterminer l'état
      newStates[item.id] = item.selected ?? true;
    });

    // Toujours synchroniser avec les props items.selected
    itemStates = newStates;
  });

  function handleToggleItem(itemId: string) {
    itemStates[itemId] = !itemStates[itemId];
    onToggleItem(itemId);
  }

  // Computed properties
  const activeCount = $derived(
    Object.values(itemStates).filter(Boolean).length,
  );
  const inactiveCount = $derived(
    Object.values(itemStates).filter((v) => !v).length,
  );
</script>

<div class="flex flex-wrap gap-2">
  {#each items as item (item.id)}
    {@const isActive = itemStates[item.id]}
    <button
      class="btn {badgeSize} btn-{color} flex cursor-pointer items-center gap-2 transition-all duration-200
        {isActive
        ? `${badgeStyle} hover:line-through `
        : 'btn-dash hover:border-solid '}"
      onclick={() => handleToggleItem(item.id)}
      title={isActive ? "Retirer de la liste" : "Réajouter à la liste"}
    >
      <!-- Icône optionnelle -->
      {#if item.icon}
        <item.icon class="h-3 w-3" title={item.title} />
      {/if}

      <!-- Label principal -->
      <span class="max-w-32 truncate">{item.label}</span>

      <!-- Badge optionnel -->
      {#if item.badge}
        <span class="badge badge-sm badge-{color}">{item.badge}</span>
      {/if}

      <!-- Bouton d'action -->
      {#if showIcon}
        {#if isActive}
          <Check size={16} />
        {:else}
          <PlusIcon size={16} />
        {/if}
      {/if}
    </button>
  {/each}
</div>

<!-- Statistiques (optionnelles) -->
{#if showStats}
  <div class="mt-4 flex items-center justify-between text-sm opacity-70">
    <div class="flex items-center gap-4">
      <span class="flex items-center gap-1">
        <Check class="text-success h-3 w-3" />
        {activeCount} actifs
      </span>
      {#if inactiveCount > 0}
        <span class="flex items-center gap-1">
          <X class="text-error h-3 w-3" />
          {inactiveCount} retirés
        </span>
      {/if}
    </div>
    <span>Total: {items.length} items</span>
  </div>
{/if}
