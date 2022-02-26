// https://www.youtube.com/watch?v=ljRHG5yPBBo&ab_channel=AndyGala

var combinationSum = function (candidates, target) {
  // global result
  const result = [];
  // sort the candidates
  candidates.sort((a, b) => a - b);

  // dfs recursive helper
  const dfs = (i, candidates, target, slate) => {
    // backtracking case, because there's nothing else in that recursive tree that will add up to our target because we are over it. If the sum of all numbers in our slate is > target, we just return nothing.
    if (target < 0) return;

    // base case. target === 0 means our sum of our slate values equals our target,
    if (target === 0) {
      // then we push into our global result and make a copy of slate
      result.push(slate.slice());
      return;
    }

    // dfs recursive case, loop through
    for (let j = i; j < candidates.length; j++) {
      // what do we want to check? We want to push whatever is on j to our slate
      slate.push(candidates[j]);
      // consider the sum of all duplicate values
      dfs(j, candidates, target - candidates[j], slate);
      slate.pop();
    }
  };
  dfs(0, candidates, target, []);
  return result;
};
