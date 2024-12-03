// DATA
let sharePrice01102023 = [12.3, 11.2, 10.8, 10.5, 11.5, 12.50, 9.50, 11.55]; 
let sharePrice02102023 = [10.3, 9.2, 9.2, 8.3, 9.5, 11.10, 9.90, 10.25]; 
let sharesTraded = [2200, 1200, 300]; 

let accountHolder = { 
    "accountname" : "Lionel Chua", 
    "mobileNumber" : "99009911", 
    "accountNum" : "49200012", 
} 

let receivedMessage = "You won 100 points";

// Q1
const newArr = [...sharePrice01102023];

// Q2
const sharePriceCombine = [...sharePrice01102023, ...sharePrice02102023];

// Q3
sharePrice01102023.push(12.33);

// Q4
// accountHolder.tradingCredit = 200000;
accountHolder = {...accountHolder, tradingCredit: 200000};
console.log(accountHolder);

// Q5
console.log(`Min for sharePrice01102023: ${Math.min(...sharePrice01102023)}`);
console.log(`Max for sharePrice01102023: ${Math.max(...sharePrice01102023)}`);
console.log(`Min for sharePrice02102023: ${Math.min(...sharePrice02102023)}`);
console.log(`Max for sharePrice02102023: ${Math.max(...sharePrice02102023)}`);

// Q6
console.log('Total Shared: ', sharesTraded.reduce((a, c) => a + c, 0));

// Q7
console.log('Average for sharePrice01102023: ', (sharePrice01102023.reduce((a, c) => a + c, 0)/sharePrice01102023.length).toFixed(2));
console.log('Average for sharePrice02102023: ', (sharePrice02102023.reduce((a, c) => a + c, 0)/sharePrice02102023.length).toFixed(2));

const { accountname, mobileNumber } = accountHolder;
console.log(`Name: ${accountname}\nMobile Number: ${mobileNumber}`);

console.log([...receivedMessage]);