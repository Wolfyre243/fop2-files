/*
    Question 1b
    Name: Zhang Junkai
    Admin No: p2429634
    Class: DIT1B02
*/

let numArray = [1,6,9,3,10,6];
let indexes = [];

for (let x = 0; x < numArray.length; x++) {   
    if (numArray[x] % 2 == 0) {
        indexes.push(x);
    }
}

console.log(indexes); 

// Reason for such error(s)
// The array 'indexes' was declared again inside the scope of the for loop, and this prevented anything from being pushed into the actual indexes array outside the for loop's scope.
// Array 'indexes' was not initialised with an empty array value, so line 9 was changed to allow the .push method to work.

