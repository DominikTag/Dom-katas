/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

function solution(str){
    let splitString = str.split("");
    let reversedString = splitString.reverse();
    let result = reversedString.join("");

    return result;
}