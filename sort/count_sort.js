const countSort = (arr) => {
    let i = 0;
    let z = 0;
    const count = [];

    const min = Math.min(...arr)
    const max = Math.max(...arr)

 
    for (i = min; i <= max; i++) {
        count[i] = 0;
    }
 
    for (i = 0; i < arr.length; i++) {
        count[arr[i]]++;
    }
 
    for (i = min; i <= max; i++) {
        while (count[i]-- > 0) {
            arr[z++] = i;
        }
    }
    
    return arr
}


const arr = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 1, 2]

console.log(countSort(arr));