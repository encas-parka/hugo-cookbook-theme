/**
 * TableColumnsConfig.js
 * Configuration des colonnes pour TanStack Table - Gestion des ingrédients
 * 
 * Ce service encapsule toute la logique de définition des colonnes pour TanStack Table,
 * en séparant la configuration de la logique métier de l'application principale.
 */

export class TableColumnsConfig {
  /**
   * Constructeur du service de configuration des colonnes
   * @param {Object} context - Contexte contenant les dépendances nécessaires
   * @param {Function} context.h - Fonction Vue.h pour le rendu des VNodes
   * @param {Object} context.handlers - Callbacks vers l'application parente
   * @param {Function} context.handlers.openUnifiedModal - Ouvre le modal d'édition
   * @param {Function} context.handlers.handleTableGroupVolunteer - Action groupée sur les bénévoles
   * @param {Object} context.formatters - Fonctions de formatage
   * @param {Function} context.formatters.formatTypeShort - Formate le type d'ingrédient
   * @param {Object} context.colorManager - Gestionnaire de couleurs
   * @param {Function} context.colorManager.getVolunteerColor - Retourne la couleur pour un bénévole
   * @param {Function} context.colorManager.getStoreColor - Retourne la couleur pour un magasin
   */
  constructor(context) {
    this.h = context.h;
    this.handlers = context.handlers || {};
    this.formatters = context.formatters || {};
    this.colorManager = context.colorManager || {};
    
    // Validation des dépendances critiques
    if (!this.h) {
      throw new Error('Vue.h function is required in context');
    }
    if (!this.handlers.openUnifiedModal) {
      console.warn('openUnifiedModal handler not provided');
    }
    if (!this.colorManager.getVolunteerColor) {
      console.warn('getVolunteerColor function not provided');
    }
    if (!this.colorManager.getStoreColor) {
      console.warn('getStoreColor function not provided');
    }
  }

  /**
   * Retourne la configuration complète des colonnes pour TanStack Table
   * @returns {Array} Tableau de configuration des colonnes
   */
  getColumns() {
    return [
      this._getSelectionColumn(),
      this._getStatusColumn(),
      this._getIngredientNameColumn(),
      this._getTypeColumn(),
      this._getTotalNeedColumn(),
      this._getPurchasesColumn(),
      this._getBalanceColumn(),
      this._getStoresColumn(),
      this._getResponsibleColumn(),
      this._getActionsColumn()
    ];
  }

  /**
   * Colonne de sélection avec checkboxes
   * @private
   */
  _getSelectionColumn() {
    return {
      id: 'selection',
      header: ({ table }) => this.h('input', {
        type: 'checkbox',
        checked: table.getIsAllRowsSelected(),
        onChange: table.getToggleAllRowsSelectedHandler()
      }),
      cell: ({ row }) => this.h('input', {
        type: 'checkbox',
        checked: row.getIsSelected(),
        onChange: row.getToggleSelectedHandler()
      }),
      size: 50
    };
  }

  /**
   * Colonne de statut avec icônes colorées
   * @private
   */
  _getStatusColumn() {
    return {
      accessorKey: 'status',
      header: '',
      cell: ({ row }) => {
        const status = row.original.status;
        const statusIcons = {
          'sufficient': this.h('span', { class: 'text-success' }, [this.h('i', { class: 'fas fa-check-circle' })]),
          'missing': this.h('span', { class: 'text-danger' }, [this.h('i', { class: 'fas fa-times-circle' })]),
          'partial': this.h('span', { class: 'text-warning' }, [this.h('i', { class: 'fas fa-exclamation-triangle' })])
        };
        return statusIcons[status] || this.h('span', {}, '');
      },
      size: 50
    };
  }

  /**
   * Colonne du nom de l'ingrédient en gras
   * @private
   */
  _getIngredientNameColumn() {
    return {
      accessorKey: 'ingredientName',
      header: 'Ingrédient',
      cell: ({ row }) => this.h('strong', {}, row.original.ingredientName),
      enableGrouping: false
    };
  }

  /**
   * Colonne du type avec badge coloré
   * @private
   */
  _getTypeColumn() {
    return {
      accessorKey: 'ingType',
      header: 'Type',
      cell: ({ row }) => {
        const ingredient = row.original;
        const typeClass = `type-${ingredient.ingType}`;
        return this.h('span', { class: `badge badge-ingredient-type ${typeClass}` }, ingredient.typeDisplay);
      },
      enableSorting: true,
      enableGrouping: true
    };
  }

  /**
   * Colonne du besoin total
   * @private
   */
  _getTotalNeedColumn() {
    return {
      accessorKey: 'totalNeedDisplay',
      header: 'Besoin Total',
      cell: ({ row }) => row.original.totalNeedDisplay,
      enableGrouping: false
    };
  }

  /**
   * Colonne des achats avec cellule éditable
   * @private
   */
  _getPurchasesColumn() {
    return {
      accessorKey: 'purchasesDisplay',
      header: 'Acheté',
      cell: ({ row }) => {
        const ingredient = row.original;
        return this.h('div', {
          class: 'editable-cell-simple d-flex align-items-center justify-content-between w-100',
          onClick: () => this._safeHandlerCall('openUnifiedModal', ingredient, 'purchases')
        }, [
          // Contenu principal
          this.h('div', { class: 'flex-grow-1' }, [
            ingredient.purchasesDisplay && ingredient.purchasesDisplay.trim() !== ''
              ? this.h('span', { class: 'text-success fw-medium' }, ingredient.purchasesDisplay)
              : this.h('span', { class: 'text-muted' }, '—')
          ]),
          // Icône d'édition visible au survol
          this.h('div', { class: 'edit-icon-simple' }, [
            this.h('i', { class: 'fas fa-pencil-alt text-secondary' })
          ])
        ]);
      },
      enableGrouping: false
    };
  }

