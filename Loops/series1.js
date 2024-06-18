// Write a program to calculate the sum of the following series where N is input from the user.
// 1 + 1/2 + 1/3 + 1/4 + 1/5 +…………1/N

//Flow: input n --> sum = 0 --> i<=n --> sum = sum + (1/i); i=i+1 --> print sum

const input = require("readline-sync")

let n = parseInt(input.question("Enter n: ")), sum=0
let i = 1

while(i<=n){
    sum = sum + (1/i)
    i=i+1
}

console.log(sum.toFixed(2))
