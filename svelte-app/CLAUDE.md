# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development

- `bun run dev` - Start development server with Vite HMR
- `bun run build` - Build for production
- `bun run preview` - Preview production build locally
- `bun run check` - Run type checking (svelte-check + TypeScript)

### Type Safety

- Uses Svelte 5 with TypeScript
- Type checking includes both app code (tsconfig.app.json) and Node/tooling (tsconfig.node.json)
- Appwrite types are auto-generated in `src/lib/types/appwrite.d.ts`

## Routing with sv-router

The application uses **sv-router** for client-side routing with hash-based navigation.

### Basic Navigation

```typescript
import { navigate, route, p } from "$lib/router";

// Programmatic navigation
navigate("/event/123");

// Get current route info
route.pathname; // Current path
route.params.id; // Route params
route.search.tab; // Query params

// Generate links
p("/recipe", "123"); // Returns '/recipe/123'
```

### Query Params with searchParams

```typescript
import { searchParams } from "$lib/router";

// Read
const tab = searchParams.get("tab");

// Write (updates URL reactively)
searchParams.set("tab", "info");
searchParams.delete("tab");

// Reactive listening
$effect(() => {
  console.log("Tab changed:", searchParams.get("tab"));
});
```

### Route Guards

Routes are protected with guards in `src/lib/router/guards.ts`:

- `authGuard` - Requires authentication, redirects to `/` if not logged in
- `localEventGuard` - Requires event status="local", used for demo mode

### Route Configuration

All routes are defined in `src/lib/router/routes.ts` with:

- Public routes (no auth): `/`, `/recipe`, `/recipe/:uuid`
- Private routes (authGuard): `/dashboard/*`, `/recipe/my/*`
- Demo routes (localEventGuard): `/demo/event/*`

### Migration from simple-router

| Old (simple-router) | New (sv-router)     |
| ------------------- | ------------------- |
| `navigate('/path')` | `navigate('/path')` |
| `getParam('x')`     | `route.params.x`    |
| `getQuery('x')`     | `route.search.x`    |
| `router.path`       | `route.pathname`    |
| `preloadRoute()`    | `preload()`         |

### Documentation

For complete sv-router reference, see `docs/documentations/sv-router-implementation.md` (project root) which includes:

- Full navigation API with examples
- Route configuration patterns
- Guard implementations (authGuard, localEventGuard)
- Migration guide from simple-router
- Cheat sheet for common patterns

## Architecture Overview

### Tech Stack

- **Frontend**: Svelte 5 (modern Svelte with $state, $props, $derived)
- **Build**: Vite with @sveltejs/vite-plugin-svelte
- **Styling**: Tailwind CSS v4 with DaisyUI components
- **Backend**: Appwrite (database, authentication, realtime)
- **State**: Svelte 5 native reactivity + runed utilities
- **Data Grid**: RevoGrid with Svelte integration
- **Serialization**: SuperJSON for complex data structures

### Core Architecture Pattern

The application follows a **3-layer reactive architecture**:

```
┌─────────────────────────────────────────────────────────────┐
│                 Appwrite Backend                           │
│  • Database, Auth, Realtime                                 │
│  • Source of truth                                          │
└─────────────────▲───────────────────────────────────────────┘
                   │ Raw data access
┌─────────────────▼───────────────────────────────────────────┐
│              appwrite-products                         │
│  • Pure CRUD functions                                      │
│  • Stateless data transformations                           │
│  • Realtime subscription management                         │
│  • Incremental sync logic                                  │
└─────────────────▲───────────────────────────────────────────┘
                   │ Reactive state management
┌─────────────────▼───────────────────────────────────────────┐
│                  ProductsStore                              │
│  • SvelteMap<string, ProductModel>                        │
│  • localStorage cache (SuperJSON)                         │
│  • Reactive filtering ($derived.by())                      │
│  • Realtime updates                                         │
│  • Business logic & calculations                           │
└─────────────────▲───────────────────────────────────────────┘
                   │ Per-product modal state
┌─────────────────▼───────────────────────────────────────────┐
│              ProductModalState                              │
│  • Factory: createProductModalState(productId)             │
│  • Local forms (purchase, stock, store, etc.)             │
│  • Orchestration of Appwrite calls                         │
│  • Loading/error UI states                                 │
└─────────────────▲───────────────────────────────────────────┘
                   │ Cloud Functions (Batch Ops)
┌─────────────────▼───────────────────────────────────────────┐
│              appwrite-transaction                           │
│  • Batch operations (Group Purchase)                        │
│  • Cloud Function execution                                 │
│  • Retry logic & error handling                             │
└─────────────────▲───────────────────────────────────────────┘
                   │ Reactive UI consumption
┌─────────────────▼───────────────────────────────────────────┐
│                Svelte Components                           │
│  • Reactive templates ($state, $derived)                   │
│  • User actions → ProductModalState                       │
│  • Automatic updates from store                            │
└─────────────────────────────────────────────────────────────┘
```

