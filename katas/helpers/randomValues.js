const randomAmount = (min = 1, max) => {
    return Math.floor(Math.random() * max) + min;
}

const amountOfTests = randomAmount(5);

const randomString = () => {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let testString = '';

    for(let i = 1; i <= amountOfTests; i++) {
        for (let j = 0; j < randomAmount(10); j++) {
            testString += characters[randomAmount(characters.length)];
        }
    }
    return testString;
}

const randomStringWithDigits = (stringWithLetters) => {
    const arrayFromString = stringWithLetters.split('');
    const amountOfNumbersToInsert = 4;
    let randomNumber = Math.floor(Math.random() * 9) + 1;

    for(let i = 0; i < amountOfNumbersToInsert; i++) {
        arrayFromString[Math.floor(Math.random() * stringWithLetters.length)] = String(randomNumber);
    }

    return arrayFromString.join('');
}

const randomStringOfWords = (stringWithLetters) => {
    const array = stringWithLetters.split('');
    const result = [];

    for(let i = 0; i < array.length; i++) {
        result.push(array[i]);
        if(i % 3 === 0) {
            result.push(' ');
        }
    }

    return result.join('');
}

const randomNumbersArray = (arrayLength) => {
    const array = [];
    const valueRange = 9;
    for(let i = 0; i < arrayLength; i++) {
        array.push(Math.floor(Math.random() * valueRange) + 1);
    }

    return array;
}

const arrayOfRandomStringNumbers = (randomNumbersArray) => {
    return randomNumbersArray.map(element => {
        return String(element);
    })
}

const arrayOfRandomStrings = () => {
    const result = [];

    for(let i = 0; i < randomAmount(5); i++) {
        result.push(randomString());
    }

    return result;
}

module.exports = {
    amountOfTests,
    randomString,
    randomAmount,
    randomNumbersArray,
    randomStringWithDigits,
    randomStringOfWords,
    arrayOfRandomStringNumbers,
    arrayOfRandomStrings,
}