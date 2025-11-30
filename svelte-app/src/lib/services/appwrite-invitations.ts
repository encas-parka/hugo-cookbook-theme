/**
 * Service Appwrite pour la gestion des invitations (approche KISS)
 *
 * Ce service utilise uniquement les équipes Appwrite natives pour les invitations
 * et suit le paradigme KISS en évitant une table dédiée.
 */

import { ID } from "appwrite";
import { getAppwriteInstances } from "./appwrite";
import type { ContributorInfo } from "../types/appwrite.types";

// =============================================================================
// TYPES
// =============================================================================

export interface ContributorInvitation {
  email: string;
  eventId: string;
  invitedBy: string;
  status?: "invited" | "accepted" | "declined";
  teamId?: string;
}

// =============================================================================
// FONCTIONS PRINCIPALES (approche KISS avec équipes Appwrite natives)
// =============================================================================

/**
 * Invite un contributeur à un événement en utilisant les équipes Appwrite natives
 */
export async function inviteContributorToEvent(
  email: string,
  eventId: string,
  invitedBy: string,
  teamId?: string,
): Promise<void> {
  try {
    // TODO: Implémenter l'invitation via les équipes Appwrite natives
    // Pour l'instant, nous allons simplement logger l'action
    console.log(
      `[appwrite-invitations] Invitation de ${email} à l'événement ${eventId} par ${invitedBy}`,
    );

    // Dans une implémentation complète:
    // 1. Créer une équipe temporaire pour l'événement si nécessaire
    // 2. Utiliser createTeamMembership pour inviter l'utilisateur
    // 3. L'utilisateur recevra un email d'Appwrite avec un lien de validation
    // 4. Une fois validé, il sera ajouté à l'équipe et pourra voir l'événement
  } catch (error) {
    console.error(
      "[appwrite-invitations] Erreur lors de l'invitation du contributeur:",
      error,
    );
    throw error;
  }
}

/**
 * Crée un contributeur temporaire pour un événement (utilisé dans PermissionsManager)
 */
export function createTempContributor(
  email: string,
  eventId?: string,
): ContributorInfo {
  const tempId = `temp_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  return {
    id: tempId,
    email,
    status: "invited",
    invitedAt: new Date().toISOString(),
  };
}

// =============================================================================
// UTILITAIRES
// =============================================================================

/**
 * Vérifie si une adresse email est valide
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Parse un contributeur depuis une string JSON (avec gestion d'erreur)
 */
export function parseContributor(contributorStr: string): ContributorInfo {
  try {
    return JSON.parse(contributorStr);
  } catch (e) {
    // Si le parsing échoue, considérer que c'est un simple ID (ancien format)
    return {
      id: contributorStr,
      status: "accepted" as const,
    };
  }
}

/**
 * Stringifie un contributeur en JSON
 */
export function stringifyContributor(contributor: ContributorInfo): string {
  return JSON.stringify(contributor);
}
