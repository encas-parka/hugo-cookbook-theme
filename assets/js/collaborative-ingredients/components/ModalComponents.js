/**
 * ModalComponents.js
 * Composants modaux complets pour l'édition des achats, stock et détails
 * de l'application collaborative d'ingrédients
 */

// Template pour le modal d'édition des achats
export const purchaseModalTemplate = `
  <div class="modal fade" id="purchaseModal" tabindex="-1" aria-labelledby="purchaseModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="purchaseModalLabel">
            📝 {{ modalType === 'purchase' ? 'Ajouter un achat' : 'Modifier le stock' }} - {{ ingredient?.ingredientName }}
          </h5>
          <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- Informations sur l'ingrédient -->
          <div class="alert alert-info mb-4">
            <div class="row">
              <div class="col-md-6">
                <strong>{{ ingredient?.ingredientName }}</strong>
                <br><small class="text-muted">{{ formatTypeShort(ingredient?.ingType) }}</small>
              </div>
              <div class="col-md-6 text-end">
                <div class="small">
                  <div><strong>Besoin total:</strong> {{ formatTotalNeed(ingredient) }}</div>
                  <div><strong>Balance:</strong> 
                    <span :class="getBalanceClass(ingredient)">{{ formatBalance(ingredient) }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Formulaire d'ajout -->
          <form @submit.prevent="submitForm">
            <!-- Type d'action -->
            <div class="row mb-3">
              <div class="col-md-12">
                <div class="btn-group w-100" role="group">
                  <input type="radio" class="btn-check" id="typePurchase" v-model="modalType" value="purchase">
                  <label class="btn btn-outline-success" for="typePurchase">🛒 Achat</label>
                  
                  <input type="radio" class="btn-check" id="typeStock" v-model="modalType" value="stock">
                  <label class="btn btn-outline-primary" for="typeStock">📦 Stock</label>
                </div>
              </div>
            </div>

            <!-- Quantité -->
            <div class="row mb-3">
              <div class="col-md-8">
                <label for="quantity" class="form-label">Quantité *</label>
                <input 
                  type="number" 
                  class="form-control" 
                  id="quantity" 
                  v-model.number="formData.quantity"
                  step="0.01"
                  min="0"
                  required
                  :placeholder="modalType === 'purchase' ? 'Quantité achetée' : 'Quantité en stock'"
                >
              </div>
              <div class="col-md-4">
                <label for="unit" class="form-label">Unité *</label>
                <select class="form-select" id="unit" v-model="formData.unit" required>
                  <option value="">-- Choisir --</option>
                  <option v-for="unit in suggestedUnits" :key="unit" :value="unit">{{ unit }}</option>
                </select>
              </div>
            </div>

            <!-- Champs spécifiques aux achats -->
            <div v-if="modalType === 'purchase'">
              <div class="row mb-3">
                <div class="col-md-6">
                  <label for="store" class="form-label">Magasin</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="store" 
                    v-model="formData.store"
                    placeholder="Nom du magasin"
                    list="storesList"
                  >
                  <datalist id="storesList">
                    <option v-for="store in commonStores" :key="store" :value="store">
                  </datalist>
                </div>
                <div class="col-md-6">
                  <label for="who" class="form-label">Qui</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    id="who" 
                    v-model="formData.who"
                    placeholder="Nom de la personne"
                    list="peopleList"
                  >
                  <datalist id="peopleList">
                    <option v-for="person in commonPeople" :key="person" :value="person">
                  </datalist>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-md-6">
                  <label for="price" class="form-label">Prix (optionnel)</label>
                  <div class="input-group">
                    <input 
                      type="number" 
                      class="form-control" 
                      id="price" 
                      v-model.number="formData.price"
                      step="0.01"
                      min="0"
                      placeholder="0.00"
                    >
                    <span class="input-group-text">€</span>
                  </div>
                </div>
                <div class="col-md-6">
                  <label for="date" class="form-label">Date d'achat</label>
                  <input 
                    type="date" 
                    class="form-control" 
                    id="date" 
                    v-model="formData.date"
                  >
                </div>
              </div>
            </div>

            <!-- Notes optionnelles -->
            <div class="mb-3">
              <label for="notes" class="form-label">Notes (optionnel)</label>
              <textarea 
                class="form-control" 
                id="notes" 
                v-model="formData.notes"
                rows="2"
                :placeholder="modalType === 'purchase' ? 'Notes sur cet achat...' : 'Notes sur ce stock...'"
              ></textarea>
            </div>

            <!-- Prévisualisation -->
            <div class="alert alert-light border">
              <h6>Prévisualisation :</h6>
              <div class="row">
                <div class="col-md-6">
                  <strong>{{ modalType === 'purchase' ? 'Nouvel achat' : 'Stock ajouté' }}:</strong>
                  {{ formData.quantity || 0 }} {{ formData.unit || '?' }}
                </div>
                <div class="col-md-6">
                  <strong>Nouvelle balance:</strong>
                  <span :class="getNewBalanceClass()">{{ calculateNewBalance() }}</span>
                </div>
              </div>
            </div>

            <!-- Boutons d'action -->
            <div class="row">
              <div class="col-md-6">
                <button type="button" class="btn btn-secondary w-100" @click="closeModal">
                  Annuler
                </button>
              </div>
              <div class="col-md-6">
                <button type="submit" class="btn btn-primary w-100" :disabled="!isFormValid || isSaving">
                  <span v-if="isSaving" class="spinner-border spinner-border-sm me-2" role="status"></span>
                  {{ modalType === 'purchase' ? '🛒 Ajouter l\'achat' : '📦 Mettre à jour le stock' }}
                </button>
              </div>
            </div>
          </form>

          <!-- Historique existant -->
          <hr class="my-4">
          <div class="existing-entries">
            <h6>{{ modalType === 'purchase' ? 'Achats existants' : 'Stock actuel' }}</h6>
            <div v-if="existingEntries.length === 0" class="text-muted small">
              {{ modalType === 'purchase' ? 'Aucun achat enregistré' : 'Aucun stock enregistré' }}
            </div>
            <div v-else class="table-responsive">
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th>Quantité</th>
                    <th v-if="modalType === 'purchase'">Magasin</th>
                    <th v-if="modalType === 'purchase'">Qui</th>
                    <th v-if="modalType === 'purchase'">Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(entry, index) in existingEntries" :key="entry.id || index">
                    <td>{{ entry.value }} {{ entry.unit }}</td>
                    <td v-if="modalType === 'purchase'">{{ entry.store || '-' }}</td>
                    <td v-if="modalType === 'purchase'">{{ entry.who || '-' }}</td>
                    <td v-if="modalType === 'purchase'">{{ formatDate(entry.date) }}</td>
                    <td>
                      <button 
                        type="button" 
                        class="btn btn-sm btn-outline-danger"
                        @click="removeEntry(index)"
                        :disabled="isSaving"
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

// Template pour le modal des détails d'ingrédient
export const detailsModalTemplate = `
  <div class="modal fade" id="detailsModal" tabindex="-1" aria-labelledby="detailsModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="detailsModalLabel">
            📊 Détails complets - {{ ingredient?.ingredientName }}
          </h5>
          <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <!-- Informations générales -->
            <div class="col-md-4">
              <div class="card h-100">
                <div class="card-header">
                  <h6 class="card-title mb-0">🏷️ Informations générales</h6>
                </div>
                <div class="card-body">
                  <p><strong>Nom:</strong> {{ ingredient?.ingredientName }}</p>
                  <p><strong>Type:</strong> {{ formatTypeShort(ingredient?.ingType) }}</p>
                  <p><strong>Statut:</strong> 
                    <span class="badge" :class="ingredient?.trackingData?.status?.ok ? 'bg-success' : 'bg-warning'">
                      {{ ingredient?.trackingData?.status?.ok ? '✅ Complet' : '⏳ En cours' }}
                    </span>
                  </p>
                  <p><strong>Modifié:</strong> 
                    <span class="badge" :class="ingredient?.isModified ? 'bg-info' : 'bg-light text-dark'">
                      {{ ingredient?.isModified ? '✏️ Oui' : '📝 Non' }}
                    </span>
                  </p>
                  <p v-if="ingredient?.isMerged"><strong>Fusionné:</strong>
                    <span class="badge bg-secondary">🔗 {{ ingredient?.trackingData?.mergedWith?.length || 0 }} autre(s)</span>
                  </p>
                </div>
              </div>
            </div>

            <!-- Calculs et balance -->
            <div class="col-md-4">
              <div class="card h-100">
                <div class="card-header">
                  <h6 class="card-title mb-0">📈 Calculs</h6>
                </div>
                <div class="card-body">
                  <div class="mb-2">
                    <strong>Besoin total:</strong><br>
                    <span class="text-primary">{{ formatTotalNeed(ingredient) }}</span>
                  </div>
                  <div class="mb-2">
                    <strong>Stock disponible:</strong><br>
                    <span class="text-info">{{ formatStock(ingredient) }}</span>
                  </div>
                  <div class="mb-2">
                    <strong>Quantité achetée:</strong><br>
                    <span class="text-success">{{ formatPurchases(ingredient) }}</span>
                  </div>
                  <hr>
                  <div class="mb-2">
                    <strong>Balance finale:</strong><br>
                    <span :class="getBalanceClass(ingredient)" class="fs-5">{{ formatBalance(ingredient) }}</span>
                  </div>
                  <div class="progress" style="height: 10px;">
                    <div 
                      class="progress-bar" 
                      :class="getBalanceProgressClass(ingredient)"
                      :style="{width: getBalancePercentage(ingredient) + '%'}"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Actions rapides -->
            <div class="col-md-4">
              <div class="card h-100">
                <div class="card-header">
                  <h6 class="card-title mb-0">⚡ Actions rapides</h6>
                </div>
                <div class="card-body d-grid gap-2">
                  <button class="btn btn-success" @click="openPurchaseModal">
                    🛒 Ajouter un achat
                  </button>
                  <button class="btn btn-primary" @click="openStockModal">
                    📦 Modifier le stock
                  </button>
                  <button 
                    class="btn btn-outline-warning" 
                    @click="toggleStatus"
                    :disabled="isTogglingStatus"
                  >
                    <span v-if="isTogglingStatus" class="spinner-border spinner-border-sm me-2"></span>
                    {{ ingredient?.trackingData?.status?.ok ? '⏳ Marquer incomplet' : '✅ Marquer complet' }}
                  </button>
                  <hr>
                  <button class="btn btn-outline-secondary btn-sm" @click="exportIngredientData">
                    📄 Exporter les données
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Onglets pour les détails -->
          <div class="mt-4">
            <ul class="nav nav-tabs" id="detailsTabs" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="recipes-tab" data-bs-toggle="tab" data-bs-target="#recipes" type="button" role="tab">
                  🍽️ Recettes ({{ ingredient?.originalData?.recipeOccurrences?.length || 0 }})
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="purchases-tab" data-bs-toggle="tab" data-bs-target="#purchases" type="button" role="tab">
                  🛒 Achats ({{ ingredient?.trackingData?.purchases?.length || 0 }})
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="stock-tab" data-bs-toggle="tab" data-bs-target="#stock" type="button" role="tab">
                  📦 Stock ({{ ingredient?.trackingData?.stock?.effective?.length || 0 }})
                </button>
              </li>
            </ul>
            <div class="tab-content" id="detailsTabsContent">
              <!-- Onglet Recettes -->
              <div class="tab-pane fade show active" id="recipes" role="tabpanel">
                <div class="table-responsive mt-3">
                  <table class="table table-striped table-sm">
                    <thead>
                      <tr>
                        <th>Recette</th>
                        <th>Quantité</th>
                        <th>Date service</th>
                        <th>Horaire</th>
                        <th>Type plat</th>
                        <th>Assiettes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-if="!ingredient?.originalData?.recipeOccurrences?.length">
                        <td colspan="6" class="text-muted text-center">Aucune recette trouvée</td>
                      </tr>
                      <tr v-for="recipe in ingredient?.originalData?.recipeOccurrences" :key="recipe.recipeName + recipe.dateService">
                        <td><strong>{{ recipe.recipeName }}</strong></td>
                        <td>{{ recipe.quantity }} {{ recipe.unit }}</td>
                        <td>{{ formatDate(recipe.dateService) }}</td>
                        <td>{{ recipe.horaire || '-' }}</td>
                        <td>{{ recipe.typePlat || '-' }}</td>
                        <td>{{ recipe.assiettes || '-' }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Onglet Achats -->
              <div class="tab-pane fade" id="purchases" role="tabpanel">
                <div class="table-responsive mt-3">
                  <table class="table table-striped table-sm">
                    <thead>
                      <tr>
                        <th>Quantité</th>
                        <th>Magasin</th>
                        <th>Qui</th>
                        <th>Date</th>
                        <th>Prix</th>
                        <th>Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-if="!ingredient?.trackingData?.purchases?.length">
                        <td colspan="6" class="text-muted text-center">Aucun achat enregistré</td>
                      </tr>
                      <tr v-for="purchase in ingredient?.trackingData?.purchases" :key="purchase.id">
                        <td><strong>{{ purchase.value }} {{ purchase.unit }}</strong></td>
                        <td>{{ purchase.store || '-' }}</td>
                        <td>{{ purchase.who || '-' }}</td>
                        <td>{{ formatDate(purchase.date) }}</td>
                        <td>{{ purchase.price ? purchase.price + ' €' : '-' }}</td>
                        <td>{{ purchase.notes || '-' }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Onglet Stock -->
              <div class="tab-pane fade" id="stock" role="tabpanel">
                <div class="table-responsive mt-3">
                  <table class="table table-striped table-sm">
                    <thead>
                      <tr>
                        <th>Quantité</th>
                        <th>Notes</th>
                        <th>Dernière mise à jour</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-if="!ingredient?.trackingData?.stock?.effective?.length">
                        <td colspan="3" class="text-muted text-center">Aucun stock enregistré</td>
                      </tr>
                      <tr v-for="stock in ingredient?.trackingData?.stock?.effective" :key="stock.id || Math.random()">
                        <td><strong>{{ stock.value }} {{ stock.unit }}</strong></td>
                        <td>{{ stock.notes || '-' }}</td>
                        <td>{{ formatDate(stock.updatedAt) || 'N/A' }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

// Template pour le modal de gestion des snapshots
export const snapshotsModalTemplate = `
  <div class="modal fade" id="snapshotsModal" tabindex="-1" aria-labelledby="snapshotsModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="snapshotsModalLabel">
            💾 Gestion des sauvegardes
          </h5>
          <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- Actions rapides -->
          <div class="row mb-4">
            <div class="col-md-6">
              <button 
                class="btn btn-primary w-100" 
                @click="createSnapshot"
                :disabled="isCreatingSnapshot"
              >
                <span v-if="isCreatingSnapshot" class="spinner-border spinner-border-sm me-2"></span>
                💾 Créer un point de sauvegarde
              </button>
            </div>
            <div class="col-md-6">
              <button class="btn btn-outline-secondary w-100" @click="refreshSnapshots">
                🔄 Actualiser la liste
              </button>
            </div>
          </div>

          <!-- Liste des snapshots -->
          <div v-if="isLoadingSnapshots" class="text-center py-4">
            <div class="spinner-border" role="status"></div>
            <p class="mt-2">Chargement des sauvegardes...</p>
          </div>

          <div v-else-if="snapshots.length === 0" class="alert alert-info">
            <h6>Aucune sauvegarde trouvée</h6>
            <p class="mb-0">Créez votre première sauvegarde pour pouvoir restaurer votre liste plus tard.</p>
          </div>

          <div v-else>
            <h6>Sauvegardes disponibles ({{ snapshots.length }})</h6>
            <div class="table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>Date de création</th>
                    <th>Description</th>
                    <th>Créé par</th>
                    <th>Ingrédients</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="snapshot in snapshots" :key="snapshot.$id">
                    <td>
                      <strong>{{ formatDate(snapshot.$createdAt) }}</strong>
                      <br><small class="text-muted">{{ formatTime(snapshot.$createdAt) }}</small>
                    </td>
                    <td>{{ snapshot.description }}</td>
                    <td>{{ snapshot.createdBy }}</td>
                    <td>
                      <span class="badge bg-info">{{ getSnapshotIngredientCount(snapshot) }}</span>
                    </td>
                    <td>
                      <div class="btn-group btn-group-sm" role="group">
                        <button 
                          class="btn btn-outline-primary" 
                          @click="previewSnapshot(snapshot)"
                          title="Prévisualiser"
                        >
                          👁️
                        </button>
                        <button 
                          class="btn btn-outline-success" 
                          @click="restoreSnapshot(snapshot)"
                          :disabled="isRestoring === snapshot.$id"
                          title="Restaurer"
                        >
                          <span v-if="isRestoring === snapshot.$id" class="spinner-border spinner-border-sm"></span>
                          <span v-else>📥</span>
                        </button>
                        <button 
                          class="btn btn-outline-danger" 
                          @click="deleteSnapshot(snapshot)"
                          :disabled="isDeleting === snapshot.$id"
                          title="Supprimer"
                        >
                          <span v-if="isDeleting === snapshot.$id" class="spinner-border spinner-border-sm"></span>
                          <span v-else>🗑️</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- Information sur la politique de rétention -->
          <div class="alert alert-light mt-4">
            <small>
              <strong>ℹ️ Politique de rétention:</strong>
              Les sauvegardes sont conservées pendant 90 jours maximum.
              Seules les 15 dernières sauvegardes sont conservées par liste.
              Créez régulièrement des sauvegardes avant les modifications importantes.
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

// Factory function pour créer le composant PurchaseModal
export function createPurchaseModalComponent(unitsManager) {
  return {
    name: 'PurchaseModal',
    template: purchaseModalTemplate,
    props: {
      ingredient: Object,
      modalType: {
        type: String,
        default: 'purchase' // 'purchase' ou 'stock'
      }
    },
    emits: ['close', 'save'],
    data() {
      return {
        formData: {
          quantity: null,
          unit: '',
          store: '',
          who: '',
          price: null,
          date: new Date().toISOString().split('T')[0],
          notes: ''
        },
        isSaving: false,
        unitsManager
      };
    },
    computed: {
      isFormValid() {
        return this.formData.quantity > 0 && this.formData.unit;
      },
      
      suggestedUnits() {
        if (!this.ingredient) return ['gr.', 'kg', 'ml', 'l.', 'unité'];
        return this.unitsManager.getSuggestedUnits(this.ingredient.ingType);
      },

      existingEntries() {
        if (!this.ingredient) return [];
        if (this.modalType === 'purchase') {
          return this.ingredient.trackingData?.purchases || [];
        } else {
          return this.ingredient.trackingData?.stock?.effective || [];
        }
      },

      commonStores() {
        // TODO: Récupérer depuis les données existantes ou configuration
        return ['Monoprix', 'Carrefour', 'Leclerc', 'Biocoop', 'Marché local'];
      },

      commonPeople() {
        // TODO: Récupérer depuis les données existantes ou configuration
        return ['Alice', 'Bob', 'Charlie', 'Diana'];
      }
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },

      async submitForm() {
        if (!this.isFormValid || this.isSaving) return;

        this.isSaving = true;
        try {
          const newEntry = {
            id: 'entry_' + Date.now(),
            value: this.formData.quantity,
            unit: this.formData.unit,
            date: this.modalType === 'purchase' ? this.formData.date : new Date().toISOString(),
            updatedAt: new Date().toISOString()
          };

          if (this.modalType === 'purchase') {
            Object.assign(newEntry, {
              store: this.formData.store,
              who: this.formData.who,
              price: this.formData.price,
              notes: this.formData.notes
            });
          } else {
            newEntry.notes = this.formData.notes;
          }

          this.$emit('save', {
            type: this.modalType,
            entry: newEntry
          });

          // Reset form
          this.resetForm();
        } catch (error) {
          console.error('Erreur lors de la sauvegarde:', error);
          alert('Erreur lors de la sauvegarde. Veuillez réessayer.');
        } finally {
          this.isSaving = false;
        }
      },

      resetForm() {
        this.formData = {
          quantity: null,
          unit: '',
          store: '',
          who: '',
          price: null,
          date: new Date().toISOString().split('T')[0],
          notes: ''
        };
      },

      removeEntry(index) {
        this.$emit('save', {
          type: this.modalType === 'purchase' ? 'remove-purchase' : 'remove-stock',
          index: index
        });
      },

      formatDate(dateStr) {
        if (!dateStr) return '-';
        return new Date(dateStr).toLocaleDateString('fr-FR');
      },

      // Méthodes de formatage héritées du composant parent
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

      formatTotalNeed() {
        // TODO: Implémenter le calcul complet avec unitsManager
        return '1 kg'; // Placeholder
      },

      formatBalance() {
        // TODO: Implémenter le calcul complet avec unitsManager
        return '-500 gr.'; // Placeholder
      },

      getBalanceClass() {
        return 'quantity-negative'; // Placeholder
      },

      calculateNewBalance() {
        // TODO: Implémenter le calcul avec la nouvelle quantité
        return '0 gr.'; // Placeholder
      },

      getNewBalanceClass() {
        return 'quantity-neutral'; // Placeholder
      }
    }
  };
}

// Factory function pour créer le composant DetailsModal
export function createDetailsModalComponent(unitsManager) {
  return {
    name: 'DetailsModal',
    template: detailsModalTemplate,
    props: {
      ingredient: Object
    },
    emits: ['close', 'open-purchase-modal', 'open-stock-modal', 'toggle-status'],
    data() {
      return {
        isTogglingStatus: false,
        unitsManager
      };
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },

      openPurchaseModal() {
        this.$emit('open-purchase-modal');
      },

      openStockModal() {
        this.$emit('open-stock-modal');
      },

      async toggleStatus() {
        this.isTogglingStatus = true;
        try {
          this.$emit('toggle-status');
        } finally {
          this.isTogglingStatus = false;
        }
      },

      exportIngredientData() {
        const data = {
          ingredient: this.ingredient,
          exportedAt: new Date().toISOString(),
          calculations: {
            totalNeed: this.formatTotalNeed(this.ingredient),
            stock: this.formatStock(this.ingredient),
            purchases: this.formatPurchases(this.ingredient),
            balance: this.formatBalance(this.ingredient)
          }
        };

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `ingredient-${this.ingredient.ingredientName}-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      },

      formatDate(dateStr) {
        if (!dateStr) return '-';
        return new Date(dateStr).toLocaleDateString('fr-FR');
      },

      formatTime(dateStr) {
        if (!dateStr) return '-';
        return new Date(dateStr).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
      },

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
        if (!ingredient?.originalData?.recipeOccurrences?.length) return '0';
        const quantities = ingredient.originalData.recipeOccurrences.map(occurrence => ({
          value: occurrence.quantity || 0,
          unit: occurrence.unit || '',
          ingredientName: ingredient.ingredientName
        }));
        const consolidated = this.unitsManager.consolidateQuantities(quantities);
        return consolidated.length > 0 ? consolidated.map(item => item.formatted).join(' + ') : '0';
      },

      formatStock(ingredient) {
        if (!ingredient?.trackingData?.stock?.effective?.length) return '0';
        const quantities = ingredient.trackingData.stock.effective.map(stockItem => ({
          value: stockItem.value || 0,
          unit: stockItem.unit || '',
          ingredientName: ingredient.ingredientName
        }));
        const consolidated = this.unitsManager.consolidateQuantities(quantities);
        return consolidated.length > 0 ? consolidated.map(item => item.formatted).join(' + ') : '0';
      },

      formatPurchases(ingredient) {
        if (!ingredient?.trackingData?.purchases?.length) return '0';
        const quantities = ingredient.trackingData.purchases.map(purchase => ({
          value: purchase.value || 0,
          unit: purchase.unit || '',
          ingredientName: ingredient.ingredientName
        }));
        const consolidated = this.unitsManager.consolidateQuantities(quantities);
        return consolidated.length > 0 ? consolidated.map(item => item.formatted).join(' + ') : '0';
      },

      formatBalance(ingredient) {
        const totalNeed = this.calculateTotalNeed(ingredient);
        const totalStock = this.calculateTotalStock(ingredient);
        const totalPurchased = this.calculateTotalPurchased(ingredient);
        const balance = totalStock + totalPurchased - totalNeed;
        const unit = this.getMainUnit(ingredient);
        return `${this.unitsManager.roundToAppropriateDecimals(balance, unit)} ${unit}`;
      },

      calculateTotalNeed(ingredient) {
        if (!ingredient?.originalData?.recipeOccurrences?.length) return 0;
        const quantities = ingredient.originalData.recipeOccurrences.map(occurrence => ({
          value: occurrence.quantity || 0,
          unit: occurrence.unit || '',
          ingredientName: ingredient.ingredientName
        }));
        const consolidated = this.unitsManager.consolidateQuantities(quantities);
        return consolidated.length > 0 ? consolidated[0].value : 0;
      },

      calculateTotalStock(ingredient) {
        if (!ingredient?.trackingData?.stock?.effective?.length) return 0;
        const quantities = ingredient.trackingData.stock.effective.map(stockItem => ({
          value: stockItem.value || 0,
          unit: stockItem.unit || '',
          ingredientName: ingredient.ingredientName
        }));
        const consolidated = this.unitsManager.consolidateQuantities(quantities);
        return consolidated.length > 0 ? consolidated[0].value : 0;
      },

      calculateTotalPurchased(ingredient) {
        if (!ingredient?.trackingData?.purchases?.length) return 0;
        const quantities = ingredient.trackingData.purchases.map(purchase => ({
          value: purchase.value || 0,
          unit: purchase.unit || '',
          ingredientName: ingredient.ingredientName
        }));
        const consolidated = this.unitsManager.consolidateQuantities(quantities);
        return consolidated.length > 0 ? consolidated[0].value : 0;
      },

      getMainUnit(ingredient) {
        if (!ingredient?.originalData?.recipeOccurrences?.length) return '';
        return ingredient.originalData.recipeOccurrences[0].unit || '';
      },

      getBalanceClass(ingredient) {
        const totalNeed = this.calculateTotalNeed(ingredient);
        const totalStock = this.calculateTotalStock(ingredient);
        const totalPurchased = this.calculateTotalPurchased(ingredient);
        const balance = totalStock + totalPurchased - totalNeed;

        if (balance < 0) return 'text-danger fw-bold';
        if (balance === 0) return 'text-warning fw-bold';
        return 'text-success fw-bold';
      },

      getBalancePercentage(ingredient) {
        const totalNeed = this.calculateTotalNeed(ingredient);
        if (totalNeed === 0) return 100;
        
        const totalStock = this.calculateTotalStock(ingredient);
        const totalPurchased = this.calculateTotalPurchased(ingredient);
        const available = totalStock + totalPurchased;
        
        return Math.min(100, Math.max(0, (available / totalNeed) * 100));
      },

      getBalanceProgressClass(ingredient) {
        const percentage = this.getBalancePercentage(ingredient);
        if (percentage >= 100) return 'bg-success';
        if (percentage >= 50) return 'bg-warning';
        return 'bg-danger';
      }
    }
  };
}

