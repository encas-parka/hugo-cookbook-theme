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
  import type { Purchases } from "../types/appwrite.d.ts";
  import type { ProductModalStateType } from "../types/store.types.js";
  import {
    formatDate,
    formatQuantity,
    getStatusBadge,
    formatDateOrNull,
  } from "../utils/products-display.js";
  import { productsStore } from "../stores/ProductsStore.svelte";

  interface Props {
    modalState: ProductModalStateType;
  }

  let { modalState }: Props = $props();

  // ✅ Validation inline - pas de $derived inutiles
  function isAddFormValid(): boolean {
    return (
      modalState.forms.purchase.quantity !== null &&
      modalState.forms.purchase.quantity !== 0 &&
      modalState.forms.purchase.unit?.trim() !== ""
    );
  }

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
    if (!isAddFormValid()) return;

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
  <h3 class="flex items-center gap-2 text-lg font-semibold">
    <ShoppingCart class="h-5 w-5" />
    Gestion des achats
  </h3>

  <div class="card bg-base-200">
    <div class="card-body">
      <h4 class="card-title text-base">
        Ajouter un achat / une reccup / une commande
      </h4>
      <div class="mb-2 flex flex-wrap gap-4">
        <label class="input validator w-32">
          <Package class="h-4 w-4 opacity-50" />
          <input
            placeholder="Quantité"
            type="number"
            step="1"
            bind:value={modalState.forms.purchase.quantity}
            min="0.01"
            title="La quantité doit être supérieure à 0"
            required
          />
        </label>
        <select
          class="custom-select input w-32"
          bind:value={modalState.forms.purchase.unit}
          required
        >
          <option disabled selected value="">Unité</option>
          <option value="kg">kg</option>
          <option value="gr.">gr.</option>
          <option value="l.">l.</option>
          <option value="ml">ml</option>
          <option value="unité">unités</option>
          <option value="bottes">botte·s</option>
        </select>
        <label class="input w-48">
          <Store class="h-4 w-4 opacity-50" />
          <input
            type="text"
            bind:value={modalState.forms.purchase.store}
            placeholder="Magasin"
            list="stores"
            maxlength="25"
          />
          <!-- <datalist id="stores">
              {#each productsStore.uniqueStores as store}
                <option value={store}>{store}</option>
              {/each}
            </datalist> -->
        </label>
        <label class="input w-48">
          <User class="h-4 w-4 opacity-50" />
          <input
            class="w-full"
            type="text"
            bind:value={modalState.forms.purchase.who}
            placeholder="Qui"
            maxlength="25"
            list="users"
          />
          <!-- <datalist id="users">
              {#each productsStore.uniqueWho as user}
                <option value={user}>{user}</option>
              {/each}
            </datalist> -->
        </label>
        <label class="input validator w-28">
          <span class="label">€</span>
          <input
            class="w-full"
            type="number"
            step="1"
            bind:value={modalState.forms.purchase.price}
            placeholder="Prix"
            min="0"
          />
        </label>
      </div>

      <!-- Ligne Notes -->
      <div class="mb-2 flex min-w-72">
        <label class="input validator flex w-2/3">
          <MessageCircle class="h-4 w-4 opacity-50" />
          <input
            type="text"
            bind:value={modalState.forms.purchase.notes}
            placeholder="Notes"
            maxlength="250"
          />
        </label>
      </div>
      <!-- Ligne Statut -->
      <div class="flex w-full flex-wrap gap-4">
        <div class="flex flex-col">
          <label class=" w-52">
            <select
              class="custom-select input"
              bind:value={modalState.forms.purchase.status}
            >
              <option value="delivered" selected>Acheté</option>
              <option
                value="requested"
                title="Le fournisseur doit confirmer la disponibilité du produit"
                >Demandé</option
              >
              <option value="ordered" title="La commande à été passée"
                >Commandé</option
              >
            </select>
          </label>
          <div
            class="label {modalState.forms.purchase.status === 'delivered'
              ? ''
              : 'hidden'}"
          >
            Modifiez s'il s'agit d'une commande / pré-commande
          </div>
        </div>
        {#if modalState.forms.purchase.status === "ordered"}
          <label class="input">
            <span class="label">Date livraison</span>
            <input
              type="date"
              bind:value={modalState.forms.purchase.deliveryDate}
            />
          </label>
        {/if}
      </div>
      <div class="card-actions mt-4 justify-end">
        <button
          class="btn btn-primary btn-sm"
          onclick={handleAddPurchase}
          disabled={modalState.loading || !isAddFormValid()}
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

  <!-- Table des achats -->
  {#if modalState.purchasesList.length === 0}
    <div class="py-8 text-center opacity-50">
      <ShoppingCart class="mx-auto mb-2 h-12 w-12" />
      <p>Aucun achat enregistré pour ce produit</p>
    </div>
  {:else}
    <div class="overflow-x-auto">
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
            <th>Actions</th>
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
                      step="0.01"
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
                    maxlength="25"
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
                    <option value="requested">Demandé</option>
                    <option value="ordered">Commandé</option>
                    <option value="delivered">Livré</option>
                    <option value="cancelled">Annulé</option>
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
                      disabled={modalState.loading ||
                        !isEditFormValid(purchase)}
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
                  {formatQuantity(purchase.quantity, purchase.unit)}
                </td>
                <td>{purchase.store || "-"}</td>
                <td>{purchase.who || "-"}</td>
                <td>
                  <div
                    class="badge badge-sm {getStatusBadge(purchase.status)
                      .class}"
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
              </tr>
            {/if}
          {/each}
        </tbody>
      </table>
    </div>
  {/if}
</div>
