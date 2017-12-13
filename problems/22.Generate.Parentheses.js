const addString = (result, string, startCount, endCount, max) => {
  if (string.length === max * 2) {
    result.push(string);
    return result;
  }
  if (startCount < max) {
    addString(result, `${string}(`, startCount + 1, endCount, max);
  }
  if (endCount < startCount) {
    addString(result, `${string})`, startCount, endCount + 1, max);
  }
};

// eslint-disable-next-line
const generateParenthesis = (n) => {
  const result = [];
  addString(result, '', 0, 0, n);
  return result;
};
