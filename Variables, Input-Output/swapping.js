//Write a program to take two values from the user and swap them. 

//Flow: input --> temp=a,a=b,b=temp --> print

const input = require("readline-sync")

let num1 = input.question("Enter first number: ")
let num2 = input.question("Enter second number: ")

let temp = num1
num1 = num2
num2 = temp

console.log("First number: ",num1)
console.log("Second number: ",num2)
