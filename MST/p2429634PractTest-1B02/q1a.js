/*
    Question 1a
    Name: Zhang Junkai
    Admin No: p2429634
    Class: DIT1B02
*/

let x = 0;

if (x >= 0) {
    let x = 5;   
    console.log("Value of x in if statement is " + x);
}

console.log("Value of x is " + x);

// Reason for such error(s)
// The x on line 11 refers to the x declared outside the scope of the if statement, hence when we change x to 5, we are changing the x declared on line 8 to 5.
// By modifying the variable declaration, the variable x is now under the scope of the if statement, hence preventing modification to the x variable in the outer scope.