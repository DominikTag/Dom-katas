/*
Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]

*/

const greet = function (name){
    if(typeof name !== 'string') {
        throw new Error("Input must be of type string!")
    }

    return `Hello ${name}, how are you doing today?`;
}

module.exports = { greet };