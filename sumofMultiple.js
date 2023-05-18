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
let sum = 0;
let arr = [];
for (let i = 0; i < int; i++) {
  let num = parseInt(readLine());
  arr.push(num);
  // if(arr[i]%11==0){
  //     sum=sum+arr[i];
  // }console.log(sum);
}
for (i = 0; i < int; i++) {
  if (arr[i] % 11 == 0) {
    sum = sum + arr[i];
  }
  console.log(sum);
}
