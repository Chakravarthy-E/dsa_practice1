// let a = [-1, 4, 2, 3, 1];
// let i = 0;
// let n = a.length;
// let j = n - 1;
// let b = [];
// for (i = 0, j = n - 1; i < j; i++, j--) {
//   b.push(a[i] + a[j]);
// }
// if (i == j) {
//   b.push(a[i]);
// }

let fs = require("fs");
const { listenerCount } = require("process");
const { arrayBuffer } = require("stream/consumers");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// console.log(b)
let int = readLine().split("");
let i = 0;
let n = int.length;
let j = n - 1;
let a = [];
let b = [];
for (i = 0; (j = n - 1), i < j; i++, j--) {
  let num = readLine().map(Number);
  a.push(num);
  b.push(a[i] + a[j]);

  if (i == j) {
    b.push(a[i]);
  }
}
console.log(b);
