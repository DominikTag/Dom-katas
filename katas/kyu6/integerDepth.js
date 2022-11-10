/*
The depth of an integer n is defined to be how many multiples of n it is necessary to compute before all 10 digits have appeared at least once in some multiple.

example:

let see n=42

Multiple         value         digits     comment
42*1              42            2,4
42*2              84             8         4 existed
42*3              126           1,6        2 existed
42*4              168            -         all existed
42*5              210            0         2,1 existed
42*6              252            5         2 existed
42*7              294            9         2,4 existed
42*8              336            3         6 existed
42*9              378            7         3,8 existed
Looking at the above table under digits column you can find all the digits from 0 to 9, Hence it required 9 multiples of 42 to get all the digits. So the depth of 42 is 9. Write a function named computeDepth which computes the depth of its integer argument.Only positive numbers greater than zero will be passed as an input.
*/
function computeDepth (x){
    let n = 1;

    const arrayToCompare = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    let multiplyResult = 0;

    let appearedNumbers = [];

    let depth = 0;

    // run the loop only if the array with results is not of the same length, as the expected one
    if(appearedNumbers.length !== arrayToCompare.length) {

        for(let i = 0; i <= n; i++) {
            multiplyResult = x * n;

            // convert result of multiplying into string
            let numberToString = String(multiplyResult);

            // change the string into array of strings
            let arrayFromString = numberToString.split('');

            // make array of strings into array of integers
            let arrayOfNumbers = arrayFromString.map(element => {
                return Number(element);
            })

            // push every integer, into array of appeared numbers (only if it's not already there)
            arrayOfNumbers.forEach(element => {
                if(!appearedNumbers.includes(element)) {
                    appearedNumbers.push(element);
                }
            })

            depth++;
            n++;

            // break the loop when appearedNumbers array has the same length as expected one + when they have matching values
            if(appearedNumbers.length === arrayToCompare.length && appearedNumbers.every(value => {
                return arrayToCompare.includes(value);
            })) {
                break;
            }
        }

    }
    return depth;
}