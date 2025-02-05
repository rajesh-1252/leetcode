const factorial1 = (n: number, acc = 1) => {
	if (n <= 1) return acc;
	return factorial1(n - 1, n * acc);
};
