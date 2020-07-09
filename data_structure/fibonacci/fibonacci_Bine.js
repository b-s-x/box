const fibonacciBine = (num) => {

  const sqrt5 = Math.sqrt(5);
  const a = (1 + sqrt5) / 2;
  const b = (1 - sqrt5) / 2;

  return (Math.pow(a, num) - Math.pow(b, num)) / sqrt5
}

console.log(fibonacciBine(1000))
