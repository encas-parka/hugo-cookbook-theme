import {
  createPurchase,
  deletePurchase,
  updateProductStock,
  updateProductStore,
  updateProductWho,
  updatePurchase,
  upsertProduct,
  updateProductBatch,
  updateTotalOverride,
  removeTotalOverride,
} from "../services/appwrite-interactions";
import { generateRecipesWithDates } from "../utils/productsUtils";
import type { Purchases } from "../types/appwrite";
import type {
  EnrichedProduct,
  StoreInfo,
  TotalNeededOverrideData,
} from "../types/store.types";
import {
  formatDate,
  formatQuantity,
  normalizeUnit,
} from "../utils/products-display";
import { globalState } from "./GlobalState.svelte";
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
export function createProductModalState(
  productId: string,
  initialTab: string = "recettes",
) {
  let loading = $state(false);
  let error = $state<string | null>(null);

  // État de l'onglet courant dans le modal
  let currentTab = $state(initialTab);

  // ─────────────────────────────────────────────────────────────
  // DONNÉES DÉRIVÉES - Toujours fraîches du store
  // ─────────────────────────────────────────────────────────────

  // const product = $derived(productsStore.getEnrichedProductById(productId));
  // DEBUG
  const product = $derived.by(() => {
    console.log(`[ProductModalState] Recalculating product ${productId}`);
    return productsStore.getEnrichedProductById(productId);
  });
  // ✅ Ces dérivés dépendent du produit du store, donc auto-update

  const whoList = $derived(product?.who ?? []);
  const stockParsed = $derived(product?.stockParsed ?? null);
  const purchasesList = $derived(product?.purchases ?? []);

  const recipes = $derived.by(() => {
    if (!product?.byDate) return [];

    // console.log(
    //   `[ProductModalState] Génération des recettes pour ${productId}`,
    // );
    return generateRecipesWithDates(product.byDate);
  });

  // ─────────────────────────────────────────────────────────────
  // FORMULAIRES LOCAUX - État du modal uniquement
  // ─────────────────────────────────────────────────────────────

  const forms = $state({
    purchase: {
      quantity: null as number | null,
      unit: "",
      store: "",
      who: globalState.userName() ?? "",
      price: null as number | null,
      notes: "",
      status: null as string | null,
      orderDate: null as string | null,
      deliveryDate: null as string | null,
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
    who: [] as string[],
  });

  // État UI pour les composants (ex: editMode dans OverrideManager)
  const uiStates = $state({
    overrideManagerEditMode: false,
  });

  // Initialiser les formulaires une seule fois que le produit est dispo
  let initialized = $state(false);

  // ─────────────────────────────────────────────────────────────
  // SUIVI DES CHANGEMENTS - Snapshot des états originaux
  // ─────────────────────────────────────────────────────────────
  let originalFormsSnapshot = $state<{
    purchase: typeof forms.purchase;
    stock: typeof forms.stock;
    store: typeof forms.store;
    whoList: string[];
  } | null>(null);

  $effect(() => {
    // S'assurer que le produit est disponible ET que ce n'est pas déjà initialisé
    if (!product || initialized) return;

    // Initialisation UNIQUEMENT au premier chargement
    forms.purchase.quantity = product.missingQuantityArray[0]?.q ?? null;
    forms.purchase.unit = product.totalNeededArray[0]?.u ?? "";
    forms.purchase.store = product.storeInfo?.storeName ?? "";
    forms.purchase.who = globalState.userName() ?? "";
    forms.purchase.status = forms.purchase.status || "delivered";

    forms.stock.unit = product.totalNeededArray[0]?.u ?? "";

    forms.store.name = product.storeInfo?.storeName ?? "";
    forms.store.comment = product.storeInfo?.storeComment ?? null;

    // Initialiser who avec les valeurs du produit
    forms.who = product?.who ? [...product.who] : [];

    // Faire un snapshot des états originaux APRÈS l'initialisation
    originalFormsSnapshot = {
      purchase: { ...forms.purchase },
      stock: { ...forms.stock },
      store: { ...forms.store },
      whoList: [...forms.who],
    };

    // Marquer comme initialisé pour ne plus jamais ré-exécuter
    initialized = true;
  });

  // ─────────────────────────────────────────────────────────────
  // DÉTECTION DES CHANGEMENTS
  // ─────────────────────────────────────────────────────────────
  const hasChanges = $derived(
    originalFormsSnapshot
      ? {
          store:
            JSON.stringify(forms.store) !==
            JSON.stringify(originalFormsSnapshot.store),
          stock: hasStockChanges(),
          who:
            JSON.stringify(forms.who) !==
            JSON.stringify(originalFormsSnapshot.whoList),
        }
      : { store: false, stock: false, who: false },
  );

  // Fonction pour détecter si le stock a changé (logique réutilisée de StockManager)
  function hasStockChanges(): boolean {
    // Le formulaire doit être valide pour considérer les changements
    const isFormValid =
      forms.stock.quantity && forms.stock.quantity > 0 && forms.stock.unit;

    if (!isFormValid) {
      return false;
    }

    // S'il n'y a pas de stock existant, c'est un ajout
    if (!stockParsed) {
      return true;
    }

    // Comparer avec le stock existant
    return (
      forms.stock.quantity!.toString() !== stockParsed.quantity ||
      forms.stock.unit !== stockParsed.unit ||
      (forms.stock.notes || "") !== (stockParsed.notes || "")
    );
  }

  const hasAnyChanges = $derived(
    Boolean(
      originalFormsSnapshot &&
        (hasChanges.store || hasChanges.stock || hasChanges.who),
    ),
  );

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

      // ✅ LOGIQUE DE SYNC : Vérifier isSynced du produit avant création du purchase
      if (!product.isSynced) {
        // Produit local : créer sur Appwrite d'abord
        console.log(
          `[ProductModalState] Produit ${product.$id} local, création pour purchase...`,
        );
        await upsertProduct(
          product.$id,
          {}, // Pas de modifications spécifiques au produit lui-même
          (id) => productsStore.getEnrichedProductById(id),
        );
      }

      // Préparer les données du purchase avec gestion automatique de deliveryDate
      const purchaseStatus = forms.purchase.status || "delivered";
      let deliveryDate = forms.purchase.deliveryDate || null;

      // 🎯 NOUVELLE LOGIQUE : Assigner automatiquement deliveryDate pour les achats livrés sans date
      if (purchaseStatus === "delivered" && !deliveryDate) {
        deliveryDate = new Date().toISOString(); // Conserve l'heure complète
      }

      // Ensuite créer le purchase normalement
      await createPurchase({
        products: [product.$id],
        mainId: productsStore.currentMainId,
        unit,
        quantity,
        store: forms.purchase.store || null,
        who: forms.purchase.who || null,
        notes: forms.purchase.notes || "",
        price: forms.purchase.price || null,
        status: purchaseStatus,
        orderDate: forms.purchase.orderDate || null,
        deliveryDate,
      });

      // ✅ Reset local form, les données du produit se mettront à jour via le store
      forms.purchase = {
        quantity: product.missingQuantityArray[0]?.q ?? null,
        unit: product.totalNeededArray[0]?.u ?? "",
        store: forms.purchase.store,
        who: forms.purchase.who,
        price: null,
        notes: "",
        status: null,
        orderDate: null,
        deliveryDate: null,
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

      // Préparer les données avec gestion automatique de deliveryDate
      const purchaseStatus = updatedPurchase.status || null;
      let deliveryDate = updatedPurchase.deliveryDate || null;

      // 🎯 NOUVELLE LOGIQUE : Assigner automatiquement deliveryDate pour les achats livrés sans date
      if (purchaseStatus === "delivered" && !deliveryDate) {
        deliveryDate = new Date().toISOString(); // Conserve l'heure complète
      }

      await updatePurchase(updatedPurchase.$id, {
        unit,
        quantity,
        store: updatedPurchase.store || null,
        who: updatedPurchase.who || null,
        notes: updatedPurchase.notes || "",
        price: updatedPurchase.price || null,
        status: purchaseStatus,
        orderDate: updatedPurchase.orderDate || null,
        deliveryDate,
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

  async function setStock() {
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

      // ✅ LOGIQUE DE SYNC : Vérifier isSynced du produit
      if (!product.isSynced) {
        // Produit local : utiliser upsertProduct pour créer sur Appwrite
        console.log(
          `[ProductModalState] Produit ${product.$id} local, création stock avec upsert...`,
        );
        await upsertProduct(
          product.$id,
          { stockReel: JSON.stringify(newEntry) },
          (id) => productsStore.getEnrichedProductById(id),
        );
      } else {
        // Produit déjà sync : utiliser updateProductStock normal
        console.log(
          `[ProductModalState] Produit ${product.$id} déjà sync, update stock normal...`,
        );
        await updateProductStock(product.$id, JSON.stringify(newEntry));
      }

      // Reset formulaire
      forms.stock.quantity = null;
      forms.stock.notes = "";
      forms.stock.dateTime = new Date().toISOString();
    }, "Stock mis à jour");
  }

  async function removeStock() {
    if (!product) return;

    if (!confirm("Supprimer le stock actuel ?")) return;

    await withLoading(async () => {
      // ✅ LOGIQUE DE SYNC : Vérifier isSynced du produit
      if (!product.isSynced) {
        // Produit local : utiliser upsertProduct
        console.log(
          `[ProductModalState] Produit ${product.$id} local, suppression stock avec upsert...`,
        );
        await upsertProduct(product.$id, { stockReel: null }, (id) =>
          productsStore.getEnrichedProductById(id),
        );
      } else {
        // Produit déjà sync : utiliser updateProductStock normal
        console.log(
          `[ProductModalState] Produit ${product.$id} déjà sync, suppression stock normal...`,
        );
        await updateProductStock(product.$id, null);
      }
    }, "Stock supprimé");
  }

  // ─────────────────────────────────────────────────────────────
  // ACTIONS - VOLUNTEERS & STORE (même pattern)
  // ─────────────────────────────────────────────────────────────

  async function setWho(newWhoList: string[]) {
    if (!product) return;

    await withLoading(async () => {
      // ✅ LOGIQUE DE SYNC : Vérifier isSynced du produit
      if (!product.isSynced) {
        // Produit local : utiliser upsertProduct pour créer sur Appwrite
        console.log(
          `[ProductModalState] Produit ${product.$id} local, création who avec upsert...`,
        );
        await upsertProduct(product.$id, { who: newWhoList }, (id) =>
          productsStore.getEnrichedProductById(id),
        );
      } else {
        // Produit déjà sync : utiliser updateProductWho normal
        console.log(
          `[ProductModalState] Produit ${product.$id} déjà sync, setWho normal...`,
        );
        await updateProductWho(product.$id, newWhoList);
      }
    }, "Volontaires mis à jour");
  }

  async function updateStore(storeInfo: StoreInfo) {
    if (!product) return;

    await withLoading(async () => {
      // ✅ LOGIQUE DE SYNC : Vérifier isSynced du produit
      if (!product.isSynced) {
        // Produit local : utiliser upsertProduct pour créer sur Appwrite
        console.log(
          `[ProductModalState] Produit ${product.$id} local, création store avec upsert...`,
        );
        await upsertProduct(
          product.$id,
          { store: JSON.stringify(storeInfo) },
          (id) => productsStore.getEnrichedProductById(id),
        );
      } else {
        // Produit déjà sync : utiliser updateProductStore normal
        console.log(
          `[ProductModalState] Produit ${product.$id} déjà sync, update store normal...`,
        );
        await updateProductStore(product.$id, storeInfo);
      }
    }, "Magasin mis à jour");
  }

  // ─────────────────────────────────────────────────────────────
  // ACTIONS - OVERRIDE MANUEL
  // ─────────────────────────────────────────────────────────────

  async function setOverride(overrideData: TotalNeededOverrideData) {
    if (!product) return;

    await withLoading(async () => {
      if (!product.isSynced) {
        // Produit local : utiliser upsertProduct pour créer sur Appwrite
        console.log(
          `[ProductModalState] Produit ${product.$id} local, création who avec upsert...`,
        );
        await upsertProduct(
          product.$id,
          { totalNeededOverride: JSON.stringify(overrideData) },
          (id) => productsStore.getEnrichedProductById(id),
        );
      } else {
        await updateTotalOverride(product.$id, overrideData, true);
      }
    }, "Override appliqué");
  }

  async function removeOverride() {
    if (!product) return;

    if (
      !confirm("Supprimer l'override manuel et revenir au calcul automatique ?")
    )
      return;

    await withLoading(async () => {
      await removeTotalOverride(product.$id, true);
    }, "Override supprimé");
  }

  // ─────────────────────────────────────────────────────────────
  // SAUVEGARDE GLOBALE - Méthode batch
  // ─────────────────────────────────────────────────────────────
  async function saveAllChanges() {
    if (!product || !hasAnyChanges) return;

    await withLoading(async () => {
      const batchUpdates: any = {};

      // Collecter les changements
      if (hasChanges.stock && forms.stock.quantity && forms.stock.unit) {
        const newEntry = {
          quantity: forms.stock.quantity.toString(),
          unit: forms.stock.unit,
          notes: forms.stock.notes,
          dateTime: forms.stock.dateTime,
        };
        batchUpdates.stockReel = JSON.stringify(newEntry);
      }

      if (hasChanges.who) {
        batchUpdates.who = forms.who;
      }

      if (hasChanges.store) {
        const storeInfo: StoreInfo = {
          storeName: forms.store.name || "",
          storeComment: forms.store.comment || undefined,
        };
        batchUpdates.storeInfo = storeInfo;
      }

      // Utiliser la méthode batch pour tout mettre à jour en un appel
      if (Object.keys(batchUpdates).length > 0) {
        await updateProductBatch(product.$id, batchUpdates, (id) =>
          productsStore.getEnrichedProductById(id),
        );

        // Mettre à jour le snapshot après sauvegarde
        originalFormsSnapshot = {
          purchase: { ...forms.purchase },
          stock: { ...forms.stock },
          store: { ...forms.store },
          whoList: [...forms.who],
        };
      }
    }, "Modifications enregistrées");
  }

  // ─────────────────────────────────────────────────────────────
  // RÉINITIALISATION DES FORMULAIRES - Appelé à la fermeture du modal
  // ─────────────────────────────────────────────────────────────

  function resetForms() {
    // Réinitialiser les états UI
    uiStates.overrideManagerEditMode = false;

    // Réinitialiser l'état d'édition des purchases
    editingPurchaseId = null;

    // Réinitialiser l'initialisation pour forcer une réinitialisation complète
    // lors de la prochaine ouverture du modal
    initialized = false;

    console.log("[ProductModalState] Formulaires et états UI réinitialisés");
  }

  return {
    // État UI
    get loading() {
      return loading;
    },
    get error() {
      return error;
    },

    // Données du produit (toujours fraîches du store)
    get product() {
      return product;
    },
    get recipes() {
      return recipes;
    },
    get whoList() {
      return whoList;
    },
    get stockParsed() {
      return stockParsed;
    },
    get purchasesList() {
      return purchasesList;
    },

    // État d'édition
    get editingPurchaseId() {
      return editingPurchaseId;
    },
    get editingPurchaseData() {
      return editingPurchaseData;
    },

    // Formulaires locaux
    forms,

    // États UI pour les composants
    get uiStates() {
      return uiStates;
    },

    // Gestion de l'onglet courant
    get currentTab() {
      return currentTab;
    },
    setCurrentTab(tab: string) {
      currentTab = tab;
    },

    // Actions
    addPurchase,
    startEditPurchase,
    cancelEditPurchase,
    updateEditedPurchase,
    removePurchase,
    setStock,
    removeStock,
    setWho,
    updateStore,
    setOverride,
    removeOverride,

    // Sauvegarde globale et suivi des changements
    saveAllChanges,
    get hasChanges() {
      return hasChanges;
    },
    get hasAnyChanges() {
      return hasAnyChanges;
    },

    // Réinitialisation
    resetForms,

    // Utilitaires
    formatQuantity,
    formatDate,
  };
}
