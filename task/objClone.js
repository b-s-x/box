const obj = {
    1: 1,
    2: 2,
    3: {
        4: 5,
    }
}
// spread

const cloneSpread = {
    ...obj,
}

cloneSpread[3][4] = 11111
console.log('Spread change: ', cloneSpread);
console.log('Change parent:', obj);

//Object.assign

const cloneObjectAssign = Object.assign({}, obj)
cloneObjectAssign[3][4] = 2222222
console.log('Object.assign change: ', cloneObjectAssign);
console.log('Change parent:', obj);

// iteration
const cloneIteration = {}

for(let key in obj) {
    cloneIteration[key] = obj[key]
}

cloneIteration[3][4] = 333333
console.log('Iteration change: ', cloneIteration);
console.log('Change parent:', obj);

//JSON

const cloneJSON = JSON.parse(JSON.stringify(obj))
cloneJSON[3][4] = 4444444

console.log('JSON change: ', cloneJSON);
console.log('No change parent:', obj);
