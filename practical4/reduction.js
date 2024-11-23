let sharePrice01102023 = [12.3, 11.2, 10.8, 10.5, 11.5, 12.50, 9.50, 11.55]; 
let sharePrice02102023 = [10.3, 9.2, 9.2, 8.3, 9.5, 11.10, 9.90, 10.25]; 

const callback = (accumulator, currentValue) => {
    return accumulator + currentValue;
}

function reduce(callback, initialValue) {
    const sum = initialValue; // initialise with 0 or whatever u put there
    for (const value of this) { // this is js a for loop that loops thru the array
        sum = callback(sum, value); // for each item in the array, call the callback (aka the function on line 4 above)
    }
    return sum; // finally return the added sum
}


sharePrice01102023.reduce(callback, 234829);