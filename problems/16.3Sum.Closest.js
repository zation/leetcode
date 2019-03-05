/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
  const sortedNums = nums.sort((a, b) => a - b);
  let result = sortedNums[0] + sortedNums[1] + sortedNums[2];
  for (let i = 0; i < sortedNums.length; i += 1) {
    let start = i + 1;
    let end = sortedNums.length - 1;
    while (start < end) {
      const startNumber = sortedNums[start];
      const endNumber = sortedNums[end];
      const sum = sortedNums[i] + startNumber + endNumber;
      if (sum === target) {
        return sum;
      }
      if (Math.abs(sum - target) < Math.abs(result - target)) {
        result = sum;
      }
      if (sum < target) {
        while (start < end && startNumber === sortedNums[start]) start += 1;
      } else {
        while (start < end && endNumber === sortedNums[end]) end -= 1;
      }
    }
    while (sortedNums[i] === sortedNums[i + 1]) i += 1;
  }
  return result;
};
