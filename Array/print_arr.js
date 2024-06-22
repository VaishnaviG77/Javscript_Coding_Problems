//Write a program to print all the numbers from the given array using a loop. 

//Flow: declare arr --> i = 0 --> i<n --> print arr[i]-->i=i+1

const input = require("readline-sync")

let arr = [23,45,32,25,46,33,71,90]
let i=0

while(i<8){
    console.log(arr[i])
    i = i + 1
}
