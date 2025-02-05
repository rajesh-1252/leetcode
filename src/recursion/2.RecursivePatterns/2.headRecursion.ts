function headRecursion(n: number): void {
	if (n <= 0) return;
	headRecursion(n - 1); // Recursive call first
	console.log(n); // Processing after recursion
}

headRecursion(5);
