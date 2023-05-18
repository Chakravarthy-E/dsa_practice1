const { NODATA } = require("dns");
let fs = require("fs");
const { listenerCount } = require("process");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let N = parseInt(readLine());
if(N>=1&N<10**9){ 
    if(N%2==0){ //false
        console.log(N);
    }
    else{
        console.log(N*2);
    }
}