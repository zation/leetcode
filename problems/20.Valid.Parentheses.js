const map = new Map([
  ['}', '{'],
  [']', '['],
  [')', '('],
]);

// eslint-disable-next-line
const isValid = (s) => {
  const stack = [];
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.unshift(s[i]);
      continue;
    }
    if (stack[0] !== map.get(s[i])) {
      return false;
    }
    stack.shift();
  }
  return stack.length === 0;
};
