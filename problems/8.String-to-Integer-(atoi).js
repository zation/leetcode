/**
 * @param {string} str
 * @return {number}
 */
const MAX_INT = Math.pow(2, 31) - 1;
const MIN_INT = Math.pow(-2, 31);
const MAX_INT_PRE_CHECK = Math.floor(MAX_INT / 10);
const MIN_INT_PRE_CHECK = Math.ceil(MIN_INT / 10);
var myAtoi = function(str) {
    let isPositive = true;
    let result = 0;
    let i = 0;
    while(str[i] === ' ') {
        i += 1;
    }
    if (str[i] === '-') {
        isPositive = false;
        i += 1;
    } else if (str[i] === '+') {
        i += 1;
    }
    while(i < str.length) {
        const item = str[i];
        const number = Number(item);
        if (item === ' ' || Number.isNaN(number)) {
            return result;
        }
        if (isPositive && (result > MAX_INT_PRE_CHECK || (result === MAX_INT_PRE_CHECK && number > 7))) {
            return MAX_INT;
        }
        if (!isPositive && (result < MIN_INT_PRE_CHECK || (result === MIN_INT_PRE_CHECK && number > 8))) {
            return MIN_INT;
        }
        result = isPositive ? result * 10 + number : result * 10 - number;
        i += 1;
    }
    return result;
};
