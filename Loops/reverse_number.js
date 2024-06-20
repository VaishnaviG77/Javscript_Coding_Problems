//Write a program that takes a number and prints the number that is formed by reversing the digits

//Flow: input num --> d = 0, revnum = 0 --> n > 0 --> d = num%10; revnum=(revnum*10)+d; num=num//10 --> print revnum

const input = require("readline-sync")

let num = parseInt(input.question("Enter number: "))
let d = 0, revnum = 0

while(num>0){
    d = num % 10
    revnum = (revnum * 10) + d
    num = Math.floor(num/10)
}

console.log(revnum)
