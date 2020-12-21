const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const x = getRandom(73, 1014);

console.log(x);