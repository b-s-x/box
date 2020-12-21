const memoize = (func) => {
  const cache = Object.create(null); // {}

  return (n) => {
    if(n in cache) return cache[n]

    return cache[n] = func(n)
  }
}

const factorial = memoize((n) => {
  let prev = 0;
  let next = 1;
  for(let i = 0; i < n; i++){
    console.log(i);
      let temp = next;
      next = prev + next;
      prev = temp;
    }

    return prev;
  })

console.log(factorial(5));
console.log(factorial(5));