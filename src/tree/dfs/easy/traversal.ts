import { TreeNode } from '../../tree';

const dfs = (root: TreeNode, arr: number[]) => {
	if (!root) return;
	dfs(root.left, arr);
	dfs(root.right, arr);
	if (root.val != null) {
		arr.push(root.val);
	}
	// pre order print left right
	// in order left print right
	// post order left right print
};
function postorderTraversal(root: TreeNode | null): number[] {
	const arr = [];
	dfs(root, arr);
	return arr;
}
