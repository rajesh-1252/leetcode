import { TreeNode } from '../../tree';

function lowestCommonAncestor(
	root: TreeNode | null,
	p: TreeNode | null,
	q: TreeNode | null,
): TreeNode | null {
	if (root === p || root === q || root === null) {
		return root;
	}
	const left = lowestCommonAncestor(root.left, q, p);
	const right = lowestCommonAncestor(root.right, q, p);
	if (left && right) return root;
	return left || right;
}
