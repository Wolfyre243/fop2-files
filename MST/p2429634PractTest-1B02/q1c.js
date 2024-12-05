/*
    Question 1c
    Name: Zhang Junkai
    Admin No: p2429634
    Class: DIT1B02
*/

let numArray = [1, 6, 9, 3, 10, 16];
// Do not remove the evenArray array.
evenArray = [2, 4, 8];

function getEven(ary) {
    let evenArray = [];
    for (let x = 0; x < ary.length; x++) {
        if (ary[x] % 2 == 0) {
            evenArray.push(ary[x]);
        }
    }
    return evenArray;
}

console.log(getEven(numArray));

// Reason for such error(s)
// The for loop within the function was modifying the evenArray outside the function's scope, hence adding on to the pre-existing values (2, 4 and 8) in the 'evenArray'.
// A new 'evenArray' was declared inside the function's own scope to change which array the for loop would push to.