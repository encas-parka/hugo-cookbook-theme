import {
  initializeDateRange,
  createUpcomingDateRange,
  getFirstAvailableDate,
  getLastAvailableDate,
  isFullRange,
  isUpcomingRange,
  type DateRange,
} from "../utils/dateRange";

export class DateRangeStore {
  // État interne
  #availableDates = $state<string[]>([]);
  #start = $state<string | null>(null);
  #end = $state<string | null>(null);

  constructor(initialDates: string[] = []) {
    this.#availableDates = initialDates;
    this.initializeSmartRange();
  }

  // Getters d'état
  get start() {
    return this.#start;
  }
  get end() {
    return this.#end;
  }
  get dates() {
    return this.#availableDates;
  }

  // Objet range pour compatibilité (ou usage direct)
  get current(): DateRange {
    return { start: this.#start, end: this.#end };
  }

  // Dérivés (Calculés automatiquement et mis en cache)
  isEventPassed = $derived.by(() => {
    if (this.#availableDates.length === 0) return true;
    const lastDate = this.lastAvailableDate
      ? new Date(this.lastAvailableDate)
      : new Date();
    lastDate.setHours(23, 59, 59, 999); // Fin de journée
    return lastDate < new Date();
  });

  hasUpcomingDates = $derived.by(() => {
    if (this.#availableDates.length === 0) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return this.#availableDates.some((date) => new Date(date) >= today);
  });

  isFullRange = $derived(
    this.#start === this.firstAvailableDate &&
      this.#end === this.lastAvailableDate
  );

  isUpcomingRange = $derived.by(() => {
    return isUpcomingRange(this.current, this.#availableDates);
  });

  hasSingleDateEvent = $derived(this.#availableDates.length === 1);

  hasSingleDateInRange = $derived(
    !!(this.#start && this.#start === this.#end)
  );

  hasPastDatesInRange = $derived.by(() => {
    if (!this.#start || !this.#end) return false;
    if (this.isEventPassed) return false; // Totalement passé = autre cas

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Début de journée

    const startDate = new Date(this.#start);

    // Si le début de la plage est avant aujourd'hui ET qu'on n'est pas totalement dans le passé
    return startDate < today;
  });

  // Bornes calculées
  get firstAvailableDate() {
    return getFirstAvailableDate(this.#availableDates);
  }

  get lastAvailableDate() {
    return getLastAvailableDate(this.#availableDates);
  }

  // Actions
  setAvailableDates(dates: string[]) {
    this.#availableDates = dates;
    this.initializeSmartRange();
  }

  setRange(date1: string | null, date2: string | null) {
    if (!date1 && !date2) {
      this.#start = null;
      this.#end = null;
      return;
    }

    if (!date1 || !date2) {
      // Un seul cas, on l'utilise pour les deux
      const date = date1 || date2;
      this.#start = date;
      this.#end = date;
      return;
    }

    // Déterminer automatiquement start/end selon l'ordre chronologique
    const start = new Date(date1) <= new Date(date2) ? date1 : date2;
    const end = new Date(date1) >= new Date(date2) ? date1 : date2;

    this.#start = start;
    this.#end = end;
  }

  selectAll() {
    if (this.#availableDates.length === 0) return;
    this.#start = this.#availableDates[0];
    this.#end = this.#availableDates[this.#availableDates.length - 1];
  }

  selectUpcoming() {
    const range = createUpcomingDateRange(this.#availableDates);
    if (range) {
      this.#start = range.start;
      this.#end = range.end;
    }
  }

  selectFutureDatesOnly() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    // Trouver la première date disponible à partir de demain
    const futureDates = this.#availableDates.filter(
      (date) => new Date(date) >= tomorrow
    );

    if (futureDates.length > 0) {
      this.#start = futureDates[0];
      this.#end = futureDates[futureDates.length - 1];
    }
  }

  initializeSmartRange() {
    const range = initializeDateRange(this.#availableDates);
    if (range) {
      this.#start = range.start;
      this.#end = range.end;
    }
    console.log(
      `[DateRangeStore] Initialized: ${this.#start} - ${this.#end}`
    );
  }
}
