<script lang="ts">
  import {
    Plus,
    Store,
    User,
    Tag,
    X,
    PackagePlus,
    Check,
    TriangleAlert,
    Thermometer,
    Snowflake,
  } from "@lucide/svelte";
  import { productsStore } from "$lib/stores/ProductsStore.svelte";
  import { createManualProduct } from "$lib/services/appwrite-interactions";
  import Suggestions from "../ui/Suggestions.svelte";
  import QuantityInput from "../ui/QuantityInput.svelte";
  import StoreInput from "../ui/StoreInput.svelte";
  import WhoInput from "../ui/WhoInput.svelte";

  interface Props {
    open: boolean;
  }

  let { open = $bindable(false) }: Props = $props();

  let loading = $state(false);
  let error = $state<string | null>(null);
  let success = $state(false);

  let formData = $state<{
    productName: string;
    productType: string;
    store: string;
    who: string;
    pFrais: boolean;
    pSurgel: boolean;
    quantity?: number | null;
    unit: string;
  }>({
    productName: "",
    productType: "",
    store: "",
    who: "",
    pFrais: false,
    pSurgel: false,
    quantity: undefined,
    unit: "",
  });

  // Validation
  const isFormValid = $derived(
    formData.productName.trim().length > 0 &&
      formData.productType.trim().length > 0,
  );

  // Suggestions
  const typeSuggestions = $derived(
    productsStore.uniqueProductTypes.map((t) => ({
      id: t,
      label: t,
    })),
  );

  const storeSuggestions = $derived(
    productsStore.uniqueStores.map((s) => ({
      id: s,
      label: s,
    })),
  );

  const whoSuggestions = $derived(
    productsStore.uniqueWho.map((w) => ({
      id: w,
      label: w,
    })),
  );

  async function handleSubmit(keepOpen: boolean = false) {
    if (!isFormValid || loading) return;

    loading = true;
    error = null;
    success = false;

    try {
      if (!productsStore.currentMainId) {
        throw new Error("Aucun événement principal sélectionné");
      }

      const productData = {
        productName: formData.productName.trim(),
        productType: formData.productType.trim(),
        store: formData.store.trim()
          ? { storeName: formData.store.trim() }
          : undefined,
        who: formData.who.trim() ? [formData.who.trim()] : undefined,
        pFrais: formData.pFrais,
        pSurgel: formData.pSurgel,
        quantity: formData.quantity
          ? { q: formData.quantity, u: formData.unit.trim() || "pièces" }
          : undefined,
      };

      await createManualProduct(productData, productsStore.currentMainId!);

      success = true;

      // Reset form after short delay and close
      // Reset form but keep some values
      if (keepOpen) {
        formData.productName = "";
        formData.quantity = undefined;
        formData.unit = "";
        formData.pFrais = false;
        formData.pSurgel = false;

        // Focus on product name input
        setTimeout(() => {
          const input = document.getElementById("product-name");
          input?.focus();
        }, 100);
      } else {
        open = false;
        formData = {
          productName: "",
          productType: "",
          store: "",
          who: "",
          pFrais: false,
          pSurgel: false,
          quantity: undefined,
          unit: "",
        };
      }
    } catch (err) {
      console.error("Error creating product:", err);
      error = "Erreur lors de la création du produit. Veuillez réessayer.";
    } finally {
      loading = false;
    }
  }

  function handleClose() {
    open = false;
    formData = {
      productName: "",
      productType: "",
      store: "",
      who: "",
      pFrais: false,
      pSurgel: false,
      quantity: undefined,
      unit: "",
    };
    error = null;
  }

  $effect(() => {
    if (open) {
      // Petit délai pour s'assurer que le modal est visible
      setTimeout(() => {
        document.getElementById("product-name")?.focus();
      }, 50);
    }
  });

  function handleSuggestionClick(
    field: "productType" | "store" | "who",
    value: string,
  ) {
    formData[field] = value;
  }
</script>

<div class="modal" class:modal-open={open} role="dialog">
  <div class="modal-box relative w-10/12 max-w-5xl">
    <button
      class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2"
      onclick={handleClose}
      aria-label="Fermer"
    >
      <X size={20} />
    </button>

    <h3 class="text-lg font-bold">Ajouter un produit</h3>

    <form
      onsubmit={(e) => {
        e.preventDefault();
        handleSubmit(false);
      }}
      class="mt-6 space-y-4"
    >
      {#if error}
        <div class="alert alert-error text-sm">
          <TriangleAlert size={18} />
          <span>{error}</span>
        </div>
      {/if}

      <fieldset disabled={loading} class="space-y-4">
        <div class="flex flex-wrap gap-4">
          <!-- Nom du produit -->
          <fieldset class="fieldset">
            <!-- <legend class="fieldset-legend">Nom du produit</legend> -->
            <label class="input w-72">
              <PackagePlus class="text-base-content/50 h-5 w-5" />
              <input
                id="product-name"
                type="text"
                placeholder="Nom du produit"
                bind:value={formData.productName}
                disabled={loading}
              />
            </label>
          </fieldset>
          <!-- Quantité et Unité -->
          <QuantityInput
            bind:quantity={formData.quantity}
            bind:unit={formData.unit}
            disabled={loading}
          />
        </div>

        <!-- Type de produit -->
        <fieldset class="fieldset">
          <!-- <legend class="fieldset-legend">Type de produit</legend> -->
          <div class="flex flex-wrap items-baseline gap-2">
            <label class="input w-72">
              <Tag class="text-base-content/50 h-5 w-5" />
              <input
                id="product-type"
                type="text"
                placeholder="type / catégorie"
                bind:value={formData.productType}
                disabled={loading}
              />
            </label>
            <Suggestions
              suggestions={typeSuggestions}
              onSuggestionClick={(s) => (formData.productType = s.label)}
              disabled={loading}
            />
          </div>
        </fieldset>

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

        <!-- Checkboxes Frais / Surgelé -->
        <fieldset class="fieldset">
          <label class="label cursor-pointer justify-start gap-4">
            <input
              type="checkbox"
              class="checkbox checkbox-success"
              bind:checked={formData.pFrais}
              disabled={loading}
            />
            <span class="label-text flex items-center gap-2">
              <Thermometer class="h-4 w-4" />
              Produit frais
            </span>
          </label>
        </fieldset>

        <fieldset class="fieldset">
          <label class="label cursor-pointer justify-start gap-4">
            <input
              type="checkbox"
              class="checkbox checkbox-info"
              bind:checked={formData.pSurgel}
              disabled={loading}
            />
            <span class="label-text flex items-center gap-2">
              <Snowflake class="h-4 w-4" />
              Produit surgelé
            </span>
          </label>
        </fieldset>
      </fieldset>

      <div class="modal-action flex justify-between">
        <button
          type="button"
          class="btn btn-ghost"
          onclick={handleClose}
          disabled={loading}
        >
          Annuler
        </button>
        <div class="flex gap-2">
          <button
            type="button"
            class="btn btn-secondary"
            onclick={() => handleSubmit(true)}
            disabled={loading || !formData.productName}
          >
            {#if loading}
              <span class="loading loading-spinner"></span>
            {:else}
              <Plus size={18} />
            {/if}
            Ajouter et créer un nouveau
          </button>
          <button
            type="submit"
            class="btn btn-primary"
            disabled={loading || !formData.productName}
          >
            {#if loading}
              <span class="loading loading-spinner"></span>
            {/if}
            Ajouter et fermer
          </button>
        </div>
      </div>
    </form>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button onclick={handleClose}>close</button>
  </form>
</div>
