//Write a program to determine whether a given year is a leap year or not

//Flow: input year --> if year%4==0 (T)--> if year%400==0 (T)--> print leap year
//                                                        (F)-->if year%100!==0(T)-->print leap year
//                                                                            (F)-->print not leap yr
//                                  (F)--> print not leap year

const input = require("readline-sync")

let year = parseInt(input.question("Enter year: "))

if(year%4==0){
    if(year%400==0){
        console.log("Leap Year")
    }else if (year%100!=0) {
        console.log("Leap Year")
    } else {
        console.log("Not Leap Year")
    }
}else{
    console.log("Not Leap Year")
}
