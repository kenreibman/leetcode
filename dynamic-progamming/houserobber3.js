function rob(root) {
  // 1. Make a decision when a node is given
  function decision(node) {
    // 2. get an exit conditions
    // if it doesn't exist, [0, 0]
    if (!node) return [0, 0];
    // 3. decide to rob or not
    let [leftRob, leftNot] = decision(node.left);
    let [rightRob, rightNot] = decision(node.right);

    // The current value + not robbing the left child, and not robbing the right.
    let robD = node.val + leftNot + rightNot;
    // What is the maximum of all the combinations you can have?
    let notRob = Math.max(
      leftRob + rightRob,
      leftRob + rightNot,
      leftNot + rightNot,
      leftNot + rightRob
    );
    return [robD, notRob];
  }
  // Return the max of my decision given the root node, and because we have 2 elements we spread it with ...
  return Math.max(...decision(root));
}
