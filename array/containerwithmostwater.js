// https://leetcode.com/problems/container-with-most-water/discuss/1069746/JS-Python-Java-C%2B%2B-or-2-Pointer-Solution-w-Visual-Explanation-or-beats-100
// It's clear that we need to make a 2-point sliding window solution
// Start from either end, each step we check the container area, and shift the lower valued pointer inward. Once the two pointers meet,
// We exhausted all possible containers and we should return our result

// JavaScript: use Math.max() and Math.min(), had duplicated comparisons

var maxArea = function (H) {
  let ans = 0,
    i = 0,
    j = H.length - 1;
  while (i < j) {
    ans = Math.max(ans, Math.min(H[i], H[j]) * (j - i));
    H[i] <= H[j] ? i++ : j--;
  }
  return ans;
};

// https://leetcode.com/problems/container-with-most-water/discuss/975586/JavaScript-O(n)-time-solution-that's-easy-to-understand

/*
We can see that the area of the container is limited by the smallest side, so we need to know what the smallest side is every iterations

The area of a container is (right - left) multiplied by the smallestSide.
If the area is greater than our result, we have a new result

When moving the left or right pointer, we want to get rid of the smaller side, so iterate from that side
*/

var maxArea = function (height) {
  let result = 0,
    left = 0,
    right = height.length - 1;
  while (left < right) {
    let smallestSide = Math.min(height[left], height[right]);
    let area = (right - left) * smallestSide;

    if (area > result) result = area;

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return result;
};

// Time Complexity: O(n)
