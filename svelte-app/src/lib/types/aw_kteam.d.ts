import type { Kteams } from "./appwrite.d";

export interface KTeamMember {
  id: string; // User ID Appwrite
  name: string; // Nom d'affichage (cache pour éviter des requêtes)
  role: "owner" | "admin" | "member"; // Rôle dans l'équipe
  joinedAt: string; // Date ISO
}

export interface KTeamInvitation {
  id?: string; // User ID (si connu/créé par la Cloud Function)
  email: string; // L'identifiant principal de l'invitation
  name?: string; // Nom estimé ou fourni par l'inviteur
  status: "invited"; // Statut (passera dans 'members' une fois accepté)
  invitedAt: string; // Date ISO
  invitedBy: string; // ID de l'inviteur
}

export interface EnrichedTeam extends Omit<Kteams, "members" | "invited"> {
  members: KTeamMember[];
  invited: KTeamInvitation[];
}
