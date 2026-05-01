/**
 * 98. Validate Binary Search Tree

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys strictly less than the node's key.
The right subtree of a node contains only nodes with keys strictly greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function validate(node, min, max) {
  if (node === null) return true;

  if (node.val <= min || node.val >= max) return false;

  return (
    validate(node.left, min, node.val) && validate(node.right, node.val, max)
  );
}

function isValidBST(root) {
  return validate(root, -Infinity, Infinity);
}

const root = new Node(10);
root.left = new Node(7);
root.right = new Node(15);

root.left.left = new Node(5);
root.left.right = new Node(8);

root.right.left = new Node(12);
root.right.right = new Node(18);

console.log(isValidBST(root));
