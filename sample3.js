// Import Dependencies
const input = require('readline-sync');

// Dataset
const workers = [
  { id: 1, name: "Anita", age: 22, position: "Junior Dev", password: "thequickBrownFox" },
  { id: 2, name: "Wolfyre", age: 25, position: "Senior Dev", password: "monkey" },
  { id: 3, name: "Rachel", age: 30, position: "DevOps Engineer", password: "bigFoot" },
  { id: 4, name: "Jamie", age: 28, position: "UX Designer", password: "efdrfEfCw" },
  { id: 5, name: "Ethan", age: 35, position: "Senior Dev", password: "thvfuvw" },
  { id: 6, name: "Emily", age: 29, position: "Junior Dev", password: "bear" },
  { id: 7, name: "Liam", age: 32, position: "UX Designer", password: "bigGyaTT" },
  { id: 8, name: "Noah", age: 26, position: "DevOps Engineer", password: "stinggger" },
  { id: 9, name: "Olivia", age: 27, position: "Intern", password: "lapsing" },
  { id: 10, name: "Mason", age: 24, position: "Intern", password: "smoked" },
  { id: 11, name: "Charlotte", age: 31, position: "DevOps Engineer", password: "iforgot" },
  { id: 12, name: "Ava", age: 23, position: "Junior Dev", password: "theonlynumericpassword123" },
];

const jobPositions = [
    {
        position: "Junior Dev",
        description: "Code and code and code",
        salary: 6000
    },
    {
        position: "Senior Dev",
        description: "Just keep coding",
        salary: 12000
    },
    {
        position: "UX Designer",
        description: "Draw and draw and draw",
        salary: 10000
    },
    {
        position: "DevOps Engineer",
        description: "Create good infrastructure to make life easier for others",
        salary: 14000
    },
    {
        position: "Intern",
        description: "Chill and relax",
        salary: 4000
    }
];

// ==================================================================================================================================

/**
 * ----------------------------- ASSIGNMENT -----------------------------
 * Your task is to create a terminal for employees at the Shien Factory.
 * This terminal will be equipped with many functionalities.
 * Part of the code has been given to you; your job is to fill in the rest.
 * Follow the steps and you SHOULD be fine; I threw in some hints anyways.
 * With that being said, good luck soldier.
 */

// 1. Verify if user is permitted to enter the system.
/**
 * 
 * @param username - name of the user
 * @param password - password of the user
 * @returns user object if found, otherwise false
 */

function verifyUser(username, password) {
    // CODE HERE
    // Hint: use .find to search thru the workers array to find a user with matching username and pw
}

// 2. Write a higher order function that takes in a callback function
/**
 * @param action - The action to execute
 */

function System(action, user) {
    // !2a. Check user permissions. Interns and Junior Devs are not allowed to analyse.
    // Hint: Use an if else statement

    // If other roles:
    // I kinda js gave this to you
    console.log('Running', action, '...');
    action();
}

// 3. Write a function that allows user to use many different searching methods.
// Afterwards, display information about the user(s) in the format
// <username>: <position>

const searchByUsername = (username) => {
    // CODE HERE
}

const searchByPosition = (position) => {
    // CODE HERE
}

const searchByAge = (age) => {
    // CODE HERE
}

function search() {
    // CODE HERE
}
function inspect() {
    // CODE HERE
    console.log('hie');
}
function analyse() {
    // CODE HERE
    console.log('hiw');
}

// MAIN LOOP
// you !! HAVE TO EDIT !! some stuff in this function.
while (true) {
    console.log('\n========LOGIN========');

    // I've helped you map out the utility functions here
    const utilityMap = {
        1: search,
        2: inspect,
        3: analyse
    }

    const username = input.question('Please log in with your credentials.\nUsername: ');
    const password = input.question('Password: ');

    const user = verifyUser(username, password);

    // If user exists and is permitted
    if (user) {
        console.clear();
        console.log('Welcome to the Terminal.');
        const userChoice = input.question(`What would you like to do?\n1. \'search\' to search for employees\n2. \'inspect\' to inspect a job's details\n3. \'analyse\' to perform analytics\n4. \'exit\' to exit\n>>> `);

        if (userChoice == 'exit') {
            break;
        } else {
            // Call the Main System function 
        }

    } else {
        console.log('Access Denied.');
        break;
    }
}