### Key Architectural Concepts

**1. ProductsStore (Singleton)**

- Central state management with SvelteMap for O(1) access
- **Stores `ProductModel` instances** instead of raw objects
- **Initialization flow**: Hugo → Cache → Appwrite → Realtime
- **Persistence**: localStorage with SuperJSON + debounced writes
- **Filtering**: Reactive `$derived.by()` for performance
- **Real-time**: Appwrite subscription for instant updates
- **Cache strategy**: Incremental sync with `lastSync` timestamps

**2. ProductModel (Reactive Wrapper)**

- **Class-based model**: `src/lib/models/ProductModel.svelte.ts`
- **Reactive Data**: Encapsulates `EnrichedProduct` in a `$state`
- **Dynamic Stats**: Calculates stats (quantities, stock, missing) on-the-fly via `$derived.by()`
- **Context Aware**: Depends on `DateRangeStore` for date-specific calculations
- **Optimized**: Only recalculates when its specific data or the date range changes

**3. ProductModalState (Factory)**

- **Factory function**: `createProductModalState(productId)`
- **Data flow**: Always reads from ProductsStore via `$derived()`
- **Local state**: Forms for purchase, stock, store, volunteer management
- **Sync logic**: Checks `product.isSynced` before create/update operations
- **Error handling**: Centralized loading/error states with toast notifications

**4. Cloud Transactions (Batch Operations)**

- **Service**: `src/lib/services/appwrite-transaction.ts`
- **Usage**: Complex operations requiring atomicity or exceeding client limits
- **Pattern**: Prepares batch data -> Calls Appwrite Cloud Function -> Handles result
- **Example**: `createGroupPurchaseWithSync` splits large batches and syncs products before creating purchases

**3. Data Synchronization Strategy**

```typescript
// Initialization sequence
1. Load from localStorage cache (if exists)
2. If empty → Load from Hugo → Create Appwrite main document
3. Background sync from Appwrite (delta since lastSync)
4. Setup realtime subscription for live updates
```

### Key Directories & Files

**Core Stores:**

- `src/lib/stores/ProductsStore.svelte.ts` - Products state management with SvelteMap
- `src/lib/stores/RecipesStore.svelte.ts` - Recipes index + lazy loading details
- `src/lib/stores/EventsStore.svelte.ts` - Events CRUD + participants + todos
- `src/lib/stores/GlobalState.svelte.ts` - Auth, UI state, toasts, modals
- `src/lib/stores/DateRangeStore.svelte.ts` - Date range selection logic
- `src/lib/stores/RealtimeManager.svelte.ts` - Centralized WebSocket multiplexing
- `src/lib/stores/ProductModalState.svelte.ts` - Per-product modal factory
- `src/lib/stores/MaterielStore.svelte.ts` - Equipment/material management
- `src/lib/stores/TeamdocsStore.svelte.ts` - Team documents management
- `src/lib/stores/NativeTeamsStore.svelte.ts` - Native teams from Appwrite
- `src/lib/stores/NotificationStore.svelte.ts` - User notifications
- `src/lib/stores/NavBarStore.svelte.ts` - Navigation bar state

**Models & Services:**

- `src/lib/models/ProductModel.svelte.ts` - Reactive product model wrapper
- `src/lib/services/appwrite.ts` - Centralized Appwrite client + config
- `src/lib/services/appwrite-products.ts` - Products CRUD layer
- `src/lib/services/appwrite-recipes.ts` - Recipes CRUD layer
- `src/lib/services/appwrite-events.ts` - Events CRUD layer
- `src/lib/services/appwrite-transaction.ts` - Cloud function batch operations
- `src/lib/services/toast.service.svelte.ts` - Toast notification service

**Router:**

- `src/lib/router/index.ts` - Router configuration and exports
- `src/lib/router/routes.ts` - Route definitions (public, private, demo)
- `src/lib/router/guards.ts` - Route guards (authGuard, localEventGuard)

**Caching:**

- `src/lib/services/recipes-idb-cache.ts` - IndexedDB cache for recipes
- `src/lib/services/events-idb-cache.ts` - IndexedDB cache for events

**Types:**

- `src/lib/types/appwrite.d.ts` - Auto-generated Appwrite types
- `src/lib/types/store.types.ts` - Local application types

### Data Models

**Core Types:**

