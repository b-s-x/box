const arrayA = [1, 2, 3, 4];
const arrayB = [3, 4, 5, 6];

const union = (a, b) => [...new Set([...a, ...b])];

const x = union(arrayA, arrayB);

console.log(x);