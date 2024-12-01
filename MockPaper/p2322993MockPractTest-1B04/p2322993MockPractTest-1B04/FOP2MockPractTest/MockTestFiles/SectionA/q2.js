/* 
	Section A
	Question 2
	Name: Angie Wu En Qi
	Admin No: p2322993
	Class: DIT1B04
	
*/

// Function: statvalue
// Higher Order Function
function stat_func(operation, numbers) {
  if (operation == "sum") {
    return function () {
      // Create a sum function
      let result = 0;
      // Add all the numbers in the array
      for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
      }
      return result;
    };
  }
  if (operation == "average") {
    return function () {
      // Create a average function
      let sum = 0;
      let average;
      for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      average = sum / numbers.length;
      return average;
    };
  }
  if (operation == "median") {
    return function () {
      // Sort the array
      function sort(x) {
        return x.sort((a, b) => a - b);
      }
      let newSortedArray = sort(numbers);
      // Create a median function
      if (!(newSortedArray.length / 2 == 0)) {
        let theMiddleNumberOdd = Math.ceil(newSortedArray.length / 2);
        let median = newSortedArray[theMiddleNumberOdd - 1];
        return median;
      } else {
        let firstNumber = newSortedArray / 2;
        let secondNumber = newSortedArray / 2 + 1;
        let median =
          (newSortedArray[secondNumber] + newSortedArray[firstNumber]) / 2;
        return median;
      }
    };
  }
  //   if(operation == "mode"){
  // 	// Sort the array
  // 	function sort(x) {
  //         return x.sort((a, b) => a - b);
  //       }
  //       let newSortedArray = sort(numbers);
  // 	// Find the one that is repeated the most
  // 	let count = 0

  // 	for (let i = 0; i < newSortedArray.length; i++ ){
  // 		for ( let j = 0 ; j <newSortedArray.length; j++){
  // 			if(newSortedArray[i]== newSortedArray[j]){
  // 				count ++
  // 			}
  // 		}

  // 	}
  //   }
}

// TODO: Code here

// Test the higher order function
// using the following data

sum = [1, 2, 4, 3, 7, 9];
let resultFnSum = stat_func("sum", sum);
let resultSum = resultFnSum();
console.log(`Sum ${resultSum}`);

average = [1, 2, 4, 3, 7, 9];
let resultFnAverage = stat_func("average", average);
let resultAverage = resultFnAverage();
console.log(`Average ${resultAverage}`);

median = [2, 4, 5, 7, 1, 8, 1];
let resultFnMedian = stat_func("median", median);
let resultMedian = resultFnMedian();
console.log(`Median ${resultMedian}`);
mode = [2, 4, 6, 2, 2];

// Adjust according to each of the data given

// TODO: Code here
