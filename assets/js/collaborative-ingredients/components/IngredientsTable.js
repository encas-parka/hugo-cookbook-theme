/**
 * IngredientsTable.js
 * Composant Vue pour le tableau principal des ingrédients
 * de l'application collaborative
 */

export const ingredientsTableTemplate = `
  <div class="table-container">
    <table class="table table-hover">
      <thead class="sticky-header table-light">
        <tr>
          <th width="50">
            <input 
              type="checkbox" 
              class="form-check-input" 
              :checked="selectAllChecked"
              @change="$emit('toggle-select-all')"
            >
          </th>
          <th width="50">✅</th>
          <th @click="$emit('sort-by', 'ingredientName')" style="cursor: pointer;">
            Ingrédient
            <span v-if="sortField === 'ingredientName'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
          </th>
          <th @click="$emit('sort-by', 'ingType')" style="cursor: pointer;">
            Type
            <span v-if="sortField === 'ingType'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
          </th>
          <th>Besoin Total</th>
          <th>En Stock</th>
          <th>Acheté</th>
          <th>Manque</th>
          <th>Magasin</th>
          <th>Qui</th>
          <th width="100">Actions</th>
        </tr>
      </thead>
      <tbody>
        <ingredient-row
          v-for="ingredient in ingredients"
          :key="ingredient.$id"
          :ingredient="ingredient"
          :selected="selectedIngredients.includes(ingredient.$id)"
          @toggle-select="handleIngredientSelect"
          @toggle-status="$emit('toggle-ingredient-status', ingredient)"
          @edit-stock="$emit('edit-stock', ingredient)"
          @edit-purchases="$emit('edit-purchases', ingredient)"
          @show-details="$emit('show-details', ingredient)"
        ></ingredient-row>
      </tbody>
    </table>

    <!-- Message si aucun ingrédient -->
    <div v-if="ingredients.length === 0" class="text-center py-5">
      <div class="text-muted">
        <h5>Aucun ingrédient trouvé</h5>
        <p>Ajustez vos filtres ou créez une nouvelle liste d'ingrédients.</p>
      </div>
    </div>
  </div>
`;

export const ingredientRowTemplate = `
  <tr
    class="ingredient-row"
    :class="{
      'modified': ingredient.isModified,
      'merged': ingredient.isMerged
    }"
  >
    <!-- Checkbox de sélection -->
    <td>
      <input
        type="checkbox"
        class="form-check-input"
        :checked="selected"
        @change="$emit('toggle-select', ingredient.$id)"
      >
    </td>

    <!-- Statut OK -->
    <td>
      <input
        type="checkbox"
        class="form-check-input"
        :checked="ingredient.trackingData?.status?.ok || false"
        @change="$emit('toggle-status')"
      >
    </td>

    <!-- Nom de l'ingrédient -->
    <td>
      <strong>{{ ingredient.ingredientName }}</strong>
      <div v-if="ingredient.isMerged" class="small text-muted">
        🔗 Fusionné avec {{ ingredient.trackingData?.mergedWith?.length || 0 }} autre(s)
      </div>
    </td>

    <!-- Type -->
    <td>
      <span class="badge bg-secondary badge-ingredient-type">{{ formatTypeShort(ingredient.ingType) }}</span>
    </td>

    <!-- Besoin Total -->
    <td>{{ formatTotalNeed(ingredient) }}</td>

    <!-- En Stock -->
    <td>
      <button
        class="btn btn-sm btn-outline-primary"
        @click="$emit('edit-stock')"
      >
        {{ formatStock(ingredient) }}
      </button>
    </td>

    <!-- Acheté -->
    <td>
      <button
        class="btn btn-sm btn-outline-success"
        @click="$emit('edit-purchases')"
      >
        {{ formatPurchases(ingredient) }}
      </button>
    </td>

    <!-- Manque -->
    <td>
      <span :class="getBalanceClass(ingredient)">
        {{ formatBalance(ingredient) }}
      </span>
    </td>

    <!-- Magasin -->
    <td class="text-fade">{{ getStoresList(ingredient) }}</td>

    <!-- Qui -->
    <td class="text-fade">{{ getResponsibleList(ingredient) }}</td>

    <!-- Actions -->
    <td>
      <button
        class="btn btn-sm btn-outline-info btn-icon me-1"
        @click="$emit('show-details')"
        title="Voir les détails"
      >
        👁️
      </button>
    </td>
  </tr>
`;

