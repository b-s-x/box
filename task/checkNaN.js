const checkNaN = (num) => {
    if(Object.is(NaN, num)){
        console.log(true);
    } else {
        console.log(false);
    }
}

checkNaN(0/0) 

const arr = [1, 2, 0/0]

const checkArrNaN = (arr) => {
    if(arr.includes(NaN)) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}

console.log(checkArrNaN(arr));