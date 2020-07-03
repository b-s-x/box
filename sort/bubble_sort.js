const merge = (arr1, arr2) => {
  const concatArr = [...arr1, ...arr2]
  console.log('Не сортированный массив: ' + concatArr);

  function bubbleSort(arr) {
    for(let j = arr.length - 1; j > 0; j--) {
      for(let i = 0; i < j; i++) {
        if(arr[i] > arr[i + 1]) {
          let swap = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = swap;
        }
      }
    }
    return arr
  }
  return bubbleSort(concatArr)
};

const run = () => {
  const arr = merge([1, 3, 5, 7], [2, 4, 6, 8]);
  console.log('Отсортированный массив: ' + arr)
}

run()
