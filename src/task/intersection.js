const intersection = (arrA, arrB) =>
arrA.filter(Set.prototype.has, new Set(arrB));

const arrayA = [1, 2, 3, 4, 5];
const arrayB = [2, 3];

const x = intersection(arrayA, arrayB);

console.log(x);