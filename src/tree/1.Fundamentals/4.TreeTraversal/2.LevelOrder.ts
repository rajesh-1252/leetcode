import { TreeNode } from '../../tree';

const LevelOrderTraversal = (root: TreeNode) => {
  if (!root) return null;
  const queue: TreeNode[] = [root];
  const res: number[][] = [];
  while (queue.length > 0) {
    const len = queue.length;
    const out: number[] = [];
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (node) {
        out.push(node.val);
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(out);
  }
  return res;
};
