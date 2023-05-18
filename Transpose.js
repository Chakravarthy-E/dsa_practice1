let fs = require("fs");
const { listenerCount } = require("process");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = parseInt(readLine());
let matrix = [];
for (let i = 0; i < n; i++) {
  matrix.push((readLine()).split(" ").map(Number));
}
let rows = n;
let cols = matrix[0].length;
let transpos = [];
for (let col = 0; col < cols; col++) {
  let temp = [];
  for (let row = 0; row < rows; row++) {
    temp.push(matrix[row][col]);
    //transpos.push(temp);
  }
  console.log(...temp);
}
