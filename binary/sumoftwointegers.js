// Understanding Binary and the Problem
// https://www.youtube.com/watch?v=qq64FrA2UXQ&ab_channel=BackToBackSWE

// Where does a carry get applied? It gets applied 1 to the left

// a is going to hold running addition result
// b is going to hold carries

// 1. Find carries
// 2. Do the "addition", store it in a and..
// 3. B holds left shifted carry

// & shows the position that need to be carried.
// carry = the remainder after adding the binary
// how do we actually add bits together? That's when...
// XOR ^ (Exclusive or) comes into place. => ^ is when both are true 1 and 1, it creates a false. XOR helps simulating addition.
// << left shift operator => shifts each binary digit by 1, when we have to carry

// LEETCODE: https://leetcode.com/problems/sum-of-two-integers/discuss/606544/Javascript%3A-Very-detailed-explanation-with-two-code-versions.-Enjoy!

// Given two integers a and b, return the sum of the two integers without using the operators + and -.

var getSum = function (a, b) {
  let carry;
  while ((a & b) !== 0) {
    carry = (a & b) << 1;
    a = a ^ b;
    b = carry;
  }
  return a ^ b;
};
