/**
 * AuthManager.js
 * Service de gestion d'authentification minimaliste et testable
 * Logique métier pure - aucune dépendance UI
 *
 * @description
 * Gère l'état d'authentification et les patterns de garde
 * Séparé de la logique UI qui reste dans les composants Vue
 *
 */

export class AuthManager {
  /**
   * @param {Function} isAuthenticatedFn - Fonction asynchrone de vérification d'auth
   */
  constructor(isAuthenticatedFn) {
    if (typeof isAuthenticatedFn !== 'function') {
      throw new Error('AuthManager nécessite une fonction de vérification d\'authentification');
    }

    this.isAuthenticatedFn = isAuthenticatedFn;
    this.state = {
      isAuthenticated: false,
      isChecking: false,
      lastCheck: null,
      error: null,
      user: null
    };
  }

  /**
   * Vérifie l'état d'authentification actuel
   * @returns {Promise<boolean>} True si authentifié
   */
  async check() {
    this.state.isChecking = true;
    this.state.error = null;

    try {
      const result = await this.isAuthenticatedFn();

      // Gérer différents types de retours (boolean ou objet)
      if (typeof result === 'boolean') {
        this.state.isAuthenticated = result;
        this.state.user = null;
      } else if (result && typeof result === 'object') {
        this.state.isAuthenticated = result.authenticated || false;
        this.state.user = result.user || null;
      } else {
        this.state.isAuthenticated = Boolean(result);
        this.state.user = null;
      }

      this.state.lastCheck = Date.now();
      console.log(`[AuthManager] Authentification vérifiée: ${this.state.isAuthenticated}`);

      return this.state.isAuthenticated;

    } catch (error) {
      console.error('[AuthManager] Erreur lors de la vérification:', error);
      this.state.error = error;
      this.state.isAuthenticated = false;
      this.state.user = null;
      throw error;
    } finally {
      this.state.isChecking = false;
    }
  }

  /**
   * Pattern de garde : exécute une action seulement si authentifié
   * @param {Function} action - Fonction à exécuter si authentifié
   * @returns {boolean} True si l'action a été exécutée
   */
  requireAuth(action) {
    if (this.state.isAuthenticated) {
      if (typeof action === 'function') {
        action();
      }
      return true;
    }
    return false;
  }

  /**
   * Retourne une copie de l'état courant (immuable)
   * @returns {Object} État d'authentification
   */
  getState() {
    return {
      ...this.state,
      // Convertir les timestamps en dates lisibles
      lastCheckDate: this.state.lastCheck ? new Date(this.state.lastCheck) : null,
      timeSinceLastCheck: this.state.lastCheck ? Date.now() - this.state.lastCheck : null
    };
  }

  /**
   * Vérifie si la session est expirée (basé sur un délai)
   * @param {number} maxAgeMs - Durée max en millisecondes (défaut: 30 minutes)
   * @returns {boolean}
   */
  isSessionExpired(maxAgeMs = 30 * 60 * 1000) {
    if (!this.state.lastCheck) return true;
    return (Date.now() - this.state.lastCheck) > maxAgeMs;
  }

  /**
   * Force la déconnexion locale (nettoie l'état)
   */
  logout() {
    this.state.isAuthenticated = false;
    this.state.user = null;
    this.state.error = null;
    this.state.lastCheck = null;
    console.log('[AuthManager] Déconnexion locale effectuée');
  }

  /**
   * Utilitaire pour le debugging
   * @returns {Object} Informations de debug
   */
  getDebugInfo() {
    return {
      state: this.getState(),
      hasFunction: typeof this.isAuthenticatedFn === 'function',
      functionName: this.isAuthenticatedFn.name || 'anonymous'
    };
  }
}
