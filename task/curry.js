const join = (a, b, c, d) => {
  return `${a}_${b}_${c}_${d}`;
};

function curry(func) {
  return function curried(...args) {
    if(args.length >= func.length) {
      return func(...args)
    } else {
      return (...args2) => {
        return curried(...args.concat(args2))
      }
    }
  }
}

const curriedJoin = curry(join);

console.log(curriedJoin(1, 2)(3)(4));
