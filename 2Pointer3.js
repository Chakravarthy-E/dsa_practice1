let ar = [23,23,12,34,23,23,1];
let i =0;
let j = ar.length-1;
let br = [];
while(i<j){
    br.push(ar[i]+ar[j])
    i++;
    j--;
}
if(i==j){
    br.push(ar[i]);
}
console.log(br);