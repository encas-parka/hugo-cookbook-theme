# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `npm run dev` - Start development server with Vite HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run check` - Run type checking (svelte-check + TypeScript)

### Type Safety
- Uses Svelte 5 with TypeScript
- Type checking includes both app code (tsconfig.app.json) and Node/tooling (tsconfig.node.json)
- Appwrite types are auto-generated in `src/lib/types/appwrite.d.ts`

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
│              appwrite-interactions                         │
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

- `src/lib/stores/ProductsStore.svelte.ts` - Main reactive state store
- `src/lib/models/ProductModel.svelte.ts` - Reactive product model
- `src/lib/stores/ProductModalState.svelte.ts` - Per-product modal factory
- `src/lib/services/appwrite-interactions.ts` - Pure Appwrite CRUD layer
- `src/lib/services/appwrite-transaction.ts` - Cloud function transactions
- `src/lib/services/hugo-loader.ts` - Hugo data import service
- `src/lib/utils/productsUtils.ts` - Business logic calculations
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

**1. Reactive Store Usage**
```typescript
// In components
const productsStore = get(productsStore);
const filteredProducts = $derived(productsStore.filteredProducts); // Returns ProductModel[]

// In ProductModalState
const model = $derived(productsStore.getEnrichedProductById(productId));
const product = $derived(model.data); // Access raw data
const stats = $derived(model.stats); // Access calculated stats
```

**2. Modal State Management**
```typescript
// Create modal state for specific product
const modalState = createProductModalState(productId);

// Access data (reactive)
modalState.product // Always fresh from store
modalState.forms.purchase // Local form state
```

**3. Sync Logic Pattern**
```typescript
// Check if product needs Appwrite creation
if (!product.isSynced) {
  await upsertProduct(productId, updates, getProductById);
} else {
  await updateProduct(productId, updates);
}
```

### Performance Optimizations

- **SvelteMap**: O(1) product access by ID
- **$derived.by()**: Computed values with dependency tracking
- **Debounced persistence**: 500ms debounce for localStorage writes
- **Incremental sync**: Only fetch changes since lastSync
- **Date range calculations**: Optimized byDate structure for totals

### Development Workflow

**When adding new product features:**
1. Add types in `src/lib/types/`
2. Update ProductsStore with new reactive calculations
3. Add Appwrite functions in `appwrite-interactions.ts`
4. Update ProductModalState with new forms/actions
5. Create/update UI components consuming the store

**When debugging state issues:**
1. Check ProductsStore initialization sequence
2. Verify ProductModalState factory usage
3. Confirm realtime subscription status
4. Check localStorage cache state
5. Review Appwrite sync timestamps

### Important Notes

- **Never copy product data** - Always use reactive derived values from ProductsStore
- **Modal state is per-product** - Use factory function, don't share modal state
- **Cache is automatic** - ProductsStore handles localStorage automatically
- **Realtime is automatic** - Updates flow from Appwrite → Store → UI automatically
- **Sync logic is important** - Always check `isSynced` before write operations