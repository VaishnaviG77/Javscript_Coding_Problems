const input = require("readline-sync");

let n = parseInt(input.question("Enter size of array: "));
let a = [];

let i = 0;
while(i<n){
    a[i]=parseInt(input.question("Enter num: "));
    i++;
}

i=0;
while(i<n){
    flag=0;
    let j = 0;
    while(j<n){
        if(i!=j && a[i]==a[j]){
            flag = 1;
            break;
        }
        j++;
    }
    if(flag==0){
        console.log(a[i]);
    }
    i++;
}
