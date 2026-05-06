/**
 * 297. Serialize and Deserialize Binary Tree

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.
 */

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function serialize(root) {
  if (!root) return "";

  const result = [];
  const queue = [root];

  while (queue.length) {
    const node = queue.shift();

    if (node) {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      result.push("null");
    }
  }

  // check for trailing nulls
  while (result[result.length - 1] === "null") {
    result.pop();
  }

  return result.join(",");
}

function deserialize(data) {
  if (!data || data.length === 0) return null;

  const values = data.split(",");
  const root = new TreeNode(Number(values[0]));
  const queue = [root];

  let i = 1;

  while (queue.length) {
    const node = queue.shift();

    if (!node) continue;

    // left
    if (i < values.length) {
      if (values[i] !== "null") {
        node.left = new TreeNode(Number(values[i]));
        queue.push(node.left);
      }
      i++;
    }

    // right
    if (i < values.length) {
      if (values[i] !== "null") {
        node.right = new TreeNode(Number(values[i]));
        queue.push(node.right);
      }
      i++;
    }
  }

  return root;
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);

const serializeResult = serialize(root);
console.log(serializeResult);
const result = deserialize(serializeResult);
console.log("Result :: ", result);
