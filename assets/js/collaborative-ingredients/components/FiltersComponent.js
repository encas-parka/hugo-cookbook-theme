/**
 * FiltersComponent.js
 * Composant Vue pour les filtres de recherche et de tri
 * de l'application collaborative d'ingrédients
 */

export const filtersTemplate = `
  <div class="row mb-4 filters-section">
    <div class="col-md-4">
      <div class="input-group">
        <span class="input-group-text">🔍</span>
        <input
          type="text"
          class="form-control"
          placeholder="Rechercher un ingrédient..."
          :value="searchQuery"
          @input="$emit('update:searchQuery', $event.target.value)"
        >
      </div>
    </div>

    <div class="col-md-3">
      <select 
        class="form-select" 
        :value="selectedTypeFilter"
        @change="$emit('update:selectedTypeFilter', $event.target.value)"
      >
        <option value="">Tous les types</option>
        <option v-for="type in availableTypes" :key="type" :value="type">
          {{ formatTypeShort(type) }}
        </option>
      </select>
    </div>

    <div class="col-md-3">
      <select 
        class="form-select"
        :value="selectedStatusFilter"
        @change="$emit('update:selectedStatusFilter', $event.target.value)"
      >
        <option value="">Tous les statuts</option>
        <option value="missing">Manquants</option>
        <option value="complete">Complets</option>
        <option value="partial">Partiels</option>
      </select>
    </div>

    <div class="col-md-2">
      <button class="btn btn-outline-secondary w-100" @click="$emit('clear')">
        🗑️ Effacer
      </button>
    </div>
  </div>
`;

export function createFiltersComponent() {
  return {
    name: 'CollaborativeFilters',
    template: filtersTemplate,
    emits: ['update:searchQuery', 'update:selectedTypeFilter', 'update:selectedStatusFilter', 'clear'],
    props: {
      searchQuery: {
        type: String,
        default: ''
      },
      selectedTypeFilter: {
        type: String,
        default: ''
      },
      selectedStatusFilter: {
        type: String,
        default: ''
      },
      availableTypes: {
        type: Array,
        default: () => []
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
      }
    }
  };
}