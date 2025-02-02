export class TreeNode {
	val: number;
	left?: TreeNode | null;
	right?: TreeNode | null;
	constructor(
		val: number,
		left: TreeNode | null = null,
		right: TreeNode | null = null,
	) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

export class Tree {
	public root: TreeNode;
	constructor() {
		this.root = null;
	}

	insert(val: number): void {
		const newNode = new TreeNode(val);
		if (!this.root) {
			this.root = newNode;
			return;
		}
		const queue: TreeNode[] = [this.root];

		while (queue.length) {
			const node = queue.shift();
			if (!node.left) {
				node.left = newNode;
				return;
			}
			queue.push(node.left);
			if (!node.right) {
				node.right = newNode;
				return;
			}
			queue.push(node.right);
		}
	}

	buildTree(arr: number[]): TreeNode {
		if (arr.length === 0) return null;
		for (const num of arr) {
			this.insert(num);
		}
		return this.root;
	}

	buildTreeFromArray(arr: (number | null)[]): void {
		if (arr.length < 0 || arr[0] === null) return;
		this.root = new TreeNode(arr[0]);
		const queue: TreeNode[] = [this.root];
		let i = 1;
		while (queue.length > 0 && i < arr.length) {
			const node = queue.shift();
			if (arr[i] != null) {
				const leftNode = new TreeNode(arr[i]);
				node.left = leftNode;
				queue.push(leftNode);
			}
			i++;
			if (i < arr.length && arr[i] != null) {
				const righNode = new TreeNode(arr[i]);
				node.right = righNode;
				queue.push(righNode);
			}
			i++;
		}
	}

	insertBst(val: number): TreeNode {
		const newNode = new TreeNode(val);
		if (!this.root) {
			this.root = newNode;
			return this.root;
		}
		let current: TreeNode = this.root;
		while (true) {
			if (val < current.val) {
				if (current.left === null) {
					current.left = newNode;
					return;
				}
				current = current.left;
			}
			if (val > current.val) {
				if (current.right === null) {
					current.right = newNode;
					return this.root;
				}
				current = current.right;
			}
		}
	}

	printTree(node: TreeNode | null = this.root, prefix = '', isLeft = true) {
		if (!node) return;

		if (node.right) {
			this.printTree(
				node.right,
				prefix + (isLeft ? '│   ' : '    '),
				false,
			);
		}

		console.log(prefix + (isLeft ? '└── ' : '┌── ') + node.val);

		if (node.left) {
			this.printTree(
				node.left,
				prefix + (isLeft ? '    ' : '│   '),
				true,
			);
		}
	}
}
