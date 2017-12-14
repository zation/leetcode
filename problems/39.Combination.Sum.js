const getResult = (result, temp, candidates, target, start) => {
  if (target < 0) {
    return;
  }
  if (target === 0) {
    result.push(temp);
  } else {
    for (let i = start; i < candidates.length; i += 1) {
      temp = [...temp, candidates[i]];
      getResult(result, temp, candidates, target - candidates[i], i);
      temp = temp.slice(0, temp.length - 1);
    }
  }
};

const combinationSum = (candidates, target) => {
  const result = [];
  getResult(result, [], candidates.sort((a, b) => a - b), target, 0);
  return result;
};
