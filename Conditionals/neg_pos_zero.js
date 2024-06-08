//Write a program to determine output whether that number is negative, positive or zero.

//Flow: input num --> if num == 0 --> print zero
//                --> if num > 0 (T) --> print positive
//                               (F) --> print positive

const input = require("readline-sync")

let num = parseInt(input.question("Enter number: "))

if(num>0){
    console.log(num,"is positive")
}else if(num == 0){
    console.log(num,"is zero")
}else{
    console.log(num,"is negative")
}
