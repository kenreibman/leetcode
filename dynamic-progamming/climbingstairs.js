// https://www.youtube.com/watch?v=UyDyc6yV1iQ&ab_channel=TerribleWhiteboard

/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

// If n = 3, every step is an n - 1 case or n - 2 case
// n - 1 = taking 1 step
// n - 2 = taking 2 steps

// Everytime we solve for n, we should add it to a Map. (moization)

var climbStairs = function (n) {
  // 1. Create a recursive function
  let count = function (stairsRemaining, savedResults) {
    // 2. create an invalid case of if it's a negative number, return 0
    if (stairsRemaining < 0) {
      // Asks if stairsRemaining is less than 0, since n = 3 it's not so it goes to the next line
      return 0;
    }
    // 3. this time it's asking if it === 0. If not it goes to next if statement
    if (stairsRemaining === 0) {
      return 1;
    }

    // 4. Have we ever seen these # of stairs before? If not, now it will go to the recursion
    if (savedResults[stairsRemaining]) {
      return savedResults[stairsRemaining];
    }
    // 5. If we get past all these if statements that means we haven't seen this # before.
    // Recursion, calculate numbers and save it
    // Saving whatever result we are on to the map (savedResults[stairsRemaining])
    savedResults[stairsRemaining] =
      // 6. call our inner function (count) and call it without two scenarious ((stairsRemaining - 1, savedResults) +PLUS ((stairsRemaining - 2, savedResults));
      count(stairsRemaining - 1, savedResults) +
      count(stairsRemaining - 2, savedResults);

    // 8. since this is a recursive call, we return the saved results of what you just calculated
    return savedResults[stairsRemaining];
  };
  // 1.
  return count(n, {});
};

// n = 3

// THIS is our first valid path.
// count(stairsRemaining - 1)
// 3 - 1 = 2
// Is 2 < 0? No
// Does 2 === 0? No
// Have we saved 2 before? No
// count(stairsRemaining - 1)
// 2 - 1 = 1
// Now we're back to the beginning of the function.
// Is 1 < 0? No
// Does 1 === 0? No
// Have we saved 1 before? No
// count(stairsRemaining - 1)
// 1 - 1 = 0
// is 0 < 0? No.
// does 0 === 0? Yes.

// Adds 1 successful path, then another successful path as you go back up (refer back to video at 20:30)
// Taking 2 steps at a time, we already have a saved valid path of 1, so it returns a valid path!

// GO OVER RECURSION
