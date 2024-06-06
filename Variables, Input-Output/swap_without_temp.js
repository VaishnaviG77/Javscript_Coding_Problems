//Write a pgm to take two inputs from user and swap without using temporary or third variable

//Flow: input --> a = a+b,b=a-b,a=a-b -->output

const input = require("readline-sync")

 let num1 = parseInt(input.question("Enter first number: "))
 let num2 = parseInt(input.question("Enter second number: "))

num1 = num1+num2
num2 = num1-num2
num1 = num1-num2

console.log("First number: ",num1)
console.log("Second number: ",num2)
