<script lang="ts">
  import {
    ShoppingCart,
    SquarePen,
    Save,
    X,
    Package,
    Store,
    User,
    MessageCircle,
    WeightIcon,
    Calendar,
    PackageCheck,
  } from "@lucide/svelte";
  import type { Purchases } from "$lib/types/appwrite.d.ts";
  import type { ProductModalStateType } from "$lib/types/store.types.js";
  import {
    formatDate,
    getStatusBadge,
    formatDateOrNull,
  } from "$lib/utils/products-display.js";
  import { formatSingleQuantity } from "$lib/utils/QuantityFormatter.js";
  import { productsStore } from "$lib/stores/ProductsStore.svelte";
  import ArchiveMessage from "./ArchiveMessage.svelte";
  import QuantityInput from "../ui/QuantityInput.svelte";
  import StoreInput from "../ui/StoreInput.svelte";
  import WhoInput from "../ui/WhoInput.svelte";
  import CommentTextarea from "../ui/CommentTextarea.svelte";
  import PriceInput from "../ui/PriceInput.svelte";
  import StatusSelect from "../ui/StatusSelect.svelte";

  interface Props {
    modalState: ProductModalStateType;
    isArchiveMode?: boolean;
  }

  let { modalState, isArchiveMode = false }: Props = $props();

  function isEditFormValid(purchase: Purchases): boolean {
    return (
      purchase.quantity !== null &&
      purchase.quantity !== 0 &&
      purchase.unit?.trim() !== ""
    );
  }

  // État local pour la checkbox de commande
  let isOrder = $state(false);

  // ✅ Pas besoin d'intermédiaires - accès direct au state du modalState
  function handleAddPurchase() {
    if (!modalState.isPurchaseFormValid) return;

    // Définir la date de commande par défaut si c'est une commande
    if (
      modalState.forms.purchase.status === "ordered" &&
      !modalState.forms.purchase.orderDate
    ) {
      modalState.forms.purchase.orderDate = new Date()
        .toISOString()
        .split("T")[0];
    }

    modalState.addPurchase();
  }

  function handleUpdateEditedPurchase() {
    const edited = modalState.editingPurchaseData;
    if (!edited || !isEditFormValid(edited)) return;
    modalState.updateEditedPurchase(edited);
  }

  function handleDeletePurchase(purchaseId: string) {
    modalState.removePurchase(purchaseId);
  }

  function handleStartEdit(purchase: Purchases) {
    modalState.startEditPurchase(purchase);
  }

  function handleCancelEdit() {
    modalState.cancelEditPurchase();
  }
</script>

