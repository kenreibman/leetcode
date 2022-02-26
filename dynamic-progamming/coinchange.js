// Understanding the problem
// https://backtobackswe.com/platform/content/the-change-making-problem/video?utm_source=youtube&utm_medium=video

// Tabulation
// https://www.youtube.com/watch?v=OMkKWtSAF0c&ab_channel=GeeksforGeeks

// Solution + Explanation https://www.youtube.com/watch?v=kHogi2PC7EY&ab_channel=AndyGala
// Dynamic Programming

/*
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.
*/

// Create a table that represents all different coin amounts that could arise for 11
// Create an array and iteration
//
// Coins: [1,2,5]
// Amount: 11
//
// For 1 coins:
//  0 1 2 3 ... # of 1 coins
// [0,1,2,3,4,5,6,7,8,9,10,11]
//
// We want to check if coin is <= amount
// amount - coin = index
// potentialAmount = table(i) + 1
// table[i] = min(table[i], potentialAmount)

var coinChange = function (coins, amount) {
  // 1. create a table with a new Array of amount + 1 (+ 1 because you want to take in 0 of index)
  // 2. .fill Infinity will give us the right value no matter what number because we're using a Min value
  const table = new Array(amount + 1).fill(Infinity);
  // 3. fill in the 0 index
  table[0] = 0;
  // 4. Iterate over the coins
  for (let coin of coins) {
    // 5. loop through the array of coins we have and compare it to our table.
    // i represents the amount
    for (let i = 0; i < table.length; i++) {
      // 6. Check if the coin we are currently on is <= i
      if (coin <= i) {
        // 7. so first we get the index
        let idx = i - coin;
        // 8. Then we get our potential amount
        let potentialAmount = table[idx] + 1;
        // 9. Update the current information of where we are
        table[i] = Math.min(potentialAmount, table[i]);
        // We use infinity because if it is our first pass around and whatever is currently in our table is infinity so it would defer to that potential amount
      }
    }
  }
  // 10. now we return. If there is nothing in there, it will stay at inifnity. ? then we can assume nothing was found. else : we return table at table.length - 1
  return table[table.length - 1] === Infinity ? -1 : table[table.length - 1];
};
