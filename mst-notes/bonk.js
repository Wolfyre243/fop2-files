/* ---------------------------------- MST REFERENCE SHEET ---------------------------------- */
// Use at your own discretion
// DISCLAIMER: This is NOT a one-way ticket to solving a question; This file only includes syntax that you may wish to reference.
// DISCLAIMER 2: I MAY OR MAY NOT HAVE MISSED OUT INFORMATION. DO NOT BELIEVE STUFF ON THE INTERNET.

/**
 * Contents (not in order of chapter)
 * 1. Hoisting & Scope
 * 2. Closures
 * 3. Higher-Order Functions
 * 4. Array Methods
 * 5. Data Structures
 * 6. Extras
 */

/* ---------------------------------- 1. Hoisting & Scope ---------------------------------- */
// TODO: Ignored for now; past MSTs don't seem to cover this for some reason.

/*  ------------------------------------- 2. Closures  ------------------------------------- */

// A common way they will test your closure knowledge is having you return an object literal that encapsulates data inside.
// This is similar code taken from last year's MST (this is not the solution)
function myGifts() {
    const giftArr = [];

    return { // Here we are returning an object literal containing methods that interact with the array above. This is the main concept of closures.
        addGift(gift) {
            giftArr.push(gift); // Over here, we are interacting with the array that's encapsulated inside this function.
            // Take note that this may not always be the case, but the reason for doing this is so that other code does not accidentally change it*
        },

        clearGifts() {
            giftArr = [];
        }
    }
}

const johnGifts = myGifts();
johnGifts.addGift('a book'); // *As you can see here, only through .addGift() can we add a gift into the array.
giftArr.push('socks'); // This wouldn't work because of scoping. giftArr is in the scope of myGifts, not in the global scope. Hence it is inaccessible.
johnGifts.clearGifts();

/*  ------------------------------ 3. Higher-Order Functions  ------------------------------ */

// Higher-Order Functions are functions that take in another function as a parameter, often known as a callback function.
// This makes them very versatile and flexible.

// This is sample code taken from the Mock MST

// Tip: if you are comfortable with arrow functions I would write first-class functions as arrow functions instead.
function sum(arr) {
    // The code below isn't important; more importantly, you should understand how the function "sum" itself is being passed on.
    return arr.reduce((a, c) => a + c, 0); 
}
// Another way to write it, as an arrow function:
// const sum = (arr) => arr.reduce((a, c) => a + c, 0);

function average(arr) {
    return arr.reduce((a, c) => a + c, 0)/arr.length; 
}

// ... more first-class functions ...

function stat_function(operation, numArr) {
    return operation(numArr); // Here, operation is the callback function being passed in.
}

console.log('Sum:', stat_function(sum, [1, 2, 3, 4, 5]));
console.log('Average:', stat_function(average, [1, 2, 3, 4, 5]));

/*  ------------------------------------- 4. Array Methods  ------------------------------------- */

// This is the fun part
// Tip: Immutable refers to the method not changing the original array. Mutable means that the method WILL mutate (or change) the original array.
// If you get bugs from that, now you know why

// Note that even though some methods are immutable, it still depends what you do to the array.
// If you do things by the book then said methods should be immutable by default.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forEach (immutable)
/**
 * @param element - Refers to one element of the array, i.e. arr[i];
 * @param index - Refers to the index of the current element, i.e. the i in your normal for loop.
 * A for each loop simply loops through the array and does stuff you want it to.
 */

arr.forEach(element => {
    console.log(element); // e.g. 1
})

arr.forEach((element, index) => {
    console.log(element + ' at ' + index); // e.g. 1 at 0
})

// map (immutable)
/**
 * @param element - Refers to one element of the array, i.e. arr[i];
 * @param index - Refers to the index of the current element, i.e. the i in your normal for loop.
 * The map method accepts a callback function that does some logic to the current element in the array.
 * Whatever is returned is then mapped back into the new array.
 */

const newArr = arr.map(element => {
    return element + 1; // Add 1 to every element and map it to a new array
});

const newArr2 = arr.map((element, index) => {
    console.log(element + ' at ' + index); // We can also do some other stuff while we loop thru the array
    // What matters is what we return below
    return element + 1; // Add 1 to every element and map it to a new array
});

console.log(newArr) // Prints 2, 3, 4 ... ... 11

// reduce (immutable)
/**
 * @param accumulator - The accumulator is the value of the ongoing sum being accumulated as the arr is being looped through
 * @param currentValue - This is similar to the 'element' param you've seen above.
 * @param initialValue - This is the value that the 'accumulator' param starts out with.
 */

// A common usage of reduce is summation
const sum  = arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue); // Gives the sum of the array

// sort (mutable)
/**
 * @param a - The value of the current element being compared
 * @param b - The value of the next element being compared
 * In .sort, we find the difference between 'a' and 'b', to tell the method whether to swap them or not.
 * This allows us to sort by ascending or descending order.
 */

// Simple sorting method; Usually used to sort a string alphabetically
arr.sort(); // Tip: you can do .reverse() afterwards to sort in descending if needed

// Numerical sorting method; Used to sort a numeric array in ascending or descending order.
arr.sort((a, b) => a - b); // Sorts in ascending order
arr.sort((a, b) => b - a); // Sorts in descending order

// Date sorting method; Used to sort a date array.
arr.sort((a, b) => (new Date(a)) - (new Date(b)));

// find (immutable)
/**
 * @param element - Refers to one element of the array, i.e. arr[i]; (you should know this by now) 
 * The find method will loop through the array, and find the FIRST element that meets the specified criteria.
 */

