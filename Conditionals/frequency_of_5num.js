//Write a program to take N numbers from the user and print the frequency of every number.

const input = require("readline-sync")

let n = parseInt(input.question("Enter number of elements: "));
let a = [];
let i = 0,j=0,temp=0,cnt=0;
while(i<n){
    a[i]= parseInt(input.question("Enter no:"));
    i= i + 1;
}

i = 0;
while(i<n){
    j = j + 1;
    while(j<n){
        if(a[i]>a[j]){
            temp = a[i];
            a[i]=a[j];
            a[j]=temp;
        }
        j = j + 1;
    }
    i = i + 1;
}

i = 0 
while(i<n){
    j = j + 1, cnt = 0;
    while(j<n){
        if(a[i]==a[j]){
            cnt++;
        }
        j++;
    }
    console.log(a[i] + "-" + cnt);
    i = i + cnt;
}
