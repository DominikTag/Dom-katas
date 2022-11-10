/*
Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
*/

function reverse(str){

    const result = [];

    const whiteSpacesRegex = /^\s+$/;


    if(str === '' || str === null || str === 0 || whiteSpacesRegex.test(str)) {
        return '';
    }

    const arrayFromString = str.split(' ');


    for(let i = 0; i < arrayFromString.length; i++) {

        if(!(i % 2 === 0)) {
            let wordToReverse = arrayFromString[i];
            let arrayFromWordToReverse = wordToReverse.split('');
            let reversedArray = arrayFromWordToReverse.reverse();
            result.push(reversedArray.join(''));
        } else {
            result.push(arrayFromString[i]);
        }
    }

    return result.join(' ');
}