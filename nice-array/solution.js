function isNice(arr){
  var niceArr = [];
  var counter = 0;

  for(var i = 0; i < arr.length; i++) {
    console.log('i',i)
    var x = arr[i] - 1;
    var y = arr[i] + 1;

    for(var j = 0; j < arr.length; j++) {
      if (x === arr[j] || y === arr[j]) {
        //
      }
    }
  }

  // if (arr.length === niceArr.length) {
  //   return true;
  // } else if (arr.length === 0) {
  //   return false;
  // } else {
  //   return false;
  // }
}