const add1 = (x) => x + 1;
const mult2 = (x) => x * 2;

const compose = (...funcs) => (...args) =>
  funcs.reduceRight((prev, next) => next(prev(args)));

const run = () => {
  const addMult = compose(add1, mult2);
  console.log(addMult(2)); //5
};

run();