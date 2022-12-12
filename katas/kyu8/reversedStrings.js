/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

const reversedString = function(str){
    if(typeof str !== 'string') {
        return '';
    }

    let splitString = str.split("");
    let reversedString = splitString.reverse();
    let result = reversedString.join("");

    return result;
}

module.exports = { reversedString };