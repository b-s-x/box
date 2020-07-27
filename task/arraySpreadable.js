const arrOne = [1, 2];

const arrayLikeOne = {
    0: "что-то",
    1: "ещё",
    // [Symbol.isConcatSpreadable]: true,
    length: 2
  };
  
  console.log(( arrOne.concat(arrayLikeOne) ))

const arrTwo = [1, 2];

const arrayLikeTwo = {
  0: "что-то",
  1: "ещё",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

console.log(( arrTwo.concat(arrayLikeTwo) ))