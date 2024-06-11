//Write a program to print the greater number of the four numbers

//Flow: input a,b,c,d --> if a>b (T)--> max = a ; (F)--> max = b
//                    --> if c>d (T)--> max2 = c ; (F)-->max2 = d
//                    --> if max>max2(T)--> print max ; (F)--> print max2

const input = require("readline-sync")

let a = parseInt(input.question("Enter number: ")),
b = parseInt(input.question("Enter number: ")),
c = parseInt(input.question("Enter number: ")),
d = parseInt(input.question("Enter number: "))

let max = 0, max2 = 0

if(a>b){
    max = a
}else{
    max = b
}
if(c>d){
    max2 = c
}else{
    max2 = d
}
if(max>max2){
    console.log(max,"is greatest")
}else{
    console.log(max2,"is greatest")
}
