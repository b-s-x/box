const swap = (arr, i, j) => {
    var swap = arr[i];
    arr[i] = arr[j];
    arr[j] = swap;
}

const cocktailSort = (arr) => {
    var left = 0;
    var right = arr.length - 1;
    while (left < right) {
        for (var i = left; i < right; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1);
            }
        }
        right--;
        for (var i = right; i > left; i--) {
            if (arr[i] < arr[i - 1]) {
                swap(arr, i, i - 1);
            }
        }
        left++;
    }
    return arr;
}

const run = () => {

  const arr = [1, 3, 5, 7, 9, 2, 4, 6, 8, 0];
  console.log('Не отсортированный массив: ' + arr);

  const sort = cocktailSort(arr)
  console.log('Отсортированный массив: ' + sort);
}

run();
