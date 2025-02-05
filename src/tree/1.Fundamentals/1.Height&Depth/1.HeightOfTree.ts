import { Tree, TreeNode } from '../../tree';

function heightOfTreeDfs(root: TreeNode): number {
	if (!root) return 0;
	const leftHeight = heightOfTreeDfs(root.left);
	const rightHeight = heightOfTreeDfs(root.right);
	return Math.max(leftHeight, rightHeight) + 1;
}

function heightOfTreeBfs(root: TreeNode): number {
	if (!root) return null;
	let height = 0;
	const queue: TreeNode[] = [root];
	while (queue.length > 0) {
		const len = queue.length;
		height++;
		for (let i = 0; i < len; i++) {
			const node = queue.shift();
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
	}
	return height;
}

const tree1 = new Tree();
const tree2 = new Tree();
tree1.buildTreeFromArray([3, 9, 20, null, null, 15, 7]);
tree1.printTree();
console.log('using dfs height of the tree 1 is ', heightOfTreeDfs(tree1.root));
console.log('using bfs height of the tree 1 is ', heightOfTreeBfs(tree1.root));
console.log('-------------------');
tree2.buildTreeFromArray([1, 2, 2, 3, 3, null, null, 4, 4]);
tree2.printTree();
console.log('usng dfs height of the tree 2 is ', heightOfTreeDfs(tree2.root));
console.log('using bfs height of the tree 2 is ', heightOfTreeBfs(tree2.root));

// root
// children
// leaf
// subtree
// ancestor
