let fs = require("fs");
const { listenerCount } = require("process");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let testcases = parseInt(readLine());
while (testcases > 0) {


  let n = parseInt(readLine());
  let arr = readLine().split(" ").map(Number);

  let largest = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < n; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  let secondLargest = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < n; i++) {
    if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  if (secondLargest == Number.NEGATIVE_INFINITY) {
    console.log("NA");
  } else {
    console.log(secondLargest);
  }
  testcases--;
}