<div class="space-y-4">
  {#if isArchiveMode}
    <ArchiveMessage
      title="Achats non modifiables"
      message="L'événement est terminé, les achats ne peuvent plus être ajoutés ou modifiés."
    />
  {:else}
    <!-- <h3 class="flex items-center gap-2 text-lg font-semibold">
    <ShoppingCart class="h-5 w-5" />
    Gestion des achats
  </h3> -->

    <div class="card bg-base-200">
      <div class="card-body">
        <h4 class="card-title text-base">
          Ajouter un achat / une reccup / une commande
        </h4>
        <div class="space-y-6">
          <div class="flex flex-wrap items-baseline gap-4">
            <QuantityInput
              bind:quantity={modalState.forms.purchase.quantity}
              bind:unit={modalState.forms.purchase.unit}
              disabled={modalState.loading}
            />
            <PriceInput
              bind:value={modalState.forms.purchase.price}
              disabled={modalState.loading}
            />
            <StoreInput
              bind:value={modalState.forms.purchase.store}
              suggestions={productsStore.uniqueStores}
              disabled={modalState.loading}
              flexCol={true}
            />
            <WhoInput
              bind:value={modalState.forms.purchase.who}
              suggestions={productsStore.uniqueWho}
              disabled={modalState.loading}
              flexCol={true}
            />
          </div>

          <!-- Ligne Notes -->
          <div class="">
            <CommentTextarea
              bind:value={modalState.forms.purchase.notes}
              disabled={modalState.loading}
            />
          </div>
          <!-- Ligne Statut -->
          <StatusSelect
            bind:status={modalState.forms.purchase.status}
            bind:deliveryDate={modalState.forms.purchase.deliveryDate}
            disabled={modalState.loading}
          />
        </div>
        <div class="card-actions mt-4 justify-end">
          <button
            class="btn btn-primary btn-sm"
            onclick={handleAddPurchase}
            disabled={modalState.loading || !modalState.isPurchaseFormValid}
          >
            {#if modalState.loading}
              <span class="loading loading-spinner loading-sm"></span>
            {:else}
              Ajouter l'achat
            {/if}
          </button>
        </div>
      </div>
    </div>
  {/if}
</div>

<!-- Table des achats -->
{#if modalState.purchasesList.length === 0}
  <div class="mt-4 py-8 text-center opacity-50">
    <ShoppingCart class="mx-auto mb-2 h-12 w-12" />
    <p>Aucun achat enregistré pour ce produit</p>
  </div>
{:else}
  <div class="mt-4 overflow-x-auto">
    <table class="table-zebra table-sm table">
      <thead>
        <tr>
          <th>Quantité</th>
          <th>Magasin</th>
          <th>Qui</th>
          <th>Statut</th>
          <th>Date commande</th>
          <th>Date livraison</th>
          <th>Prix</th>
          <th>Notes</th>
          {#if !isArchiveMode}<th>Actions</th>{/if}
        </tr>
      </thead>
      <tbody>
        {#each modalState.purchasesList as purchase (purchase.$id)}
          {#if modalState.editingPurchaseId === purchase.$id}
            <!-- Mode édition -->
            <tr class="bg-warning/10">
              <td>
                <div class="flex gap-2">
                  <input
                    type="number"
                    step="1"
                    min="0.01"
                    class="input w-20"
                    bind:value={purchase.quantity}
                  />
                  <select
                    class="custom-select input w-16"
                    bind:value={purchase.unit}
                  >
                    <option value="kg">kg</option>
                    <option value="gr.">gr.</option>
                    <option value="l.">l.</option>
                    <option value="ml">ml</option>
                    <option value="unité">unité·s</option>
                    <option value="bottes">botte·s</option>
                  </select>
                </div>
              </td>
              <td>
                <input
                  type="text"
                  class="input w-24"
                  bind:value={purchase.store}
                  list="stores"
                  placeholder="Magasin"
                  maxlength="50"
                />
                <!-- <datalist id="browsers">
                      {#each productsStore.uniqueStores as store}
                        <option value={store}>{store}</option>
                      {/each}
                    </datalist> -->
              </td>
              <td>
                <input
                  type="text"
                  class="input w-20"
                  bind:value={purchase.who}
                  placeholder="Nom"
                  maxlength="25"
                  list="users"
                />
              </td>
              <td>
                <select
                  class="custom-select input w-24"
                  bind:value={purchase.status}
                >
                  <!-- <option value="requested">Demandé</option> -->
                  <option value="ordered">Commandé</option>
                  <option value="delivered">Acheté</option>
                  <!-- <option value="cancelled">Annulé</option> -->
                </select>
              </td>
              <td>
                <input
                  type="date"
                  class="input w-28"
                  bind:value={purchase.orderDate}
                />
              </td>
              <td>
                <input
                  type="date"
                  class="input w-28"
                  bind:value={purchase.deliveryDate}
                />
              </td>
              <td>
                <input
                  type="number"
                  step="1"
                  class="input w-16"
                  bind:value={purchase.price}
                  placeholder="Prix"
                  min="0"
                />
              </td>
              <td>
                <input
                  type="text"
                  class="input w-24"
                  bind:value={purchase.notes}
                  placeholder="Notes"
                  maxlength="250"
                />
              </td>
              <td>
                <div class="btn-group btn-group-sm">
                  <button
                    class="btn btn-success btn-sm"
                    onclick={handleUpdateEditedPurchase}
                    disabled={modalState.loading || !isEditFormValid(purchase)}
                  >
                    {#if modalState.loading}
                      <span class="loading loading-spinner loading-sm"></span>
                    {:else}
                      <Save class="h-3 w-3" />
                    {/if}
                  </button>
                  <button
                    class="btn btn-ghost btn-sm"
                    onclick={handleCancelEdit}
                  >
                    <X class="h-3 w-3" />
                  </button>
                </div>
              </td>
            </tr>
          {:else}
            <!-- Mode affichage -->
            <tr>
              <td class="font-medium">
                {formatSingleQuantity(purchase.quantity, purchase.unit)}
              </td>
              <td>{purchase.store || "-"}</td>
              <td>{purchase.who || "-"}</td>
              <td>
                <div
                  class="badge badge-sm {getStatusBadge(purchase.status).class}"
                >
                  {getStatusBadge(purchase.status).text}
                </div>
              </td>
              <td class="text-xs">
                {formatDateOrNull(purchase.orderDate)}
              </td>
              <td class="text-xs">
                {formatDateOrNull(purchase.deliveryDate)}
              </td>
              <td>{purchase.price ? `${purchase.price}€` : "-"}</td>
              <td>{purchase.notes || "-"}</td>
              {#if !isArchiveMode}
                <td>
                  <div class="btn-group btn-group-sm">
                    <button
                      class="btn btn-ghost btn-sm"
                      onclick={() => handleStartEdit(purchase)}
                    >
                      <SquarePen class="h-4 w-4" />
                    </button>
                    <button
                      class="btn btn-ghost btn-sm text-error"
                      onclick={() => handleDeletePurchase(purchase.$id)}
                      disabled={modalState.loading}
                    >
                      {#if modalState.loading}
                        <span class="loading loading-spinner loading-sm"></span>
                      {:else}
                        <X class="h-4 w-4" />
                      {/if}
                    </button>
                  </div>
                </td>
              {/if}
            </tr>
          {/if}
        {/each}
      </tbody>
    </table>
  </div>
{/if}
