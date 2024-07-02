//The game is about guessing a number between 1 to 10, you can choose how many times you want to guess and 
//guess those many times, if you are able to guess the secret number you won the game, or if your chances are 
//completed means you completely lost the game. Are you ready to play the game?

const input = require("readline-sync");
let num=8;
let n = parseInt(input.question("Enter number of guesses u wnt: "));
let cnt=1,cntl=0;
for(let i=0;i<n;i++){
    let guess = parseInt(input.question("Enter your number between 1 to 10: "));
    if(guess===num){
        console.log(`Good job!!You guess it correctly in ${cnt} turn/s`);
        break;
    }else if(guess<num){
        console.log(`${guess} is too low`);
        cnt+=1;
    }else{
        console.log(`${guess} is too high`);
        cnt+=1;
    }
    cntl+=1;
}
if(cntl===n){
    console.log("You have lost the game. Try again later :(")
}
