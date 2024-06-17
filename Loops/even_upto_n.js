//Take a number N from the user as input, and print even numbers up to N.

//Flow: input n --> i=1 --> i<n --> if i%2==0 (T)-->print i
//                                            (F)-->i=i+1

const input = require("readline-sync")

let n = input.question("Enter number n: ")
let i =1

while(i<n){
    if(i%2==0){
        console.log(i)
        i=i+1
    }else{
        i=i+1
    }
}
