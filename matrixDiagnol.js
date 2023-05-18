let n = parseInt(readLine());
let matrix = [];
for (let i = 0; i < n; i++) {
  let arr = readLine().split(" ").map(Number);
  matrix.push(arr);
}

for (let row = 0; row < n; row++) {
  let col = row;
  if (matrix[row][col] < 0) {
    matrix[row][col] = 0;
  } else {
    matrix[row][col] = 1;
  }
}
for (let i = 0; i < n; i++) {
  console.log(...matrix[i]);
}
