let fs = require("fs");
const { listenerCount } = require("process");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let int = readLine().split(" ");
let num1 = parseInt(int[0]);
let num2 = parseInt(int[1]);

let sum =( num1 + num2) % 12;
if(sum ==0){
    console.log(12)
}
else {
    console.log(sum);
}