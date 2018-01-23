function filter_list(l) {
  return l.filter(function(item) {
    return (Number.isInteger(item) || item === 0);
  })
}