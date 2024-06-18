let input = require("readline-sync");

let n = parseInt(input.question("Enter size of array: "));
let a =[];
let j=0;
while(j<n){
    a[j]=parseInt(input.question("Enter number: "))
    j=j+1
}

i = 0;
let cnt = 0;
while (i<n){
    if (a[i] > a[(i+1)%n]){
        cnt++;
    }
    i++;
}

if (cnt < 2){
    console.log(true)
}else{
    console.log(false)
}
