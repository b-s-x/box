const push = value => array => {
  const clone = [...array];
  clone.push(value);
  return clone;
};

const a = [1, 2, 3];
const b = push(4)(a);

console.log(a); // [1, 2, 3]
console.log(b); // [1, 2, 3, 4]
console.log(a === b); // false