/*
If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice stronger than love :-)

The input will always be in lowercase and never be empty.

Create a function that returns the value of the word, based on its letters, as integer.
*/

const wordsToScore = function (string){
    if(typeof string !== 'string' || string.match(/\d+/)) {
        return false;
    }

    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let stringToArray = string.split('');
    let indexes = [];

    stringToArray.map(element => {
        indexes.push(alphabet.indexOf(element) + 1);
    })
    
    return indexes.reduce((a, b) => a + b, 0);
}

module.exports = { wordsToScore };