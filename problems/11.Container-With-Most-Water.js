// eslint-disable-next-line
const maxArea = (heights) => {
  let i = 0;
  let j = heights.length - 1;
  let result = 0;
  while (i < j) {
    result = Math.max(Math.min(heights[i], heights[j]) * (j - i), result);
    if (heights[i] < heights[j]) {
      i += 1;
    } else {
      j -= 1;
    }
  }
  return result;
};
