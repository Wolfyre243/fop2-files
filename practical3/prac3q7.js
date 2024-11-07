const input = require('readline-sync');

function validatePassword(password, minLength, authType) {
    if (password.length < minLength) 
        return console.log(`Password must be at least ${minLength} characters long.`);

    console.log(authType(password));
}

const numbersOnly = (str) => 
    `Authentication Type: Numbers Only\n${str.match(/^[0-9]+$/g) ? "Valid Password!" : "Invalid Password!"}`;

const mediumComplexity = (str) =>
    `Authentication Type: Medium Complexity\n${str.match(/^[a-zA-Z0-9]+$/gi) ? "Valid Password!" : "Invalid Password!"}`;

const fullComplexity = (str) => 
    `Authentication Type: Full Complexity\n${str.match(/^[!-\/:-@[-`{-~\]a-zA-Z0-9]+$/gi) ? "Valid Password!" : "Invalid Password!"}`;

validatePassword('1233432', 5, numbersOnly);
validatePassword('12d3142', 5, mediumComplexity);
validatePassword('12d314!2', 5, fullComplexity);

