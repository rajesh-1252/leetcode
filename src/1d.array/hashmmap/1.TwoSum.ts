function twoSum(nums: number[], target: number): number[] {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    if (map.has(target - currentNumber)) {
      return [map.get(target - currentNumber), i];
    }
    map.set(currentNumber, i);
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 3], 6));

// function twoSum(nums: number[], target: number): number[] {
// 	const hashMap = new Map();
// 	for (let i = 0; i < nums.length; i++) {
// 		const currentNumber = nums[i];
// 		if (hashMap.has(target - currentNumber)) {
// 			return [hashMap.get(target - currentNumber), i];
// 		}
// 		hashMap.set(currentNumber, i);
// 	}
// }
