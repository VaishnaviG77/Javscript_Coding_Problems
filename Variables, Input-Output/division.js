//Write a program to take two numbers A and B from the user and calculate the quotient and remainder
//when number A is divided by number B.

const input = require("readline-sync")

let a = input.question("Enter Dividend: ")
let b = input.question("Enter Divisor: ")

console.log("Quotient: ",Math.floor(a/b))
console.log("Remainder: ",a%b)
