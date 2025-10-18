<script lang="ts">
  import type { Products, Purchases } from '../types/appwrite';
  import { X, Package, ShoppingCart, Archive, Users, Store, Clock, CircleCheck, TriangleAlert } from '@lucide/svelte';
  import { productsStore } from '../stores/ProductsStore.svelte';
  import { updateProduct, updateProductStore, updateProductWho, updateProductStock, createPurchase, updatePurchase, deletePurchase, parseStockData, parseRecipesOccurrences } from '../services/appwrite-interactions';
  import PurchaseManager from './PurchaseManager.svelte';
  import StockManager from './StockManager.svelte';
  import VolunteerManager from './VolunteerManager.svelte';
  import StoreManager from './StoreManager.svelte';


  // Props en mode runes
  interface Props {
    isOpen: boolean;
    productId: string | null;
    initialTab: string;
    onclose: () => void;
  }

  let {
    isOpen = $bindable(false),
    productId = $bindable(null),
    initialTab = 'recettes',
    onclose
  }: Props = $props();

  // Wrapper réactif - suit automatiquement les mises à jour du store
  let currentProduct = $derived.by(() =>
    productId ? productsStore.products.find(p => p.$id === productId) : null
  );

  // État local
  let currentTab = $state(initialTab);
  let loading = $state(false);
  let error = $state<string | null>(null);

  // Pour la gestion des volontaires
  let newVolunteer = $state('');
  let editingWho = $state<string[]>([]);

  // Pour la gestion des magasins
  let editingStore = $state('');

  // Données pour les formulaires
  let newPurchase = $state({
    quantity: 0,
    unit: '',
    store: '',
    who: '',
    price: null as number | null,
    notes: ''
  });

  let newStock = $state({
    quantity: 0,
    unit: '',
    notes: '',
    dateTime: ''
  });


  let stockEntries = $state<Array<{quantity: string; unit: string; notes: string; dateTime: string}>>([]);
  let editingPurchase = $state<Purchases | null>(null);

  // Données dérivées - plus besoin d'état local dupliqué
  let currentProductPurchases = $derived.by(() => {
    const purchases = currentProduct?.purchases;
    if (!purchases || !Array.isArray(purchases)) {
      console.warn('[ProductModal] Purchases is not a valid array:', purchases);
      return [];
    }

    // Filtrer les purchases qui n'ont pas de $id valide
    const validPurchases = purchases.filter(purchase => {
      if (!purchase || typeof purchase !== 'object') {
        console.warn('[ProductModal] Invalid purchase object:', purchase);
        return false;
      }
      if (!purchase.$id) {
        console.warn('[ProductModal] Purchase missing $id:', purchase);
        return false;
      }
      return true;
    });

    if (validPurchases.length !== purchases.length) {
      console.warn(`[ProductModal] Filtered ${purchases.length - validPurchases.length} invalid purchases`);
    }

    return validPurchases;
  });
  let recipesOccurrences = $derived.by(() =>parseRecipesOccurrences(currentProduct?.recipesOccurrences || null));

  // Réagir aux changements de produit // remplir au montage
  $effect(() => {
    if (currentProduct) {
      currentTab = initialTab;
      stockEntries = parseStockData(currentProduct.stockReel);
      editingWho = currentProduct.who ? [...currentProduct.who] : [];
      editingStore = currentProduct.store || '';
      resetForms();
    }
  });

  function resetForms() {
    newPurchase = {
      quantity: 0,
      unit: '',
      store: currentProduct?.store || '',
      who: '',
      price: null,
      notes: ''
    };
    newStock = {
      quantity: 0,
      unit: '',
      notes: '',
      dateTime: new Date().toISOString().slice(0, 16)
    };
  }

  function closeModal() {
    isOpen = false;
    currentTab = initialTab;
    error = null;
    onclose();
  }

  function handleTabClick(tab: string) {
    currentTab = tab;
    console.log('Tab clicked:', currentTab);
  }

  // Gestion du chargement et des erreurs
  async function withLoading<T>(operation: () => Promise<T>): Promise<T | null> {
    loading = true;
    error = null;
    try {
      const result = await operation();
      return result;
    } catch (err) {
      error = err instanceof Error ? err.message : 'Une erreur est survenue';
      console.error('[ProductModal] Erreur:', err);
      return null;
    } finally {
      loading = false;
    }
  }

  // Helper pour formater les dates
  function formatDate(dateString: string): string {
    if (!dateString) return '-';
    try {
      return new Date(dateString).toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return dateString;
    }
  }

  // Helper pour formater les quantités
  function formatQuantity(quantity: string | null): string {
    if (!quantity) return '-';
    try {
      const parsed = JSON.parse(quantity);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.map(q => `${q.value} ${q.unit}`).join(' et ');
      }
    } catch {
      return quantity;
    }
    return quantity;
  }

  // Fonctions CRUD pour les achats
  async function handleAddPurchase() {
    if (!currentProduct) return;
    loading = true;
    await withLoading(async () => {
      if (!newPurchase.quantity || !newPurchase.unit.trim()) {
        throw new Error('Veuillez remplir les champs obligatoires');
      }

      const result = await createPurchase({
        products: [currentProduct.$id],
        mainId: currentProduct.mainId.$id,
        unit: newPurchase.unit,
        quantity: newPurchase.quantity,
        store: newPurchase.store || null,
        who: newPurchase.who || null,
        notes: newPurchase.notes || '',
        price: newPurchase.price || null,
      });

      if (result) {
        // Le realtime mettra à jour automatiquement via currentProduct
        resetForms();

        // Notification de succès
        const successEvent = new CustomEvent('toast', {
          detail: { type: 'success', message: 'Achat ajouté avec succès' }
        });
        window.dispatchEvent(successEvent);
      }
    });
  }

  function startEditPurchase(purchase: Purchases) {
    editingPurchase = { ...purchase };
  }

  function cancelEditPurchase() {
    editingPurchase = null;
  }

  async function handleSavePurchase() {
    if (!editingPurchase) return;

    await withLoading(async () => {
      const purchaseId = editingPurchase!.$id;
      const updates = {
        unit: editingPurchase!.unit,
        quantity: editingPurchase!.quantity,
        store: editingPurchase?.store || null,
        who: editingPurchase?.who || null,
        notes: editingPurchase?.notes || '',
        price: editingPurchase?.price || null
      };

      const result = await updatePurchase(purchaseId, updates);

      if (result) {
        // Le realtime mettra à jour automatiquement via currentProduct
        editingPurchase = null;

        // Notification de succès
        const successEvent = new CustomEvent('toast', {
          detail: { type: 'success', message: 'Achat modifié avec succès' }
        });
        window.dispatchEvent(successEvent);
      }
    });
  }

  async function handleDeletePurchase(purchase: Purchases) {
    if (!confirm(`Êtes-vous sûr de vouloir supprimer cet achat (${purchase.quantity} ${purchase.unit}) ?`)) {
      return;
    }

    await withLoading(async () => {
      await deletePurchase(purchase.$id);

      // Le realtime mettra à jour automatiquement via currentProduct

      // Notification de succès
      const successEvent = new CustomEvent('toast', {
        detail: { type: 'success', message: 'Achat supprimé avec succès' }
      });
      window.dispatchEvent(successEvent);
    });
  }

  // Fonctions pour la gestion du stock
  async function handleAddStock() {
    if (!currentProduct) return;

    await withLoading(async () => {
      if (!newStock.quantity || !newStock.unit) {
        throw new Error('Veuillez remplir les champs obligatoires');
      }

      // Créer la nouvelle entrée de stock
      const newStockEntry = {
        quantity: newStock.quantity.toString(),
        unit: newStock.unit,
        notes: newStock.notes || '',
        dateTime: newStock.dateTime || new Date().toISOString()
      };

      // Ajouter aux entrées existantes
      const updatedStockEntries = [...stockEntries, newStockEntry];

      // Mettre à jour le produit
      const productId = currentProduct.$id;
      const result = await updateProductStock(productId, JSON.stringify(updatedStockEntries));

      if (result) {
        stockEntries = updatedStockEntries;
        resetForms();

        // Notification de succès
        const successEvent = new CustomEvent('toast', {
          detail: { type: 'success', message: 'Relevé de stock ajouté avec succès' }
        });
        window.dispatchEvent(successEvent);
      }
    });
  }

  async function handleDeleteStock(index: number) {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce relevé de stock ?')) {
      return;
    }
    if (!currentProduct) return;


    await withLoading(async () => {
      // Supprimer l'entrée
      const updatedStockEntries = stockEntries.filter((_, i) => i !== index);

      // Mettre à jour le produit
      const result = await updateProductStock(currentProduct.$id, JSON.stringify(updatedStockEntries));

      if (result) {
        stockEntries = updatedStockEntries;

        // Notification de succès
        const successEvent = new CustomEvent('toast', {
          detail: { type: 'success', message: 'Relevé de stock supprimé avec succès' }
        });
        window.dispatchEvent(successEvent);
      }
    });
  }

  // Fonctions pour la gestion des volontaires
  async function handleAddVolunteer() {
    if (!currentProduct || !newVolunteer.trim()) return;

    await withLoading(async () => {
      const volunteerName = newVolunteer.trim();

      // Vérifier si le volontaire existe déjà
      if (editingWho.includes(volunteerName)) {
        throw new Error('Ce volontaire est déjà ajouté');
      }

      const updatedWho = [...editingWho, volunteerName];
      const result = await updateProductWho(currentProduct.$id, updatedWho);

      if (result) {
        editingWho = updatedWho;
        newVolunteer = '';

        // Notification de succès
        const successEvent = new CustomEvent('toast', {
          detail: { type: 'success', message: 'Volontaire ajouté avec succès' }
        });
        window.dispatchEvent(successEvent);
      }
    });
  }

  async function handleRemoveVolunteer(volunteer: string) {
    if (!currentProduct) return;

    if (!confirm(`Retirer ${volunteer} de la liste des volontaires ?`)) {
      return;
    }

    await withLoading(async () => {
      const updatedWho = editingWho.filter(v => v !== volunteer);
      const result = await updateProductWho(currentProduct.$id, updatedWho);

      if (result) {
        editingWho = updatedWho;

        // Notification de succès
        const successEvent = new CustomEvent('toast', {
          detail: { type: 'success', message: 'Volontaire retiré avec succès' }
        });
        window.dispatchEvent(successEvent);
      }
    });
  }

  // Fonctions pour la gestion du magasin
  async function handleUpdateStore(storeValue?: string | null) {
    if (!currentProduct) return;

    await withLoading(async () => {
      // Utiliser la valeur passée en paramètre, sinon utiliser editingStore
      const finalStoreValue = storeValue !== undefined
        ? storeValue
        : (editingStore && editingStore.trim() !== '' ? editingStore.trim() : currentProduct.store);

      console.log('[ProductModal] handleUpdateStore called with:', { storeValue, editingStore, finalStoreValue });

      const result = await updateProductStore(currentProduct.$id, finalStoreValue);

      if (result) {
        // Notification de succès
        const successEvent = new CustomEvent('toast', {
          detail: { type: 'success', message: 'Magasin mis à jour avec succès' }
        });
        window.dispatchEvent(successEvent);

        // Synchroniser editingStore avec la valeur mise à jour
        editingStore = result.store || '';
      }
    });
  }

