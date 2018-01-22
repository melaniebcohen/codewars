function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter(function(n) {
    if (Number.isInteger(n) === true) {
      return n;
    }
  })
}