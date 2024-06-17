//Write a program to take two integers M, and N and print the sum of numbers in the range M to N.

//Flow: input m,n-->sum=0-->m<=n-->sum=sum+m; m=m+1 -->print sum

const input = require("readline-sync")

let m = parseInt(input.question("Enter m: ")), n = parseInt(input.question("Enter n: "))
let sum =0 

while(m<=n){
    sum=sum+m
    m=m+1
}
console.log(sum)
