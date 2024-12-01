// Today we will be making a menu!

// Import Dependencies
const input = require('readline-sync');

// Dataset
const userArr = [
    {
        id: 1,
        name: 'John',
        age: 40,
        postion: "Janitor"
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

const choices = {
    1: averageAge, // These are references to the functions you make above
    2: getAllUsers, // They gotta be the same name
    3: searchForUser
}

function Menu(choiceMap) {
    // Question user for input
    const userInput = input.questionInt(`
        Select an action:
        1. Calculate Average Age
        2. Get All Users
        3. Search for a user
    `);

    choiceMap[userInput](userArr);
};

function averageAge(){
    const averageAge = userArr.reduce((accumulator,element) => accumulator+element.age,0)/userArr.length

    console.log(averageAge)
}

function getAllUsers(){
    userArr.forEach(element => console.log("id : " + element.id + " name : " + element.name + " age: " + element.age))
}

function searchForUser(){
    let search = input.question("Enter the id to search for person : ")
  let user = userArr.find(element => element.id == search)
   if(user){
    if (user) {
        console.log(`ID: ${user.id}`);
        console.log(`Name: ${user.name}`);
        console.log(`Age: ${user.age}`);
        console.log(`Position: ${user.position}`);
    } else {
        console.log("User not found.");
    }
   }
}
Menu(choices)