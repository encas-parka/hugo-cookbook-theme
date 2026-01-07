<script lang="ts">
  import {
    Calendar,
    User,
    Package,
    Check,
    X,
    RotateCcw,
    AlertCircle,
    Archive,
  } from "@lucide/svelte";
  import type { MaterielLoanStatus } from "$lib/types/appwrite.d";
  import type {
    EnrichedMaterielLoan,
    MaterielLoanItem,
  } from "$lib/types/materiel.types";
  import { formatDateDayMonthShort } from "$lib/utils/date-helpers";

  interface Props {
    loan: EnrichedMaterielLoan;
    onAccept?: (loanId: string) => void;
    onRefuse?: (loanId: string) => void;
    onReturn?: (loanId: string) => void;
    onComplete?: (loanId: string) => void;
    onCancel?: (loanId: string) => void;
    onDelete?: (loanId: string) => void;
    onEdit?: (loanId: string) => void;
  }

  let {
    loan,
    onAccept,
    onRefuse,
    onReturn,
    onComplete,
    onCancel,
    onDelete,
    onEdit,
  }: Props = $props();

  // Les matériels sont déjà parsés dans le store ✅
  const materiels = $derived.by(() => {
    return loan.materielItems;
  });

  // Configuration du statut
  const statusConfig = $derived.by(() => {
    const configs: Record<
      MaterielLoanStatus,
      { label: string; badgeClass: string; icon: any }
    > = {
      asked: {
        label: "En attente",
        badgeClass: "badge-warning",
        icon: AlertCircle,
      },
      accepted: {
        label: "Accepté",
        badgeClass: "badge-info",
        icon: Check,
      },
      refused: {
        label: "Refusé",
        badgeClass: "badge-error",
        icon: X,
      },
      canceled: {
        label: "Annulé",
        badgeClass: "badge-neutral",
        icon: X,
      },
      returned: {
        label: "Retourné",
        badgeClass: "badge-warning",
        icon: RotateCcw,
      },
      completed: {
        label: "Terminé",
        badgeClass: "badge-success",
        icon: Check,
      },
      archived: {
        label: "Archivé",
        badgeClass: "badge-neutral",
        icon: Archive,
      },
    };

    return configs[loan.status];
  });

  const StatusIcon = $derived(() => statusConfig.icon);

  // Actions disponibles selon le statut
  const actions = $derived(() => {
    switch (loan.status) {
      case "asked":
        return [
          {
            label: "Accepter",
            icon: Check,
            action: onAccept,
            class: "btn-success",
          },
          { label: "Refuser", icon: X, action: onRefuse, class: "btn-error" },
          {
            label: "Annuler",
            icon: RotateCcw,
            action: onCancel,
            class: "btn-ghost",
          },
        ];
      case "accepted":
        return [
          {
            label: "Retour",
            icon: RotateCcw,
            action: onReturn,
            class: "btn-warning",
          },
          {
            label: "Terminer",
            icon: Check,
            action: onComplete,
            class: "btn-success",
          },
          {
            label: "Annuler",
            icon: RotateCcw,
            action: onCancel,
            class: "btn-ghost",
          },
        ];
      case "returned":
        return [
          {
            label: "Compléter",
            icon: Check,
            action: onComplete,
            class: "btn-success",
          },
        ];
      case "completed":
        return [
          {
            label: "Archiver",
            icon: Archive,
            action: onDelete,
            class: "btn-ghost",
          },
        ];
      case "refused":
      case "canceled":
        return [
          {
            label: "Supprimer",
            icon: X,
            action: onDelete,
            class: "btn-error btn-sm",
          },
        ];
      default:
        return [];
    }
  });

  function handleAction(action?: (loanId: string) => void) {
    action?.(loan.$id);
  }
</script>

<div
  class="card card-side bg-base-100 border-base-200 hover:border-primary/50 border text-left shadow-sm transition-all hover:shadow-md"
>
  <!-- Badge statut -->
  <div class="hidden pl-4 sm:flex sm:items-center">
    <div class="bg-base-200 rounded-lg p-3">
      <StatusIcon class="text-base-content/70 h-6 w-6" />
    </div>
  </div>

  <div class="card-body py-3">
    <div
      class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between"
    >
      <!-- Info principale -->
      <div class="flex min-w-0 flex-1 flex-col gap-2">
        <!-- Header: Statut + Nom événement -->
        <div class="flex flex-wrap items-center gap-2">
          <span class="badge {statusConfig.badgeClass} badge-sm gap-1">
            <StatusIcon class="h-3 w-3" />
            {statusConfig.label}
          </span>
          <div class="text-base font-semibold">
            Emprunt du {new Date(loan.startDate).toLocaleDateString("fr-FR")}
          </div>
        </div>

        <!-- Info: Responsable + Dates -->
        <div
          class="text-base-content/70 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm"
        >
          <div class="flex items-center gap-1">
            <User class="h-3 w-3" />
            <span>{loan.responsibleName}</span>
          </div>
          <div class="flex items-center gap-1">
            <Calendar class="h-3 w-3" />
            <span>
              {formatDateDayMonthShort(loan.startDate)} - {formatDateDayMonthShort(
                loan.endDate,
              )}
            </span>
          </div>
        </div>

        <!-- Matériels -->
        <div class="flex flex-wrap items-start gap-2 text-sm">
          <div class="text-base-content/60 flex items-center gap-1">
            <Package class="h-3 w-3" />
            <span
              >{materiels.length} matériel{materiels.length > 1
                ? "s"
                : ""}</span
            >
          </div>
          <div class="text-base-content/80">
            {materiels
              .slice(0, 3)
              .map((m) => `${m.materielName} (x${m.quantity})`)
              .join(", ")}
            {materiels.length > 3 ? `...` : ""}
          </div>
        </div>

        <!-- Notes (si présentes) -->
        {#if loan.notes}
          <div class="text-base-content/60 text-xs italic">
            "{loan.notes}"
          </div>
        {/if}

        <!-- Return notes (si présentes) -->
        {#if loan.returnNotes}
          <div class="text-warning bg-warning/10 rounded p-2 text-xs">
            <strong>Retour :</strong>
            {loan.returnNotes}
          </div>
        {/if}
      </div>

      <!-- Actions -->
      <div class="flex flex-wrap gap-2">
        {#each actions() as action}
          <button
            class="btn btn-sm {action.class}"
            onclick={() => handleAction(action.action)}
            title={action.label}
          >
            <action.icon class="h-4 w-4" />
            <span class="hidden sm:inline">{action.label}</span>
          </button>
        {/each}

        {#if onEdit && loan.status === "asked"}
          <button
            class="btn btn-ghost btn-sm"
            onclick={() => onEdit(loan.$id)}
            title="Modifier"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
              />
            </svg>
          </button>
        {/if}
      </div>
    </div>
  </div>
</div>
