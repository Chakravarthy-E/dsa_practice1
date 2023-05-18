// const { read } = require("fs");

let n = parseInt(readLine());
let arr = [];
for (let i = 0; i < n; i++) {
  arr[i] = parseInt(readLine());
}
let mi = parseInt(readLine());

let sum = 0;
for (let i = 0; i < n; i++) {
  if (arr[i] % mi === 0) {
    sum += arr[i];
  }
}
console.log(sum);
