/**
 * @param {string} s
 * @return {number}
 */
const map = {
    'I': { value: 1 },
    'V': { value: 5, pre: 'I' },
    'X': { value: 10, pre: 'I' },
    'L': { value: 50, pre: 'X' },
    'C': { value: 100, pre: 'X' },
    'D': { value: 500, pre: 'C' },
    'M': { value: 1000, pre: 'C' },
};
var romanToInt = function(s) {
    let i = s.length - 1;
    let result = 0;
    while (i>=0) {
        const item = map[s[i]];
        if (s[i-1] && s[i-1] === item.pre) {
            result += item.value - map[item.pre].value;
            i -= 2;
        } else {
            result += item.value;
            i -= 1;
        }
    }
    return result;
};
