const combSort = (arr) => {
    const l = arr.length;
    const factor = 1.247;
    let gapFactor = l / factor;
    while (gapFactor > 1) {
        const gap = Math.round(gapFactor);
        for (let i = 0, j = gap; j < l; i++, j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        gapFactor = gapFactor / factor;
    }
    return arr;
};

const run = () => {

  const arr = [1, 3, 5, 7, 9, 2, 4, 6, 8, 0];
  console.log('Не отсортированный массив: ' + arr);

  const sort = combSort(arr)
  console.log('Отсортированный массив: ' + sort);
}

run();
