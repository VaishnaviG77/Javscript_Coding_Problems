//Write a function to generate the first n terms of an arithmetic progression 
//given the first term (a) and the common difference (d).

//ap --> a,a+d,a+2d,a+3d,.....a+(n-1)d

const input = require("readline-sync");
let a = parseInt(input.question("Enter first term: "));
let d = parseInt(input.question("Enter common diff: "));
let n = parseInt(input.question("Enter n: "));

let i = 0;
while(i<n){
    console.log(a+(i*d));
    i++;
}
