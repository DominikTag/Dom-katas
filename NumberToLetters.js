/*
Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.
*/

function switcher(x){
  const alphabet = [' ', '?', '!', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const reversedAlphabet = alphabet.reverse();
  let arrOfNum = x.map(str => {
    return Number(str) - 1;
  })
  let result = "";
  
  arrOfNum.forEach(element => {
    result += reversedAlphabet[element];
  })
  
  return result;
}
