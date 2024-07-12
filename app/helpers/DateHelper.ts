/**
 * A utilitary class to help with dates domain
 * @class
 */
class DateHelper {
  /**
   * @constructor
   * @throws this class must not be instantiated
   */
  constructor () {
    throw new Error('Cannot create an instance of this class');  
  }

  /**
   * Converts a string to a date
   * @param {string} text 
   */
  static stringToDate(text) {
    if (!/\d{4}-\d{2}-\d{2}/.test(text)) {
      throw new Error('Text must follow YYYY-MM-DD pattern');
    }
    return new Date(text.split('-'));
  }

  /**
   * Converts a date to a string
   * @param {Date} date 
   */
  static dateToString(date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }
}

export { DateHelper };
