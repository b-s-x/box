const countSort = (arr) => {
    let index = 0;
    let pos = 0;
    const count = [];

    const min = Math.min(...arr)
    const max = Math.max(...arr)

    for (index = min; index <= max; index++) {
        count[index] = 0;
    }
 
    for (index = 0; index < arr.length; index++) {
        count[arr[index]]++;
    }
 
    for (index = min; index <= max; index++) {
        while (count[index]-- > 0) {
            arr[pos++] = index;
        }
    }
    
    return arr
}


const arr = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 1, 2]

console.log(countSort(arr));
