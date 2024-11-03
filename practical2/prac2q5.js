const readline = require('readline-sync');

function loader(setQty) {
    let packQty = setQty;
    let packCounter = 0;

    return {
        load() {
            console.log(`Current pack counter is ${++packCounter}`);
            if (packCounter == packQty) {
                console.log(`Pack of ${packQty} apples per box complete.`);
                packCounter = 0; // Reset counter
                console.log(`-------Reset Counter-------\nCurrent pack counter is ${packCounter}`);
            }
        },
    }
}

const quantity = readline.questionInt("Please enter the quantity of apples to be packed into the box: ");

const appleLoader = loader(quantity); // If for SG, put 30; else, put 40 for Indonesia.

for (let i = 0; i < quantity; i++) {
    appleLoader.load();
};