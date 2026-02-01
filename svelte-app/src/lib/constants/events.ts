/**
 * Constantes pour la gestion des événements
 *
 * Ce fichier contient les constantes utilisées pour identifier
 * et gérer les événements spéciaux comme l'event de démonstration.
 */

/**
 * ID fixe de l'event de démonstration
 *
 * Cet ID est utilisé pour :
 * - Identifier le mode démo (vs mode normal)
 * - Déterminer les guards de route à appliquer
 * - Décider de l'initialisation du store (public vs auth)
 *
 * @constant
 * @type {string}
 */
export const DEMO_EVENT_ID = "demo-rassemblement-festif";
