//Write a function to find the sum of the first n terms of an arithmetic progression

//Sn = n/2(2a + (n-1)d)

const input = require("readline-sync");

let a = parseInt(input.question("Enter first term: "));
let d = parseInt(input.question("Enter common diff: "));
let n = parseInt(input.question("Enter term number: "));

console.log("The sum of n terms",(n/2)*((2*a)+((n-1)*d)));
