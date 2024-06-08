//Write a program to take a number from the user and print that number as Odd or Even.

// input --> num % 2 == 0 (T)--> print "even"
//                          |
//                        (F)--> print "odd"

const input = require("readline-sync")

let num = parseInt(input.question("Enter number: "))

if(num%2==0){
    console.log(num,"is even")
}else{
    console.log(num,"is odd")
}
