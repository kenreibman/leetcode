// https://www.youtube.com/watch?v=EZRYtQF2t1k&ab_channel=ThinkFWD

function rob(nums) {
  // 1. edge cases
  // something that doens't exist
  if (!nums.length) return 0;
  // checks length of array, if it's only at 1, you're robbing that 1
  if (nums.length === 1) return nums[0];
  // If there are 2 houses on the block, rob the one that has the most$
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  // let array = [];
  //2. start at the thrid house [2] in array
  for (let i = 2; i < nums.length; i++) {
    // nums at position i will = to the maxiumum value
    nums[i] = Math.max(nums[i - 2] + nums[i], (nums[i - 3] || 0) + nums[i]);
    // What's i - 3? i - 3 is the place that doesn't exist before the array.
    // if it doesn't exist || then make it a default value of 0
    // This basically takes the maximum value of the houses previous
  }
  // 3.
  return Math.max(nums[nums.length - 1], nums[nums.length - 2]);
}
