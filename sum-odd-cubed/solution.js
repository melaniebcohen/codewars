function cubeOdd(arr) {
  console.log(arr)
  // contains string - flag
  let flag;

  for(var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
      flag = true;
      break;
    } else {
      flag = false;
    }
  }

  if (flag === false) {
    return arr.map(num => {
      return Math.pow(num, 3);
    }).filter(num => {
      if (num % 2 !== 0) {
        return num;
      }}).reduce((prev,cur) => {
      return prev + cur;
    })
  } else {
    return undefined;
  }
}