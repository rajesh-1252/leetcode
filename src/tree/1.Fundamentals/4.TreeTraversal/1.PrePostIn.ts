import { TreeNode } from '../../tree';

// In-order Traversal (Left, Root, Right)
const inOrderTraversal = (root: TreeNode | null): number[] => {
  if (!root) return [];
  return [
    ...inOrderTraversal(root.left),
    root.val,
    ...inOrderTraversal(root.right),
  ];
};

// Pre-order Traversal (Root, Left, Right)
const preOrderTraversal = (root: TreeNode | null): number[] => {
  if (!root) return [];
  return [
    root.val,
    ...preOrderTraversal(root.left),
    ...preOrderTraversal(root.right),
  ];
};

// Post-order Traversal (Left, Right, Root)
const postOrderTraversal = (root: TreeNode | null): number[] => {
  if (!root) return [];
  return [
    ...postOrderTraversal(root.left),
    ...postOrderTraversal(root.right),
    root.val,
  ];
};
