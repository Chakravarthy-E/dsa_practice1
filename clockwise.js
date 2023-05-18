let fs = require("fs");
const { listenerCount } = require("process");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let arr = readLine().split(" ").map(Number);
let n = arr.length;
let m = parseInt(readLine());
m = m % arr.length;
arr = arr.slice(n - m).concat(arr.slice(0, n - m));
for (let i = 0; i < n; i++) {
  console.log(arr[i]);
}
