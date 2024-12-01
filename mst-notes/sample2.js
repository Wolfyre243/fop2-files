// Today we will be making a menu!

// Import Dependencies
const input = require('readline-sync');

// Dataset
const userArr = [
    {
        id: 1,
        name: 'John',
        age: 40,
        position: "Janitor"
    },
    {
        id: 2,
        name: "Jerry",
        age: 37,
        position: "Janitor"
    },
    {
        id: 3,
        name: "Timothy",
        age: 19,
        position: "Software Engineer"
    },
    {
        id: 4,
        name: "Albert",
        age: 54,
        position: "Lead Developer"
    },
    {
        id: 5,
        name: "Ross",
        age: 3,
        position: "Senior Developer"
    },
    {
        id: 6,
        name: 'Xiao Ming',
        age: 30,
        postion: "Software Engineer"
    },
    {
        id: 7,
        name: "Kamal",
        age: 17,
        position: "Project Manager"
    },
    {
        id: 8,
        name: "Peanut",
        age: 10,
        position: "Bartender"
    },
    {
        id: 9,
        name: "Gyattendus The Third",
        age: 23,
        position: "Owner"
    },
    {
        id: 10,
        name: "The cooler Ross",
        age: 2,
        position: "Design Head"
    }
]

// Make ur functions here
const averageAge = (arr) => console.log('a')
const getAllUsers = (arr) => console.log('b')
const searchForUser = (arr) => console.log('c')

// Get All Users
// <id>. <name> <age> ... ...

// Search for a user
// ID <id> 
// Name: <name> 
// Age: <age>
// Position: <position>

const choices = {
    1: averageAge, // These are references to the functions you make above
    2: getAllUsers, // They gotta be the same name
    3: searchForUser
}

function Menu(choiceMap) {
    // Question user for input
    const userInput = input.questionInt('Select an action:\n1. Calculate Average Age\n2. Get All Users\n3. Search for a user\n> ');

    choiceMap[userInput](userArr);
};

Menu(choices);

