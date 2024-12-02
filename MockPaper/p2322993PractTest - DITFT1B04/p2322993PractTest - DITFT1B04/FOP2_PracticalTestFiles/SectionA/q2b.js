/* 
    Section A 
    Question 2b
    Name: Angie Wu En Qi
    Admin No: p2322993
    Class: DIT1B04

*/

function lowest_price_product(products) {
  /* TODO : Fill up the code here Question 2b  */

  // Check with for loop which is the lowest price
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j <= products.length; j++) {
      if (products[i].price < products[i + 1].price) {
        console.log("test2");
        return products[j].name;
      }
    }
  }
}

// Test Case 1
const products = [
  { name: "Laptop", price: 735.35, quantity: 3 },
  { name: "Smartphone", price: 296.25, quantity: 5 },
  { name: "Tablet", price: 198.75, quantity: 7 },
  { name: "Headphones", price: 49.95, quantity: 33 },
];

// Display the lowest price products
console.log(lowest_price_product(products));

// Test Case 2
const products2 = [
  { name: "Rice Cooker", price: 120.0, quantity: 5 },
  { name: "Kettle", price: 29.9, quantity: 10 },
  { name: "Washing Machine", price: 690.0, quantity: 7 },
  { name: "Refrigerator", price: 950.0, quantity: 20 },
];

// Display the lowest price products2
console.log(lowest_price_product(products2));