- `Products` - Raw Appwrite product documents
- `Purchases` - Purchase records linked to products
- `EnrichedProduct` - Product + calculated fields + purchases
- `StoreInfo` - Store metadata embedded in products
- `NumericQuantity` - {quantity: number, unit: string} format
- `RecipeOccurrence` - Recipe usage data with dates

**Key Data Structures:**

- `byDate` - Date-based recipe calculations (performance optimized)
- `totalNeededConsolidated` - Manual override support
- `purchases` - Array of purchase records per product

### Common Patterns

**1. Store Initialization (Phased)**

All major stores follow a 3-phase initialization pattern:

1. `loadCache()` - Load from IndexedDB (fast UI render)
2. `syncFromRemote()` - Sync from Appwrite/Hugo (update data)
3. `setupRealtime()` - Subscribe to live updates

```typescript
// Initialize stores in sequence
await recipesStore.loadCache(); // Phase 1: Fast cache load
await recipesStore.syncFromRemote(); // Phase 2: Fresh data
await recipesStore.setupRealtime(); // Phase 3: Live updates
```

**2. Realtime Multiplexing**

All stores register channels with the central RealtimeManager:

```typescript
// During store initialization
realtimeManager.register(
  [`databases.${DB_ID}.collections.${COLLECTION_ID}.documents`],
  (response) => {
    /* handle realtime update */
  },
);

// Dynamic registration (locks, event-specific)
realtimeManager.registerDynamic(channels, callback);
```

**3. Reactive Store Usage**

```typescript
// In components
const productsStore = get(productsStore);
const filteredProducts = $derived(productsStore.filteredProducts); // Returns ProductModel[]

// In ProductModalState
const model = $derived(productsStore.getEnrichedProductById(productId));
const product = $derived(model.data); // Access raw data
const stats = $derived(model.stats); // Access calculated stats
```

**4. IndexedDB Caching**

Stores use IndexedDB for offline-first caching:

```typescript
// Cache is automatically managed by stores
await store.loadCache(); // Read from IDB
await store.syncFromRemote(); // Update from remote
// Cache automatically persists changes
```

**5. Global State Access**

```typescript
import { globalState } from "./stores/GlobalState.svelte";

// Auth state
globalState.isAuthenticated;
globalState.userId;
globalState.userTeams;

// UI state
globalState.isMobile;
globalState.toasts;
```

### Performance Optimizations

- **SvelteMap**: O(1) product/recipe access by ID
- **$derived.by()**: Computed values with automatic dependency tracking
- **IndexedDB caching**: Offline-first with bulk operations
- **Incremental sync**: Only fetch changes since lastSync timestamp
- **Realtime multiplexing**: Single WebSocket for all subscriptions
- **Lazy loading**: Recipe details loaded on-demand
- **Bulk operations**: Parallel fetching with batch IDB writes

### Development Workflow

**When adding new features to existing stores:**

1. Add/update types in `src/lib/types/`
2. Update store with new reactive calculations or methods
3. Add Appwrite CRUD functions in appropriate `appwrite-*.ts` service
4. Update modal/state factories with new forms/actions
5. Create/update UI components consuming the store
6. Register realtime channels if needed

**When creating a new store:**

1. Create `src/lib/stores/YourStore.svelte.ts` with class-based singleton
2. Add 3-phase initialization: `loadCache()`, `syncFromRemote()`, `setupRealtime()`
3. Create IndexedDB cache service in `src/lib/services/your-store-idb-cache.ts`
4. Add CRUD service in `src/lib/services/appwrite-yourdomain.ts`
5. Register channels with `realtimeManager.register()` during setup
6. Export singleton instance

**When debugging state issues:**

1. Check store initialization sequence (cache → sync → realtime)
2. Verify IndexedDB cache contents with browser DevTools
3. Confirm realtime subscription status in console logs
4. Review Appwrite sync timestamps in cache metadata
5. Check GlobalState auth initialization for user context

### Important Notes

- **Always use reactive derived values** - Never copy store data, use `$derived()` for automatic updates
- **Stores are singletons** - Import and use directly, don't create instances
- **IndexedDB is automatic** - Stores handle cache persistence transparently
- **Realtime is multiplexed** - All stores share a single WebSocket via RealtimeManager
- **Auth is required for most operations** - Check `globalState.isAuthenticated` before write operations
- **Appwrite config is centralized** - Use `getAppwriteInstances()` from `appwrite.ts` service
- **Permissions are handled server-side** - Appwrite enforces document-level access control

### Local/Demo Mode

The application supports a **local event mode** for demo/testing without authentication:

- Events with `status="local"` can be accessed via `/demo/event/:id` routes
- Protected by `localEventGuard` which validates event status
- Allows full event editing without being logged in
- Useful for on-site event management and demonstrations

See documentation in `docs/local-mode.md` for details.
