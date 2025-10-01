/**
 * Tests unitaires pour ColorManager
 * 
 * Tests pour valider le fonctionnement du service de gestion des couleurs
 * 
 * @author Collaborative Ingredients App
 * @version 1.0.0
 */

import { ColorManager } from './ColorManager.js';

/**
 * Helper pour simuler localStorage
 */
class MockLocalStorage {
  constructor() {
    this.store = {};
  }
  
  getItem(key) {
    return this.store[key] || null;
  }
  
  setItem(key, value) {
    this.store[key] = value;
  }
  
  removeItem(key) {
    delete this.store[key];
  }
  
  clear() {
    this.store = {};
  }
}

/**
 * Helper pour configurer et nettoyer l'environnement de test
 */
function setupTestEnvironment() {
  const originalLocalStorage = global.localStorage;
  global.localStorage = new MockLocalStorage();
  
  return () => {
    global.localStorage = originalLocalStorage;
  };
}

/**
 * Suite de tests pour le ColorManager
 */
export function runColorManagerTests() {
  console.log('🎨 Démarrage des tests ColorManager...');
  
  let cleanup;
  
  try {
    cleanup = setupTestEnvironment();
    
    // Test 1: Initialisation
    testColorManagerInitialization();
    
    // Test 2: Assignation de couleurs pour volontaires
    testVolunteerColorAssignment();
    
    // Test 3: Assignation de couleurs pour magasins
    testStoreColorAssignment();
    
    // Test 4: Persistance localStorage
    testColorPersistence();
    
    // Test 5: Gestion des cas limites
    testEdgeCases();
    
    // Test 6: Ajout de nouveaux types d'entités
    testNewEntityTypeSupport();
    
    // Test 7: Réinitialisation
    testResetFunctionality();
    
    // Test 8: Migration legacy
    testLegacyMigration();
    
    console.log('✅ Tous les tests ColorManager passés avec succès!');
    
  } catch (error) {
    console.error('❌ Tests ColorManager échoués:', error);
    throw error;
  } finally {
    if (cleanup) {
      cleanup();
    }
  }
}

function testColorManagerInitialization() {
  console.log('📋 Test 1: Initialisation du ColorManager');
  
  const colorManager = new ColorManager('test-list-123');
  
  // Vérifier l'initialisation
  if (colorManager.listId !== 'test-list-123') {
    throw new Error('listId non initialisé correctement');
  }
  
  if (colorManager.storageKey !== 'collab_colors_test-list-123') {
    throw new Error('storageKey non construit correctement');
  }
  
  // Vérifier les palettes prédéfinies
  if (!colorManager.colorPalettes.volunteers || colorManager.colorPalettes.volunteers.length === 0) {
    throw new Error('Palette volunteers non initialisée');
  }
  
  if (!colorManager.colorPalettes.stores || colorManager.colorPalettes.stores.length === 0) {
    throw new Error('Palette stores non initialisée');
  }
  
  console.log('✅ Test d\'initialisation réussi');
}

function testVolunteerColorAssignment() {
  console.log('👥 Test 2: Assignation de couleurs pour volontaires');
  
  const colorManager = new ColorManager('test-list-volunteers');
  
  // Premier volontaire doit obtenir la première couleur
  const aliceColor = colorManager.getColorForVolunteer('Alice');
  const expectedFirstColor = colorManager.colorPalettes.volunteers[0];
  
  if (aliceColor.bg !== expectedFirstColor.bg || aliceColor.color !== expectedFirstColor.color) {
    throw new Error('Premier volontaire n\'a pas obtenu la première couleur');
  }
  
  // Deuxième volontaire doit obtenir la deuxième couleur
  const bobColor = colorManager.getColorForVolunteer('Bob');
  const expectedSecondColor = colorManager.colorPalettes.volunteers[1];
  
  if (bobColor.bg !== expectedSecondColor.bg || bobColor.color !== expectedSecondColor.color) {
    throw new Error('Deuxième volontaire n\'a pas obtenu la deuxième couleur');
  }
  
  // Appel répété doit retourner la même couleur
  const aliceColorAgain = colorManager.getColorForVolunteer('Alice');
  if (aliceColorAgain.bg !== aliceColor.bg || aliceColorAgain.color !== aliceColor.color) {
    throw new Error('La couleur d\'un volontaire doit être consistante');
  }
  
  console.log('✅ Test d\'assignation de couleurs pour volontaires réussi');
}

