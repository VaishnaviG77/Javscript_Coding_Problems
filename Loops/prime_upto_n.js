//Write a program to check if a number is a 'prime number'

//Flow: input n --> i = 2,cnt=0--> i<=n --> if n%i==0-->cnt=cnt+1;i=i+1-->if cnt>0 (T)-->not prime
//                                                                                 (F)-->prime

const input = require("readline-sync")

let n = parseInt(input.question("Enter number: "))
let i=2, cnt=0

while(i<n){
    if(n % i == 0){
        cnt=cnt+1
        i = i + 1
    }else{
        i = i + 1
    }
}

if(cnt>0){
    console.log(n,"is not prime number")
}else{
    console.log(n,"is prime number")
}
