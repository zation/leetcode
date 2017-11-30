// eslint-disable-next-line
const convert = (s, n) => {
  let result = '';
  if (n === 1) return s;

  // 0, 2n-2, 4n-4
  for (let j = 0; 2 * j * (n - 1) < s.length; j += 1) {
    result += s[j * (2 * n - 2)];
  }

  for (let i = 1; i < n - 1; i += 1) {
    // 1, 2n-3, 2n-1, 4n-5, 4n-3, j(2n )
    // 2, 2n-4, 2n, 4n-6, 4n-4

    if (i < s.length) {
      result += s[i];
    }
    let j = 1;
    while (true) {
      if (2 * j * (n - 1) - i < s.length) {
        result += s[2 * j * (n - 1) - i];
      } else {
        break;
      }
      if (2 * j * (n - 1) + i < s.length) {
        result += s[2 * j * (n - 1) + i];
      } else {
        break;
      }
      j += 1;
    }
  }

  // n-1, 3n-3, 5n-5
  for (let j = 0; (2 * j + 1) * (n - 1) < s.length; j += 1) {
    result += s[j * (2 * n - 2) + n - 1];
  }

  return result;
};

console.log(convert("ABCDEF", 3));
