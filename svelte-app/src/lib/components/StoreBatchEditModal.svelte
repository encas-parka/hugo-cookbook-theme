<script lang="ts">
  import { Store, X, Check, TriangleAlert } from "@lucide/svelte";
  import { batchUpdateStore } from "../services/appwrite-interactions";
  import { productsStore } from "../stores/ProductsStore.svelte";
  import { toastService } from "../services/toast.service.svelte";
  import { globalState } from "../stores/GlobalState.svelte";
  import BtnGroupCheck from "./ui/BtnGroupCheck.svelte";
  import Suggestions from "./ui/Suggestions.svelte";
  import StoreInput from "./ui/StoreInput.svelte";
  import CommentTextarea from "./ui/CommentTextarea.svelte";
  import type { BatchUpdateResult, StoreInfo } from "../types/store.types";

  interface Props {
    productIds: string[];
    products: any[];
    onClose: () => void;
    onSuccess?: (result: BatchUpdateResult) => void;
  }

  let { productIds, products, onClose, onSuccess }: Props = $props();

  // État local du modal
  let loading = $state(false);
  let error = $state<string | null>(null);
  let result = $state<BatchUpdateResult | null>(null);

  // État local pour les données du magasin
  let storeName = $state(
    products.length > 0 && products[0].storeInfo
      ? products[0].storeInfo.storeName
      : "",
  );

  let storeComment = $state(
    products.length > 0 && products[0].storeInfo
      ? products[0].storeInfo.storeComment || ""
      : "",
  );

  // État local pour suivre les sélections actuelles (synchronisé avec BtnGroupCheck)
  let currentSelection = $state<Record<string, boolean>>({});

  // État pour le mode de sélection des produits
  let selectionMode = $state<"empty" | "all">("empty");

  // Initialiser la sélection en fonction du mode et des productIds fournis
  $effect(() => {
    const newSelection: Record<string, boolean> = {};
    products.forEach((product) => {
      if (productIds.includes(product.$id)) {
        if (selectionMode === "empty") {
          // Sélectionner les produits sans magasin attribué
          newSelection[product.$id] =
            !product.storeInfo || !product.storeInfo.storeName;
        } else {
          // Sélectionner tous les produits
          newSelection[product.$id] = true;
        }
      }
    });
    currentSelection = newSelection;
  });

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
    `Attribuer un magasin (${selectedBadgeItems.length} produits sélectionnés)`,
  );

  const isFormValid = $derived.by(() => {
    if (selectedBadgeItems.length === 0) return false;
    return storeName.trim().length > 0;
  });

  // Actions
  // Actions
  async function handleSubmit() {
    if (!isFormValid || loading) return;

    error = null;
    result = null;

    // Extraire les données depuis selectedBadgeItems
    const selectedProductIds = selectedBadgeItems.map((item) => item.id);
    const selectedProducts = products.filter((p) =>
      selectedProductIds.includes(p.$id),
    );

    // 🚀 UX IMMÉDIAT : Marquer les produits comme "isSyncing"
    productsStore.setSyncStatus(selectedProductIds, true);

    // Signaler l'opération en arrière-plan
    globalState.backgroundOperation = {
      isRunning: true,
      name: `Mise à jour magasin (${selectedProductIds.length} produits)`,
      progress: 0,
    };

    // ⚡ FERMER LE MODAL IMMÉDIATEMENT POUR UX
    onClose();

    try {
      const storeInfo: StoreInfo = {
        storeName: storeName.trim(),
        storeComment: storeComment.trim(),
      };

      const updateResult = await batchUpdateStore(
        selectedProductIds,
        selectedProducts,
        storeInfo,
      );

      if (updateResult.success) {
        console.log(
          `[StoreEditModal] Mise à jour groupée réussie: ${updateResult.updatedCount} produits modifiés`,
        );

        // Notifier le succès via Toast
        toastService.success(
          `Magasin mis à jour pour ${updateResult.updatedCount} produits.`,
        );

        // Notifier le succès callback optionnel
        onSuccess?.(updateResult);
      } else {
        throw new Error(updateResult.error || "Erreur lors de la mise à jour");
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erreur inconnue";
      console.error("[StoreEditModal] Erreur mise à jour:", err);

      // Notifier l'erreur via Toast
      toastService.error(`Erreur mise à jour magasin: ${errorMessage}`);

      // 🔧 NETTOYAGE : Retirer le statut "isSyncing" en cas d'erreur
      productsStore.clearSyncStatus();
    } finally {
      loading = false;
      // Reset background operation
      globalState.backgroundOperation = {
        isRunning: false,
        name: "",
        progress: 0,
      };
    }
  }

  function handleClose() {
    if (loading) return; // Empêcher la fermeture pendant le chargement
    onClose();
  }

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
      <div class="space-y-4">
        <div class="flex flex-wrap items-center gap-x-5 gap-y-2">
          <StoreInput
            bind:value={storeName}
            suggestions={productsStore.uniqueStores}
            disabled={loading}
            id="store-name-input"
          />
        </div>

        <div>
          <CommentTextarea
            bind:value={storeComment}
            disabled={loading}
            id="store-comment-textarea"
          />
        </div>
      </div>

      <!-- Liste des produits -->
      <div class="my-4">
        <h4 class="mb-1 font-medium">Produits concernés</h4>

        <!-- Mode de sélection -->

        <div role="tablist" class="tabs mb-1 flex justify-end">
          <button
            onclick={() => (selectionMode = "empty")}
            class="tab {selectionMode === 'empty' ? 'tab-active' : ''}"
            >Produits sans magasin attribué</button
          >
          <button
            onclick={() => (selectionMode = "all")}
            class="tab {selectionMode === 'all' ? 'tab-active' : ''}"
            >Tous les produits du groupe</button
          >
        </div>

        <BtnGroupCheck
          items={badgeItems}
          onToggleItem={handleToggleProduct}
          badgeSize="btn-sm"
          badgeStyle="btn-soft"
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
