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
  import type { EnrichedProduct } from "../types/store.types";
  import BtnGroupCheck from "./ui/BtnGroupCheck.svelte";
  import InfoCollapse from "./ui/InfoCollapse.svelte";

  interface Props {
    products: EnrichedProduct[];
    onClose: () => void;
    onSuccess?: () => void;
  }

  let { products, onClose, onSuccess }: Props = $props();

  // État local du modal
  let loading = $state(false);
  let error = $state<string | null>(null);
  let result = $state<{ purchases: number; expense?: boolean } | null>(null);

  // Données du formulaire
  let formData = $state({
    store: "",
    who: "",
    expense: null as number | null,
    notes: "",
    status: "delivered" as
      | "requested"
      | "ordered"
      | "delivered"
      | "cancelled"
      | null,
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

  const title = $derived(
    `Achat groupé (${activeProducts.length} produits sélectionnés)`,
  );

  // Actions
  async function handleSubmit() {
    if (!isFormValid || loading) return;

    loading = true;
    error = null;
    result = null;

    try {
      // Générer un ID de facture
      const invoiceId = `FACTURE_${Date.now()}`;

      // 🚀 UX IMMÉDIAT : Marquer les produits comme "isSyncing"
      const productIds = activeProducts.map((p) => p.$id);
      productsStore.setSyncStatus(productIds, true);

      // ✅ NOUVELLE LOGIQUE : Utiliser le service avec gestion de lots et sync automatique
      const productsData: Array<{
        productId: string;
        isSynced: boolean;
        productData: any;
        missingQuantities: Array<{ q: number; u: string }>;
      }> = [];

      for (const product of activeProducts) {
        productsData.push({
          productId: product.$id,
          isSynced: product.isSynced,
          productData: product, // Envoyer les données complètes du produit
          missingQuantities: product.missingQuantityArray || [],
        });
      }

      // Préparer les données de facture
      const invoiceData = {
        invoiceId,
        invoiceTotal: formData.expense || undefined,
        store: formData.store.trim() || undefined,
        notes:
          formData.notes ||
          `Achat groupé pour ${activeProducts.length} produits`,
        who: formData.who.trim() || undefined,
        // 🎯 NOUVEAUX : Passer le statut et la date de livraison des achats
        purchaseStatus: formData.status || "delivered",
        purchaseDeliveryDate: formData.deliveryDate || null,
      };

      console.log(
        `[GroupPurchaseModal] Création achat groupé avec sync pour ${productsData.length} produits...`,
      );

      // ⚡ FERMER LE MODAL IMMÉDIATEMENT POUR UX
      onClose();

      // Utiliser le nouveau service qui gère les lots et la synchronisation
      const batchResult = await createGroupPurchaseWithSync(
        productsStore.currentMainId!,
        productsData,
        invoiceData,
      );

      if (batchResult.success) {
        result = {
          purchases: batchResult.totalPurchasesCreated,
          expense: batchResult.totalExpensesCreated > 0,
          batches: batchResult.results.length,
        };

        console.log(
          `[GroupPurchaseModal] Achat groupé créé avec succès: ${batchResult.totalProductsCreated} produits synchronisés, ${batchResult.totalPurchasesCreated} achats créés, ${batchResult.totalExpensesCreated} dépenses globales`,
        );

        // Notifier le succès
        onSuccess?.();
      } else {
        throw new Error(
          batchResult.error || "Erreur lors de la création de l'achat groupé",
        );
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erreur inconnue";
      error = errorMessage;
      console.error("[GroupPurchaseModal] Erreur création achat groupé:", err);

      // 🔧 NETTOYAGE : Retirer le statut "isSyncing" en cas d'erreur
      productsStore.clearSyncStatus();
    } finally {
      loading = false;
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
    products.map((product) => ({
      id: product.$id,
      label: product.productName,
      title: product.productName,
    })),
  );
</script>

<div class="modal modal-open">
  <div class="modal-box max-h-[90vh] max-w-4xl overflow-y-auto">
    <!-- Header -->
    <div class="flex items-center justify-between border-b pb-4">
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
    <div class="space-y-6 py-6">
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
          contentVisible="Un 'achat' sera créé avec les quantités manquantes pour chaque produit."
          class="bg-base-200"
        >
          <p>
            Cette fonctionnalité permet de créer un achat groupé pour plusieurs
            produits en une seule fois. Les quantités déclarées dans les achats
            correspondront aux quantités manquantes, c'est à dire le besoin
            total pour chaque produit moins les achats ou stocks déjà déclarés.
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
          <div>
            <label class="input">
              <Store class="h-4 w-4 opacity-50" />
              <input
                type="text"
                bind:value={formData.store}
                placeholder="Nom du magasin"
                list="stores"
                maxlength="50"
                disabled={loading}
              />
            </label>
            <datalist id="stores">
              {#each productsStore.uniqueStores as store}
                <option value={store}>{store}</option>
              {/each}
            </datalist>
          </div>

          <!-- Qui -->
          <div>
            <label class="input">
              <User class="h-4 w-4 opacity-50" />
              <input
                type="text"
                bind:value={formData.who}
                placeholder="Qui"
                list="users"
                maxlength="50"
                disabled={loading}
              />
            </label>
            <datalist id="users">
              {#each productsStore.uniqueWho as user}
                <option value={user}>{user}</option>
              {/each}
            </datalist>
          </div>

          <!-- Dépense -->
          <div>
            <label class="input w-28">
              <Euro class="h-4 w-4 opacity-50" />
              <input
                type="number"
                bind:value={formData.expense}
                placeholder="0.00"
                step="1"
                min="0"
                disabled={loading}
              />
            </label>
          </div>
        </div>

        <!-- Statut -->
        <div class="flex w-full flex-wrap gap-4">
          <div class="flex flex-col">
            <select
              class="custom-select input w-52"
              bind:value={formData.status}
              disabled={loading}
            >
              <option value="delivered" selected>Livré</option>
              <option value="ordered" title="La commande à été passée"
                >Commandé</option
              >
              <!-- <option
                value="requested"
                title="Le fournisseur doit confirmer la disponibilité du produit"
                >Demandé</option
              >
              <option value="cancelled">Annulé</option> -->
            </select>
            <div
              class="label text-sm {formData.status === 'delivered'
                ? ''
                : 'hidden'}"
            >
              Modifiez s'il s'agit d'une commande
            </div>
          </div>

          <!-- Date de livraison (si commandé) -->
          {#if formData.status === "ordered"}
            <div>
              <label class="input">
                <span class="label">Date de livraison prévue</span>
                <input
                  type="date"
                  bind:value={formData.deliveryDate}
                  disabled={loading}
                />
              </label>
            </div>
          {/if}
        </div>

        <!-- Notes -->
        <div>
          <label class="input validator flex w-2/3">
            <MessageCircle class="h-4 w-4 opacity-50" />
            <input
              type="text"
              bind:value={formData.notes}
              placeholder="Commentaires..."
              maxlength="250"
              disabled={loading}
            />
          </label>
        </div>
      </div>

      <!-- Liste des produits -->
      <div>
        <h4 class="mb-3 font-medium">Produits concernés</h4>
        <BtnGroupCheck
          items={badgeItems}
          onToggleItem={handleToggleProduct}
          badgeSize="badge-md"
          badgeStyle="badge-soft"
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
