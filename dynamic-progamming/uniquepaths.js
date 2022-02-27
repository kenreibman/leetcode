// https://www.youtube.com/watch?v=W9iVpPuvJ3Q&ab_channel=AndyGala
// Focuses on Tabulation
// Create a table and fill in the initial elements

var uniquePaths = function (m, n) {
  // 1. create our grid
  const table = Array.from({ length: m }, () => new Array(n));

  // 2. fill in initial values 1s going horizontal and vertical
  for (let i = 0; i < table.length; i++) table[i][0] = 1;
  for (let i = 0; i < table[0].length; i++) table[0][i] = 1;
  // 3. iterate over 2d grid, starting at 1 because we already filled in the initial values
  for (let i = 1; i < table.length; i++) {
    // 4.
    for (let j = 1; j < table[i].length; j++) {
      // 5. we want to fill as the sum aboe and left of it
      table[i][j] = table[i - 1][j] + table[i][j - 1];
    }
  }
  // 6. return very last element in our table.
  return table[m - 1][n - 1];
};
