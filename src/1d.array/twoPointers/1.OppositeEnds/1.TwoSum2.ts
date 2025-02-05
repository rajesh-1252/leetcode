function twoSum(numbers: number[], target: number): number[] {
  let l = 0;
  let r = numbers.length - 1;
  while (l < r) {
    const currentSum = numbers[l] + numbers[r];
    if (currentSum > target) {
      r--;
    } else if (currentSum < target) {
      l++;
    } else {
      return [l + 1, r + 1];
    }
  }
  return [];
}

console.log(twoSum([-1, 0], -1));
