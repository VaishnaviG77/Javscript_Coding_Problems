//Write a program to take number from the user and then display the last digit of that number.

//Flow: input --> d = n%10 --> print n

const input = require("readline-sync")
 let n = input.question("Enter number: ")
 let d = n%10

console.log("The last digit is: ",d)
