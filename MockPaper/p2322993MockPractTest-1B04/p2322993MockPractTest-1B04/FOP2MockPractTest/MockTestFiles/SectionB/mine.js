const input = require("readline-sync");

// All Vehicle Population data
const alldata = require("./dataVehicleInfo");
// All Vehicle Type
const allVehicleType = require("./dataVehicleType");

let userOption;

// Helper Functions
function displayAllVehicleType() {
    console.log('============= Vehicle Type =============')
    allVehicleType.forEach(type => console.log(type));
}

function queryVehicleByType() {
    console.log('======== Query Vehicle By Type ========');
    console.log('Select Vehicle Type');
    allVehicleType.forEach((type, i) => console.log(`${i + 1}. ${type}`));
    const queryNum = input.questionInt('Enter 0 to exit.\n');

    if (queryNum == 0) {
        return;
    } else if (queryNum < 1 || queryNum > 22) {
        return console.log('Please select item between 1 to 22');
    }

    console.log(allVehicleType[queryNum - 1]);
    alldata
    .filter(vehicle => vehicle.type == allVehicleType[queryNum - 1])
    .forEach(vehicle => console.log(`Year - ${vehicle.year} Number - ${vehicle.number}`));
}

function queryVehicleByYear() {
    console.log('======== Query Vehicle By Year ========');
    const queryYear = input.questionInt('Enter the year for total vehicle population: ');

    const numOfVehicles = alldata.filter(vehicle => vehicle.year == queryYear).reduce((a, c) => a + parseInt(c.number), 0);
    console.log(`The total number of vehicle in year ${queryYear} is ${numOfVehicles}.`)
}

while (userOption != 4) {
    userOption = input.questionInt('\nPlease select one option (1 to 4):\n1. All Vehicle Type\n2. Query Vehicle Type\n3. Total Number of Vehicle By Year\n4. Exit\n');

    switch (userOption) {
        case 1: 
            displayAllVehicleType();
            break;
        case 2: 
            queryVehicleByType();
            break;
        case 3: 
            queryVehicleByYear();
            break;
        case 4: 
            console.log('Program exiting...', alldata.length)
            break;
    }

}