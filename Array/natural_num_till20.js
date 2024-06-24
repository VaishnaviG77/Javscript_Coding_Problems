//Write a program to create an array of natural numbers till 20 and print it.

//Flow: arr=[]-->n=20-->i=0-->i<n-->a[i]=i+1-->i=i+1
//                      i=0-->i<n-->printa[i]-->i=i+1

const input = require("readline-sync")

let a=[], n=20

let j=0
while(j<n){
    a[j]=j+1
    j=j+1
}

let i=0
while(i<n){
    console.log(a[i])
    i=i+1
}
