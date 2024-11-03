const readline = require('readline-sync');

function memory() {
    const cache = [];

    return {
        userName(myName) {
            const user = cache.find(usr => usr.name === myName);

            if (!user) {
                cache.push({
                    name: myName,
                    number: Math.floor(Math.random() * 100) + 1, // 1 to 100
                });
                return "User not found, creating number...";
            } else {
                return user.number
            }; 
        },
        getNumber(myName) { 
            return cache.find(usr => usr.name === myName).number;
        }
    };
};

const memoryApp = memory();

const username = readline.question('Enter your name: ');
console.log('Your number is: ', memoryApp.userName(username));
console.log('Your number is: ', memoryApp.userName(username));

// Use array.find to sieve out object with matching name
// Return person's number if found
// Create a new object and push into array if not found.
// {
//     name: xxxx,
//     number: 1234567890,
// }
  