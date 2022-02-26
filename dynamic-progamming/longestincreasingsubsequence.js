// https://www.youtube.com/watch?v=fV-TF4OvZpk&ab_channel=BackToBackSWE

// [-1,3,4,5,2,2,2,2]
// Longest non-decreasing: [2,2,2,2]
// "strict" Longest Increasing Sequence: [-1,3,4,5]

// Find the longest increasing subsequence 3 ways:
// Come up with an O(n^2) solution (bruteforce)
// Dynamic Programming Approach (subproblems) O(n^2)
// O(n log n) solution

// When working with DP, ask how am I going to cut them down to subproblems?
// What is the answer to the longest ondecreasing subsequence from the array 0-0, 0-1, 0-2, ...
//
// Start watching here as well
// https://youtu.be/fV-TF4OvZpk?t=370
// Automatic answer: 1
// If j is >= i then we can extend the longest non decrasing subsequence at i
// we add 1 to the answer at i

// Time: O(n^2)
// Space: O(n)

function lengthOfLIS(nums) {
  var lis = [];
  for (var i = 0; i < nums.length; i++) {
    lis.push(1);
    for (var j = 0; j < i; j++) {
      if (nums[j] < nums[i]) lis[i] = Math.max(lis[i], lis[j] + 1);
    }
  }
  return nums.length ? Math.max.apply(null, lis) : 0;
}
