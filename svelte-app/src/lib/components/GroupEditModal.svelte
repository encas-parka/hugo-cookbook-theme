<script lang="ts">
  import {
    Store,
    Users,
    UserPlus,
    X,
    Check,
    TriangleAlert,
    Package,
  } from "@lucide/svelte";
  import {
    batchUpdateStore,
    batchUpdateWho,
  } from "../services/appwrite-interactions";
  import { productsStore } from "../stores/ProductsStore.svelte";
  import BtnGroupCheck from "./ui/BtnGroupCheck.svelte";
  import Suggestions from "./ui/Suggestions.svelte";
  import type {
    GroupEditModalProps,
    GroupEditFormData,
    BatchUpdateResult,
    StoreInfo,
  } from "../types/store.types";

  let {
    productIds,
    products,
    editType,
    onClose,
    onSuccess,
  }: GroupEditModalProps = $props();

  // État local du modal
  let loading = $state(false);
  let error = $state<string | null>(null);
  let result = $state<BatchUpdateResult | null>(null);

  // Données du formulaire - initialisation directe
  let formData = $state<GroupEditFormData>({
    storeName:
      products.length > 0 && editType === "store" && products[0].storeInfo
        ? products[0].storeInfo.storeName
        : "",
    storeComment:
      products.length > 0 && editType === "store" && products[0].storeInfo
        ? products[0].storeInfo.storeComment || ""
        : "",
    whoNames:
      products.length > 0 && editType === "who" && products[0].who
        ? [...products[0].who]
        : [],
  });

  // Computed properties
  const isStoreEdit = $derived(editType === "store");
  const isWhoEdit = $derived(editType === "who");

  // Préparer les données pour BtnGroupCheck avec état de sélection
  const badgeItems = $derived(
    products.map((product) => ({
      id: product.$id,
      label: product.productName,
      title: product.productName,
      selected: currentSelection[product.$id],
    })),
  );

  // Items actuellement sélectionnés (source de vérité unique)
  const selectedBadgeItems = $derived(
    badgeItems.filter((item) => item.selected),
  );

  const title = $derived(
    isStoreEdit
      ? `Attribuer un magasin (${selectedBadgeItems.length} produits sélectionnés)`
      : `Gérer les volontaires (${selectedBadgeItems.length} produits sélectionnés)`,
  );

  const isFormValid = $derived.by(() => {
    if (selectedBadgeItems.length === 0) return false;

    if (isStoreEdit) {
      return formData.storeName.trim().length > 0;
    }

    if (isWhoEdit) {
      return formData.whoNames.length > 0;
    }

    return false;
  });

  // Actions
  async function handleSubmit() {
    if (!isFormValid || loading) return;

    // loading = true; // USELESS
    error = null;
    result = null;

    try {
      // Extraire les données depuis selectedBadgeItems
      const selectedProductIds = selectedBadgeItems.map((item) => item.id);
      const selectedProducts = products.filter((p) =>
        selectedProductIds.includes(p.$id),
      );

      // 🚀 UX IMMÉDIAT : Marquer les produits comme "isSyncing"
      productsStore.setSyncStatus(selectedProductIds, true);
      // ⚡ FERMER LE MODAL IMMÉDIATEMENT POUR UX
      onClose();

      let updateResult: BatchUpdateResult;

      if (isStoreEdit) {
        const storeInfo: StoreInfo = {
          storeName: formData.storeName.trim(),
          storeComment: formData.storeComment.trim(),
        };

        updateResult = await batchUpdateStore(
          selectedProductIds,
          selectedProducts,
          storeInfo,
        );
      } else if (isWhoEdit) {
        updateResult = await batchUpdateWho(
          selectedProductIds,
          selectedProducts,
          formData.whoNames,
          "replace", // Mode fixe à "replace"
        );
      } else {
        throw new Error("Type d'édition non supporté");
      }

      result = updateResult;

      if (updateResult.success) {
        console.log(
          `[GroupEditModal] Mise à jour groupée réussie: ${updateResult.updatedCount} produits modifiés`,
        );

        // Notifier le succès
        onSuccess?.(updateResult);
      } else {
        throw new Error(updateResult.error || "Erreur lors de la mise à jour");
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erreur inconnue";
      error = errorMessage;
      console.error("[GroupEditModal] Erreur mise à jour:", err);

      // 🔧 NETTOYAGE : Retirer le statut "isSyncing" en cas d'erreur
      productsStore.clearSyncStatus();
    } finally {
      loading = false;
    }
  }

  function handleClose() {
    if (loading) return; // Empêcher la fermeture pendant le chargement
    onClose();
  }

  function addWhoName(name: string) {
    if (name.trim() && !formData.whoNames.includes(name.trim())) {
      formData.whoNames = [...formData.whoNames, name.trim()];
    }
  }

  function removeWhoName(name: string) {
    formData.whoNames = formData.whoNames.filter((n) => n !== name);
  }

  // État local pour suivre les sélections actuelles (synchronisé avec BtnGroupCheck)
  let currentSelection = $state<Record<string, boolean>>({});

  // Initialiser la sélection avec les productIds fournis
  $effect(() => {
    const newSelection: Record<string, boolean> = {};
    products.forEach((product) => {
      newSelection[product.$id] = productIds.includes(product.$id);
    });
    currentSelection = newSelection;
  });

  function handleToggleProduct(productId: string) {
    currentSelection[productId] = !currentSelection[productId];
  }
</script>

<div class="modal modal-open">
  <div class="modal-box max-w-2xl">
    <!-- Header -->
    <div class="flex items-center justify-between border-b pb-4">
      <h3 class="text-lg font-semibold">{title}</h3>
      <button
        class="btn btn-sm btn-circle btn-ghost"
        onclick={handleClose}
        disabled={loading}
      >
        <X class="h-4 w-4" />
      </button>
    </div>

    <!-- Contenu -->
    <div class="py-6">
      <!-- Erreur -->
      {#if error}
        <div class="alert alert-error mb-4">
          <TriangleAlert class="h-4 w-4" />
          <span>{error}</span>
        </div>
      {/if}

      <!-- Formulaire Store -->
      {#if isStoreEdit}
        <div class="space-y-4">
          <div class="flex flex-wrap items-center gap-x-5 gap-y-2">
            <label class="input">
              <Store class="h-4 w-4 opacity-50" />
              <input
                id="store-name-input"
                type="text"
                bind:value={formData.storeName}
                placeholder="Nom du magasin"
                list="stores"
                maxlength="50"
                disabled={loading}
              />
            </label>
            <!-- Suggestions de magasins -->
            <Suggestions
              suggestions={productsStore.uniqueStores.map((store) => ({
                id: store,
                label: store,
                disabled: store === formData.storeName,
              }))}
              onSuggestionClick={(suggestion) => {
                formData.storeName = suggestion.label;
              }}
              title="Suggestions de magasins :"
            />
          </div>

          <div>
            <textarea
              id="store-comment-textarea"
              class="textarea w-full"
              bind:value={formData.storeComment}
              placeholder="Commentaire sur le magasin..."
              rows="2"
              maxlength="250"
              disabled={loading}
            ></textarea>
          </div>
        </div>
      {/if}

      <!-- Formulaire Who -->
      {#if isWhoEdit}
        <div class="space-y-4">
          <!-- Liste des volontaires -->
          <div>
            <!-- Ajout rapide -->
            <div class="flex gap-2">
              <input
                type="text"
                class="input flex-1"
                placeholder="Ajouter un volontaire..."
                onkeydown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addWhoName(e.currentTarget.value);
                    e.currentTarget.value = "";
                  }
                }}
                disabled={loading}
              />
              <button
                class="btn btn-square btn-primary"
                onclick={(e) => {
                  const input = e.currentTarget
                    .previousElementSibling as HTMLInputElement;
                  addWhoName(input.value);
                  input.value = "";
                }}
                disabled={loading}
              >
                <UserPlus class="h-4 w-4" />
              </button>
            </div>

            <!-- Liste des volontaires ajoutés -->
            {#if formData.whoNames.length > 0}
              <div class="mt-2 flex flex-wrap gap-2">
                {#each formData.whoNames as name (name)}
                  <div
                    class="badge badge-primary badge-lg flex items-center gap-2"
                  >
                    <span>{name}</span>
                    <button
                      class="btn btn-xs btn-circle btn-ghost hover:bg-error/20"
                      onclick={() => removeWhoName(name)}
                      disabled={loading}
                    >
                      <X class="h-3 w-3" />
                    </button>
                  </div>
                {/each}
              </div>
            {/if}

            <!-- Suggestions depuis les volontaires existants -->
            {#if productsStore.uniqueWho.length > 0}
              <Suggestions
                suggestions={productsStore.uniqueWho.slice(0, 8).map((who) => ({
                  id: who,
                  label: who,
                  disabled: formData.whoNames.includes(who),
                }))}
                onSuggestionClick={(suggestion) => addWhoName(suggestion.label)}
                title="Suggestions :"
              />
            {/if}
          </div>
        </div>
      {/if}

      <!-- Liste des produits -->
      <div class="my-4">
        <h4 class="mb-3 font-medium">Produits concernés</h4>
        <BtnGroupCheck
          items={badgeItems}
          onToggleItem={handleToggleProduct}
          badgeSize="badge-md"
          badgeStyle="badge-soft"
          color="success"
        />
      </div>
    </div>

    <!-- Actions -->
    <div class="modal-action">
      <button class="btn btn-ghost" onclick={handleClose} disabled={loading}>
        Annuler
      </button>

      <button
        class="btn btn-primary"
        onclick={handleSubmit}
        disabled={loading || !isFormValid}
      >
        {#if loading}
          <span class="loading loading-spinner loading-sm"></span>
          En cours...
        {:else}
          <Check class="h-4 w-4" />
          Appliquer à {selectedBadgeItems.length} produit(s)
        {/if}
      </button>
    </div>
  </div>
</div>
