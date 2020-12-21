const add1 = (x) => x + 1;
const mult2 = (x) => x * 2;

// function compose(func1, func2) {
//   return function (arg) {
//     return func1(func2(arg));
//   };
// }

const compose = (func1, func2) => (arg) => func1(func2(arg))

const run = () => {
  const addMult = compose(add1, mult2);
  console.log(addMult(2)); //5
};

run();