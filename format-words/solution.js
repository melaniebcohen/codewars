function formatWords(words){
  var filtered = words.filter(word => { return word !== ''});

  if (words.length === 0) {
    return '';
  } else if (filtered.length === 1) {
    return filtered.join('');
  } else if (filtered.length === 2) {
    return filtered.join(' and ');
  } else {
    let newArr = `and ${filtered.pop()}`
    return `${filtered.join(', ')} ${newArr}`;
  }
}