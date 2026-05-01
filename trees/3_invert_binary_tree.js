/**
 * 226. Invert Binary Tree

Given the root of a binary tree, invert the tree, and return its root.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function invert(node) {
  if (node === null) {
    return;
  }

  let temp = node.left;
  node.left = node.right;
  node.right = temp;

  invert(node.left);
  invert(node.right);
}

function invertTree(root) {
  if (root === null) {
    return;
  }

  invert(root);
}

function traverse(root) {
  if (root === null) return;

  console.log(root.val);
  traverse(root.left);
  traverse(root.right);
}

const root = new Node(4);
root.left = new Node(2);
root.right = new Node(7);

root.left.left = new Node(1);
root.left.right = new Node(3);

root.right.left = new Node(6);
root.right.right = new Node(9);

invertTree(root);
traverse(root);
