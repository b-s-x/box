function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const pivot = arr[Math.floor(Math.random() * arr.length)];

    let left = [];
    let right = [];
    let equal = [];

    for (let val of arr) {
        if (val < pivot) {
            left.push(val);
        } else if (val > pivot) {
            right.push(val);
        } else {
            equal.push(val);
        }
    }
    return [
        ...quickSort(left),
        ...equal,
        ...quickSort(right)
    ];
}

const run = () => {

  const arr = [1, 3, 5, 7, 9, 2, 4, 6, 8, 0];
  console.log('Не отсортированный массив: ' + arr);

  const sort = quickSort(arr)
  console.log('Отсортированный массив: ' + sort);
}

run();
