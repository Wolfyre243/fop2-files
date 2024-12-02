/* 
    Section A 
    Question 1
    Name: Angie Wu En Qi
    Admin No: p2322993
    Class: DIT1B04

*/

function calculateCircleArea(radius) {
  /* TODO: Add code here */
  return Math.PI * radius * radius;
}

function calculateCircleDiameter(radius) {
  /* TODO: Add code here */
  return 2 * radius;
}

function calculateCircleCircumference(radius) {
  /* TODO: Add code here */
  return 2 * Math.PI * radius;
}

function circle(value, operation) {
  /* TODO: Add code here */
  return operation(value);
}

// Test case 1
console.log("Test Case 1");
r = 6;
console.log("Area of the circle is " + circle(r, calculateCircleArea));

r = 8;
console.log("Diameter of the circle is " + circle(r, calculateCircleDiameter));

r = 21;
console.log(
  "Circumference of the circle is " + circle(r, calculateCircleCircumference)
);

// Test case 2
console.log("Test Case 2");
r = 20;
console.log("Area of the circle is " + circle(r, calculateCircleArea));

r = 9;
console.log("Diameter of the circle is " + circle(r, calculateCircleDiameter));

r = 5;
console.log(
  "Circumference of the circle is " + circle(r, calculateCircleCircumference)
);
