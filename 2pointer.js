let a = [5,6,7,3,2,3]
let i =0;
let j = a.length-1;
let b=[];
while(i<j){
    b.push(a[i] + a[j])
    i++;
    j--;
}
console.log(b)