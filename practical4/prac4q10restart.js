// Import Data
const car_sales = require('./car_sales')

// Q1
function displayAll() {
    car_sales.forEach(vehicle => {
        console.log(`${vehicle.maufacturer} Model ${vehicle.model} S$${vehicle.salesPrice} S$${vehicle.resalePrice}`);
    });
};

// displayAll();

// Q2
function displayHighLow() {
    car_sales.sort((a, b) => parseInt(a.resalePrice) - parseInt(b.resalePrice));

    const highestVehicle = car_sales[car_sales.length - 1];
    const lowestVehicle = car_sales[0];

    console.log(`Lowest Price\n${lowestVehicle.maufacturer} ${lowestVehicle.model} S$${lowestVehicle.resalePrice}`);
    console.log(`Highest Price\n${highestVehicle.maufacturer} ${highestVehicle.model} S$${highestVehicle.resalePrice}`);
};

// displayHighLow();

// Q3
function displayAllBMW() {
    const filteredArr = car_sales.filter(vehicle => vehicle.maufacturer == 'BMW');

    filteredArr.forEach(vehicle => {
        console.log(`${vehicle.maufacturer} ${vehicle.model} S$${vehicle.resalePrice}`);
    });

}

// displayAllBMW();

// Q4
const counterMap = {};

car_sales.forEach(vehicle => {
    if (!counterMap[vehicle.maufacturer]) {
        counterMap[vehicle.maufacturer] = 1;
    } else {
        counterMap[vehicle.maufacturer]++;
    }
});

for (const key in counterMap) {
    console.log(`${key} number of cars ${counterMap[key]}`);
}