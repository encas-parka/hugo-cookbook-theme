/**
 * ColorManager - Service de gestion centralisée des couleurs pour les entités
 * 
 * Ce service gère l'assignation de couleurs pastel pour différents types d'entités
 * (volontaires, magasins, etc.) avec persistance localStorage et réutilisation des couleurs.
 * 
 * @author Collaborative Ingredients App
 * @version 1.0.0
 */
export class ColorManager {
  /**
   * Crée une instance de ColorManager
   * @param {string} listId - Identifiant unique pour isoler les données par liste
   */
  constructor(listId) {
    if (!listId) {
      throw new Error('ColorManager: listId est requis pour l\'initialisation');
    }
    
    this.listId = listId;
    this.storageKey = `collab_colors_${listId}`;
    
    // Palettes de couleurs prédéfinies
    this.colorPalettes = {
      volunteers: [
        { bg: '#d1ecf1', color: '#0c5460' }, // Bleu pastel
        { bg: '#d4edda', color: '#155724' }, // Vert pastel
        { bg: '#fff3cd', color: '#856404' }, // Jaune pastel
        { bg: '#f8d7da', color: '#721c24' }, // Rouge pastel
        { bg: '#e2e3e5', color: '#383d41' }, // Gris pastel
        { bg: '#d1ecf1', color: '#0c5460' }, // Cyan pastel
        { bg: '#ffe6cc', color: '#8b4513' }, // Pêche pastel
        { bg: '#e7d8f8', color: '#4a148c' }, // Lavande pastel
        { bg: '#ffcce6', color: '#d63384' }, // Rose pastel
        { bg: '#d4e4f7', color: '#004085' }, // Bleu clair pastel
        { bg: '#e8f5e8', color: '#2e5d2e' }, // Vert menthe pastel
        { bg: '#fff0f5', color: '#721c24' }, // Rose pâle pastel
        { bg: '#f0e68c', color: '#6b5d1a' }, // Beige pastel
        { bg: '#e6f3ff', color: '#0066cc' }, // Bleu ciel pastel
        { bg: '#ffe4e1', color: '#8b4513' }, // Corail pastel
        { bg: '#f5f5dc', color: '#495057' }, // Lin pastel
        { bg: '#e0f2f1', color: '#00695c' }, // Turquoise pastel
        { bg: '#fce4ec', color: '#880e4f' }, // Rose bonbon pastel
        { bg: '#e8eaf6', color: '#283593' }, // Indigo pastel
        { bg: '#fff8e1', color: '#ff6f00' }  // Amber pastel
      ],
      stores: [
        { bg: '#ffe6cc', color: '#8b4513' }, // Pêche pastel
        { bg: '#d1ecf1', color: '#0c5460' }, // Bleu pastel
        { bg: '#f8d7da', color: '#721c24' }, // Rouge pastel
        { bg: '#d4edda', color: '#155724' }, // Vert pastel
        { bg: '#fff3cd', color: '#856404' }, // Jaune pastel
        { bg: '#e7d8f8', color: '#4a148c' }, // Lavande pastel
        { bg: '#e2e3e5', color: '#383d41' }, // Gris pastel
        { bg: '#ffcce6', color: '#d63384' }, // Rose pastel
        { bg: '#d4e4f7', color: '#004085' }, // Bleu clair pastel
        { bg: '#e8f5e8', color: '#2e5d2e' }, // Vert menthe pastel
        { bg: '#fff0f5', color: '#721c24' }, // Rose pâle pastel
        { bg: '#f0e68c', color: '#6b5d1a' }, // Beige pastel
        { bg: '#e6f3ff', color: '#0066cc' }, // Bleu ciel pastel
        { bg: '#ffe4e1', color: '#8b4513' }, // Corail pastel
        { bg: '#f5f5dc', color: '#495057' }, // Lin pastel
        { bg: '#e0f2f1', color: '#00695c' }, // Turquoise pastel
        { bg: '#fce4ec', color: '#880e4f' }, // Rose bonbon pastel
        { bg: '#e8eaf6', color: '#283593' }, // Indigo pastel
        { bg: '#fff8e1', color: '#ff6f00' }, // Amber pastel
        { bg: '#f4cccc', color: '#5d2a2a' }  // Rouge brique pastel
      ]
    };
    
    // Cache des assignations de couleurs { entityType: { entityName: colorIndex } }
    this.colorAssignments = {};
    
    // Couleur par défaut pour les valeurs vides
    this.defaultColor = { bg: '#e2e3e5', color: '#383d41' };
    
    // Charger les assignations existantes depuis localStorage
    this.loadColorAssignments();
  }

  /**
   * Récupère une couleur pour une entité donnée
   * @param {string} entityType - Type d'entité ('volunteers', 'stores', etc.)
   * @param {string} entityName - Nom de l'entité
   * @returns {Object} Objet couleur { bg: string, color: string }
   */
  getColorForEntity(entityType, entityName) {
    // Validation des paramètres
    if (!entityType || !entityName) {
      return this.defaultColor;
    }
    
    // Vérifier que le type d'entité existe
    if (!this.colorPalettes[entityType]) {
      console.warn(`ColorManager: Type d'entité "${entityType}" non reconnu`);
      return this.defaultColor;
    }
    
    // Nom vide => couleur par défaut
    if (!entityName.trim()) {
      return this.defaultColor;
    }
    
    // Initialiser le cache pour ce type d'entité si nécessaire
    if (!this.colorAssignments[entityType]) {
      this.colorAssignments[entityType] = {};
    }
    
    // Si déjà assigné, retourner la couleur existante
    if (this.colorAssignments[entityType][entityName] !== undefined) {
      const colorIndex = this.colorAssignments[entityType][entityName];
      return this.colorPalettes[entityType][colorIndex];
    }
    
    // Attribuer une nouvelle couleur
    const nextIndex = Object.keys(this.colorAssignments[entityType]).length % this.colorPalettes[entityType].length;
    this.colorAssignments[entityType][entityName] = nextIndex;
    
    // Sauvegarder immédiatement pour la persistance
    this.saveColorAssignments();
    
    return this.colorPalettes[entityType][nextIndex];
  }

