let fs = require("fs");
const { parse } = require("path");
const { listenerCount } = require("process");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");
function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let int = readLine().split("");
let num1 = parseInt(int[0]);
let num2 = parseInt(int[1]);
let num3 = parseInt(int[2]);
let a = num1 ** 3;
let b = num2 ** 3;
let c = num3 ** 3;

console.log(c);
