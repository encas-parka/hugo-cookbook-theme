/**
 * HistoryManager.js
 * Système de gestion de l'historique des actions avec undo/redo
 * pour l'application collaborative d'ingrédients
 */

export class HistoryManager {
  constructor(maxHistorySize = 20) {
    this.history = [];
    this.currentIndex = -1;
    this.maxHistorySize = maxHistorySize;
    this.listeners = [];
    this.isUndoing = false;
    this.isRedoing = false;
  }

  /**
   * Ajoute une action à l'historique
   * @param {Object} action - Action à ajouter
   * @param {string} action.type - Type d'action
   * @param {Object} action.data - Données de l'action
   * @param {Function} action.undo - Fonction d'annulation
   * @param {Function} action.redo - Fonction de rétablissement
   * @param {string} action.description - Description pour l'utilisateur
   */
  addAction(action) {
    if (this.isUndoing || this.isRedoing) {
      return; // Éviter l'ajout d'actions pendant undo/redo
    }

    // Valider l'action
    if (!this.validateAction(action)) {
      console.warn('[HistoryManager] Action invalide, ignorée:', action);
      return;
    }

    // Supprimer les actions après l'index actuel si on ajoute une nouvelle action
    if (this.currentIndex < this.history.length - 1) {
      this.history = this.history.slice(0, this.currentIndex + 1);
    }

    // Ajouter la nouvelle action
    const actionWithMetadata = {
      ...action,
      id: this.generateActionId(),
      timestamp: new Date().toISOString(),
      executed: true
    };

    this.history.push(actionWithMetadata);

    // Limiter la taille de l'historique
    if (this.history.length > this.maxHistorySize) {
      this.history = this.history.slice(-this.maxHistorySize);
    }

    this.currentIndex = this.history.length - 1;
    this.notifyListeners();

    console.log(`[HistoryManager] Action ajoutée: ${action.description} (${this.currentIndex + 1}/${this.history.length})`);
  }

  /**
   * Annule la dernière action
   * @returns {Promise<boolean>} True si l'action a été annulée avec succès
   */
  async undo() {
    if (!this.canUndo()) {
      console.warn('[HistoryManager] Impossible d\'annuler, aucune action disponible');
      return false;
    }

    this.isUndoing = true;

    try {
      const action = this.history[this.currentIndex];
      console.log(`[HistoryManager] Annulation de: ${action.description}`);

      await action.undo(action.data);
      action.executed = false;
      this.currentIndex--;

      this.notifyListeners();
      return true;

    } catch (error) {
      console.error('[HistoryManager] Erreur lors de l\'annulation:', error);
      return false;
    } finally {
      this.isUndoing = false;
    }
  }

  /**
   * Rétablit l'action suivante
   * @returns {Promise<boolean>} True si l'action a été rétablie avec succès
   */
  async redo() {
    if (!this.canRedo()) {
      console.warn('[HistoryManager] Impossible de rétablir, aucune action disponible');
      return false;
    }

    this.isRedoing = true;

    try {
      const action = this.history[this.currentIndex + 1];
      console.log(`[HistoryManager] Rétablissement de: ${action.description}`);

      await action.redo(action.data);
      action.executed = true;
      this.currentIndex++;

      this.notifyListeners();
      return true;

    } catch (error) {
      console.error('[HistoryManager] Erreur lors du rétablissement:', error);
      return false;
    } finally {
      this.isRedoing = false;
    }
  }

  /**
   * Vérifie s'il est possible d'annuler
   * @returns {boolean}
   */
  canUndo() {
    return this.currentIndex >= 0 && !this.isUndoing && !this.isRedoing;
  }

  /**
   * Vérifie s'il est possible de rétablir
   * @returns {boolean}
   */
  canRedo() {
    return this.currentIndex < this.history.length - 1 && !this.isUndoing && !this.isRedoing;
  }

