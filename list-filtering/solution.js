// Can't figure out why 0 is not appearing in new arrays.

function filter_list(l) {
  var mapped = l.filter(function(item) {
    if (typeof(item) === 'number') {
      return item;
    }
  });
  return mapped;
}
