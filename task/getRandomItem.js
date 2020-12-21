const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const getRandomItem = (arr) =>
  arr[Math.floor(Math.random() * arr.length)];

const x = getRandomItem(months);

console.log(x);