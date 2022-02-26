// https://www.youtube.com/watch?v=jXZDUdHRbhY&t=2s&ab_channel=CoderSnacks

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// nums = [-1,0,1,2,-1,-4]

// 3 numbers = target (a+b+c = 0)
var threeSum = function (nums) {
  const results = [];

  if (nums.length < 3) return results;
  // sort the numbers by ascending order which will make this problem easier. Also knowing the overall problem will take at least O(N^2) time, we can afford the O(N log N) sort operation
  nums.sort((a, b) => a - b);

  // Since the question asks for target 0, we control it here.
  let target = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    // i is the "left" most number in our sorted array.
    // once i hits 0 (our target), there's no need to go further since positive numbers cannot = negative number
    if (nums[i] > target) break;

    // skip repeated numbers we've already seen
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // j is the element between i and k.
    // we increment j while i and k are anchored to their position.
    // we will decrement k for each pass through the array, and increment i once j and k meet
    let j = i + 1;
    // k is the right most element in the array
    let k = nums.length - 1;

    // to summarize our setup, i starts at the beginning.
    // k starts at the end, and j is in between the two.
    //
    // i is controlled by the outer for-loop and will move the slowest.
    // in the meantime, j and k will take turns inching toward each other, and
    // we will set up that logic below with a while loop
    // Once j and k collide, we increment i and repeat the process.

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];

      // if we find the target sum, increment j and decrement k for other potential combinations where i is the anchor
      if (sum === target) {
        // store the valid triplesum
        results.push([nums[i], nums[j], nums[k]]);

        // continue to increment j and decrement k as long as those values are duplicated.
        // in other words, skip values we've already seen. otherwise an array like
        // [-2,0,0,2,2] would result in [[-2,0,2], [-2,0,2]].
        //
        // then we do another while loop inside a while loop
        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;

        // finally, we move j forward and k backward to the next unique elements, since
        // the previous while loops will not handle this
        j++;
        k++;

        // if sum is too small, increment j to get closer to the target
      } else if (sum < target) {
        j++;

        // and if the sum is too large, decrement k to get closer to the target
      } else {
        k--;
      }
    }
  }
  return results;
};

// Complexity O(n^2)
// Space O(n)
