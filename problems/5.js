// eslint-disable-next-line
const longestPalindrome = (s) => {
  if (!s || s.length === 1) return s;
  let result = s[0];
  let temp;
  let left;
  let right;
  let i = 0;
  while (i < s.length) {
    temp = s[i];
    right = i + 1;
    left = i - 1;

    while (s[i] === s[right]) {
      temp += s[right];
      right += 1;
      i += 1;
    }
    while (right < s.length && left >= 0) {
      if (s[left] === s[right]) {
        temp = s[left] + temp + s[right];
        left -= 1;
        right += 1;
      } else {
        break;
      }
    }
    if (temp.length > result.length) {
      result = temp;
    }
    i += 1;
  }
  return result;
};