</script>

{#if isOpen && currentProduct}
  <div class="modal modal-open">
    <div class="modal-box max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
      <!-- Header -->
      <div class="flex items-center justify-between p-4 border-b">
        <div class="flex-1">
          <h2 class="text-xl font-bold">{currentProduct.productName}</h2>
          <div class="flex items-center gap-3 mt-2">
            <span class="badge badge-secondary">{currentProduct.productType}</span>

            {#if currentProduct.status === 'active'}
              <div class="badge badge-success gap-1">
                <CircleCheck class="w-3 h-3" />
                Actif
              </div>
            {:else}
              <div class="badge badge-warning gap-1">
                <TriangleAlert class="w-3 h-3" />
                {currentProduct.status}
              </div>
            {/if}

            <div class="text-sm opacity-75">
              <span class="font-medium">Besoin:</span> {formatQuantity(currentProduct.totalNeededConsolidated)}
            </div>
          </div>
        </div>
        <button
          class="btn btn-circle btn-ghost btn-sm"
          onclick={closeModal}
          aria-label="Fermer"
        >
          <X class="w-4 h-4" />
        </button>
      </div>

      <!-- Onglets -->
      <div class="tabs tabs-border flex-none" role="tablist">
        <button
          role= "tab" class="tab {currentTab === 'recettes' ? 'tab-active' : ''}"
          onclick={() => handleTabClick('recettes')}
        >
          <Package class="w-4 h-4 mr-1" />
          Recettes
          {#if recipesOccurrences.length > 0}
            <span class="badge badge-sm badge-secondary ml-1">{recipesOccurrences.length}</span>
          {/if}
        </button>

        <button
          role= "tab" class="tab {currentTab === 'achats' ? 'tab-active' : ''}"
          onclick={() => handleTabClick('achats')}
        >
          <ShoppingCart class="w-4 h-4 mr-1" />
          Achats
          {#if currentProductPurchases.length > 0}
            <span class="badge badge-sm badge-secondary ml-1">{currentProductPurchases.length}</span>
          {/if}
        </button>

        <button
          role= "tab" class="tab {currentTab === 'stock' ? 'tab-active' : ''}"
          onclick={() => handleTabClick('stock')}
        >
          <Archive class="w-4 h-4 mr-1" />
          Stock
          {#if stockEntries.length > 0}
            <span class="badge badge-sm badge-secondary ml-1">{stockEntries.length}</span>
          {/if}
        </button>

        <button
          role= "tab" class="tab {currentTab === 'volontaires' ? 'tab-active' : ''}"
          onclick={() => handleTabClick('volontaires')}
        >
          <Users class="w-4 h-4 mr-1" />
          Volontaires
          {#if currentProduct.who && currentProduct.who.length > 0}
            <span class="badge badge-sm badge-secondary ml-1">{currentProduct.who.length}</span>
          {/if}
        </button>

        <button
          role= "tab" class="tab {currentTab === 'magasins' ? 'tab-active' : ''}"
          onclick={() => handleTabClick('magasins')}
        >
          <Store class="w-4 h-4 mr-1" />
          Magasin
        </button>
      </div>

      <!-- Contenu -->
      <div class="flex-1 overflow-y-auto p-4 min-h-96">
        {#if error}
          <div class="alert alert-error mb-4">
            <X class="w-4 h-4" />
            <span>erreur : {error}</span>
          </div>
        {/if}

          <div class="">
            {#if currentTab === 'recettes'}
              <!-- Onglet Recettes -->
              <div class="space-y-4">
                <h3 class="text-lg font-semibold flex items-center gap-2">
                  <Package class="w-5 h-5" />
                  Recettes utilisant ce produit
                </h3>

                {#if recipesOccurrences.length === 0}
                  <div class="text-center py-8 opacity-50">
                    <Package class="w-12 h-12 mx-auto mb-2" />
                    <p>Aucune recette trouvée pour ce produit</p>
                  </div>
                {:else}
                  <div class="overflow-x-auto">
                    <table class="table table-zebra table-sm">
                      <thead>
                        <tr>
                          <th>Recette</th>
                          <th>Quantité</th>
                          <th>Date service</th>
                          <th>Horaire</th>
                          <th>Type plat</th>
                          <th>Assiettes</th>
                        </tr>
                      </thead>
                      <tbody>
                        {#each recipesOccurrences as recipe (recipe.recipeName + recipe.dateTimeService)}
                          <tr>
                            <td class="font-medium">{recipe.recipeName}</td>
                            <td>{recipe.quantity} {recipe.unit}</td>
                            <td>{formatDate(recipe.dateTimeService)}</td>
                            <td>{recipe.horaire || '-'}</td>
                            <td>{recipe.typePlat || '-'}</td>
                            <td>{recipe.assiettes || '-'}</td>
                          </tr>
                        {/each}
                      </tbody>
                    </table>
                  </div>
                {/if}
              </div>
            {:else if currentTab === 'achats'}
              <PurchaseManager
                product={currentProduct}
              {currentProductPurchases}
                {loading}
                {newPurchase}
                onAddPurchase={handleAddPurchase}
                onStartEditPurchase={startEditPurchase}
                onCancelEditPurchase={cancelEditPurchase}
                onSavePurchase={handleSavePurchase}
                onDeletePurchase={handleDeletePurchase}
              />
            {:else if currentTab === 'stock'}
              <StockManager
                product={currentProduct}
                {stockEntries}
                {loading}
                onAddStock={handleAddStock}
                onDeleteStock={handleDeleteStock}
              />
            {:else if currentTab === 'volontaires'}
              <VolunteerManager
                product={currentProduct}
                {editingWho}
                {loading}
                onAddVolunteer={handleAddVolunteer}
                onRemoveVolunteer={handleRemoveVolunteer}
              />
            {:else if currentTab === 'magasins'}
              <StoreManager
                product={currentProduct}
                {editingStore}
                {loading}
                onUpdateStore={handleUpdateStore}
              />
            {/if}
          </div>
      </div>

      <!-- Footer -->
      <div class="modal-action">
        <button class="btn btn-ghost" onclick={closeModal}>
          Fermer
        </button>
      </div>
    </div>
  </div>
{/if}

<style>

</style>
