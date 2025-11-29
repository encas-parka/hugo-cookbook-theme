/**
 * Service Appwrite centralisé pour Svelte
 *
 * Ce service gère l'initialisation et l'accès aux instances Appwrite.
 */

import {
  Client,
  Account,
  Databases,
  Functions,
  Teams,
  TablesDB,
  type Models,
} from "appwrite";
import type { AppwriteConfig } from "../types/global";

// =============================================================================
// CONFIGURATION
// =============================================================================

const APPWRITE_CONFIG: AppwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  projectId: "689725820024e81781b7",
  databaseId: "689d15b10003a5a13636",
  functions: {
    cmsAuth: "68976500002eb5c6ee4f",
    accessRequest: "689cdea5001a4d74549d",
    batchUpdate: "68f00487000c624533a3",
  },
  collections: {
    events: "events", // Ajouté par déduction, à vérifier si nécessaire
    ingredients: "ingredients", // Ajouté par déduction
    main: "main",
    purchases: "purchases",
    products: "products",
  },
};

// =============================================================================
// CACHE DES INSTANCES
// =============================================================================

let cachedInstances: {
  client: Client;
  account: Account;
  databases: Databases;
  tables: TablesDB;
  functions: Functions;
  teams: Teams;
  config: AppwriteConfig;
} | null = null;

// =============================================================================
// API CENTRALE
// =============================================================================

/**
 * Récupère les instances Appwrite (avec cache)
 */
export async function getAppwriteInstances(): Promise<{
  client: Client;
  account: Account;
  databases: Databases;
  tables: TablesDB;
  functions: Functions;
  teams: Teams;
  config;
}> {
  if (cachedInstances) {
    return cachedInstances;
  }

  console.log("[appwrite] Initialisation des instances Appwrite...");

  const client = new Client()
    .setEndpoint(APPWRITE_CONFIG.endpoint)
    .setProject(APPWRITE_CONFIG.projectId);

  const account = new Account(client);
  const databases = new Databases(client);
  const tables = new TablesDB(client);
  const functions = new Functions(client);
  const teams = new Teams(client);

  cachedInstances = {
    client,
    account,
    databases,
    tables,
    functions,
    teams,
    config: APPWRITE_CONFIG,
  };

  console.log("[appwrite] Instances initialisées avec succès");

  return cachedInstances;
}

/**
 * Réinitialise le cache (logout)
 */
export function clearAppwriteCache(): void {
  console.log("[appwrite] Cache réinitialisé");
  cachedInstances = null;
}

// =============================================================================
// UTILITAIRES
// =============================================================================

export function getAppwriteConfig() {
  return {
    APPWRITE_ENDPOINT: APPWRITE_CONFIG.endpoint,
    APPWRITE_PROJECT_ID: APPWRITE_CONFIG.projectId,
    APPWRITE_FUNCTION_ID: APPWRITE_CONFIG.functions.batchUpdate, // Fallback
    ACCESS_REQUEST_FUNCTION_ID: APPWRITE_CONFIG.functions.accessRequest,
    APPWRITE_CONFIG: APPWRITE_CONFIG,
  };
}

/**
 * Subscribe aux événements realtime
 */
export function subscribe(
  channels: string[],
  callback: (response: any) => void,
): () => void {
  // Initialisation lazy si nécessaire
  if (!cachedInstances) {
    console.warn(
      "[appwrite] Subscribe appelé avant initialisation, tentative d'init...",
    );
    // On ne peut pas await ici, donc on suppose que ça a été fait ou on le fait en "fire and forget"
    // Idéalement, subscribe ne devrait être appelé qu'après init.
    // Pour l'instant, on instancie un client temporaire si besoin, mais c'est pas idéal.
    const client = new Client()
      .setEndpoint(APPWRITE_CONFIG.endpoint)
      .setProject(APPWRITE_CONFIG.projectId);
    return client.subscribe(channels, callback);
  }

  return cachedInstances.client.subscribe(channels, callback);
}

export function isInitialized(): boolean {
  return cachedInstances !== null;
}
