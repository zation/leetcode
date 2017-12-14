// eslint-disable-next-line
const searchRange = (numbers, target) => {
  let start = 0;
  let end = numbers.length - 1;
  while (end >= start) {
    const cursor = Math.floor((end - start) / 2) + start;
    if (numbers[cursor] === target) {
      let resultStart = cursor - 1;
      while (numbers[resultStart] === target) resultStart -= 1;
      let resultEnd = cursor + 1;
      while (numbers[resultEnd] === target) resultEnd += 1;
      return [resultStart + 1, resultEnd - 1];
    }
    if (numbers[cursor] > target) {
      end = cursor - 1;
    } else {
      start = cursor + 1;
    }
  }
  return [-1, -1];
};
