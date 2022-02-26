// https://www.youtube.com/watch?v=Atr_z-JrMSI&ab_channel=AndyGala

/*
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.
*/

var combinationSum2 = function (candidates, target) {
  //global result
  const result = [];

  // sort input
  candidates.sort((a, b) => a - b);

  // dfs recursive helper
  const dfs = (i, candidates, target, slate) => {
    // backtracking case
    if (target < 0) return;

    // base case
    if (target === 0) {
      result.push(slate.slice());
      return; // we make a copy of the slate so we use just 1 array. If we don't make a copy, we need to use a new array every single node of the tree.
    }
    // dfs recursive case => create a for loop for i and j
    for (let j = i; j < candidates.length; j++) {
      // deal with duplicates => if i at the 0 index !== j at the 1 index, but j at the 1 index - 1 === i then skip over it..
      if (i !== j && candidates[j] === candidates[j - 1]) continue;
      slate.push(candidates[j]);
      dfs(j + 1, candidates, target - candidates[j], slate); //
      // target - candidates[j] is keeping track of the sum of whatever is in the slate. At every level we are subtracting off the target.
      // If target is < 0 then the sum of whatever is in the slate is > target, we want to backtrack
      // If target === 0 then whatever is in our slate is === to our target.
      slate.pop();
    }
  };
  dfs(0, candidates, target, []);
  return result;
};
