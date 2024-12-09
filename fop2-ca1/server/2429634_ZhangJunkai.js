/**
 * Name: Zhang Junkai
 * Class: DIT/FT/1B/02
 * Admin No: 2429634
 */

// ---------------------------- Import Dependencies -----------------------------
const input = require('readline-sync');

// --------------------------------- VARIABLES ----------------------------------

// Text for the menu
const menu = 
    '\nPlease select one option (1 to 7):\n' +
    '1. Display US Superstore data (10 records)\n' + 
    '2. Display the lowest, highest, average and median purchase\n' +
    '3. Display the category in the US Superstore\n' +
    '4. Query US Superstore Data by category\n' +
    '5. Display the lowest and highest total amount of sales by category\n' +
    '6. Display the most profit and least profit by sales\n' +
    '7. Exit\n' +
    '>>> ';



// ------------------------------ Helper Functions ------------------------------



// ------------------------------- Main Functions -------------------------------




// ------------------------------ MENU (Main Loop) ------------------------------

let userChoice = 0;
while (userChoice != 7) {
    // Prompt user for a choice
    userChoice = input.questionInt(menu)

    if (userChoice == 1) {
        console.log(userChoice); // Placeholder
    } else if (userChoice == 2) {
        console.log(userChoice);
    } else if (userChoice == 3) {
        console.log(userChoice);
    } else if (userChoice == 4) {
        console.log(userChoice);
    } else if (userChoice == 5) {
        console.log(userChoice);
    } else if (userChoice == 6) {
        console.log(userChoice);
    } else if (userChoice == 7) {
        console.log('Program exiting...');
        break;
    } else if (userChoice > 7) {
        console.log('Invalid choice!');
    }
};