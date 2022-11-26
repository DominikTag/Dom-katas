/*
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

var countSheep = function (num){
    let resultText = '';
    let array = [];
    if(num > 0) {
        for(let i = 0; i <= num; i++) {
            if(i === 0) {
                continue;
            }
            array.push((num-num) + i);
        }
    }
    array.forEach(element => {
        resultText +=`${element} sheep...`
    })
    return resultText;
}