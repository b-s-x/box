const gnomeSort = (arr) => {
    const l = arr.length;
    let i = 1;
    while (i < l) {
        if (i > 0 && arr[i - 1] > arr[i]) {
            [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
            i--;
        } else {
            i++;
        }
    }
    return arr;
};

const run = () => {

  const arr = [1, 3, 5, 7, 9, 2, 4, 6, 8, 0];
  console.log('Не отсортированный массив: ' + arr);

  const sort = gnomeSort(arr)
  console.log('Отсортированный массив: ' + sort);
}

run();
