<script lang="ts">
  import {
    Store,
    Users,
    UserPlus,
    X,
    Check,
    AlertTriangle,
  } from "@lucide/svelte";
  import {
    batchUpdateStore,
    batchUpdateWho,
  } from "../services/appwrite-interactions";
  import { productsStore } from "../stores/ProductsStore.svelte";
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
    whoMode: "replace",
  });

  // Computed properties
  const isStoreEdit = $derived(editType === "store");
  const isWhoEdit = $derived(editType === "who");

  const title = $derived(
    isStoreEdit
      ? `Attribuer un magasin (${products.length} produits)`
      : `Gérer les volontaires (${products.length} produits)`,
  );

  const isFormValid = $derived.by(() => {
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

    loading = true;
    error = null;
    result = null;

    try {
      let updateResult: BatchUpdateResult;

      if (isStoreEdit) {
        const storeInfo: StoreInfo = {
          storeName: formData.storeName.trim(),
          storeComment: formData.storeComment.trim(),
        };

        updateResult = await batchUpdateStore(productIds, products, storeInfo);
      } else if (isWhoEdit) {
        updateResult = await batchUpdateWho(
          productIds,
          products,
          formData.whoNames,
          formData.whoMode,
        );
      } else {
        throw new Error("Type d'édition non supporté");
      }

      result = updateResult;

      if (updateResult.success) {
        // Notifier le succès
        onSuccess?.(updateResult);

        // Fermer le modal après un court délai pour montrer le succès
        setTimeout(() => {
          onClose();
        }, 1500);
      } else {
        error = updateResult.error || "Erreur lors de la mise à jour";
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Erreur inconnue";
      error = errorMessage;
      console.error("[GroupEditModal] Erreur mise à jour:", err);
    } finally {
      loading = false;
    }
  }

  function handleClose() {
    if (loading) return; // Empêcher la fermeture pendant le chargement
    onClose();
  }

  function handleQuickSelectStore(store: string) {
    formData.storeName = store;
  }

  function addWhoName(name: string) {
    if (name.trim() && !formData.whoNames.includes(name.trim())) {
      formData.whoNames = [...formData.whoNames, name.trim()];
    }
  }

  function removeWhoName(name: string) {
    formData.whoNames = formData.whoNames.filter((n) => n !== name);
  }

  // Calculer les statistiques pour l'affichage
  const currentStores = $derived.by(() => {
    const stores = new Set(
      products.map((p) => p.storeInfo?.storeName).filter(Boolean),
    );
    return Array.from(stores);
  });

  const currentWhoCount = $derived.by(() => {
    const allWho = products.flatMap((p) => p.who || []);
    return new Set(allWho).size;
  });
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
      <!-- État actuel -->
      <div class="bg-base-200 mb-6 rounded-lg p-4">
        <h4 class="mb-2 font-medium">État actuel de ce groupe :</h4>
        <div class="flex flex-wrap gap-4 text-sm">
          {#if isStoreEdit}
            <div class="flex items-center gap-2">
              <Store class="h-4 w-4" />
              <span>
                {currentStores.length > 0
                  ? `Magasins: ${currentStores.join(", ")}`
                  : "Aucun magasin défini"}
              </span>
            </div>
          {/if}

          {#if isWhoEdit}
            <div class="flex items-center gap-2">
              <Users class="h-4 w-4" />
              <span>Volontaires: {currentWhoCount} personne(s)</span>
            </div>
          {/if}

          <div class="flex items-center gap-2">
            <div class="bg-primary h-4 w-4 rounded-full" />
            <span>{products.length} produit(s) concerné(s)</span>
          </div>
        </div>
      </div>

      <!-- Erreur -->
      {#if error}
        <div class="alert alert-error mb-4">
          <AlertTriangle class="h-4 w-4" />
          <span>{error}</span>
        </div>
      {/if}

      <!-- Succès -->
      {#if result?.success}
        <div class="alert alert-success mb-4">
          <Check class="h-4 w-4" />
          <span>
            {result.updatedCount} produit(s) mis à jour avec succès !
          </span>
        </div>
      {/if}

      <!-- Formulaire Store -->
      {#if isStoreEdit}
        <div class="space-y-4">
          <div>
            <label class="label">
              <span class="label-text">Nom du magasin</span>
            </label>
            <label class="input">
              <Store class="h-4 w-4 opacity-50" />
              <input
                type="text"
                bind:value={formData.storeName}
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

          <div>
            <label class="label">
              <span class="label-text">Commentaire (optionnel)</span>
            </label>
            <textarea
              class="textarea w-full"
              bind:value={formData.storeComment}
              placeholder="Commentaire sur le magasin..."
              rows="2"
              maxlength="250"
              disabled={loading}
            />
          </div>
        </div>
      {/if}

      <!-- Formulaire Who -->
      {#if isWhoEdit}
        <div class="space-y-4">
          <!-- Mode d'application -->
          <div>
            <label class="label">
              <span class="label-text">Mode d'application</span>
            </label>
            <div class="join">
              <input
                class="join-item btn btn-sm"
                type="radio"
                name="who-mode"
                aria-label="Remplacer"
                bind:group={formData.whoMode}
                value="replace"
                disabled={loading}
              />
              <input
                class="join-item btn btn-sm"
                type="radio"
                name="who-mode"
                aria-label="Ajouter"
                bind:group={formData.whoMode}
                value="add"
                disabled={loading}
              />
            </div>
            <div class="mt-1 text-xs opacity-70">
              {formData.whoMode === "replace"
                ? "Remplacera tous les volontaires existants"
                : "Ajoutera aux volontaires existants"}
            </div>
          </div>

          <!-- Liste des volontaires -->
          <div>
            <label class="label">
              <span class="label-text">Volontaires</span>
            </label>

            <!-- Ajout rapide -->
            <div class="flex gap-2">
              <input
                type="text"
                class="input input-sm flex-1"
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
                class="btn btn-sm btn-primary"
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
                    class="badge badge-primary badge-lg flex items-center gap-1"
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
              <div class="mt-3">
                <div class="mb-1 text-xs opacity-70">Suggestions :</div>
                <div class="flex flex-wrap gap-1">
                  {#each productsStore.uniqueWho.slice(0, 8) as who (who)}
                    <button
                      class="btn btn-xs btn-soft btn-outline"
                      onclick={() => addWhoName(who)}
                      disabled={loading || formData.whoNames.includes(who)}
                    >
                      {who}
                    </button>
                  {/each}
                </div>
              </div>
            {/if}
          </div>
        </div>
      {/if}
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
          Appliquer à {products.length} produit(s)
        {/if}
      </button>
    </div>
  </div>
</div>
