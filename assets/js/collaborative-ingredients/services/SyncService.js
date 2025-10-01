/**
 * SyncService.js
 * Service de synchronisation des données entre Appwrite et le cache local
 * Implémente la stratégie de synchronisation différentielle
 */

import { localStorageService } from './localStorageService.js';

export class SyncService {
  constructor(database, listId, appwriteConfig) {
    this.database = database;
    this.listId = listId;
    this.appwriteConfig = appwriteConfig;

    if (!this.appwriteConfig) {
      console.error('[SyncService] APPWRITE_CONFIG non fourni');
      throw new Error('Configuration Appwrite manquante');
    }

    this.dbId = this.appwriteConfig.databaseId;
    this.collections = this.appwriteConfig.collections;

    if (!this.collections) {
      console.error('[SyncService] Collections non définies dans la configuration');
      throw new Error('Configuration des collections manquante');
    }
  }

  /**
   * Étape 1: Chargement instantané depuis le cache local
   */
  async loadFromCache() {

    const cachedData = localStorageService.loadAllData(this.listId);

    if (cachedData.lastSyncTimestamp) {
    console.log('[SyncService] Chargement depuis le cache local...');

      return {
        success: true,
        data: cachedData,
        fromCache: true
      };
    }

    console.log('[SyncService] Aucune donnée en cache - première visite');
    return {
      success: false,
      data: null,
      fromCache: false
    };
  }

  /**
   * Étape 2: Synchronisation des changements (catch-up)
   */
  async syncChanges() {
    console.log('[SyncService] Synchronisation des changements...');

    try {
      const lastSyncTimestamp = localStorageService.getLastSyncTimestamp(this.listId);
      const isFirstVisit = !lastSyncTimestamp;

      const syncPromises = [
        this._syncCollection('events', this.listId, lastSyncTimestamp, isFirstVisit),
        this._syncCollection('ingredients', 'ingredientLists', lastSyncTimestamp, isFirstVisit),
        this._syncCollection('purchases', 'list', lastSyncTimestamp, isFirstVisit)
      ];

      const [eventSync, ingredientsSync, purchasesSync] = await Promise.all(syncPromises);

      // Récupérer les données complètes après synchronisation
      const completeData = await this._loadCompleteData();

      // Mettre à jour le cache
      localStorageService.saveAllData(this.listId, completeData);

      return {
        success: true,
        data: completeData,
        changes: {
          event: eventSync.changes,
          ingredients: ingredientsSync.changes,
          purchases: purchasesSync.changes
        },
        isFirstVisit
      };

    } catch (error) {
      console.error('[SyncService] Erreur lors de la synchronisation:', error);
      throw error;
    }
  }

  /**
   * Synchronise une collection spécifique
   */
  async _syncCollection(collectionName, relationField, lastSyncTimestamp, isFirstVisit) {
    try {
      const collectionId = this.collections[collectionName];
      const queries = [];

      // Ajouter la requête de relation
      if (collectionName === 'events') {
        queries.push(Appwrite.Query.equal('$id', this.listId));
      } else {
        queries.push(Appwrite.Query.equal(relationField, this.listId));
      }

      // Ajouter le filtre temporel si ce n'est pas la première visite
      if (!isFirstVisit && lastSyncTimestamp) {
        queries.push(Appwrite.Query.greaterThan('$updatedAt', lastSyncTimestamp.toISOString()));
      }

      // Augmenter la limite pour les collections avec beaucoup de documents
      if (collectionName === 'purchases') {
        queries.push(Appwrite.Query.limit(2000));
      } else if (collectionName === 'ingredients') {
        queries.push(Appwrite.Query.limit(800));
      }

      const response = await this.database.listDocuments(this.dbId, collectionId, queries);

      // console.log(`[SyncService] Synchronisation ${collectionName}:`, {
      //   documentsCount: response.documents.length,
      //   isFirstVisit,
      //   hasTimeFilter: !isFirstVisit && !!lastSyncTimestamp
      // });

      return {
        success: true,
        changes: response.documents,
        collection: collectionName
      };

    } catch (error) {
      console.error(`[SyncService] Erreur de synchronisation pour ${collectionName}:`, error);
      return {
        success: false,
        changes: [],
        collection: collectionName,
        error: error.message
      };
    }
  }

  /**
   * Charge les données complètes depuis Appwrite
   */
  async _loadCompleteData() {
    const db = this.database;
    const dbId = this.dbId;
    const collections = this.collections;

    const [eventResponse, ingredientsResponse, purchasesResponse] = await Promise.all([
      db.getDocument(dbId, collections.events, this.listId),
      db.listDocuments(dbId, collections.ingredients, [
        Appwrite.Query.equal('ingredientLists', this.listId),
        Appwrite.Query.limit(800),
      ]),
      db.listDocuments(dbId, collections.purchases, [
        Appwrite.Query.equal('list', this.listId),
        Appwrite.Query.limit(2000),
      ]),
    ]);

    return {
      event: eventResponse,
      ingredients: ingredientsResponse.documents,
      purchases: purchasesResponse.documents
    };
  }

