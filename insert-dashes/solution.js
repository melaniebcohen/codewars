// Not working yet. Womp womp.

'use strict';

function insertDash(num) {
  var num = 4054793;
  num = num.toString();
  var numArray = num.split('');
  var data = [];
  
  for(var i = 0; i < numArray.length; i++) {
    var x = parseInt(numArray[i]);
    var y = x % 2;
  
    if (y === 0) {
      data.push(numArray[i]);
    } else {
      data.push(numArray[i] + '-');
    }
    data.join(',').replace(/,/g,'');
  }
}