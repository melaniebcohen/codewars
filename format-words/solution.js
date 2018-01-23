function formatWords(words){

  if (words === null || words.length === 0) {
    return '';
  }
  if (words.length > 0) {
    var filtered = words.filter(word => { return word !== ''});

    if (filtered.length === 0) {
      return "";
    } else if (filtered.length === 1) {
      return filtered.join('');
    } else if (filtered.length === 2) {
      return filtered.join(' and ');
    } else if (filtered.length > 2) {
      let newArr = `and ${filtered.pop()}`
      return `${filtered.join(', ')} ${newArr}`;
    }
  }
}