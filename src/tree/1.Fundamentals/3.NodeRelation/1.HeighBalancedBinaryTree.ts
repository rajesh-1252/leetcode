// 1. How do you check if a tree is balanced (height-balanced binary tree)?
import { Tree, TreeNode } from '../../tree';

function isBalanced(root: TreeNode | null): boolean {
  if (root === null) return true;
  const leftHeight = getHeight(root.left);
  const rightHeight = getHeight(root.right);
  if (Math.abs(leftHeight - rightHeight) > 1) {
    return false;
  }
  return isBalanced(root.left) && isBalanced(root.right);
}

function getHeight(node: TreeNode): number {
  if (node === null) return 0;
  const leftHeight = getHeight(node.left);
  const rightHeight = getHeight(node.right);
  return Math.max(leftHeight, rightHeight) + 1;
}

// Height-Balanced Binary Tree
//
// A Height-Balanced Binary Tree (also called an AVL Tree condition) is a tree where:
//
//     The height difference (balance factor) between the left and right subtrees of every node is at most 1.
//
// ✅ Example 1: A Valid Height-Balanced Binary Tree
//
//         1
//        / \
//       2   3
//      / \   \
//     4   5   6
//[1, 2, 3, 4, 5, null, 6]
//     Balance Factor for each node:
//         1 → |height(2) - height(3)| = |2 - 2| = 0
//         2 → |height(4) - height(5)| = |1 - 1| = 0
//         3 → |height(null) - height(6)| = |0 - 1| = 1
//     All nodes have a balance factor ≤ 1, so the tree is balanced.
//
// ❌ Example 2: An Invalid Height-Balanced Binary Tree
//
//         1
//        / \
//       2   3
//      /
//     4
//    /
//   5
//[1, 2, 3, 4, null, null, null, 5]
//     Balance Factor for each node:
//         1 → |height(2) - height(3)| = |3 - 1| = 2 ❌
//         2 → |height(4) - height(null)| = |2 - 0| = 2 ❌
//     Since some nodes have a balance factor > 1, the tree is not balanced.

const tree = new Tree();
let arr = [1, 2, 3, 4, 5, null, 6]; // true;
arr = [1, 2, 3, 4, null, null, null, 5]; // false;
tree.buildTreeFromArray(arr);
tree.printTree();
console.log('Is tree a full binary tree?', isBalanced(tree.root));