  /**
   * Colonne du manque avec classe CSS dynamique
   * @private
   */
  _getBalanceColumn() {
    return {
      accessorKey: 'balanceDisplay',
      header: 'Manque',
      cell: ({ row }) => this.h('span', {
        class: row.original.balanceClass
      }, row.original.balanceDisplay),
      enableGrouping: false
    };
  }

  /**
   * Colonne des magasins avec badges colorés et édition
   * @private
   */
  _getStoresColumn() {
    return {
      accessorKey: 'storesDisplay',
      header: 'Magasin',
      cell: ({ row }) => {
        const ingredient = row.original;
        return this.h('div', {
          class: 'editable-cell-simple d-flex align-items-center justify-content-between w-100 h-100',
          onClick: () => this._safeHandlerCall('openUnifiedModal', ingredient, 'stores')
        }, [
          // Contenu principal
          this.h('div', { class: 'flex-grow-1' }, [
            ...(ingredient.storesDisplay && ingredient.storesDisplay.length > 0
              ? ingredient.storesDisplay.split(', ').map(store => {
                  const color = this._safeColorCall('getStoreColor', store);
                  return this.h('div', {
                    class: 'badge',
                    style: `background-color: ${color.bg}; color: ${color.color};`
                  }, store);
                })
              : [this.h('span', { class: 'text-muted' }, '—')]
            )
          ]),
          // Icône d'édition visible au survol
          this.h('div', { class: 'edit-icon-simple' }, [
            this.h('i', { class: 'fas fa-pencil-alt text-secondary' })
          ])
        ]);
      },
      enableGrouping: true
    };
  }

  /**
   * Colonne des responsables avec badges colorés et édition
   * @private
   */
  _getResponsibleColumn() {
    return {
      accessorKey: 'responsibleDisplay',
      header: 'Qui',
      cell: ({ row }) => {
        const ingredient = row.original;
        return this.h('div', {
          class: 'editable-cell-simple d-flex align-items-center justify-content-between w-100',
          onClick: () => this._safeHandlerCall('openUnifiedModal', ingredient, 'volunteers')
        }, [
          // Contenu principal
          this.h('div', { class: 'flex-grow-1' }, [
            ...(ingredient.responsibleDisplay && ingredient.responsibleDisplay.length > 0
              ? ingredient.responsibleDisplay.split(', ').map(volunteer => {
                  const color = this._safeColorCall('getVolunteerColor', volunteer);
                  return this.h('div', {
                    class: 'badge',
                    style: `background-color: ${color.bg}; color: ${color.color};`
                  }, volunteer);
                })
              : [this.h('span', { class: 'text-muted' }, '—')]
            )
          ]),
          // Icône d'édition visible au survol
          this.h('div', { class: 'edit-icon-simple' }, [
            this.h('i', { class: 'fas fa-pencil-alt text-secondary' })
          ])
        ]);
      },
      enableSorting: true,
      enableGrouping: false
    };
  }

  /**
   * Colonne d'actions avec bouton d'édition
   * @private
   */
  _getActionsColumn() {
    return {
      id: 'actions',
      header: '',
      cell: ({ row }) => {
        const ingredient = row.original;
        return this.h('div', { class: 'd-flex gap-1 flex-wrap' }, [
          this.h('button', {
            class: 'btn btn-sm btn-outline-primary btn-icon me-1',
            onClick: () => this._safeHandlerCall('openUnifiedModal', ingredient, 'recipes'),
            title: 'Gérer l\'ingrédient'
          }, [this.h('i', { class: 'fas fa-edit' })])
        ]);
      },
      size: 50
    };
  }

  /**
   * Appel sécurisé vers un handler avec gestion d'erreur
   * @private
   * @param {string} handlerName - Nom du handler à appeler
   * @param {...any} args - Arguments à passer au handler
   */
  _safeHandlerCall(handlerName, ...args) {
    if (this.handlers[handlerName] && typeof this.handlers[handlerName] === 'function') {
      try {
        this.handlers[handlerName](...args);
      } catch (error) {
        console.error(`Error calling handler ${handlerName}:`, error);
      }
    } else {
      console.warn(`Handler ${handlerName} not available`);
    }
  }

  /**
   * Appel sécurisé vers une fonction de couleur avec gestion d'erreur
   * @private
   * @param {string} colorFunctionName - Nom de la fonction de couleur
   * @param {string} name - Nom à colorer
   * @returns {Object} Couleur avec propriétés bg et color
   */
  _safeColorCall(colorFunctionName, name) {
    if (this.colorManager[colorFunctionName] && typeof this.colorManager[colorFunctionName] === 'function') {
      try {
        return this.colorManager[colorFunctionName](name);
      } catch (error) {
        console.error(`Error calling color function ${colorFunctionName}:`, error);
        return { bg: '#6c757d', color: '#ffffff' }; // Couleur par défaut (gris)
      }
    } else {
      console.warn(`Color function ${colorFunctionName} not available`);
      return { bg: '#6c757d', color: '#ffffff' }; // Couleur par défaut (gris)
    }
  }
}