/**
 * Utilitaires pour EventTodo
 * Parsing et validation des priorités
 */

import type { EventTodo } from "$lib/types/appwrite";

/**
 * Type de priorité pour les todos
 */
export type EventTodoPriority = "high" | "medium" | "low";

/**
 * Parse et valide la priorité d'un todo
 * @param priority - La priorité à valider
 * @returns La priorité validée ou "medium" par défaut
 */
export function parseEventTodoPriority(
  priority: string | undefined,
): EventTodoPriority {
  const validPriorities: EventTodoPriority[] = ["high", "medium", "low"];

  if (priority && validPriorities.includes(priority as EventTodoPriority)) {
    return priority as EventTodoPriority;
  }

  console.warn(`[event-todo.utils] Priority invalide: ${priority}, utilisation de "medium"`);
  return "medium"; // Valeur par défaut
}

/**
 * Ordre de tri pour les priorités (utilisé dans le store)
 */
export const PRIORITY_ORDER: Record<EventTodoPriority, number> = {
  high: 3,
  medium: 2,
  low: 1,
};

/**
 * Formate le nom de la priorité pour l'affichage
 */
export function formatPriority(priority: EventTodoPriority): string {
  const labels: Record<EventTodoPriority, string> = {
    high: "Haute",
    medium: "Moyenne",
    low: "Basse",
  };

  return labels[priority] || priority;
}

/**
 * Vérifie si un todo est complété
 */
export function isTodoCompleted(todo: EventTodo): boolean {
  return todo.status === "completed";
}

/**
 * Vérifie si un todo est en retard
 */
export function isTodoOverdue(todo: EventTodo): boolean {
  if (!todo.dueDate || todo.status === "completed") {
    return false;
  }

  return new Date(todo.dueDate) < new Date();
}

/**
 * Calcule le pourcentage de complétion d'une liste de todos
 */
export function calculateCompletionPercentage(todos: EventTodo[]): number {
  if (todos.length === 0) return 0;

  const completed = todos.filter(isTodoCompleted).length;
  return Math.round((completed / todos.length) * 100);
}
