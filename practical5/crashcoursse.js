// const callbackFn = (text) => console.log(text);

// function higherOrder(callback, word) {
//     callback(word);
// }

// higherOrder(callbackFn, "Hello");

/**
 * map !
 * reduce !
 * sort !!
 * forEach !!!
 * reverse !
 * filter ?
 * find ?
 * ... 
 */

const arr = [31, 22, 3, 35, 14, 51]
const alphabet = ['a', 'A', 'b', 'A', 'c', 'C', 'B', 'a', 'b', 'C'];

function callback(accumulator, currentElement) {
    return accumulator + currentElement;
}

const sum2 = arr.reduce(callback, 0);

const sum = arr.reduce((accumulator, currentElement) => { // arr[i]
    return accumulator + currentElement;
}, 0);

alphabet.sort();

const cache = {}

alphabet.forEach(char => {
    if (cache[char.toUpperCase()]) {
        cache[char.toUpperCase()].push(char);
    } else {
        cache[char.toUpperCase()] = [char];
    }
})
console.log(cache)

const finalArr = []; // [2, 3, 4];

for (const key in cache) {
    cache[key].reverse();
    finalArr.push(...cache[key]);
}

console.log(finalArr.reduce((a, c) => a + ' ' + c, ''));
