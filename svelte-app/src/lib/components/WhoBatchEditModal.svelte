<script lang="ts">
  import { User, UserPlus, X, Check, TriangleAlert } from "@lucide/svelte";
  import { batchUpdateWho } from "../services/appwrite-interactions";
  import { productsStore } from "../stores/ProductsStore.svelte";
  import BtnGroupCheck from "./ui/BtnGroupCheck.svelte";
  import type { BatchUpdateResult } from "../types/store.types";

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

  // État local pour les volontaires
  let whoNames = $state<string[]>([]);

  // État local pour le nouveau volontaire
  let newVolunteerName = $state("");

  // État pour le mode de sélection des produits
  let selectionMode = $state<"empty" | "all">("empty");

  // État local pour suivre les sélections actuelles (synchronisé avec BtnGroupCheck)
  let currentSelection = $state<Record<string, boolean>>({});

  // Initialiser la sélection en fonction du mode et des productIds fournis
  $effect(() => {
    const newSelection: Record<string, boolean> = {};
    products.forEach((product) => {
      if (productIds.includes(product.$id)) {
        if (selectionMode === "empty") {
          // Sélectionner les produits sans volontaire attribué
          newSelection[product.$id] = !product.who || product.who.length === 0;
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

  // Créer la liste des items pour BtnGroupCheck (qui)
  const volunteerItems = $derived.by(() => {
    // Combiner uniqueWho et whoNames, puis dédupliquer
    const allVolunteers = new Set([...productsStore.uniqueWho, ...whoNames]);

    return Array.from(allVolunteers).map((who) => ({
      id: who,
      label: who,
      selected: whoNames.includes(who),
    }));
  });

  const title = $derived(
    `Gérer les volontaires (${selectedBadgeItems.length} produits sélectionnés)`,
  );

  const isFormValid = $derived.by(() => {
    if (selectedBadgeItems.length === 0) return false;
    return whoNames.length > 0;
  });

  // Actions
  async function handleSubmit() {
    if (!isFormValid || loading) return;

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

      const updateResult = await batchUpdateWho(
        selectedProductIds,
        selectedProducts,
        whoNames,
        "replace", // Mode fixe à "replace"
      );

      result = updateResult;

      if (updateResult.success) {
        console.log(
          `[WhoEditModal] Mise à jour groupée réussie: ${updateResult.updatedCount} produits modifiés`,
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
      console.error("[WhoEditModal] Erreur mise à jour:", err);

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

  function handleAddVolunteer(name: string) {
    const trimmedName = name.trim();
    if (trimmedName && !whoNames.includes(trimmedName)) {
      whoNames = [...whoNames, trimmedName];
    }
  }

  function handleRemoveVolunteer(volunteer: string) {
    whoNames = whoNames.filter((v) => v !== volunteer);
  }

  function handleToggleVolunteer(volunteerId: string) {
    if (whoNames.includes(volunteerId)) {
      handleRemoveVolunteer(volunteerId);
    } else {
      handleAddVolunteer(volunteerId);
    }
  }

  function handleQuickAdd() {
    if (newVolunteerName.trim()) {
      handleAddVolunteer(newVolunteerName);
      newVolunteerName = "";
    }
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

      <!-- Formulaire Who -->
      <div class="space-y-4">
        <!-- Liste des volontaires -->
        <div>
          <!-- Ajout rapide -->
          <div class="flex gap-2">
            <label class="input flex-1">
              <User class="h-4 w-4 opacity-50" />
              <input
                type="text"
                class="w-full"
                placeholder="Ajouter un volontaire..."
                bind:value={newVolunteerName}
                onkeydown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleQuickAdd();
                  }
                }}
                disabled={loading}
              />
            </label>

            <button
              class="btn btn-square btn-primary"
              onclick={handleQuickAdd}
              disabled={loading || !newVolunteerName.trim()}
            >
              <UserPlus size={16} />
            </button>
          </div>

          <!-- Gestion des volontaires avec BtnGroupCheck -->
          <div>
            <h5 class="mb-2 font-medium">Sélection rapide</h5>
            <BtnGroupCheck
              items={volunteerItems}
              onToggleItem={handleToggleVolunteer}
              showIcon={true}
              badgeSize="btn-sm"
              badgeStyle="btn-soft"
            />
          </div>
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
            >Produits sans volontaire attribué</button
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