function testStoreColorAssignment() {
  console.log('🏪 Test 3: Assignation de couleurs pour magasins');
  
  const colorManager = new ColorManager('test-list-stores');
  
  // Test avec différents magasins
  const carrefourColor = colorManager.getColorForStore('Carrefour');
  const auchanColor = colorManager.getColorForStore('Auchan');
  
  // Chaque magasin doit avoir une couleur
  if (!carrefourColor || !carrefourColor.bg || !carrefourColor.color) {
    throw new Error('Couleur de magasin invalide');
  }
  
  if (!auchanColor || !auchanColor.bg || !auchanColor.color) {
    throw new Error('Couleur de magasin invalide');
  }
  
  // Les couleurs doivent être différentes
  if (carrefourColor.bg === auchanColor.bg && carrefourColor.color === auchanColor.color) {
    throw new Error('Les magasins devraient avoir des couleurs différentes');
  }
  
  // Test de consistance
  const carrefourColorAgain = colorManager.getColorForStore('Carrefour');
  if (carrefourColorAgain.bg !== carrefourColor.bg || carrefourColorAgain.color !== carrefourColor.color) {
    throw new Error('La couleur d\'un magasin doit être consistante');
  }
  
  console.log('✅ Test d\'assignation de couleurs pour magasins réussi');
}

function testColorPersistence() {
  console.log('💾 Test 4: Persistance localStorage');
  
  const listId = 'test-list-persistence';
  
  // Créer un premier ColorManager et assigner des couleurs
  const colorManager1 = new ColorManager(listId);
  colorManager1.getColorForVolunteer('Alice');
  colorManager1.getColorForStore('Carrefour');
  
  // Vérifier que les données sont sauvegardées
  const savedData = localStorage.getItem(`collab_colors_${listId}`);
  if (!savedData) {
    throw new Error('Aucune donnée sauvegardée dans localStorage');
  }
  
  // Créer un deuxième ColorManager et vérifier la récupération
  const colorManager2 = new ColorManager(listId);
  
  const aliceColor2 = colorManager2.getColorForVolunteer('Alice');
  const carrefourColor2 = colorManager2.getColorForStore('Carrefour');
  
  const aliceColor1 = colorManager1.getColorForVolunteer('Alice');
  const carrefourColor1 = colorManager1.getColorForStore('Carrefour');
  
  if (aliceColor2.bg !== aliceColor1.bg || aliceColor2.color !== aliceColor1.color) {
    throw new Error('La persistance des couleurs de volontaires a échoué');
  }
  
  if (carrefourColor2.bg !== carrefourColor1.bg || carrefourColor2.color !== carrefourColor1.color) {
    throw new Error('La persistance des couleurs de magasins a échoué');
  }
  
  console.log('✅ Test de persistance réussi');
}

function testEdgeCases() {
  console.log('⚠️ Test 5: Gestion des cas limites');
  
  const colorManager = new ColorManager('test-list-edge-cases');
  
  // Test avec noms vides
  const emptyNameColor = colorManager.getColorForVolunteer('');
  if (emptyNameColor.bg !== '#e2e3e5' || emptyNameColor.color !== '#383d41') {
    throw new Error('La couleur par défaut pour nom vide est incorrecte');
  }
  
  const nullNameColor = colorManager.getColorForStore(null);
  if (nullNameColor.bg !== '#e2e3e5' || nullNameColor.color !== '#383d41') {
    throw new Error('La couleur par défaut pour nom null est incorrecte');
  }
  
  const undefinedNameColor = colorManager.getColorForVolunteer(undefined);
  if (undefinedNameColor.bg !== '#e2e3e5' || undefinedNameColor.color !== '#383d41') {
    throw new Error('La couleur par défaut pour nom undefined est incorrecte');
  }
  
  // Test avec espaces
  const spacesNameColor = colorManager.getColorForVolunteer('   ');
  if (spacesNameColor.bg !== '#e2e3e5' || spacesNameColor.color !== '#383d41') {
    throw new Error('La couleur par défaut pour nom avec espaces est incorrecte');
  }
  
  // Test avec type d'entité inexistant
  const unknownTypeColor = colorManager.getColorForEntity('unknown', 'test');
  if (unknownTypeColor.bg !== '#e2e3e5' || unknownTypeColor.color !== '#383d41') {
    throw new Error('La couleur par défaut pour type inconnu est incorrecte');
  }
  
  console.log('✅ Test des cas limites réussi');
}

