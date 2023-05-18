let fs = require("fs");
const { listenerCount } = require("process");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let num =readLine().split(" ");
let m = parseInt(readLine());
let arr=[];
for(i = 0;i < m;i++){
    arr[i]= parseInt(num);
    let a = num.pop();
    num.unshift(a);
    console.log(num);
}
// let arr=readLine().split(" ");
// let m=parseInt(readLine());
// for(let i=0;i<m;i++)
// {
//     let last=arr.pop();
//     arr.unshift(last);
//         for(let j=0;j<arr.length;j++)
//     {
//         console.log(arr[j]);
//     }
// }
//

// let n = parseInt(readLine());
// let sum = 0;
// for (let i = 0; i < n; i++) {
//   let x = parseInt(readLine());
//   if (i % 2 == 0) {
//     sum = sum + x;
//   } else {
//     sum = sum - x;
//   }
// }
// console.log(sum);
