/*Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
Have fun!
*/
const oddOrEven = function (array) {
    if(!Array.isArray(array)) {
        return false;
    }

    if(!
        array.every(element => {
            return typeof element === 'number';
        })
    ) {
        return false;
    }

   const sum = array.reduce((accumulator, value) => {
     return accumulator + value;
   }, 0)

   if(sum % 2 === 0) {
     return 'even';
   } else {
     return 'odd';
   }
}

module.exports = { oddOrEven };