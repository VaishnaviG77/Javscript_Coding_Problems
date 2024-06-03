//Write a program to take three variables to store your birth date, birth month,
//and birth year, respectively, and then print them one by one 
//in a specified order.

//Flow: input date,month,year --> print date --> print month --> print year

const input = require("readline-sync");
let date = input.question("Enter date: ")
let month = input.question("Enter month: ")
let year = input.question("Enter year: ")

console.log("*******************")
console.log(date)
console.log(month)
console.log(year)
