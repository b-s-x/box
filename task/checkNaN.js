const checkNaN = (num) => {
    if(Object.is(NaN, num)){
        console.log(true);
    } else {
        console.log(false);
    }
}

checkNaN(0/0) 