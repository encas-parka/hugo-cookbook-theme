import type { Purchases, Products } from '../types/appwrite';
import type { EnrichedProduct, StoreInfo } from '../types/store.types';
import { 
  createPurchase, 
  updatePurchase, 
  deletePurchase, 
  updateProductStock,
  updateProductWho,
  updateProductStore,
  parseStockData, 
  parseRecipesOccurrences 
} from '../services/appwrite-interactions';
import { productsStore } from './ProductsStore.svelte';
import { userName } from './GlobalState.svelte';
import { normalizeUnit, formatQuantity, formatDate, formatDisplayQuantity } from '../utils/products-display';

export function createProductModalState(product: EnrichedProduct) {

  let loading = $state(false);
  let error = $state<string | null>(null);
  let currentTab = $state('recettes');

  // Préremplissage intelligent des formulaires
  const forms = $state({
    purchase: {
      quantity: null,
      unit: product.totalNeededArray[0]?.unit || '', // Unité par défaut du produit
      store: product.storeInfo?.storeName || '', // Magasin du produit
      who: userName() || '', // Utilisateur courant
      price: null,
      notes: ''
    },
    stock: {
      quantity: null,
      unit: product.totalNeededArray[0]?.unit || '', // Unité par défaut du produit
      notes: '',
      dateTime: new Date().toISOString()
    },
    store: {
      name: product.storeInfo?.storeName || null,
      comment: product.storeInfo?.storeComment || null
    },
    who: {
      name: userName() || '',
    },
  });


  // Données dérivées - utilise les propriétés enrichies par ProductsStore
  const recipes = $derived(product?.recipesArray || []);
  
  const whoList = $derived(product?.who || []);
  
  const stockEntries = $derived(product?.stockArray || []);
  
  const purchasesList = $derived(product?.totalPurchasesArray || []);

  // États d'édition
  let edit = $state({
    purchase: null as Purchases | null,
    store: product.storeInfo || null as StoreInfo | null,
    whoList: null as string[] | null
  });

  // Gestion du chargement et des erreurs
  async function withLoading<T>(operation: () => Promise<T>): Promise<T | null> {
    loading = true;
    error = null;
    try {
      const result = await operation();
      return result;
    } catch (err) {
      error = err instanceof Error ? err.message : 'Une erreur est survenue';
      console.error('[ProductModalState] Erreur:', err);
      return null;
    } finally {
      loading = false;
    }
  }

  // Helper pour afficher des notifications
  function showToast(type: 'success' | 'error', message: string) {
    const event = new CustomEvent('toast', {
      detail: { type, message }
    });
    window.dispatchEvent(event);
  }

  // Réinitialisation des formulaires
  function resetForms() {
    forms.purchase = {
      quantity: null,
      unit: product.totalNeededArray[0]?.unit || '',
      store: product.storeInfo?.storeName || '',
      who: userName() || '',
      price: null,
      notes: ''
    };
    forms.stock = {
      quantity: null,
      unit: product.totalNeededArray[0]?.unit || '',
      notes: '',
      dateTime: new Date().toISOString()
    };
    edit.purchase = null;
  }

  // Actions CRUD - Achats
  async function addPurchase() {
    await withLoading(async () => {
      if (!forms.purchase.quantity || !forms.purchase.unit.trim()) {
        throw new Error('Veuillez remplir les champs obligatoires');
      }

      // Normaliser les unités avant envoi à Appwrite
      const { quantity: normalizedQuantity, unit: normalizedUnit } = normalizeUnit(
        forms.purchase.quantity, 
        forms.purchase.unit
      );

      const result = await createPurchase({
        products: [product.$id],
        mainId: productsStore.currentMainId,
        unit: normalizedUnit,
        quantity: normalizedQuantity,
        store: forms.purchase.store || null,
        who: forms.purchase.who || null,
        notes: forms.purchase.notes || '',
        price: forms.purchase.price || null,
      });

      if (result) {
        resetForms();
        showToast('success', 'Achat ajouté avec succès');
      }
    });
  }

  function startEditPurchase(purchase: Purchases) {
    edit.purchase = { ...purchase };
  }

  function cancelEditPurchase() {
    edit.purchase = null;
  }

  async function savePurchase() {
    if (!edit.purchase) return;

    await withLoading(async () => {
      // Normaliser les unités avant envoi à Appwrite
      const { quantity: normalizedQuantity, unit: normalizedUnit } = normalizeUnit(
        edit.purchase!.quantity, 
        edit.purchase!.unit
      );

      const updates = {
        unit: normalizedUnit,
        quantity: normalizedQuantity,
        store: edit.purchase?.store || null,
        who: edit.purchase?.who || null,
        notes: edit.purchase?.notes || '',
        price: edit.purchase?.price || null
      };

      const result = await updatePurchase(edit.purchase!.$id, updates);

      if (result) {
        edit.purchase = null;
        showToast('success', 'Achat modifié avec succès');
      }
    });
  }

  async function deletePurchase(purchaseId: string) {
    const purchase = purchasesList.find(p => p.$id === purchaseId);
    if (!confirm(`Êtes-vous sûr de vouloir supprimer cet achat (${purchase?.quantity} ${purchase?.unit}) ?`)) {
      return;
    }

    await withLoading(async () => {
      await deletePurchase(purchaseId);
      showToast('success', 'Achat supprimé avec succès');
    });
  }

  // Actions CRUD - Stock
  async function addStock() {
    await withLoading(async () => {
      if (!forms.stock.quantity || !forms.stock.unit) {
        throw new Error('Veuillez remplir les champs obligatoires');
      }

      // Créer la nouvelle entrée de stock
      const newStockEntry = {
        quantity: forms.stock.quantity.toString(),
        unit: forms.stock.unit,
        notes: forms.stock.notes || '',
        dateTime: forms.stock.dateTime || new Date().toISOString()
      };

      // Ajouter aux entrées existantes
      const updatedStockEntries = [...stockEntries, newStockEntry];

      // Mettre à jour le produit
      const result = await updateProductStock(product.$id, JSON.stringify(updatedStockEntries));

      if (result) {
        forms.stock.quantity = null;
        forms.stock.notes = '';
        forms.stock.dateTime = new Date().toISOString();
        showToast('success', 'Relevé de stock ajouté avec succès');
      }
    });
  }

  async function deleteStock(index: number) {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce relevé de stock ?')) {
      return;
    }

    await withLoading(async () => {
      // Supprimer l'entrée
      const updatedStockEntries = stockEntries.filter((_, i) => i !== index);

      // Mettre à jour le produit
      const result = await updateProductStock(product.$id, JSON.stringify(updatedStockEntries));

      if (result) {
        showToast('success', 'Relevé de stock supprimé avec succès');
      }
    });
  }

  // Actions CRUD - Volontaires
  async function addVolunteer(volunteerName: string) {
    if (!volunteerName.trim()) return;

    await withLoading(async () => {
      const name = volunteerName.trim();

      // Vérifier si le volontaire existe déjà
      if (whoList.includes(name)) {
        throw new Error('Ce volontaire est déjà ajouté');
      }

      const updatedWho = [...whoList, name];
      const result = await updateProductWho(product.$id, updatedWho);

      if (result) {
        showToast('success', 'Volontaire ajouté avec succès');
      }
    });
  }

  async function removeVolunteer(volunteer: string) {
    if (!confirm(`Retirer ${volunteer} de la liste des volontaires ?`)) {
      return;
    }

    await withLoading(async () => {
      const updatedWho = whoList.filter(v => v !== volunteer);
      const result = await updateProductWho(product.$id, updatedWho);

      if (result) {
        showToast('success', 'Volontaire retiré avec succès');
      }
    });
  }

  // Actions CRUD - Magasin
  async function updateStore(storeInfo?: string | null) {
    await withLoading(async () => {
      // Utiliser la valeur passée en paramètre, sinon utiliser editingStore
      const finalStoreValue = storeInfo !== undefined
        ? storeInfo
        : (edit.store?.storeName && edit.store.storeName.trim() !== '' ? edit.store.storeName.trim() : product.store);

      const result = await updateProductStore(product.$id, finalStoreValue);

      if (result) {
        showToast('success', 'Magasin mis à jour avec succès');
      }
    });
  }

  // Utilitaires
  function setCurrentTab(tab: string) {
    currentTab = tab;
  }

  // Retourner l'API publique du store
  return {
    // États
    get loading() { return loading; },
    get error() { return error; },
    get currentTab() { return currentTab; },
    
    // Formulaires
    forms,
    edit,
    
    // Données dérivées
    get recipes() { return recipes; },
    get whoList() { return whoList; },
    get stockEntries() { return stockEntries; },
    get purchasesList() { return purchasesList; },
    
    // Actions - Achats
    addPurchase,
    startEditPurchase,
    cancelEditPurchase,
    savePurchase,
    deletePurchase,
    
    // Actions - Stock
    addStock,
    deleteStock,
    
    // Actions - Volontaires
    addVolunteer,
    removeVolunteer,
    
    // Actions - Magasin
    updateStore,
    
    // Utilitaires
    resetForms,
    setCurrentTab,
    
    // Helper functions exposées pour les composants
    formatQuantity,
    formatDate,
    formatDisplayQuantity
  };
}


}
