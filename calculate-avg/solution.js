function find_average(array) {
  var sum = array.reduce(function(prev, cur) {
    return prev + cur;
  })
  return sum / array.length;
}

// refactored for ES6
function find_average(array) {
  var sum = array.reduce((prev, cur) => {
    return prev + cur;
  })
  return sum / array.length;
}

// refactored again
function find_average(array) {
  return (array.reduce((prev, cur) => { return prev + cur; })) / array.length;
}