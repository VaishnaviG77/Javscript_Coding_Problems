//Write a program  to input electricity unit charges and calculate the total electricity bill
//For the first 50 units Rs. 0.50/unit
//For the next 100 units Rs. 0.75/unit
//For the next 100 units Rs. 1.20/unit
//For units above 250 Rs. 1.50/unit
//An additional surcharge of 20% is added to the bill

//Flow: input u-->if u>250 (T)-->total=25+75+120+((u-250)*1.5)
//                         (F)-->if u>150 (T)-->total=25+75+((u-150)*1.2)
//                                        (F)-->if u>50 (T)-->total=25+((u-50)*0.75)
//                                                      (F)-->total=u*0.5
//print(total)


const input = require("readline-sync")

let unit= parseFloat(input.question("Enter electricity units: "))
let total=0

if(unit>250){
    total=25+75+120+((unit-250)*1.5)
}else{
    if(unit>150){
        total=25+75+((unit-150)*1.2)
    }else{
        if(unit>50){
            total=25+((unit-50)*0.75)
        }else{
            total=unit*0.5
        }
    }
}

console.log("Total bill:",total+(total*0.2))
