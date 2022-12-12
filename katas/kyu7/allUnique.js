/*
Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

*/

const hasUniqueChars = function (str){
    const stringToArray = str.split('');
    let character;
    let countTheSameCharacters = 0;

    for(let i = 0; i < stringToArray.length; i++) {
        character = stringToArray[i];

        if(stringToArray.includes(character, i + 1)) {
            return false;
        }
    }
    return true;
}

module.exports = { hasUniqueChars };