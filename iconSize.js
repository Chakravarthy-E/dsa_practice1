let imSize = parseInt(readLine());
let image = [];
for (let i = 0; i < imSize; i++) {
  image[i] = parseInt(readLine());
}

let iconSize = parseInt(readLine());
let icon = [];
for (let i = 0; i < iconSize; i++) {
  icon[i] = parseInt(readLine());
}
let matches = 0;
if (iconSize === 0) {
  matches = 0;
} else if (iconSize === 1) {
  for (let i = 0; i < imSize; i++) {
    if (image[i] === icon[0]) {
      matches++;
    }
  }
} else {
  for (let i = 1; i < imSize; i++) {
    if (image[i] === icon[1] && image[i - 1] === icon[0]) {
      matches++;
    }
  }
}
console.log(matches);
