//Write pgm to convert temperature from Celsius to Fahrenheit using formula  C/5 = (F-32)/9

//Flow: input --> f = ((9*C)/5)+32 --> print f

const input = require("readline-sync")

let c = input.question("Enter temp in celcius: ")

let f = ((9*c)/5)+32

console.log("Temperature in Farhenheit: ",f)
