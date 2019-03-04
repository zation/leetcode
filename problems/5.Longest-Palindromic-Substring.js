/**
 * @param {string} s
 * @return {string}
 */
const getStartAndEnd = (s, start, end) => {
    while(start >= 0 && end <s.length && s[start] === s[end]) {
        start -= 1;
        end += 1;
    }
    return [start + 1, end - 1];
}

var longestPalindrome = function(s) {
    if (!s || s.length === 0) {
        return '';
    }
    let start = 0;
    let end = 0;
    for (let i=0; i<s.length; i+=1) {
        const [start1, end1] = getStartAndEnd(s, i, i);
        const [start2, end2] = getStartAndEnd(s, i, i + 1);
        if (end1 - start1 >= end2 - start2 && end1 - start1 > end - start) {
            end = end1;
            start = start1;
        } else if (end2 - start2 > end1 - start1 && end2 - start2 > end - start) {
            end = end2;
            start = start2;
        }
        console.log(i, end, end1);
    }
    return s.substring(start, end + 1);
};
