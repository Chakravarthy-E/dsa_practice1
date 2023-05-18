let a = [14,32,21,34,32,12,34,33];
let i = 0;
let j = a.length-1;
let b = [];
while(i < j){
    b.push(a[i] + a[j])
    i++;
    j--;
}
console.log(b);