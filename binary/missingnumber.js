// https://www.youtube.com/watch?v=8rMNikLmheI&ab_channel=AndyGala
// We can sort the array which T: O(n log n) and run a linear scan which would be S: O(1)

// Another way.. we can use the hasing method.
// nums = [3,0,1]
// n = nums.length
// set i = 0 and i <= n, then check if that key is in the hash.
// if it goes to 1, it's true
// 0 is there, 1 is there, 2 is not here to you return 2.
//
// Hashing Time complexiry would be O(n) and we have to create linear space O(n) with this hash.
//
// Is there a way to do this with Linear time and constant space?
// Formula that you can use to get the sum of all nums:
// gSum = n * (n + 1) / 2

var missingNumber = function (nums) {
  const gSum = (nums.length * (nums.length + 1)) / 2;
  // reduce all nuymbers inside array
  const nSum = nums.reduce((acc, el) => acc + el, 0);

  return gSum - nSum;
};
