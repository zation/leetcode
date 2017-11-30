// eslint-disable-next-line
const twoSum = (numbers, target) => {
  const map = {};
  for (let i = 0; i < numbers.length; i += 1) {
    const number = numbers[i];
    const anotherNumber = target - number;
    const anotherNumberIndex = map[anotherNumber.toString()];
    if (anotherNumberIndex >= 0) {
      return [anotherNumberIndex, i];
    }
    map[number.toString()] = i;
  }
  return [];
};
