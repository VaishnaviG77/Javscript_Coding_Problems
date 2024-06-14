//Write a program to take 4 numbers from the user and output the third max of these 4 numbers.

//Flow: input a,b,c,d --> if a>b (T)-->max=a,smax=b;(F)-->max=b,smax=a
//                        if c>d (T)-->max1=c,smax1=d;(F)-->max1=d,smax1=c
//                        if max>max1 (T)-->if smax>max1 (T)-->print(max1)
//                                                       (F)-->if smax>smax1 (T)-->print(smax)
//                                                                           (F)-->print(smax1)
//                                    (F)-->if smax1>max (T)-->print(max)
//                                                       (F)-->if smax1>smax (T)-->print(smax1)
//                                                                           (F)-->print(smax)

const input = require("readline-sync")

let a = parseInt(input.question("Enter number: ")), b = parseInt(input.question("Enter number: ")), c = parseInt(input.question("Enter number: ")),
d = parseInt(input.question("Enter number: "))
let max=0,smax=0,max1=0,smax1=0

if(a>b){
    max=a
    smax=b
}else{
    max=b
    smax=a
}
if(c>d){
    max1=c
    smax1=d
}else{
    max1=d
    smax1=c
}
if(max>max1){
    if(smax>max1){
        console.log("Third max no:",max1)
    }else{
        if(smax>max1){
            console.log("Third max no: ",smax)
        }else{
            console.log("Third max no: ",smax1)
        }
    }
}else{
    if(smax1>max){
        console.log("Third max no: ",max)
    }else{
        if(smax1>smax){
            console.log("Third max no: ",smax1)
        }else{
            console.log("Third max no: ",smax)
        }
    }
}
