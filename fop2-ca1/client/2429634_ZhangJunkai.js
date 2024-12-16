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
        .then(res => res.json())
        .catch(err => console.log(err));
}

async function getRecordsBySegment(segment) {
    return fetch(`${endpointURL}/bysegment/${segment}`)
        .then(res => res.json())
        .catch(err => console.log(err));
}

async function getRecordsByCategory(category) {
    return fetch(`${endpointURL}/bycategory/${category}`)
        .then(res => res.json())
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
        ['Consumer', {}],
        ['Corporate', {}],
        ['Home Office', {}]
    ]);

    const statArr = ['Lowest', 'Highest', 'Average', 'Median'];
    const promiseArr = [];
    
    // For every segment, calculate statistics and update the data in the map.
    segmentMap.forEach(async (value, segment) => {
        promiseArr.push(
            getRecordsBySegment(segment)
            .then(segmentArr => {
                // Get all required statistics from each segment
                const { lowest, highest } = findHighLowByProperty(segmentArr, 'sales');
                const average = segmentArr.reduce((a, c) => a + c.sales, 0)/segmentArr.length;
                const median = findMedianByProperty(segmentArr, 'sales');

                // Update the data in the hashmap
                segmentMap.set(segment, {
                    lowest: lowest.sales,
                    highest: highest.sales.toFixed(2),
                    average: average.toFixed(2),
                    median: median.sales.toFixed(2)
                });
            })
            .catch(err => console.log(err))
        );
    });

    return Promise.all(promiseArr).then(() => {
        // Format and print the data
        console.log('\t Consumer\t Corporate\t Home Office');
        statArr.forEach(statistic => {
            let finalStr = `${statistic}\t`;
            segmentMap.forEach(data => finalStr = finalStr + ` $ ${data[statistic.toLowerCase()]}\t`);
            console.log(finalStr);
        });
    });
}

// TODO: Can hardcode q3?
async function displayCategories() {
    return getAllRecords()
        .then(res => {
            res
            .map(item => item.category)
            .filter((value, i, arr) => arr.indexOf(value) === i)
            .forEach((category, i) => console.log(`${i + 1}. ${category}`));
        })
        // ['A', 'B', 'C', 'A']
}

async function queryByCategory(category) {
    return getRecordsByCategory(category)
        .then(res => {
            // Error handling in case user enters an invalid category name
            if (res.length == 0) return console.log('Invalid Category!');

            console.log('Order ID\tOrder Date\tProduct ID\tProduct Name\t\t\t\t\t\t\t\tCategory\t\tSales (USD)');
            // TODO: Fix formatting
            res.forEach(order => console.log(`${order.orderID}\t${order.orderDate}\t\t${order.productID}\t${order.productName} \t\t${order.category}\t${order.sales}`));
        })
        .catch(err => console.log(err));
}

async function displaySumOfSales() {
    // Initialise empty map to store sums of sales
    const categoryMap = {};
    let grandTotal = 0;

    return getAllRecords()
        .then(res => {
            res.forEach(record => {
                if (categoryMap[record.category]) {
                    categoryMap[record.category] += record.sales;
                } else {
                    categoryMap[record.category] = record.sales;
                }

                grandTotal += record.sales;
            });

            console.log('Category\t\tSales');
            Object.entries(categoryMap)
                .sort((a, b) => a[1] - b[1])
                .forEach(categoryPair => console.log(`${categoryPair[0]}\t\t$${categoryPair[1].toFixed(2)}`));

            console.log(`Grand Total\t\t$${grandTotal.toFixed(2)}`);
        })
        .catch(err => console.log(err));
}

async function displayHighLowCustomer() {
    return getAllRecords()
        .then(res => {
            const { lowest, highest } = findHighLowByProperty(res, 'profit');

            console.log('Lowest Sales Profit');
            // TODO: Is the profit here meant to be negative
            console.log(`Customer Name: ${lowest.customerName}\nCategory: ${lowest.category}\nSub-Category: ${lowest.subCategory}\nProduct Name: ${lowest.productName}\nSales: $${lowest.sales}\nProfit: $${lowest.profit}\n`);
            console.log('Highest Sales Profit');
            console.log(`Customer Name: ${highest.customerName}\nCategory: ${highest.category}\nSub-Category: ${highest.subCategory}\nProduct Name: ${highest.productName}\nSales: $${highest.sales}\nProfit: $${highest.profit}`);
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
            // 2. Display the lowest, highest, average and median sales by market segment
            console.log('Lowest, highest, average and median sales by market segment.');
            await displayStatistics();

        } else if (userChoice == 3) {
            // 3. Display the category in the US Superstore
            console.log('US Superstore Data by Category\n');
            await displayCategories();

        } else if (userChoice == 4) {
            // 4. User can query and view the US Superstore Data by category
            const categoryMap = {
                1: 'Office Supplies',
                2: 'Furniture',
                3: 'Technology'
            }
            const queriedCategory = input.questionInt('Select the category to display:\n1. Office Supplies\n2. Furniture\n3. Technology\n>>> ');
            await queryByCategory(categoryMap[queriedCategory]);

        } else if (userChoice == 5) {
            // 5. Display the sum of sales group by category and sorted by sum of sales
            console.log('Display the sum of sales group by category and sorted by sum of sales');
            await displaySumOfSales();

        } else if (userChoice == 6) {
            // 6. Display the most profit and least profit by sales with customer info.
            await displayHighLowCustomer();

        } else if (userChoice == 7) {
            // 7. Exit the program
            console.log('Program exiting...');
            return 1;

        } else if (userChoice > 7) {
            console.log('Invalid choice!');
        }
    };
}

Main();