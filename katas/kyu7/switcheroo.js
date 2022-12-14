/*
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'

*/

const switcheroo = function (x){
    if(typeof x !== 'string' || (!/^[abc]+$/.test(x))) {
        return false;
    }

    const arrayFromString = x.split('');
    let changedArray = [];
    const replacements = {
        a: 'b',
        b: 'a',
        c: 'c'
    };

    arrayFromString.forEach(element => {
        if(replacements[element]) {
            changedArray.push(replacements[element]);
        }
    })
    return changedArray.join('');
}

module.exports = { switcheroo };