import { Tree, TreeNode } from '../../tree';

function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true;
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

const tree = new Tree();
const tree2 = new Tree();
tree.buildTreeFromArray([3, 9, 20, null, null, 15, 7]);
tree.printTree();
console.log('-------------------');
tree2.buildTreeFromArray([1, 2, 2, 3, 3, null, null, 4, 4]);
tree2.printTree();
console.log(isBalanced(tree.root));
console.log(isBalanced(tree2.root));
