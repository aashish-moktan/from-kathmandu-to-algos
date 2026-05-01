/**
 * 102. Binary Tree Level Order Traversal
 *
 * Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function traverse(node) {
  if (node === null) {
    return;
  }

  queue.unshift(node);
}

function levelOrder(root) {
  if (root === null) return [];

  const queue = [root];
  const result = [];

  while (queue.length > 0) {
    const size = queue.length;
    const level = [];

    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      level.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level);
  }

  return result;
}

const root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);

root.left.left = new Node(10);
root.left.right = new Node(13);

root.right.left = new Node(15);
root.right.right = new Node(7);

const result = levelOrder(root);
console.log("Result :: ", result);
