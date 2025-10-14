/**
 * AppwriteClient.ts
 * Service client Appwrite typé et moderne pour Svelte 5
 * Migration et amélioration du appwrite-client.js existant
 */

import type {
  AppwriteConfig,
  AppwriteClients,
  AuthState,
  AppwriteUser,
  AppwriteSession,
  AppwriteApiError,
  RealtimePayload
} from '../types/appwrite';
import type { MainGroup, IngredientRaw, Purchase } from '../types/ingredient';

/**
 * Service client Appwrite principal
 * Gère l'initialisation, l'authentification et les opérations de base
 */
export class AppwriteClient {
  private static instance: AppwriteClient;
  private config: AppwriteConfig;
  private clients: AppwriteClients | null = null;
  private initializationPromise: Promise<AppwriteClients> | null = null;
  private isInitialized = false;

  // Configuration centralisée
  private readonly APPWRITE_CONFIG: AppwriteConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    projectId: "689725820024e81781b7",
    databaseId: "689d15b10003a5a13636",
    functions: {
      cmsAuth: "68976500002eb5c6ee4f",
      accessRequest: "689cdea5001a4d74549d"
    },
    collections: {
      events: "ingredient_lists",
      ingredients: "ingredients",
      main: "main",
      purchases: "purchases",
      products: "products"
    }
  };

  private constructor() {
    this.config = this.APPWRITE_CONFIG;
  }

  /**
   * Obtient l'instance singleton du client
   */
  public static getInstance(): AppwriteClient {
    if (!AppwriteClient.instance) {
      AppwriteClient.instance = new AppwriteClient();
    }
    return AppwriteClient.instance;
  }

  /**
   * Attend que le SDK Appwrite soit chargé
   */
  private async waitForAppwrite(maxAttempts: number = 50, interval: number = 100): Promise<void> {
    return new Promise((resolve, reject) => {
      let attempts = 0;

      const checkAppwrite = () => {
        attempts++;
        if (window.Appwrite && window.Appwrite.Client && window.Appwrite.Account) {
          resolve();
        } else if (attempts >= maxAttempts) {
          reject(new Error("Le SDK Appwrite n'a pas pu être chargé."));
        } else {
          setTimeout(checkAppwrite, interval);
        }
      };

      checkAppwrite();
    });
  }

  /**
   * Initialise les clients Appwrite (une seule fois)
   */
  public async initialize(): Promise<AppwriteClients> {
    if (this.clients && this.isInitialized) {
      return this.clients;
    }

    if (this.initializationPromise) {
      return this.initializationPromise;
    }

    this.initializationPromise = this.performInitialization();
    return this.initializationPromise;
  }

  private async performInitialization(): Promise<AppwriteClients> {
    try {
      console.log("[AppwriteClient] Début de l'initialisation");
      await this.waitForAppwrite();

      const { Client, Account, Functions, Databases } = window.Appwrite;

      const client = new Client()
        .setEndpoint(this.config.endpoint)
        .setProject(this.config.projectId);

      const account = new Account(client);
      const functions = new Functions(client);
      const databases = new Databases(client);

      this.clients = { client, account, functions, databases };
      this.isInitialized = true;

      console.log("[AppwriteClient] Initialisation terminée avec succès");
      return this.clients;

    } catch (error) {
      console.error("[AppwriteClient] Erreur lors de l'initialisation:", error);
      this.clients = null;
      this.isInitialized = false;
      this.initializationPromise = null;
      throw this.createError("Erreur lors de l'initialisation d'Appwrite", 'appwrite', { originalError: error });
    }
  }

  /**
   * Crée une erreur structurée
   */
  private createError(message: string, type: AppwriteApiError['type'] = 'database', details: any = {}): AppwriteApiError {
    const error = new Error(message) as AppwriteApiError;
    error.type = type;
    error.details = details;
    error.timestamp = new Date().toISOString();
    return error;
  }

  /**
   * Gère les erreurs Appwrite de manière structurée
   */
  private handleAppwriteError(error: any, context: string = ''): AppwriteApiError {
    console.error(`[AppwriteClient] Erreur ${context}:`, error);

    let errorCode = error.code || 500;
    let errorMessage = error.message || 'Erreur inconnue';

    // Erreurs spécifiques à Appwrite
    if (errorMessage.includes('document_not_found')) {
      errorCode = 404;
      errorMessage = 'Document non trouvé';
    } else if (errorMessage.includes('permission_denied')) {
      errorCode = 401;
      errorMessage = 'Permission refusée';
    } else if (errorMessage.includes('rate_limit_exceeded')) {
      errorCode = 429;
      errorMessage = 'Limite de requêtes dépassée';
    } else if (errorMessage.includes('invalid_structure')) {
      errorCode = 400;
      errorMessage = 'Structure des données invalide';
    } else if (errorMessage.includes('duplicate')) {
      errorCode = 409;
      errorMessage = 'Entrée en double';
    }

    return this.createError(
      `Erreur ${context}: ${errorMessage}`,
      'appwrite',
      { originalError: error, code: errorCode }
    );
  }

  /**
   * Obtient les clients Appwrite initialisés
   */
  public async getClients(): Promise<AppwriteClients> {
    return await this.initialize();
  }

  /**
   * Obtient le client Account
   */
  public async getAccount() {
    const { account } = await this.getClients();
    return account;
  }

  /**
   * Obtient le client Functions
   */
  public async getFunctions() {
    const { functions } = await this.getClients();
    return functions;
  }

  /**
   * Obtient le client Databases
   */
  public async getDatabases() {
    const { databases } = await this.getClients();
    return databases;
  }

  /**
   * Obtient la configuration Appwrite
   */
  public getConfig(): AppwriteConfig {
    return { ...this.config };
  }

  /**
   * Vérifie si l'initialisation est complète
   */
  public isReady(): boolean {
    return this.isInitialized && !!this.clients;
  }

  // ========================
  // AUTHENTICATION METHODS
  // ========================

  /**
   * Vérifie si une session Appwrite active existe
   */
  public async isAuthenticated(): Promise<boolean> {
    try {
      const account = await this.getAccount();
      await account.get();
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Vérifie si l'utilisateur est connecté avec une session valide
   */
  public async isConnected(): Promise<boolean> {
    try {
      const account = await this.getAccount();
      const accountData = await account.get();

      if (!accountData || !accountData.$id) {
        return false;
      }

      const session = await account.getSession('current');
      if (!session || !session.$id) {
        return false;
      }

      // Vérifier que la session n'est pas expirée
      const now = new Date();
      const expireDate = new Date(session.expire);
      if (now >= expireDate) {
        return false;
      }

      return true;

    } catch (error) {
      console.error('[AppwriteClient] Erreur lors de la vérification de connexion:', error);
      return false;
    }
  }

  /**
   * Vérifie si l'email de l'utilisateur est vérifié
   */
  public async isEmailVerified(): Promise<boolean> {
    try {
      const account = await this.getAccount();
      const user = await account.get();
      return user.emailVerification || false;
    } catch (error) {
      return false;
    }
  }

  /**
   * Envoie un email de vérification
   */
  public async sendVerificationEmail(redirectURL?: string): Promise<void> {
    try {
      const account = await this.getAccount();
      const verificationURL = redirectURL || `${window.location.origin}/verify-email`;
      await account.createVerification(verificationURL);
    } catch (error) {
      throw this.handleAppwriteError(error, "envoi d'email de vérification");
    }
  }

  /**
   * Vérifie l'email avec un token
   */
  public async verifyEmail(userId: string, secret: string): Promise<void> {
    try {
      const account = await this.getAccount();
      await account.updateVerification(userId, secret);
    } catch (error) {
      throw this.handleAppwriteError(error, "vérification d'email");
    }
  }

  /**
   * Obtient l'état d'authentification complet
   */
  public async getAuthenticationState(): Promise<AuthState> {
    try {
      const isAuthenticated = await this.isAuthenticated();
      const isEmailVerified = await this.isEmailVerified();

      return {
        isAuthenticated,
        isEmailVerified,
        email: this.getUserEmail(),
        name: this.getUserName(),
        requiresAction: !isEmailVerified,
        isChecking: false,
        lastCheck: new Date(),
        error: null
      };
    } catch (error) {
      return {
        isAuthenticated: false,
        isEmailVerified: false,
        email: null,
        name: null,
        requiresAction: false,
        isChecking: false,
        lastCheck: new Date(),
        error: error instanceof Error ? error.message : 'Erreur inconnue'
      };
    }
  }

  /**
   * Déconnexion globale
   */
  public async logout(): Promise<void> {
    try {
      this.clearAuthData();
      const account = await this.getAccount();
      await account.deleteSession('current');
    } catch (error) {
      console.warn("[AppwriteClient] Erreur lors de la déconnexion:", error);
    }
  }

  // ========================
  // LOCAL STORAGE METHODS
  // ========================

  /**
   * Obtient l'utilisateur CMS local
   */
  public getLocalCmsUser(): any {
    const cmsUser = localStorage.getItem('sveltia-cms.user');
    if (!cmsUser) return null;

    try {
      const parsedUser = JSON.parse(cmsUser);
      if (parsedUser.token && typeof parsedUser.token === 'string' && parsedUser.token.trim() !== '') {
        return parsedUser;
      }
      localStorage.removeItem('sveltia-cms.user');
      return null;
    } catch (e) {
      localStorage.removeItem('sveltia-cms.user');
      return null;
    }
  }

  /**
   * Vérifie si l'utilisateur est authentifié via CMS
   */
  public isAuthenticatedCms(): boolean {
    return this.getLocalCmsUser() !== null;
  }

  /**
   * Obtient l'email de l'utilisateur depuis le localStorage
   */
  public getUserEmail(): string | null {
    return localStorage.getItem('appwrite-user-email');
  }

  /**
   * Obtient le nom de l'utilisateur depuis le localStorage
   */
  public getUserName(): string | null {
    return localStorage.getItem('appwrite-user-name');
  }

  /**
   * Obtient le statut de vérification email local
   */
  public getLocalEmailVerificationStatus(): string | null {
    return localStorage.getItem('email-verification-status');
  }

  /**
   * Nettoie les données d'authentification locales
   */
  public clearAuthData(): void {
    localStorage.removeItem('sveltia-cms.user');
    localStorage.removeItem('appwrite-user-email');
    localStorage.removeItem('appwrite-user-name');
    localStorage.removeItem('email-verification-status');
  }

  /**
   * Définit les données d'authentification
   */
  public setAuthData(email: string, name: string, cmsAuth: any): void {
    localStorage.setItem('appwrite-user-email', email);
    localStorage.setItem('appwrite-user-name', name);
    localStorage.setItem('sveltia-cms.user', JSON.stringify(cmsAuth));
  }

  // ========================
  // DATA OPERATIONS
  // ========================

  /**
   * Crée une liste collaborative depuis un événement
   */
  public async createCollaborativeListFromEvent(eventId: string): Promise<void> {
    try {
      console.log(`[AppwriteClient] Création d'une liste collaborative pour l'événement ${eventId}`);

      const response = await fetch(`/evenements/${eventId}/ingredients_aw/index.json`);
      if (!response.ok) {
        throw new Error(`Impossible de récupérer les données de l'événement: ${response.status}`);
      }

      const eventData = await response.json();
      console.log(`[AppwriteClient] Données de l'événement récupérées:`, eventData);

      const { databases } = await this.getClients();
      const user = await this.getAccount();
      const userData = await user.get();

      console.log(`[AppwriteClient] Utilisateur authentifié: ${userData.$id}`);

      // Vérifier si l'événement existe déjà
      try {
        await databases.getDocument(
          this.config.databaseId,
          this.config.collections.events,
          eventId
        );
        console.log(`[AppwriteClient] L'événement ${eventId} existe déjà`);
        window.location.href = `/app/ingredients-collaborative/?listId=${eventId}`;
        return;
      } catch (error: any) {
        if (error.code !== 404) {
          throw error;
        }
      }

      // Récupérer le hash depuis les paramètres globaux
      const contentHash = window.__HUGO_PARAMS__?.listContentHash;
      if (!contentHash) {
        throw new Error('Le hash du contenu n\'est pas défini');
      }

      // Créer l'événement
      const eventDataForAppwrite = {
        name: eventData.name || `Événement ${eventId}`,
        originalDataHash: contentHash,
        isActive: true,
        createdBy: userData.$id
      };

      await databases.createDocument(
        this.config.databaseId,
        this.config.collections.events,
        eventId,
        eventDataForAppwrite,
        [`read("user:${userData.$id}")`, `update("user:${userData.$id}")`, `delete("user:${userData.$id}")`]
      );

      // Créer les ingrédients
      if (eventData.ingredients && Array.isArray(eventData.ingredients)) {
        console.log(`[AppwriteClient] Création de ${eventData.ingredients.length} ingrédients`);
        let successCount = 0;
        let errorCount = 0;

        for (const ingredient of eventData.ingredients) {
          const ingredientData = {
            ingredientUuid: ingredient.ingredientUuid || self.crypto.randomUUID(),
            ingredientLists: eventId,
            ingredientName: ingredient.ingredientName || '',
            ingType: ingredient.ingType || '',
            totalNeededConsolidated: JSON.stringify(ingredient.totalNeededConsolidated || []),
            totalNeededRaw: JSON.stringify(ingredient.totalNeededRaw || []),
            recipeOccurrences: (ingredient.recipeOccurrences || []).map((o: any) => JSON.stringify(o)),
            pFrais: ingredient.pFrais || false,
            pSurgel: ingredient.pSurgel || false,
          };

          try {
            await databases.createDocument(
              this.config.databaseId,
              this.config.collections.ingredients,
              self.crypto.randomUUID(),
              ingredientData,
              [`read("user:${userData.$id}")`, `update("user:${userData.$id}")`, `delete("user:${userData.$id}")`]
            );
            successCount++;
          } catch (error) {
            errorCount++;
            console.error(`[AppwriteClient] Erreur lors de la création de l'ingrédient ${ingredientData.ingredientName}:`, error);
          }
        }

        console.log(`[AppwriteClient] Création des ingrédients terminée: ${successCount} succès, ${errorCount} erreurs`);
      }

      console.log(`[AppwriteClient] Redirection vers l'application collaborative`);
      window.location.href = `/app/ingredients-collaborative/?listId=${eventId}`;

    } catch (error) {
      console.error('[AppwriteClient] Erreur lors de la création de la liste collaborative:', error);
      throw this.handleAppwriteError(error, 'création liste collaborative');
    }
  }

  /**
   * Vérifie si une liste collaborative existe
   */
  public async checkExistingCollaborativeList(listId: string): Promise<boolean> {
    try {
      const { databases } = await this.getClients();
      const existingList = await databases.getDocument(
        this.config.databaseId,
        this.config.collections.events,
        listId
      );
      return !!existingList;
    } catch (error: any) {
      if (error.code === 404) {
        return false;
      }
      console.error('[AppwriteClient] Erreur lors de la vérification de la liste existante:', error);
      return false;
    }
  }

  /**
   * S'abonne aux mises à jour temps réel
   */
  public subscribeToCollections(
    collectionNames: string[],
    listId: string,
    onMessage: (payload: RealtimePayload) => void,
    connectionCallbacks: { onConnect?: () => void; onDisconnect?: () => void; onError?: (error: any) => void } = {}
  ): (() => void) => {
    const { onConnect, onDisconnect, onError } = connectionCallbacks;

    if (!this.clients?.client) {
      const error = new Error("Impossible de s'abonner : le client Appwrite n'est pas encore initialisé.");
      onError?.(error);
      return () => {};
    }

    const channels = collectionNames.map(name => {
      const collectionId = this.config.collections[name as keyof typeof this.config.collections];
      if (!collectionId) {
        console.warn(`[AppwriteClient] Nom de collection inconnu: ${name}`);
        return null;
      }
      return `databases.${this.config.databaseId}.collections.${collectionId}.documents`;
    }).filter(Boolean);

    console.log('[AppwriteClient] Abonnement aux canaux en cours...', channels);

    try {
      const unsubscribe = this.clients.client.subscribe(channels, (response: any) => {
        console.log('[AppwriteClient] Réception temps réel:', response);
        onMessage(response);
      });

      if (onConnect) {
        setTimeout(() => {
          console.log('[AppwriteClient] Connexion temps réel établie');
          onConnect();
        }, 50);
      }

      return unsubscribe;

    } catch (error) {
      console.error('[AppwriteClient] Erreur lors de la souscription temps réel:', error);
      onError?.(error);
      return () => {};
    }
  }
}

// Export de l'instance singleton
export const appwriteClient = AppwriteClient.getInstance();

// Export par défaut
export default appwriteClient;
