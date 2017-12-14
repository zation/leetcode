// eslint-disable-next-line
const search = (numbers, target) => {
  if (target >= numbers[0]) {
    for (let i = 0; i < numbers.length; i += 1) {
      if (target === numbers[i]) return i;
      if (numbers[i] < numbers[0]) return -1;
    }
  } else {
    for (let i = numbers.length - 1; i > 0; i -= 1) {
      if (target === numbers[i]) return i;
      if (numbers[i] > numbers[0]) return -1;
    }
  }
  return -1;
};
