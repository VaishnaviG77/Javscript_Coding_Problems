const input = require("readline-sync");
let n = parseInt(input.question("Enter the size of array: ");
let nums =[];
for(let k=0;k<n;k++){
  nums[k] = parseInt(input.question("Enter number: ");
}

maxcnt = 0;
maxele = 0;
nums.sort();
let cnt;
for(let i=0;i<nums.length;i+=cnt){
    cnt=1;
    for(let j=i+1;j<nums.length;j++){
        if(nums[i]===nums[j]){
            ++cnt;
        }else{
            break;
        }
    }
    if(cnt>maxcnt){
        maxele = nums[i];
        maxcnt = cnt;
    }
}
console.log(maxele);
