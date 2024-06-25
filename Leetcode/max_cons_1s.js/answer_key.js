let input = require("readline-sync")

let n = parseInt(input.question("Enter size of array: "));
let i = 0
let a=[];
while(i<n){
    a[i] = parseInt(input.question("Enter number: "));
    i = i + 1;
}

let max = 0;
let cnt = 0;
i = 0;
while(i<n){
    if(a[i]==1){
        cnt++;
    }else{
        if(max<cnt){
            max = cnt;
        }
        cnt = 0;
    }
    i++;
}

if(max<cnt){
    max = cnt;
}
console.log(max)
