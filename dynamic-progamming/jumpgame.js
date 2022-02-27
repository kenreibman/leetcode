// https://www.youtube.com/watch?v=2HnlGToCdCc&ab_channel=TerribleWhiteboard

/*
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.
*/

// [2,3,1,1,4] is good
// [3,2,1,0,4] there's a 0 so you can't get to te end
// [2, 0, 0] possible to get to the end
// Check every permutation. Instead of starting at the 1st, how about we start at the last? If we're at the last then that means getting there is possible.
//
//[4,_,_,_,_]
// If the index we're on + the number we're on index[0] + (4) is >= to the target index (4)
//[3,_,_,_,_]
// If the index we're on has a 3, 3 + [0] !>= 4 so we can't get there.
//
// [2,3,1,1,4]
// Our left most valid index is index [4]
// On index[3] can we get to index[4]? On index[3] we have (1). 3 + 1 = 4
// Our left most valid index now is index[3].
// On Index[2] we have (1) and 2 + 1 = 3
// Our left most valid index is now index[2]
// On Index[1] we have (3) is 4 which is > 2
// Our left most valid index is now index[1]
// On Index[0] we have (2) and 0 + 2 > 1
// So our left most valid index is index 0.
//
// [2,0,0]
// Our left most valid index is index[2]
// On Index[1] we have (0) 1 + 0 !>= 2 it's NOT a valid index
// So we move on to Index[0]
// On Index[0] we have(2) and 2 + 0 = 2 which is >= Index[2]
// Since our left most valid index is index[-] we can get from the first index to final.

var canJump = function (nums) {
  // 1. Left most valid index is the final index in the array
  let lastValidIndex = nums.length - 1;
  // 2. Iterate array from right to left
  for (let i = nums.length - 1; i >= 0; i--) {
    // 3. check to see if index we're on is the left most valid index
    if (i + nums[i] >= lastValidIndex) {
      lastValidIndex = i;
    }
  }
  // 4. Return whether the lastValidIndex is equal to 0.
  return lastValidIndex === 0;
};
