/*
    CIT 281 Project 1
    Name: Isabella Barillas
*/


// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const length = getRandomInteger(5, 26);
let result = "";

for (let i=0; i<length; i++){
    result += String.fromCharCode(getRandomInteger(97, 123));
}

console.log( length + " lowercase letters: " + result);
