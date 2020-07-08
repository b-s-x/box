const merge = (arrFirst, arrSecond) => {
    const arrSort = [];
    let iFirst = iSecond = 0;

    while (iFirst < arrFirst.length && iSecond < arrSecond.length) {
        if(arrFirst[iFirst] < arrSecond[iSecond]) {
          arrSort.push(arrFirst[iFirst++])
        } else {
          arrSort.push(arrSecond[iSecond++])
        }
    }
    return [
        ...arrSort,
        ...arrFirst.slice(iFirst),
        ...arrSecond.slice(iSecond)
    ];
};

const mergeSort = arr => {
    if (!arr || !arr.length) {
        return null;
    }
    if (arr.length <= 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const arrLeft = arr.slice(0, middle);
    const arrRight = arr.slice(middle);
    return merge(mergeSort(arrLeft), mergeSort(arrRight));;
};

const run = () => {

  const arr = [1, 3, 5, 7, 9, 2, 4, 6, 8, 0];
  console.log('Не отсортированный массив: ' + arr);

  const sort = mergeSort(arr)
  console.log('Отсортированный массив: ' + sort);
}

run();
