const readline = require("readline-sync");
const fetch = require('node-fetch');
const endpointURL = 'http://localhost:8081';
let allShoppingTrendsData;

async function loadData(){
    return new Promise((resolve, reject) =>{
        fetch('http://localhost:8081/allshoppingtrend')
        .then(response => response.json())
        .then(function (data){
            resolve(data)
        })
        .catch(error => console.log(error))
    })
}
async function loadDataForMaleandFemale(gender){
    return new Promise((resolve, reject) =>{
        fetch(`${endpointURL}/bysex/${gender}`)
        .then(response => response.json())
        .then(function (data){
            resolve(data)
        })
        .catch(error => console.log(error))
    })
}

function mainMenu(){
    let displayMenu = '';
    displayMenu += 'Please Select one option (1 to 7)';
    displayMenu += '\n1.\tDisplay the first 10 records of the Shopping Trend Data.'
    displayMenu += '\n2.\tDisplay the lowest, highest, average and median purchase amount (USD) by Male and Female.'
    displayMenu += '\n3.\tDisplay the category in the Shopping Trend Data. '
    displayMenu += '\n4.\tUser can query and view the Shopping Trend Data by category.'
    displayMenu += '\n5.\tDisplay the lowest and highest total amount of sales (by Purchase Amount (USD)) by season. '
    displayMenu += '\n6.\tDisplay frequency of visit for customer that use promo code and for customer that do not use promo code.'
    displayMenu += '\n7.\tExit'
    displayMenu += '\n >>>>'
    return displayMenu
}

async function mainProgram(){
    let menuText = mainMenu();
    let userInput = 0;
    do{
        userInput = readline.questionInt(menuText);
        console.log('your choice: ', userInput)
        if(userInput > 0 && userInput < 8){
            switch (userInput) {
            case 1:
                //first 10 records for shopping trend
                console.log('First 10 sets of shopping trends')
                console.table(first10trends(allShoppingTrendsData, 10));
                break;
            case 2:
                console.log('Lowest, Highest, Average, and Median Purchase Amount (USD) by Male and Female:');
                
                const maleResults =  await moneySpentByGender('Male');
                const femaleResults =  await moneySpentByGender('Female');
            
                let tableData = {
                    'Lowest': { Male: maleResults.lowest, Female: femaleResults.lowest },
                    'Highest': { Male: maleResults.highest, Female: femaleResults.highest },
                    'Mean': { Male: maleResults.mean, Female: femaleResults.mean },
                    'Median': { Male: maleResults.median, Female: femaleResults.median },
                };
                console.table(tableData);
                break;
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                break;
            case 7:
                break;
            }
        }
    } while (userInput != 8)
}

function first10trends(inputArray, n){
    return inputArray.slice(0, n)
};

async function moneySpentByGender(gender){
    return loadDataForMaleandFemale(gender)
    .then((results) => {
        allShoppingTrendsData = results;

        let purchasedArray = [];
        let total = 0;

        for(let i = 0; i < allShoppingTrendsData.length; i++){
            allShoppingTrendsData[i].purchaseAmountUSD = parseInt(allShoppingTrendsData[i].purchaseAmountUSD);
            total += allShoppingTrendsData[i].purchaseAmountUSD;
            purchasedArray.push(allShoppingTrendsData[i].purchaseAmountUSD)
        }

        let lowest = Math.min(...purchasedArray);
        let highest = Math.max(...purchasedArray);
        let median = 0;
        let mean = (total/allShoppingTrendsData.length).toFixed(2);
        purchasedArray = purchasedArray.sort((a,b) => a - b);

        if(purchasedArray.length % 2 != 0){
            let position = (purchasedArray.length + 1)/2;
            median = purchasedArray[position]
        } else if (purchasedArray.length % 2 == 0) {
            let position = Math.floor((purchasedArray.length + 1)/2);
            median = (purchasedArray[position] + purchasedArray[position+1]) / 2;

            
        }   

        return { lowest, highest, mean, median };
    });
}


loadData().then((results)=>{
    allShoppingTrendsData = results;
    console.clear();
    mainProgram();
})