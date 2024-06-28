//Write a program to reverse the array and print the reversed array.

//Flow: n=input-->a=[]-->i=0-->i<n-->a[i]=input()-->i=i+1
//                       i=(n-1)-->i>=0-->print(a[i])-->i=i-1

const prompt=require("prompt-sync")();
let n=parseInt(prompt("Enter the number of elements in array: "));
let a = [];

let i=0;
while(i<n){
    a[i]=parseInt(prompt("Enter a number: "));
    i = i + 1;
}

let j = n - 1;
while(j>=0){
    console.log(a[j])
    j = j - 1
}
