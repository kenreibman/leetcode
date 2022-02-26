// https://www.youtube.com/watch?v=y0nvBP6gZ-0&ab_channel=KAEducation

// Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.
// The test cases are generated so that the answer will fit in a 32-bit integer.
// A subarray is a contiguous subsequence of the array.

// You can't paste our maximumsubarray and modify it to a * because it doesn't account for negative numbers!

// Account for negative numbers:
// Create two Dynamic Programming arrays
// Input: [-2, 3, -4]
// maxTillIndex: [-2, 3, 24]
// minTillIndex: [-2, -6, -12]

// When the code is finished, we return the largest value in maxTillIndex
// maxTillIndex[i] = Math.max(Input[i], Input[i] * maxtillIndex[i - 1], Input[i] * minTillIndex[i - 1])
// minTillIndex[i] = Math.min(Input[i], Input[i] * maxTillIndex[i - 1], Input[i] * minTillIndex[i -1])

// Implementing our code

function maxProduct(nums) {
  // 1. = to an array where the first value is the 1st input in array
  let maxTillIndex = [nums[0]];
  // 2. same thing for minTillIndex. Why? The maximum product and the smallest product by itself is the 1st number itself
  let minTillIndex = [nums[0]];
  // 3. Minor time complexity optimization from maximum subarray problem
  let solution = nums[0];

  //4. 
  for (let i = 1; i < nums.length; i++) {
      // 5. make code easier to read
      const num = nums[i];
      // 6. Fill out the corresponding maxTillIndex and minTillIndex in the correct index spot
      // maxTillIndex at index i is equal = to whichever is larger (Math.max) the input number itself (num), the input number times the number before it (num * maxTillIndex[i - 1]), OR input number times the smallest product to the left of it. Since it's multiplication, a small number can also result in a large number (num * minTillIndex[i - 1])
      maxTillIndex[i] = Math.max(num, num * maxTillIndex[i - 1], num * minTillIndex[i - 1]);
      // 7. Same input but it's Math.min
      minTillIndex[i] = Math.min(num, num * maxTillIndex[i - 1], num * minTillIndex[i - 1]);

      //8. Update solution variable, whichever is bigger the solution or the maxTillIndex
      solution = Math.max(solution, maxTillIndex[i])
  }

  return solution
}

.prettierIgnore

// Time Complexity: O(n)
// Space Complaxity: O(n) because we created two Dynamic Programming arrays, each same length as the input