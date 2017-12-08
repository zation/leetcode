// eslint-disable-next-line
const threeSumClosest = (numbers, target) => {
  if (numbers.length === 3) return numbers[0] + numbers[1] + numbers[2];
  let result;
  let distance = Number.MAX_VALUE;
  const sortedNumbers = numbers.sort((a, b) => a - b);

  let i = 0;
  while (i < sortedNumbers.length - 1) {
    let j = i + 1;
    let k = sortedNumbers.length - 1;
    while (j < k) {
      const sum = sortedNumbers[i] + sortedNumbers[j] + sortedNumbers[k];
      const currentDistance = Math.abs(sum - target);
      if (currentDistance < distance) {
        distance = currentDistance;
        result = sum;
        if (distance === 0) {
          return result;
        }
      }
      if (sum > target) {
        k -= 1;
      } else {
        j += 1;
      }
    }
    i += 1;
  }
  return result;
};
