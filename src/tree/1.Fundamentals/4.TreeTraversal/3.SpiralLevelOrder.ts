import { Tree, TreeNode } from '../../tree';

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const res: number[][] = [];
  const queue: TreeNode[] = [root];
  let leftToRight = true;
  while (queue.length > 0) {
    const len = queue.length;

    const out = [];
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (leftToRight) {
        out.push(node.val);
      } else {
        out.unshift(node.val);
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    res.push(out);
    leftToRight = !leftToRight;
  }
  return res;
}

const tree = new Tree();
let arr = [1, 2, 3, 4, 5, null, 6];
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, null, null, null, null];
tree.buildTreeFromArray(arr);
tree.printTree();
console.log(
  'zigzagLevelOrder of the give tree is',
  zigzagLevelOrder(tree.root),
);
