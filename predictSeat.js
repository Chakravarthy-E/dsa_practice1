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
let seat = ["L","M","U","L","M","U","SL","SU"];

for(let i=0;i<n;i++){
    let ip = readLine().split(" ");
    let nb = parseInt(ip[0]);
    let b = parseInt(ip[1]);
    if(b>0&&b>=nb){
        console.log(seat[b-1]%8);
    }
    else{
        console.log("Invalid")
    }
}