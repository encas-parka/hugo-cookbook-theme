/**
 * Utilitaires de conversion pour les dates de repas
 */

/**
 * Convertit une date (YYYY-MM-DD) + moment → datetime ISO 8601
 */
export function dateToDateTime(
  date: string,
  time: "matin" | "midi" | "soir",
): string {
  const hours = { matin: "08:00:00", midi: "12:00:00", soir: "20:00:00" };
  return `${date}T${hours[time]}`;
}

/**
 * Extrait la partie date d'un datetime ISO
 */
export function extractDate(datetime: string): string {
  return datetime.split("T")[0];
}

/**
 * Déduit le moment depuis l'heure d'un datetime
 */
export function extractTime(datetime: string): "matin" | "midi" | "soir" {
  const hour = parseInt(datetime.split("T")[1]?.split(":")[0] || "12");
  if (hour < 10) return "matin";
  if (hour < 17) return "midi";
  return "soir";
}
