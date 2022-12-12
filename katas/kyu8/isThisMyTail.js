/*
Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

If the tail is right return true, else return false.

The arguments will always be non empty strings, and normal letters.
*/

const correctTail = function (body, tail) {

    if(typeof body !== 'string' || typeof tail !== 'string') {
        throw new Error("Input must be of type string!")
    }

    let sub = body[body.length - 1];

    if (sub === tail) {
        return true;
    } else {
        return false;
    }
};

module.exports = { correctTail };