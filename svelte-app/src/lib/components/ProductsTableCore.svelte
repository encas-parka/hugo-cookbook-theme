<script lang="ts">


  // utils
  import {
    getProductTypeInfo,
    sortEnrichedProducts,
    formatPurchasesWithBadges,
    formatQuantity,
  } from "../utils/products-display";

	import {
		LayoutList,
		Store,
		Users,
		ShoppingCart,
		ListTodo,
		LoaderCircle,
		ShoppingBasket,
		Snowflake,
		CookingPot,
		Utensils,
		Check,
		CircleCheckBig
	} from 'lucide-svelte';

	const statusIcons = {
		pending: Clock,
		purchased: ShoppingCart,
		validated: CircleCheckBig
	};

	interface Props {
		groupedFilteredProducts: Record<string, Product[]>;
		filters: {
			sortColumn: string;
			sortDirection: 'asc' | 'desc';
			groupBy: string;
		};
		openModalProductId: string | undefined;
		onOpenModal: (productId: string, tab?: string) => void;
		onQuickValidation: (product: Product) => void;
	}

	let { groupedFilteredProducts, filters, openModalProductId, onOpenModal, onQuickValidation }: Props = $props();
</script>

{#snippet editPenIcon()}
	<div class="flex items-center gap-1">
		<SquarePen class="h-4 w-4 text-amber-600" />
	</div>
{/snippet}

<div class="bg-base-100 hidden rounded-lg md:block">
	<table class="table w-full">
		<thead class="bg-base-200 sticky top-0 z-10">
			<tr class="bg-base-200">
				<th class="text-center">
					<div class="flex items-center justify-center gap-2">
						<LayoutList class="h-4 w-4" />
						{#if filters.sortColumn === "productName"}
							<span>{filters.sortDirection === 'asc' ? '▲' : '▼'}</span>
						{/if}
					</div>
				</th>
				<th class="text-center">
					<div class="flex items-center justify-center gap-2">
						<Store class="h-4 w-4" />
						{#if filters.sortColumn === "store"}
							<span>{filters.sortDirection === 'asc' ? '▲' : '▼'}</span>
						{/if}
					</div>
				</th>
				<th class="text-center">
					<div class="flex items-center justify-center gap-2">
						<Users class="h-4 w-4" />
						{#if filters.sortColumn === "who"}
							<span>{filters.sortDirection === 'asc' ? '▲' : '▼'}</span>
						{/if}
					</div>
				</th>
				<th class="text-center">
					<div class="flex items-center justify-center gap-2">
						{#if filters.sortColumn === "productType"}
							<span>{filters.sortDirection === 'asc' ? '▲' : '▼'}</span>
						{/if}
					</div>
				</th>
				<th class="text-center">
					<div class="flex items-center justify-center gap-2">
						Quantités
					</div>
				</th>
				<th class="text-center">
					<div class="flex items-center justify-center gap-2">
						<ShoppingCart class="h-4 w-4" />
						Achats
					</div>
				</th>
				<th class="text-center">
					<div class="flex items-center justify-center gap-2">
						<ListTodo class="h-4 w-4" />
						Actions
					</div>
				</th>
			</tr>
		</thead>
		<tbody>
			{#each Object.entries(groupedFilteredProducts) as [groupKey, groupProducts] (groupKey)}
				{#if groupKey !== ""}
					{@const groupTypeInfo = getProductTypeInfo(groupKey)}
					<tr class="bg-base-200 sticky top-11 z-10 font-semibold">
						<td colspan="7" class="py-3">
							<div class="flex items-center justify-between">
								<div class="flex items-center gap-2">
									{#if filters.groupBy === "store"}
										<Store class="h-4 w-4" />
										<span>{groupKey}</span>
									{:else if filters.groupBy === "productType"}
										<div class="flex items-center gap-2">
											<groupTypeInfo.icon class="h-4 w-4" />
											<span>{groupTypeInfo.name}</span>
											<span class="text-sm opacity-70">({groupProducts!.length})</span>
										</div>
									{:else}
										<Users class="h-4 w-4" />
										<span>{groupKey}</span>
										<span class="text-sm opacity-70">({groupProducts!.length})</span>
									{/if}
								</div>
								<div class="flex items-center gap-2">
									<!-- Group action buttons could be added here -->
								</div>
							</div>
						</td>
					</tr>
				{/if}

				{#each sortEnrichedProducts(groupProducts || [], filters) as product (product.$id)}
					{@const stats = productsStore.productsStatsByDateRange.get(
						product.$id
					)}
					{@const quantities = stats?.quantities}
					{@const formattedQuantities = stats?.formattedQuantities}
					{@const nbRecipes = stats?.nbRecipes}
					{@const totalAssiettes = stats?.totalAssiettes}
					{@const stockResult = stats?.stockResult}
					{@const availableQuantities = stats?.availableQuantities}
					{@const missingQuantities = stats?.missingQuantities}
					{@const formattedAvailableQuantities = stats?.formattedAvailableQuantities}
					{@const hasAvailable = availableQuantities && availableQuantities > 0}
					{@const hasMissing = missingQuantities && missingQuantities > 0}
					{@const typeInfo = getProductTypeInfo(product.productType)}
					{@const purchasesBadges = formatPurchasesWithBadges(
						product,
						product.purchases
					)}

					<tr class="hover">
						<td class="text-left align-top">
							<div class="flex items-center justify-between pr-8">
								<div class="flex items-center gap-2">
									{#if product.status === "isSyncing"}
										<div class="text-info">
											<LoaderCircle class="h-4 w-4 animate-spin" />
										</div>
									{/if}
									<div>
										<div class="font-medium">{product.productName}</div>
										{#if product.previousNames && product.previousNames.length > 0}
											<div class="text-base-content/60 text-xs">
												{product.previousNames.join(" → ")}
											</div>
										{/if}
									</div>
								</div>
								<div class="flex gap-1">
									{#if product.pFrais}
										<div class="text-success">
											<ShoppingBasket class="text-success h-4 w-4" />
										</div>
									{/if}
									{#if product.pSurgel}
										<div class="text-info">
											<Snowflake class="text-info h-4 w-4" />
										</div>
									{/if}
								</div>
							</div>
						</td>

						<td class="text-center align-top">
							{#if product.storeInfo?.storeComment}
								<div class="tooltip" data-tip={product.storeInfo.storeComment}>
									<div class="text-center">{product.storeInfo.storeName}</div>
								</div>
							{:else}
								<div class="text-center">{product.storeName || "—"}</div>
							{/if}
						</td>

						<td class="text-center align-top">
							{#if product.who && product.who.length > 0}
								<div class="flex flex-wrap justify-center gap-2 pr-8">
									{#each product.who as person (person)}
										<span class="badge badge-soft badge-info badge-sm">{person}</span>
									{/each}
								</div>
							{:else}
								<div class="text-center opacity-50">—</div>
							{/if}
						</td>

						<td class={filters.groupBy === "productType" ? "hidden" : ""}>
							<span class="flex items-center gap-2 text-center text-sm">
								<typeInfo.icon class="h-3 w-3" />
								{typeInfo.name}
							</span>
						</td>

						<td class="text-center align-top">
							<div class="pb-1 text-center font-semibold">{formattedQuantities}</div>
							{#if stats.nbRecipes || stats.totalAssiettes}
								<div class="text-center">
									<span class="flex items-center gap-1 text-center" title="Recettes">
										<CookingPot class="h-3 w-3" />
										{stats.nbRecipes}
									</span>
									<span class="flex items-center gap-1 text-center" title="Assiettes">
										<Utensils class="h-3 w-3" />
										{stats.totalAssiettes}
									</span>
								</div>
							{/if}
						</td>

						<td class="text-center align-top">
							<div class="flex flex-wrap justify-center gap-1 py-1">
								{#each purchasesBadges as purchase (purchase.status)}
									{@const IconComponent = statusIcons[purchase.icon]}
									<div
										class="badge badge-{purchase.badge} badge-sm flex items-center gap-1"
										title={purchase.hover}
									>
										<IconComponent class="h-4 w-4" />
										<span>{purchase.label}</span>
									</div>
								{/each}
								{#if purchasesBadges.length === 0}
									<span class="text-center opacity-50">—</span>
								{/if}
							</div>
						</td>

						<td class="group relative text-center align-top">
							{#if product.displayMissingQuantity !== "✅ Complet"}
								<div class="flex items-center justify-center gap-2">
									<div class="bg-warning m-auto rounded px-2 py-1">
										{product.displayMissingQuantity}
									</div>
									<button
										class="btn btn-success btn-xs opacity-0 transition-opacity group-hover:opacity-100"
										type="button"
										onclick={() => onQuickValidation(product)}
										title="Valider la quantité manquante"
									>
										<Check size={16} />
									</button>
								</div>
							{:else}
								<CircleCheckBig
									class="mx-auto h-5 w-5 text-success"
									title="Produit complet"
								/>
							{/if}

							{#if stats && stats.formattedAvailableQuantities && stats.formattedAvailableQuantities !== "Équilibré"}
								<div class="mt-1 text-center">
									<div
										class="badge badge-{hasAvailable && !hasMissing ? 'success' : 'warning'} badge-sm"
									>
										Dispo: {stats.formattedAvailableQuantities}
									</div>
								</div>
							{/if}
						</td>
					</tr>
				{/each}
			{/each}
		</tbody>
	</table>

	{#if Object.values(groupedFilteredProducts).flat().length === 0}
		<div class="py-8 text-center">
			<div class="alert alert-info">
				<div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="h-6 w-6 shrink-0 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
						></path>
					</svg>
					<span>Aucun produit ne correspond à vos filtres</span>
				</div>
			</div>
		</div>
	{/if}
</div>
