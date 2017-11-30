const getMedian = (numbers) => {
  const size = numbers.length;
  if (size % 2 === 0) {
    return (numbers[(size / 2) - 1] + numbers[size / 2]) / 2;
  }
  return numbers[(size - 1) / 2];
};

// eslint-disable-next-line
const findMedianSortedArrays = (numbers1, numbers2) => {
  const median1 = getMedian(numbers1);
  const median2 = getMedian(numbers2);
  if (median1 === median2) {
    return median1;
  }
  const numbers = [];
  for (let i = 0, j = 0; i < numbers1.length || j < numbers2.length;) {
    if (numbers1[i] === numbers2[j]) {
      numbers.push(numbers1[i]);
      numbers.push(numbers2[j]);
      i += 1;
      j += 1;
    } else if (numbers1[i] < numbers2[j]) {
      numbers.push(numbers1[i]);
      i += 1;
    } else if (numbers2[j] < numbers1[i]) {
      numbers.push(numbers2[j]);
      j += 1;
    } else if (j < numbers2.length) {
      numbers.push(numbers2[j]);
      j += 1;
    } else if (i < numbers1.length) {
      numbers.push(numbers1[i]);
      i += 1;
    }
  }
  return getMedian(numbers);
};

console.log(findMedianSortedArrays([1, 3], [2]));
