// https://www.youtube.com/watch?v=-3KG82kuD78&ab_channel=ThinkFWD

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

// Summarized: Given an array [1,2,3]... return at position [0], it does 2 x 3, if at position [1], 1 x 3, position[3], 1 x 2

/*
What is your Input, Output, and Conditions?
I: The array of numbers[] - nums
O: An array of numbers[] - product of all elements except for itself
C: O(n) time complexity, cannot use division
--> Why these conditions?
nums = [1,2,3,4]
- If you use division, when you multiply things together like A*B*C / B you always get A*C

Given an array [1,2,3] If we bruteforce it, it would be O(n^2)
[2x2, 1x3, 1x2]
*/

// nums = [1,2,3,4]
// construct an array that tell us what is to the left (n-1)
// leftProduct = [1, 1, 2, 6]
// construct an array that tell us what is to the right
// rightProduct = [24, 12, 4, 1]
// Make a solution array
// solutionArray = [24, 12, 8, 6]
// A*B*C*D = ABCD
// **Basically create 2 places to store stuff and construct our final solution

function productExceptSelf(nums) {
  // 1. Create the variables and prepare to return a solution
  let leftProduct = [];
  let rightProduct = [];
  let solution = [];

  //2. populate left product \\It's basically three for loops total.
  for (let i = 0; i < nums.length; i++) {
    // 3. if statement for leftProduct
    if (leftProduct.length === 0) {
      // initialize it first
      leftProduct.push(1);
    } else {
      // 4. Pushing in my previous value at leftProduct[i - 1]*nums[i - 1] because you want to lag behind on the array by 1
      leftProduct.push(leftProduct[i - 1] * nums[i - 1]);
    }
  }
  // 5. populate right product, you can use i here because of scoping.
  // GO BACKWARDS:
  // You want to start i at the end of array with nums.length.
  for (let i = nums.length - 1; i > -1; i--) {
    // 6. if statement for rightProduct
    if (rightProduct.length === 0) {
      rightProduct.push(1); // instantiate it
    } else {
      // 7. As we construct this backwards, instead of push we want to put values in the right with unshift.
      rightProduct.unshift(rightProduct[0] * nums[i + 1]);
      // 7. Take the right product at position 0, and multiply that by nums at i + 1 because as you iterate backwards, you're multiplying 1 x 4, 4 x 3, 12 x 2,
    }
  }
  //8. populate solution
  for (let i = 0; i < leftProduct.length; i++) {
    //9.
    solution.push(leftProduct[i] * rightProduct[i]);
  }

  // (first cont.) and return a solution
  return solution;
}
