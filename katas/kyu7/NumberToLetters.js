/*
Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.
*/

const switcher = function (x){
  if(!(Array.isArray(x))) {
    return false;
  }

  if(
      x.every(element => {
        return typeof element === 'number';
      })
  ) {
    return false;
  }

  const alphabet = [' ', '?', '!', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const reversedAlphabet = alphabet.reverse();

  let result = x.map(str => {
    return reversedAlphabet[Number(str) - 1];
  })
    
  return result.join('');
}

module.exports = { switcher };