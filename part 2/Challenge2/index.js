// Whole-script strict mode syntax
"use strict";
const testData=[125,555,44];
const tipData=[];
function calcTip(bill)
{ if(bill>=50 && bill <=300)
   {
    return bill*.15;
   }
   return bill*.20;
}
tipData[0]=calcTip(testData[0]);
tipData[1]=calcTip(testData[1]);
tipData[2]=calcTip(testData[2]);
const totalValues=[tipData[0]+testData[0],tipData[1]+testData[1],tipData[2]+testData[2]]
console.log(tipData);
console.log(totalValues);