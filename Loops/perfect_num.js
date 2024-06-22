//Write a program to take a number and then determine if that number is a 'perfect number'.

//Flow: input n--> i=1,sum=0-->i<n-->if n%i==0 (T)-->sum=sum+i;i=i+1-->if sum==n (T)-->print perfect
//                                                                               (F)--> not perfect

const input = require("readline-sync")

let n = parseInt(input.question("Enter number: "))
let  i = 1, sum = 0

while(i<n){
    if(n % i == 0){
        sum = sum + i
        i = i + 1
    }else{
        i = i + 1
    }
}

if(sum == n){
    console.log(n,"is perfect number")
}else{
    console.log(n,"is not perfect number")
}
