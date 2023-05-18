let fs = require("fs");
const { listenerCount } = require("process");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let speed = parseInt(readLine());
let  distance = 600;
let travelTime = distance/ speed;
console.log(Math.floor(travelTime));