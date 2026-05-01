/**
 * 104. Maximum Depth of Binary Tree

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:

Input: root = [1,null,2]
Output: 2
 

Constraints:

The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function findDepth(root, depth) {
  if (!root) {
    return depth;
  }

  depth = depth + 1;

  const depthLeft = findDepth(root.left, depth);
  const depthRight = maxDepth(root.right, depth);

  return Math.max(depthLeft, depthRight);
}

function maxDepth(root) {
  return findDepth(root, 1);
}

const root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);

const depth = maxDepth(root);
console.log("Depth :: ", depth);
