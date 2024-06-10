//Write a program to print the greater number of the three numbers.

//Flow: input a,b,c --> if a>b (T) --> max = a ; (F) --> max = b
//                      if max>c (T) --> print max ; (F) --> print c

const input = require("readline-sync")

let a = parseInt(input.question("Enter number: ")), b = parseInt(input.question("Enter number: ")), c = parseInt(input.question("Enter number: "))
let max = 0
if(a>b){
    max = a
}else{
    max = b
}
if(max>c){
    console.log(max,"is greatest")
}else{
    console.log(c,"is greatest")
}
