/*
Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
*/

multiplicationTable = function(size) {
    const result = [];
    let arrayToPush = [];

    for(let i = 1; i <= size; i++) {
        let maximumValue = i * size;

        while(maximumValue >= i) {
            arrayToPush.push(maximumValue);
            maximumValue = maximumValue - i;
        }

        result.push(arrayToPush.sort((a, b) => {return a - b}));
        arrayToPush = [];
    }
    return result;
}