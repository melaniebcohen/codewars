'use strict';

function insertDash(num) {
  let numArr = num.toString().split('');
  
  for(let i = 1; i < numArr.length; i++) {
    if (parseInt(numArr[i - 1]) % 2 === 1 && parseInt(numArr[i]) % 2 === 1) {
      numArr.splice(i, 0, '-');
      i++;
    }
  }
  return numArr.reduce(function(runningTotal,newVal) {
    return runningTotal + newVal; 
  });
}