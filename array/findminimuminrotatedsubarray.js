// https://www.youtube.com/watch?v=dJC4uHyy2nc&ab_channel=ThinkFWD

// you can say return Math.min(...nums);
// Time complexity for this is O(n)

// We want to do O(log n)
// Binary search
// All I need to do is ensure that the point of reference is greater than the next element and readjust boundaries

// ie, nums = [0,1,2,4,5,6,7] might become: [4,5,6,7,0,1,2] if it was rotated 4 times

var findMin = function (nums) {
  // 1. In a binary search, working with boundaries, establish left and right segment
  let left = 0;
  let right = nums.length - 1;

  // 2. Ensure left index is less than right index
  while (left < right) {
    // 3. Create a midpoint, in any binary search.
    let midPoint = Math.floor((left + right) / 2);
    // 4. Check if the number at the midPoint is greater than the right point // if 7 is greater than 2, adjust the left, if not, change right to the midpoint
    if (nums[midPoint] > nums[right]) left = midPoint + 1;
    // 5.
    else right = midPoint;
  }
  // 6.
  return nums[left];
};
