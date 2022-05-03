// Fisher–Yates shuffle
function shuffle(arr) {
  const newArr = [...arr];

  for(let item = newArr.length - 1; item > 0; item--) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    [newArr[item], newArr[randomIndex]] = [newArr[randomIndex], newArr[item]];
  }

  return newArr;
}

const run = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  const x = shuffle(arr);
  console.log(arr);
  console.log(x);
};

run();

