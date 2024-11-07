let fruits = ["Apple", "Orange", "Pear", "Watermelon", "Pineapple", "Durian", "Avocado" ]; 



// Print out all items in the fruits array 
fruits.forEach(item => { console.log(item) });
 

// Print the 4th element in the fruits array (Watermelon) 
console.log(fruits[3])
 

// Change the element containing the string “Pineapple” to “Cherry” 
fruits[fruits.indexOf("Pineapple") ] = "Cherry";
 

// Remove the last item in the fruits array 
fruits.pop();
 

// Append a string containing “Coconut” into the fruits array 
fruits.push( "Coconut");
 

// Print out all items in the fruits array again 
fruits.forEach(item => { console.log(item) });
 

// Assign the elements containing “Pear” and “Watermelon” into a new array (name of array : fruits2) 
const fruits2 = fruits.filter(item => item === "Pear" || item ==="Watermelon");
 

// Print the fruits2 array 
fruits2.forEach(item => { console.log(item) });
 

// sort the array to new array (name of array : fruits_sorted)  
const fruits_sorted = fruits.toSorted();
 

// Print the fruits_sorted array 
fruits_sorted.forEach(item => { console.log(item) });