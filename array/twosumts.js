// Time complexity
// https://www.youtube.com/watch?v=M4ubFru2O80&ab_channel=BackToBackSWE
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
const nums = [2, 7, 11, 15];
// techsith

// Summary: a number array, second input is target, find two numbers in the array that add up to 9.
// The output is the indexes of the two numbers
// What is the input: The array(nums), and target
// Output: an array

// target = 9
// corner case: what if the output array is empty? []
// corner case: array does not add up to target [1, 1] != 9 || [1, 1] = []
// corner case: multiple solutions [2,7,2,7] => [0,1]

// Solution 1: Bruteforce, O(n^2) but NOT the best way.

/* BEST WAY: Use JS objects: O(n)
{
Take the number (2) and subtract from target (9) which gives you 7.
7 is the compliment of (2). => 7:0 (0 is array)

Then check if number (7) exists inside the array. If it does, you already found the compliment.
}

*/

function twoSum(nums, target) {
  const comp = new Map(); // 1. create a map called (compliment)
  const len = nums.length; // 2. create a variable for nums array length (len)
  // 3. for Loop => always calculate length outside, it adds a complexity everytime the loop is ran.
  for (let i = 0; i < len; i++) {
    // 5. check if number exists as a compliment
    if (comp[nums[i]] >= 0) {
      return [comp[nums[i]], i]; // 6. then return the compliments number and index of number
    }
    comp[target - nums[i]] = i; // 4. Inside the compliment, save [target - nums[i]] and save as a value = i (index)
  }
  return []; // 7. return [] if no pair is found.
}

// console.log(twoSum(nums, 9));

// **Complexity is O(n) because we are visiting every single number once.
