/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

const highAndLow = function (numbers){
  const regex = /^\d+|\d\s+$/;
  const whiteSpaceRegex = /\s/;
  if(typeof numbers !== 'string' || (!regex.test(numbers))) {
    return false;
  }

  let arrayOfStrings;

  if(whiteSpaceRegex.test(numbers)) {
    arrayOfStrings = numbers.split(" ");
  } else {
    arrayOfStrings = numbers.split("");
  }
  
  let arrayOfNumbers = arrayOfStrings.map(string => {
    return Number(string);
  })
  
  const biggestNumber = Math.max.apply(null, [...arrayOfNumbers]);
  const smallestNumber = Math.min.apply(null, [...arrayOfNumbers]);

  return `${biggestNumber} ${smallestNumber}`;
}

module.exports = { highAndLow };