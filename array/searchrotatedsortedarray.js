// https://www.youtube.com/watch?v=dgwIx9cXovM&ab_channel=ThinkFWD

/* There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

 You must write an algorithm with O(log n) runtime complexity.
 */

// Paraphrase question: Given an array, originally in ascenting order, then it was pivoted at some point in time.
// ie. [4,5,6,7,0,1,2] target = 0
// output 4
// ie. [4,5,6,7,0,1,2] target = 3
// output -1

// Sorted attribute is KEY.
// Use a BINARY SEARCH METHOD and
// Use algorithm to determine midpoint

// nums = [4,5,6,7,8,0,1,2]
// left = [0] = 4
// right = [7] = 2
// midpoint = [3] = 7

// target = 8

// Establish left, right mp, then check if left segment is sorted, then if left is not sorted, then move to right segment.
// If left segment is less than the mp, then that means left segment is sorted, and you can tell if your target sits within the left boundary.
// Check if target(8) > 4, and less than 7. Since 8 is not less than 7, we have to adjust the left segment to be the mp + 1
// Since target > 7...

// look at right side [8,0,1,2]
// left = [4] = 8
// right = [7] = 2
// midpoint = [5] = 0
// In this case, left is > mp so make a new boundary
// [0,1,2]

/* 
LEETCODE EXPLANATION
Let's take some examples and see how we can simplify the condition.

Original sorted array
[1, 2, 3, 4, 5, 6, 7]

After rotation, it might be something like
[3, 4, 5, 6, 7, 1, 2]
[6, 7, 1, 2, 3, 4, 5]
[1, 2, 3, 4, 5, 6, 7] <-- rotated and end up the same
and etc..

When you divide the rotated array into two halves, using mid index, at least one of subarray should remain sorted ALWAYS.

[3, 4, 5, 6, 7, 1, 2]
-> [3, 4, 5] [ 6, 7, 1, 2]
the left side remains sorted

[6, 7, 1, 2, 3, 4, 5]
-> [6, 7, 1] [2, 3, 4, 5]
the right side remains sorted

[1, 2, 3, 4, 5, 6, 7]
-> [1, 2, 3] [4, 5, 6, 7]
Both sides remain sorted.

If you know one side is sorted, the rest of logic becomes very simple.
If one side is sorted, check if the target is in the boundary, otherwise it's on the other side.

//
IF smallest <= target <= biggest
  then target is here
ELSE
  then target is on the other side
//
*/

var search = function (nums, target) {
  // 1. Create left
  let left = 0;
  // 2. Creat right
  let right = nums.length - 1;

  // 3. Run this while loop until they meet together.
  while (left <= right) {
    // 4. Define midpoint
    let midPoint = Math.floor((left + right) / 2);
    // 5. Check if midpoint is = to the target, if it is, return mP
    if (nums[midPoint] === target) return midPoint;

    // 6. If midpoint is not your target, what do we do?
    // This determines which segment is sorted. If left is <= to midPoint, you know left is sorted.
    if (nums[left] <= nums[midPoint]) {
      // 7. if nums at left segment is <= target && target <= to the mP, I know that target is within range of left quadrant so you make the right adjustment to be mid - 1.
      if (nums[left] <= target && target <= nums[midPoint])
        right = midPoint - 1;
      // 8. Otherwise, you know it will sit on the right segment, so you make left = midPoint + 1
      else left = midPoint + 1;
      // 9.
    } else {
      if (nums[midPoint] <= target && target <= nums[right])
        left = midPoint + 1;
      else right = midPoint - 1;
    }
  }
  // 10. If it doesn't hit the target, return -1
  return -1;
};

// Time Complexity: O(log n)
