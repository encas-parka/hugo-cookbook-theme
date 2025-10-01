/**
 * localStorageService.js
 * Service de gestion du cache localStorage pour l'application collaborative
 * Stratégie : Le navigateur est la source de vérité primaire, Appwrite pour la synchronisation
 */

export class LocalStorageService {
  constructor() {
    this.storagePrefix = 'collab_ingredients_';
  }

  /**
   * Génère la clé de stockage pour une liste donnée
   */
  _getStorageKey(listId, dataType) {
    return `${this.storagePrefix}${listId}_${dataType}`;
  }

  /**
   * Sauvegarde toutes les données dans localStorage en une seule écriture
   */
  saveAllData(listId, data) {
    try {
      const key = this._getStorageKey(listId, 'all');
      const serializedData = JSON.stringify(data);
      localStorage.setItem(key, serializedData);

      // Mettre à jour le timestamp de synchronisation
      this.updateLastSyncTimestamp(listId);

      console.log(`[LocalStorage] Données sauvegardées: ${key}`, {
        event: !!data.event,
        ingredientsCount: data.ingredients?.length || 0,
        purchasesCount: data.purchases?.length || 0
      });
    } catch (error) {
      console.error(`[LocalStorage] Erreur lors de la sauvegarde des données:`, error);
      // Gérer le cas où le localStorage est plein
      if (error.name === 'QuotaExceededError') {
        this._handleStorageQuotaExceeded(listId);
      }
    }
  }

  /**
   * Récupère toutes les données depuis localStorage en une seule lecture
   */
  loadAllData(listId) {
    try {
      const key = this._getStorageKey(listId, 'all');
      const serializedData = localStorage.getItem(key);

      if (!serializedData) {
        return {
          event: null,
          ingredients: [],
          purchases: [],
          lastSyncTimestamp: null
        };
      }

      const data = JSON.parse(serializedData);
      const lastSyncTimestamp = this.getLastSyncTimestamp(listId);

      console.log(`[LocalStorage] Données chargées: ${key}`, {
        event: !!data.event,
        ingredientsCount: data.ingredients?.length || 0,
        purchasesCount: data.purchases?.length || 0
      });

      return {
        ...data,
        lastSyncTimestamp
      };
    } catch (error) {
      console.error('[LocalStorage] Erreur lors du chargement des données:', error);
      return {
        event: null,
        ingredients: [],
        purchases: [],
        lastSyncTimestamp: null
      };
    }
  }

  /**
   * Met à jour le timestamp de dernière synchronisation
   */
  updateLastSyncTimestamp(listId) {
    const timestamp = new Date().toISOString();
    const key = this._getStorageKey(listId, 'lastSyncTimestamp');
    localStorage.setItem(key, timestamp);
    // console.log(`[LocalStorage] Timestamp mis à jour: ${key}`, timestamp);
  }

  /**
   * Récupère le timestamp de dernière synchronisation
   */
  getLastSyncTimestamp(listId) {
    const key = this._getStorageKey(listId, 'lastSyncTimestamp');
    const timestamp = localStorage.getItem(key);
    return timestamp ? new Date(timestamp) : null;
  }

  /**
   * Vérifie si des données existent pour une liste
   */
  hasData(listId) {
    const timestamp = this.getLastSyncTimestamp(listId);
    return timestamp !== null;
  }

  /**
   * Efface toutes les données pour une liste
   */
  clearData(listId) {
    const keys = [
      this._getStorageKey(listId, 'event'),
      this._getStorageKey(listId, 'ingredients'),
      this._getStorageKey(listId, 'purchases'),
      this._getStorageKey(listId, 'lastSyncTimestamp')
    ];

    keys.forEach(key => {
      localStorage.removeItem(key);
    });

    console.log(`[LocalStorage] Données effacées pour la liste: ${listId}`);
  }

  /**
   * Met à jour un document spécifique dans le cache
   */
  updateDocument(listId, dataType, documentId, updates) {
    const allData = this.loadAllData(listId);
    const data = allData[dataType];
    if (!data || !Array.isArray(data)) return false;

    const index = data.findIndex(doc => doc.$id === documentId);
    if (index !== -1) {
      // Mettre à jour le document existant
      data[index] = { ...data[index], ...updates, $updatedAt: new Date().toISOString() };
    } else {
      // Ajouter un nouveau document
      data.push({ $id: documentId, ...updates, $createdAt: new Date().toISOString(), $updatedAt: new Date().toISOString() });
    }

    this.saveAllData(listId, allData);
    return true;
  }

  /**
   * Supprime un document spécifique du cache
   */
  removeDocument(listId, dataType, documentId) {
    const allData = this.loadAllData(listId);
    const data = allData[dataType];
    if (!data || !Array.isArray(data)) return false;

    const filteredData = data.filter(doc => doc.$id !== documentId);

    if (filteredData.length !== data.length) {
      allData[dataType] = filteredData;
      this.saveAllData(listId, allData);
      return true;
    }

    return false;
  }

  /**
   * Gère le cas où le localStorage est plein
   */
  _handleStorageQuotaExceeded(listId) {
    console.warn('[LocalStorage] Quota dépassé, nettoyage des anciennes données...');

    // Effacer les données les plus anciennes
    const allKeys = Object.keys(localStorage);
    const listKeys = allKeys.filter(key => key.startsWith(this.storagePrefix));

    // Trier par date de modification (approximative)
    listKeys.sort((a, b) => {
      const aData = localStorage.getItem(a);
      const bData = localStorage.getItem(b);
      // Simple heuristique : supposer que les données plus grandes sont plus récentes
      return bData.length - aData.length;
    });

    // Supprimer les 25% les plus anciennes
    const keysToDelete = listKeys.slice(Math.floor(listKeys.length * 0.75));
    keysToDelete.forEach(key => localStorage.removeItem(key));

    console.log(`[LocalStorage] ${keysToDelete.length} anciennes entrées supprimées`);
  }

  /**
   * Calcule la taille totale utilisée par le cache
   */
  getStorageUsage() {
    const allKeys = Object.keys(localStorage);
    const collabKeys = allKeys.filter(key => key.startsWith(this.storagePrefix));

    let totalSize = 0;
    collabKeys.forEach(key => {
      totalSize += localStorage.getItem(key).length;
    });

    return {
      totalEntries: collabKeys.length,
      totalSizeBytes: totalSize,
      totalSizeKB: Math.round(totalSize / 1024 * 100) / 100
    };
  }

  /**
   * Efface toutes les données collaboratives du localStorage
   */
  clearAllCollaborativeData() {
    const allKeys = Object.keys(localStorage);
    const collabKeys = allKeys.filter(key => key.startsWith(this.storagePrefix));

    collabKeys.forEach(key => localStorage.removeItem(key));

    console.log(`[LocalStorage] Toutes les données collaboratives ont été effacées (${collabKeys.length} entrées)`);
  }
}

// Exporter une instance unique du service
export const localStorageService = new LocalStorageService();
