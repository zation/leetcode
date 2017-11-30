// eslint-disable-next-line
const lengthOfLongestSubstring = (s) => {
  if (!s) return 0;
  const map = {};
  let j = 0;
  let max = 0;
  for (let i = 0; i < s.length; i += 1) {
    if (map[s[i]] >= 0) {
      j = Math.max(map[s[i]] + 1, j);
    }
    map[s[i]] = i;
    max = Math.max(max, (i - j) + 1);
  }
  return max;
};
