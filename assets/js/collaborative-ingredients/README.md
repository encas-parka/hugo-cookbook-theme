# Application Collaborative d'Ingrédients

## Vue d'ensemble

L'application collaborative d'ingrédients permet de transformer les listes d'ingrédients statiques générées par Hugo en tableaux de bord interactifs et collaboratifs. Les utilisateurs peuvent suivre les achats, gérer le stock, et collaborer en temps réel sur leurs listes d'ingrédients.

## Architecture

### Fichiers principaux

- **`app.js`** : Application Vue.js principale avec toute la logique métier
- **`bootstrap.js`** : Point d'entrée qui initialise l'application et gère la configuration
- **`UnitsManager.js`** : Module de gestion et conversion des unités (poids, volumes, etc.)
- **`collaborative-ingredients.scss`** : Styles CSS spécifiques à l'application

### Layout Hugo

- **`layouts/_default/collaborative-ingredients.html`** : Layout Hugo qui charge l'application Vue.js

## Fonctionnalités

### ✅ Implémentées

1. **Interface utilisateur complète**
   - Tableau interactif avec tri et filtrage
   - Recherche par nom d'ingrédient
   - Filtres par type et statut
   - Statistiques en temps réel

2. **Gestion des ingrédients**
   - Affichage des besoins totaux calculés
   - Suivi du stock disponible
   - Enregistrement des achats
   - Calcul automatique du manque

3. **Conversion d'unités**
   - Support des unités de poids (gr, kg)
   - Support des unités de volume (ml, l)
   - Conversions contextuelles (ex: 1 c. à soupe de miel = 30 gr)
   - Consolidation automatique des quantités

4. **Synchronisation Appwrite**
   - Connexion à la base de données Appwrite
   - Chargement et sauvegarde des données
   - Gestion des erreurs de connexion

### 🚧 En cours d'implémentation

1. **Temps réel**
   - Configuration de base présente
   - Nécessite tests et validation

2. **Modals d'édition**
   - Structure HTML présente
   - Logique métier à compléter

### 📋 À implémenter

1. **Système de snapshots**
   - Sauvegarde de points de restauration
   - Gestion de l'historique (15 snapshots max, 90 jours)

2. **Fonctionnalités avancées**
   - Fusion d'ingrédients
   - Système undo/redo
   - Export des listes

## Configuration

### Variables d'environnement Appwrite

L'application utilise la configuration Appwrite définie dans `hugo.yml` :

```yaml
params:
  appwrite:
    endpoint: "https://cloud.appwrite.io/v1"
    projectId: "6742b5d300099026c7fa"
    databaseId: "689d15b10003a5a13636"
```

### Collections Appwrite requises

1. **`ingredient_lists`** (métadonnées des listes)
   - `eventId` (string) : ID de l'événement
   - `name` (string) : Nom de la liste
   - `createdBy` (string) : Créateur de la liste
   - `isActive` (boolean) : Liste active ou non

2. **`ingredients`** (données des ingrédients)
   - `listId` (string) : ID de la liste parente
   - `ingredientName` (string) : Nom de l'ingrédient
   - `ingType` (string) : Type d'ingrédient
   - `isModified` (boolean) : Ingrédient modifié par l'utilisateur
   - `isMerged` (boolean) : Ingrédient fusionné
   - `originalData` (string/JSON) : Données originales des recettes
   - `trackingData` (string/JSON) : Données de suivi (achats, stock, statut)

3. **`list_snapshots`** (sauvegardes)
   - `listId` (string) : ID de la liste
   - `snapshotData` (string/JSON) : Données de la sauvegarde
   - `createdBy` (string) : Créateur du snapshot
   - `description` (string) : Description du snapshot

## Utilisation

### 1. Depuis une page d'événement

Sur les pages `single.ingredients.html`, un bouton "Créer une liste modifiable" permet de :

1. Transformer les données Hugo en format Appwrite
2. Créer une nouvelle liste collaborative
3. Rediriger vers l'application

```javascript
// La fonction est exposée automatiquement dans l'app Vue
@click="createCollaborativeList"
```

### 2. Accès direct

L'application est accessible directement via :
```
/app/ingredients-collaborative/demo/
```

### 3. Intégration dans un layout personnalisé

```html
---
layout: "collaborative-ingredients"
listId: "mon_id_de_liste"
---
```

