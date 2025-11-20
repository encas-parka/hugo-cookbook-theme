<script lang="ts">
  import { Archive, Package } from "@lucide/svelte";
  import type { ProductModalStateType } from "../types/store.types.js";
  import { formatDate } from "../utils/products-display.js";
  import InfoCollapse from "./ui/InfoCollapse.svelte";
  import ArchiveMessage from "./ArchiveMessage.svelte";
  import QuantityInput from "./ui/QuantityInput.svelte";
  import CommentTextarea from "./ui/CommentTextarea.svelte";

  interface Props {
    modalState: ProductModalStateType;
    isArchiveMode?: boolean;
  }

  let { modalState, isArchiveMode = false }: Props = $props();

  // Données dérivées du store

  let isFormValid = $derived(
    modalState &&
      modalState.forms &&
      modalState.forms.stock.quantity &&
      modalState.forms.stock.quantity > 0 &&
      modalState.forms.stock.unit,
  );

  async function handleSetStock() {
    await modalState?.setStock();
  }

  async function handleDeleteStock() {
    await modalState?.removeStock();
  }
</script>

<div class="space-y-4">
  {#if isArchiveMode}
    <ArchiveMessage
      title="Stock non modifiable"
      message="L'événement est terminé, le stock ne peut plus être modifié."
      data={modalState.stockParsed}
      dataLabel="Stock actuel"
    />
  {:else}
  <!-- <h3 class="flex items-center gap-2 text-lg font-semibold">
    <Archive class="h-5 w-5" />
    Gestion du stock
  </h3> -->

  <div class="card bg-base-200">
    <div class="card-body">
      <h4 class="card-title text-base">
        Déclarer le stock réel du {new Date().toLocaleDateString("fr-FR", {
          weekday: "short",
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </h4>
      <div class="mb-4">
        <InfoCollapse
          initiallyOpen={true}
          contentVisible="Cette section permet de gérer le stock réel de l'ingrédient.
          "
        >
          Le stock réel est la quantité réelle du produit constaté dans le
          stock: <strong
            >il sera utilisé pour le calcul des quantité manquantes à se fournir
            à la place des achats / réccup déclarés antérieurement</strong
          >
          au stock. Les achats / réccup déclarés <strong>ultérieurement</strong>
          seront pris en compte dans le calcul des quantité manquantes à se fournir.
        </InfoCollapse>
      </div>
      <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        <QuantityInput
          bind:quantity={modalState.forms.stock.quantity}
          bind:unit={modalState.forms.stock.unit}
          disabled={modalState.loading}
        />
      </div>

      <div>
        <CommentTextarea
          bind:value={modalState.forms.stock.notes}
          disabled={modalState.loading}
        />
      </div>
      <div class="card-actions mt-4 justify-end">
          <button
            class="btn btn-ghost btn-sm"
            onclick={() => {
              modalState.forms.stock.quantity = null;
              modalState.forms.store.comment = "";
            }}
            disabled={modalState.loading}
          >
            Effacer
          </button>
        </div>
      </div>
    </div>
  {/if}
  </div>

  {#if !modalState.stockParsed}
    <div class="py-8 text-center opacity-50">
      <Archive class="mx-auto mb-2 h-12 w-12" />
      <p>Aucun stock enregistré pour ce produit</p>
    </div>
  {:else}
    <div class="card bg-base-100">
      <div class="card-body">
        <h4 class="card-title mb-4 text-base">Stock actuel</h4>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <span class="font-semibold">Quantité:</span>
            <span class="badge badge-primary badge-lg ml-2">
              {modalState.stockParsed.quantity}
              {modalState.stockParsed.unit}
            </span>
          </div>
          <div>
            <span class="font-semibold">Date:</span>
            <span class="ml-2"
              >{formatDate(modalState.stockParsed.dateTime)}</span
            >
          </div>
          {#if modalState.stockParsed.notes}
            <div class="md:col-span-2">
              <span class="font-semibold">Notes:</span>
              <span class="ml-2">{modalState.stockParsed.notes}</span>
            </div>
          {/if}
        </div>
        {#if !isArchiveMode}
        <div class="card-actions mt-4 justify-end">
          <button
            class="btn btn-error btn-sm"
            onclick={handleDeleteStock}
            disabled={modalState.loading}
          >
            {#if modalState.loading}
              <span class="loading loading-spinner loading-xs"></span>
            {:else}
              Supprimer le stock
            {/if}
          </button>
        </div>
        {/if}
      </div>
    </div>
  {/if}

<style>
</style>
