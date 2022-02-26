// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

const nums = [2, 7, 11, 15];

// web dev simplified

var twoSum = function (nums, target) {
  const previousValues = {}; // create previous values hash (empty object)
  for (let i = 0; i < nums.length; i++) {
    // Loop through our nums array
    const currentNumber = nums[i]; // Get current number
    const neededValue = target - currentNumber; // Get the value that we need
    const index2 = previousValues[neededValue]; // Check to see if we have an index equal to neededValue
    if (index2 != null) {
      return [index2, i];
    } else {
      // Incase we don't have anything for our index2
      previousValues[currentNumber] = i; // Take our pV and cN, store the index within our current #.
    }
  }
};

twoSum(nums, 9);
