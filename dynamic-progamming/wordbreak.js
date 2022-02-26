// https://www.youtube.com/watch?v=3ao_ms-bT9M&ab_channel=ThinkFWD

/*
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.
*/

function wordBreak(word, dictionary) {
  //     // What can I do here that would help me do the same steps over and over again? Recursive
  // iterate through the element, construct a word that exists in the dictionary

  // 1. Create a function that returns the word, starting point, dictionary
  return verifyBreak(word, dictionary, 0);
}

// 2.
function verifyBreak(word, dictionary, start) {
  // 3. get out of this when our starting point becomes equal to the length
  if (start === word.length) return true;

  // 4. iterate, let the end point equal to the start + 1. Why + 1? Because we cant to start at "c" in leetcode
  for (let end = start + 1; end <= word.length; end++) {
    // 5. construct a string
    let wildGuess = word.substring(start, end);
    // 6. check if my dictionary includes my wildGuess. Prototypes in an array has includes which checks if the word exists, and returns true or false. AND // 7. If it is in the dictionary, verify the break by passing the word, dictionary, and where you ended off.
    if (dictionary.includes(wildGuess) && verifyBreak(word, dictionary, end)) {
      // Because you sending a recursive call, you send in a call stack
      return true;
    }
  }
  // 7. If you go through whole if block, and it doesn't match anything, then return false
  return false;
}

// Time complexity is bad so...
// 8. Optimize recursion by memoization
// Memoization: Not repeating steps we did in the past

function wordBreak(word, dictionary) {
  return verifyBreak(word, dictionary, 0, '', []);
}

//10 . pass in something to store our memoization
function verifyBreak(word, dictionary, start, guessW, memo) {
  // 9. print word to see where it is being called
  console.log(guessW, start);
  if (start === word.length) return true;

  // 11. if my memo at our start position !== undefined, return that memo at the start so I don't have to call it again
  if (memo[start] !== undefined) return memo[start];

  for (let end = start + 1; end <= word.length; end++) {
    let wildGuess = word.substring(start, end);

    // 12. adjust code slightly by passing in memo
    if (
      dictionary.includes(wildGuess) &&
      verifyBreak(word, dictionary, end, wildGuess, memo)
    ) {
      return (memo[start] = true);
    }
  }
  return (memo[start] = false);
}

// This is helpful when our string gets larger
// You can remove guessW, it was for troubleshooting
