function abbrevName(name){
  var str = name;
  var strSplit = str.split(' ');
  var first = strSplit[0];
  var last = strSplit[1];
  
  return first.charAt(0).toUpperCase() + '.' + last.charAt(0).toUpperCase();
}
