const isEmpty = (value) =>
  value === null || !(Object.keys(value) || value).length

console.log("{}", isEmpty({})) // true
console.log( "{ a: 1, b: 2 }", isEmpty({ a: 1, b: 2 })) // false

console.log("[]", isEmpty([])) // true
console.log("[1, 2]", isEmpty([1, 2])) // false

console.log("''", isEmpty("")) // true
console.log("string", isEmpty("string")) // false

console.log("12", isEmpty(12)) // true
console.log("true", isEmpty(true)) // true