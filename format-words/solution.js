function formatWords(words){

  if (words.length === 0) {
    return '""';
  } else if (words.length === 1) {
    return words.join('');
  } else if (words.length === 2) {
    return words.join(' and ');
  } else {   // start here
    let newArr = ' and ' + words.pop();
    console.log(words, newArr);

    words.join('');
    return words.join(', ') + newArr;
    // console.log(newArr)
  }
}
formatWords(['ninja', 'samurai', 'ronin'])
formatWords(['ninja', '', 'ronin'])