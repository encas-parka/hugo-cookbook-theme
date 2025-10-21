import {
    createPurchase,
    deletePurchase,
    updateProductStock,
    updateProductStore,
    updateProductWho,
    updatePurchase,
} from "../services/appwrite-interactions";
import type { Purchases } from "../types/appwrite";
import type { StoreInfo } from "../types/store.types";
import {
    formatDate,
    formatDisplayQuantity,
    formatQuantity,
    normalizeUnit,
} from "../utils/products-display";
import { userName } from "./GlobalState.svelte";
import { productsStore } from "./ProductsStore.svelte";

/**
 * ProductModalState - Responsabilités UNIQUEMENT :
 * 1. Gestion des formulaires locaux (purchase, stock, etc.)
 * 2. Gestion de l'état d'édition (quel item est en cours d'édition)
 * 3. Orchestration des appels Appwrite
 * 4. Gestion du loading/error UI
 *
 * Les données du produit (purchases, recipes, stock, etc.) sont
 * TOUJOURS lues en direct du ProductsStore, jamais copiées.
 */
export function createProductModalState(productId: string) {
  let loading = $state(false);
  let error = $state<string | null>(null);
  let currentTab = $state("recettes");

  // ─────────────────────────────────────────────────────────────
  // DONNÉES DÉRIVÉES - Toujours fraîches du store
  // ─────────────────────────────────────────────────────────────

  // ✅ Le produit est maintenant TOUJOURS lu du store
  const product = $derived(productsStore.getEnrichedProductById(productId));

  // ✅ Ces dérivés dépendent du produit du store, donc auto-update
  const recipes = $derived(product?.recipesArray ?? []);
  const whoList = $derived(product?.who ?? []);
  const stockEntries = $derived(product?.stockArray ?? []);
  const purchasesList = $derived(product?.purchases ?? []);

  // ─────────────────────────────────────────────────────────────
  // FORMULAIRES LOCAUX - État du modal uniquement
  // ─────────────────────────────────────────────────────────────

  const forms = $state({
    purchase: {
      quantity: null as number | null,
      unit: "",
      store: "",
      who: userName() ?? "",
      price: null as number | null,
      notes: "",
    },
    stock: {
      quantity: null as number | null,
      unit: "",
      notes: "",
      dateTime: new Date().toISOString(),
    },
    store: {
      name: null as string | null,
      comment: null as string | null,
    },
    who: {
      name: "",
    },
  });

  // Initialiser les formulaires une fois que le produit est dispo
  $effect(() => {
    if (!product) return;

    forms.purchase.quantity = product.missingQuantityArray[0]?.quantity ?? null;
    forms.purchase.unit = product.totalNeededArray[0]?.unit ?? "";
    forms.purchase.store = product.storeInfo?.storeName ?? "";
    forms.purchase.who = userName() ?? "";

    forms.stock.unit = product.totalNeededArray[0]?.unit ?? "";

    forms.store.name = product.storeInfo?.storeName ?? null;
    forms.store.comment = product.storeInfo?.storeComment ?? null;
  });

  // ─────────────────────────────────────────────────────────────
  // ÉTAT D'ÉDITION - Tracking quel item est édité
  // ─────────────────────────────────────────────────────────────

  let editingPurchaseId = $state<string | null>(null);

  // ✅ Les données d'édition viennent du purchasesList dérivé
  const editingPurchaseData = $derived.by(() => {
    if (!editingPurchaseId) return null;
    return purchasesList.find((p) => p.$id === editingPurchaseId) ?? null;
  });

  // ─────────────────────────────────────────────────────────────
  // HELPERS
  // ─────────────────────────────────────────────────────────────

  async function withLoading<T>(
    operation: () => Promise<T>,
    successMessage?: string,
  ): Promise<T | null> {
    loading = true;
    error = null;
    try {
      const result = await operation();
      if (successMessage) {
        showToast("success", successMessage);
      }
      return result;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Une erreur est survenue";
      error = message;
      showToast("error", message);
      console.error("[ProductModalState]", err);
      return null;
    } finally {
      loading = false;
    }
  }

  function showToast(type: "success" | "error", message: string) {
    const event = new CustomEvent("toast", {
      detail: { type, message },
    });
    window.dispatchEvent(event);
  }

  // ─────────────────────────────────────────────────────────────
  // ACTIONS - PURCHASES
  // ─────────────────────────────────────────────────────────────

  async function addPurchase() {
    if (!product) return;

    await withLoading(async () => {
      if (!forms.purchase.quantity || !forms.purchase.unit.trim()) {
        throw new Error("Veuillez remplir les champs obligatoires");
      }

      if (!productsStore.currentMainId) {
        throw new Error("mainId non disponible");
      }

      const { quantity, unit } = normalizeUnit(
        forms.purchase.quantity,
        forms.purchase.unit,
      );

      await createPurchase({
        products: [product.$id],
        mainId: productsStore.currentMainId,
        unit,
        quantity,
        store: forms.purchase.store || null,
        who: forms.purchase.who || null,
        notes: forms.purchase.notes || "",
        price: forms.purchase.price || null,
      });

      // ✅ Reset local form, les données du produit se mettront à jour via le store
      forms.purchase = {
        quantity: product.missingQuantityArray[0]?.quantity ?? null,
        unit: product.totalNeededArray[0]?.unit ?? "",
        store: forms.purchase.store,
        who: forms.purchase.who,
        price: null,
        notes: "",
      };
    }, "Achat ajouté avec succès");
  }

  function startEditPurchase(purchase: Purchases) {
    editingPurchaseId = purchase.$id;
  }

  function cancelEditPurchase() {
    editingPurchaseId = null;
  }

  async function updateEditedPurchase(updatedPurchase: Purchases) {
    if (!updatedPurchase.$id) return;

    await withLoading(async () => {
      const { quantity, unit } = normalizeUnit(
        updatedPurchase.quantity,
        updatedPurchase.unit,
      );

      await updatePurchase(updatedPurchase.$id, {
        unit,
        quantity,
        store: updatedPurchase.store || null,
        who: updatedPurchase.who || null,
        notes: updatedPurchase.notes || "",
        price: updatedPurchase.price || null,
      });

      editingPurchaseId = null;
    }, "Achat modifié avec succès");
  }

  async function removePurchase(purchaseId: string) {
    const purchase = purchasesList.find((p) => p.$id === purchaseId);
    if (!purchase) return;

    if (
      !confirm(`Supprimer cet achat (${purchase.quantity} ${purchase.unit}) ?`)
    ) {
      return;
    }

    await withLoading(async () => {
      await deletePurchase(purchaseId);
    }, "Achat supprimé avec succès");
  }

  // ─────────────────────────────────────────────────────────────
  // ACTIONS - STOCK (simplifié - même pattern)
  // ─────────────────────────────────────────────────────────────

  async function addStock() {
    if (!product) return;

    await withLoading(async () => {
      if (!forms.stock.quantity || !forms.stock.unit) {
        throw new Error("Veuillez remplir les champs obligatoires");
      }

      const newEntry = {
        quantity: forms.stock.quantity.toString(),
        unit: forms.stock.unit,
        notes: forms.stock.notes,
        dateTime: forms.stock.dateTime,
      };

      const updated = [...stockEntries, newEntry];
      await updateProductStock(product.$id, JSON.stringify(updated));

      forms.stock.quantity = null;
      forms.stock.notes = "";
      forms.stock.dateTime = new Date().toISOString();
    }, "Relevé de stock ajouté");
  }

  async function removeStock(index: number) {
    if (!product) return;

    if (!confirm("Supprimer ce relevé de stock ?")) return;

    await withLoading(async () => {
      const updated = stockEntries.filter((_, i) => i !== index);
      await updateProductStock(product.$id, JSON.stringify(updated));
    }, "Relevé de stock supprimé");
  }

  // ─────────────────────────────────────────────────────────────
  // ACTIONS - VOLUNTEERS & STORE (même pattern)
  // ─────────────────────────────────────────────────────────────

  async function addVolunteer(name: string) {
    if (!product || !name.trim()) return;

    await withLoading(async () => {
      if (whoList.includes(name)) {
        throw new Error("Ce volontaire est déjà ajouté");
      }

      await updateProductWho(product.$id, [...whoList, name.trim()]);
    }, "Volontaire ajouté");
  }

  async function removeVolunteer(name: string) {
    if (!product) return;

    if (!confirm(`Retirer ${name} ?`)) return;

    await withLoading(async () => {
      await updateProductWho(
        product.$id,
        whoList.filter((v) => v !== name),
      );
    }, "Volontaire retiré");
  }

  async function updateStore(storeInfo: StoreInfo) {
    if (!product) return;

    await withLoading(async () => {
      await updateProductStore(product.$id, storeInfo);
    }, "Magasin mis à jour");
  }


  return {
    // État UI
    get loading() { return loading; },
    get error() { return error; },
    get currentTab() { return currentTab; },
    set currentTab(value: string) { currentTab = value; },

    // Données du produit (toujours fraîches du store)
    get product() { return product; },
    get recipes() { return recipes; },
    get whoList() { return whoList; },
    get stockEntries() { return stockEntries; },
    get purchasesList() { return purchasesList; },

    // État d'édition
    get editingPurchaseId() { return editingPurchaseId; },
    get editingPurchaseData() { return editingPurchaseData; },

    // Formulaires locaux
    forms,

    // Actions
    addPurchase,
    startEditPurchase,
    cancelEditPurchase,
    updateEditedPurchase,
    removePurchase,
    addStock,
    removeStock,
    addVolunteer,
    removeVolunteer,
    updateStore,

    // Utilitaires
    formatQuantity,
    formatDate,
    formatDisplayQuantity
  };
}
