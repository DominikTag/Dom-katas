/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

const sumTwoSmallestNumbers = function (numbers) {
  if(!Array.isArray(numbers) || numbers.length < 4) {
    return false;
  }

  if(!
      numbers.every(element => {
        return typeof element === 'number';
      })
  ) {
    return false;
  }

  let sortedArray = numbers.sort((a, b) => {return a - b});
  let result = sortedArray[0] + sortedArray[1];
  return result;
}

module.exports = { sumTwoSmallestNumbers };
