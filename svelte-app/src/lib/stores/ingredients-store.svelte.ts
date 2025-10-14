/**
 * IngredientsStore.svelte.ts
 * Store réactif simplifié pour la gestion des ingrédients avec PersistedState de Runed
 * Version simplifiée utilisant PersistedState au lieu de la gestion manuelle du cache
 */

import { PersistedState } from "runed";
import {
  transformIngredient,
  transformAllIngredients,
  sortByPriority,
} from '../services/data-transformer.svelte';
import { appwriteClient } from '../services/appwrite-client';
import type {
  Ingredient,
  IngredientRaw,
  Purchase,
  LoadingState,
  FilterState,
  SortState,
  SelectionState,
  ProductStatus
} from '../types/ingredient';
import type { AppwriteError } from '../types/appwrite';

/**
 * Store réactif simplifié pour les ingrédients utilisant PersistedState
 */
export function createIngredientsStore(listId: string) {
  // Persistance automatique avec PersistedState de Runed
  const ingredients = new PersistedState(`ingredients_${listId}`, <Ingredient[]>[]);
  const allPurchases = new PersistedState(`purchases_${listId}`, <Purchase[]>[]);
  const filters = new PersistedState(`filters_${listId}`, <FilterState>{
    search: '',
    status: undefined,
    type: undefined,
    store: undefined,
    volunteer: undefined
  });
  const sort = new PersistedState(`sort_${listId}`, <SortState>{
    field: 'name',
    direction: 'asc'
  });
  const lastSync = new PersistedState(`lastSync_${listId}`, <Date | null>(null));

  // État réactif local (non persisté)
  let loadingState = $state<LoadingState>('idle');
  let error = $state<AppwriteError | null>(null);
  let isOnline = $state(true);

  // État de sélection (non persisté entre les sessions)
  let selection = $state<SelectionState>({
    selected: new Set(),
    isAllSelected: false,
    isPartiallySelected: false
  });

  // État de l'UI (non persisté)
  let editingIngredient = $state<string | null>(null);
  let showEditModal = $state(false);
  let showDeleteConfirm = $state(false);
  let isSaving = $state(false);

  // Abonnement temps réel
  let realtimeUnsubscribe = $state<(() => void) | null>(null);

  // ========================
  // CALCULS DÉRIVÉS
  // ========================

  // Ingrédients filtrés et triés
  let filteredIngredients = $derived(() => {
    let filtered = [...ingredients.current];

    // Filtrer par recherche
    if (filters.current.search) {
      const searchLower = filters.current.search.toLowerCase();
      filtered = filtered.filter(ing =>
        ing.ingredientName.toLowerCase().includes(searchLower) ||
        ing.typeDisplay.toLowerCase().includes(searchLower) ||
        ing.storeDisplay.toLowerCase().includes(searchLower)
      );
    }

    // Filtrer par statut
    if (filters.current.status) {
      filtered = filtered.filter(ing => ing.status === filters.current.status);
    }

    // Filtrer par type
    if (filters.current.type) {
      filtered = filtered.filter(ing => ing.ingType === filters.current.type);
    }

    // Filtrer par magasin
    if (filters.current.store) {
      filtered = filtered.filter(ing => ing.storeDisplay === filters.current.store);
    }

    // Filtrer par volontaire
    if (filters.current.volunteer) {
      filtered = filtered.filter(ing =>
        ing.responsibleDisplay.includes(filters.current.volunteer!)
      );
    }

    // Trier
    filtered.sort((a, b) => {
      let aValue: any, bValue: any;

      switch (sort.current.field) {
        case 'name':
          aValue = a.ingredientName.toLowerCase();
          bValue = b.ingredientName.toLowerCase();
          break;
        case 'status':
          const statusOrder = { 'missing': 0, 'partial': 1, 'unused': 2, 'sufficient': 3 };
          aValue = statusOrder[a.status];
          bValue = statusOrder[b.status];
          break;
        case 'store':
          aValue = a.storeDisplay.toLowerCase();
          bValue = b.storeDisplay.toLowerCase();
          break;
        case 'type':
          aValue = a.typeDisplay.toLowerCase();
          bValue = b.typeDisplay.toLowerCase();
          break;
        default:
          aValue = a.ingredientName.toLowerCase();
          bValue = b.ingredientName.toLowerCase();
      }

      let result = 0;
      if (aValue < bValue) result = -1;
      else if (aValue > bValue) result = 1;

      return sort.current.direction === 'desc' ? -result : result;
    });

    return filtered;
  });

  // Statistiques calculées
  let stats = $derived(() => calculateIngredientStats(ingredients.current));

  // Progression globale
  let progress = $derived(() => calculateOverallProgress(ingredients.current));

  // Suggestions pour les filtres
  let availableStores = $derived(() => {
    const stores = new Set<string>();
    ingredients.current.forEach(ing => {
      if (ing.storeDisplay && ing.storeDisplay !== '-') {
        stores.add(ing.storeDisplay);
      }
    });
    return Array.from(stores).sort();
  });

  let availableTypes = $derived(() => {
    const types = new Set<string>();
    ingredients.current.forEach(ing => {
      if (ing.ingType) {
        types.add(ing.ingType);
      }
    });
    return Array.from(types).sort();
  });

  let availableVolunteers = $derived(() => {
    const volunteers = new Set<string>();
    ingredients.current.forEach(ing => {
      if (ing.responsibleDisplay && ing.responsibleDisplay !== '-') {
        ing.responsibleDisplay.split(', ').forEach(v => {
          if (v.trim()) volunteers.add(v.trim());
        });
      }
    });
    return Array.from(volunteers).sort();
  });

  // ========================
  // ACTIONS
  // ========================

  /**
   * Charge les ingrédients depuis Appwrite et met à jour le PersistedState
   */
  async function syncWithAppwrite(): Promise<void> {
    try {
      loadingState = 'loading';
      error = null;

      const { databases } = await appwriteClient.getClients();
      const config = appwriteClient.getConfig();

      // Charger les achats d'abord
      const purchasesResponse = await databases.listDocuments(
        config.databaseId,
        config.collections.purchases,
        [
          { method: 'equal', attribute: 'list', value: listId },
          { method: 'limit', value: 2000 }
        ]
      );

      allPurchases.current = purchasesResponse.documents as Purchase[];

      // Charger les ingrédients bruts
      const ingredientsResponse = await databases.listDocuments(
        config.databaseId,
        config.collections.ingredients,
        [
          { method: 'equal', attribute: 'ingredientLists', value: listId },
          { method: 'limit', value: 800 }
        ]
      );

      const rawIngredients = ingredientsResponse.documents as IngredientRaw[];

      // Transformer les ingrédients
      ingredients.current = transformAllIngredients(rawIngredients, allPurchases.current);

      lastSync.current = new Date();
      loadingState = 'success';

      console.log('[IngredientsStore] Synchronisation terminée avec succès');

    } catch (err) {
      const appwriteError = err as AppwriteError;
      error = appwriteError;
      loadingState = 'error';
      console.error('[IngredientsStore] Erreur lors de la synchronisation:', err);
    }
  }

  /**
   * Met à jour un ingrédient
   */
  async function updateIngredient(ingredientId: string, updates: Partial<Ingredient>): Promise<void> {
    try {
      isSaving = true;
      error = null;

      const { databases } = await appwriteClient.getClients();
      const config = appwriteClient.getConfig();

      // Mettre à jour dans Appwrite
      await databases.updateDocument(
        config.databaseId,
        config.collections.ingredients,
        ingredientId,
        updates
      );

      // Mettre à jour dans le PersistedState (automatiquement persisté)
      const index = ingredients.current.findIndex(ing => ing.$id === ingredientId);
      if (index !== -1) {
        ingredients.current[index] = { ...ingredients.current[index], ...updates };
      }

      console.log('[IngredientsStore] Ingrédient mis à jour:', ingredientId);

    } catch (err) {
      const appwriteError = err as AppwriteError;
      error = appwriteError;
      console.error('[IngredientsStore] Erreur lors de la mise à jour:', err);
      throw err;
    } finally {
      isSaving = false;
    }
  }

  /**
   * Supprime un ingrédient
   */
  async function deleteIngredient(ingredientId: string): Promise<void> {
    try {
      isSaving = true;
      error = null;

      const { databases } = await appwriteClient.getClients();
      const config = appwriteClient.getConfig();

      // Supprimer dans Appwrite
      await databases.deleteDocument(
        config.databaseId,
        config.collections.ingredients,
        ingredientId
      );

      // Supprimer du PersistedState (automatiquement persisté)
      ingredients.current = ingredients.current.filter(ing => ing.$id !== ingredientId);

      // Retirer de la sélection
      selection.selected.delete(ingredientId);
      _updateSelectionState();

      console.log('[IngredientsStore] Ingrédient supprimé:', ingredientId);

    } catch (err) {
      const appwriteError = err as AppwriteError;
      error = appwriteError;
      console.error('[IngredientsStore] Erreur lors de la suppression:', err);
      throw err;
    } finally {
      isSaving = false;
    }
  }

  /**
   * Configure l'abonnement temps réel
   */
  function setupRealtimeSubscription(): void {
    if (realtimeUnsubscribe) {
      realtimeUnsubscribe();
    }

    realtimeUnsubscribe = appwriteClient.subscribeToCollections(
      ['ingredients', 'purchases'],
      listId,
      (payload) => {
        console.log('[IngredientsStore] Événement temps réel reçu:', payload);
        _handleRealtimeEvent(payload);
      },
      {
        onConnect: () => {
          isOnline = true;
          console.log('[IngredientsStore] Connexion temps réel établie');
        },
        onDisconnect: () => {
          isOnline = false;
          console.log('[IngredientsStore] Connexion temps réel perdue');
        },
        onError: (err) => {
          console.error('[IngredientsStore] Erreur de connexion temps réel:', err);
          isOnline = false;
        }
      }
    );
  }

  /**
   * Gère les événements temps réel
   */
  function _handleRealtimeEvent(payload: any): void {
    // Implémentation simple - recharger les données si nécessaire
    console.log('[IngredientsStore] Rechargement suite à événement temps réel');
    syncWithAppwrite();
  }

  /**
   * Met à jour les filtres (persistés automatiquement)
   */
  function updateFilters(newFilters: Partial<FilterState>): void {
    filters.current = { ...filters.current, ...newFilters };
  }

  /**
   * Met à jour le tri (persisté automatiquement)
   */
  function updateSort(newSort: Partial<SortState>): void {
    sort.current = { ...sort.current, ...newSort };
  }

  /**
   * Met à jour la sélection
   */
  function _updateSelectionState(): void {
    selection.isAllSelected = selection.selected.size === filteredIngredients.length;
    selection.isPartiallySelected = !selection.isAllSelected && selection.selected.size > 0;
  }

  /**
   * Sélectionne un ingrédient
   */
  function toggleIngredientSelection(ingredientId: string): void {
    if (selection.selected.has(ingredientId)) {
      selection.selected.delete(ingredientId);
    } else {
      selection.selected.add(ingredientId);
    }
    _updateSelectionState();
  }

  /**
   * Sélectionne tous les ingrédients filtrés
   */
  function selectAll(): void {
    selection.selected.clear();
    filteredIngredients.forEach(ing => selection.selected.add(ing.$id));
    _updateSelectionState();
  }

  /**
   * Désélectionne tous les ingrédients
   */
  function selectNone(): void {
    selection.selected.clear();
    _updateSelectionState();
  }

  /**
   * Ouvre la modale d'édition
   */
  function openEditModal(ingredientId: string): void {
    editingIngredient = ingredientId;
    showEditModal = true;
  }

  /**
   * Ferme la modale d'édition
   */
  function closeEditModal(): void {
    editingIngredient = null;
    showEditModal = false;
  }

  /**
   * Ouvre la confirmation de suppression
   */
  function openDeleteConfirm(ingredientId: string): void {
    editingIngredient = ingredientId;
    showDeleteConfirm = true;
  }

  /**
   * Ferme la confirmation de suppression
   */
  function closeDeleteConfirm(): void {
    editingIngredient = null;
    showDeleteConfirm = false;
  }

  /**
   * Réinitialise les filtres
   */
  function resetFilters(): void {
    filters.current = {
      search: '',
      status: undefined,
      type: undefined,
      store: undefined,
      volunteer: undefined
    };
  }

  /**
   * Force le rechargement des données
   */
  async function forceRefresh(): Promise<void> {
    await syncWithAppwrite();
  }

  /**
   * Nettoie le store
   */
  function cleanup(): void {
    if (realtimeUnsubscribe) {
      realtimeUnsubscribe();
      realtimeUnsubscribe = null;
    }
  }

  // Initialiser le store
  async function initialize(): Promise<void> {
    // Si nous avons des données en cache, les utiliser immédiatement
    if (ingredients.current.length > 0) {
      loadingState = 'success';
      console.log('[IngredientsStore] Données chargées depuis PersistedState');
    }

    // Toujours synchroniser avec Appwrite si en ligne
    if (isOnline) {
      await syncWithAppwrite();
      setupRealtimeSubscription();
    } else if (ingredients.current.length === 0) {
      // Pas de données en cache et hors ligne
      loadingState = 'error';
      error = {
        name: 'Error',
        message: 'Aucune donnée disponible et hors ligne',
        type: 'network',
        timestamp: new Date().toISOString(),
        details: { offline: true }
      } as AppwriteError;
    }
  }

  // Démarrer l'initialisation
  initialize();

  // Nettoyer lors de la destruction du composant
  $effect(() => {
    return cleanup;
  });

  return {
    // État (getter readonly)
    get ingredients() { return ingredients.current; },
    get filteredIngredients() { return filteredIngredients; },
    get loadingState() { return loadingState; },
    get error() { return error; },
    get isOnline() { return isOnline; },
    get lastSyncDate() { return lastSync.current; },
    get filters() { return filters.current; },
    get sort() { return sort.current; },
    get selection() { return selection; },
    get stats() { return stats; },
    get progress() { return progress; },
    get availableStores() { return availableStores; },
    get availableTypes() { return availableTypes; },
    get availableVolunteers() { return availableVolunteers; },
    get showEditModal() { return showEditModal; },
    get showDeleteConfirm() { return showDeleteConfirm; },
    get editingIngredient() { return editingIngredient; },
    get isSaving() { return isSaving; },

    // Actions
    syncWithAppwrite,
    updateIngredient,
    deleteIngredient,
    updateFilters,
    updateSort,
    toggleIngredientSelection,
    selectAll,
    selectNone,
    openEditModal,
    closeEditModal,
    openDeleteConfirm,
    closeDeleteConfirm,
    resetFilters,
    forceRefresh,
    cleanup
  };
}
