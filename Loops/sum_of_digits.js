// Write a program to take a number and print the sum of the digits of the given number.

//Flow: input n --> d=0, sum=0 --> n>0 --> d=n%10; sum=sum+d; n=n//10 --> print sum

const input = require("readline-sync")

let n = parseInt(input.question("Enter n: ")), d = 0, sum = 0

while(n>0){
    d = n % 10
    sum = sum + d
    n = Math.floor(n/10)
}

console.log(sum)
