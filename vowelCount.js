/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  let arrayFromString = str.split("");
  let result = 0;
  
  arrayFromString.forEach(letter => {
    if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
      result++;
    }
  })
  return result;
}
