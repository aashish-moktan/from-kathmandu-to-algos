/**
 * 100. Same Tree
 * 
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function compareTree(p, q) {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.val !== q.val) return false;

  return compareTree(p.left, q.left) && compareTree(p.right, q.right);
}

function isSameTree(p, q) {
  return compareTree(p, q);
}

const p = new Node(10);
p.left = new Node(5);
p.right = new Node(15);

const q = new Node(10);
q.left = new Node(5);
q.right = new Node(15);
q.left.left = new Node(155);

const result = isSameTree(p, q);
console.log("Result :: ", result);
