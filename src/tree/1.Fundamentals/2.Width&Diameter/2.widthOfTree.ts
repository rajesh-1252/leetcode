import { Tree, TreeNode } from '../../tree';

//     1
//    / \
//   2   3
//  /     \
// 4       5

//   3
//  / \
// 9   20
//    /  \
//   15   7
//Finding the Diameter
//Longest path: 15 → 20 → 3 → 9 or 7 → 20 → 3 → 9
//Number of edges: 3
//Diameter = 3
function widthOfTree(root: TreeNode): number {
	if (!root) return 0;
	const queue: TreeNode[] = [root];
	let maxWidth = 0;

	while (queue.length > 0) {
		const len = queue.length;
		maxWidth = Math.max(maxWidth, len);
		for (let i = 0; i < len; i++) {
			const node = queue.shift();
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
	}
	return maxWidth;
}

function diameterOfBinaryTree(root: TreeNode): number {
	let maxDia = 0;
	const dfs = (node: TreeNode) => {
		if (!node) return 0;
		const leftHeight = dfs(node.left);
		const rightHeight = dfs(node.right);
		maxDia = Math.max(maxDia, leftHeight + rightHeight);
		return Math.max(leftHeight, rightHeight) + 1;
	};
	dfs(root);
	return maxDia;
}

const tree1 = new Tree();
const tree2 = new Tree();
tree1.buildTreeFromArray([3, 9, 20, null, null, 15, 7]);
tree1.printTree();
console.log(
	'using bfs width of the tree 1 is ',
	diameterOfBinaryTree(tree1.root),
);
console.log('-------------------');
tree2.buildTreeFromArray([1, 2, 2, 3, 3, null, null, 4, 4]);
tree2.printTree();
console.log('using bfs width of the tree 2 is ', widthOfTree(tree2.root));
