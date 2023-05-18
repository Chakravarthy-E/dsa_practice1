let n = parseInt(readLine()); //n=5
let arr = [];
for (let i = 0; i < n; i++) {
  let b = parseInt(readLine());
  arr.push(b);
}
let nooffold = parseInt(readLine());
for (let i = 0; i < nooffold; i++) {
  let b = [];
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    b.push(arr[i] + arr[j]);
    i++;
    j--;
  }
  if (i == j) {
    b.push(arr[i]);
  }
  arr = b;
}
console.log(arr.length);
for (let element of arr) {
  console.log(element);
}
