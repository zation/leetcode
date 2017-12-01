// eslint-disable-next-line
const myAtoi = (s) => {
  let sign = 1;
  let resultString = '';
  let i = 0;
  while (s[i] === ' ' && i < s.length) {
    i += 1;
  }
  if (s[i] === '-') {
    sign = -1;
    i += 1;
  } else if (s[i] === '+') {
    i += 1;
  }
  while (i < s.length) {
    if (resultString === '' && s[i] === '0') {
      i += 1;
      continue;
    }

    if (!s[i].match(/\d/)) {
      return resultString === '' ? 0 : sign * Number(resultString);
    }

    if (
      Number(resultString) > 214748364 || (
        Number(resultString) === 214748364 &&
        (sign > 0 ? Number(s[i]) > 7 : Number(s[i]) > 8)
      )
    ) {
      return sign > 0 ? 2147483647 : -2147483648;
    }

    resultString += s[i];
    i += 1;
  }

  return sign * Number(resultString);
};

console.log(myAtoi('  -0012a42'));
