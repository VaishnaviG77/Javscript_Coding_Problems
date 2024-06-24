//Write a function that takes a list of numbers and returns True if the sequence forms an arithmetic progression 
//and False otherwise.

//Ap --> consecutive nums should have same difference

const input = require("readline-sync");

let a = [];
let n = input.question("Enter number of elements: ");

let i = 0;
while (i<n){
    a[i] = input.question("Enter num: ");
    i++;
}

let d = a[1] - a[0];

i = 1;
let flag = 0;
while(i<n-1){
    if (a[i+1] - a[i] === d){
        flag = 1;
    }else{
        flag = 0;
    }
    i++;
}

if (flag === 1){
    console.log("True");
}else{
    console.log("False");
}
