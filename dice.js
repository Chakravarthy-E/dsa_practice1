let fs = require("fs");
const { listenerCount } = require("process");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let num = parseInt(readLine());
let x = 7;
if(1 <= num <= 6){
    console.log(x-num);
}