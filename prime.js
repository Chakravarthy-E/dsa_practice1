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
let arr = [];
for (let i = 2; i <= int; i++) {
  arr[i] = parseInt(readLine);
  let prime = true;
  for (let j = 2; i < j; j++) {
    if (i % j != 0) {
      prime = false;
      console.log("No");
      break;
    }
  }
  if (prime == true) {
    console.log("Yes");
    arr.push(i);
  }
}
