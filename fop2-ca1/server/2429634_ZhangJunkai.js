/**
 * Name: Zhang Junkai
 * Class: DIT/FT/1B/02
 * Admin No: 2429634
 */

// ---------------------------- Import Dependencies -----------------------------
const input = require('readline-sync');
const fetch = require('node-fetch');

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

const endpointURL = 'http://localhost:8081';


// ------------------------------ Helper Functions ------------------------------
// Getters
async function getAllRecords() {
    // Return a promise that resolves to the json object sent by the server
    return fetch(`${endpointURL}/allussuperstore`)
        .then(async res => await res.json())
        .catch(err => console.log(err));
}

// Calculation

// Returns an object with the highest and lowest item in the given array
const findHighLowByProperty = (arr, property) => { 
    const sorted = arr.toSorted((a, b) => a[property] - b[property]);
    return { lowest: sorted[0], highest: sorted[sorted.length - 1] };
}

// Gets the median of an object array by the specified property and returns the median object
const findMedianByProperty = (arr, property) => arr.sort((a, b) => a[property] - b[property])[Math.floor(arr.length/2)];


// ------------------------------- Main Functions -------------------------------

async function displayFirstNRecords(n) {
    // Format and log the data to the console.
    return getAllRecords()
        .then(res => {
            console.log('Customer ID\tCustomer Name\t\tSegment\t\tState\t\t\tProduct Name\t\t\t\t\t\t\tSales (USD)');
            res
            .slice(0, n) // Get the first N records
            // TODO: Fix formatting
            .forEach(record => console.log(`${record.customerID}\t${record.customerName}\t\t${record.segment}\t${record.state} \t\t${record.productName}\t${record.sales}`))
        })
        .catch(err => console.log(err));
}

async function displayStatistics() {
    // Initialise a Hashmap to store data
    const segmentMap = new Map([
        ['Consumer', 0],
        ['Corporate', 0],
        ['Home Office', 0]
    ]);

    const statArr = ['Lowest', 'Highest', 'Average', 'Median'];

    return getAllRecords()
        .then(res => {
            // Set up data values and perform calculations
            segmentMap.forEach((value, segment) => {
                const filteredArr = res.filter(item => item.segment == segment);

                const { lowest, highest } = findHighLowByProperty(filteredArr, 'sales');
                const average = filteredArr.reduce((a, c) => a + c.sales, 0)/filteredArr.length;
                const median = findMedianByProperty(filteredArr, 'sales');

                segmentMap.set(segment, {
                    lowest: lowest.sales,
                    highest: highest.sales.toFixed(2),
                    average: average.toFixed(2),
                    median: median.sales.toFixed(2)
                });
            });

            // Format and print the data
            console.log('\t Consumer\t Corporate\t Home Office');
            statArr.forEach(statistic => {
                let finalStr = `${statistic}\t`;
                segmentMap.forEach(data => finalStr = finalStr + ` $ ${data[statistic.toLowerCase()]}\t`);
                console.log(finalStr);
            });
        })
        .catch(err => console.log(err));
}

// ------------------------------ MENU (Main Loop) ------------------------------

async function Main() {
    let userChoice = 0;
    while (userChoice != 7) {
        // Prompt user for a choice
        userChoice = input.questionInt(menu);

        if (userChoice == 1) {
            // 1. Display first 10 records of the Shopping Trend Data
            console.log('US Superstore Data');
            await displayFirstNRecords(10);

        } else if (userChoice == 2) {
            console.log('Lowest, highest, average and median sales by market segment.');
            await displayStatistics();


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
}

Main();