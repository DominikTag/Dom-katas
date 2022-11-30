const randomAmount = (max) => {
    return Math.floor(Math.random() * max) + 1;
}

const amountOfTests = randomAmount(25);

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

module.exports = {
    amountOfTests,
    randomString,
    randomAmount,
}