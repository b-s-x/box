function chunkArray(arr, chunkSize){
  let result = [];

  while (arr.length) {
      results.push(arr.splice(0, chunkSize));
  }

  return result;
}

const result = chunkArray([1,2,3,4,5,6,7,8], 3);

console.log(result);