  /**
   * Applique les changements temps réel au cache local
   */
  applyRealtimeChange(payload) {
    console.log('[SyncService] Application du changement temps réel:', payload);

    const { collection, operation, document } = this._parseRealtimePayload(payload);

    if (!collection || !operation) {
      console.warn('[SyncService] Payload temps réel invalide:', payload);
      return false;
    }

    try {
      switch (operation) {
        case 'create':
        case 'update':
          this._handleDocumentUpdate(collection, document);
          break;
        case 'delete':
          this._handleDocumentDelete(collection, document);
          break;
        default:
          console.warn(`[SyncService] Opération non gérée: ${operation}`);
          return false;
      }

      return true;

    } catch (error) {
      console.error('[SyncService] Erreur lors de l\'application du changement temps réel:', error);
      return false;
    }
  }

  /**
   * Gère la création/mise à jour d'un document
   */
  _handleDocumentUpdate(collectionName, document) {
    const dataType = this._getDataTypeForCollection(collectionName);

    if (!dataType) return false;

    // Vérifier si le document appartient bien à notre liste
    if (!this._documentBelongsToList(collectionName, document)) {
      return false;
    }

    const success = localStorageService.updateDocument(this.listId, dataType, document.$id, document);

    if (success) {
      console.log(`[SyncService] Document ${dataType} mis à jour dans le cache:`, document.$id);
    }

    return success;
  }

  /**
   * Gère la suppression d'un document
   */
  _handleDocumentDelete(collectionName, document) {
    const dataType = this._getDataTypeForCollection(collectionName);

    if (!dataType) return false;

    const success = localStorageService.removeDocument(this.listId, dataType, document.$id);

    if (success) {
      console.log(`[SyncService] Document ${dataType} supprimé du cache:`, document.$id);
    }

    return success;
  }

  /**
   * Vérifie si un document appartient à notre liste
   */
  _documentBelongsToList(collectionName, document) {
    switch (collectionName) {
      case 'events':
        return document.$id === this.listId;
      case 'ingredients':
        return document.ingredientLists === this.listId;
      case 'purchases':
        return document.list === this.listId;
      default:
        return false;
    }
  }

  /**
   * Obtient le type de données pour une collection
   */
  _getDataTypeForCollection(collectionName) {
    const mapping = {
      'events': 'event',
      'ingredients': 'ingredients',
      'purchases': 'purchases'
    };

    return mapping[collectionName];
  }

  /**
   * Parse le payload temps réel (version simplifiée)
   */
  _parseRealtimePayload(payload) {
    // Extraire les informations du payload Appwrite
    const events = payload.events || [];

    // Trouver un événement de base de données
    const dataEvent = events.find(event => {
      return event && typeof event === 'string' && event.startsWith('databases.');
    });

    if (!dataEvent) {
      return { collection: null, operation: null, document: null };
    }

    // Parser le channel pour obtenir la collection et l'opération
    const channelParts = dataEvent.split('.');
    const collectionId = channelParts[3]; // databases.{dbId}.collections.{collectionId}.documents
    const operation = channelParts[6]; // L'opération est à l'index 6

    // Trouver le nom de la collection
    const collectionName = this._getCollectionNameById(collectionId);

    // Extraire le document
    const document = payload.payload || null;

    return {
      collection: collectionName,
      operation: operation,
      document: document
    };
  }

  /**
   * Trouve le nom de la collection par son ID
   */
  _getCollectionNameById(collectionId) {
    for (const [name, id] of Object.entries(this.collections)) {
      if (id === collectionId) {
        return name;
      }
    }
    return null;
  }

  /**
   * Force une resynchronisation complète
   */
  async forceFullSync() {
    console.log('[SyncService] Forçage d\'une synchronisation complète...');

    // Effacer le timestamp pour forcer un chargement complet
    const key = localStorageService._getStorageKey(this.listId, 'lastSyncTimestamp');
    localStorage.removeItem(key);

    // Relancer la synchronisation
    return await this.syncChanges();
  }

  /**
   * Obtient des statistiques de synchronisation
   */
  getSyncStats() {
    const cachedData = localStorageService.loadAllData(this.listId);
    const storageUsage = localStorageService.getStorageUsage();

    return {
      hasCachedData: localStorageService.hasData(this.listId),
      lastSyncTimestamp: cachedData.lastSyncTimestamp,
      cachedItemsCount: {
        ingredients: cachedData.ingredients?.length || 0,
        purchases: cachedData.purchases?.length || 0
      },
      storageUsage
    };
  }
}
