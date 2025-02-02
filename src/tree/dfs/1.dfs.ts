import { Tree, TreeNode } from '../tree';

const dfs = (root: TreeNode) => {
	if (!root) return;
	dfs(root.left);
	dfs(root.right);
	if (root.val != null) {
		console.log(root.val);
	}
	// pre order print left right
	// in order left print right
	// post order left right print
};

const tree = new Tree();
tree.buildTree([1, null, 3, 2, 4, null, 5, 6]);
tree.printTree(tree.root);

dfs(tree.root);
