/*
Full description of the task is here: https://www.codewars.com/kata/5904be220881cb68be00007d
*/

function fish(shoal){

    const shoalToBeEatenFirst = createArrayFromShoal(shoal);
    let objAfterEating = eating(shoalToBeEatenFirst, 1, 0);
    let finalObjAfterEating;


    if(objAfterEating.nextToBeEaten.some((x) => x <= objAfterEating.finalLevel)) {
        finalObjAfterEating = eating(objAfterEating.nextToBeEaten, objAfterEating.finalLevel, objAfterEating.finalCounter);
    } else {
        return objAfterEating.finalLevel;
    }

    while(finalObjAfterEating.nextToBeEaten.some((x) => x <= finalObjAfterEating.finalLevel)) {
        finalObjAfterEating = eating(finalObjAfterEating.nextToBeEaten, finalObjAfterEating.finalLevel, finalObjAfterEating.finalCounter);
    }

    return finalObjAfterEating.finalLevel;

}

function createArrayFromShoal(str) {

    const shoalArrayString = str.split('');

    const shoalArrayNumbers = shoalArrayString.map(character => {
        return Number(character);
    })
    return shoalArrayNumbers.slice();
}

function eating(array, lvl, counter) {

    const lvlUps = [
        {level: 2, value: 4},
        {level: 3, value: 12},
        {level: 4, value: 24},
        {level: 5, value: 40},
        {level: 6, value: 60},
        {level: 7, value: 84},
        {level: 8, value: 112},
        {level: 9, value: 144},
        {level: 10, value: 180},
        {level: 11, value: 220}
    ];

    const result = {
        nextToBeEaten: [],
        finalLevel: lvl,
        finalCounter: counter
    };

    for(let i = 0; i < array.length; i++) {
        if(array[i] === 0) {
            continue;
        }

        if(array[i] <= result.finalLevel) {
            result.finalCounter += array[i];
        } else {
            result.nextToBeEaten.push(array[i]);
        }

        lvlUps.forEach(element => {
            if(result.finalCounter >= element.value) {
                result.finalLevel = element.level;
            }
        })
    }
    return result;
}