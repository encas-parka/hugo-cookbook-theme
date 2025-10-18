<script lang="ts">
  // Composant de test pour vérifier si DaisyUI génère automatiquement
  // les classes pour la couleur personnalisée "lavender"
</script>

<div class="p-6 space-y-6 bg-base-100 rounded-lg shadow-lg">
  <h2 class="text-2xl font-bold text-base-content mb-2">Test de Couleur Personnalisée DaisyUI - Lavender</h2>
  <p class="text-sm text-base-content/70 mb-6">Vérification si DaisyUI génère automatiquement les classes pour la couleur personnalisée.</p>

  <!-- Test de badges -->
  <div class="space-y-4">
    <h3 class="text-lg font-semibold text-base-content">Badges Test</h3>
    <div class="flex flex-wrap gap-2">
      <span class="badge badge-lavender">Lavender2</span>
      <span class="badge badge-lavender badge-outline">Outline</span>
      <span class="badge badge-lavender badge-ghost">Ghost</span>
      <span class="badge badge-lavender badge-soft">soft</span>
    </div>
  </div>

  <!-- Test de boutons -->
  <div class="space-y-4">
    <h3 class="text-lg font-semibold text-base-content">Buttons Test</h3>
    <div class="flex flex-wrap gap-2">
      <button class="btn btn-lavender">Lavender</button>
      <button class="btn btn-lavender btn-outline">Outline</button>
      <button class="btn btn-lavender btn-ghost">Ghost</button>
      <button class="btn btn-lavender btn-active">Active</button>
      <button class="btn btn-lavender btn-disabled">Disabled</button>
    </div>
  </div>

  <!-- Test de classes utilitaires -->
  <div class="space-y-4">
    <h3 class="text-lg font-semibold text-base-content">Utility Classes Test</h3>
    <div class="space-y-2">
      <div class="p-4 bg-lavender text-lavender-content rounded">Background lavender</div>
      <div class="p-4 bg-lavender/10 text-lavender-content rounded">Background lavender/10</div>
      <div class="p-4 border-2 border-lavender text-lavender-content rounded">Border lavender</div>
      <div class="p-4 text-lavender-content rounded">Text lavender-content</div>
    </div>
  </div>

  <!-- Test de classes étendues -->
  <div class="space-y-4">
    <h3 class="text-lg font-semibold text-base-content">Extended Classes Test</h3>
    <div class="space-y-2">
      <div class="p-4 bg-gradient-to-r from-lavender to-primary rounded">from-lavender gradient</div>
      <div class="p-4 ring-2 ring-lavender rounded">ring-lavender</div>
      <div class="p-4 fill-lavender rounded">fill-lavender</div>
      <div class="p-4 stroke-lavender rounded">stroke-lavender</div>
      <div class="p-4 shadow-lg shadow-lavender/25 rounded">shadow-lavender</div>
    </div>
  </div>

  <!-- Test de classes d'état -->
  <div class="space-y-4">
    <h3 class="text-lg font-semibold text-base-content">State Classes Test</h3>
    <div class="flex flex-wrap gap-2">
      <input type="checkbox" class="checkbox checkbox-lavender" checked />
      <input type="radio" name="test" class="radio radio-lavender" checked />
      <input type="range" class="range range-lavender" />
      <div class="alert alert-lavender">
        <svg class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>Alert lavender</span>
      </div>
      <div class="toast toast-lavender">
        <div class="alert alert-info">
          <span>Toast lavender</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Résultat du test -->
  <div class="alert alert-info mt-6">
    <svg class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    <div>
      <h3 class="font-bold">Résultat du Test</h3>
      <div class="text-xs">
        Si les éléments ci-dessus s'affichent correctement avec la couleur lavender,
        alors DaisyUI génère automatiquement les classes pour les couleurs personnalisées !
        Si les éléments s'affichent avec des styles par défaut, il faudra peut-être
        ajouter des variables CSS supplémentaires ou définir la couleur différemment.
      </div>
    </div>
  </div>
</div>
