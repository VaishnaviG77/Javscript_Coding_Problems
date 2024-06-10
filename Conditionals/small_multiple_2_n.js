//Write a program to print the smallest positive integer that is a multiple of both 2 and n

//Flow: input n --> n % 2 == 0(T) --> print n
//                            (F) --> print n*2

const input = require("readline-sync")

let num = parseInt(input.question("Enter number: "))

if(num%2 == 0){
    console.log(num)
}else{
    console.log(num*2)
}
