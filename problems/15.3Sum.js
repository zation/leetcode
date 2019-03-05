/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const threeSum = function (nums) {
  if (!nums || nums.length === 0) {
    return [];
  }
  const sortedNums = nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < sortedNums.length; i += 1) {
    let start = i + 1;
    let end = sortedNums.length - 1;
    const sum = -sortedNums[i];
    while (start < end) {
      const startNumber = sortedNums[start];
      const endNumber = sortedNums[end];
      if (startNumber + endNumber < sum) {
        start += 1;
      } else if (startNumber + endNumber > sum) {
        end -= 1;
      } else {
        result.push([-sum, startNumber, endNumber]);

        while (start < end && startNumber === sortedNums[start]) {
          start += 1;
        }
        while (start < end && endNumber === sortedNums[end]) {
          end -= 1;
        }
      }
    }
    while (sortedNums[i] === sortedNums[i + 1]) {
      i += 1;
    }
  }
  return result;
};
