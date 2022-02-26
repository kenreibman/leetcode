// https://www.youtube.com/watch?v=9ZMMNyHy3z4&ab_channel=ThinkFWD

// You are given an array prices where prices[i] is the price of a given stock on the ith day.\
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Paraphrase: Given an array Numbers, each numbers represent a price. An index of that array = the day
// What patters do you see?
// Buy first, sell after.
// No need to sort array.
// Find lowest price in array and find highest price in array.

// If a price is bigger than the initial buying price, then compute something and store that value back into your array so you don't have to go back.

//[0, 1, 5, 3, 6, 4] when you mutate the array

function maxProfit(prices) {
  // 1. create a variable, store a temporary initial buying price
  let buy = prices[0];
  // If you were to buy and sell on the same date, prices would be 0. Not the best to mutate inputs, ideally you create a copy or cache array and return that back to you, but that creates unecessary space.
  prices[0] = 0;

  // 6. What if the price I bought is not greater than existing price? That means I'm making a profit.
  let profit = 0;

  // 2. write for loop starting at 1 because we already took account the 0 index
  for (let i = 1; i < prices.length; i++) {
    // 3. Then we compare. If price that I buy is greater than the price that's listed at that day, I know I messed up. Don't buy it. (buy > prices[i])
    if (buy > prices[i]) {
      // 4. I should buy it at a lower price
      buy = prices[i];
      // 5. set price back to 0 because you're not making profit at that time
      prices[i] = 0;
    } else {
      //7. Profit would be the maximum price minus what I purchased or the existing profit
      profit = Math.max(prices[i] - buy, profit);
    }
  }
  return profit;
}

// IMPROVEMENTS TO CODE

var maxProfit = function (prices) {
  let buy = prices[0];
  // The solution could be improved by not actually changing the input array to cache profits.
  let profit = 0;
  // For loop starting at 0
  for (let i = 0; i < prices.length; i++) {
    if (buy > prices[i]) {
      buy = prices[i];
    } else {
      profit = Math.max(prices[i] - buy, profit);
    }
  }
  return profit;
};
