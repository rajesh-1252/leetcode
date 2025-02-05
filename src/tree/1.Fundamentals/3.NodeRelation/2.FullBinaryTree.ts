// 2. How do you check if a tree is a full binary tree?

import { Tree, TreeNode } from '../../tree';

function fullBinaryTree(root: TreeNode): boolean {
  if (root === null) return true;

  if (root.left === null && root.right === null) return true;

  if (root.left && root.right) {
    return fullBinaryTree(root.left) && fullBinaryTree(root.right);
  }
  return false;
}

//2. full binary tree
// ✅ Example 1: A Valid Full Binary Tree
//
//         1
//        / \
//       2   3
//      / \  / \
//     4   5 6  7
//
// Array Representation (Level Order):
// [1, 2, 3, 4, 5, 6, 7]
//
//     Each node has either 0 or 2 children.
//     This is a full binary tree.
//
// ❌ Example 2: An Invalid Full Binary Tree
//
//         1
//        / \
//       2   3
//      / \
//     4   5
//          \
//           6
//
// Array Representation (Level Order):
// [1, 2, 3, 4, 5, null, null, null, null, null, 6]
//
//     The node 5 has only one child (6), violating the full binary tree rule.
//     This is not a full binary tree.

const tree = new Tree();
let arr = [1, 2, 3, 4, 5, 6, 7]; // true;
arr = [1, 2, 3, 4, 5, null, null, null, null, null, 6]; // false;
tree.buildTreeFromArray(arr);
tree.printTree();
console.log('Is tree a full binary tree?', fullBinaryTree(tree.root));

console.log('--------------------------------------------------------');
