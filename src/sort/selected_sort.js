function selectSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }

        if (min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr;
};


const run = () => {
  const input = [1, 4, 7, 9, 2, 5, 8, 3, 6];
  console.log('Не отсортированный массив: ' + input);

  let select = selectSort(input);

  console.log('Отсортированный массив: ' + select);
}

run();
