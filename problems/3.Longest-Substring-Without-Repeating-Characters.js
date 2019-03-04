const lengthOfLongestSubstring = (s) => {
  if (!s) return 0;
  const map = new Map();
  let start = 0;
  let max = 0;
  for (let end = 0; end < s.length; end += 1) {
    if (map.has(s[end])) {
      start = Math.max(map.get(s[end]) + 1, start);
    }
    map.set(s[end], end);
    max = Math.max(max, (end - start) + 1);
  }
  return max;
};
