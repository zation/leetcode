const getDigitString = (unitMark, fiveUnitMark, tenUnitMark, num) => {
    if (num === 9) {
        return unitMark + tenUnitMark;
    } else if (num >= 5) {
        return fiveUnitMark + unitMark.repeat(num - 5);
    } else if (num === 4) {
        return unitMark + fiveUnitMark;
    } else {
        return unitMark.repeat(num);
    }
}

/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function(num) {
    let result = '';
    if (num >= 1000) {
        result += 'M'.repeat(Math.floor(num / 1000));
        num = num % 1000;
    }
    if (num >= 100) {
        result += getDigitString('C', 'D', 'M', Math.floor(num / 100));
        num = num % 100;
    }
    if (num >= 10) {
        result += getDigitString('X', 'L', 'C', Math.floor(num / 10));
        num = num % 10;
    }
    if (num > 0) {
        result += getDigitString('I', 'V', 'X', num);
    }
    return result;
};
