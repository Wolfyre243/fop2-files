const input = require('readline-sync');
function memory() {
    const nameArray = [];

    return {
        userName(myName) {
            /* TODO code here */
            const user = nameArray.find(currentUser => currentUser.name == myName);

            if (!user) {
                nameArray.push({
                    name: myName,
                    number: Math.floor(Math.random() * 100) + 1,
                });
                console.log('User created!');
            } else {
                console.log('User exists; your number is ', user.number);
            };
        },
        getNumber(myName) {
            const user = nameArray.find(currentUser => currentUser.name == myName);
            console.log('User exists; your number is ', user.number);
        },
    };
};

let name = input.question('what is your name?: ');
// name = name.toLocaleUpperCase();

let mainFunction = memory();
mainFunction.userName(name);
mainFunction.userName(name);
mainFunction.getNumber(name);
// mainFunction.getNumber();