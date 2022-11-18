/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/
function rot13(message){


    if(/\s/.test(message)) {
        const arrayFromMessage = message.split(' ');
        const arrayWithReplacedLetters = replacedSentences(arrayFromMessage);
        const arrayWithReplacedWords = arrayWithReplacedLetters.map(array => {
            return array.join('');
        })

        return arrayWithReplacedWords.join(' ');
    } else {
        const arrayFromMessage = message.split('');
        const arrayWithReplacedLetters = replacedLetters(arrayFromMessage);
        return arrayWithReplacedLetters.join('');
    }

}

function alphabet(type) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    if(type === 'small') {
        return alphabet;
    }

    if(type === 'large') {
        const bigLettersAlphabet = alphabet.map(letter => {
            return letter.toUpperCase();
        })
        return bigLettersAlphabet;
    }
}

function searchForRot13Replacement(startIndex, alphabetLength = 26) {
    let indexOfReplacement = startIndex;
    for(let i = 0; i < 13; i++) {
        indexOfReplacement += 1;

        if(indexOfReplacement === alphabetLength) {
            indexOfReplacement = 0;
        }
    }
    return indexOfReplacement;
}

function replacedLetters(arrayOfLetters) {
    const bigLettersAlphabet = alphabet('large');
    const smallLettersAlphabet = alphabet('small');

    let result = [];

    arrayOfLetters.forEach(letter => {
        // Handle different characters than letters
        const differentCharactersRegex = /[0-9|\W|_]/;
        if(differentCharactersRegex.test(letter)) {
            result.push(letter);
            return;
        }

        if(letter === letter.toUpperCase()) {
            let baseIndex = bigLettersAlphabet.indexOf(letter);
            const indexOfLetterToReplace = searchForRot13Replacement(baseIndex);
            result.push(bigLettersAlphabet[indexOfLetterToReplace]);
        } else {
            let baseIndex = smallLettersAlphabet.indexOf(letter);
            const indexOfLetterToReplace = searchForRot13Replacement(baseIndex);
            result.push(smallLettersAlphabet[indexOfLetterToReplace]);
        }
    });

    return result;
}

function replacedSentences(arrayOfWords) {

    let result = [];

    const arrayOfLettersFromWords = arrayOfWords.map(word => {
        return word.split('');
    })

    arrayOfLettersFromWords.forEach(array => {
        result.push(replacedLetters(array));
    })

    return result;
}