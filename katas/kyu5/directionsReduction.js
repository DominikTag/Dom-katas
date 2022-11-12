/*
Full description of the task: https://www.codewars.com/kata/550f22f4d758534c1100025a/javascript
*/

function dirReduc(arr){

    const result = [];

    const count = {};

    const comparisons = {
        NORTH: 'SOUTH',
        SOUTH: 'NORTH',
        EAST: 'WEST',
        WEST: 'EAST'
    };

    let directionsLeft = new Map();

    for (const element of arr) {
        if (count[element]) {
            count[element] += 1;
        } else {
            count[element] = 1;
        }
    }

    // handle cases where all destination occured once
    if(new Set(Object.values(count)).size === 1) {
        for(const element in count) {
            result.push(element);
        }
    } else {

        for(const element in count) {
            if(count[element] - count[comparisons[element]] > 0) {
                directionsLeft.set(element, count[element] - count[comparisons[element]])
            }
        }

        directionsLeft.forEach((value, key) => {
            let i = 0;
            while(i < value) {
                result.push(key);
                i++;
            }
        })
    }

    return result;
}