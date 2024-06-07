//Write a program to find largest number that is less than A and can be divided evenly by B. 

//Flow: input --> quotient = a//b --> num = quotient * b --> print num

const input = require("readline-sync")

let a = input.question("Enter number a: ")
let b = input.question("Enter number b: ")

let q = Math.floor((a-1)/b)

let num = q * b

console.log("The number is: ",num)
