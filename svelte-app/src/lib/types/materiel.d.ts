import type { MaterielType, MaterielStatus } from "./appwrite";

// Structure d'un emprunt (après parsing du JSON)
export interface MaterielLoan {
  responsible: string; // ID du responsable
  startDate: string; // ISO 8601
  endDate: string; // ISO 8601
  reason: string; // Raison / événement
  quantity: number; // Quantité empruntée
}

// Structure du propriétaire (après parsing du JSON)
export interface MaterielOwner {
  userName: string; // Nom du user propriétaire
  userId: string; // ID du user (si owner = user)
  teamName: string; // Nom de l'équipe (si owner = team)
  teamId: string; // ID de l'équipe (si owner = team)
}

// Materiel enrichi avec données parsées
export interface EnrichedMateriel {
  // Tous les champs du type Materiel de base
  $id: string;
  name: string;
  description: string | null;
  type: MaterielType | null;
  quantity: number;
  location: string | null;
  loan: string[] | null; // Données brutes Appwrite
  owner: string | null; // Données brutes Appwrite
  status: MaterielStatus; // Statut du matériel
  shareableWith: string[] | null; // Liste des teams avec lesquelles le matériel est partageable

  // Champs enrichis parsés
  loans: MaterielLoan[]; // Array d'emprunts parsés
  ownerData: MaterielOwner; // Owner parsé

  // Champs dérivés calculés
  availableQuantity: number; // Quantité disponible
  totalLoanedQuantity: number; // Quantité totale empruntée
  isAvailable: boolean; // Au moins 1 dispo
  isFullyLoaned: boolean; // Tout est emprunté
}

export interface MaterielFilters {
  type?: MaterielType | null;
  status?: MaterielStatus | null;
  location?: string | null;
  loan?: string | null;
  hasAvailable?: boolean; // true = a de la quantité dispo
  ownerType?: "me" | "myTeams" | "others";
  search?: string; // recherche textuelle
}
