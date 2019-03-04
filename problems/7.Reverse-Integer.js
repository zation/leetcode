/**
 * @param {number} x
 * @return {number}
 */
const MAX_INT = Math.pow(2, 31) - 1;
const MIN_INT = Math.pow(-2, 31);
var reverse = function(x) {
    let result = 0;
    while (x!=0) {
        const pop = x % 10;
        x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10);
        if (result > MAX_INT / 10 || (result === MAX_INT / 10 && pop > 7)) return 0;
        if (result < MIN_INT / 10 || (result === MIN_INT / 10 && pop < -8)) return 0;
        result = result * 10 + pop;
    }
    return result;
};
