/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

function solution(str){
    const regex = /[a-zA-Z_]{2}/g;

    if(str === null || str === '' || str.length === 0) {
        return [];
    }

    if(str.length % 2 !== 0) {
        let correctString;
        correctString = str +  '_';
        return correctString.match(regex);
    }

    return str.match(regex);
}