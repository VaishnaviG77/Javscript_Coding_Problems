//Write a program to take a number from the user and print the number of digits in the given number.

//Flow: input n --> d = 0,cnt=0 --> n==0 -->d=n%10; cnt = cnt+1; n = n//10 --> print sum

const input = require("readline-sync")

let n = parseInt(input.question("Enter n: ")), cnt = 0

while(n>0){
    cnt = cnt + 1
    n = Math.floor(n/10)
}

console.log(cnt)