export function createIngredientsTableComponent() {
  return {
    name: 'IngredientsTable',
    template: ingredientsTableTemplate,
    emits: [
      'toggle-select-all', 
      'toggle-ingredient-status', 
      'edit-stock', 
      'edit-purchases', 
      'show-details', 
      'sort-by', 
      'ingredient-selected'
    ],
    props: {
      ingredients: {
        type: Array,
        default: () => []
      },
      selectedIngredients: {
        type: Array,
        default: () => []
      },
      selectAllChecked: {
        type: Boolean,
        default: false
      },
      sortField: {
        type: String,
        default: 'ingredientName'
      },
      sortDirection: {
        type: String,
        default: 'asc'
      }
    },
    methods: {
      handleIngredientSelect(ingredientId) {
        this.$emit('ingredient-selected', ingredientId);
      }
    }
  };
}

export function createIngredientRowComponent() {
  return {
    name: 'IngredientRow',
    template: ingredientRowTemplate,
    emits: ['toggle-select', 'toggle-status', 'edit-stock', 'edit-purchases', 'show-details'],
    props: {
      ingredient: {
        type: Object,
        required: true
      },
      selected: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      formatTypeShort(type) {
        const typeMap = {
          'frais': 'Produits Frais',
          'legumesFrais': 'Fruits et Légumes',
          'legumesNonFrais': 'Conserves',
          'lof': 'LOF',
          'sucres': 'Sucrés',
          'epices': 'Épices',
          'sec': 'Produits Secs',
          'animaux': 'Viandes',
          'autres': 'Autres'
        };
        return typeMap[type] || type;
      },

      formatTotalNeed(ingredient) {
        if (!ingredient.originalData?.recipeOccurrences?.length) return '0';

        // Calculer le total des quantités nécessaires
        let total = 0;
        let unit = '';
        
        ingredient.originalData.recipeOccurrences.forEach(occurrence => {
          total += occurrence.quantity || 0;
          if (!unit) unit = occurrence.unit || '';
        });

        return `${Math.round(total * 100) / 100} ${unit}`;
      },

      formatStock(ingredient) {
        if (!ingredient.trackingData?.stock?.effective?.length) return '0';
        
        let total = 0;
        let unit = '';
        
        ingredient.trackingData.stock.effective.forEach(stockItem => {
          total += stockItem.value || 0;
          if (!unit) unit = stockItem.unit || '';
        });

        return `${Math.round(total * 100) / 100} ${unit}`;
      },

      formatPurchases(ingredient) {
        if (!ingredient.trackingData?.purchases?.length) return '0';
        
        let total = 0;
        let unit = '';
        
        ingredient.trackingData.purchases.forEach(purchase => {
          total += purchase.value || 0;
          if (!unit) unit = purchase.unit || '';
        });

        return `${Math.round(total * 100) / 100} ${unit}`;
      },

      formatBalance(ingredient) {
        const totalNeed = this.calculateTotalNeed(ingredient);
        const totalStock = this.calculateTotalStock(ingredient);
        const totalPurchased = this.calculateTotalPurchased(ingredient);
        const balance = totalStock + totalPurchased - totalNeed;
        
        const unit = this.getMainUnit(ingredient);
        return `${Math.round(balance * 100) / 100} ${unit}`;
      },

      calculateTotalNeed(ingredient) {
        if (!ingredient.originalData?.recipeOccurrences?.length) return 0;
        return ingredient.originalData.recipeOccurrences.reduce((sum, occ) => sum + (occ.quantity || 0), 0);
      },

      calculateTotalStock(ingredient) {
        if (!ingredient.trackingData?.stock?.effective?.length) return 0;
        return ingredient.trackingData.stock.effective.reduce((sum, item) => sum + (item.value || 0), 0);
      },

      calculateTotalPurchased(ingredient) {
        if (!ingredient.trackingData?.purchases?.length) return 0;
        return ingredient.trackingData.purchases.reduce((sum, purchase) => sum + (purchase.value || 0), 0);
      },

      getMainUnit(ingredient) {
        if (!ingredient.originalData?.recipeOccurrences?.length) return '';
        return ingredient.originalData.recipeOccurrences[0].unit || '';
      },

      getBalanceClass(ingredient) {
        const totalNeed = this.calculateTotalNeed(ingredient);
        const totalStock = this.calculateTotalStock(ingredient);
        const totalPurchased = this.calculateTotalPurchased(ingredient);
        const balance = totalStock + totalPurchased - totalNeed;

        if (balance < 0) return 'quantity-negative';
        if (balance === 0) return 'quantity-neutral';
        return 'quantity-positive';
      },

      getStoresList(ingredient) {
        if (!ingredient.trackingData?.purchases?.length) return '-';
        const stores = [...new Set(
          ingredient.trackingData.purchases
            .map(p => p.store)
            .filter(store => store)
        )];
        return stores.join(', ') || '-';
      },

      getResponsibleList(ingredient) {
        if (!ingredient.trackingData?.purchases?.length) return '-';
        const people = [...new Set(
          ingredient.trackingData.purchases
            .map(p => p.who)
            .filter(who => who)
        )];
        return people.join(', ') || '-';
      }
    }
  };
}