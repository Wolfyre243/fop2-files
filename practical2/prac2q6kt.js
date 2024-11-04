const input = require("readline-sync");

function memory() {
  let names = [];

  return {  //return an object
    userName(myName) {
        const user = names.find(currentUser => currentUser.name == myName);

        // AFTER the for loop
        // Notice how we only create the obj outside the for loop, after checking everything

        // if user wasnt found
        if (!user) {
            const randomNum = Math.floor(Math.random() * 100) // randomise a num
            names.push({
                name: myName,
                number: randomNum
            }); // push in a new person in here

            return "Your number is: " + randomNum
        } else {
            return user.number;
        };
    },

    getNumber(myName) {
        for (let i = 0; i < names.length; i++) {
            if (myName == names[i].name) {
                return "Your number is: " + names[i].number;
            }
        };
    }
  };
}

const memoryApp = memory();

let userInput = input.question("Enter your name: ");
console.log(memoryApp.userName(userInput));
console.log(memoryApp.getNumber(userInput));