function solve(arr){
  for(var i = 0; i < arr.length; i++) {
    x = arr[i];

    for(var j = 0; j < arr.length; j++) {
      y = arr[j];

      if (x === -y) {
        var a = arr.indexOf(x);
        arr.splice(a,1);

        var b = arr.indexOf(y);
        arr.splice(b,1);
      }
    }
  }
  return arr[arr.length - 1];
};