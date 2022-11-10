/*
1. You are to write an function that takes a string as it's first parameter. This string will be a string of words.

2. You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the
 given string. The first word would be represented by 0.

3. Once you have the located string you are finally going to multiply by it the third provided parameter, which will
 also be an integer. You are additionally required to add a hyphen in between each word.

Example

modifyMultiply ("This is a string",3,5)
Should return

"string-string-string-string-string"

Since the 3rd word is 'string'(starting from 0 remember) and the third parameter indicates that it should be
 repeated 5 times.

Simple. Good luck.
*/

function modifyMultiply (str, loc, num) {
    const arrayFromString = str.split(' ');
    let result = [];

    for(let i = 1; i <= num; i++) {
        if(i === num) {
            result.push(arrayFromString[loc]);
            break;
        }

        result.push(`${arrayFromString[loc]}-`);
    }
    return result.join('');
}