let fs = require("fs");
const { listenerCount } = require("process");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let int =readLine();
let y = parseInt(int);
let num = readLine().split(" ");
let x = parseInt(num[0]) + parseInt(num[1])+parseInt(num[2])+parseInt(num[3]);
let mean = x / y;
console.log(Math.floor(mean));