function testNewEntityTypeSupport() {
  console.log('🆕 Test 6: Support de nouveaux types d\'entités');
  
  const colorManager = new ColorManager('test-list-new-types');
  
  // Ajouter un nouveau type d'entité
  const suppliersPalette = [
    { bg: '#ffeb3b', color: '#f57c00' }, // Jaune
    { bg: '#4caf50', color: '#1b5e20' }, // Vert
    { bg: '#2196f3', color: '#0d47a1' }  // Bleu
  ];
  
  colorManager.addEntityType('suppliers', suppliersPalette);
  
  // Vérifier l'ajout
  if (!colorManager.colorPalettes.suppliers) {
    throw new Error('Le type d\'entité suppliers n\'a pas été ajouté');
  }
  
  // Test d'assignation de couleur pour le nouveau type
  const supplier1Color = colorManager.getColorForEntity('suppliers', 'Fournisseur A');
  const expectedSupplierColor = suppliersPalette[0];
  
  if (supplier1Color.bg !== expectedSupplierColor.bg || supplier1Color.color !== expectedSupplierColor.color) {
    throw new Error('L\'assignation de couleur pour le nouveau type a échoué');
  }
  
  console.log('✅ Test de support des nouveaux types d\'entités réussi');
}

function testResetFunctionality() {
  console.log('🔄 Test 7: Fonctionnalité de réinitialisation');
  
  const colorManager = new ColorManager('test-list-reset');
  
  // Assigner quelques couleurs
  colorManager.getColorForVolunteer('Alice');
  colorManager.getColorForStore('Carrefour');
  
  // Vérifier qu'il y a des assignations
  const volunteerAssignments = colorManager.getAssignmentsForType('volunteers');
  if (Object.keys(volunteerAssignments).length === 0) {
    throw new Error('Aucune assignation de volontaire trouvée avant réinitialisation');
  }
  
  // Réinitialiser un type spécifique
  colorManager.resetAssignmentsForType('volunteers');
  
  const volunteerAssignmentsAfter = colorManager.getAssignmentsForType('volunteers');
  if (Object.keys(volunteerAssignmentsAfter).length !== 0) {
    throw new Error('Les assignations de volontaires n\'ont pas été réinitialisées');
  }
  
  // Les assignations de magasins doivent toujours exister
  const storeAssignments = colorManager.getAssignmentsForType('stores');
  if (Object.keys(storeAssignments).length === 0) {
    throw new Error('Les assignations de magasins ont été affectées par la réinitialisation');
  }
  
  // Réinitialiser tout
  colorManager.resetAllAssignments();
  
  const storeAssignmentsAfter = colorManager.getAssignmentsForType('stores');
  if (Object.keys(storeAssignmentsAfter).length !== 0) {
    throw new Error('La réinitialisation complète a échoué');
  }
  
  console.log('✅ Test de réinitialisation réussi');
}

function testLegacyMigration() {
  console.log('🔄 Test 8: Migration des données legacy');
  
  const listId = 'test-list-legacy';
  const storageKey = `collab_colors_${listId}`;
  
  // Simuler des données legacy dans localStorage
  const legacyData = {
    volunteerColors: { 'Alice': 0, 'Bob': 1 },
    storeColors: { 'Carrefour': 0, 'Auchan': 1 }
  };
  
  localStorage.setItem(storageKey, JSON.stringify(legacyData));
  
  // Créer un ColorManager qui devrait migrer les données
  const colorManager = new ColorManager(listId);
  
  // Vérifier que la migration a fonctionné
  const aliceColor = colorManager.getColorForVolunteer('Alice');
  const expectedAliceColor = colorManager.colorPalettes.volunteers[0];
  
  if (aliceColor.bg !== expectedAliceColor.bg || aliceColor.color !== expectedAliceColor.color) {
    throw new Error('La migration legacy a échoué pour les volontaires');
  }
  
  const carrefourColor = colorManager.getColorForStore('Carrefour');
  const expectedCarrefourColor = colorManager.colorPalettes.stores[0];
  
  if (carrefourColor.bg !== expectedCarrefourColor.bg || carrefourColor.color !== expectedCarrefourColor.color) {
    throw new Error('La migration legacy a échoué pour les magasins');
  }
  
  // Vérifier que le nouveau format est maintenant utilisé
  const savedData = JSON.parse(localStorage.getItem(storageKey));
  if (!savedData.version || !savedData.colorAssignments) {
    throw new Error('La migration n\'a pas converti vers le nouveau format');
  }
  
  console.log('✅ Test de migration legacy réussi');
}

/**
 * Fonction utilitaire pour exécuter les tests dans un environnement Node.js
 */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { runColorManagerTests };
}

/**
 * Auto-exécution si le fichier est chargé dans un navigateur
 */
if (typeof window !== 'undefined') {
  // Exécuter les tests après le chargement du DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runColorManagerTests);
  } else {
    runColorManagerTests();
  }
}