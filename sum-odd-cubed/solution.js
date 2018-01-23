function cubeOdd(arr) {
  var filtered = arr.filter(item => {
    if (typeof item !== 'number') {
      return undefined;
    } else if (typeof item === 'number' || item === 0) { 
      return item;
    }}).map(num => {
      return Math.pow(num, 3);
    }).filter(num => {
      if (num % 2 !== 0) {
        return num;
    }}).reduce((prev,cur) => {
      return prev + cur;
    })
    
  return filtered;
}

cubeOdd([1, 2, 3, 4])
cubeOdd([-3,-2,2,3])
cubeOdd(["a",12,9,"z",42])