function disemvowel(str) {
  var newStr = str.split(/[aeiou]+/i);
  return newStr.join('');
}