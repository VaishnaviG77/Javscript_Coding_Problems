//Take the number N and the name from the user as inputs, and print the name N times.

//input n,name--> i=1 -->iterate till i = n where print name

const input = require("readline-sync")

let name = input.question("Enter name:")
let n = parseInt(input.question("Enter n: "))

let i = 1

while(i<=n){
    console.log(name)
    i=i+1
}