const foundElement = arr.find(element => element == 5); // We are looking for the element with a value of 5.

const strArr = ['Apple', 'Orange', 'Banana'];
const fruit = strArr.find(element => element == 'Orange');
console.log(fruit); // Orange 

// filter (immutable)
/**
 * @param element - I don't think I need to say this again right
 * The filter method loops through the array and obtains all elements that meet the specified criteria.
 * These elements are then assigned into a new array.
 */

const filteredArr = arr.filter(element => element > 5); // [6, 7, 8, 9, 10];

// slice (immutable)
/**
 * @param start - The index at which we start slicinng from
 * @param end (optional) - The index at which we stop slicing
 * The slice method accepts 2 parameters, start and end. Below are a few examples to visualise this.
 * Take not that you may omit the 'end' parameter, and this will slice from the start all the way to the end of the array.
 */

arr.slice(start);
arr.slice(start, end);

// e.g.
const strArr2 = ['Horse', 'Giraffe', 'Penguin', 'Hippo', 'Rhino']
const slicedArr = strArr2.slice(2, 4); // ['Penguin', 'Hippo']
const slicedAllTheWayArr = strArr2.slice(1); // ['Giraffe', 'Penguin', 'Hippo', 'Rhino']

// splice (mutable)
/**
 * @param start - The index at which we start splicing from
 * @param deleteCount (optional) - The amount of items to delete from the start index; if left empty, deletes EVERYTHING after the index.
 * The splice method splices the given array from the given start index, and deletes x number of items from there, depending on the deleteCount parameter.
 * NOTE: deleteCount is INCLUSIVE, as you will see demonstrated below.
 */

const strArr3 = ['Horse', 'Giraffe', 'Penguin', 'Hippo', 'Rhino'];

// Over here, I started splicing from index 1 aka 'Giraffe' and removed 2 items.
strArr3.splice(1, 2); // ['Horse', 'Hippo', 'Rhino']
// 'Giraffe' itself was removed, along with 'Penguin' because deleteCount was 2.

// reverse (mutable)
/**
 * The reverse method is quite self-explanatory;
 * I put it here js to remind you of its existence.
 */

arr.reverse(); // Take note that it will change the original array 

// indexOf
/**
 * You guys probably didn't use this much and there isn't really a need to because forEach already allows u to grab index.
 */

const strArr4 = ['Horse', 'Giraffe', 'Penguin', 'Hippo', 'Rhino'];
strArr4.indexOf('Giraffe') // => 1

// push & pop
// Do I really have to

/**
 * SPREAD OPERATOR
 * The spread operator, '...' takes EVERYTHING in an array and lays it out flat to wherever it is
 */

// e.g.
const strArr5 = ['Horse', 'Giraffe', 'Penguin', 'Hippo', 'Rhino'];
const newArr3 = [...strArr5, 'Fish']; // ['Horse', 'Giraffe', 'Penguin', 'Hippo', 'Rhino', 'Fish']

// ^^What we are doing here is taking everything in strArr5 and putting it in a new array, combined with a new element called 'Fish'.
// Of course, the .push method works here too

/*  ------------------------------------- 5. Data Structures  ------------------------------------- */
// In Javascript, there are many different data structures such as HashMaps, Arrays, Objects, etc.

/**
 * HASHMAP
 * Below is an example of a hashmap and its related methods.
 */

const hashbrown = new Map();

// SET
// set a new key-value pair in the Map object we created
hashbrown.set('key', 'value');

// GET
// get a value based on the key 
hashbrown.get('key');

// DELETE
// delete a key-value pair from the map
hashbrown.delete('key');

// HAS
// checks if a key exists within the map
hashbrown.has('key');

// CLEAR
// clears the map
hashbrown.clear();

// SIZE
// similar to array.length
hashbrown.size;

// ACTUAL EXAMPLE
const users = new Map();
users.set(28583, 'Peng Yu');
users.set(68121, 'Kun Da');
users.set(42611, 'Jia Zheng');
users.set(90682, 'Jose');
users.set(12345, 'Katie');

users.get(12345); // 'Katie'

users.delete(12345);

users.has('Kun Da'); // true
users.has('Ezra'); // false

/*  ----------------------------------------- 6. Extras  ----------------------------------------- */

// LOOPING THRU AN OBJECT
// We use the 'in' syntax when we want to loop thru the keys in an object.
for (const key in object) {
    console.log(object[key]); // value paired to the specified key will be printed;
}

// LOOPING THRU A HASHMAP
// A hashmap is iterable via a forEach loop.
hashbrown.forEach((value, key) => {
    console.log(`The key is ${key} and the value is ${value}`); 
})

// LOOPING THRU AN ARRAY
for (const num of arr) {
    console.log(num)
}

// or you may prefer
arr.forEach(num => console.log(num));

// COUNTING STUFF IN AN ARRAY EXAMPLE
// Below is an example of how to count the number of unique items in an array with the help of an object.
// Taken from Practical 4 Q10d
const counterMap = {};

car_sales.forEach(vehicle => {
    if (!counterMap[vehicle.maufacturer]) {
        counterMap[vehicle.maufacturer] = 1;
    } else {
        counterMap[vehicle.maufacturer]++;
    }
});

for (const key in counterMap) {
    console.log(`${key} number of cars ${counterMap[key]}`);
}

/*  ---------------------------------------- 0. THANK YOU  ---------------------------------------- */

// YOU GUYS CAN DO IT I HAVE FAITH IN ALL OF YOU
// GOOD LUCK 孩子们
// ~ flowery

/*  ---------------------------------------------------------------------------------------------- */