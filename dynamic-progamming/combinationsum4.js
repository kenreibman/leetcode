/*
Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.

The test cases are generated so that the answer can fit in a 32-bit integer.
*/

var combinationSum4 = function (nums, target) {
  const memo = new Map();

  return topDown(target);

  function topDown(target) {
    // base cases
    if (target === 0) return 1;
    if (target < 0) return 0;
    if (memo.has(target)) return memo.get(target);

    let count = 0;

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (num <= target) {
        const amountLeft = target - num;
        count += topDown(amountLeft);
      }
    }
    memo.set(target, count);
    return count;
  }
};
