//Write a program to take two numbers from the user and perform Six basic operations(+,-,*,/,//,%)

//Flow: input --> perform operations -->print

const input = require("readline-sync")

let num1 = parseInt(input.question("Enter number: "))
let num2 = parseInt(input.question("Enter number: "))

console.log(num1,"+",num2,"=",num1+num2)
console.log(num1,"-",num2,"=",num1-num2)
console.log(num1,"*",num2,"=",num1*num2)
console.log(num1,"/",num2,"=",num1/num2)
console.log(num1,"//",num2,"=",Math.floor(num1/num2))
console.log(num1,"%",num2,"=",num1%num2)
