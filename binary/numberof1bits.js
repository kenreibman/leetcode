// https://leetcode.com/problems/number-of-1-bits/discuss/468836/PythonJSGoC%2B%2B-O(-lg-n-)-by-bit-manipulation

// O( lg n ) solution based on bit-manipulation

// Note: Assume the input is of int32.

var hammingWeight = function (n) {
  let num_of_1s = 0;

  for (let i = 0; i < 32; i++) {
    num_of_1s += n & 1;
    n >>= 1;
  }
  return num_of_1s;
};
