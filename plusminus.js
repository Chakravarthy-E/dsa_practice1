let n = parseInt(readLine());
let sum = 0;
for(let i =0;i<n;i++){
    let num = parseInt(readLine());
    if(i%2==0){
        sum = sum + num;
    }else{
        sum =sum - num;
    }
}
console.log(sum);