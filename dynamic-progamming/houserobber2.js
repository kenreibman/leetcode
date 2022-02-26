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
  // if input is 3 or less houses, retuyrn max value within 3 since we cannot rob 2 houses
  if (nums.length <= 3) return Math.max(...nums);

  // return max when you include start of the array or end of the array, excluding start, excluding end.
  return Math.max(helper(1)), helper(nums.slice(0, nums.length - 1));

  //helper function (same as solution for Robber I problem
  function helper(nums) {
    let oneBefore = 0;
    let lastOne = 0;
    for (let i in nums) {
      let temp = Math.max(nums[i] + oneBefore, lastOne);
      oneBefore = lastOne;
      lastOne = temp;
    }
    return lastOne;
  }
};
