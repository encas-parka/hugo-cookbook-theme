/**
 * Archival Mode - LocalStorage Cleanup
 *
 * Ce script nettoie toutes les données d'authentification du localStorage
 * pour empêcher l'accès à Sveltia CMS et Appwrite sur ce site archivé.
 *
 * Exécuté immédiatement au chargement de toute page.
 */
(function() {
  'use strict';

  try {
    // Clés connues à supprimer (Sveltia CMS + Appwrite)
    const keysToRemove = [
      'sveltia-cms.user',
      'appwrite-user-email',
      'appwrite-user-name',
      'email-verification-status'
    ];

    // Suppression des clés identifiées
    keysToRemove.forEach(key => {
      if (localStorage.getItem(key)) {
        localStorage.removeItem(key);
        console.log('[Archival] Removed:', key);
      }
    });

    // Filet de sécurité : nettoyage de toute clé résiduelle Appwrite/Sveltia
    Object.keys(localStorage).forEach(key => {
      if (key.includes('appwrite') || key.includes('sveltia')) {
        localStorage.removeItem(key);
        console.log('[Archival] Cleaned residual:', key);
      }
    });

    console.log('[Archival] localStorage cleaned successfully');
  } catch (error) {
    console.error('[Archival] Error cleaning localStorage:', error);
  }
})();
