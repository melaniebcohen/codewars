function double(array) {
  return array.map(function(item) {
    return item * 2;
  })
}

// refactored for ES6
function double(array) {
  return array.map(item => {
    return item * 2;
  })
}

// refactored for single line ES6
function double(array) {
  return array.map(item => { return item * 2; })
}