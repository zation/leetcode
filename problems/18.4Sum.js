var fourSum = function (nums, target) {
  const sortedNums = nums.sort((a, b) => a - b);
  let i = 0;
  let j = 1;
  const result = [];
  while (i < sortedNums.length - 3) {
    let start = j + 1;
    let end = sortedNums.length - 1;
    while (start < end) {
      const startNumber = sortedNums[start];
      const endNumber = sortedNums[end];
      const sum = sortedNums[i] + sortedNums[j] + startNumber + endNumber;
      if (sum > target) {
        end -= 1;
        while (start < end && sortedNums[end] === endNumber) end -= 1;
      } else if (sum < target) {
        start += 1;
        while (start < end && sortedNums[start] === startNumber) start += 1;
      } else {
        result.push([sortedNums[i], sortedNums[j], startNumber, endNumber]);
        end -= 1;
        start += 1;
        while (start < end && sortedNums[end] === endNumber) end -= 1;
        while (start < end && sortedNums[start] === startNumber) start += 1;
      }
    }
    if (j >= sortedNums.length - 3) {
      i += 1;
      while (i < sortedNums.length - 3 && sortedNums[i] === sortedNums[i - 1]) i += 1;
      j = i + 1;
    } else {
      j += 1;
      while (j < sortedNums.length - 2 && sortedNums[j] === sortedNums[j - 1]) j += 1;
    }
  }
  return result;
};
