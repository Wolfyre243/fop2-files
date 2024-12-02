/* 
    Section A 
    Question 2a
    Name: Angie Wu En Qi
    Admin No: p2322993
    Class: DIT1B04

*/
const fruits = [
  "Guava",
  "Pear",
  "Pomelo",
  "Guava",
  "Pear",
  "Plum",
  "Pluot",
  "Plum",
];

/* 
  TODO: Fill up the code for Section A Question 2a.
*/
// Count of guava first
let displayCount = fruits.reduce(function count(fruit, count) {
  let storeFruitCount = [];
  // For loop to check which matches
  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits);
    count = 0;
    for (let j = 0; j < fruits.length; j++) {
      if (!(i == j)) {
        parseInt(i);
        parseInt(j);
        if (fruits[i] == fruits[j]) {
          storeFruitCount.push(fruit[i]);
          count++;
          break;
        }
      }
    }
  }
  return storeFruitCount;
});

// TODO: Display the fruits count

console.log(displayCount);
