// https://www.youtube.com/watch?v=bocaOl7hvTY&ab_channel=AndyGala

/*
Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.
*/

// Logic: if(text1[i -1] we're doing -1 because w'ere adding this extra string)
// if(text1[i - 1] == text2[j - 1])
// then cocatnate table[i][j] = table[i - 1][j - 1] + text1[i - 1]
// What if they're different?
// else get the maximum of what is above or left to it and set it to current sell
// table[i][j] = Max(table[i - 1][j], table[i][j -1])

var longestCommonSubsequence = function (text1, text2) {
  // 1. 2d array, set everything to an empty string and fill
  const table = Array.from({ length: text1.length + 1 }, () =>
    new Array(text2.length + 1).fill('')
  );

  // 2.
  for (let i = 1; i < table.length; i++) {
    for (let j = 1; j < table[i].length; j++) {
      // Becuase our table is 1 more than our input text, you need i - 1 and j - 1
      // 3. if text of i -  1 and text of j - 1 is equal to each other
      if (text1[i - 1] === text2[j - 1]) {
        // 4. get whatever is diagonal to the table and set it
        table[i][j] = table[i - 1][j - 1] + text1[i - 1];
      } else {
        // 5. get max length of whatever is above or to the left of it.
        let aboveChar = table[i - 1][j];
        let leftChar = table[i][j - 1];
        //6. Set table of i and j to whatever is max length
        // If it's > leftChar.length ? then we wanna return the aboveChar. else : return leftChar
        table[i][j] = aboveChar.length > leftChar.length ? aboveChar : leftChar;
      }
    }
  }
  // 7. return the last element in our table add .length at the end because we don't want a string
  return table[table.length - 1][table[0].length - 1].length;
};
