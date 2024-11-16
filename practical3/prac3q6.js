const input = require('readline-sync');

const toTitleCase = (str) => str.split(' ').map(word => word.replace(word.charAt(0), word.charAt(0).toUpperCase())).join(' ');

function anythingBruh(callback) {
    const userString = 'the quick brown fox jumped over the lazy dog';
    return callback(userString);
}

console.log(anythingBruh(toTitleCase));
