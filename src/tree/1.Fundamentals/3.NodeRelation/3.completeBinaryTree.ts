//3 .  How do you check if a tree is a complete binary tree?

import { Tree, TreeNode } from '../../tree';

function isCompleteTree(root: TreeNode | null): boolean {
  if (!root) return true;
  const queue: (TreeNode | null)[] = [root];
  let foundNull = false;
  const res = [];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node === null) {
      foundNull = true;
    } else {
      if (foundNull) return false;
      queue.push(node.left);
      queue.push(node.right);
      res.push(node.left?.val, node.right?.val);
    }
  }
  return true;
}

//3. complete binaryTree
// Example Walkthrough
//
// Consider this tree:
//
//        1
//       / \
//      2   3
//     / \  /
//    4   5 6
//
//     Level Order Traversal: [1, 2, 3, 4, 5, 6, null]
//     No non-null node appears after a null, so it's complete ✅.
//
// Now, consider this invalid case:
//
//        1
//       / \
//      2   3
//     / \    \
//    4   5    6
//
//     Level Order Traversal: [1, 2, 3, 4, 5, null, 6]
//     A non-null node (6) appears after null, so it's not complete ❌.
//
const tree = new Tree();
let arr = [1, 2, 3, 4, 5, null, 6]; // false
// arr = [1, 2, 3, 4, 5, 6, null]; // true
tree.buildTreeFromArray(arr);
tree.printTree();
console.log('Is tree a full complete tree?', isCompleteTree(tree.root));
