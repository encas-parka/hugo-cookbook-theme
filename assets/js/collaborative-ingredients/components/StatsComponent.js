/**
 * StatsComponent.js
 * Composant Vue pour afficher les statistiques rapides
 * de l'application collaborative d'ingrédients
 */

export const statsTemplate = `
  <div class="row mb-4 stats-cards">
    <div class="col-md-3">
      <div class="card text-center fade-in">
        <div class="card-body">
          <h5 class="card-title text-primary">{{ totalIngredients }}</h5>
          <p class="card-text small">Ingrédients totaux</p>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card text-center fade-in">
        <div class="card-body">
          <h5 class="card-title text-danger">{{ missingIngredients }}</h5>
          <p class="card-text small">Manquants</p>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card text-center fade-in">
        <div class="card-body">
          <h5 class="card-title text-success">{{ completeIngredients }}</h5>
          <p class="card-text small">Complets</p>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card text-center fade-in">
        <div class="card-body">
          <h5 class="card-title text-warning">{{ modifiedIngredients }}</h5>
          <p class="card-text small">Modifiés</p>
        </div>
      </div>
    </div>
  </div>
`;

export function createStatsComponent() {
  return {
    name: 'CollaborativeStats',
    template: statsTemplate,
    props: {
      totalIngredients: {
        type: Number,
        default: 0
      },
      missingIngredients: {
        type: Number,
        default: 0
      },
      completeIngredients: {
        type: Number,
        default: 0
      },
      modifiedIngredients: {
        type: Number,
        default: 0
      }
    }
  };
}