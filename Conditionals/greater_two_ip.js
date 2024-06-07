//Write a program to determine the greater of those two given numbers.

//Flow: input a,b --> if a > b (T) --> print a
//                                |
//                             (F) --> print b

const input = require("readline-sync")

let a = parseInt(input.question("Enter number: "))
let b = parseInt(input.question("Enter number: "))

if(a>b){
    console.log(a,"is greater")
}else{
    console.log(b,"is greater")
}
