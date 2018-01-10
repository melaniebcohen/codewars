function fixTheMeerkat(arr) {
  var toLast = arr[0];
  var toFirst = arr.splice(2,1,toLast)[0];
  arr.splice(0,1,toFirst);
  
  return arr;
}
