// https://www.youtube.com/watch?v=WdK1Uhsza_I&ab_channel=ThinkFWD
// THIS VIDEO EXPLAINS IT VERY WELL.
// https://www.youtube.com/watch?v=2MmGzdiKR9Y&ab_channel=BackToBackSWE
// KADANE'S ALGORITHM
// https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Look at your inputs and your expected output. This case it's a sum (single number)

// The given pattern: Add the given integers and create a single largest sum out of it.

// [-2, -1, -3, -4, -1, 2, 1, -5, 4]
// Cumulate the numbers. Let's say -3 + 1 is -2, that's > -3
//

function maxSubArray(nums) {
  let solution = nums[0]; // 1. Define solution, 1st variable.

  // 2. Start from 1 in for loop => Why start from 1? Because you don't need to add the first digit in array.
  for (let i = 1; i < nums.length; i++) {
    // 3. KADANE's ALGORITHM
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]); // we take the current index nums[i] and take the current nums at i + the previous max value (best value).

    solution = Math.max(solution, nums[i]); // 4. solution can be that maximum number or the nums at i
  }

  return solution;
}

// Contiguous = no break in a snippet
// Dynamic Programming.
// This function basically extracts the best possible answer, and ignores answers that are not close to the maximum sum
