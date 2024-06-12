//Write a program to take the basic salary of an employee and calculate its Gross salary
//Gross salary is the sum of basic salary, HRA, and DRA)
//Basic Salary <= 10000 : HRA = 20%, DA = 80%
//Basic Salary <= 20000 : HRA = 25%, DA = 90%
//Basic Salary > 20000 : HRA = 30%, DA = 95%

//Flow: input bs --> if bs<=10000 (T)-->gs=bs+(bs*0.2)+(bs*0.8)
//                                (F)-->if bs<=20000 (T)-->gs=bs+(bs*0.25)+(bs*0.9)
//                                                   (F)-->if bs>20000 (T)-->gs=bs+(bs*0.3)+(bs*0.95)
//      print gs

const input = require("readline-sync")

let bs=parseInt(input.question("Enter your basic salary: "))
let gs = 0

if(bs<=10000){
    gs=bs+(bs*0.2)+(bs*0.8)
}else{
    if(bs<=20000){
        gs=bs+(bs*0.25)+(bs*0.9)
    }else{
        gs=bs+(bs*0.3)+(bs*0.95)
    }
}
console.log("Gross salary is",gs)
