
// src/utils/dateUtils.ts

/**
 * Checks if two dates are the same day, ignoring time.
 * @param date1 The first date.
 * @param date2 The second date.
 * @returns True if both dates are on the same day, false otherwise.
 */
export const isSameDay = (date1: Date, date2: Date): boolean => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

/**
 * Checks if a given date was yesterday relative to a 'today' date.
 * @param dateToCheck The date to check.
 * @param today The reference date for 'today'. Defaults to new Date().
 * @returns True if dateToCheck was yesterday, false otherwise.
 */
export const isYesterday = (dateToCheck: Date, today: Date = new Date()): boolean => {
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  return isSameDay(dateToCheck, yesterday);
};

/**
 * Formats a Date object into a YYYY-MM-DD string.
 * @param date The date to format.
 * @returns A string representation of the date in YYYY-MM-DD format.
 */
export const formatDateToYYYYMMDD = (date: Date): string => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};