  /**
   * Récupère une couleur pour un volontaire (méthode de commodité)
   * @param {string} volunteerName - Nom du volontaire
   * @returns {Object} Objet couleur { bg: string, color: string }
   */
  getColorForVolunteer(volunteerName) {
    return this.getColorForEntity('volunteers', volunteerName);
  }

  /**
   * Récupère une couleur pour un magasin (méthode de commodité)
   * @param {string} storeName - Nom du magasin
   * @returns {Object} Objet couleur { bg: string, color: string }
   */
  getColorForStore(storeName) {
    return this.getColorForEntity('stores', storeName);
  }

  /**
   * Ajoute un nouveau type d'entité avec sa palette de couleurs
   * @param {string} entityType - Type d'entité
   * @param {Array} palette - Tableau d'objets couleur { bg: string, color: string }
   */
  addEntityType(entityType, palette) {
    if (!entityType || !Array.isArray(palette) || palette.length === 0) {
      throw new Error('ColorManager: entityType et palette valides sont requis');
    }
    
    this.colorPalettes[entityType] = palette;
    
    // Initialiser le cache pour ce nouveau type
    if (!this.colorAssignments[entityType]) {
      this.colorAssignments[entityType] = {};
    }
  }

  /**
   * Récupère toutes les assignations pour un type d'entité
   * @param {string} entityType - Type d'entité
   * @returns {Object} Mapping { entityName: colorIndex }
   */
  getAssignmentsForType(entityType) {
    return this.colorAssignments[entityType] || {};
  }

  /**
   * Réinitialise toutes les couleurs pour un type d'entité
   * @param {string} entityType - Type d'entité à réinitialiser
   */
  resetAssignmentsForType(entityType) {
    if (this.colorAssignments[entityType]) {
      this.colorAssignments[entityType] = {};
      this.saveColorAssignments();
    }
  }

  /**
   * Réinitialise toutes les couleurs pour tous les types d'entités
   */
  resetAllAssignments() {
    this.colorAssignments = {};
    this.saveColorAssignments();
  }

  /**
   * Sauvegarde les assignations dans localStorage
   * Gère gracieusement les erreurs (quota dépassé, localStorage indisponible, etc.)
   */
  saveColorAssignments() {
    try {
      const dataToSave = {
        colorAssignments: this.colorAssignments,
        version: '1.0.0'
      };
      
      localStorage.setItem(this.storageKey, JSON.stringify(dataToSave));
    } catch (error) {
      console.warn('ColorManager: Impossible de sauvegarder les couleurs:', error);
      
      // Si c'est une erreur de quota, on tente de sauvegarder une version réduite
      if (error.name === 'QuotaExceededError') {
        try {
          const reducedData = {
            colorAssignments: this.colorAssignments,
            version: '1.0.0'
          };
          localStorage.setItem(this.storageKey, JSON.stringify(reducedData));
          console.warn('ColorManager: Sauvegardé avec données réduites en raison du quota');
        } catch (quotaError) {
          console.error('ColorManager: Impossible de sauvegarder même avec données réduites:', quotaError);
        }
      }
    }
  }

  /**
   * Charge les assignations depuis localStorage
   * Gère gracieusement les erreurs (données corrompues, format incompatible, etc.)
   */
  loadColorAssignments() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (!saved) {
        return;
      }
      
      const parsedData = JSON.parse(saved);
      
      // Vérification de la version et migration si nécessaire
      if (parsedData.version) {
        // Format >= 1.0.0
        this.colorAssignments = parsedData.colorAssignments || {};
      } else {
        // Format legacy (migration automatique)
        this.colorAssignments = {
          volunteers: parsedData.volunteerColors || {},
          stores: parsedData.storeColors || {}
        };
        // Sauvegarder dans le nouveau format
        this.saveColorAssignments();
      }
      
    } catch (error) {
      console.warn('ColorManager: Impossible de charger les couleurs:', error);
      // Initialiser avec des données vides en cas d'erreur
      this.colorAssignments = {};
    }
  }

  /**
   * Exporte les données de couleurs pour le débogage
   * @returns {Object} État complet du ColorManager
   */
  exportState() {
    return {
      listId: this.listId,
      storageKey: this.storageKey,
      colorAssignments: { ...this.colorAssignments },
      availableEntityTypes: Object.keys(this.colorPalettes),
      paletteSizes: Object.fromEntries(
        Object.entries(this.colorPalettes).map(([type, palette]) => [type, palette.length])
      )
    };
  }

  /**
   * Vérifie si localStorage est disponible
   * @returns {boolean} True si localStorage est disponible
   */
  static isLocalStorageAvailable() {
    try {
      const test = '__test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (error) {
      return false;
    }
  }
}

/**
 * Factory function pour créer une instance de ColorManager
 * @param {string} listId - Identifiant de liste
 * @returns {ColorManager} Instance du ColorManager
 */
export function createColorManager(listId) {
  return new ColorManager(listId);
}

export default ColorManager;