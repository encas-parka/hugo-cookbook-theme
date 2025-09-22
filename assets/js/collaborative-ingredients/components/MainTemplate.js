/**
 * MainTemplate.js
 * Template principal de l'application collaborative d'ingrédients
 * Séparé pour améliorer la maintenabilité
 */

export const mainTemplate = `
  <div>
    <!-- Indicateur de connexion temps réel -->
    <div class="realtime-indicator">
      <div class="badge" :class="realtimeStatus === 'connected' ? 'bg-success' : 'bg-warning'">
        <span v-if="realtimeStatus === 'connected'">🟢 Connecté</span>
        <span v-else-if="realtimeStatus === 'connecting'">🟡 Connexion...</span>
        <span v-else>🔴 Déconnecté</span>
      </div>
    </div>

    <!-- Barre de navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top navbar-collaborative">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          📋 Liste Collaborative
        </a>

        <div class="d-flex align-items-center">
          <!-- Boutons d'action -->
          <button
            class="btn btn-outline-light me-2"
            @click="createSnapshot"
            :disabled="isCreatingSnapshot"
            title="Créer un point de sauvegarde"
          >
            <span v-if="isCreatingSnapshot" class="spinner-border spinner-border-sm" role="status"></span>
            <span v-else>💾</span>
          </button>

          <!-- Gestionnaire d'historique -->
          <history-manager 
            v-if="historyManager"
            :historyManager="historyManager"
            class="me-3"
          ></history-manager>

          <div class="dropdown">
            <button class="btn btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown">
              ⚙️ Actions
            </button>
            <ul class="dropdown-menu">
              <li><button class="dropdown-item" @click="showSnapshotsModal = true">📁 Gérer les sauvegardes</button></li>
              <li><button class="dropdown-item" @click="exportList">📊 Exporter</button></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <!-- Contenu principal -->
    <div class="container-fluid py-4">
      <!-- Barre de filtres et recherche -->
      <collaborative-filters
        v-model:searchQuery="searchQuery"
        v-model:selectedTypeFilter="selectedTypeFilter"
        v-model:selectedStatusFilter="selectedStatusFilter"
        :availableTypes="availableTypes"
        @clear="clearFilters"
      ></collaborative-filters>

      <!-- Statistiques rapides -->
      <collaborative-stats
        :totalIngredients="totalIngredients"
        :missingIngredients="missingIngredients"
        :completeIngredients="completeIngredients"
        :modifiedIngredients="modifiedIngredients"
      ></collaborative-stats>

      <!-- Loading spinner -->
      <div v-if="isLoading" class="loading-spinner">
        <div class="text-center">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Chargement...</span>
          </div>
          <p class="mt-2">Chargement de la liste collaborative...</p>
        </div>
      </div>

      <!-- Message d'erreur -->
      <div v-else-if="error" class="alert alert-danger" role="alert">
        <h4 class="alert-heading">Erreur</h4>
        <p>{{ error }}</p>
        <button class="btn btn-outline-danger" @click="loadList">
          🔄 Réessayer
        </button>
      </div>

      <!-- Tableau des ingrédients -->
      <ingredients-table
        v-else
        :ingredients="filteredIngredients"
        :selectedIngredients="selectedIngredients"
        :selectAllChecked="selectAllChecked"
        :sortField="sortField"
        :sortDirection="sortDirection"
        @toggle-select-all="toggleSelectAll"
        @toggle-ingredient-status="toggleIngredientStatus"
        @edit-stock="editStock"
        @edit-purchases="editPurchases"
        @show-details="showIngredientDetails"
        @sort-by="sortBy"
        @ingredient-selected="updateSelectedIngredients"
      ></ingredients-table>

      <!-- Actions sur les éléments sélectionnés -->
      <selection-actions
        v-if="selectedIngredients.length > 0"
        :selectedCount="selectedIngredients.length"
        @merge="mergeSelectedIngredients"
        @clear="clearSelection"
      ></selection-actions>
    </div>

    <!-- Modals -->
    <purchase-modal
      v-if="showPurchaseModal && editingIngredient"
      :ingredient="editingIngredient"
      :modalType="modalType"
      @close="closePurchaseModal"
      @save="savePurchaseData"
    ></purchase-modal>

    <details-modal
      v-if="showDetailsModal && editingIngredient"
      :ingredient="editingIngredient"
      @close="closeDetailsModal"
      @open-purchase-modal="openPurchaseModalFromDetails"
      @open-stock-modal="openStockModalFromDetails"
      @toggle-status="toggleIngredientStatus(editingIngredient)"
    ></details-modal>

    <snapshots-modal
      v-if="showSnapshotsModal"
      @close="showSnapshotsModal = false"
      @create-snapshot="createSnapshot"
    ></snapshots-modal>
  </div>
`;