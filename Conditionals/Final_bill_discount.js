//Create a program that determines a customer's discount eligibility based on their membership status and 
//purchase amount, and then calculates the final bill amount. (Using Conditional statements you’ve learned so far)

//Conditions:

// Membership status:
// Gold members get a 15% discount on purchases over $50.
// Silver members get a 10% discount on purchases over $75.
// Regular members get a 5% discount on purchases over $100.
// Non-members get a flat $5 discount on purchases over $150.

const input = require("readline-sync");

let purchase = parseInt(input.question("Enter purchase amount: "));
console.log("1. Gold member\n2. Silver member\n3. Regular member\n4. Non-member");
let n = parseInt(input.question("Select above choice: "));

let finalbill = 0;
if(n==1){
    if(purchase>50){
        console.log(purchase - (purchase*0.15));
    }else{
        console.log(purchase);
    }
}else if(n==2){
    if(purchase>75){
        console.log(purchase - (purchase*0.1));
    }else{
        console.log(purchase);
    }
}else if(n==3){
    if(purchase>100){
        console.log(purchase - (purchase*0.05));
    }else{
        console.log(purchase);
    }
}else if(n==4){
    if(purchase>150){
        console.log(purchase - 5);
    }else{
        console.log(purchase);
    }
}else{
    console.log("Enter valid option");
}
