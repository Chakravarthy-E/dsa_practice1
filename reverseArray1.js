let fs = require("fs");
const { listenerCount } = require("process");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let n = parseInt(readLine());
let target = [];
let num = [];
for (let x = 0; x < n; x++) {
  let var1 = parseInt(readLine());
  num.push(var1);
}
for (let x = 0; x < n; x++) {
  let var1 = parseInt(readLine());
  target.splice(var1, 0, num[x]);
}
for (let x = 0; x < n; x++) {
  console.log(target[x]);
}
