let fs = require("fs");
const { listenerCount } = require("process");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let int = parseInt(readLine());
let product = 0;
let arr = [];
for(let i=0;i<int;i++){
    arr.push(parseInt(readLine()));
    product[i] = arr[i]*arr[i+1];
}
console.log(product);