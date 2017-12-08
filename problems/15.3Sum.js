// eslint-disable-next-line
const threeSum = (numbers) => {
  const results = [];

  const sortedNumbers = numbers.sort((a, b) => a - b);
  const map = new Map();
  const sortedFilteredNumbers = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (sortedNumbers[i] === sortedFilteredNumbers[sortedFilteredNumbers.length - 2] &&
      sortedNumbers[i] === 0 &&
      results.length === 0) {
      results.push([0, 0, 0]);
    } else if (sortedNumbers[i] !== sortedFilteredNumbers[sortedFilteredNumbers.length - 2]) {
      sortedFilteredNumbers.push(sortedNumbers[i]);
      map.set(sortedNumbers[i], sortedFilteredNumbers.length - 1);
    }
  }

  for (let i = 0; i < sortedFilteredNumbers.length - 1; i += 1) {
    if (sortedFilteredNumbers[i] +
      sortedFilteredNumbers[sortedFilteredNumbers.length - 2] +
      sortedFilteredNumbers[sortedFilteredNumbers.length - 1] < 0 ||
      sortedFilteredNumbers[i] +
      sortedFilteredNumbers[i + 1] +
      sortedFilteredNumbers[i + 2] > 0) {
      continue;
    }
    for (let j = i + 1; j < numbers.length; j += 1) {
      if (map.get(0 - sortedFilteredNumbers[i] - sortedFilteredNumbers[j]) > j) {
        results.push([
          sortedFilteredNumbers[i],
          sortedFilteredNumbers[j],
          0 - sortedFilteredNumbers[i] - sortedFilteredNumbers[j],
        ]);
      }
      while (sortedFilteredNumbers[j] === sortedFilteredNumbers[j + 1] && j < numbers.length) {
        j += 1;
      }
    }
    while (sortedFilteredNumbers[i] === sortedFilteredNumbers[i + 1] &&
    i < sortedFilteredNumbers.length - 1) {
      i += 1;
    }
  }

  return results;
};
