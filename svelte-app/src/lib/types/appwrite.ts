/**
 * Types pour Appwrite et configuration client
 */

// Configuration Appwrite centralisée
export interface AppwriteConfig {
  endpoint: string;
  projectId: string;
  databaseId: string;
  functions: {
    cmsAuth: string;
    accessRequest: string;
  };
  collections: {
    events: string;
    ingredients: string;
    main: string;
    purchases: string;
    products: string;
  };
}

// Types pour les clients Appwrite
export interface AppwriteClients {
  client: any;
  account: any;
  functions: any;
  databases: any;
}

// Types pour les requêtes Appwrite
export interface AppwriteQuery {
  equal: (attribute: string, value: any) => any;
  greaterThan: (attribute: string, value: any) => any;
  limit: (limit: number) => any;
  orderDesc: (attribute: string) => any;
  // Ajouter d'autres types de requêtes au besoin
}

// Types pour les documents Appwrite
export interface AppwriteDocument {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions?: string[];
  $databaseId?: string;
  $collectionId?: string;
}

// Types pour la réponse d'une liste de documents
export interface AppwriteListResponse<T> {
  total: number;
  documents: T[];
}

// Types pour les permissions Appwrite
export interface AppwritePermissions {
  read?: string[];
  write?: string[];
  update?: string[];
  delete?: string[];
}

// Types pour les payloads temps réel
export interface RealtimePayload {
  events: string[];
  payload: any;
  timestamp: string;
}

// Types pour les états d'authentification
export interface AuthState {
  isAuthenticated: boolean;
  isEmailVerified: boolean;
  email: string | null;
  name: string | null;
  requiresAction: boolean;
  isChecking: boolean;
  lastCheck: Date | null;
  error: string | null;
}

// Types pour l'utilisateur Appwrite
export interface AppwriteUser {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  name: string;
  email: string;
  emailVerification: boolean;
  registration?: Date;
  status?: boolean;
  labels?: string[];
  prefs?: Record<string, any>;
}

// Types pour les sessions Appwrite
export interface AppwriteSession {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  userId: string;
  expire: Date;
  provider?: string;
  providerUid?: string;
  providerAccessToken?: string;
  providerAccessTokenExpiry?: number;
  ipAddress?: string;
  operatingSystem?: string;
  device?: string;
  deviceHash?: string;
  country?: string;
  countryName?: string;
  continent?: string;
  continentName?: string;
  city?: string;
  platform?: string;
  platformVersion?: string;
  brand?: string;
  model?: string;
}

// Types pour les erreurs Appwrite
export interface AppwriteApiError {
  code: number;
  message: string;
  type: string;
  response?: {
    data?: any;
    headers?: Record<string, string>;
    status: number;
    statusText: string;
  };
}

// Types pour les options de requête
export interface QueryOptions {
  limit?: number;
  offset?: number;
  orderField?: string;
  orderDirection?: 'asc' | 'desc';
  filters?: Array<{
    field: string;
    operator: 'equal' | 'not_equal' | 'greater_than' | 'less_than' | 'greater_equal' | 'less_equal';
    value: any;
  }>;
}

// Types pour les opérations batch
export interface BatchOperation {
  type: 'create' | 'update' | 'delete';
  collectionId: string;
  documentId?: string;
  data?: any;
  permissions?: AppwritePermissions;
}

// Types pour les résultats batch
export interface BatchResult {
  success: boolean;
  documentId?: string;
  error?: AppwriteApiError;
}

// Types pour les transactions Appwrite
export interface TransactionOptions {
  timeout?: number;
  retryCount?: number;
}

// Types pour les hooks de cycle de vie
export interface AppwriteLifecycleHooks {
  onBeforeRequest?: (config: any) => void;
  onRequestSuccess?: (response: any) => void;
  onRequestError?: (error: AppwriteApiError) => void;
  onRealtimeEvent?: (payload: RealtimePayload) => void;
}

// Configuration pour le retry automatique
export interface RetryConfig {
  maxRetries: number;
  baseDelay: number;
  maxDelay: number;
  backoffFactor: number;
  retryableErrors: number[];
}

// Types pour le cache local
export interface CacheConfig {
  maxSize: number;
  ttl: number; // Time to live en millisecondes
  strategy: 'lru' | 'fifo' | 'lfu';
}

// Types pour les statistiques d'utilisation
export interface UsageStats {
  requestsCount: number;
  errorCount: number;
  cacheHitRate: number;
  averageResponseTime: number;
  lastReset: Date;
}