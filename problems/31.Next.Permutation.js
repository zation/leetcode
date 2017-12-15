const swap = (numbers, i, j) => {
  const temp = numbers[i];
  numbers[i] = numbers[j];
  numbers[j] = temp;
};

const reverse = (numbers, start) => {
  let i = start;
  let j = numbers.length - 1;
  while (i < j) {
    swap(numbers, i, j);
    i += 1;
    j -= 1;
  }
};

// eslint-disable-next-line
const nextPermutation = (numbers) => {
  let i = numbers.length - 2;
  while (i >= 0 && numbers[i + 1] <= numbers[i]) {
    i -= 1;
  }
  if (i >= 0) {
    let j = numbers.length - 1;
    while (j >= 0 && numbers[j] <= numbers[i]) {
      j -= 1;
    }
    swap(numbers, i, j);
  }
  reverse(numbers, i + 1);
};
