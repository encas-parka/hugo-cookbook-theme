let firstDate = $state<string | null>(null);
let lastDate = $state<string | null>(null);

export const dateRangeState = {
  get firstDate() {
    return firstDate;
  },
  get lastDate() {
    return lastDate;
  },
  setFirstDate(date: string | null) {
    firstDate = date;
  },
  setLastDate(date: string | null) {
    lastDate = date;
  },
  setRange(start: string | null, end: string | null) {
    firstDate = start;
    lastDate = end;
  },
  clear() {
    firstDate = null;
    lastDate = null;
  },
};
