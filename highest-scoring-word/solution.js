function high(x){
  var stringArr = x.split(' ');
  var valueArr = [];
  
  for(var i = 0; i < stringArr.length; i++) {
    var counter = 0;
    var wordArr = stringArr[i].split(' ')

    for(var j = 0; j < wordArr.length; j++) {
      var letterArr = wordArr[j].split('');

      letterArr.forEach(letter => {
        counter += letter.charCodeAt() - 96;
      })
    }
    valueArr.push(counter);
  }

  var max = valueArr.indexOf(Math.max(...valueArr));
  return stringArr[max]
}