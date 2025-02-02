import { Tree, TreeNode } from '../tree';

function amountOfTime(root: TreeNode | null, start: number): number {
	let minute = 0;
	const queue: TreeNode[] = [root];
	const link = new Map<number, number[]>();
	while (queue.length > 0) {
		const node = queue.shift();
		if (node.left) {
			if (!link.has(node.val)) link.set(node.val, []);
			link.get(node.val).push(node.left.val);
			if (!link.has(node.left.val)) link.set(node.left.val, []);
			link.get(node.left.val).push(node.val);
			queue.push(node.left);
		}

		if (node.right) {
			if (!link.has(node.val)) link.set(node.val, []);
			link.get(node.val).push(node.right.val);
			if (!link.has(node.right.val)) link.set(node.right.val, []);
			link.get(node.right.val).push(node.val);
			queue.push(node.right);
		}
	}
	console.log(link);
	return 0;
}

const tree = new Tree();
tree.buildTreeFromArray([1, 5, 3, null, 4, 10, 6, 9, 2]);
tree.printTree();

amountOfTime(tree.root, 3);
