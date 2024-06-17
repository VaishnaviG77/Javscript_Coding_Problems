//Write a program to print the sum of odd numbers up to N.
//Flow: input n --> i=1,sum=0 --> i<n -->if i%2!=0 (T)-->sum=sum+i; i=i+1
//                                           (F)-->i=i+1                  ---->print sum

const input = require("readline-sync")

 let n = input.question("Enter n: ")
// let n=parseInt(prompt("enter the num"))
let i = 1, sum=0

while(i<n){
    if(i%2!=0){
        sum=sum+i
        i=i+1
    }else{
        i=i+1
    }
}
console.log(sum,"is sum of odd nos")
