<!-- MultiRangeSlider.svelte -->
<script lang="ts">
  import { productsStore } from "../stores/ProductsStore.svelte";

  interface Props {
    class?: string;
  }

  const { class: className = "" }: Props = $props();

  // État local du slider (en pourcentage 0-100)
  let minPercent = $state(0);
  let maxPercent = $state(100);
  let isDraggingMin = $state(false);
  let isDraggingMax = $state(false);

  // Récupération des dates limites depuis le store
  const firstDate = $derived(productsStore.firstDate);
  const lastDate = $derived(productsStore.lastDate);

  // Calcul du nombre total de jours
  const totalDays = $derived.by(() => {
    if (!firstDate || !lastDate) return 0;
    const start = new Date(firstDate);
    const end = new Date(lastDate);
    return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  });

  // =========================================================================
  // CONVERSIONS: pourcentage ↔ date
  // =========================================================================

  /**
   * Convertit un pourcentage (0-100) en date ISO
   * Ex: 50% entre 2024-01-01 et 2024-02-01 → 2024-01-17
   */
  function percentToDate(percent: number): string {
    if (!firstDate || totalDays === 0) return firstDate || "";

    const days = Math.round((percent / 100) * totalDays);
    const result = new Date(firstDate);
    result.setDate(result.getDate() + days);

    return result.toISOString().split("T")[0];
  }

  /**
   * Convertit une date en pourcentage (0-100) par rapport au range total
   * Ex: 2024-01-17 entre 2024-01-01 et 2024-02-01 → 50%
   */
  function dateToPercent(date: string): number {
    if (!firstDate || !lastDate || totalDays === 0) return 0;

    const targetDate = new Date(date);
    const startDate = new Date(firstDate);
    const daysDiff = Math.ceil(
      (targetDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
    );

    return Math.min(100, Math.max(0, (daysDiff / totalDays) * 100));
  }

  // =========================================================================
  // FORMATAGE DE DATES
  // =========================================================================

  function formatDate(dateString: string): string {
    if (!dateString) return "";
    return new Intl.DateTimeFormat("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(dateString));
  }

  function formatDateShort(dateString: string): string {
    if (!dateString) return "";
    return new Intl.DateTimeFormat("fr-FR", {
      day: "numeric",
      month: "short",
    }).format(new Date(dateString));
  }

  // =========================================================================
  // GESTION DU DRAG & DROP
  // =========================================================================

  function handleMouseDown(handle: "min" | "max") {
    if (handle === "min") {
      isDraggingMin = true;
    } else {
      isDraggingMax = true;
    }
  }

  function handleMouseMove(event: MouseEvent) {
    if (!isDraggingMin && !isDraggingMax) return;

    const slider = document.getElementById("multi-range-slider");
    if (!slider) return;

    const rect = slider.getBoundingClientRect();
    const percent = Math.min(
      100,
      Math.max(0, ((event.clientX - rect.left) / rect.width) * 100),
    );

    if (isDraggingMin) {
      // La poignée min ne peut pas dépasser la poignée max (- 5% de marge)
      minPercent = Math.min(percent, maxPercent - 5);
      const newDate = percentToDate(minPercent);
      productsStore.setStartDate(newDate);
    } else if (isDraggingMax) {
      // La poignée max ne peut pas aller avant la poignée min (+ 5% de marge)
      maxPercent = Math.max(percent, minPercent + 5);
      const newDate = percentToDate(maxPercent);
      productsStore.setEndDate(newDate);
    }
  }

  function handleMouseUp() {
    isDraggingMin = false;
    isDraggingMax = false;
  }

  // Enregistrement des listeners de drag
  $effect(() => {
    if (isDraggingMin || isDraggingMax) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  });

  // =========================================================================
  // SYNCHRONISATION: si le store change, synchroniser le slider
  // =========================================================================

  /**
   * Si startDate change depuis ProductsStore (ex: via URL ou autre composant)
   * mettre à jour minPercent du slider
   */
  $effect(() => {
    if (productsStore.startDate && firstDate) {
      const newPercent = dateToPercent(productsStore.startDate);
      // Vérifier que ça a vraiment changé (éviter les boucles infinies)
      if (Math.abs(newPercent - minPercent) > 0.5) {
        minPercent = newPercent;
      }
    }
  });

  /**
   * Si endDate change depuis ProductsStore
   * mettre à jour maxPercent du slider
   */
  $effect(() => {
    if (productsStore.endDate && lastDate) {
      const newPercent = dateToPercent(productsStore.endDate);
      if (Math.abs(newPercent - maxPercent) > 0.5) {
        maxPercent = newPercent;
      }
    }
  });

  // =========================================================================
  // VALEURS DÉRIVÉES POUR L'AFFICHAGE
  // =========================================================================

  const minDate = $derived(percentToDate(minPercent));
  const maxDate = $derived(percentToDate(maxPercent));
  const selectedDays = $derived(
    Math.round(((maxPercent - minPercent) * totalDays) / 100),
  );
</script>

<div class="w-full {className}">
  <div class="relative space-y-6">
    <!-- Titre et infos -->
    <div class="flex items-center justify-between">
      <h3 class="text-lg font-semibold">Plage de dates</h3>
      <div class="badge badge-info">
        {selectedDays} jour{selectedDays > 1 ? "s" : ""}
      </div>
    </div>

    <!-- Slider -->
    <div class="relative py-8">
      <!-- Track du slider -->
      <div
        id="multi-range-slider"
        class="bg-base-300 relative h-2 cursor-pointer rounded-full"
        role="group"
        aria-label="Sélection de plage de dates"
      >
        <!-- Barre colorée entre les deux poignées -->
        <div
          class="bg-primary absolute h-2 rounded-full"
          style="left: {minPercent}%; width: {maxPercent - minPercent}%;"
        ></div>

        <!-- Poignée minimum -->
        <button
          type="button"
          role="slider"
          aria-label="Date de début"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={Math.round(minPercent)}
          tabindex="0"
          class="btn btn-primary btn-circle btn-xs absolute top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 cursor-grab border-0 shadow-lg active:cursor-grabbing"
          style="left: {minPercent}%;"
          onmousedown={(e) => {
            e.preventDefault();
            handleMouseDown("min");
          }}
          title={formatDate(minDate)}
        >
          <span class="sr-only">{formatDate(minDate)}</span>
        </button>

        <!-- Poignée maximum -->
        <button
          type="button"
          role="slider"
          aria-label="Date de fin"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={Math.round(maxPercent)}
          tabindex="0"
          class="btn btn-primary btn-circle btn-xs absolute top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 cursor-grab border-0 shadow-lg active:cursor-grabbing"
          style="left: {maxPercent}%;"
          onmousedown={(e) => {
            e.preventDefault();
            handleMouseDown("max");
          }}
          title={formatDate(maxDate)}
        >
          <span class="sr-only">{formatDate(maxDate)}</span>
        </button>
      </div>

      <!-- Labels des extrémités -->
      <div
        class="text-base-content/70 mt-8 flex justify-between text-xs font-medium"
      >
        <div class="text-left">
          <div class="text-base-content">{formatDate(firstDate || "")}</div>
          <div class="text-base-content/50">Début disponible</div>
        </div>
        <div class="text-right">
          <div class="text-base-content">{formatDate(lastDate || "")}</div>
          <div class="text-base-content/50">Fin disponible</div>
        </div>
      </div>
    </div>

    <!-- Affichage de la sélection actuelle -->
    <div class="bg-base-200/50 border-base-300 space-y-2 rounded-lg border p-4">
      <div class="flex items-center justify-between">
        <span class="text-sm font-medium">Début sélectionné :</span>
        <span class="badge badge-outline">
          {formatDateShort(minDate)}
        </span>
      </div>
      <div class="flex items-center justify-between">
        <span class="text-sm font-medium">Fin sélectionnée :</span>
        <span class="badge badge-outline">
          {formatDateShort(maxDate)}
        </span>
      </div>
      <div class="divider my-2"></div>
      <div class="flex items-center justify-between">
        <span class="text-sm font-medium">Période :</span>
        <span class="badge badge-lg badge-primary">
          {selectedDays} jour{selectedDays > 1 ? "s" : ""}
        </span>
      </div>
    </div>

    <!-- Info si aucune date -->
    {#if !firstDate || !lastDate}
      <div class="alert alert-warning">
        <svg
          class="h-6 w-6 shrink-0 stroke-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4v2m0-6a4 4 0 11-8 0 4 4 0 018 0z"
          ></path>
        </svg>
        <span>Aucune date disponible. Chargez les produits d'abord.</span>
      </div>
    {/if}
  </div>
</div>

<style>
  :global(.cursor-grab) {
    cursor: grab;
  }

  :global(.cursor-grabbing) {
    cursor: grabbing;
  }

  :global(.btn-circle) {
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  :global(.btn-circle:hover) {
    transform: translate(-50%, -50%) scale(1.15);
    box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2);
  }

  :global(.btn-circle:active) {
    transform: translate(-50%, -50%) scale(0.95);
  }
</style>
