/**
 * 543. Diameter of Binary Tree

Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function getHeight(root) {
  if (root === null) return 0;

  return 1 + Math.max(getHeight(root.left), getHeight(root.right));
}

function diameterOfBinaryTreeBrtueForce(root) {
  const leftHeight = getHeight(root.left, 0);
  const rightHeight = getHeight(root.right, 0);

  return leftHeight + rightHeight;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);

root.left.left = new Node(4);
root.left.right = new Node(5);

const height = diameterOfBinaryTree(root);
console.log("Height :: ", height);
