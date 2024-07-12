/**
 * A utilitary class to help with dates domain
 */
class DateHelper {
  constructor() {
    throw new Error('Cannot create an instance of this class');  
  }

  /**
   * Converts a string to a date
   */
  static stringToDate(text: string): Date {
    if (!/\d{4}-\d{2}-\d{2}/.test(text)) {
      throw new Error('Text must follow YYYY-MM-DD pattern');
    }
    return new Date(text);
  }

  /**
   * Converts a date to a string
   */
  static dateToString(date: Date): string {
    return date.toLocaleString('pt-Br', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }
}

export { DateHelper };