// Factory function pour créer le composant SnapshotsModal
export function createSnapshotsModalComponent() {
  return {
    name: 'SnapshotsModal',
    template: snapshotsModalTemplate,
    emits: ['close', 'create-snapshot'],
    data() {
      return {
        snapshots: [],
        isLoadingSnapshots: false,
        isCreatingSnapshot: false,
        isRestoring: null,
        isDeleting: null
      };
    },
    async mounted() {
      await this.loadSnapshots();
    },
    methods: {
      closeModal() {
        this.$emit('close');
      },

      async createSnapshot() {
        this.isCreatingSnapshot = true;
        try {
          this.$emit('create-snapshot');
          await this.loadSnapshots(); // Recharger la liste
        } finally {
          this.isCreatingSnapshot = false;
        }
      },

      async loadSnapshots() {
        this.isLoadingSnapshots = true;
        try {
          // TODO: Implémenter le chargement des snapshots depuis Appwrite
          await new Promise(resolve => setTimeout(resolve, 1000)); // Simulation
          this.snapshots = []; // Placeholder
        } catch (error) {
          console.error('Erreur lors du chargement des snapshots:', error);
        } finally {
          this.isLoadingSnapshots = false;
        }
      },

      async refreshSnapshots() {
        await this.loadSnapshots();
      },

      previewSnapshot(snapshot) {
        // TODO: Implémenter la prévisualisation
        console.log('Prévisualiser snapshot:', snapshot);
      },

      async restoreSnapshot(snapshot) {
        if (!confirm(`Êtes-vous sûr de vouloir restaurer la sauvegarde du ${this.formatDate(snapshot.$createdAt)} ?`)) {
          return;
        }

        this.isRestoring = snapshot.$id;
        try {
          // TODO: Implémenter la restauration
          console.log('Restaurer snapshot:', snapshot);
        } catch (error) {
          console.error('Erreur lors de la restauration:', error);
          alert('Erreur lors de la restauration. Veuillez réessayer.');
        } finally {
          this.isRestoring = null;
        }
      },

      async deleteSnapshot(snapshot) {
        if (!confirm(`Êtes-vous sûr de vouloir supprimer définitivement la sauvegarde du ${this.formatDate(snapshot.$createdAt)} ?`)) {
          return;
        }

        this.isDeleting = snapshot.$id;
        try {
          // TODO: Implémenter la suppression
          console.log('Supprimer snapshot:', snapshot);
          await this.loadSnapshots(); // Recharger la liste
        } catch (error) {
          console.error('Erreur lors de la suppression:', error);
          alert('Erreur lors de la suppression. Veuillez réessayer.');
        } finally {
          this.isDeleting = null;
        }
      },

      formatDate(dateStr) {
        if (!dateStr) return '-';
        return new Date(dateStr).toLocaleDateString('fr-FR');
      },

      formatTime(dateStr) {
        if (!dateStr) return '-';
        return new Date(dateStr).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
      },

      getSnapshotIngredientCount(snapshot) {
        try {
          const data = JSON.parse(snapshot.snapshotData);
          return data.ingredients?.length || 0;
        } catch {
          return 0;
        }
      }
    }
  };
}