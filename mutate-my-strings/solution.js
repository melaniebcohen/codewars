function mutateMyStrings(stringOne, stringTwo){
  let newStringOne = stringOne.split('');
  let newStringTwo = stringTwo.split('');
  let finalString = stringOne + '\n';

  for(var i = 0; i < stringOne.length; i++) {
    if(newStringOne[i] !== newStringTwo[i]) {
      newStringOne[i] = newStringTwo[i];
      finalString = finalString + newStringOne.join('') + '\n';
    }
  }
  return finalString;
}

mutateMyStrings('bubble gum', 'turtle ham')