/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
*/

/*
I: Integer array representing money in each house
O: integer representing max money stolen
C: cannot steal 2 adjacent indices
E: if we have 3 or less houses
*/

var rob = function (nums) {
  if (!nums.length) return 0;
  // checks length of array, if it's only at 1, you're robbing that 1
  if (nums.length === 1) return nums[0];
  // If there are 2 houses on the block, rob the one that has the most$
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  // Return max between subarray if we started robbing at the first house or if we started robbing at the second house
  return Math.max(
    helper(nums.slice(0, nums.length - 1)),
    helper(nums.slice(1))
  );

  // Helper function follows same logic as house robber 1
  function helper(segment) {
    if (!segment.length) return 0;
    if (segment.length === 1) return segment[0];
    if (segment.length === 2) return Math.max(segment[0], segment[1]);
    const dp = [segment[0], Math.max(segment[0], segment[1])];
    for (let i = 2; i < segment.length; i++) {
      dp[i] = Math.max(segment[i] + dp[i - 2], dp[i - 1]);
    }
    return dp[dp.length - 1];
  }
};
