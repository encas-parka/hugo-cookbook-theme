interface AppwriteConfig {
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

interface AppwriteClientGlobal {
  getAppwriteClients: () => Promise<any>;
  getAccount: () => Promise<any>;
  getFunctions: () => Promise<any>;
  getDatabases: () => Promise<any>;
  getConfig: () => {
    APPWRITE_ENDPOINT: string;
    APPWRITE_PROJECT_ID: string;
    APPWRITE_FUNCTION_ID: string;
    ACCESS_REQUEST_FUNCTION_ID: string;
    APPWRITE_CONFIG: AppwriteConfig;
  };
  isInitialized: () => boolean;
  initializeAppwrite: () => Promise<any>;
  getLocalCmsUser: () => any;
  isAuthenticatedCms: () => boolean;
  isAuthenticatedAppwrite: () => Promise<boolean>;
  isConnectedAppwrite: () => Promise<boolean>;
  getUserEmail: () => Promise<string | null>;
  getUserName: () => Promise<string | null>;
  clearAuthData: () => void;
  setAuthData: (data: any) => void;
  logoutGlobal: () => Promise<void>;
  isEmailVerified: () => Promise<boolean>;
  subscribeToCollections: (
    collectionNames: string[],
    listId: string,
    onMessage: (response: any) => void,
    connectionCallbacks?: {
      onConnect?: () => void;
      onDisconnect?: () => void;
      onError?: (error: any) => void;
    }
  ) => () => void;
}

interface AppwriteSDK {
  Client: any;
  Account: any;
  Functions: any;
  Databases: any;
  Teams: any;
  Query: any;
}

declare global {
  interface Window {
    Appwrite: AppwriteSDK;
    AppwriteClient: AppwriteClientGlobal;
  }
}

export {};