  /**
   * Obtient l'action qui peut être annulée
   * @returns {Object|null}
   */
  getUndoAction() {
    return this.canUndo() ? this.history[this.currentIndex] : null;
  }

  /**
   * Obtient l'action qui peut être rétablie
   * @returns {Object|null}
   */
  getRedoAction() {
    return this.canRedo() ? this.history[this.currentIndex + 1] : null;
  }

  /**
   * Efface tout l'historique
   */
  clear() {
    this.history = [];
    this.currentIndex = -1;
    this.notifyListeners();
    console.log('[HistoryManager] Historique effacé');
  }

  /**
   * Obtient l'état actuel de l'historique
   * @returns {Object}
   */
  getState() {
    return {
      totalActions: this.history.length,
      currentIndex: this.currentIndex,
      canUndo: this.canUndo(),
      canRedo: this.canRedo(),
      undoAction: this.getUndoAction(),
      redoAction: this.getRedoAction(),
      isProcessing: this.isUndoing || this.isRedoing
    };
  }

  /**
   * Obtient l'historique complet
   * @returns {Array}
   */
  getHistory() {
    return this.history.map(action => ({
      id: action.id,
      type: action.type,
      description: action.description,
      timestamp: action.timestamp,
      executed: action.executed
    }));
  }

  /**
   * Ajoute un listener pour les changements d'état
   * @param {Function} listener - Fonction appelée lors des changements
   */
  addListener(listener) {
    this.listeners.push(listener);
  }

  /**
   * Supprime un listener
   * @param {Function} listener - Fonction à supprimer
   */
  removeListener(listener) {

    const index = this.listeners.indexOf(listener);
    if (index > -1) {
      this.listeners.splice(index, 1);
    }
  }

  /**
   * Notifie tous les listeners des changements
   * @private
   */
  notifyListeners() {
    const state = this.getState();
    this.listeners.forEach(listener => {
      try {
        listener(state);
      } catch (error) {
        console.error('[HistoryManager] Erreur dans un listener:', error);
      }
    });
  }

  /**
   * Valide qu'une action est bien formée
   * @private
   * @param {Object} action
   * @returns {boolean}
   */
  validateAction(action) {
    return action &&
           typeof action.type === 'string' &&
           typeof action.description === 'string' &&
           typeof action.undo === 'function' &&
           typeof action.redo === 'function' &&
           action.data !== undefined;
  }

