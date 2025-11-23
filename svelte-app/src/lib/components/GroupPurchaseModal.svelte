<!-- Modal achat groupé -->
<script lang="ts">
  import {
    TriangleAlert,
    Check,
    Euro,
    MessageCircle,
    ShoppingCart,
    Store,
    User,
    X,
  } from "@lucide/svelte";
  import { createGroupPurchaseWithSync } from "../services/appwrite-transaction";
  import { productsStore } from "../stores/ProductsStore.svelte";
  import { toastService } from "../services/toast.service.svelte";
  import { globalState } from "../stores/GlobalState.svelte";
  import type { EnrichedProduct } from "../types/store.types";
  import { formatDateWdDayMonthShort } from "../utils/dateRange";
  import BtnGroupCheck from "./ui/BtnGroupCheck.svelte";
  import InfoCollapse from "./ui/InfoCollapse.svelte";
  import Suggestions from "./ui/Suggestions.svelte";
  import QuantityInput from "./ui/QuantityInput.svelte";
  import StoreInput from "./ui/StoreInput.svelte";
  import WhoInput from "./ui/WhoInput.svelte";
  import CommentTextarea from "./ui/CommentTextarea.svelte";
  import PriceInput from "./ui/PriceInput.svelte";
  import StatusSelect from "./ui/StatusSelect.svelte";

  interface Props {
    products: EnrichedProduct[];
    onClose: () => void;
    onSuccess?: () => void;
  }

  let { products, onClose, onSuccess }: Props = $props();

  // État local du modal
  let loading = $state(false);
  let error = $state<string | null>(null);
  let result = $state<{
    purchases: number;
    expense?: boolean;
    batches?: number;
  } | null>(null);

  // Données du formulaire
  let formData = $state({
    store: "",
    who: "",
    expense: null as number | null,
    notes: "",
    status: "delivered" as "ordered" | "delivered" | null,
    orderDate: null as string | null,
    deliveryDate: null as string | null,
  });

  // État des produits actifs/inactifs
  let activeProductIds = $state<Set<string>>(new Set());

  // Initialiser les produits actifs
  $effect(() => {
    activeProductIds = new Set(products.map((p) => p.$id));
  });

  // Computed properties
  const activeProducts = $derived(
    products.filter((p) => activeProductIds.has(p.$id)),
  );

  const isFormValid = $derived.by(() => {
    if (activeProducts.length === 0) return false;
    return true;
  });

  const title = $derived.by(() => {
    const dateRange = productsStore.dateRange;
    let dateText = "";

    if (dateRange?.start && dateRange?.end) {
      if (dateRange.start === dateRange.end) {
        dateText = ` - ${formatDateWdDayMonthShort(dateRange.start)}`;
      } else {
        dateText = ` - Du ${formatDateWdDayMonthShort(dateRange.start)} au ${formatDateWdDayMonthShort(dateRange.end)}`;
      }
    }

    return `Achat groupé (${activeProducts.length} produits sélectionnés)${dateText}`;
  });

  // Actions
  // Actions
  async function handleSubmit() {
    if (!isFormValid || loading) return;

    loading = true;
    error = null;
    result = null;

    // Générer un ID de facture
    const invoiceId = `FACTURE_${Date.now()}`;

    // Marquer les produits comme "isSyncing"
    const productIds = activeProducts.map((p) => p.$id);
    productsStore.setSyncStatus(productIds, true);

    // Signaler l'opération en arrière-plan
    globalState.backgroundOperation = {
      isRunning: true,
      name: `Achat groupé (${activeProducts.length} produits)`,
      progress: 0,
    };

    // Utiliser le service avec gestion de lots et sync automatique
    const productsData: Array<{
      productId: string;
      isSynced: boolean;
      productData: any;
      missingQuantities: Array<{ q: number; u: string }>;
    }> = [];

    for (const product of activeProducts) {
      const productModel = productsStore.getProductModelById(product.$id);
      // Convertir les quantités négatives en positif pour les achats
      const missingQuantities = (productModel?.stats.missingQuantities || [])
        .filter((qty) => qty.q < 0) // Uniquement les quantités manquantes
        .map((qty) => ({ ...qty, q: Math.abs(qty.q) })); // Convertir en positif

      productsData.push({
        productId: product.$id,
        isSynced: product.isSynced,
        productData: product, // Envoyer les données complètes du produit
        missingQuantities,
      });
    }

    // Préparer les données de facture
    const invoiceData = {
      invoiceId,
      invoiceTotal: formData.expense || undefined,
      store: formData.store.trim() || undefined,
      notes:
        formData.notes || `Achat groupé pour ${activeProducts.length} produits`,
      who: formData.who.trim() || undefined,
      // Passer le statut et la date de livraison des achats
      purchaseStatus: formData.status || "delivered",
      purchaseDeliveryDate: formData.deliveryDate || null,
    };

    console.log(
      `[GroupPurchaseModal] Création achat groupé avec sync pour ${productsData.length} produits...`,
    );

    // FERMER LE MODAL IMMÉDIATEMENT POUR UX
    onClose();

    try {
      // Utiliser le nouveau service qui gère les lots et la synchronisation
      const batchResult = await createGroupPurchaseWithSync(
        productsStore.currentMainId!,
        productsData,
        invoiceData,
      );

      if (batchResult.success) {
        console.log(
          `[GroupPurchaseModal] Achat groupé créé avec succès: ${batchResult.totalProductsCreated} produits synchronisés, ${batchResult.totalPurchasesCreated} achats créés, ${batchResult.totalExpensesCreated} dépenses globales`,
        );

        // Notifier le succès via Toast car le modal est fermé
        toastService.success(
          `Achat groupé réussi ! ${batchResult.totalPurchasesCreated} achats créés.`,
        );

        // Notifier le succès callback optionnel
        onSuccess?.();
      } else {
        throw new Error(
          batchResult.error || "Erreur lors de la création de l'achat groupé",
        );
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erreur inconnue";
      console.error("[GroupPurchaseModal] Erreur création achat groupé:", err);

      // Notifier l'erreur via Toast car le modal est fermé
      toastService.error(`Erreur achat groupé: ${errorMessage}`);

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
    if (loading) return;
    onClose();
  }

  function handleToggleProduct(productId: string) {
    const newActiveIds = new Set(activeProductIds);
    if (newActiveIds.has(productId)) {
      newActiveIds.delete(productId);
    } else {
      newActiveIds.add(productId);
    }
    activeProductIds = newActiveIds;
  }

  // Préparer les données pour BtnGroupCheck
  const badgeItems = $derived(
    products.map((product) => {
      const productModel = productsStore.getProductModelById(product.$id);
      return {
        id: product.$id,
        label: product.productName,
        title: `${product.productName} - Manque: ${productModel?.stats.formattedMissingQuantities || "-"}`,
        badge: productModel?.stats.formattedMissingQuantities || "-",
      };
    }),
  );
</script>

<div class="modal modal-open">
  <div class="modal-box max-h-[90vh] max-w-4xl overflow-y-auto">
    <!-- Header -->
    <div class="mb-4 flex items-center justify-between border-b pb-4">
      <h3 class="flex items-center gap-2 text-lg font-semibold">
        <ShoppingCart class="h-5 w-5" />
        {title}
      </h3>
      <button
        class="btn btn-sm btn-circle btn-ghost"
        onclick={handleClose}
        disabled={loading}
      >
        <X class="h-4 w-4" />
      </button>
    </div>

    <!-- Contenu -->
    <div class="space-y-6">
      <!-- Erreur -->
      {#if error}
        <div class="alert alert-error">
          <TriangleAlert class="h-4 w-4" />
          <span>{error}</span>
        </div>
      {/if}

      <!-- Succès -->
      {#if result}
        <div class="alert alert-success">
          <Check class="h-4 w-4" />
          <span>
            Achat groupé créé avec succès ! {result.purchases} produit(s) validés
            {#if result.expense}
              + 1 dépense globale
            {/if}
            {#if result.batches && result.batches > 1}
              (traité en {result.batches} lots)
            {/if}
          </span>
        </div>
      {/if}

      <div>
        <InfoCollapse
          contentVisible="Un 'achat' sera créé avec les quantités manquantes pour chaque produit sur la période sélectionnée."
          class="bg-base-200"
        >
          <p>
            Cette fonctionnalité permet de créer un achat groupé pour plusieurs
            produits en une seule fois. Les quantités déclarées dans les achats
            correspondront aux quantités manquantes <strong
              >pour la période sélectionnée</strong
            >, c'est à dire le besoin total pour chaque produit sur cette
            période moins les achats ou stocks déjà déclarés.
          </p>
          <p>
            Pour le suivi des dépenses, vous pouvez renseigner votre nom et le
            montant dépensé.
          </p>
        </InfoCollapse>
      </div>

      <!-- Formulaire d'achat -->
      <div class="space-y-4">
        <h4 class="font-medium">Détails de l'achat</h4>

        <div class="items-top flex flex-wrap gap-4">
          <!-- Magasin -->
          <StoreInput
            bind:value={formData.store}
            suggestions={productsStore.uniqueStores}
            disabled={loading}
          />

          <!-- Qui -->
          <WhoInput
            bind:value={formData.who}
            suggestions={productsStore.uniqueWho}
            disabled={loading}
          />
        </div>
        <!-- Dépense -->
        <PriceInput bind:value={formData.expense} disabled={loading} />

        <!-- Statut -->
        <StatusSelect
          bind:status={formData.status}
          bind:deliveryDate={formData.deliveryDate}
          disabled={loading}
        />

        <!-- Notes -->
        <div>
          <CommentTextarea bind:value={formData.notes} disabled={loading} />
        </div>
      </div>

      <!-- Liste des produits -->
      <div class="mb-4">
        <h4 class=" font-medium">Produits concernés</h4>
        <div class="text-base-content/70 mb-4">
          les quantités manquantes du <span class="badge badge-info badge-sm"
            >{formatDateWdDayMonthShort(productsStore.dateRange.start)}</span
          >
          au
          <span class="badge badge-info badge-sm"
            >{formatDateWdDayMonthShort(productsStore.dateRange.start)}</span
          > pour les produits suivant seront déclarés "acheté"
        </div>
        <BtnGroupCheck
          items={badgeItems}
          onToggleItem={handleToggleProduct}
          badgeSize="btn-sm"
          badgeStyle="btn-soft"
          color="success"
        />
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
            <ShoppingCart class="h-4 w-4" />
            Valider {activeProducts.length} produit(s)
          {/if}
        </button>
      </div>
    </div>
  </div>
</div>
