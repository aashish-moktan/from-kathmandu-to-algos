/**
 * 236. Lowest Common Ancestor of a Binary Tree

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let paths = [];

function displayPath(root, path, element) {
  if (root === null) return false;

  path.push(root);

  if (root.val === element) {
    return true;
  }

  if (
    displayPath(root.left, path, element) ||
    displayPath(root.right, path, element)
  ) {
    return true;
  }

  path.pop();
  return false;
}

function lowestCommonAncestorBruteForce(root, p, q) {
  if (root === null) {
    return false;
  }

  const pPath = [];
  const qPath = [];

  displayPath(root, pPath, p);
  displayPath(root, qPath, q);

  let i = 0;

  while (i < pPath.length && i < qPath.length) {
    if (pPath[i].val !== qPath[i].val) break;
    i++;
  }

  return pPath[i - 1];
}

function lowestCommonAncestor(root, p, q) {
  if ((!root && root === p) || root === q) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) {
    return root;
  }

  return left || right;
}

const root = new Node(3);
root.left = new Node(5);
root.right = new Node(1);

root.left.left = new Node(6);
root.left.right = new Node(2);

root.right.left = new Node(0);
root.right.right = new Node(8);

root.left.right.left = new Node(7);
root.left.right.right = new Node(4);

const result = lowestCommonAncestor(root, 5, 7);

console.log("Path :: ", result);
