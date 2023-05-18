let fs = require("fs");
const { parse } = require("path");
const { listenerCount } = require("process");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// let int = parseInt(readLine());
// let arr = [];
// let count = 1;
// for(let i=1;i<=int;i++){
//     let num = parseInt(readLine());
//     arr.push(num);
// }
// for(let i=0;i<int;i++){
//     if(arr[i]==arr[i+1]){
//         count++;
//     }if(count==2){
//         console.log(arr[i]);
//         return;
//     }
//     }
let int = parseInt(readLine());
let arr = [];
for (let i = 0; i < int; i++) {
  arr[i] = parseInt(readLine());
}
let count = 1;
let res = -1;
for (let i = 1; i < int; i++) {
  if (arr[i] === arr[i - 1]) {
    count++;
  } else {
    if (count === arr[i - 1]) {
      res = arr[i - 1];
      break;
    }
    count = 1;
  }
}
if (res === -1 && count === arr[int - 1]) {
  res = arr[int - 1];
}
console.log(res);
