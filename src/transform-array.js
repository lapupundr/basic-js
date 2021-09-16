import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');
  if (arr.length === 0) return [];

    let arrResult = [];
    const len = arr.length;
    let del = 0;

    for (let i = 0; i < len; i++) {
        
        if (arr[i] === '--discard-next') {
            if (i + 1 < len) {i++; del = 1};
        } else
        if (arr[i] === '--discard-prev') {
            if (i - 1 >= 0 && del === 0) { arrResult.pop()}
        } else
        if (arr[i] === '--double-next') {
            if (i + 1 < len) {arrResult.push(arr[i+1], arr[i+1]); i++}
        } else
        if (arr[i] === '--double-prev') {
            if (i - 1 >= 0 && del === 0) arrResult.push(arr[i-1])
        } else {
            arrResult.push(arr[i]);
        }
        
    }


    return arrResult;

}
