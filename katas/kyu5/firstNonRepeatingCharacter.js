/*
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
*/

function firstNonRepeatingLetter(s) {

    const arrayFromString = s.split('');
    let letterToCheck;

    if(s === '' | s === null | s.length === 0) {
        return '';
    }

    let i;
    for(i = 0; i < arrayFromString.length; i++) {
        letterToCheck = arrayFromString[i];
        let arrayka = [];


        for(let j = 0; j < arrayFromString.length; j++) {
            if(j === i) {
                continue;
            }

            // Compare the letters in case insensitive way
            if(arrayFromString[i].localeCompare(arrayFromString[j], undefined, { sensitivity: 'accent' }) === 0) {
                arrayka.push(arrayFromString[j]);
            }
        }

        if(arrayka.length !== 0) {
            arrayka = [];
        } else {
            break;
        }
    }

    // If the function managed to reach the end of an array, assume that it's all repeating string
    if(i === arrayFromString.length) {
        return '';
    }

    return letterToCheck;
}