// eslint-disable-next-line
const isMatch = (s, p) => {
  if (!p) return !s;
  const isFirstMatch = !!s && (p[0] === s[0] || p[0] === '.');
  if (p.length >= 2 && p[1] === '*') {
    return isMatch(s, p.substring(2)) || (isFirstMatch && isMatch(s.substring(1), p));
  }
  return isFirstMatch && isMatch(s.substring(1), p.substring(1));
};
