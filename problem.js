let fs = require("fs");
const { listenerCount } = require("process");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let int = parseInt(readLine());
let arr = [];
let count = 1;
for (let i = 1; i <= int; i++) {
  let num = parseInt(readLine());
  arr.push(num);
}
// 1 2 3 4 4 4 4 5 5 6
//console.log(arr)
for (let i = 0; i < int; i++) {
  // i=0--1 i=1--2

  if (arr[i] == arr[i + 1]) {
    count++;
  } else {
    if (count == 4) {
      console.log(arr[i]);
      return;
    } else {
      //0 0 0 1+1= 2
      count = 1;
    }
  }
  //console.log(count)
}
if (count != 4 || arr.length == 0) {
  console.log(-1);
}
