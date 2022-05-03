const sleepSort = (arr, cb) => {
  const arrSort = [];
  sortedTimeout = arr.reduce((acc, el) => acc + el) ;

  arr.forEach((elem) => {
    setTimeout(() => {
      arrSort.push(elem)
    }, elem)
  })

  setTimeout(() => {
    return cb(arrSort)
  }, sortedTimeout)
}

const run = () => {

  const arr = [1, 3, 5, 7, 9, 2, 4, 6, 8, 0];
  console.log('Не отсортированный массив: ' + arr);

  const sort = sleepSort(arr, (arrSort) => {
    console.log(arrSort);
  })
  console.log('Отсортированный массив: ' + sort);
}

run();
