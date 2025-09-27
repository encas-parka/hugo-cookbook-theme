/**
 * RealtimeConnectionService.js
 * Service de monitoring de la connexion temps réel aux collections Appwrite
 * Utilisé par l'application collaborative d'ingrédients
 */

export class RealtimeConnectionService {
  constructor() {
    this.connectionStatus = {
      isConnected: true,
      lastUpdate: Date.now(),
      subscription: null,
      retryCount: 0,
      maxRetries: 3,
      collections: ['ingredients', 'purchases']
    };
    
    this.statusElement = null;
    this.toastElement = null;
  }

  /**
   * Initialise le monitoring de la connexion temps réel
   */
  initialize(listId) {
    this.listId = listId;
    this.createUI();
    this.startMonitoring();
  }

  /**
   * Crée les éléments UI pour le statut de connexion
   */
  createUI() {
    // Indicateur de connexion en bas à droite
    const indicator = document.createElement('div');
    indicator.id = 'realtime-connection-indicator';
    indicator.className = 'realtime-connection-indicator connected';
    indicator.innerHTML = '<i class="fas fa-broadcast-tower"></i> Connecté';
    document.body.appendChild(indicator);
    this.statusElement = indicator;

    // Toast de notification
    const toast = document.createElement('div');
    toast.id = 'realtime-connection-toast';
    toast.className = 'realtime-connection-toast';
    toast.innerHTML = `
      <div class="toast-content">
        <i class="fas fa-exclamation-triangle"></i>
        <span>La synchronisation temps réel a été perdue. Les changements ne seront pas mis à jour en temps réel.</span>
      </div>
      <div class="toast-actions">
        <button onclick="RealtimeConnectionService.getInstance().attemptReconnection()" class="btn btn-sm btn-primary">
          <i class="fas fa-sync-alt"></i> Rétablir
        </button>
        <button onclick="RealtimeConnectionService.getInstance().closeToast()" class="btn btn-sm btn-secondary">
          <i class="fas fa-times"></i>
        </button>
      </div>
    `;
    document.body.appendChild(toast);
    this.toastElement = toast;
  }

  /**
   * Démarre le monitoring de la connexion temps réel
   */
  startMonitoring() {
    // S'abonner aux collections pour surveiller la connexion
    this.subscribeToCollections();
    
    // Vérifier périodiquement le statut
    this.checkInterval = setInterval(() => {
      this.checkConnectionHealth();
    }, 30000); // Vérification toutes les 30 secondes

    // Initialiser le statut
    this.updateUI('connected');
  }

  /**
   * S'abonne aux collections pour les mises à jour temps réel
   */
  subscribeToCollections() {
    if (!window.AppwriteClient) {
      console.warn('[RealtimeConnection] AppwriteClient non disponible');
      return;
    }

    try {
      // S'abonner aux collections utilisées par l'application
      this.connectionStatus.subscription = window.AppwriteClient.subscribeToCollections(
        this.connectionStatus.collections,
        (payload) => {
          this.handleRealtimeUpdate(payload);
        }
      );

      console.log('[RealtimeConnection] Abonnement aux collections réussi');
    } catch (error) {
      console.error('[RealtimeConnection] Erreur lors de l\'abonnement:', error);
      this.updateUI('disconnected');
    }
  }

  /**
   * Gère les mises à jour temps réel
   */
  handleRealtimeUpdate(payload) {
    this.connectionStatus.lastUpdate = Date.now();
    
    // Si on était déconnecté, se reconnecter
    if (!this.connectionStatus.isConnected) {
      this.connectionStatus.isConnected = true;
      this.connectionStatus.retryCount = 0;
      this.updateUI('connected');
      console.log('[RealtimeConnection] Connexion temps réel rétablie');
    }
  }

  /**
   * Vérifie la santé de la connexion temps réel
   */
  checkConnectionHealth() {
    const now = Date.now();
    const timeSinceLastUpdate = now - this.connectionStatus.lastUpdate;
    
    // Si pas de mise à jour depuis plus de 60 secondes, considérer comme déconnecté
    if (timeSinceLastUpdate > 60000 && this.connectionStatus.isConnected) {
      this.connectionStatus.isConnected = false;
      this.updateUI('disconnected');
      console.warn('[RealtimeConnection] Pas de mise à jour depuis 60 secondes');
    }
  }

  /**
   * Met à jour l'interface utilisateur
   */
  updateUI(status) {
    if (!this.statusElement) return;

    switch (status) {
      case 'connected':
        this.statusElement.className = 'realtime-connection-indicator connected';
        this.statusElement.innerHTML = '<i class="fas fa-broadcast-tower"></i> Connecté';
        this.statusElement.onclick = null;
        
        // Masquer le toast
        if (this.toastElement) {
          this.toastElement.classList.remove('show');
        }
        break;

      case 'disconnected':
        this.statusElement.className = 'realtime-connection-indicator disconnected';
        this.statusElement.innerHTML = '<i class="fas fa-broadcast-tower"></i> Déconnecté';
        this.statusElement.onclick = () => this.attemptReconnection();
        
        // Afficher le toast
        if (this.toastElement) {
          this.toastElement.classList.add('show');
        }
        break;

      case 'warning':
        this.statusElement.className = 'realtime-connection-indicator warning';
        this.statusElement.innerHTML = '<i class="fas fa-exclamation-triangle"></i> <i class="fas fa-sync-alt"></i>';
        this.statusElement.onclick = () => this.attemptReconnection();
        break;
    }
  }

  /**
   * Tente de rétablir la connexion temps réel
   */
  async attemptReconnection() {
    if (this.statusElement) {
      this.statusElement.innerHTML = '<i class="fas fa-sync-alt fa-spin"></i> Reconnexion...';
    }

    try {
      // Se désabonner et se réabonner
      if (this.connectionStatus.subscription) {
        this.connectionStatus.subscription();
      }
      
      this.connectionStatus.retryCount++;
      
      // Attendre un peu avant de se réabonner
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      this.subscribeToCollections();
      
      // Vérifier si la connexion est rétablie
      setTimeout(() => {
        if (this.connectionStatus.isConnected) {
          console.log('[RealtimeConnection] Reconnexion réussie');
        } else if (this.connectionStatus.retryCount >= this.connectionStatus.maxRetries) {
          this.updateUI('warning');
          console.warn('[RealtimeConnection] Échec de la reconnexion après plusieurs tentatives');
        }
      }, 2000);
      
    } catch (error) {
      console.error('[RealtimeConnection] Erreur lors de la reconnexion:', error);
      this.updateUI('warning');
    }
  }

  /**
   * Ferme le toast de notification
   */
  closeToast() {
    if (this.toastElement) {
      this.toastElement.classList.remove('show');
      this.updateUI('warning');
    }
  }

  /**
   * Arrête le monitoring
   */
  stop() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
    }
    
    if (this.connectionStatus.subscription) {
      this.connectionStatus.subscription();
    }
    
    if (this.statusElement) {
      this.statusElement.remove();
    }
    
    if (this.toastElement) {
      this.toastElement.remove();
    }
  }

  /**
   * Obtient le statut actuel de la connexion
   */
  getStatus() {
    return {
      isConnected: this.connectionStatus.isConnected,
      lastUpdate: this.connectionStatus.lastUpdate,
      retryCount: this.connectionStatus.retryCount
    };
  }
}

// Instance singleton
let instance = null;

RealtimeConnectionService.getInstance = function() {
  if (!instance) {
    instance = new RealtimeConnectionService();
  }
  return instance;
};

// Export pour compatibilité
export default RealtimeConnectionService.getInstance();