.prettierIgnore

// https://www.youtube.com/watch?v=tVr0xWxnX14&ab_channel=ThinkFWD
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// Example array: [1, 2, 3, 1]

function containsDuplicate(nums) {
  // 1. Create a memory, hash table, dictionary as an {object}
  let memory = {};
  // 2. Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // 3. Go through array and see if it is something i've seen before. If # is never seen before, put it in my memory
    // We go through the array... if 1 something before? Not yet so if memory[nums[i]] === undefined 
    if (memory[nums[i]] === undefined) { 
      //4. Store that number in the memory object
      memory[nums[i]] = i;
    } else {
      // 5. if # does exist in memory, return true
      return true;
    }
  }
  // 6. if # does not exist in memory, return false
  return false;
}

// Time complexity = O(n) because you go through the array once
// Space Complexity = O(n)

// Case 2
function containsDuplicate(nums) {
    // Sort our input array first O(n log n)
    nums.sort((a,b) => {return b-a});
    for(let i = 0; i < nums.length; i++) {
        if(i > 0 && nums[i - 1] === nums[i]) { // if i is greater than 0 and nums at i - 1 equals nums i
            return true;
        } 
    }
    return false
}

