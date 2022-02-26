// https://www.youtube.com/watch?v=Vz23n7y1Y8U&ab_channel=AndyGala

var combinationSum3 = function (k, n) {
  // global result
  const result = [];
  const nums = [];
  for (let i = 1; i <= 9; i++) nums.push(i);

  // dfs recursive helper
  const dfs = (i, nums, k, n, slate) => {
    // backtracking case (if sum is greater than n then we backtrack)
    if (n < 0) return;

    // base case
    if (slate.length === k) {
      if (n === 0) {
        result.push(slate.slice());
      }
      return;
    }

    // dfs recursive case
    for (let j = i; j < nums.length; j++) {
      slate.push(nums[j]);
      dfs(j + 1, nums, k, n - nums[j], slate);
      slate.pop();
    }
  };
  dfs(0, nums, k, n, []);
  return result;
};
