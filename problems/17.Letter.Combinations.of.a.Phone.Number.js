const map = new Map([
  ['1', ['?']],
  ['2', ['a', 'b', 'c']],
  ['3', ['d', 'e', 'f']],
  ['4', ['g', 'h', 'i']],
  ['5', ['j', 'k', 'l']],
  ['6', ['m', 'n', 'o']],
  ['7', ['p', 'q', 'r', 's']],
  ['8', ['t', 'u', 'v']],
  ['9', ['w', 'x', 'y', 'z']],
  ['0', [' ']],
  ['*', ['+']],
  ['#', ['??']],
]);

const combine = (array1, array2) => {
  const result = [];
  for (let i = 0; i < array1.length; i += 1) {
    for (let j = 0; j < array2.length; j += 1) {
      result.push(array1[i] + array2[j]);
    }
  }
  return result;
};

const getLetters = (digits, results) => {
  if (digits.length === 1) {
    return combine(map.get(digits[0]), results);
  }
  return getLetters(digits.slice(0, -1), combine(map.get(digits[digits.length - 1]), results));
};

// eslint-disable-next-line
const letterCombinations = (digits) => {
  if (!digits) return [];
  if (digits.length === 1) return map.get(digits[0]);
  return getLetters(digits.slice(0, -1), map.get(digits[digits.length - 1]));
};
