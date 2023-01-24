"use strict";
const testData=[22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips=[];
const totals=[];
function calcTip(bill)
{ 
      return  (bill>=50 && bill <=300)? bill*.15 :bill*.2;
}
for(let i=0;i<testData.length;i++)
    {
      
        tips[i] =calcTip(testData[i]);
        totals.push(tips[i]+testData[i])
   }
calcTip(testData);
console.log(tips,"tips",totals);
const calcAverage= function(arr){
    let sum=0;
    for(let i =0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    return sum/arr.length;
}

console.log(calcAverage(totals),"total average");