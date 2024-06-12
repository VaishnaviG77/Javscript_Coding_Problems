//Write a program to take 3 numbers from the user and output the second max of 3 numbers.

//Flow: input a,b,c --> if a>b (T)-->max=a,smax=b; (F)-->max=b,smax=a,
//                         smax>c (T)-->print smax; (F)-->if max>c (T)-->print c; (F)-->print max

const input = require("readline-sync")

let a = parseInt(input.question("Enter number: ")),
b = parseInt(input.question("Enter number: ")),
c = parseInt(input.question("Enter number: "))

let max=0, smax=0

if(a>b){
    max=a
    smax=b
}else{
    max=b
    smax=a
}
if(smax>c){
    console.log(smax,"is second greatest")
}else{
    if(max>c){
        console.log(c,"is second greatest")
    }else{
        console.log(max,"is second greatest")
    }
}
