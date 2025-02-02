const numberSet = new Set<number>();
numberSet.add(1);
numberSet.add(2);
numberSet.add(3);
numberSet.add(4);
const objectSet = new Set();
const obj = { a: 'hello' };
objectSet.add(obj);
console.log(numberSet.has(11));
console.log(objectSet.has(obj));
console.log(numberSet);
console.log(objectSet);

const weakSet = new WeakSet();

const objh = { a: 'hello' };
