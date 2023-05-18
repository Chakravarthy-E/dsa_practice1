let num = parseInt(readLine());
let neg = false;
if (num < 0) {
  neg = true;
  num = num * -1;
}
let rev = 0;
while (num > 0) {
  let last = num % 10;
  rev = rev * 10 + last;

  num = parseInt(num / 10);
}
if (neg === true) {
  console.log(-1 * rev);
} else {
  console.log(rev);
}