## Structure des données

### Format des ingrédients

```json
{
  "ingredientName": "Tomates",
  "ingType": "legumesFrais",
  "isModified": false,
  "isMerged": false,
  "originalData": {
    "recipeOccurrences": [
      {
        "recipeName": "Salade méditerranéenne",
        "quantity": 500,
        "unit": "gr.",
        "dateService": "2024-01-15",
        "horaire": "midi",
        "typePlat": "entrée",
        "assiettes": 50
      }
    ]
  },
  "trackingData": {
    "purchases": [
      {
        "id": "uuid_achat",
        "value": 300,
        "unit": "gr.",
        "store": "Marché local",
        "who": "Alice",
        "date": "2024-01-15T10:00:00Z"
      }
    ],
    "stock": {
      "effective": [
        { "value": 200, "unit": "gr." }
      ]
    },
    "status": {
      "ok": false
    },
    "mergedWith": []
  }
}
```

## Gestion des unités

Le `UnitsManager` gère automatiquement :

### Conversions de base
- **Poids** : gr ↔ kg
- **Volume** : ml ↔ l
- **Culinaire** : c. à café, c. à soupe, tasse, verre

### Conversions contextuelles
- Miel : 1 c. à soupe = 30 gr
- Sucre : 1 c. à soupe = 15 gr
- Ail : 1 gousse = 6.5 gr, 1 tête = 80 gr
- Légumes : poids moyens par unité

### Exemple d'utilisation

```javascript
import { unitsManager } from './UnitsManager.js';

// Consolider plusieurs quantités
const quantities = [
  { value: 500, unit: 'gr.', ingredientName: 'tomates' },
  { value: 0.3, unit: 'kg', ingredientName: 'tomates' }
];

const consolidated = unitsManager.consolidateQuantities(quantities);
// Résultat : [{ value: 800, unit: 'gr.', formatted: '800 gr.' }]
```

## Développement

### Prérequis

- Node.js et npm (pour les dépendances de développement)
- Hugo Extended (v0.142.0+)
- Accès à une instance Appwrite configurée

### Commandes utiles

```bash
# Développement Hugo
cd enka-cookbook-site
hugo server --buildDrafts --port 1314

# Tests de l'application collaborative
# Accéder à http://localhost:1314/app/ingredients-collaborative/demo/
```

### Structure du projet

```
hugo-cookbook-theme/
├── assets/js/collaborative-ingredients/
│   ├── app.js              # Application Vue.js principale
│   ├── bootstrap.js        # Point d'entrée et initialisation
│   ├── UnitsManager.js     # Gestion des unités
│   └── README.md           # Cette documentation
├── assets/scss/
│   └── collaborative-ingredients.scss  # Styles CSS
└── layouts/_default/
    └── collaborative-ingredients.html   # Layout Hugo
```

## Débogage

### Logs de développement

L'application utilise des logs préfixés pour faciliter le débogage :

```javascript
console.log('[Collaborative App] Message d\'information');
console.error('[Collaborative Bootstrap] Erreur');
```

### Erreurs communes

1. **SDK Appwrite non chargé**
   - Vérifier que le script CDN est bien inclus
   - Vérifier la console pour les erreurs de chargement

2. **Liste non trouvée (404)**
   - Vérifier que la liste existe dans Appwrite
   - Utiliser les données de test en mode démo

3. **Problèmes de permissions Appwrite**
   - Vérifier les règles de sécurité des collections
   - S'assurer que l'utilisateur a les droits nécessaires

## Roadmap

### Version 2.0 (Prochaine)

- [ ] Système de snapshots complet
- [ ] Modals d'édition fonctionnels
- [ ] Fusion d'ingrédients avec UI
- [ ] Système undo/redo
- [ ] Export PDF/Excel

### Version 2.1 (Future)

- [ ] Partage de listes avec permissions
- [ ] Notifications temps réel
- [ ] Mode hors ligne
- [ ] Intégration calendrier

## Support

Pour toute question ou problème :

1. Vérifier la console du navigateur pour les erreurs JavaScript
2. Vérifier la configuration Appwrite
3. Consulter les logs de l'application (préfixés `[Collaborative]`)
4. Tester avec les données de démonstration

## Licence

Ce projet suit la même licence que le thème Hugo Cookbook.