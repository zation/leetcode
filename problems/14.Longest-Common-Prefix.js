// eslint-disable-next-line
const longestCommonPrefix = (strings) => {
  if (!strings || !strings[0]) return '';
  let result = '';
  for (let i = 0; i < strings[0].length; i += 1) {
    const char = strings[0][i];
    for (let j = 1; j < strings.length; j += 1) {
      if (strings[j][i] !== char) {
        return result;
      }
    }
    result += char;
  }
  return result;
};
