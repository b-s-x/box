const checkNaN = (num) => {
    (Object.is(NaN, num)) ? 
    console.log(true) :
    console.log(false)
}

checkNaN(0/0) 

const arr = [1, 2, 0/0]

const checkArrNaN = (arr) => {
    (arr.includes(NaN)) ?
    console.log(true) :
    console.log(false)
}

console.log(checkArrNaN(arr));