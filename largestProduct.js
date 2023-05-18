// var arr = inputArray;
//   var x=0;
//   var y=0;
//   var p=0;
//   for(var i=0;i<arr.length;i++){
//     x=arr[i];
//     y=arr[i+1];
//     if(x*y>p){
//      p=x*y;
//     };
//   };
//  return p;
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
let num = parseInt(readLine());
let arr = readLine().split("").map(Number);
let x = 0;
let y = 0;
let p = -Infinity;
for (let i = 0; i < arr.length; i++) {
  x = arr[i];
  y = arr[i + 1];
  if (x * y > p) {
    p = x * y;
  }
}
return p;
