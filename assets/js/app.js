// hugo-cookbook-theme/assets/js/app.js
// Ce fichier est le point d'entrée JavaScript principal pour le thème.
// Il est responsable de l'initialisation des scripts globaux et des bibliothèques.

'use strict';

// Importer appwrite-client seulement si on n'est pas sur la page de login
// pour éviter les conflits avec authAppwrite.js
if (window.location.pathname !== '/login/' && window.location.pathname !== '/login') {
  import('./appwrite-client.js');
}

import bootstrap from 'js/bootstrap.bundle.js';
