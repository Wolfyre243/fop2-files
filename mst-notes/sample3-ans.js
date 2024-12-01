// Import Dependencies
const input = require('readline-sync');

// Dataset
const workers = [
  { id: 1, name: "Anita", age: 22, position: "Junior Dev", password: "thequickBrownFox" },
  { id: 2, name: "Wolfyre", age: 25, position: "Senior Dev", password: "monkey" },
  { id: 3, name: "Rachel", age: 30, position: "DevOps Engineer", password: "bigFoot" },
  { id: 4, name: "Jamie", age: 22, position: "UX Designer", password: "efdrfEfCw" },
  { id: 5, name: "Ethan", age: 35, position: "Senior Dev", password: "thvfuvw" },
  { id: 6, name: "Emily", age: 29, position: "Junior Dev", password: "bear" },
  { id: 7, name: "Liam", age: 32, position: "UX Designer", password: "bigGyaTT" },
  { id: 8, name: "Noah", age: 22, position: "DevOps Engineer", password: "stinggger" },
  { id: 9, name: "Olivia", age: 27, position: "Intern", password: "lapsing" },
  { id: 10, name: "Mason", age: 30, position: "Intern", password: "smoked" },
  { id: 11, name: "Charlotte", age: 30, position: "DevOps Engineer", password: "iforgot" },
  { id: 12, name: "Ava", age: 32, position: "Junior Dev", password: "theonlynumericpassword123" },
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

// 1. Verify if user is permitted to enter the system.
/**
 * 
 * @param username - name of the user
 * @param password - password of the user
 * @returns user object if found, otherwise false
 */

function verifyUser(username, password) {
    // CODE HERE
    return workers.find(user => user.name == username && user.password == password);
}

// 2. Write a higher order function that takes in a callback function
/**
 * @param action - The action to execute
 */

function System(action, user) {
    // !2a. Check user permissions. Interns and Junior Devs are not allowed to analyse.
    if ((user.position == 'Junior Dev' || user.position == 'Intern') && action == 'analyse') {
        return console.log(`You are a ${user.position}. Know your place.`);
    }

    action();
}

// 3. Write a function that allows user to use many different searching methods.
// Afterwards, display information about the user(s) in the format
// <username>: <position>

const searchByUsername = (username) => {
    // CODE HERE
    workers
    .filter(user => user.name == username)
    .forEach(user => console.log(`${user.name}: ${user.position}`));
}

const searchByPosition = (position) => {
    // CODE HERE
    workers
    .filter(user => user.position == position)
    .forEach(user => console.log(`${user.name}: ${user.position}`));
}

const searchByAge = (age) => {
    // CODE HERE
    workers
    .filter(user => user.age == age)
    .forEach(user => console.log(`${user.name}: ${user.position}`));
}

function search() {
    console.clear();
    // And this is the sub-menu for the search utility
    // We are expecting a numeric input, btw
    const userInput = input.questionInt('What would you like to search by?\n1. Search by username\n2. Search by position\n3. Search by age\n>>> ');

    if (userInput == 1) {
        const username = input.question('Enter the username to search by: ');
        console.log('Searching by username...');
        searchByUsername(username);
    } else if (userInput == 2) {
        const position = input.question('Enter the position to search by: ');
        console.log('Searching by position...');
        searchByUsername(position);
    } else if (userInput == 3) {
        const age = input.questionInt('Enter the age to search by: ');
        console.log('Searching by age...');
        searchByUsername(age);
    } else {
        console.log('Invalid input. You suck. Exiting program...')
    }
}

// This is gonna be for part 2
// function inspect() {
//     // CODE HERE
//     console.log('hie')
// }
// function analyse() {
//     // CODE HERE
//     console.log('hiw')
// }

// MAIN LOOP
while (true) {
    console.log('\n========LOGIN========')
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
        const userChoice = input.questionInt(`What would you like to do?\n1. \'search\' to search for employees\n2. \'inspect\' to inspect a job's details\n3. \'analyse\' to perform analytics\n4. \'exit\' to exit\n>>> `);

        if (userChoice == 'exit') {
            break;
        } else {
            System(utilityMap[userChoice], user);
        }

    } else {
        console.log('Access Denied.');
        break;
    }
}