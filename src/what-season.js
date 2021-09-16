import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (!arguments.length) return 'Unable to determine the time of year!';
    // console.log(date);
    // console.log(typeof(date));
    // console.log(Date.parse(date));
    // console.log('isDate? ', date instanceof Date);
    if (!(date instanceof Date)) return 'Invalid date!';
    
    
    // if (isNaN(Date.parse(date)) === true || typeof(date) != 'object') return "Invalid date!";
    // const dateConvert = new Date(Date.parse(date));
    // console.log(dateConvert);
    const month = date.getMonth();
    switch (month) {
        case 11 :
        case 0 :
        case 1 :
            return 'winter';
        case 2:
        case 3:
        case 4:
            return 'spring';
        case 5:
        case 6:
        case 7:
            return 'summer';
        case 8:
        case 9:
        case 10:
            return 'autumn'; 
        default:
            return 'Invalid date!';
    }

}
