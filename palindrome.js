let fs = require("fs");
const { listenerCount } = require("process");
const { arrayBuffer } = require("stream/consumers");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let num = readLine();
let int = parseInt(num);
let a = num.split("");
//console.log(a);
let len = a.length;
let temp = [];
for(let i=0;i<len;i++){
    temp.unshift(parseInt(a[i]));
    
}
let x = temp.join("");
if(num==x){
  console.log("True");
}
else{
  console.log("False");
}



