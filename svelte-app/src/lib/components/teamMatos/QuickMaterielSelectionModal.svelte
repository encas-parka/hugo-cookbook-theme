<script lang="ts">
  import {
    X,
    Zap,
    Wrench,
    ChefHat,
    Box,
    Utensils,
    Flame,
    SoapDispenserDroplet,
  } from "@lucide/svelte";
  import BtnGroupCheck from "../ui/BtnGroupCheck.svelte";
  import type { EnrichedMateriel } from "$lib/types/materiel.types";

  interface Props {
    isOpen: boolean;
    onClose: () => void;
    onAdd: (materielIds: string[]) => void;
    selectedIds?: Set<string>;
    materiels: EnrichedMateriel[]; // Liste des matériels disponibles (déjà filtrée)
  }

  let {
    isOpen,
    onClose,
    onAdd,
    selectedIds = new Set(),
    materiels,
  }: Props = $props();

  // Labels des types
  const typeLabels: Record<string, string> = $derived.by(() => ({
    electronic: "Électronique",
    manual: "Ustensiles",
    cooking: "Matériel de cuisine",
    dish: "Vaisselle",
    gaz: "Gaz",
    hygiene: "Hygiène",
    other: "Autre",
  }));

  // Icônes des types
  const TypeIcons: Record<string, any> = $derived.by(() => ({
    electronic: Zap,
    manual: Wrench,
    cooking: ChefHat,
    dish: Utensils,
    gaz: Flame,
    hygiene: SoapDispenserDroplet,
    other: Box,
  }));

  // Grouper les matériels par type
  const materielsByType = $derived.by(() => {
    const grouped: Record<string, EnrichedMateriel[]> = {};

    // Les materiels sont déjà filtrés par le parent
    materiels.forEach((materiel) => {
      const type = materiel.type || "other";
      if (!grouped[type]) {
        grouped[type] = [];
      }
      grouped[type].push(materiel);
    });

    return grouped;
  });

  // État local de sélection
  let localSelectedIds = $state<Set<string>>(new Set());

  // Synchroniser avec les props
  $effect(() => {
    localSelectedIds = new Set(selectedIds);
  });

  function handleToggleItem(materielId: string) {
    if (localSelectedIds.has(materielId)) {
      localSelectedIds.delete(materielId);
    } else {
      localSelectedIds.add(materielId);
    }
    // Recréer le Set pour trigger la réactivité
    localSelectedIds = new Set(localSelectedIds);
  }

  function handleAdd() {
    onAdd(Array.from(localSelectedIds));
    onClose();
  }

  function handleClose() {
    localSelectedIds = new Set(selectedIds);
    onClose();
  }
</script>

<div class="modal {isOpen && 'modal-open'}">
  <div
    class="modal-box fixed top-0 flex h-lvh w-lvw flex-col overflow-auto md:top-10 md:h-full md:max-h-11/12 md:w-full md:max-w-4xl"
  >
    <!-- Header -->
    <div class="flex items-center justify-between border-b p-4 pt-0">
      <h3 class="text-lg font-bold">Sélection rapide du matériel</h3>
      <button
        class="btn btn-circle btn-ghost btn-sm absolute top-2 right-2"
        onclick={handleClose}
        aria-label="Fermer"
      >
        <X class="h-4 w-4" />
      </button>
    </div>

    <!-- Contenu principal -->
    <div class="flex-1 space-y-6 overflow-y-auto p-4">
      <div class="alert alert-info alert-soft text-base">
        Les nombres indiquent les quantités disponibles de chaque matériel, vous
        indiquerez après la quantité que vous souhaitez réserver.
      </div>
      {#each Object.entries(materielsByType) as [type, materiels] (type)}
        {@const TypeIcon = TypeIcons[type]}
        <div class="mb-6">
          <h4 class="mb-3 flex items-center gap-2 text-base font-semibold">
            <div class="bg-primary/10 rounded-lg p-1.5">
              <TypeIcon class="text-primary h-4 w-4" />
            </div>
            {typeLabels[type]}
            <span class="badge badge-ghost badge-sm ml-auto">
              {materiels.filter((m) => localSelectedIds.has(m.$id))
                .length}/{materiels.length}
            </span>
          </h4>

          <BtnGroupCheck
            items={materiels.map((m) => ({
              id: m.$id,
              label: m.name,
              badge: String(m.availableQuantity),
              selected: localSelectedIds.has(m.$id),
              title: `${m.availableQuantity}/${m.quantity} disponibles`,
            }))}
            onToggleItem={handleToggleItem}
            size="md"
            color="primary"
          />
        </div>
      {:else}
        <div class="text-center py-12 opacity-50">
          <Box class="h-16 w-16 mx-auto mb-4" />
          <p class="text-lg font-medium">Aucun matériel disponible</p>
          <p class="text-sm mt-2">
            Tous les matériels sont actuellement empruntés ou non disponibles
          </p>
        </div>
      {/each}
    </div>

    <!-- Footer -->
    <div class="border-base-300 flex-none border-t px-4 py-3">
      <div class="flex flex-wrap items-center justify-between gap-2">
        <div class="text-sm opacity-70">
          {localSelectedIds.size} matériel{localSelectedIds.size > 1 ? "s" : ""}
          sélectionné{localSelectedIds.size > 1 ? "s" : ""}
        </div>
        <div class="flex gap-2">
          <button class="btn btn-ghost" onclick={handleClose}> Annuler </button>
          <button
            class="btn btn-primary"
            onclick={handleAdd}
            disabled={localSelectedIds.size === 0}
          >
            Ajouter la sélection
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
