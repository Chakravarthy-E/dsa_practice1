let n = parseInt(readLine());
let arr = [];
for (let i = 0; i < 2 * n; i++) {
  arr[i] = parseInt(readLine());
}

let mi = [];
for (let i = 0; i < n; i++) {
  mi.push(arr[i]);
  mi.push(arr[n + i]);
}

for (let i = 0; i < mi.length; i++) {
  console.log(mi[i]);
}
