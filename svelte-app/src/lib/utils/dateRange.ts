/**
 * Utilitaires purs pour la gestion des plages de dates
 * Fonctions réutilisables et testables sans état
 */

export interface DateRange {
  start: string | null;
  end: string | null;
}

/**
 * Trie un tableau de dates par ordre chronologique
 */
export function sortDates(dates: string[]): string[] {
  return [...dates].sort();
}

/**
 * Vérifie si une date est antérieure à aujourd'hui
 */
export function isDatePassed(date: string): boolean {
  return new Date(date) < new Date();
}

/**
 * Vérifie si l'événement est terminé (toutes les dates sont passées)
 */
export function isEventPassed(dates: string[]): boolean {
  if (dates.length === 0) return true;

  const lastDate = new Date(getLastAvailableDate(dates)!);
  lastDate.setHours(23, 59, 59, 999); // Fin de journée
  return lastDate < new Date();
}

/**
 * Récupère la première date disponible
 */
export function getFirstAvailableDate(dates: string[]): string | null {
  if (dates.length === 0) return null;
  return sortDates(dates)[0];
}

/**
 * Récupère la dernière date disponible
 */
export function getLastAvailableDate(dates: string[]): string | null {
  if (dates.length === 0) return null;
  return sortDates(dates).pop() ?? null;
}

/**
 * Récupère la première date à partir d'aujourd'hui
 */
export function getFirstUpcomingDate(dates: string[]): string | null {
  if (dates.length === 0) return null;

  const today = new Date();
  today.setHours(0, 0, 0, 0); // Début de journée

  return sortDates(dates).find((date) => new Date(date) >= today) || null;
}

/**
 * Récupère toutes les dates à partir d'aujourd'hui
 */
export function getUpcomingDates(dates: string[]): string[] {
  if (dates.length === 0) return [];

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return sortDates(dates).filter((date) => new Date(date) >= today);
}

/**
 * Initialise une plage de dates intelligente
 * - Si toutes les dates sont passées : commence à la première date
 * - Si la première date est passée : commence à aujourd'hui
 * - Sinon : commence à la première date disponible
 */
export function initializeDateRange(dates: string[]): DateRange | null {
  if (dates.length === 0) return null;

  const sortedDates = sortDates(dates);
  const eventPassed = isEventPassed(dates);
  const isFirstDatePassed = isDatePassed(sortedDates[0]);

  // Utiliser le même format que les dates disponibles (ISO sans millisecondes)
  const today = new Date();
  let startDate: string;

  if (eventPassed) {
    // Si toutes les dates sont passées, commencer à la première date
    startDate = sortedDates[0];
  } else if (isFirstDatePassed) {
    // Si la première date est passée, commencer à aujourd'hui
    startDate = today.toISOString().slice(0, 19) + "Z"; // Format: 2025-11-17T12:00:00Z
  } else {
    // Sinon, commencer à la première date disponible
    startDate = sortedDates[0];
  }

  return {
    start: startDate,
    end: sortedDates[sortedDates.length - 1],
  };
}

/**
 * Crée une plage de dates pour toutes les dates à venir
 */
export function createUpcomingDateRange(dates: string[]): DateRange | null {
  const firstUpcoming = getFirstUpcomingDate(dates);
  const lastDate = getLastAvailableDate(dates);

  if (!firstUpcoming || !lastDate) return null;

  return {
    start: firstUpcoming,
    end: lastDate,
  };
}

/**
 * Crée une plage de dates pour toutes les dates disponibles
 */
export function createFullDateRange(dates: string[]): DateRange | null {
  const firstDate = getFirstAvailableDate(dates);
  const lastDate = getLastAvailableDate(dates);

  if (!firstDate || !lastDate) return null;

  return {
    start: firstDate,
    end: lastDate,
  };
}

/**
 * Vérifie si une plage de dates couvre toutes les dates disponibles
 */
export function isFullRange(currentRange: DateRange, dates: string[]): boolean {
  const fullRange = createFullDateRange(dates);
  if (!fullRange) return false;

  return (
    currentRange.start === fullRange.start && currentRange.end === fullRange.end
  );
}

/**
 * Vérifie si une plage de dates couvre toutes les dates à venir
 */
export function isUpcomingRange(
  currentRange: DateRange,
  dates: string[],
): boolean {
  const upcomingRange = createUpcomingDateRange(dates);
  if (!upcomingRange) return false;

  return (
    currentRange.start === upcomingRange.start &&
    currentRange.end === upcomingRange.end
  );
}

/**
 * Vérifie si un événement a une seule date
 */
export function hasSingleDateEvent(dates: string[]): boolean {
  return dates.length === 1;
}

/**
 * Formate une date pour l'affichage (français)
 */
export function formatDateDayMonthShort(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
  });
}

export function formatDateWdDayMonthShort(dateStr: string | null): string {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("fr-Fr", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

/**
 * Détermine l'icône à afficher selon l'heure de la date
 */
export function getTimeIcon(dateStr: string): "sun" | "moon" | "cloud" | null {
  const date = new Date(dateStr);
  const hour = date.getHours(); // Utiliser l'heure locale

  if (hour === 12) return "sun";
  if (hour === 20) return "moon";
  if (hour === 8) return "cloud";
  return null;
}
