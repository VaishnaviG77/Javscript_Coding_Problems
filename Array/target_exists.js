//Write a program to take size of array, array and target as input from the user 
//check whether the target exists in this array or not.

const input = require("readline-sync")

let n = parseInt(input.question("Enter size of array:")), a=[];

let i = 0;
while(i<n){
    a[i]=parseInt(input.question("Enter no.: "));
    i=i+1;
}

let j = 0, flag=0;
target = parseInt(input.question("Enter target: "));
while(j<n){
    if(target==a[j]){
        flag = 1;
        break;
    }else{
        j=j+1;
    }
}

if(flag==1){
    console.log("Target exists");
}else{
    console.log("Target doesn't exists");
}
