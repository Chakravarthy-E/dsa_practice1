let fs = require("fs");
const { listenerCount } = require("process");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let int = readLine().split("");
let product = 1;
let sum = 0;
for (let i = 0; i < int.length; i++) {
  let x = parseInt(int[i]);
  product = product * x;
  sum = sum + x;
  result = product - sum;
}
console.log(result);
