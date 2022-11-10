/*
Given a string that includes alphanumeric characters ("3a4B2d") return the expansion of that string: The numeric values represent the occurrence of each letter preceding that numeric value. There should be no numeric characters in the final string.

Notes
The first occurrence of a numeric value should be the number of times each character behind it is repeated, until the next numeric value appears
If there are multiple consecutive numeric characters, only the last one should be used (ignore the previous ones)
Empty strings should return an empty string.
Your code should be able to work for both lower and capital case letters.

"3D2a5d2f"  -->  "DDDaadddddff"    # basic example: 3 * "D" + 2 * "a" + 5 * "d" + 2 * "f"
"3abc"      -->  "aaabbbccc"       # not "aaabc", nor "abcabcabc"; 3 * "a" + 3 * "b" + 3 * "c"
"3d332f2a"  -->  "dddffaa"         # multiple consecutive digits: 3 * "d" + 2 * "f" + 2 * "a"
"abcde"     -->  "abcde"           # no digits
"1111"      -->  ""                # no characters to repeat
""          -->  ""                # empty string
*/

function stringExpansion(s) {

    const firstLetterRegex = /^[a-zA-Z]$/;

    const numberRegex = /[0-9]/;

    const letterRegex = /[a-zA-Z]/;

    const letterAndNumberRegex = /^[a-zA-Z][0-9]$/;

    const lettersOnlyRegex = /^[a-zA-Z]*$/;

    let result = [];

    let counter = 0;

    // creates array with empty strings inside
    const dirtyArray = s.split(/([a-zA-Z]+|[0-9][a-zA-Z]+)/);

    // creates array without empty strings inside
    const cleanArray = dirtyArray.filter(element => {
        return element !== '';
    })

    // handle cases with first letter and then number (like 'M3') + parts of string with letters only
    cleanArray.forEach(element => {
        if(letterAndNumberRegex.test(element)) {
            let arrayFromElement = element.split('');
            result.push(arrayFromElement[0]);
        } else if(lettersOnlyRegex.test(element)) {
            result.push(element);
        }
    })

    const nestedArrays = cleanArray.map(string => {
        return string.split('');
    })

    // handle empty strings
    if(s === '' || s === null || s.length === 0) {
        return '';
    }

    // handle case when s = letters only string
    if(lettersOnlyRegex.test(s)) {
        return s;
    }


    for(let i = 0; i < nestedArrays.length; i++) {

        nestedArrays[i].forEach(arrayElement => {

            if(numberRegex.test(arrayElement)) {
                counter = 0;
                let numberFromString = Number(arrayElement);
                counter += numberFromString;
            } else if(letterRegex.test(arrayElement)) {
                let j = 1;
                while(j <= counter) {
                    result.push(arrayElement);
                    j++;
                }
            }
        })
    }
    return result.join('');
}