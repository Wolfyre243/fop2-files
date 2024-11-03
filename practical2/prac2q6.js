const readline = require('readline-sync');

function memory() {
    const cache = {};

    return {
        userName(myName) {
            if (cache.hasOwnProperty(myName)) {
                return cache[myName];
            } else {
                cache[myName] = Math.floor(Math.random() * 100);
                return "User not found, creating number...";
            };
        },
        getNumber(myName) { return cache[myName]; }
    };
};

const memoryApp = memory();

const username = readline.question('Enter your name: ');
console.log('Your number is: ', memoryApp.userName(username));
console.log('Your number is: ', memoryApp.userName("John"));
console.log('Your number is: ', memoryApp.userName("John"));
  