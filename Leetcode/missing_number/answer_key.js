let input = require("readline-sync")

let n = parseInt(input.question("Enter length of array: "));
let a = [];

let i = 0;
while(i<n){
    a[i] = parseInt(input.question("Enter numbers: "));
    i++;
}

i = 0;
let sum = 0;
while(i<n+1){
    sum = sum + i;
    i = i + 1;''
}

i = 0;
let asum = 0;
while(i<n){
    asum = asum + a[i];
    i = i + 1
}

console.log(sum-asum)
