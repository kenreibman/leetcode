/*
Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.
*/

var countBits = function (nums) {
  let bits = [];
  for (let i = 0; i <= nums; i++) {
    // .toString(2) makes it a binary representation .replace with a regex /0/g
    bits.push(Number(i).toString(2).replace(/0/g, '').length);
  }
  return bits;
};
