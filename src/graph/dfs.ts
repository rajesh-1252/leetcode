const direction = [
	{ row: 0, col: 1 },
	{ row: 0, col: -1 },
	{ row: 1, col: 0 },
	{ row: -1, col: 0 },
];
const dfs = (
	arr: number[][],
	visted: boolean[][],
	row: number,
	col: number,
	out: number[],
) => {
	const rows = arr.length,
		cols = arr[0].length;

	if (row < 0 || row >= rows || col < 0 || col >= cols || visited[row][col]) {
		return;
	}
	visted[row][col] = true;
	out.push(arr[row][col]);
	for (const { row: dirRow, col: dirCol } of direction) {
		dfs(arr, visted, dirRow + row, dirCol + col, out);
	}
};

const grid = [
	[1, 1, 0],
	[0, 1, 1],
	[1, 0, 1],
];
const visited = Array.from({ length: grid.length }, () =>
	Array(grid[0].length).fill(false),
);

const out = [];
dfs(grid, visited, 0, 0, out);
console.log(out);
