// function flat(arr, deep = 1) {

//   let result = []
//   if(arr.length === 0) return result

//     arr.forEach((item) => {
//       if(Array.isArray(item)) {
//         if(deep > 0) {
//           result = [...result, ...flat(item, deep - 1)]
//         } else {
//           result = [...result, flat(item)]
//         }
//       } else {
//          result.push(item)
//       }
//     })

//   return result
// }

function flat(arr, depth = 1) {
  let result = [];

  for (let item of arr) {
     if (Array.isArray(item) && depth > 0) {
       result = [...result, ...flat(item, depth - 1)]
     } else {
        result.push(item)
     }
  }

  return result;
}

const arr = [11, [12], [13, [14]]];

const x = flat(arr, 2)
console.log(x);

