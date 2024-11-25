/* 
	Question 2
	Name: Zhang Junkai
	Admin No: p2429634
	Class: DIT1B02
	
*/

// Function: statvalue 
// Higher Order Function

// TODO: Code here

// Test the higher order function 
// using the following data

/*
sum = [1, 2, 4, 3, 7, 9];
average = [1, 2, 4, 3, 7, 9];
*/

const testArr = [1, 2, 4, 3, 7, 9];

const sum = (arr) => arr.reduce((a, c) => a + c, 0);
const average = (arr) => arr.reduce((a, c) => a + c, 0)/arr.length;

function stat_func(operation, numbers) {
	return operation(numbers);
}

console.log("Sum", stat_func(sum, testArr));
console.log("Average", stat_func(average, testArr));

