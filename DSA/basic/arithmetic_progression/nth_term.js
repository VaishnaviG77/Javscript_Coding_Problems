//Write a function to find the nth term of an arithmetic progression given the first term (a), 
//the common difference (d), and the term number (n)

//an = a + (n-1)d

const input = require("readline-sync");
let a = parseInt(input.question("Enter the first term a: "));
let d = parseInt(input.question("Enter common difference d: "));
let n = parseInt(input.question("Enter term number n: "));

console.log("The nth term is",a+((n-1)*d))