  /**
   * Génère un ID unique pour une action
   * @private
   * @returns {string}
   */
  generateActionId() {
    return `action_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}

/**
 * Factory d'actions communes pour l'application collaborative
 */
export class ActionFactory {
  constructor(appInstance) {
    this.app = appInstance;
  }

  /**
   * Crée une action de modification de statut d'ingrédient
   * @param {Object} ingredient - Ingrédient concerné
   * @param {boolean} newStatus - Nouveau statut
   * @returns {Object} Action
   */
  createToggleStatusAction(ingredient, newStatus) {
    const oldStatus = ingredient.trackingData?.status?.ok || false;

    return {
      type: 'toggle_status',
      description: `${newStatus ? 'Marquer' : 'Démarquer'} "${ingredient.ingredientName}" comme ${newStatus ? 'complet' : 'incomplet'}`,
      data: {
        ingredientId: ingredient.$id,
        ingredientName: ingredient.ingredientName,
        oldStatus,
        newStatus
      },
      undo: async (data) => {
        await this.app.updateIngredientStatus(data.ingredientId, data.oldStatus);
      },
      redo: async (data) => {
        await this.app.updateIngredientStatus(data.ingredientId, data.newStatus);
      }
    };
  }

  /**
   * Crée une action d'ajout d'achat
   * @param {Object} ingredient - Ingrédient concerné
   * @param {Object} purchaseData - Données de l'achat
   * @returns {Object} Action
   */
  createAddPurchaseAction(ingredient, purchaseData) {
    return {
      type: 'add_purchase',
      description: `Ajouter achat "${purchaseData.value} ${purchaseData.unit}" pour "${ingredient.ingredientName}"`,
      data: {
        ingredientId: ingredient.$id,
        ingredientName: ingredient.ingredientName,
        purchaseData
      },
      undo: async (data) => {
        await this.app.removePurchase(data.ingredientId, data.purchaseData.id);
      },
      redo: async (data) => {
        await this.app.addPurchase(data.ingredientId, data.purchaseData);
      }
    };
  }

  /**
   * Crée une action de modification de stock
   * @param {Object} ingredient - Ingrédient concerné
   * @param {Object} oldStock - Ancien stock
   * @param {Object} newStock - Nouveau stock
   * @returns {Object} Action
   */
  createUpdateStockAction(ingredient, oldStock, newStock) {
    return {
      type: 'update_stock',
      description: `Modifier stock de "${ingredient.ingredientName}"`,
      data: {
        ingredientId: ingredient.$id,
        ingredientName: ingredient.ingredientName,
        oldStock: JSON.parse(JSON.stringify(oldStock)),
        newStock: JSON.parse(JSON.stringify(newStock))
      },
      undo: async (data) => {
        await this.app.updateStock(data.ingredientId, data.oldStock);
      },
      redo: async (data) => {
        await this.app.updateStock(data.ingredientId, data.newStock);
      }
    };
  }

  /**
   * Crée une action de fusion d'ingrédients
   * @param {Array} ingredients - Ingrédients à fusionner
   * @param {Object} mergedIngredient - Ingrédient fusionné résultant
   * @returns {Object} Action
   */
  createMergeIngredientsAction(ingredients, mergedIngredient) {
    return {
      type: 'merge_ingredients',
      description: `Fusionner ${ingredients.length} ingrédients en "${mergedIngredient.ingredientName}"`,
      data: {
        originalIngredients: ingredients.map(ing => JSON.parse(JSON.stringify(ing))),
        mergedIngredient: JSON.parse(JSON.stringify(mergedIngredient))
      },
      undo: async (data) => {
        await this.app.unmergeIngredients(data.mergedIngredient.id, data.originalIngredients);
      },
      redo: async (data) => {
        await this.app.mergeIngredients(data.originalIngredients, data.mergedIngredient);
      }
    };
  }

  /**
   * Crée une action de suppression d'achat
   * @param {Object} ingredient - Ingrédient concerné
   * @param {Object} purchaseData - Données de l'achat supprimé
   * @param {number} purchaseIndex - Index de l'achat dans la liste
   * @returns {Object} Action
   */
  createRemovePurchaseAction(ingredient, purchaseData, purchaseIndex) {
    return {
      type: 'remove_purchase',
      description: `Supprimer achat "${purchaseData.value} ${purchaseData.unit}" de "${ingredient.ingredientName}"`,
      data: {
        ingredientId: ingredient.$id,
        ingredientName: ingredient.ingredientName,
        purchaseData: JSON.parse(JSON.stringify(purchaseData)),
        purchaseIndex
      },
      undo: async (data) => {
        await this.app.addPurchaseAtIndex(data.ingredientId, data.purchaseData, data.purchaseIndex);
      },
      redo: async (data) => {
        await this.app.removePurchase(data.ingredientId, data.purchaseData.id);
      }
    };
  }

  /**
   * Crée une action composite (plusieurs actions groupées)
   * @param {Array} actions - Liste des actions à grouper
   * @param {string} description - Description de l'action composite
   * @returns {Object} Action
   */
  createCompositeAction(actions, description) {
    return {
      type: 'composite',
      description,
      data: { actions },
      undo: async (data) => {
        // Annuler les actions dans l'ordre inverse
        for (let i = data.actions.length - 1; i >= 0; i--) {
          await data.actions[i].undo(data.actions[i].data);
        }
      },
      redo: async (data) => {
        // Rétablir les actions dans l'ordre normal
        for (const action of data.actions) {
          await action.redo(action.data);
        }
      }
    };
  }
}

/**
 * Composant Vue pour l'interface de gestion de l'historique
 */
export const historyManagerTemplate = `
  <div class="history-manager">
    <!-- Boutons undo/redo principaux -->
    <div class="history-controls d-flex align-items-center gap-2">
      <button 
        class="btn btn-sm btn-outline-secondary"
        @click="undo"
        :disabled="!historyState.canUndo || historyState.isProcessing"
        :title="historyState.undoAction ? 'Annuler: ' + historyState.undoAction.description : 'Rien à annuler'"
      >
        <span v-if="historyState.isProcessing" class="spinner-border spinner-border-sm me-1"></span>
        ↶ Annuler
      </button>
      
      <button 
        class="btn btn-sm btn-outline-secondary"
        @click="redo"
        :disabled="!historyState.canRedo || historyState.isProcessing"
        :title="historyState.redoAction ? 'Rétablir: ' + historyState.redoAction.description : 'Rien à rétablir'"
      >
        <span v-if="historyState.isProcessing" class="spinner-border spinner-border-sm me-1"></span>
        ↷ Rétablir
      </button>
      
      <div class="history-info text-muted small ms-2">
        {{ historyState.totalActions > 0 ? (historyState.currentIndex + 1) + '/' + historyState.totalActions : '0' }} actions
      </div>
      
      <!-- Bouton dropdown pour l'historique détaillé -->
      <div class="dropdown ms-2" v-if="historyState.totalActions > 0">
        <button 
          class="btn btn-sm btn-outline-info dropdown-toggle" 
          type="button" 
          data-bs-toggle="dropdown"
          title="Voir l'historique détaillé"
        >
          📋
        </button>
        <div class="dropdown-menu dropdown-menu-end history-dropdown">
          <div class="dropdown-header">
            <strong>Historique des actions</strong>
            <button class="btn btn-sm btn-outline-danger float-end" @click="clearHistory">
              🗑️ Effacer
            </button>
          </div>
          <div class="history-list">
            <div 
              v-for="(action, index) in history" 
              :key="action.id"
              class="dropdown-item history-item"
              :class="{
                'active': index <= historyState.currentIndex,
                'future': index > historyState.currentIndex
              }"
            >
              <div class="d-flex justify-content-between align-items-center">
                <div class="history-description">
                  <span class="badge bg-secondary me-2">{{ action.type }}</span>
                  {{ action.description }}
                </div>
                <small class="text-muted">{{ formatTime(action.timestamp) }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

export function createHistoryManagerComponent(historyManager) {
  return {
    name: 'HistoryManager',
    template: historyManagerTemplate,
    data() {
      return {
        historyManager,
        historyState: historyManager.getState(),
        history: historyManager.getHistory()
      };
    },
    mounted() {
      // Écouter les changements d'état
      this.historyManager.addListener((state) => {
        this.historyState = state;
        this.history = this.historyManager.getHistory();
      });
    },
    beforeUnmount() {
      // Nettoyer les listeners
      this.historyManager.removeListener(this.onHistoryStateChange);
    },
    methods: {
      async undo() {
        await this.historyManager.undo();
      },

      async redo() {
        await this.historyManager.redo();
      },

      clearHistory() {
        if (confirm('Êtes-vous sûr de vouloir effacer tout l\'historique des actions ?')) {
          this.historyManager.clear();
        }
      },

      formatTime(timestamp) {
        return new Date(timestamp).toLocaleTimeString('fr-FR', {
          hour: '2-digit',
          minute: '2-digit'
        });
      }
    }
  };
}

// Export d'une instance singleton si nécessaire
let globalHistoryManager = null;

export function getGlobalHistoryManager(appInstance = null) {
  if (!globalHistoryManager && appInstance) {
    globalHistoryManager = new HistoryManager();
  }
  return globalHistoryManager;
}