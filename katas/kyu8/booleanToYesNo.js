/*
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/

const boolToWord = function( bool ){
    let result;
    if (bool) {
        result = 'Yes'
    } else {
        result = 'No'
    }
    return result;
}

module.exports = { boolToWord };