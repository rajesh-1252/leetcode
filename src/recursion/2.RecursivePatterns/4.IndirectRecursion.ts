function odd(n: number) {
  if (n === 0) return false;
  return even(n - 1);
}

function even(n: number) {
  if (n === 0) return true;
  return odd(n - 1);
}

odd(5);
